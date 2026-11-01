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
  document.querySelectorAll('nav.main a').forEach(a => a.classList.toggle('active', a.dataset.view === view || (view === 'unidad' && a.dataset.view === 'ruta') || (view === 'calendario' && a.dataset.view === 'ruta')));
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
  const toStart = daysBetween(t, PLAN_START);
  const lvRange = LEVEL_RANGES[lv.id];
  const lvDays = Object.keys(SCHEDULE).filter(x => x >= lvRange.from && x <= lvRange.to && !SCHEDULE[x].rest);
  const lvPct = Math.round(lvDays.filter(x => x <= t).length / lvDays.length * 100);
  const cardsDue = Vocab.due().length;
  const isToday = s === t;

  const doneN = blocks.filter(b => isDone(s, b.id)).length;
  const dayPct = blocks.length ? Math.round(doneN / blocks.length * 100) : 0;
  const hour = new Date().getHours();
  const hello = hour < 6 ? 'Buenas noches' : hour < 14 ? 'Buenos días' : hour < 21 ? 'Buenas tardes' : 'Buenas noches';

  main.innerHTML = `
    <section class="hero" style="--c:${lv.color}">
      <div class="hero-top">
        <div>
          <span class="eyebrow">${hello} · Nivel actual</span>
          <div class="lvname">${lv.name}</div>
          <div class="goal">${esc(lv.goal)}</div>
        </div>
        ${blocks.length ? `<div class="dayring" style="--p:${dayPct}"><div><b>${doneN}/${blocks.length}</b><small>hoy</small></div></div>` : ''}
      </div>
      <div class="lvtrack"><div style="width:${Math.max(0, Math.min(100, lvPct))}%"></div></div>
      <div class="range">${shortDate(lvRange.from)} → ${shortDate(lvRange.to)} · ${Math.max(0, Math.min(100, lvPct))}% del nivel</div>
      <div class="hero-stats">
        <div><b>🔥 ${streak()}</b><span>días seguidos</span></div>
        <div><b>📇 ${cardsDue}</b><span>tarjetas hoy</span></div>
        <div><b>✓ ${SYLLABUS.filter(u => unitStatus(u.id).pct === 100).length}</b><span>de ${SYLLABUS.length} unidades</span></div>
      </div>
    </section>
    ${toStart > 0 ? `<div class="banner">🚀 Empiezas el <b>${longDate(PLAN_START)}</b> (en ${toStart} día${toStart > 1 ? 's' : ''}). Puedes ir abriendo la unidad 1 si quieres adelantar.</div>` : ''}

    <div class="dayhead">
      <button class="icon" id="prev" aria-label="Día anterior">‹</button>
      <div><h1>${isToday ? 'Hoy · ' : ''}${longDate(s)}</h1>${d?.level ? `<span class="phase" style="--c:${lv.color}">${lv.name}</span>` : ''}</div>
      <button class="icon" id="next" aria-label="Día siguiente">›</button>
    </div>
    ${!isToday ? `<a class="back" href="#hoy/${t}">← Volver a hoy</a>` : ''}

    ${!d ? '<p class="empty">Este día está fuera del plan.</p>' : d.rest ? `<div class="restday"><div class="big">☕</div><b>${esc(d.rest)}</b><p class="muted">Descansar también es parte del plan. Si te apetece, mira algo en inglés sin presión.</p></div>` : `
    <p class="muted small daynote">Unas 3 horas en bloques. Haz el bloque principal cuando tengas la cabeza más fresca.</p>
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
    <div class="row between"><h1>Tu ruta</h1><a class="btn" href="#calendario">📅 Calendario</a></div>
    <p class="muted">De B1 a C1 con 3 horas al día. Cada unidad tiene teoría, práctica y una lectura desmontada.</p>
    ${LEVELS.map(lv => {
      const r = LEVEL_RANGES[lv.id], units = SYLLABUS.filter(u => u.level === lv.id);
      const now = t >= r.from && t <= r.to;
      return `<section class="lvl ${now ? 'now' : ''}" style="--c:${lv.color}">
        <header><h2>${lv.name}${now ? '<span class="nowtag">Ahora</span>' : ''}</h2><span class="muted small">${shortDate(r.from)} → ${shortDate(r.to)} · 🎬 ${esc(lv.series.name)} T${lv.series.season}</span></header>
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
        ${store.get().jellyfin?.expired ? '<p class="banner">Tu sesión ha caducado. Vuelve a escribir la contraseña: el resto se mantiene.</p>' : ''}
        <label>Usuario<input name="user" autocomplete="username" required value="${esc(store.get().lastUser || '')}"></label>
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
      <span class="eyebrow">🎯 Reto · ${clock(t)} · Traduce la última frase</span>
      ${cues.length > 1 ? `<p class="ctx">${esc(cueText(cues[0]))}</p>` : ''}
      <p class="line">${esc(cueText(target))}</p>
      <textarea id="qmine" rows="2" placeholder="Tu traducción al español…"></textarea>
      <div id="qres" hidden></div>
      <div class="row"><button class="primary" id="qcheck">Comprobar</button><button id="qreplay">↺ Volver a oírla</button><button id="qskip">Saltar</button></div>
    </div>` : `
    <div class="qcard">
      <span class="eyebrow">🎯 Reto · ${clock(t)} · ¿Qué ha pasado hasta ahora?</span>
      <p>Resume <b>en inglés</b>, en 2 o 3 frases, lo que ha pasado desde el último reto. No hace falta que sea perfecto.</p>
      <p class="tips">Te pueden ayudar: <i>So far… · At the beginning… · Then… · It seems that… · I think that…</i></p>
      <textarea id="qmine" rows="4" placeholder="So far, …"></textarea>
      <div class="row"><button class="primary" id="qsave">Guardar y seguir viendo</button><button id="qskip">Saltar</button></div>
    </div>`;
  const resume = () => { box.hidden = true; box.innerHTML = ''; video.play().catch(() => {}); };
  const log = entry => store.set(s => {
    (s.watchLog ||= []).push({ date: today(), title: playing.title, at: clock(t), ...entry });
    const line = entry.type === 'traducir' ? `🎬 ${playing.title} (${clock(t)}): "${entry.en}" → ${entry.mine}` : `🎬 ${playing.title} (${clock(t)}) Resumen: ${entry.mine}`;
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
        ? `<p class="es">🇪🇸 Subtítulo en español: <b>${esc(es)}</b></p><p class="muted small">Los subtítulos no son una traducción literal: si tu frase dice lo mismo con otras palabras, está bien.</p>`
        : `<p class="muted small">Este episodio no tiene subtítulos en español para comparar. Tu traducción se guarda en las notas del día: pásasela a Claude y te la corrige.</p>`;
      res.innerHTML += `<div class="addword"><input id="qw" placeholder="Palabra o expresión nueva"><input id="qwes" placeholder="Significado"><button id="qadd">+ tarjeta</button></div>`;
      $('#qadd').onclick = () => { if (Vocab.add($('#qw').value, $('#qwes').value, cueText(target))) { toast('Tarjeta añadida'); $('#qw').value = $('#qwes').value = ''; } else toast('Escribe la palabra y su significado (o ya la tienes).'); };
      log({ type: 'traducir', en: cueText(target), es, mine });
      $('#qcheck').textContent = 'Seguir viendo ▶'; $('#qcheck').onclick = resume;
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
route();
