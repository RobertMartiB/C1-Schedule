// ---- Estado guardado en el navegador ----
const store = (() => {
  const KEY = 'c1tracker:v1';
  const defaults = () => ({ done: {}, notes: {}, books: {}, exam: '2027-03-13', jellyfin: null, resume: {} });
  let state;
  try { state = { ...defaults(), ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { state = defaults(); }
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
const phaseOf = s => PHASES.find(p => p.id === SCHEDULE[s]?.phase);
const bookById = id => BOOKS.find(b => b.id === id);
const KIND_ICON = { grammar: '📘', uoe: '✍️', exam: '🎯', writing: '📝', mock: '⏱️', review: '🔁', setup: '🧭', rest: '☕' };

function isDone(s, i) { return (store.get().done[s] || []).includes(i); }
function toggleDone(s, i) {
  store.set(st => {
    const arr = new Set(st.done[s] || []);
    arr.has(i) ? arr.delete(i) : arr.add(i);
    st.done[s] = [...arr];
  });
}
function dayStatus(s) {
  const d = SCHEDULE[s];
  if (!d || !d.tasks.length) return 'none';
  const n = d.tasks.filter((_, i) => isDone(s, i)).length;
  if (n === d.tasks.length) return 'done';
  if (n > 0) return 'partial';
  return s < today() ? 'missed' : 'todo';
}
function streak() {
  let s = today(), n = 0;
  if (dayStatus(s) !== 'done') s = addDays(s, -1);
  while (SCHEDULE[s] && dayStatus(s) === 'done') { n++; s = addDays(s, -1); }
  return n;
}
function totals() {
  let total = 0, done = 0, dueSoFar = 0, doneSoFar = 0;
  for (const s in SCHEDULE) {
    const n = SCHEDULE[s].tasks.length, k = (store.get().done[s] || []).length;
    total += n; done += k;
    if (s <= today()) { dueSoFar += n; doneSoFar += k; }
  }
  return { total, done, dueSoFar, doneSoFar };
}

// ---- Navegación ----
let selectedDate = null;
function route() {
  const [view, arg] = (location.hash.slice(1) || 'hoy').split('/');
  document.querySelectorAll('nav a').forEach(a => a.classList.toggle('active', a.dataset.view === view));
  const main = $('#main');
  ({ hoy: renderToday, calendario: renderCalendar, materiales: renderBooks, series: renderSeries, ajustes: renderSettings }[view] || renderToday)(main, arg);
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);

// ---- HOY ----
function bookAlerts() {
  const out = [], t = today();
  for (const b of BOOKS) {
    const st = store.get().books[b.id] || {};
    const needIn = daysBetween(t, b.from);
    if (!['casa', 'devuelto'].includes(st.status) && b.to >= t && needIn <= 7)
      out.push(`<b>${esc(b.title)}</b>: ${needIn > 0 ? `lo necesitas en ${needIn} día${needIn > 1 ? 's' : ''} (${shortDate(b.from)})` : 'lo necesitas ya'} y no lo tienes en casa.`);
    if (st.status === 'casa' && st.due) {
      const left = daysBetween(t, st.due);
      if (left <= 3) out.push(`<b>${esc(b.title)}</b>: ${left < 0 ? `préstamo vencido hace ${-left} día${left < -1 ? 's' : ''}` : left === 0 ? 'se devuelve hoy' : `se devuelve en ${left} día${left > 1 ? 's' : ''}`}. ${b.to > st.due ? 'Renuévalo, aún lo necesitas hasta el ' + shortDate(b.to) + '.' : ''}`);
    }
  }
  return out;
}

function renderToday(main, arg) {
  const t = today();
  let s = arg || selectedDate || t;
  if (s < PLAN_START && !arg) s = PLAN_START;
  if (s > PLAN_END && !arg) s = PLAN_END;
  selectedDate = s;
  const d = SCHEDULE[s];
  const p = phaseOf(s);
  const tot = totals();
  const exam = store.get().exam;
  const toExam = daysBetween(t, exam);
  const toStart = daysBetween(t, PLAN_START);
  const alerts = bookAlerts();
  const isToday = s === t;

  main.innerHTML = `
    <section class="stats">
      <div class="stat"><span class="num">${toExam > 0 ? toExam : '—'}</span><span>días para el examen</span></div>
      <div class="stat"><span class="num">${streak()}</span><span>días seguidos</span></div>
      <div class="stat"><span class="num">${tot.total ? Math.round(tot.done / tot.total * 100) : 0}%</span><span>del plan hecho</span></div>
      <div class="stat"><span class="num">${tot.dueSoFar - tot.doneSoFar}</span><span>tareas atrasadas</span></div>
    </section>
    ${toStart > 0 ? `<div class="banner">Empiezas el <b>${longDate(PLAN_START)}</b> (en ${toStart} día${toStart > 1 ? 's' : ''}). Aquí tienes cómo será tu primer día.</div>` : ''}
    ${alerts.length ? `<div class="banner warn">📚 <b>Biblioteca</b><ul>${alerts.map(a => `<li>${a}</li>`).join('')}</ul><a href="#materiales">Ir a Materiales →</a></div>` : ''}

    <div class="dayhead">
      <button class="icon" id="prev" aria-label="Día anterior" ${s <= PLAN_START ? 'disabled' : ''}>‹</button>
      <div>
        <h1>${isToday ? 'Hoy · ' : ''}${longDate(s)}</h1>
        ${p ? `<span class="phase" style="--c:${p.color}">Semanas ${p.weeks} · ${esc(p.title)}</span>` : ''}
      </div>
      <button class="icon" id="next" aria-label="Día siguiente" ${s >= PLAN_END ? 'disabled' : ''}>›</button>
    </div>
    ${!isToday && t >= PLAN_START && t <= PLAN_END ? `<a class="back" href="#hoy/${t}">← Volver a hoy</a>` : ''}

    ${!d ? '<p class="empty">Este día está fuera del plan.</p>' : `
    <ul class="tasks">
      ${d.tasks.map((task, i) => {
        const book = task.book && bookById(task.book);
        return `<li class="task ${isDone(s, i) ? 'done' : ''}">
          <label>
            <input type="checkbox" data-i="${i}" ${isDone(s, i) ? 'checked' : ''}>
            <span class="ico">${KIND_ICON[task.kind] || '•'}</span>
            <span class="body">
              <span class="title">${esc(task.text)}</span>
              <span class="detail">${esc(task.detail)}</span>
              ${book ? `<span class="tag">📖 Libro físico: ${esc(book.title)}</span>` : ''}
              ${task.link ? `<a class="tag link" href="${task.link}" target="_blank" rel="noopener">Abrir ${new URL(task.link).hostname} ↗</a>` : ''}
            </span>
          </label>
        </li>`;
      }).join('')}
    </ul>
    ${d.input ? `
    <div class="input-card">
      <div>
        <span class="label">🎬 Input en inglés</span>
        <h3>${esc(d.input.name)} · T${d.input.season}E${d.input.episode}</h3>
        <p>${d.input.fresh ? 'Episodio nuevo. Ponlo con <b>audio y subtítulos en inglés</b>.' : 'Si ya lo viste: repite 15–20 min de escenas del episodio y apunta 5 expresiones nuevas.'}</p>
      </div>
      <button class="primary" id="watch">▶ Ver en Jellyfin</button>
    </div>` : ''}
    <label class="notes">
      <span>Notas del día (errores, palabras nuevas…)</span>
      <textarea id="note" rows="3" placeholder="p. ej. 'inversion after Not only… → repasar unidad 99'">${esc(store.get().notes[s] || '')}</textarea>
    </label>`}

    ${p ? `<details class="phaseinfo"><summary>Qué toca en esta fase</summary>
      <p><b>Libro:</b> ${esc(p.books)}</p><p>${esc(p.summary)}</p>
      ${p.series ? `<p><b>Serie:</b> ${esc(p.series.name)} T${p.series.season} (subtítulos en inglés)</p>` : ''}</details>` : ''}
  `;

  $('#prev')?.addEventListener('click', () => { location.hash = `hoy/${addDays(s, -1)}`; });
  $('#next')?.addEventListener('click', () => { location.hash = `hoy/${addDays(s, 1)}`; });
  main.querySelectorAll('.tasks input').forEach(cb => cb.addEventListener('change', () => {
    toggleDone(s, Number(cb.dataset.i));
    renderToday(main, s);
  }));
  $('#note')?.addEventListener('input', e => store.set(st => {
    if (e.target.value.trim()) st.notes[s] = e.target.value; else delete st.notes[s];
  }));
  $('#watch')?.addEventListener('click', async e => {
    if (!Jellyfin.connected()) { location.hash = 'series'; return; }
    const btn = e.currentTarget; btn.disabled = true; btn.textContent = 'Buscando…';
    try {
      const ep = await Jellyfin.findEpisode(d.input.name, d.input.season, d.input.episode);
      if (!ep) { toast(`No encuentro "${d.input.name}" T${d.input.season}E${d.input.episode} en tu Jellyfin.`); return; }
      openPlayer(ep);
    } catch (err) { toast(err.message); }
    finally { btn.disabled = false; btn.textContent = '▶ Ver en Jellyfin'; }
  });
}

// ---- CALENDARIO ----
function renderCalendar(main) {
  const months = [];
  for (let d = parse(PLAN_START); d <= parse(PLAN_END); d = new Date(d.getFullYear(), d.getMonth() + 1, 1))
    months.push([d.getFullYear(), d.getMonth()]);
  const t = today();

  main.innerHTML = `
    <h1>Calendario</h1>
    <div class="legend">
      ${PHASES.map(p => `<div class="leg" style="--c:${p.color}">
        <b>Sem. ${p.weeks} · ${esc(p.title)}</b>
        <span>${shortDate(p.from)} – ${shortDate(p.to)}</span>
        <span>${esc(p.books)}</span>
        ${p.series ? `<span>🎬 ${esc(p.series.name)} T${p.series.season}</span>` : ''}
      </div>`).join('')}
    </div>
    <div class="keys"><span class="k done"></span>Hecho <span class="k partial"></span>A medias <span class="k missed"></span>Pendiente atrasado <span class="k exam"></span>Examen</div>
    <div class="months">
      ${months.map(([y, m]) => {
        const first = new Date(y, m, 1), lead = (first.getDay() + 6) % 7, n = new Date(y, m + 1, 0).getDate();
        let cells = '';
        for (let i = 0; i < lead; i++) cells += '<div></div>';
        for (let day = 1; day <= n; day++) {
          const s = iso(new Date(y, m, day)), sd = SCHEDULE[s], p = phaseOf(s);
          const cls = ['cell', dayStatus(s), s === t ? 'today' : '', s === store.get().exam ? 'exam' : '', sd?.holiday ? 'holiday' : ''].join(' ');
          const title = sd ? sd.tasks.map(x => x.text).join('\n') : '';
          cells += sd || s === store.get().exam
            ? `<a href="#hoy/${s}" class="${cls}" style="--c:${p?.color || 'transparent'}" title="${esc(sd?.holiday || title || 'Examen')}">${day}</a>`
            : `<div class="cell off">${day}</div>`;
        }
        return `<div class="month"><h3>${MONTHS[m]} ${y}</h3>
          <div class="grid"><span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span>${cells}</div></div>`;
      }).join('')}
    </div>`;
}

// ---- MATERIALES ----
const STATUS = { pendiente: 'Pendiente de coger', reservado: 'Reservado', casa: 'Lo tengo en casa', devuelto: 'Devuelto' };
function renderBooks(main) {
  const t = today();
  main.innerHTML = `
    <h1>Materiales</h1>
    <p class="muted">Libros físicos de la biblioteca. Apunta cuándo los coges y la fecha de devolución: te avisaré en "Hoy" si hay que renovarlos o ir a buscarlos.</p>
    <div class="books">
      ${BOOKS.map(b => {
        const st = store.get().books[b.id] || {};
        const active = b.from <= t && b.to >= t;
        return `<article class="book ${active ? 'active' : ''}" data-id="${b.id}">
          <div class="cover">📖</div>
          <div class="info">
            <h3>${esc(b.title)}</h3>
            <span class="muted">${esc(b.author)}</span>
            <p>${esc(b.why)}</p>
            <p class="when">Lo usas del <b>${shortDate(b.from)}</b> al <b>${shortDate(b.to)}</b>${active ? ' · <span class="now">ahora</span>' : ''}</p>
            <div class="row">
              <label>Estado
                <select data-k="status">${Object.entries(STATUS).map(([k, v]) => `<option value="${k}" ${(st.status || 'pendiente') === k ? 'selected' : ''}>${v}</option>`).join('')}</select>
              </label>
              <label>Devolver el
                <input type="date" data-k="due" value="${st.due || ''}">
              </label>
            </div>
          </div>
        </article>`;
      }).join('')}
    </div>
    <h2>Online (gratis)</h2>
    <ul class="links">
      <li><a href="https://writeandimprove.com" target="_blank" rel="noopener">Write & Improve</a> — corrección automática de tus writings (Cambridge).</li>
      <li><a href="https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/" target="_blank" rel="noopener">C1 Advanced · Cambridge</a> — formato del examen y sample papers oficiales.</li>
    </ul>`;
  main.querySelectorAll('.book [data-k]').forEach(el => el.addEventListener('change', () => {
    const id = el.closest('.book').dataset.id;
    store.set(s => { s.books[id] = { ...(s.books[id] || {}), [el.dataset.k]: el.value }; });
    toast('Guardado');
  }));
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
  const planNames = [...new Set(PHASES.filter(p => p.series).map(p => p.series.name.toLowerCase()))];
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
    <label class="field">Fecha del examen <input type="date" id="exam" value="${store.get().exam}"></label>
    <h2>Copia de seguridad</h2>
    <p class="muted">Tu progreso se guarda en este navegador. Exporta una copia de vez en cuando.</p>
    <div class="row">
      <button id="export">Exportar progreso</button>
      <label class="btn">Importar<input type="file" id="import" accept=".json" hidden></label>
    </div>`;
  $('#exam').addEventListener('change', e => { store.set(s => { s.exam = e.target.value; }); toast('Guardado'); });
  $('#export').addEventListener('click', () => {
    const { jellyfin, ...data } = store.get();
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
    a.download = `c1-progreso-${today()}.json`; a.click();
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
