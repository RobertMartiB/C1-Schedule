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
    set(fn) { fn(state); try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {} if (typeof Sync !== 'undefined') Sync.schedule(); mirrorStore(); },
    replace(s) { state = { ...defaults(), ...s }; this.set(() => {}); },
  };
})();

// En Android, copia también el estado en el almacenamiento nativo (sobrevive a limpiezas del navegador interno)
const NativePrefs = window.Capacitor?.Plugins?.Preferences;
let mirrorTimer = null;
function mirrorStore() {
  if (!NativePrefs) return;
  clearTimeout(mirrorTimer);
  mirrorTimer = setTimeout(() => NativePrefs.set({ key: 'c1tracker:v2', value: JSON.stringify(store.get()) }).catch(() => {}), 800);
}

const $ = (sel, el = document) => el.querySelector(sel);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const today = () => iso(new Date());
const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
const DAYS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const longDate = s => { const d = parse(s); return `${DAYS[d.getDay()]} ${d.getDate()} de ${MONTHS[d.getMonth()]}`; };
const shortDate = s => { const d = parse(s); return `${d.getDate()} ${MONTHS[d.getMonth()].slice(0, 3)}`; };
const daysBetween = (a, b) => Math.round((parse(b) - parse(a)) / 864e5);

// ---- Bloques de cada día (3 horas) ----
// Una sesión de unidad cuenta como hecha en cuanto la completas en la unidad (no hace falta marcarla).
function sessionDone(uid, session) {
  const st = unitStatus(uid);
  if (!st.ready) return false;
  return session === 'teoria' ? st.theory : session === 'practica' ? st.exOk === st.exTotal : session === 'lectura' ? st.reading : false;
}
// Primer paso pendiente desde una unidad: su sesión sin hacer o la teoría de la siguiente unidad.
function nextStep(uid) {
  for (let i = SYLLABUS.findIndex(u => u.id === uid); i >= 0 && i < SYLLABUS.length; i++) {
    const u = SYLLABUS[i];
    if (!UNITS[u.id]) return null;
    const ses = ['teoria', 'practica', 'lectura'].find(x => !sessionDone(u.id, x));
    if (ses) return { unit: u.id, session: ses };
  }
  return null;
}
function unitBlock(uid, session, id, kickerPrefix = '') {
  const u = unitById(uid), ses = SESSION[session], n = SYLLABUS.indexOf(u) + 1;
  const ic = { teoria: 'open', practica: 'pencil', lectura: 'search', repaso: 'repeat' }[session];
  return { id, min: 60, icon: ic, kicker: `${kickerPrefix}Unidad ${n} · ${ses.label}`, text: u.title, detail: ses.detail, link: `#unidad/${u.id}/${ses.tab}`, ready: !!UNITS[u.id], auto: sessionDone(uid, session), cta: session === 'teoria' ? 'Empezar la teoría' : session === 'practica' ? 'Hacer los ejercicios' : session === 'lectura' ? 'Abrir la lectura' : 'Repasar' };
}
const blockDone = (s, b) => b.auto || isDone(s, b.id);

function dayBlocks(s) {
  const d = SCHEDULE[s];
  if (!d || d.rest) return [];
  const blocks = [];
  const m = d.main;
  if (m.kind === 'unit') {
    const main = unitBlock(m.unit, m.session, 'main');
    blocks.push(main);
    // Si hoy ya está hecho lo que tocaba, se propone el siguiente paso para adelantar
    if (s === today() && blockDone(s, main)) {
      const nx = nextStep(m.unit);
      if (nx && !(nx.unit === m.unit && nx.session === m.session)) blocks.push({ ...unitBlock(nx.unit, nx.session, 'ahead', 'Para adelantar · '), extra: true });
    }
  } else {
    const ic = m.kind === 'mock' ? 'timer' : m.kind === 'leveltest' ? 'trophy' : m.kind === 'exam' ? 'flag' : 'repeat';
    blocks.push({ id: 'main', min: m.kind === 'mock' ? 235 : 60, icon: ic, kicker: m.kind === 'mock' ? 'Simulacro' : m.kind === 'exam' ? 'Formato del examen' : 'Repaso', text: m.text.replace(/^Formato del examen: /, ''), detail: m.detail, ready: true });
  }
  if (m.kind !== 'mock') {
    const idx = m.kind === 'unit' ? SYLLABUS.findIndex(u => u.id === m.unit) : -1;
    const prev = idx > 0 ? SYLLABUS[idx - 1] : null;
    if (m.kind === 'unit' && m.session !== 'lectura' && prev && UNITS[prev.id])
      blocks.push({ id: 'read', min: 45, icon: 'search', kicker: 'Lectura en modo reto', text: UNITS[prev.id].reading.title, detail: 'Antes de abrir cada frase, di en voz alta su sujeto y su verbo principal.', link: `#unidad/${prev.id}/lectura`, ready: true, cta: 'Abrir la lectura' });
    else
      blocks.push({ id: 'read', min: 45, icon: 'news', kicker: 'Lectura libre', text: 'Un artículo de tu nivel', detail: 'Elige algo que te interese. Desmonta solo las frases que no entiendas a la primera.', ext: [['News in Levels', 'https://www.newsinlevels.com'], ['BBC Learning English', 'https://www.bbc.co.uk/learningenglish']], ready: true });
    if (d.input) blocks.push({ id: 'series', min: 45, icon: 'film', kicker: d.input.fresh ? 'Episodio nuevo' : 'Repaso del episodio', text: `${d.input.name} · T${d.input.season}E${d.input.episode}`, detail: d.input.fresh ? 'Audio y subtítulos en inglés. La película se parará de vez en cuando para proponerte un reto.' : 'Vuelve a ver 15–20 minutos intentando entenderlo sin mirar los subtítulos.', input: d.input, ready: true, cta: 'Ver en Jellyfin' });
  }
  const due = Vocab.due(s).length;
  blocks.push({ id: 'vocab', min: 30, icon: 'cards', kicker: 'Vocabulario', text: due ? `${due} tarjeta${due > 1 ? 's' : ''} por repasar` : 'Repasa tus tarjetas', detail: 'Repasa las del día y añade las palabras nuevas que hayas visto hoy.', link: '#vocabulario', ready: true, cta: 'Repasar' });
  if (d.writing) blocks.push({ id: 'writing', min: 45, icon: 'file', kicker: 'Writing de la semana', text: d.writing.replace(/ \(.*\)\.?$/, ''), detail: `${d.writing} Cuando lo tengas, pégaselo a Claude para que te lo corrija.`, ready: true });
  return blocks;
}

const isDone = (s, id) => (store.get().done[s] || []).includes(id);
function toggleDone(s, id) {
  store.set(st => { const set = new Set(st.done[s] || []); set.has(id) ? set.delete(id) : set.add(id); st.done[s] = [...set]; });
}
function dayStatus(s) {
  const b = dayBlocks(s).filter(x => !x.extra);
  if (!b.length) return 'none';
  const n = b.filter(x => blockDone(s, x)).length;
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
const fmtMin = m => (m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60} min` : ''}` : `${m} min`);
const relDay = (t, s) => { const n = daysBetween(t, s); return n === 1 ? 'Mañana' : n === -1 ? 'Ayer' : n > 0 ? `Dentro de ${n} días` : `Hace ${-n} días`; };
const userName = () => { const n = store.get().jellyfin?.userName || store.get().lastUser || ''; return n ? n[0].toUpperCase() + n.slice(1) : ''; };

// ---- Navegación ----
let selectedDate = null;
function route() {
  const [view, ...args] = (location.hash.slice(1) || 'hoy').split('/');
  const section = { unidad: 'ruta', calendario: 'ruta' }[view] || view;
  document.querySelectorAll('nav.main a').forEach(a => a.classList.toggle('active', a.dataset.view === section));
  const main = $('#main');
  const views = { hoy: renderToday, ruta: renderRoute, unidad: (m, a) => renderUnit(m, a[0], a[1]), libro: renderBook, vocabulario: m => Vocab.render(m), calendario: renderCalendar, series: (m, a) => renderSeries(m, a[0]), ajustes: renderSettings };
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
  const lvRange = LEVEL_RANGES[lv.id];
  const lvDays = Object.keys(SCHEDULE).filter(x => x >= lvRange.from && x <= lvRange.to && !SCHEDULE[x].rest);
  const lvPct = Math.max(0, Math.min(100, Math.round(lvDays.filter(x => x < t).length / lvDays.length * 100)));
  const toStart = daysBetween(t, PLAN_START);
  const isToday = s === t;
  const core = blocks.filter(b => !b.extra);
  const pending = blocks.filter(b => !blockDone(s, b));
  const next = pending[0];
  const left = pending.filter(b => !b.extra).reduce((a, b) => a + b.min, 0);
  const hour = new Date().getHours();
  const hello = hour < 6 ? 'Buenas noches' : hour < 14 ? 'Buenos días' : hour < 21 ? 'Buenas tardes' : 'Buenas noches';
  const name = userName();
  const dateLabel = longDate(s);

  main.innerHTML = `
    <header class="today-head">
      <div>
        <p class="overline">${isToday ? `<span class="cap">${dateLabel}</span>` : relDay(t, s)}</p>
        <h1>${isToday ? `${hello}${name ? `, ${esc(name)}` : ''}` : `<span class="cap">${dateLabel}</span>`}</h1>
      </div>
      <div class="daynav">
        <button class="icon" id="prev" aria-label="Día anterior">${icon('left')}</button>
        ${!isToday ? `<a class="btn small" href="#hoy/${t}">Hoy</a>` : ''}
        <button class="icon" id="next" aria-label="Día siguiente">${icon('right')}</button>
      </div>
    </header>

    <div class="chips">
      <a class="chip-stat" href="#ruta" style="--c:${lv.color}"><span class="dot"></span>Nivel ${lv.name}<b>${lvPct}%</b></a>
      <span class="chip-stat">${icon('flame')}Racha<b>${streak()} d</b></span>
      <a class="chip-stat" href="#vocabulario">${icon('cards')}Tarjetas<b>${Vocab.due().length}</b></a>
    </div>

    ${toStart > 0 && isToday ? `<div class="notice">${icon('info')}<span>Tu plan empieza el <b>${longDate(PLAN_START)}</b>. Puedes ir mirando la unidad 1.</span></div>` : ''}

    ${!d ? `<div class="empty-card">${icon('calendar')}<p>Este día está fuera del plan.</p></div>`
      : d.rest ? `<div class="empty-card">${icon('coffee')}<h2>${esc(d.rest.split(':')[0])}</h2><p>Hoy toca descansar. Si te apetece, mira algo en inglés sin presión.</p></div>`
      : `
    ${next ? `
    <section class="next" style="--c:${lv.color}">
      <div class="next-top"><span class="overline">Ahora toca</span><span class="pill">${icon('clock')}${fmtMin(next.min)}</span></div>
      <div class="next-main">
        <span class="next-ic">${icon(next.icon)}</span>
        <div><span class="kicker">${esc(next.kicker)}</span><h2>${esc(next.text)}</h2></div>
      </div>
      <p class="next-detail">${esc(next.detail)}</p>
      <div class="row">
        ${next.input ? `<button class="primary watch" data-act="watch">${icon('play')}${next.cta}</button>`
          : next.link ? (next.ready ? `<a class="btn primary" href="${next.link}">${next.cta || 'Abrir'}${icon('arrow')}</a>` : `<span class="muted small">Esta unidad aún no está lista: pídele a Claude que la prepare.</span>`)
          : next.ext ? next.ext.map(([n, u], i) => `<a class="btn ${i ? '' : 'primary'}" href="${u}" target="_blank" rel="noopener">${n}</a>`).join('') : ''}
        ${next.link && next.ready ? '' : `<button class="ghostbtn" data-done="${next.id}">${icon('check')}Marcar como hecho</button>`}
      </div>
    </section>` : `
    <section class="next done-all">${icon('trophy')}<div><h2>Día completado</h2><p class="muted">Buen trabajo. Mañana más.</p></div></section>`}

    <section class="plan">
      <div class="plan-head"><h3>Plan del día</h3><span class="muted small">${core.filter(b => blockDone(s, b)).length} de ${core.length}${left ? ` · quedan ${fmtMin(left)}` : ''}</span></div>
      <div class="segs">${core.map(b => `<i class="${blockDone(s, b) ? 'on' : ''}"></i>`).join('')}</div>
      <ul class="rows">
        ${blocks.map(b => `<li class="${blockDone(s, b) ? 'done' : ''} ${b === next ? 'current' : ''} ${b.extra ? 'extra' : ''}">
          <button class="tick" data-done="${b.id}" ${b.auto ? 'data-auto="1"' : ''} aria-label="${blockDone(s, b) ? 'Desmarcar' : 'Marcar como hecho'}">${icon('check')}</button>
          <button class="rowmain" data-open="${b.id}">
            <span class="ric">${icon(b.icon)}</span>
            <span class="rt"><small>${esc(b.kicker)}</small><b>${esc(b.text)}</b></span>
            <span class="rmin">${fmtMin(b.min)}</span>
          </button>
        </li>`).join('')}
      </ul>
    </section>

    <details class="notes-box" ${store.get().notes[s] ? 'open' : ''}>
      <summary>${icon('pencil')}Notas del día</summary>
      <textarea id="note" rows="4" placeholder="Errores, palabras nuevas, dudas para Claude…">${esc(store.get().notes[s] || '')}</textarea>
    </details>`}`;

  $('#prev').onclick = () => { location.hash = `hoy/${addDays(s, -1)}`; };
  $('#next').onclick = () => { location.hash = `hoy/${addDays(s, 1)}`; };
  main.querySelectorAll('[data-done]').forEach(b => b.onclick = () => {
    if (b.dataset.auto) { toast('Esto se marca solo al terminarlo en la unidad.'); return; }
    toggleDone(s, b.dataset.done); renderToday(main, [s]);
  });
  main.querySelectorAll('[data-open]').forEach(b => b.onclick = () => {
    const blk = blocks.find(x => x.id === b.dataset.open);
    if (blk.input) return watchToday(blk.input, b);
    if (blk.link && blk.ready) location.hash = blk.link.slice(1);
    else if (blk.ext) window.open(blk.ext[0][1], '_blank', 'noopener');
    else toast(blk.detail);
  });
  $('#note')?.addEventListener('input', e => store.set(st => { if (e.target.value.trim()) st.notes[s] = e.target.value; else delete st.notes[s]; }));
  main.querySelector('[data-act="watch"]')?.addEventListener('click', e => watchToday(d.input, e.currentTarget));
}

async function watchToday(inp, btn) {
  if (!Jellyfin.connected()) { toast('Conecta tu Jellyfin primero.'); location.hash = 'series'; return; }
  const old = btn.innerHTML; btn.disabled = true; btn.textContent = 'Buscando…';
  try {
    const ep = await Jellyfin.findEpisode(inp.name, inp.season, inp.episode);
    if (!ep) toast(`No encuentro "${inp.name}" T${inp.season}E${inp.episode} en tu Jellyfin.`); else openPlayer(ep);
  } catch (err) { toast(err.message); }
  finally { btn.disabled = false; btn.innerHTML = old; }
}

// ---- RUTA ----
function renderRoute(main) {
  const t = today();
  const curUnit = SCHEDULE[t]?.main?.unit || (t < PLAN_START ? 'u01' : null);
  main.innerHTML = `
    <header class="page-head"><div><h1>Tu ruta</h1><p class="muted">De B1 a C1, unidad a unidad.</p></div><a class="btn small" href="#calendario">${icon('calendar')}Calendario</a></header>
    ${LEVELS.map(lv => {
      const r = LEVEL_RANGES[lv.id], units = SYLLABUS.filter(u => u.level === lv.id);
      const now = (t >= r.from && t <= r.to) || (t < PLAN_START && lv.id === 'b1');
      const done = units.filter(u => unitStatus(u.id).pct === 100).length;
      return `<section class="lvl ${now ? 'now' : ''}" style="--c:${lv.color}">
        <header>
          <div><h2>${lv.name}${now ? '<span class="nowtag">Ahora</span>' : ''}</h2><p class="muted small">${esc(lv.goal)}</p></div>
          <div class="lvmeta"><span>${shortDate(r.from)} – ${shortDate(r.to)}</span>${units.length ? `<b>${done}/${units.length}</b>` : ''}</div>
        </header>
        ${units.length ? `<ol class="units">${units.map(u => {
          const st = unitStatus(u.id), n = SYLLABUS.indexOf(u) + 1;
          return `<li><a href="#unidad/${u.id}/teoria" class="${st.ready ? '' : 'pending'} ${u.id === curUnit ? 'cur' : ''}">
            <span class="n ${st.pct === 100 ? 'ok' : ''}">${st.pct === 100 ? icon('check') : n}</span>
            <span class="ut"><b>${esc(u.title)}</b><small>${esc(u.focus)}</small></span>
            <span class="us">${!st.ready ? `<small>${UNIT_START[u.id] ? shortDate(UNIT_START[u.id]) : ''}</small>` : st.pct && st.pct < 100 ? `<span class="ring" style="--p:${st.pct}">${st.pct}</span>` : icon('right', 'chev')}</span>
          </a></li>`;
        }).join('')}</ol>` : `<p class="muted small">Formato de cada paper, writings cronometrados y un simulacro completo cada sábado.</p>`}
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
        ${store.get().jellyfin?.expired ? '<p class="banner">Tu sesión ha caducado. Vuelve a escribir la contraseña: el resto se mantiene.</p>' : ''}
        <label>Usuario<input name="user" autocomplete="username" required value="${esc(store.get().lastUser || '')}"></label>
        <label>Contraseña<input name="pass" type="password" autocomplete="current-password"></label>
        <button class="primary" type="submit">Conectar</button>
        <p class="muted small">La contraseña no se guarda: solo se guarda la sesión que te da el servidor.</p>
        ${location.protocol === 'https:' ? '<p class="muted small">Desde la versión web solo funciona si tu Jellyfin usa <b>https</b>. Si es <b>http</b>, usa la app de escritorio.</p>' : ''}
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
      <button data-kind="series" class="${libraryKind === 'series' ? 'on' : ''}">Series</button>
      <button data-kind="movies" class="${libraryKind === 'movies' ? 'on' : ''}">Películas</button>
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
      <span>${esc(s.Name)}</span><small>${s.ProductionYear || ''}${s.UserData?.Played ? ' · vista' : ''}</small></a>`;
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
        <div><b>${e.IndexNumber ?? ''}. ${esc(e.Name)}</b> ${e.UserData?.Played ? `<span class="seen">${icon('check')}visto</span>` : ''}
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

// ---- Reproductor con retos ----
// Cada X minutos la película se para y aparece un reto encima del vídeo: traducir la última frase
// o resumir en inglés lo que ha pasado. Los subtítulos en español (si existen) sirven para comprobar.
let hls = null, playing = null;
const cueText = c => (c?.text || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

async function openPlayer(ep) {
  const dlg = $('#player'), video = $('#video');
  const title = ep.Type === 'Movie' ? `${ep.Name}${ep.ProductionYear ? ` (${ep.ProductionYear})` : ''}` : `${ep.SeriesName || ''} · T${ep.ParentIndexNumber}E${ep.IndexNumber} · ${ep.Name}`;
  $('#ptitle').textContent = title;
  $('#quiz').hidden = true;
  dlg.showModal();
  try {
    const { url, subtitles } = await Jellyfin.playback(ep.Id);
    video.querySelectorAll('track').forEach(t => t.remove());
    const isEn = s => /^(en|eng)$/i.test(s.lang) || /english|ingl/i.test(s.label);
    const isEs = s => /^(es|spa)$/i.test(s.lang) || /spanish|españ|espan|castellano/i.test(s.label);
    const enIdx = subtitles.findIndex(isEn), esIdx = subtitles.findIndex(isEs);
    subtitles.forEach((s, i) => {
      const tr = document.createElement('track');
      Object.assign(tr, { kind: 'subtitles', label: s.label, srclang: s.lang, src: s.url, default: i === enIdx });
      video.appendChild(tr);
    });
    playing = { ep, title, enIdx, esIdx, lastQuiz: 0, n: 0 };
    const resumeAt = store.get().resume[ep.Id] || 0;
    const start = () => {
      if (resumeAt > 30) video.currentTime = resumeAt;
      playing.lastQuiz = video.currentTime;
      video.play().catch(() => {});
      // inglés visible; español cargado pero oculto, para poder comprobar las traducciones
      [...video.textTracks].forEach((t, i) => { t.mode = i === enIdx ? 'showing' : i === esIdx ? 'hidden' : 'disabled'; });
    };
    if (video.canPlayType('application/vnd.apple.mpegurl')) { video.src = url; video.addEventListener('loadedmetadata', start, { once: true }); }
    else if (window.Hls?.isSupported()) {
      hls = new Hls(); hls.loadSource(url); hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, start);
      hls.on(Hls.Events.ERROR, (_, d) => d.fatal && toast('Error de reproducción. Revisa que el servidor permita transcodificar.'));
    } else toast('Tu navegador no puede reproducir este vídeo.');
    if (enIdx < 0) toast('Este episodio no tiene subtítulos en inglés en el servidor: los retos de traducción no funcionarán.');
    let last = 0;
    video.ontimeupdate = () => {
      const every = quizEvery();
      if (every && !video.paused && video.currentTime - playing.lastQuiz >= every * 60) showQuiz();
      if (Math.abs(video.currentTime - last) < 10) return;
      last = video.currentTime;
      store.set(s => { s.resume[ep.Id] = Math.floor(video.currentTime); });
    };
    video.onended = () => { store.set(s => { delete s.resume[ep.Id]; }); Jellyfin.markPlayed(ep.Id); };
  } catch (err) { toast(err.message); closePlayer(); }
}

const quizEvery = () => store.get().quizEvery ?? 10; // minutos; 0 = sin retos

function lastCues(trackIdx, t, n = 2) {
  const tr = $('#video').textTracks[trackIdx];
  if (!tr?.cues) return [];
  return [...tr.cues].filter(c => c.startTime <= t).slice(-n);
}
function cueAt(trackIdx, from, to) {
  const tr = $('#video').textTracks[trackIdx];
  if (!tr?.cues) return '';
  return [...tr.cues].filter(c => c.endTime >= from - 0.3 && c.startTime <= to + 0.3).map(cueText).join(' ');
}
const clock = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

function showQuiz() {
  const video = $('#video'), box = $('#quiz');
  if (!playing) return;
  video.pause();
  if (document.fullscreenElement && document.fullscreenElement !== $('#player')) document.exitFullscreen().catch(() => {});
  const t = video.currentTime;
  const cues = lastCues(playing.enIdx, t);
  const translate = cues.length && playing.n % 2 === 0;
  playing.n++;
  playing.lastQuiz = t;
  const target = cues[cues.length - 1];
  box.hidden = false;
  box.innerHTML = translate ? `
    <div class="qcard">
      <span class="eyebrow">${icon('translate')}Reto · ${clock(t)} · Traduce la última frase</span>
      ${cues.length > 1 ? `<p class="ctx">${esc(cueText(cues[0]))}</p>` : ''}
      <p class="line">${esc(cueText(target))}</p>
      <textarea id="qmine" rows="2" placeholder="Tu traducción al español…"></textarea>
      <div id="qres" hidden></div>
      <div class="row"><button class="primary" id="qcheck">Comprobar</button><button id="qreplay">${icon('volume')}Volver a oírla</button><button id="qskip">Saltar</button></div>
    </div>` : `
    <div class="qcard">
      <span class="eyebrow">${icon('sparkle')}Reto · ${clock(t)} · ¿Qué ha pasado hasta ahora?</span>
      <p>Resume <b>en inglés</b>, en 2 o 3 frases, lo que ha pasado desde el último reto. No hace falta que sea perfecto.</p>
      <p class="tips">Te pueden ayudar: <i>So far… · At the beginning… · Then… · It seems that… · I think that…</i></p>
      <textarea id="qmine" rows="4" placeholder="So far, …"></textarea>
      <div class="row"><button class="primary" id="qsave">Guardar y seguir viendo</button><button id="qskip">Saltar</button></div>
    </div>`;
  const resume = () => { box.hidden = true; box.innerHTML = ''; video.play().catch(() => {}); };
  const log = entry => store.set(s => {
    (s.watchLog ||= []).push({ date: today(), title: playing.title, at: clock(t), ...entry });
    const line = entry.type === 'traducir' ? `[${playing.title} · ${clock(t)}] "${entry.en}" → ${entry.mine}` : `[${playing.title} · ${clock(t)}] Resumen: ${entry.mine}`;
    s.notes[today()] = (s.notes[today()] ? s.notes[today()] + '\n' : '') + line;
  });
  $('#qskip').onclick = resume;
  if (translate) {
    $('#qreplay').onclick = () => { video.currentTime = Math.max(0, target.startTime - 0.5); video.play(); const stop = () => { if (video.currentTime >= target.endTime + 0.2) { video.pause(); video.removeEventListener('timeupdate', stop); } }; video.addEventListener('timeupdate', stop); };
    $('#qcheck').onclick = () => {
      const mine = $('#qmine').value.trim();
      const es = playing.esIdx >= 0 ? cueAt(playing.esIdx, target.startTime, target.endTime) : '';
      const res = $('#qres'); res.hidden = false;
      res.innerHTML = es
        ? `<p class="es"><span class="lab">Subtítulo en español</span> <b>${esc(es)}</b></p><p class="muted small">Los subtítulos no son una traducción literal: si tu frase dice lo mismo con otras palabras, está bien.</p>`
        : `<p class="muted small">Este episodio no tiene subtítulos en español para comparar. Tu traducción se guarda en las notas del día: pásasela a Claude y te la corrige.</p>`;
      res.innerHTML += `<div class="addword"><input id="qw" placeholder="Palabra o expresión nueva"><input id="qwes" placeholder="Significado"><button id="qadd">+ tarjeta</button></div>`;
      $('#qadd').onclick = () => { if (Vocab.add($('#qw').value, $('#qwes').value, cueText(target))) { toast('Tarjeta añadida'); $('#qw').value = $('#qwes').value = ''; } else toast('Escribe la palabra y su significado (o ya la tienes).'); };
      log({ type: 'traducir', en: cueText(target), es, mine });
      $('#qcheck').innerHTML = `Seguir viendo${icon('play')}`; $('#qcheck').onclick = resume;
    };
  } else {
    $('#qsave').onclick = () => { const mine = $('#qmine').value.trim(); if (mine) { log({ type: 'resumen', mine }); toast('Resumen guardado en tus notas de hoy'); } resume(); };
  }
  setTimeout(() => $('#qmine')?.focus(), 50);
}

function closePlayer() {
  const video = $('#video');
  video.pause(); hls?.destroy(); hls = null; playing = null;
  $('#quiz').hidden = true;
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  video.removeAttribute('src'); video.load();
  $('#player').close();
}
$('#pquiz').addEventListener('click', () => showQuiz());
$('#pfull').addEventListener('click', () => {
  const d = $('#player');
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); else d.requestFullscreen?.().catch(() => toast('Tu dispositivo no permite pantalla completa aquí.'));
});

// ---- AJUSTES ----
function renderSettings(main) {
  main.innerHTML = `
    <h1>Ajustes</h1>
    <h2>Retos en series y películas</h2>
    <div class="panel">
      <p>Mientras ves algo en inglés, la película se para cada cierto tiempo y te propone traducir la última frase o resumir lo que ha pasado.</p>
      <label class="field">Un reto cada
        <select id="quizevery">${[[0, 'Sin retos'], [5, '5 minutos'], [10, '10 minutos'], [15, '15 minutos'], [20, '20 minutos']].map(([v, l]) => `<option value="${v}" ${quizEvery() === v ? 'selected' : ''}>${l}</option>`).join('')}</select>
      </label>
    </div>
    <h2>Sincronizar entre dispositivos</h2>
    <div class="panel">
      <p>Tu progreso (días hechos, unidades, tarjetas y notas) se comparte entre el móvil y el ordenador a través de tu servidor Jellyfin. Entra en <b>Series</b> con el mismo usuario en los dos dispositivos.</p>
      <p><span class="syncdot"></span><span data-sync-label></span></p>
      <div class="row"><button class="primary" id="syncnow" ${Jellyfin.connected() ? '' : 'disabled'}>Sincronizar ahora</button>
      <label class="row small"><input type="checkbox" id="syncon" style="width:auto" ${store.get().syncOn !== false ? 'checked' : ''}> Sincronizar automáticamente</label></div>
    </div>
    <h2>Copia de seguridad</h2>
    <p class="muted">Tu progreso se guarda en este dispositivo. Exporta una copia de vez en cuando, y úsala para pasar tu progreso del ordenador al móvil o al revés.</p>
    <div class="row">
      <button id="export">Exportar progreso</button>
      <label class="btn">Importar<input type="file" id="import" accept=".json" hidden></label>
    </div>`;
  $('#quizevery').onchange = e => { store.set(st => { st.quizEvery = Number(e.target.value); }); toast('Guardado'); };
  Sync.paint();
  $('#syncnow').onclick = () => Sync.now();
  $('#syncon').onchange = e => { store.set(s => { s.syncOn = e.target.checked; }); Sync.paint(); };
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

// Al sincronizar, refresca la pantalla si no estás escribiendo
Sync.setOnSynced(() => {
  const view = (location.hash.slice(1) || 'hoy').split('/')[0];
  const typing = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);
  if (!typing && ['hoy', 'ruta', 'calendario', 'vocabulario'].includes(view)) route();
});
// Si el navegador interno perdió los datos, se recuperan del almacenamiento nativo
if (NativePrefs) NativePrefs.get({ key: 'c1tracker:v2' }).then(({ value }) => {
  if (!value) { mirrorStore(); return; }
  const saved = JSON.parse(value), cur = store.get();
  if (!cur.jellyfin && saved.jellyfin || Object.keys(saved.done || {}).length > Object.keys(cur.done || {}).length) {
    store.replace({ ...saved, ...Sync.merge({ done: cur.done, notes: cur.notes, units: cur.units, cards: cur.cards }, { done: saved.done || {}, notes: saved.notes || {}, units: saved.units || {}, cards: saved.cards || [] }), jellyfin: cur.jellyfin || saved.jellyfin });
    route();
  }
}).catch(() => {});
if (Sync.enabled()) setTimeout(() => Sync.now(), 800);

// App de Android: botón "atrás" del sistema
const CapApp = window.Capacitor?.Plugins?.App;
if (CapApp) CapApp.addListener('backButton', () => {
  if ($('#player').open) { closePlayer(); return; }
  if (location.hash && !/^#(hoy)?$/.test(location.hash)) history.back(); else CapApp.exitApp();
});
$('#player').addEventListener('close', () => { if (hls || $('#video').src) closePlayer(); });
document.querySelectorAll('[data-icon]').forEach(el => { el.outerHTML = icon(el.dataset.icon); });
route();
