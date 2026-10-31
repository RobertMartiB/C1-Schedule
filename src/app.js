// ---- Estado guardado en el dispositivo ----
const store = (() => {
  const KEY = 'c1tracker:v2';
  const defaults = () => ({ done: {}, notes: {}, units: {}, cards: [], jellyfin: null, resume: {} });
  let state;
  try { state = { ...defaults(), ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { state = defaults(); }
  // Conserva la sesión de Jellyfin de la versión anterior
  try { if (!state.jellyfin) { const old = JSON.parse(localStorage.getItem('c1tracker:v1') || '{}'); if (old.jellyfin) state.jellyfin = old.jellyfin; if (old.deviceId) state.deviceId = old.deviceId; } } catch {}
  return {
    get: () => state,
    set(fn) { fn(state); try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {} },
    replace(s) { state = { ...defaults(), ...s }; this.set(() => {}); },
  };
})();

const $ = (sel, el = document) => el.querySelector(sel);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const today = () => iso(new Date());
const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const DAYS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const longDate = s => { const d = parse(s); return `${DAYS[d.getDay()]} ${d.getDate()} de ${MONTHS[d.getMonth()]}`; };
const shortDate = s => { const d = parse(s); return `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)}`; };
const daysBetween = (a, b) => Math.round((parse(b) - parse(a)) / 864e5);

// ---- Bloques de cada día (3 horas) ----
function dayBlocks(s) {
  const d = SCHEDULE[s];
  if (!d || d.rest) return [];
  const blocks = [];
  const m = d.main;
  if (m.kind === 'unit') {
    const u = unitById(m.unit), ses = SESSION[m.session];
    blocks.push({ id: 'main', time: '1 h', icon: ses.icon, text: ses.text(u), detail: ses.detail, link: `#unidad/${u.id}/${ses.tab}`, ready: !!UNITS[u.id] });
  } else {
    blocks.push({ id: 'main', time: m.kind === 'mock' ? '3h55' : '1 h', icon: m.kind === 'mock' ? '⏱️' : m.kind === 'leveltest' ? '🏁' : '🔁', text: m.text, detail: m.detail, ready: true });
  }
  if (m.kind !== 'mock') {
    const idx = m.kind === 'unit' ? SYLLABUS.findIndex(u => u.id === m.unit) : -1;
    const prev = idx > 0 ? SYLLABUS[idx - 1] : null;
    if (m.kind === 'unit' && m.session !== 'lectura' && prev && UNITS[prev.id])
      blocks.push({ id: 'read', time: '45 min', icon: '🔍', text: `Lectura en modo reto: ${UNITS[prev.id].reading.title}`, detail: 'Relee la lectura de la unidad anterior. Antes de abrir cada frase, di en voz alta su sujeto y su verbo principal.', link: `#unidad/${prev.id}/lectura`, ready: true });
    else
      blocks.push({ id: 'read', time: '45 min', icon: '📰', text: 'Lectura libre en inglés', detail: 'Un artículo de tu nivel que te interese (News in Levels, BBC Learning English…). Desmonta solo las frases que no entiendas a la primera.', ext: [['News in Levels', 'https://www.newsinlevels.com'], ['BBC Learning English', 'https://www.bbc.co.uk/learningenglish']], ready: true });
    if (d.input) blocks.push({ id: 'series', time: '45 min', icon: '🎬', text: `${d.input.name} · T${d.input.season}E${d.input.episode}`, detail: d.input.fresh ? 'Episodio nuevo con audio y subtítulos en inglés. Pausa cuando no entiendas una frase y apunta las expresiones nuevas.' : 'Vuelve a ver 15–20 minutos del episodio, esta vez intentando entenderlo sin mirar los subtítulos.', input: d.input, ready: true });
  }
  const due = Vocab.due(s).length;
  blocks.push({ id: 'vocab', time: '30 min', icon: '📇', text: due ? `Tarjetas de vocabulario (${due} por repasar)` : 'Tarjetas de vocabulario', detail: 'Repasa las tarjetas del día y añade las palabras nuevas de hoy.', link: '#vocabulario', ready: true });
  if (d.writing) blocks.push({ id: 'writing', time: '45 min', icon: '📝', text: 'Writing de la semana', detail: `${d.writing} Cuando lo tengas, pégaselo a Claude para que te lo corrija.`, ready: true });
  return blocks;
}

const isDone = (s, id) => (store.get().done[s] || []).includes(id);
function toggleDone(s, id) {
  store.set(st => { const set = new Set(st.done[s] || []); set.has(id) ? set.delete(id) : set.add(id); st.done[s] = [...set]; });
}
function dayStatus(s) {
  const b = dayBlocks(s);
  if (!b.length) return 'none';
  const n = b.filter(x => isDone(s, x.id)).length;
  if (n === b.length) return 'done';
  if (n > 0) return 'partial';
  return s < today() ? 'missed' : 'todo';
}
function streak() {
  let s = today(), n = 0;
  if (dayStatus(s) !== 'done') s = addDays(s, -1);
  for (let guard = 0; guard < 400 && SCHEDULE[s]; guard++) {
    const st = dayStatus(s);
    if (st === 'none') { s = addDays(s, -1); continue; }
    if (st !== 'done') break;
    n++; s = addDays(s, -1);
  }
  return n;
}
const currentLevel = s => levelById(SCHEDULE[s]?.level || (s < PLAN_START ? 'b1' : 'exam'));

// ---- Navegación ----
let selectedDate = null;
function route() {
  const [view, ...args] = (location.hash.slice(1) || 'hoy').split('/');
  document.querySelectorAll('nav.main a').forEach(a => a.classList.toggle('active', a.dataset.view === view || (view === 'unidad' && a.dataset.view === 'ruta')));
  const main = $('#main');
  const views = { hoy: renderToday, ruta: renderRoute, unidad: (m, a) => renderUnit(m, a[0], a[1]), vocabulario: m => Vocab.render(m), calendario: renderCalendar, series: (m, a) => renderSeries(m, a[0]), ajustes: renderSettings };
  (views[view] || renderToday)(main, args);
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);

// ---- HOY ----
function renderToday(main, args) {
  const t = today();
  let s = args[0] || selectedDate || t;
  if (s < PLAN_START && !args[0]) s = PLAN_START;
  if (s > PLAN_END && !args[0]) s = PLAN_END;
  selectedDate = s;
  const d = SCHEDULE[s], lv = currentLevel(s), blocks = dayBlocks(s);
  const toStart = daysBetween(t, PLAN_START);
  const lvRange = LEVEL_RANGES[lv.id];
  const lvDays = Object.keys(SCHEDULE).filter(x => x >= lvRange.from && x <= lvRange.to && !SCHEDULE[x].rest);
  const lvPct = Math.round(lvDays.filter(x => x <= t).length / lvDays.length * 100);
  const cardsDue = Vocab.due().length;
  const isToday = s === t;

  main.innerHTML = `
    <section class="levelbar" style="--c:${lv.color}">
      <div><span class="eyebrow">Nivel actual</span><b>${lv.name}</b><span class="muted small">${esc(lv.goal)}</span></div>
      <div class="lvtrack"><div style="width:${Math.max(0, Math.min(100, lvPct))}%"></div></div>
      <span class="muted small">${shortDate(lvRange.from)} → ${shortDate(lvRange.to)}</span>
    </section>
    <section class="stats">
      <div class="stat"><span class="num">${streak()}</span><span>días seguidos</span></div>
      <div class="stat"><span class="num">${cardsDue}</span><span>tarjetas por repasar</span></div>
      <div class="stat"><span class="num">${SYLLABUS.filter(u => unitStatus(u.id).pct === 100).length}/${SYLLABUS.length}</span><span>unidades completas</span></div>
    </section>
    ${toStart > 0 ? `<div class="banner">Empiezas el <b>${longDate(PLAN_START)}</b> (en ${toStart} día${toStart > 1 ? 's' : ''}). Puedes ir abriendo la unidad 1 si quieres adelantar.</div>` : ''}

    <div class="dayhead">
      <button class="icon" id="prev" aria-label="Día anterior">‹</button>
      <div><h1>${isToday ? 'Hoy · ' : ''}${longDate(s)}</h1>${d?.level ? `<span class="phase" style="--c:${lv.color}">${lv.name}</span>` : ''}</div>
      <button class="icon" id="next" aria-label="Día siguiente">›</button>
    </div>
    ${!isToday ? `<a class="back" href="#hoy/${t}">← Volver a hoy</a>` : ''}

    ${!d ? '<p class="empty">Este día está fuera del plan.</p>' : d.rest ? `<div class="restday">☕ <b>${esc(d.rest)}</b><p class="muted">Descansar también es parte del plan. Si te apetece, mira algo en inglés sin presión.</p></div>` : `
    <p class="muted small">Unas 3 horas en bloques. Haz el bloque principal cuando tengas la cabeza más fresca.</p>
    <ul class="tasks">
      ${blocks.map(b => `<li class="task ${isDone(s, b.id) ? 'done' : ''}">
        <label>
          <input type="checkbox" data-id="${b.id}" ${isDone(s, b.id) ? 'checked' : ''}>
          <span class="ico">${b.icon}</span>
          <span class="body">
            <span class="title">${esc(b.text)} <span class="time">${b.time}</span></span>
            <span class="detail">${esc(b.detail)}</span>
            ${b.link ? (b.ready ? `<a class="tag link" href="${b.link}">Abrir →</a>` : `<span class="tag">Unidad en preparación: pídele a Claude que la prepare</span>`) : ''}
            ${b.ext ? b.ext.map(([n, u]) => `<a class="tag link" href="${u}" target="_blank" rel="noopener">${n} ↗</a>`).join(' ') : ''}
            ${b.input ? `<button class="tag link watch">▶ Ver en Jellyfin</button>` : ''}
          </span>
        </label>
      </li>`).join('')}
    </ul>
    <label class="notes">
      <span>Notas del día (errores, palabras nuevas, dudas para Claude…)</span>
      <textarea id="note" rows="3">${esc(store.get().notes[s] || '')}</textarea>
    </label>`}`;

  $('#prev').onclick = () => { location.hash = `hoy/${addDays(s, -1)}`; };
  $('#next').onclick = () => { location.hash = `hoy/${addDays(s, 1)}`; };
  main.querySelectorAll('.tasks input').forEach(cb => cb.addEventListener('change', () => { toggleDone(s, cb.dataset.id); renderToday(main, [s]); }));
  main.querySelectorAll('.tasks a, .tasks button').forEach(a => a.addEventListener('click', e => e.stopPropagation()));
  $('#note')?.addEventListener('input', e => store.set(st => { if (e.target.value.trim()) st.notes[s] = e.target.value; else delete st.notes[s]; }));
  main.querySelector('.watch')?.addEventListener('click', async e => {
    e.preventDefault();
    if (!Jellyfin.connected()) { location.hash = 'series'; return; }
    const btn = e.currentTarget, inp = d.input; btn.disabled = true; btn.textContent = 'Buscando…';
    try {
      const ep = await Jellyfin.findEpisode(inp.name, inp.season, inp.episode);
      if (!ep) toast(`No encuentro "${inp.name}" T${inp.season}E${inp.episode} en tu Jellyfin.`); else openPlayer(ep);
    } catch (err) { toast(err.message); }
    finally { btn.disabled = false; btn.textContent = '▶ Ver en Jellyfin'; }
  });
}

// ---- RUTA ----
function renderRoute(main) {
  const t = today();
  main.innerHTML = `
    <h1>Tu ruta</h1>
    <p class="muted">De B1 a C1 con 3 horas al día. Cada unidad tiene teoría, práctica y una lectura desmontada.</p>
    ${LEVELS.map(lv => {
      const r = LEVEL_RANGES[lv.id], units = SYLLABUS.filter(u => u.level === lv.id);
      const now = t >= r.from && t <= r.to;
      return `<section class="lvl ${now ? 'now' : ''}" style="--c:${lv.color}">
        <header><h2>${lv.name}</h2><span class="muted small">${shortDate(r.from)} → ${shortDate(r.to)} · 🎬 ${esc(lv.series.name)} T${lv.series.season}</span></header>
        <p class="muted">${esc(lv.goal)}</p>
        ${units.length ? `<ol class="units">${units.map(u => {
          const st = unitStatus(u.id), n = SYLLABUS.indexOf(u) + 1;
          return `<li><a href="#unidad/${u.id}/teoria" class="${st.ready ? '' : 'pending'}">
            <span class="n">${n}</span>
            <span class="ut"><b>${esc(u.title)}</b><small>${esc(u.focus)}</small></span>
            <span class="us">${st.ready ? `<span class="ring" style="--p:${st.pct}">${st.pct}%</span>` : `<small>${UNIT_START[u.id] ? shortDate(UNIT_START[u.id]) : ''}</small>`}</span>
          </a></li>`;
        }).join('')}</ol>` : '<p>Formato de cada paper del examen, writings cronometrados y un simulacro completo cada sábado.</p>'}
      </section>`;
    }).join('')}`;
}

// ---- CALENDARIO ----
function renderCalendar(main) {
  const months = [];
  for (let d = parse(PLAN_START); d <= parse(PLAN_END); d = new Date(d.getFullYear(), d.getMonth() + 1, 1)) months.push([d.getFullYear(), d.getMonth()]);
  const t = today();
  main.innerHTML = `
    <h1>Calendario</h1>
    <div class="legend">${LEVELS.map(l => `<div class="leg" style="--c:${l.color}"><b>${l.name}</b><span>${shortDate(LEVEL_RANGES[l.id].from)} – ${shortDate(LEVEL_RANGES[l.id].to)}</span></div>`).join('')}</div>
    <div class="keys"><span class="k done"></span>Hecho <span class="k partial"></span>A medias <span class="k missed"></span>Atrasado</div>
    <div class="months">
      ${months.map(([y, m]) => {
        const first = new Date(y, m, 1), lead = (first.getDay() + 6) % 7, n = new Date(y, m + 1, 0).getDate();
        let cells = '';
        for (let i = 0; i < lead; i++) cells += '<div></div>';
        for (let day = 1; day <= n; day++) {
          const s = iso(new Date(y, m, day)), sd = SCHEDULE[s];
          const lv = sd?.level ? levelById(sd.level) : null;
          const title = sd?.rest || (sd?.main ? (sd.main.kind === 'unit' ? SESSION[sd.main.session].text(unitById(sd.main.unit)) : sd.main.text) : '');
          cells += sd
            ? `<a href="#hoy/${s}" class="cell ${dayStatus(s)} ${s === t ? 'today' : ''} ${sd.rest ? 'rest' : ''}" style="--c:${lv?.color || 'transparent'}" title="${esc(title)}">${day}</a>`
            : `<div class="cell off">${day}</div>`;
        }
        return `<div class="month"><h3>${MONTHS[m]} ${y}</h3><div class="grid"><span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span>${cells}</div></div>`;
      }).join('')}
    </div>`;
}

// ---- SERIES (Jellyfin) ----
let seriesCache = null, moviesCache = null, libraryKind = 'series';
async function renderSeries(main, arg) {
  if (!Jellyfin.connected()) {
    main.innerHTML = `
      <h1>Series y películas</h1>
      <form class="login" id="login">
        <p>Conecta tu servidor de Jellyfin para ver tus series y películas aquí mismo, con subtítulos en inglés.</p>
        <label>Servidor<input name="server" placeholder="http://192.168.1.50:8096" required value="${esc(store.get().lastServer || '')}"></label>
        <label>Usuario<input name="user" autocomplete="username" required></label>
        <label>Contraseña<input name="pass" type="password" autocomplete="current-password"></label>
        <button class="primary" type="submit">Conectar</button>
        <p class="muted small">La contraseña no se guarda: solo se guarda la sesión que te da el servidor.</p>
        ${location.protocol === 'https:' ? '<p class="muted small">⚠️ Desde la versión web solo funciona si tu Jellyfin usa <b>https</b>. Si es <b>http</b>, usa la app de escritorio.</p>' : ''}
        <p class="error" id="err"></p>
      </form>`;
    $('#login').addEventListener('submit', async e => {
      e.preventDefault();
      const f = e.target, btn = f.querySelector('button');
      btn.disabled = true; btn.textContent = 'Conectando…'; $('#err').textContent = '';
      try {
        store.set(s => { s.lastServer = f.server.value.trim(); });
        await Jellyfin.login(f.server.value, f.user.value, f.pass.value);
        seriesCache = moviesCache = null; route();
      } catch (err) { $('#err').textContent = err.message; btn.disabled = false; btn.textContent = 'Conectar'; }
    });
    return;
  }

  if (arg) return renderShow(main, arg);
  const c = Jellyfin.conf();
  const planNames = [...new Set(LEVELS.map(l => l.series.name.toLowerCase()))];
  main.innerHTML = `
    <div class="sethead"><h1>Series y películas</h1>
      <span class="muted small">${esc(c.userName)} @ ${esc(c.server)} · <a href="#" id="logout">Desconectar</a></span></div>
    <div class="seasons kindtabs">
      <button data-kind="series" class="${libraryKind === 'series' ? 'on' : ''}">📺 Series</button>
      <button data-kind="movies" class="${libraryKind === 'movies' ? 'on' : ''}">🎬 Películas</button>
    </div>
    <input class="search" id="q" placeholder="Buscar…">
    <div id="list"><p class="muted">Cargando…</p></div>`;
  $('#logout').addEventListener('click', e => { e.preventDefault(); Jellyfin.logout(); seriesCache = moviesCache = null; route(); });
  main.querySelectorAll('.kindtabs button').forEach(b => b.addEventListener('click', () => { libraryKind = b.dataset.kind; renderSeries(main); }));

  const movies = libraryKind === 'movies';
  try {
    if (movies) moviesCache ??= await Jellyfin.listMovies();
    else seriesCache ??= await Jellyfin.listSeries();
  } catch (err) { $('#list').innerHTML = `<p class="error">${esc(err.message)}</p>`; return; }
  const all = movies ? moviesCache : seriesCache;

  const draw = q => {
    const items = all.filter(s => !q || s.Name.toLowerCase().includes(q.toLowerCase()));
    const inPlan = movies ? [] : items.filter(s => planNames.some(n => s.Name.toLowerCase().includes(n)));
    const card = s => `<a class="poster" ${movies ? `href="#" data-movie="${s.Id}"` : `href="#series/${s.Id}"`}>
      <img loading="lazy" src="${Jellyfin.imageUrl(s.Id, 360)}" alt="" onerror="this.style.visibility='hidden'">
      <span>${esc(s.Name)}</span><small>${s.ProductionYear || ''}${s.UserData?.Played ? ' · ✓ vista' : ''}</small></a>`;
    $('#list').innerHTML = `
      ${inPlan.length && !q ? `<h2>Del plan</h2><div class="posters">${inPlan.map(card).join('')}</div><h2>Todas</h2>` : ''}
      ${items.length ? `<div class="posters">${items.map(card).join('')}</div>` : `<p class="muted">No hay ${movies ? 'películas' : 'series'} que coincidan.</p>`}`;
    $('#list').querySelectorAll('[data-movie]').forEach(a => a.addEventListener('click', e => {
      e.preventDefault(); openPlayer(all.find(m => m.Id === a.dataset.movie));
    }));
  };
  draw('');
  $('#q').addEventListener('input', e => draw(e.target.value));
}

async function renderShow(main, seriesId) {
  main.innerHTML = '<p class="muted">Cargando…</p>';
  try {
    const seasons = await Jellyfin.seasons(seriesId);
    const name = seriesCache?.find(s => s.Id === seriesId)?.Name || seasons[0]?.SeriesName || '';
    main.innerHTML = `
      <a class="back" href="#series">← Series</a>
      <div class="show">
        <img src="${Jellyfin.imageUrl(seriesId, 420)}" alt="" onerror="this.remove()">
        <div><h1>${esc(name)}</h1>
          <div class="seasons">${seasons.map((s, i) => `<button data-id="${s.Id}" class="${i === 0 ? 'on' : ''}">${esc(s.Name)}</button>`).join('')}</div>
        </div>
      </div>
      <ol class="episodes" id="eps"></ol>`;
    const load = async seasonId => {
      $('#eps').innerHTML = '<p class="muted">Cargando…</p>';
      const eps = await Jellyfin.episodes(seriesId, seasonId);
      $('#eps').innerHTML = eps.map(e => `<li data-id="${e.Id}">
        <img loading="lazy" src="${Jellyfin.imageUrl(e.Id, 180)}" alt="" onerror="this.style.visibility='hidden'">
        <div><b>${e.IndexNumber ?? ''}. ${esc(e.Name)}</b> ${e.UserData?.Played ? '<span class="seen">✓ visto</span>' : ''}
        <p>${esc((e.Overview || '').slice(0, 200))}</p></div></li>`).join('');
      $('#eps').querySelectorAll('li').forEach((li, i) => li.addEventListener('click', () => openPlayer(eps[i])));
    };
    main.querySelectorAll('.seasons button').forEach(b => b.addEventListener('click', () => {
      main.querySelectorAll('.seasons button').forEach(x => x.classList.toggle('on', x === b));
      load(b.dataset.id);
    }));
    if (seasons[0]) load(seasons[0].Id);
  } catch (err) { main.innerHTML = `<a class="back" href="#series">← Series</a><p class="error">${esc(err.message)}</p>`; }
}

// ---- Reproductor ----
let hls = null;
async function openPlayer(ep) {
  const dlg = $('#player'), video = $('#video');
  $('#ptitle').textContent = ep.Type === 'Movie'
    ? `${ep.Name}${ep.ProductionYear ? ` (${ep.ProductionYear})` : ''}`
    : `${ep.SeriesName || ''} · T${ep.ParentIndexNumber}E${ep.IndexNumber} · ${ep.Name}`;
  dlg.showModal();
  try {
    const { url, subtitles } = await Jellyfin.playback(ep.Id);
    video.querySelectorAll('track').forEach(t => t.remove());
    const englishIdx = subtitles.findIndex(s => /^(en|eng)$/i.test(s.lang) || /english|ingl/i.test(s.label));
    subtitles.forEach((s, i) => {
      const tr = document.createElement('track');
      Object.assign(tr, { kind: 'subtitles', label: s.label, srclang: s.lang, src: s.url, default: i === englishIdx });
      video.appendChild(tr);
    });
    const resumeAt = store.get().resume[ep.Id] || 0;
    const start = () => {
      if (resumeAt > 30) video.currentTime = resumeAt;
      video.play().catch(() => {});
      [...video.textTracks].forEach((t, i) => { t.mode = i === englishIdx ? 'showing' : 'disabled'; });
    };
    if (video.canPlayType('application/vnd.apple.mpegurl')) { video.src = url; video.addEventListener('loadedmetadata', start, { once: true }); }
    else if (window.Hls?.isSupported()) {
      hls = new Hls(); hls.loadSource(url); hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, start);
      hls.on(Hls.Events.ERROR, (_, d) => d.fatal && toast('Error de reproducción. Revisa que el servidor permita transcodificar.'));
    } else toast('Tu navegador no puede reproducir este vídeo.');
    if (!subtitles.length) toast('Este episodio no tiene subtítulos de texto en el servidor.');
    let last = 0;
    video.ontimeupdate = () => {
      if (Math.abs(video.currentTime - last) < 10) return;
      last = video.currentTime;
      store.set(s => { s.resume[ep.Id] = Math.floor(video.currentTime); });
    };
    video.onended = () => { store.set(s => { delete s.resume[ep.Id]; }); Jellyfin.markPlayed(ep.Id); };
  } catch (err) { toast(err.message); closePlayer(); }
}
function closePlayer() {
  const video = $('#video');
  video.pause(); hls?.destroy(); hls = null;
  video.removeAttribute('src'); video.load();
  $('#player').close();
}

// ---- AJUSTES ----
function renderSettings(main) {
  main.innerHTML = `
    <h1>Ajustes</h1>
    <h2>Copia de seguridad</h2>
    <p class="muted">Tu progreso se guarda en este dispositivo. Exporta una copia de vez en cuando, y úsala para pasar tu progreso del ordenador al móvil o al revés.</p>
    <div class="row">
      <button id="export">Exportar progreso</button>
      <label class="btn">Importar<input type="file" id="import" accept=".json" hidden></label>
    </div>`;
  $('#export').addEventListener('click', () => {
    const { jellyfin, ...data } = store.get();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
    a.download = `ingles-progreso-${today()}.json`; a.click();
  });
  $('#import').addEventListener('change', async e => {
    try { store.replace({ ...JSON.parse(await e.target.files[0].text()), jellyfin: store.get().jellyfin }); toast('Progreso importado'); }
    catch { toast('Ese archivo no es una copia válida.'); }
  });
}

function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.timer); toast.timer = setTimeout(() => t.classList.remove('show'), 3500);
}

$('#pclose').addEventListener('click', closePlayer);
$('#player').addEventListener('close', () => { if (hls || $('#video').src) closePlayer(); });
route();
