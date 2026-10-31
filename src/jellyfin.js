// Cliente mínimo de la API de Jellyfin. Solo se guarda el token, nunca la contraseña.

const Jellyfin = (() => {
  const CLIENT = 'C1 Tracker', VERSION = '1.0.0';

  function deviceId() {
    let id = store.get().deviceId;
    if (!id) { id = crypto.randomUUID(); store.set(s => { s.deviceId = id; }); }
    return id;
  }
  const conf = () => store.get().jellyfin;
  const authHeader = token =>
    `MediaBrowser Client="${CLIENT}", Device="Navegador", DeviceId="${deviceId()}", Version="${VERSION}"` +
    (token ? `, Token="${token}"` : '');

  async function api(path, { method = 'GET', body, query } = {}) {
    const c = conf();
    const url = new URL(c.server + path);
    for (const [k, v] of Object.entries(query || {})) if (v !== undefined) url.searchParams.set(k, v);
    const res = await fetch(url, {
      method,
      headers: { Authorization: authHeader(c.token), ...(body ? { 'Content-Type': 'application/json' } : {}) },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (res.status === 401) { logout(); throw new Error('La sesión de Jellyfin ha caducado. Vuelve a entrar.'); }
    if (!res.ok) throw new Error(`Jellyfin respondió ${res.status}`);
    return res.status === 204 ? null : res.json().catch(() => null);
  }

  async function login(server, username, password) {
    server = server.trim().replace(/\/+$/, '');
    if (!/^https?:\/\//.test(server)) server = 'http://' + server;
    let res;
    try {
      res = await fetch(server + '/Users/AuthenticateByName', {
        method: 'POST',
        headers: { Authorization: authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ Username: username, Pw: password }),
      });
    } catch {
      throw new Error('No se pudo conectar con el servidor. Revisa la dirección (p. ej. http://192.168.1.50:8096) y que esté encendido.');
    }
    if (res.status === 401) throw new Error('Usuario o contraseña incorrectos.');
    if (!res.ok) throw new Error(`El servidor respondió ${res.status}.`);
    const data = await res.json();
    store.set(s => { s.jellyfin = { server, token: data.AccessToken, userId: data.User.Id, userName: data.User.Name }; });
  }

  function logout() { store.set(s => { s.jellyfin = null; }); }
  const connected = () => !!conf()?.token;

  const imageUrl = (id, h = 360, type = 'Primary') =>
    `${conf().server}/Items/${id}/Images/${type}?fillHeight=${h}&quality=85&api_key=${conf().token}`;

  const listSeries = searchTerm => api('/Items', {
    query: {
      userId: conf().userId, includeItemTypes: 'Series', recursive: true, sortBy: 'SortName',
      fields: 'ProductionYear,ChildCount', searchTerm: searchTerm || undefined,
    },
  }).then(r => r.Items);

  const listMovies = () => api('/Items', {
    query: {
      userId: conf().userId, includeItemTypes: 'Movie', recursive: true, sortBy: 'SortName',
      fields: 'ProductionYear',
    },
  }).then(r => r.Items);

  const seasons = seriesId => api(`/Shows/${seriesId}/Seasons`, { query: { userId: conf().userId } }).then(r => r.Items);
  const episodes = (seriesId, seasonId) => api(`/Shows/${seriesId}/Episodes`, {
    query: { userId: conf().userId, seasonId, fields: 'Overview' },
  }).then(r => r.Items);

  // Busca "The Crown" T1E3 en la biblioteca del usuario.
  async function findEpisode(name, season, episode) {
    const series = (await listSeries(name)).find(s => s.Name.toLowerCase().includes(name.toLowerCase()));
    if (!series) return null;
    const eps = await api(`/Shows/${series.Id}/Episodes`, { query: { userId: conf().userId, season } }).then(r => r.Items);
    return eps.find(e => e.ParentIndexNumber === season && e.IndexNumber === episode) || null;
  }

  // Prepara la reproducción: HLS (Jellyfin convierte si hace falta) + subtítulos de texto en .vtt.
  async function playback(itemId) {
    const c = conf();
    const info = await api(`/Items/${itemId}/PlaybackInfo`, { method: 'POST', query: { userId: c.userId }, body: {} });
    const source = info.MediaSources[0];
    const q = new URLSearchParams({
      api_key: c.token, MediaSourceId: source.Id, DeviceId: deviceId(), PlaySessionId: info.PlaySessionId,
      VideoCodec: 'h264', AudioCodec: 'aac,mp3', TranscodingMaxAudioChannels: '2',
      VideoBitrate: '10000000', AudioBitrate: '192000', SegmentContainer: 'ts',
    });
    const subtitles = source.MediaStreams
      .filter(s => s.Type === 'Subtitle' && s.IsTextSubtitleStream)
      .map(s => ({
        label: s.DisplayTitle || s.Language || `Pista ${s.Index}`,
        lang: s.Language || '',
        url: `${c.server}/Videos/${itemId}/${source.Id}/Subtitles/${s.Index}/0/Stream.vtt?api_key=${c.token}`,
      }));
    return { url: `${c.server}/Videos/${itemId}/master.m3u8?${q}`, subtitles };
  }

  const markPlayed = itemId => api(`/Users/${conf().userId}/PlayedItems/${itemId}`, { method: 'POST' }).catch(() => {});

  return { api, login, logout, connected, conf, imageUrl, listSeries, listMovies, seasons, episodes, findEpisode, playback, markPlayed };
})();
