// Sincroniza el progreso entre dispositivos (móvil, ordenador…) usando tu propio servidor Jellyfin.
// Se guarda en las preferencias de tu usuario de Jellyfin, así que no hace falta ningún servicio externo.
const Sync = (() => {
  const PREF_ID = ACTIVE_COURSE.syncId, CLIENT = 'c1tracker', CHUNK = 3000;
  let timer = null, busy = false, applying = false;
  let status = { state: 'off', at: null, error: null };

  const enabled = () => Jellyfin.connected() && store.get().syncOn !== false;
  const query = () => ({ userId: Jellyfin.conf().userId, client: CLIENT });

  function pick(s) { return { done: s.done || {}, notes: s.notes || {}, units: s.units || {}, cards: s.cards || [] }; }

  // Une dos copias sin perder nada: lo hecho en cualquiera de los dos dispositivos cuenta.
  function merge(a, b) {
    const out = { done: {}, notes: { ...b.notes, ...a.notes }, units: {}, cards: [] };
    for (const d of new Set([...Object.keys(a.done), ...Object.keys(b.done)])) out.done[d] = [...new Set([...(a.done[d] || []), ...(b.done[d] || [])])];
    for (const [k, v] of Object.entries(b.notes)) if (!a.notes[k]?.trim()) out.notes[k] = v;
    for (const id of new Set([...Object.keys(a.units), ...Object.keys(b.units)])) {
      const x = a.units[id] || {}, y = b.units[id] || {}, ex = { ...(y.ex || {}) };
      for (const [i, ok] of Object.entries(x.ex || {})) ex[i] = ok || ex[i] === true;
      out.units[id] = { theory: !!(x.theory || y.theory), reading: !!(x.reading || y.reading), ex, sent: { ...(y.sent || {}), ...(x.sent || {}) } };
    }
    const byWord = new Map();
    for (const c of [...b.cards, ...a.cards]) {
      const key = c.w.toLowerCase(), prev = byWord.get(key);
      if (!prev || (c.seen || 0) > (prev.seen || 0) || ((c.seen || 0) === (prev.seen || 0) && c.due > prev.due)) byWord.set(key, c);
    }
    out.cards = [...byWord.values()];
    return out;
  }

  async function now() {
    if (!enabled() || busy) return;
    busy = true; status = { ...status, state: 'syncing' }; paint();
    try {
      const dto = await Jellyfin.api(`/DisplayPreferences/${PREF_ID}`, { query: query() });
      const prefs = dto.CustomPrefs || {};
      const n = Number(prefs['c1sync.n'] || 0);
      let remote = { done: {}, notes: {}, units: {}, cards: [] };
      if (n) { try { remote = { ...remote, ...JSON.parse(Array.from({ length: n }, (_, i) => prefs[`c1sync.${i}`] || '').join('')) }; } catch {} }
      const merged = merge(pick(store.get()), remote);
      applying = true;
      store.set(s => Object.assign(s, merged));
      applying = false;
      const json = JSON.stringify(merged);
      const custom = Object.fromEntries(Object.entries(prefs).filter(([k]) => !k.startsWith('c1sync.')));
      const parts = Math.ceil(json.length / CHUNK) || 1;
      for (let i = 0; i < parts; i++) custom[`c1sync.${i}`] = json.slice(i * CHUNK, (i + 1) * CHUNK);
      custom['c1sync.n'] = String(parts);
      custom['c1sync.at'] = new Date().toISOString();
      await Jellyfin.api(`/DisplayPreferences/${PREF_ID}`, { method: 'POST', query: query(), body: { ...dto, Id: PREF_ID, Client: CLIENT, CustomPrefs: custom } });
      status = { state: 'ok', at: new Date(), error: null };
      if (typeof onSynced === 'function') onSynced();
    } catch (err) {
      applying = false;
      status = { state: 'error', at: status.at, error: err.message };
    } finally { busy = false; paint(); }
  }

  // Tras cada cambio, espera unos segundos y sincroniza (agrupa muchos clics en un solo envío)
  function schedule() {
    if (applying || !enabled()) return;
    clearTimeout(timer); timer = setTimeout(now, 4000);
  }

  let onSynced = null;
  const setOnSynced = fn => { onSynced = fn; };

  function label() {
    if (!Jellyfin.connected()) return 'Conecta Jellyfin en la pestaña Series para sincronizar entre dispositivos.';
    if (store.get().syncOn === false) return 'Sincronización desactivada.';
    if (status.state === 'syncing') return 'Sincronizando…';
    if (status.state === 'error') return `No se ha podido sincronizar: ${status.error}`;
    if (status.at) return `Sincronizado a las ${status.at.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}.`;
    return 'Lista para sincronizar.';
  }
  function paint() { document.querySelectorAll('[data-sync-label]').forEach(el => { el.textContent = label(); }); document.querySelectorAll('.syncdot').forEach(d => d.classList.toggle('on', status.state === 'ok')); }

  return { now, schedule, merge, label, paint, enabled, setOnSynced };
})();
