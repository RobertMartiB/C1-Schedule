// ---- Estado guardado en el dispositivo ----
const store = (() => {
  const KEY = ACTIVE_COURSE.storeKey;
  const defaults = () => ({ done: {}, notes: {}, units: {}, cards: [], jellyfin: null, resume: {} });
  let state;
  try { state = { ...defaults(), ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { state = defaults(); }
  // Jellyfin, el chat y tu nombre se comparten entre cursos (y se conserva la sesión de la versión antigua)
  try {
    for (const k of ['c1tracker:v1', ...Object.values(COURSES).map(c => c.storeKey)]) {
      if (k === KEY) continue;
      const o = JSON.parse(localStorage.getItem(k) || '{}');
      for (const f of ['jellyfin', 'deviceId', 'lastUser', 'lastServer', 'chat', 'quizEvery']) if (state[f] == null && o[f] != null) state[f] = o[f];
    }
  } catch {}
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
  mirrorTimer = setTimeout(() => NativePrefs.set({ key: ACTIVE_COURSE.storeKey, value: JSON.stringify(store.get()) }).catch(() => {}), 800);
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
  if (session === 'full') return st.theory && st.exOk === st.exTotal && st.reading;
  if (session === 'dia1') return st.theory && st.exOk === st.exTotal && extraLeft(uid, 'dia1') === 0;
  if (session === 'dia2') return st.reading && extraLeft(uid, 'dia2') === 0;
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
const MIN = { main: 60, read: 45, series: 45, vocab: 30, writing: 45, ...(COURSE_DEF.minutes || {}) };
// Ejercicios extra que faltan para llegar a los 30 del día
function extraTarget(uid, day) {
  const u = UNITS[uid]; if (!u) return 0;
  return day === 'dia1' ? Math.max(0, DAILY_EXERCISES - u.exercises.length) : Math.max(0, DAILY_EXERCISES - (u.reading?.questions?.length || 0));
}
function extraLeft(uid, day) {
  const pr = store.get().units?.[uid] || {};
  return Math.max(0, extraTarget(uid, day) - (pr[day === 'dia1' ? 'extraD1' : 'extraD2'] || 0));
}
// Parte de la unidad por la que seguir (teoría → práctica → lectura)
function unitPendingTab(uid) {
  const st = unitStatus(uid);
  return !st.ready || !st.theory ? 'teoria' : st.exOk < st.exTotal ? 'practica' : !st.reading ? 'lectura' : 'extra';
}
function unitBlock(uid, session, id, kickerPrefix = '') {
  const u = unitById(uid), ses = SESSION[session], n = SYLLABUS.indexOf(u) + 1;
  if (session === 'dia1' || session === 'dia2') {
    const st = unitStatus(uid), left = extraLeft(uid, session);
    let tab, cta;
    if (session === 'dia1') {
      tab = !st.ready || !st.theory ? 'teoria' : st.exOk < st.exTotal ? 'practica' : 'extra';
      cta = tab === 'teoria' ? 'Empezar la unidad' : tab === 'practica' ? 'Seguir con la práctica' : left ? `Ejercicios extra (faltan ${left})` : 'Practicar más';
    } else {
      tab = !st.reading ? 'lectura' : 'extra';
      cta = tab === 'lectura' ? 'Hacer la lectura' : left ? `Ejercicios extra (faltan ${left})` : 'Practicar más';
    }
    const done = session === 'dia1' ? (st.exOk || 0) + (store.get().units?.[uid]?.extraD1 || 0) : (st.reading ? (UNITS[uid]?.reading?.questions?.length || 0) : 0) + (store.get().units?.[uid]?.extraD2 || 0);
    return { id, min: MIN.main, icon: session === 'dia1' ? 'open' : 'search', kicker: `${kickerPrefix}Unidad ${n} · ${ses.label} · ${Math.min(done, DAILY_EXERCISES)}/${DAILY_EXERCISES} ejercicios`, text: u.title, detail: ses.detail, link: `#unidad/${u.id}/${tab}`, ready: !!UNITS[u.id], auto: sessionDone(uid, session), cta };
  }
  if (session === 'full') {
    const st = unitStatus(uid), tab = unitPendingTab(uid);
    const started = st.theory || st.exOk || st.reading;
    const parts = st.ready ? `${[st.theory, st.exOk === st.exTotal, st.reading].filter(Boolean).length} de 3 partes hechas` : '';
    return { id, min: MIN.main, icon: 'open', kicker: `${kickerPrefix}Unidad ${n}${parts ? ' · ' + parts : ''}`, text: u.title, detail: ses.detail, link: `#unidad/${u.id}/${tab}`, ready: !!UNITS[u.id], auto: sessionDone(uid, 'full'), cta: tab === 'extra' ? 'Practicar más' : started ? (tab === 'practica' ? 'Seguir con la práctica' : 'Seguir con la lectura') : 'Empezar la unidad' };
  }
  const ic = { teoria: 'open', practica: 'pencil', lectura: 'search', repaso: 'repeat' }[session];
  return { id, min: MIN.main, icon: ic, kicker: `${kickerPrefix}Unidad ${n} · ${ses.label}`, text: u.title, detail: ses.detail, link: `#unidad/${u.id}/${ses.tab}`, ready: !!UNITS[u.id], auto: sessionDone(uid, session), cta: session === 'teoria' ? 'Empezar la teoría' : session === 'practica' ? 'Hacer los ejercicios' : session === 'lectura' ? 'Abrir la lectura' : 'Repasar' };
}
const blockDone = (s, b) => b.auto || isDone(s, b.id);

// Plan con calendario: los bloques del día se ajustan al tiempo que has elegido.
// Con poco tiempo se quedan solo los esenciales y el resto se reparte en proporción.
function fitToTime(blocks) {
  if (!PACE.chosen) return blocks;
  const budget = PACE.minutes;
  // La serie o película se queda siempre (aunque sea un rato corto); con 30 minutos se quita la lectura
  const keep = budget <= 30 ? ['main', 'ahead', 'series', 'vocab'] : budget < 120 ? ['main', 'ahead', 'read', 'series', 'vocab'] : null;
  const isModule = b => /^m\d+$/.test(b.id); // módulos del modo por niveles (m0, m1…)
  const out = keep ? blocks.filter(b => isModule(b) || keep.includes(b.id)) : blocks;
  if (out.some(b => b.min > 200)) return out; // simulacro: dura lo que dura
  const base = out.filter(b => !b.extra && b.id !== 'writing' && !(isModule(b) && b.id !== 'm0')).reduce((a, b) => a + b.min, 0);
  const k = budget / base;
  const fitted = out.map(b => ({ ...b, min: Math.max(5, Math.round(b.min * k / 5) * 5) }));
  // Lo que sobra o falta por redondear va al bloque principal, para que el total sea justo el tiempo elegido
  const core = fitted.filter(b => !b.extra && b.id !== 'writing' && !(isModule(b) && b.id !== 'm0'));
  const first = core.find(b => b.id === 'main' || b.id === 'm0');
  if (first) first.min = Math.max(5, first.min + budget - core.reduce((a, b) => a + b.min, 0));
  return fitted;
}

// ---- Modo por niveles: el mismo día que el calendario (módulo, lectura, serie y tarjetas), pero sin fechas ----
// Un módulo es una parte de una unidad: teoría, práctica o lectura. Si un día no estudias, sigues donde lo dejaste.
function pendingSteps(n) {
  const out = [];
  for (const u of SYLLABUS) {
    if (!UNITS[u.id]) break;
    for (const d of ['dia1', 'dia2']) {
      if (!sessionDone(u.id, d)) out.push({ unit: u.id, session: d });
      if (out.length >= n) return out;
    }
  }
  return out;
}
// Los módulos de cada día se fijan la primera vez que abres Hoy ese día
function dailySteps(s) {
  // Cada día es una unidad completa (los días guardados con el sistema antiguo de partes se recalculan)
  const saved = store.get().daily?.[s];
  if (s === today() && (!saved?.length || saved.some(p => p.session !== 'dia1' && p.session !== 'dia2'))) store.set(st => { st.daily = st.daily || {}; st.daily[s] = pendingSteps(1); });
  return store.get().daily?.[s] || [];
}
// Episodio de la serie del nivel según lo que llevas hecho del nivel (avanza contigo, no con el calendario)
function levelInput(unitId) {
  const lv = levelById(unitById(unitId).level);
  if (!lv?.series) return null;
  const units = SYLLABUS.filter(u => u.level === lv.id);
  const done = units.reduce((a, u) => a + MODULES.filter(([ses]) => sessionDone(u.id, ses)).length, 0);
  const episode = Math.min(lv.series.episodes, Math.floor(done * lv.series.episodes / (units.length * 3)) + 1);
  return { ...lv.series, episode, fresh: true };
}
function levelBlocks(s) {
  const steps = dailySteps(s);
  if (!steps.length) return [];
  const blocks = steps.map((p, i) => ({ ...unitBlock(p.unit, p.session, 'm' + i), extra: i > 0 || undefined }));
  blocks.push(...companionBlocks(steps[0].unit, steps[0].session, levelInput(steps[0].unit)), vocabBlock(s));
  return fitToTime(blocks);
}
function levelNow() {
  const nx = pendingSteps(1)[0];
  if (nx) return levelById(unitById(nx.unit).level);
  const last = [...SYLLABUS].reverse().find(u => UNITS[u.id]) || SYLLABUS[0];
  return levelById(last.level);
}
function levelPct(lv) {
  const units = SYLLABUS.filter(u => u.level === lv.id);
  return units.length ? Math.round(units.filter(u => unitStatus(u.id).pct === 100).length / units.length * 100) : 0;
}

// Lo que acompaña al módulo del día en los dos modos: una lectura y algo para escuchar (serie o película)
function companionBlocks(unitId, session, input) {
  const out = [];
  const idx = unitId ? SYLLABUS.findIndex(u => u.id === unitId) : -1;
  const prev = idx > 0 ? SYLLABUS[idx - 1] : null;
  if (unitId && session !== 'lectura' && prev && UNITS[prev.id])
    out.push({ id: 'read', min: MIN.read, icon: 'search', kicker: 'Lectura en modo reto', text: UNITS[prev.id].reading.title, detail: 'Antes de abrir cada frase, di en voz alta su sujeto y su verbo principal.', link: `#unidad/${prev.id}/lectura`, ready: true, cta: 'Abrir la lectura' });
  else
    out.push({ id: 'read', min: MIN.read, icon: 'news', kicker: 'Lectura libre', text: COURSE_DEF.readingTitle || 'Un artículo de tu nivel', detail: COURSE_DEF.readingDetail || 'Elige algo que te interese. Desmonta solo las frases que no entiendas a la primera.', ext: COURSE_DEF.readingLinks, ready: true });
  if (input) out.push({ id: 'series', min: MIN.series, icon: 'film', kicker: input.fresh ? 'Episodio nuevo' : 'Repaso del episodio', text: `${input.name} · T${input.season}E${input.episode}`, detail: input.fresh ? `Audio y subtítulos ${ACTIVE_COURSE.inLang}. La película se parará de vez en cuando para proponerte un reto.` : 'Vuelve a ver 15–20 minutos intentando entenderlo sin mirar los subtítulos.', input, ready: true, cta: 'Ver en Jellyfin' });
  else if (COURSE_DEF.seriesHint) out.push({ id: 'series', min: MIN.series, icon: 'film', kicker: 'Escucha', text: COURSE_DEF.seriesHint.text, detail: COURSE_DEF.seriesHint.detail, link: '#series', ready: true, cta: 'Abrir Series' });
  else out.push({ id: 'series', min: MIN.series, icon: 'film', kicker: 'Escucha', text: `Una serie o película ${ACTIVE_COURSE.inLang}`, detail: `Algo que te guste, con audio y subtítulos ${ACTIVE_COURSE.inLang}. Apunta 3 expresiones que oigas varias veces.`, link: '#series', ready: true, cta: 'Abrir Series' });
  return out;
}
function vocabBlock(s) {
  const due = Vocab.due(s).length;
  return { id: 'vocab', min: MIN.vocab, icon: 'cards', kicker: 'Vocabulario', text: due ? `${due} tarjeta${due > 1 ? 's' : ''} por repasar` : 'Repasa tus tarjetas', detail: 'Repasa las del día y añade las palabras nuevas que hayas visto hoy.', link: '#vocabulario', ready: true, cta: 'Repasar' };
}

function dayBlocks(s) {
  const d = SCHEDULE[s];
  if (!d || d.rest) return [];
  const blocks = [];
  const m = d.main;
  if (m.kind === 'unit') {
    blocks.push(unitBlock(m.unit, m.session, 'main'));
  } else {
    const ic = m.kind === 'mock' ? 'timer' : m.kind === 'leveltest' ? 'trophy' : m.kind === 'exam' ? 'flag' : 'repeat';
    blocks.push({ id: 'main', min: m.kind === 'mock' ? 235 : MIN.main, icon: ic, kicker: m.kind === 'mock' ? 'Simulacro' : m.kind === 'exam' ? 'Formato del examen' : 'Repaso', text: m.text.replace(/^Formato del examen: /, ''), detail: m.detail, ready: true });
  }
  if (m.kind !== 'mock') blocks.push(...companionBlocks(m.kind === 'unit' ? m.unit : null, m.session, d.input));
  blocks.push(vocabBlock(s));
  if (d.writing) blocks.push({ id: 'writing', min: MIN.writing, icon: 'file', kicker: 'Writing de la semana', text: d.writing.replace(/ \(.*\)\.?$/, ''), detail: `${d.writing} Cuando lo tengas, pégaselo a Claude para que te lo corrija.`, ready: true });
  return fitToTime(blocks);
}

const isDone = (s, id) => (store.get().done[s] || []).includes(id);
function toggleDone(s, id) {
  store.set(st => { const set = new Set(st.done[s] || []); set.has(id) ? set.delete(id) : set.add(id); st.done[s] = [...set]; });
}
function dayStatus(s) {
  const b = (BY_LEVELS ? levelBlocks(s) : dayBlocks(s)).filter(x => !x.extra);
  if (!b.length) return 'none';
  const n = b.filter(x => blockDone(s, x)).length;
  if (n === b.length) return 'done';
  if (n > 0) return 'partial';
  return s < today() ? 'missed' : 'todo';
}
function streak() {
  let s = today(), n = 0;
  if (dayStatus(s) !== 'done') s = addDays(s, -1);
  for (let guard = 0; guard < 400 && (BY_LEVELS ? store.get().daily?.[s] : SCHEDULE[s]); guard++) {
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

// Unidad que se ha estudiado (o toca) un día
function todayUnit(s) {
  if (BY_LEVELS) return (store.get().daily?.[s] || [])[0]?.unit || null;
  const m = SCHEDULE[s]?.main;
  return m?.kind === 'unit' && UNITS[m.unit] ? m.unit : null;
}

// ---- Navegación ----
let selectedDate = null;
function route() {
  const [view, ...args] = (location.hash.slice(1) || 'hoy').split('/');
  const section = { unidad: 'ruta', calendario: 'ruta' }[view] || view;
  document.querySelectorAll('nav.main a').forEach(a => a.classList.toggle('active', a.dataset.view === section));
  const main = $('#main');
  if (!CourseStore.picked && view !== 'cursos') { renderCourses(main); return; }
  if (view !== 'cursos') document.body.classList.remove('picking');
  const views = { cursos: renderCourses, hoy: renderToday, ruta: renderRoute, unidad: (m, a) => renderUnit(m, a[0], a[1]), libro: renderBook, vocabulario: m => Vocab.render(m), calendario: renderCalendar, series: (m, a) => renderSeries(m, a[0]), ajustes: renderSettings };
  (views[view] || renderToday)(main, args);
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);

// ---- HOY ----
function renderToday(main, args) {
  const t = today();
  let s = BY_LEVELS ? t : args[0] || selectedDate || t;
  if (s < PLAN_START && !args[0]) s = PLAN_START;
  if (s > PLAN_END && !args[0]) s = PLAN_END;
  if (BY_LEVELS) s = t;
  selectedDate = s;
  let d, lv, blocks, lvPct, toStart = 0;
  if (BY_LEVELS) {
    blocks = levelBlocks(s); lv = levelNow(); lvPct = levelPct(lv);
    d = blocks.length ? { main: {} } : null;
  } else {
    d = SCHEDULE[s]; lv = currentLevel(s); blocks = dayBlocks(s);
    const lvRange = LEVEL_RANGES[lv.id];
    const lvDays = Object.keys(SCHEDULE).filter(x => x >= lvRange.from && x <= lvRange.to && !SCHEDULE[x].rest);
    lvPct = Math.max(0, Math.min(100, Math.round(lvDays.filter(x => x < t).length / lvDays.length * 100)));
    toStart = daysBetween(t, PLAN_START);
  }
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
      <div class="daynav" ${BY_LEVELS ? 'hidden' : ''}>
        <button class="icon" id="prev" aria-label="Día anterior">${icon('left')}</button>
        ${!isToday ? `<a class="btn small" href="#hoy/${t}">Hoy</a>` : ''}
        <button class="icon" id="next" aria-label="Día siguiente">${icon('right')}</button>
      </div>
    </header>

    <div class="chips">
      <a class="chip-stat" href="#ruta" style="--c:${lv.color}"><span class="dot"></span>Nivel ${lv.name}<b>${lvPct}%</b></a>
      <span class="chip-stat">${icon('flame')}Racha<b>${streak()} d</b></span>
      <a class="chip-stat" href="#vocabulario">${icon('cards')}Tarjetas<b>${Vocab.due().length}</b></a>
      ${BY_LEVELS && PACE.chosen ? `<a class="chip-stat" href="#ajustes">${icon('clock')}Al día<b>${fmtMin(PACE.minutes)}</b></a>` : ''}
    </div>

    ${toStart > 0 && isToday ? `<div class="notice">${icon('info')}<span>Tu plan empieza el <b>${longDate(PLAN_START)}</b>. Puedes ir mirando la unidad 1.</span></div>` : ''}

    ${!d && BY_LEVELS ? `<div class="empty-card">${icon('trophy')}<h2>Has terminado todo lo disponible</h2><p>Pídele a Claude que prepare la siguiente unidad. Mientras, repasa tus tarjetas.</p></div>`
      : !d ? `<div class="empty-card">${icon('calendar')}<p>Este día está fuera del plan.</p></div>`
      : d.rest ? `<div class="empty-card">${icon('coffee')}<h2>${esc(d.rest.split(':')[0])}</h2><p>Hoy toca descansar. Si te apetece, mira algo ${ACTIVE_COURSE.inLang} sin presión.</p></div>`
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
    <section class="next done-all">${icon('trophy')}<div><h2>${BY_LEVELS ? 'Objetivo cumplido' : 'Día completado'}</h2><p class="muted">Buen trabajo. Si te quedan ganas, practica más lo de hoy.</p><div class="row">${todayUnit(s) ? `<a class="btn primary" href="#unidad/${todayUnit(s)}/extra">${icon('pencil')}Más práctica de hoy</a>` : ''}${BY_LEVELS && pendingSteps(1).length ? `<button data-act="more">${icon('plus')}Otra unidad</button>` : ''}</div></div></section>`}

    <section class="plan">
      <div class="plan-head"><h3>${BY_LEVELS ? 'Tu objetivo de hoy' : 'Plan del día'}</h3><span class="muted small">${core.filter(b => blockDone(s, b)).length} de ${core.length}${left ? ` · quedan ${fmtMin(left)}` : ''}</span></div>
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

  main.querySelector('[data-act="more"]')?.addEventListener('click', () => {
    const steps = dailySteps(s), nx = pendingSteps(steps.length + 1).find(p => !steps.some(q => q.unit === p.unit && q.session === p.session));
    if (nx) store.set(st => { st.daily[s] = [...steps, nx]; });
    renderToday(main, [s]);
  });
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
  main.querySelector('[data-act="watch"]')?.addEventListener('click', e => watchToday(next.input, e.currentTarget));
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

// ---- CURSOS (eliges curso antes de entrar y puedes añadir otros) ----
function courseProgress(id) {
  try {
    const st = JSON.parse(localStorage.getItem(COURSES[id].storeKey) || '{}');
    const units = Object.values(st.units || {}).filter(u => u.theory || u.reading || Object.keys(u.ex || {}).length).length;
    const days = Object.keys(st.done || {}).length;
    return { units, days };
  } catch { return { units: 0, days: 0 }; }
}
function renderCourses(main) {
  document.body.classList.add('picking');
  const added = CourseStore.added, others = Object.keys(COURSES).filter(id => !added.includes(id));
  const card = id => {
    const c = COURSES[id], pr = courseProgress(id), cur = id === ACTIVE_COURSE.id;
    return `<button class="course-card ${cur ? 'cur' : ''}" data-course="${id}" style="--c:${c.color}">
      <span class="cflag">${flagOf(id)}</span>
      <span class="cinfo"><b>${c.name}</b><small>${c.subtitle}</small><small class="cprog">${pr.units ? `${pr.units} unidad${pr.units > 1 ? 'es' : ''} empezada${pr.units > 1 ? 's' : ''}` : 'Sin empezar'}</small></span>
      ${icon('right', 'chev')}
    </button>`;
  };
  main.innerHTML = `
    <section class="courses">
      <img class="clogo" src="icon.png" alt="">
      <h1>¿Qué vas a estudiar hoy?</h1>
      <p class="muted">Elige un curso. Cada uno tiene su propio plan y su progreso.</p>
      <div class="course-list">${added.map(card).join('')}</div>
      ${others.length ? `<h3>Añadir otro curso</h3><div class="course-list">${others.map(id => {
        const c = COURSES[id];
        const ready = c.files.filter(f => f.startsWith('units')).length;
        return `<button class="course-card add" data-add="${id}" style="--c:${c.color}"><span class="cflag">${flagOf(id)}</span><span class="cinfo"><b>${c.name}</b><small>${c.subtitle}</small><small class="cprog muted">${ready} unidad${ready === 1 ? '' : 'es'} lista${ready === 1 ? '' : 's'}</small></span>${icon('plus', 'chev')}</button>`;
      }).join('')}</div>` : ''}
    </section>`;
  const go = id => { CourseStore.add(id); CourseStore.active = id; CourseStore.picked = true; location.hash = 'hoy'; location.reload(); };
  main.querySelectorAll('[data-course]').forEach(b => b.onclick = () => {
    if (b.dataset.course === ACTIVE_COURSE.id) { CourseStore.picked = true; document.body.classList.remove('picking'); location.hash = 'hoy'; route(); }
    else go(b.dataset.course);
  });
  main.querySelectorAll('[data-add]').forEach(b => b.onclick = () => renderPaceSetup(main, b.dataset.add, () => go(b.dataset.add)));
}

// ---- FORMA DE ESTUDIAR (se elige al añadir un curso y se cambia en Ajustes) ----
function paceFormHtml(p) {
  const sel = (id, opts, val) => `<select id="${id}">${opts.map(([v, l]) => `<option value="${v}" ${v === val ? 'selected' : ''}>${l}</option>`).join('')}</select>`;
  return `
    <div class="pace-opts">
      <button type="button" class="pace-opt ${p.mode === 'levels' ? 'on' : ''}" data-mode="levels">
        <span class="pace-ic">${icon('target')}</span><b>Por niveles <span class="rec">Recomendada</span></b>
        <small>Cada día, un módulo de la unidad, una lectura, una serie y tus tarjetas. Sin fechas: si un día no estudias, sigues donde lo dejaste.</small>
      </button>
      <button type="button" class="pace-opt ${p.mode === 'plan' ? 'on' : ''}" data-mode="plan">
        <span class="pace-ic">${icon('calendar')}</span><b>Plan con calendario</b>
        <small>Lo mismo, pero con fechas para cada nivel y días de descanso. Te dice si vas al día o atrasado.</small>
      </button>
    </div>
    <div class="pace-fields">
      <label class="field">Tiempo al día ${sel('pmin', [[30, '30 minutos'], [60, '1 hora'], [120, '2 horas'], [180, '3 horas']], p.minutes)}</label>
    </div>
    <div class="pace-fields" data-for="plan" ${p.mode === 'plan' ? '' : 'hidden'}>
      <label class="field">Días a la semana ${sel('pdays', [[5, '5 días (descanso el fin de semana)'], [6, '6 días (descanso el domingo)'], [7, 'Todos los días']], p.days)}</label>
    </div>`;
}
function bindPaceForm(root, p) {
  const cur = { ...p };
  root.querySelectorAll('.pace-opt').forEach(b => b.onclick = () => {
    cur.mode = b.dataset.mode;
    root.querySelectorAll('.pace-opt').forEach(x => x.classList.toggle('on', x === b));
    root.querySelectorAll('.pace-fields[data-for]').forEach(f => f.hidden = f.dataset.for !== cur.mode);
  });
  return () => ({ ...cur, goal: 1, minutes: Number($('#pmin', root).value), days: Number($('#pdays', root).value) });
}
function renderPaceSetup(main, id, onDone) {
  const saved = CourseStore.pace(id), c = COURSES[id];
  const p = saved.chosen ? saved : { ...saved, mode: 'levels', minutes: 60 }; // a quien empieza le proponemos 1 hora
  main.innerHTML = `
    <section class="courses pace-setup" style="--c:${c.color}">
      <span class="cflag big">${flagOf(id)}</span>
      <h1>¿Cómo quieres estudiar ${esc(c.name.toLowerCase())}?</h1>
      <p class="muted">Lo puedes cambiar cuando quieras en Ajustes.</p>
      ${paceFormHtml(p)}
      <div class="row center"><button class="ghostbtn" id="pback">${icon('left')}Volver</button><button class="primary" id="pgo">Empezar el curso${icon('arrow')}</button></div>
    </section>`;
  const get = bindPaceForm(main, p);
  $('#pback').onclick = () => renderCourses(main);
  $('#pgo').onclick = () => { CourseStore.setPace(id, get()); onDone(); };
}

// ---- RUTA EN CAMINO (modo por niveles) ----
// Cada unidad es un tramo del recorrido con sus tres módulos; al final de cada nivel, el test.
const PATH_X = [0, 60, 96, 60, 0, -60, -96, -60];
const MODULES = [['teoria', 'open', 'Teoría'], ['practica', 'pencil', 'Práctica'], ['lectura', 'search', 'Lectura']];
function renderPath(main) {
  const cur = pendingSteps(1)[0];
  const modMin = (cur && levelBlocks(today())[0]?.min) || MIN.main; // lo que dura un módulo con tu tiempo al día
  let k = 0, unitN = 0, passed = false; // passed: ya hemos dejado atrás el módulo actual
  const node = o => {
    const x = PATH_X[k++ % PATH_X.length];
    return `<div class="node-wrap ${o.state}" style="--x:${x}px;--p:${o.pct || 0}" data-node>
      <button class="node" aria-label="${esc(o.label)}: ${esc(o.title)}">${icon(o.state === 'done' ? 'check' : o.state === 'locked' ? 'lock' : o.icon)}</button>
      <span class="node-cap">${o.state === 'current' ? `<b>Ahora</b> · ` : ''}${esc(o.label)}</span>
      <div class="pop" hidden>
        <small class="overline">${esc(o.kicker)}</small>
        <b>${esc(o.title)}</b>
        <p>${esc(o.detail)}</p>
        <div class="pop-foot">
          ${o.min ? `<span class="pill">${icon('clock')}${fmtMin(o.min)}</span>` : '<span></span>'}
          ${o.state === 'locked' ? `<span class="muted small">${icon('lock')}Aún no</span>` : o.chat ? `<button class="primary" data-chat>${o.cta}</button>` : `<a class="btn primary" href="${o.link}">${o.cta}${icon('arrow')}</a>`}
        </div>
      </div>
    </div>`;
  };
  main.innerHTML = `
    <header class="page-head"><div><h1>Tu ruta</h1><p class="muted">${esc(ACTIVE_COURSE.subtitle)}, nivel a nivel, a tu ritmo.</p></div></header>
    <div class="chips">
      <span class="chip-stat">${icon('flame')}Racha<b>${streak()} d</b></span>
      <a class="chip-stat" href="#ajustes">${icon('clock')}Al día<b>${fmtMin(PACE.minutes)}</b></a>
    </div>
    <div class="path"><svg class="path-line" aria-hidden="true"></svg>
    ${LEVELS.map((lv, li) => {
      const units = SYLLABUS.filter(u => u.level === lv.id);
      if (!units.length) return '';
      const done = units.filter(u => unitStatus(u.id).pct === 100).length;
      const allDone = done === units.length;
      return `<section class="path-level" style="--c:${lv.color}">
        <div class="level-head"><small class="overline">Nivel ${li + 1}</small><h2>${esc(lv.name)}</h2><p>${esc(lv.goal)}</p>
          <div class="lvbar"><i style="width:${Math.round(done / units.length * 100)}%"></i></div><span class="lvcount">${done} de ${units.length} unidades</span></div>
        ${units.map(u => {
          unitN++;
          const st = unitStatus(u.id), ready = !!UNITS[u.id], n = SYLLABUS.indexOf(u) + 1;
          // Al lado del tramo, en el lado contrario a la curva: número de unidad y sus tres módulos
          const mid = PATH_X[(k + 1) % PATH_X.length], side = mid > 0 ? -1 : mid < 0 ? 1 : (unitN % 2 ? 1 : -1);
          const doneMods = ready ? MODULES.filter(([ses]) => sessionDone(u.id, ses)).length : 0;
          const deco = `<div class="path-deco" style="--side:${side}" aria-hidden="true"><span class="deco-n">${String(n).padStart(2, '0')}</span><span class="segs">${[0, 1, 2].map(i => `<i class="${i < doneMods ? 'on' : ''}"></i>`).join('')}</span><small>${doneMods} de 3</small></div>`;
          const nodes = MODULES.map(([ses, ic, label], i) => {
            const isCur = cur && cur.unit === u.id && cur.session === ses;
            const state = ready && sessionDone(u.id, ses) ? 'done' : isCur ? 'current' : passed || !ready || !cur ? 'locked' : 'open';
            if (isCur) passed = true;
            const b = unitBlock(u.id, ses, 'path');
            return node({ state, icon: ic, label, pct: st.pct, title: u.title, kicker: `Unidad ${n} · Módulo ${i + 1} de 3 · ${label}`,
              detail: !ready ? 'Esta unidad aún no está preparada.' : state === 'locked' ? 'Se abre cuando termines los módulos anteriores.' : b.detail,
              min: modMin, link: b.link, cta: state === 'done' ? 'Repasar' : b.cta });
          }).join('');
          return `<a class="unit-card ${u.id === cur?.unit ? 'cur' : ''}" href="#unidad/${u.id}/teoria">
              <span class="n ${st.pct === 100 ? 'ok' : ''}">${st.pct === 100 ? icon('check') : n}</span>
              <span class="ut"><small>Unidad ${n}</small><b>${esc(u.title)}</b><span>${esc(u.focus)}</span></span>
              ${ready ? icon('book', 'chev') : '<small class="muted">Pronto</small>'}
            </a>
            <div class="nodes">${deco}${nodes}</div>`;
        }).join('')}
        <div class="nodes">${node({ state: allDone ? 'current' : 'locked', pct: 100, icon: 'trophy', label: 'Test de nivel', title: `Test de nivel ${lv.name}`, kicker: `Final del nivel ${lv.name}`,
          detail: allDone ? 'Pídele a Claude el test de fin de nivel. Con un 70 % o más pasas al siguiente.' : 'Se abre cuando termines todas las unidades de este nivel.', chat: true, cta: 'Hacer el test con Claude' })}</div>
      </section>`;
    }).join('')}
    </div>`;
  const wraps = [...main.querySelectorAll('[data-node]')];
  wraps.forEach(w => w.querySelector('.node').onclick = () => {
    const pop = w.querySelector('.pop'), open = pop.hidden;
    wraps.forEach(x => { x.querySelector('.pop').hidden = true; x.classList.remove('popped'); });
    pop.hidden = !open; w.classList.toggle('popped', open);
  });
  main.querySelectorAll('[data-chat]').forEach(b => b.onclick = () => Chat.open());
  drawPathLine(main);
  main.querySelector('.node-wrap.current')?.scrollIntoView({ block: 'center' });
}
// Línea que une los módulos: hecha en color, pendiente discontinua
function drawPathLine(main) {
  const path = $('.path', main), svg = $('.path-line', main);
  if (!path || !svg) return;
  const box = path.getBoundingClientRect();
  const pts = [...path.querySelectorAll('.node')].map(n => {
    const r = n.getBoundingClientRect();
    return { x: r.left - box.left + r.width / 2, y: r.top - box.top + r.height / 2, done: n.parentElement.classList.contains('done') };
  });
  svg.setAttribute('width', box.width); svg.setAttribute('height', path.scrollHeight);
  svg.innerHTML = pts.slice(1).map((b, i) => {
    const a = pts[i], my = (a.y + b.y) / 2;
    return `<path class="${a.done && b.done ? 'on' : ''}" d="M${a.x} ${a.y} C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}"/>`;
  }).join('');
}
window.addEventListener('resize', () => { if (BY_LEVELS && $('.path')) drawPathLine($('#main')); });

// ---- RUTA ----
function renderRoute(main) {
  if (BY_LEVELS) return renderPath(main);
  const t = today();
  const curUnit = BY_LEVELS ? pendingSteps(1)[0]?.unit : SCHEDULE[t]?.main?.unit || (t < PLAN_START ? SYLLABUS[0].id : null);
  const curLevel = BY_LEVELS ? levelNow().id : null;
  const curIdx = SYLLABUS.findIndex(u => u.id === curUnit);
  main.innerHTML = `
    <header class="page-head"><div><h1>Tu ruta</h1><p class="muted">${esc(ACTIVE_COURSE.subtitle)}, ${BY_LEVELS ? 'nivel a nivel, a tu ritmo' : 'unidad a unidad'}.</p></div>${BY_LEVELS ? '' : `<a class="btn small" href="#calendario">${icon('calendar')}Calendario</a>`}</header>
    ${LEVELS.map(lv => {
      const r = LEVEL_RANGES[lv.id], units = SYLLABUS.filter(u => u.level === lv.id);
      const now = BY_LEVELS ? lv.id === curLevel : (t >= r.from && t <= r.to) || (t < PLAN_START && lv.id === LEVELS[0].id);
      const done = units.filter(u => unitStatus(u.id).pct === 100).length;
      return `<section class="lvl ${now ? 'now' : ''}" style="--c:${lv.color}">
        <header>
          <div><h2>${lv.name}${now ? '<span class="nowtag">Ahora</span>' : ''}</h2><p class="muted small">${esc(lv.goal)}</p></div>
          <div class="lvmeta">${BY_LEVELS ? '' : `<span>${shortDate(r.from)} – ${shortDate(r.to)}</span>`}${units.length ? `<b>${done}/${units.length}</b>` : ''}</div>
        </header>
        ${units.length ? `<ol class="units">${units.map(u => {
          const st = unitStatus(u.id), n = SYLLABUS.indexOf(u) + 1;
          return `<li><a href="#unidad/${u.id}/teoria" class="${st.ready ? '' : 'pending'} ${u.id === curUnit ? 'cur' : ''}">
            <span class="n ${st.pct === 100 ? 'ok' : ''}">${st.pct === 100 ? icon('check') : n}</span>
            <span class="ut"><b>${esc(u.title)}</b><small>${esc(u.focus)}</small></span>
            <span class="us">${BY_LEVELS && curIdx >= 0 && SYLLABUS.indexOf(u) > curIdx && !st.pct ? icon('lock', 'chev') : !st.ready ? `<small>${UNIT_START[u.id] && !BY_LEVELS ? shortDate(UNIT_START[u.id]) : ''}</small>` : st.pct && st.pct < 100 ? `<span class="ring" style="--p:${st.pct}">${st.pct}</span>` : icon('right', 'chev')}</span>
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
        <p>Conecta tu servidor de Jellyfin para ver tus series y películas aquí mismo, con subtítulos ${ACTIVE_COURSE.inLang}.</p>
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
    const isEn = s => ACTIVE_COURSE.sub.test(s.lang || '') || ACTIVE_COURSE.sub.test(s.label || ''); // subtítulos en el idioma del curso
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
    if (enIdx < 0) toast(`Este episodio no tiene subtítulos ${ACTIVE_COURSE.inLang} en el servidor: los retos de traducción no funcionarán.`);
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
      <p>Resume <b>${ACTIVE_COURSE.inLang}</b>, en 2 o 3 frases, lo que ha pasado desde el último reto. No hace falta que sea perfecto.</p>
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
// El tema va aparte del progreso: es de este dispositivo y no se sincroniza.
function theme() { try { return localStorage.getItem('tracker:theme') === 'light' ? 'light' : 'dark'; } catch { return 'dark'; } }
function setTheme(value) {
  try { localStorage.setItem('tracker:theme', value); } catch {}
  if (value === 'light') document.documentElement.dataset.theme = 'light'; else delete document.documentElement.dataset.theme;
}

function renderSettings(main) {
  main.innerHTML = `
    <h1>Ajustes</h1>
    <h2>Apariencia</h2>
    <div class="panel">
      <label class="field">Tema
        <select id="theme">${[['dark', 'Oscuro'], ['light', 'Claro']].map(([v, l]) => `<option value="${v}" ${theme() === v ? 'selected' : ''}>${l}</option>`).join('')}</select>
      </label>
    </div>
    <h2>Tu forma de estudiar</h2>
    <div class="panel" id="pacebox">
      <p class="muted small">Solo para el curso de ${esc(ACTIVE_COURSE.name.toLowerCase())}. Cada curso puede tener su propio ritmo.</p>
      ${paceFormHtml(PACE)}
      <div class="row"><button class="primary" id="pacesave">Guardar</button></div>
    </div>
    <h2>Chat con Claude</h2>
    ${Chat.settingsHtml()}
    <h2>Retos en series y películas</h2>
    <div class="panel">
      <p>Mientras ves algo ${ACTIVE_COURSE.inLang}, la película se para cada cierto tiempo y te propone traducir la última frase o resumir lo que ha pasado.</p>
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
  Chat.bindSettings();
  $('#theme').onchange = e => setTheme(e.target.value);
  const getPace = bindPaceForm($('#pacebox'), PACE);
  $('#pacesave').onclick = () => { CourseStore.setPace(ACTIVE_COURSE.id, getPace()); location.hash = 'hoy'; location.reload(); };
  $('#quizevery').onchange = e => { store.set(st => { st.quizEvery = Number(e.target.value); }); toast('Guardado'); };
  Sync.paint();
  $('#syncnow').onclick = () => Sync.now();
  $('#syncon').onchange = e => { store.set(s => { s.syncOn = e.target.checked; }); Sync.paint(); };
  $('#export').addEventListener('click', () => {
    const { jellyfin, ...data } = store.get();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
    a.download = `speakly-${ACTIVE_COURSE.id}-progreso-${today()}.json`; a.click();
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
if (NativePrefs) NativePrefs.get({ key: ACTIVE_COURSE.storeKey }).then(({ value }) => {
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
// Cabecera: curso activo (para cambiar) y chat
$('#coursebtn').innerHTML = `<span class="cflag small">${flagOf(ACTIVE_COURSE.id)}</span>`;
$('#coursebtn').onclick = () => { location.hash = 'cursos'; };
$('#chatbtn').onclick = () => Chat.toggle();
// Pronunciación: cualquier botón con data-say se lee en voz alta en el idioma del curso
const SPEAK_LANG = ACTIVE_COURSE.lang || 'en-GB';
function speak(text) {
  if (!('speechSynthesis' in window)) { toast('Este dispositivo no puede leer en voz alta.'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text); u.lang = SPEAK_LANG; u.rate = 0.85;
  const v = speechSynthesis.getVoices().find(x => x.lang?.toLowerCase().startsWith(SPEAK_LANG.slice(0, 2)));
  if (v) u.voice = v; else if (!SPEAK_LANG.startsWith('en')) toast(`No hay voz ${ACTIVE_COURSE.inLang} instalada en este dispositivo.`);
  speechSynthesis.speak(u);
}
document.addEventListener('click', e => { const b = e.target.closest('[data-say]'); if (b) { e.preventDefault(); speak(b.dataset.say); } });
route();
