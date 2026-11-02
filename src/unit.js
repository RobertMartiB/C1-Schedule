// Pantalla de una unidad: teoría, práctica (ejercicios autocorregidos) y lectura desmontada.

const ROLE = {
  S: { name: 'Sujeto', cls: 's' }, V: { name: 'Verbo principal', cls: 'v' }, O: { name: 'Complemento', cls: 'o' },
  R: { name: 'Oración secundaria', cls: 'r' }, C: { name: 'Conector', cls: 'c' }, X: { name: 'Información extra', cls: 'x' },
  W: { name: 'Palabra', cls: 'w' },
};
const roleLegend = () => COURSE_DEF.id !== 'en' ? '' : `<div class="legend-roles">${Object.values(ROLE).filter(r => r.cls !== 'w').map(r => `<span class="${r.cls}">${r.name}</span>`).join('')}</div>`;
// Letras de cualquier alfabeto (é, ñ, ß, кириллица, 한글…); se ignoran la puntuación y los apóstrofos
const noMarks = s => normAns(s).normalize('NFD').replace(/\p{M}/gu, '');
const normAns = s => String(s || '').normalize('NFC').toLowerCase().replace(/[’'`´]/g, '').replace(/[^\p{L}\p{M}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();

const progress = id => store.get().units?.[id] || {};
function setProgress(id, fn) { store.set(s => { s.units ||= {}; s.units[id] ||= {}; fn(s.units[id]); }); }

function unitStatus(id) {
  const p = progress(id), u = UNITS[id];
  if (!u) return { ready: false, pct: 0 };
  const exTotal = u.exercises.length, exOk = Object.values(p.ex || {}).filter(Boolean).length;
  const parts = [p.theory ? 1 : 0, exTotal ? exOk / exTotal : 0, p.reading ? 1 : 0];
  return { ready: true, pct: Math.round(parts.reduce((a, b) => a + b, 0) / 3 * 100), theory: !!p.theory, exOk, exTotal, reading: !!p.reading };
}

function renderUnit(main, id, tab = 'teoria') {
  const meta = unitById(id), u = UNITS[id];
  if (!meta) { main.innerHTML = '<p class="empty">Esa unidad no existe.</p>'; return; }
  const lv = levelById(meta.level);
  const n = SYLLABUS.indexOf(meta) + 1;
  const head = `
    <a class="back" href="#ruta">← Ruta</a>
    <header class="unit-head" style="--c:${lv.color}">
      <span class="phase" style="--c:${lv.color}">${lv.name} · Unidad ${n}</span>
      <h1>${esc(meta.title)}</h1>
      <p class="muted">${esc(meta.focus)}</p>
    </header>`;
  if (!u) {
    main.innerHTML = head + `<div class="banner">Esta unidad aún no está preparada. Empieza el <b>${UNIT_START[id] ? longDate(UNIT_START[id]) : '—'}</b>.<br>Pídele a Claude: <b>"prepara la unidad ${n}"</b> y la tendrás lista con su teoría, ejercicios y lectura.</div>`;
    return;
  }
  const st = unitStatus(id);
  const locked = st.exOk < st.exTotal && !st.reading;
  const tabs = [['teoria', `${icon('open')}Teoría`, st.theory], ['practica', `${icon('pencil')}Práctica <span class="cnt">${st.exOk}/${st.exTotal}</span>`, st.exOk === st.exTotal], ['lectura', `${icon(locked ? 'lock' : 'search')}Lectura`, st.reading]];
  main.innerHTML = head + `
    <nav class="tabs">${tabs.map(([t, label, ok]) => `<a href="#unidad/${id}/${t}" class="${t === tab ? 'on' : ''} ${t === 'lectura' && locked ? 'locked' : ''}">${label}${ok ? icon('check', 'ok') : ''}</a>`).join('')}</nav>
    <div id="tabbody"></div>
    ${tab !== 'teoria' ? `<button class="theory-fab" id="theoryFab">${icon('open')}<span>Teoría</span></button>` : ''}`;
  const body = $('#tabbody');
  if (tab === 'practica') renderPractice(body, id);
  else if (tab === 'lectura') { if (locked) renderGate(body, id); else renderReading(body, id); }
  else renderTheory(body, id);
  $('#theoryFab')?.addEventListener('click', () => openTheoryDrawer(id));
}

// ---------- Teoría en un panel lateral (para consultarla sin salir) ----------
function openTheoryDrawer(id) {
  let dlg = $('#theorydlg');
  if (!dlg) { dlg = document.createElement('dialog'); dlg.id = 'theorydlg'; document.body.appendChild(dlg); dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); }); }
  const meta = unitById(id), u = UNITS[id];
  dlg.innerHTML = `<div class="drawer">
    <div class="drawer-head"><div><span class="overline">Teoría</span><h2>${esc(meta.title)}</h2></div><button class="icon" id="tdclose" aria-label="Cerrar">${icon('x')}</button></div>
    <div class="theory">${u.theory.map(sec => `<section><h2>${esc(sec.h)}</h2>${sec.html}</section>`).join('')}</div>${roleLegend()}</div>`;
  dlg.showModal();
  $('#tdclose').onclick = () => dlg.close();
}

// ---------- La lectura se desbloquea al acertar toda la práctica ----------
function renderGate(body, id) {
  const st = unitStatus(id), left = st.exTotal - st.exOk;
  body.innerHTML = `<div class="gate">${icon('lock')}<h2>Antes, acierta toda la práctica</h2>
    <p>Te ${left === 1 ? 'queda <b>1 ejercicio</b>' : `quedan <b>${left} ejercicios</b>`} por acertar. Así llegas a la lectura con la gramática bien asentada.</p>
    <a class="btn primary" href="#unidad/${id}/practica">${icon('pencil')}Ir a mis fallos</a></div>`;
}

// ---------- Teoría ----------
function renderTheory(body, id) {
  const u = UNITS[id];
  body.innerHTML = `
    <div class="theory">${u.theory.map(sec => `<section><h2>${esc(sec.h)}</h2>${sec.html}</section>`).join('')}</div>
    ${roleLegend()}
    <div class="row end"><button class="primary" id="theoryDone">${progress(id).theory ? 'Ir a la práctica' : 'He leído la teoría'}${icon('arrow')}</button></div>`;
  $('#theoryDone').onclick = () => { setProgress(id, p => { p.theory = true; }); location.hash = `unidad/${id}/practica`; };
}

// ---------- Práctica ----------
function renderPractice(body, id, onlyWrong = false) {
  const u = UNITS[id], p = progress(id);
  const list = u.exercises.map((ex, i) => ({ ex, i })).filter(({ i }) => !onlyWrong || p.ex?.[i] !== true);
  const wrong = u.exercises.filter((_, i) => p.ex?.[i] === false).length;
  body.innerHTML = `
    <div class="row between">
      <p class="muted">Corrige cada ejercicio al momento. Lee siempre la explicación, aunque aciertes.</p>
      <div class="row">${onlyWrong ? '<button id="all">Ver todos</button>' : wrong ? `<button id="wrongonly">Rehacer mis ${wrong} fallos</button>` : ''}<button id="resetex">Empezar de cero</button></div>
    </div>
    <ol class="exlist">${list.map(({ ex, i }) => `<li class="exitem ${p.ex?.[i] === true ? 'was-ok' : p.ex?.[i] === false ? 'was-bad' : ''}" data-i="${i}">${exStateTag(p.ex?.[i])}${exerciseHtml(ex, i)}</li>`).join('') || '<p class="empty">¡No tienes fallos pendientes!</p>'}</ol>
    <div id="pracsum"></div>`;
  const drawSum = () => {
    const pr = progress(id), bad = u.exercises.filter((_, i) => pr.ex?.[i] === false).length, todo = u.exercises.filter((_, i) => pr.ex?.[i] === undefined).length;
    $('#pracsum').innerHTML = bad || todo
      ? `<div class="sumbox bad">${icon('info')}<div><b>${bad ? `${bad} ${bad === 1 ? 'ejercicio fallado' : 'ejercicios fallados'}` : ''}${bad && todo ? ' · ' : ''}${todo ? `${todo} sin hacer` : ''}</b><p>Para pasar a la lectura tienes que acertarlos todos.</p></div>${bad ? '<button class="primary" id="redo">Repetir los fallos</button>' : ''}</div>`
      : `<div class="sumbox ok">${icon('check')}<div><b>¡Práctica completa!</b><p>Todos los ejercicios acertados.</p></div><a class="btn primary" href="#unidad/${id}/lectura">Ir a la lectura${icon('arrow')}</a></div>`;
    $('#redo')?.addEventListener('click', () => renderPractice(body, id, true));
  };
  drawSum();
  body.querySelectorAll('.exitem').forEach(li => bindExercise(li, u.exercises[li.dataset.i], ok => {
    setProgress(id, pr => { (pr.ex ||= {})[li.dataset.i] = ok; });
    li.classList.toggle('was-ok', ok); li.classList.toggle('was-bad', !ok); li.querySelector('.state')?.remove();
    drawSum();
    const tabsEl = document.querySelector('.tabs a:nth-child(2)'); const st = unitStatus(id);
    if (tabsEl) tabsEl.innerHTML = `${icon('pencil')}Práctica <span class="cnt">${st.exOk}/${st.exTotal}</span>${st.exOk === st.exTotal ? icon('check', 'ok') : ''}`;
  }));
  $('#wrongonly')?.addEventListener('click', () => renderPractice(body, id, true));
  $('#all')?.addEventListener('click', () => renderPractice(body, id, false));
  $('#resetex').onclick = e => {
    if (!e.target.dataset.sure) { e.target.dataset.sure = 1; e.target.textContent = 'Pulsa otra vez para borrar tus respuestas'; return; }
    setProgress(id, pr => { pr.ex = {}; }); renderPractice(body, id);
  };
}

// Explica cada palabra mal elegida según el papel que tiene en la frase.
function findHints(parts, selected, target) {
  const toks = tokensOf(parts), msgs = [], seenParts = new Set();
  const clean = w => w.replace(/[.,;:!?"“”]/g, '');
  const partText = pi => parts[pi][1].replace(/[.,;:]$/, '');
  for (const k of selected) {
    const t = toks[k];
    if (t.role === target || seenParts.has(t.pi)) continue;
    seenParts.add(t.pi);
    const w = clean(t.w), prev = clean(toks[k - 1]?.w || '').toLowerCase(), first = partText(t.pi).split(/\s+/)[0];
    const isInf = w.toLowerCase() === 'to' || prev === 'to';
    if (target === 'V') {
      if (isInf) msgs.push(`<b>«${esc(w.toLowerCase() === 'to' ? 'to ' + clean(toks[k + 1]?.w || '') : 'to ' + w)}»</b> es un <b>infinitivo</b> (to + verbo): no está conjugado, así que no puede ser el verbo principal. Depende de otro verbo.`);
      else if (t.role === 'R') msgs.push(`<b>«${esc(w)}»</b> está dentro de una <b>oración secundaria</b> («${esc(partText(t.pi))}»). Empieza por <i>${esc(first)}</i> y solo añade información. Tapa esa pieza: el verbo principal está fuera.`);
      else if (/ing$/i.test(w) && t.role !== 'V') msgs.push(`<b>«${esc(w)}»</b> acaba en -ing y no lleva auxiliar delante (am/is/are/was…): funciona como nombre o adjetivo, no como verbo principal.`);
      else if (t.role === 'S') msgs.push(`<b>«${esc(partText(t.pi))}»</b> es el <b>sujeto</b>: quién hace la acción. El verbo principal va justo después.`);
      else if (t.role === 'O') msgs.push(`<b>«${esc(partText(t.pi))}»</b> es lo que <b>completa</b> al verbo: va detrás de él.`);
      else if (t.role === 'C') msgs.push(`<b>«${esc(w)}»</b> es un <b>conector</b>: une o relaciona ideas, no es un verbo.`);
      else msgs.push(`<b>«${esc(partText(t.pi))}»</b> es <b>información extra</b> (lugar, tiempo, modo…): si la quitas, la frase sigue funcionando.`);
    } else if (target === 'S') {
      if (t.role === 'R') msgs.push(`<b>«${esc(partText(t.pi))}»</b> es una oración secundaria que cuelga del sujeto: dice <i>cuál</i>, pero no es el núcleo.`);
      else if (t.role === 'V') msgs.push(`<b>«${esc(w)}»</b> es el <b>verbo</b>. El sujeto es lo que va justo delante de él.`);
      else if (t.role === 'X') msgs.push(`<b>«${esc(partText(t.pi))}»</b> va detrás de una preposición o indica cuándo/dónde: <b>nunca</b> es el sujeto.`);
      else msgs.push(`<b>«${esc(w)}»</b> no es el sujeto. Pregúntale al verbo «¿quién?» o «¿qué?».`);
    } else {
      msgs.push(`<b>«${esc(w)}»</b> es <b>${ROLE[t.role].name.toLowerCase()}</b>, no ${ROLE[target].name.toLowerCase()}.`);
    }
  }
  const want = toks.map((t, k) => (t.role === target ? k : -1)).filter(k => k >= 0);
  const missing = want.filter(k => !selected.has(k));
  if (missing.length && missing.length < want.length) msgs.push(`Te ha faltado una parte: <b>«${esc(want.map(k => toks[k].w).join(' ').replace(/[.,]$/, ''))}»</b> va entero (el auxiliar forma un bloque con el verbo).`);
  else if (missing.length && !selected.size) msgs.push(`No has marcado nada. La respuesta es <b>«${esc(want.map(k => toks[k].w).join(' ').replace(/[.,]$/, ''))}»</b>.`);
  return msgs;
}

const tokensOf = parts => parts.flatMap(([role, text], pi) => text.split(/\s+/).filter(Boolean).map(w => ({ w, role, pi })));

const exStateTag = st => st === true ? `<span class="state ok">${icon('check')}Acertado</span>` : st === false ? `<span class="state bad">${icon('repeat')}Fallado: vuelve a intentarlo</span>` : '';

// Orden de las opciones mezclado, pero siempre el mismo para cada pregunta (no cambia al volver a entrar)
function mixOrder(opts, seed) {
  const h = str => {
    let x = [...str].reduce((a, c) => Math.imul(a ^ c.codePointAt(0), 16777619) >>> 0, (2166136261 ^ Math.imul(seed + 1, 2654435761)) >>> 0);
    x = Math.imul(x ^ (x >>> 16), 2246822507); x = Math.imul(x ^ (x >>> 13), 3266489909);
    return (x ^ (x >>> 16)) >>> 0;
  };
  return opts.map((o, j) => ({ j, k: h(o + '|' + j) })).sort((a, b) => a.k - b.k).map(x => x.j);
}

function exerciseHtml(ex, i) {
  const fb = '<div class="fb" hidden></div>';
  if (ex.type === 'mcq') return `<div class="exq">${ex.q}</div><div class="choices">${mixOrder(ex.opts, i).map(j => `<button class="choice" data-j="${j}">${esc(ex.opts[j])}</button>`).join('')}</div>${fb}`;
  if (ex.type === 'gap') return `<div class="exq">${ex.q.replace('___', `<input class="gapin" aria-label="Respuesta" autocomplete="off" autocapitalize="off" spellcheck="false">`)}</div><div class="row"><button class="check">Comprobar</button></div>${fb}`;
  if (ex.type === 'order') {
    const shuffled = ex.words.map((w, k) => ({ w, k })).sort((a, b) => ((a.k * 7 + i * 3) % 11) - ((b.k * 7 + i * 3) % 11));
    return `<div class="exq">${esc(ex.prompt)}</div><div class="built" aria-live="polite"></div><div class="pool">${shuffled.map(o => `<button class="chip" data-k="${o.k}">${esc(o.w)}</button>`).join('')}</div><div class="row"><button class="check">Comprobar</button></div>${fb}`;
  }
  if (ex.type === 'find') return `<div class="exq">${esc(ex.prompt)}</div><div class="tokens">${tokensOf(ex.parts).map((t, k) => `<button class="tok" data-k="${k}">${esc(t.w)}</button>`).join(' ')}</div><div class="row"><button class="check">Comprobar</button></div>${fb}`;
  return '';
}

function bindExercise(li, ex, onResult) {
  const fb = li.querySelector('.fb');
  const show = (ok, extra = '') => {
    fb.hidden = false; fb.className = 'fb ' + (ok ? 'ok' : 'bad');
    fb.innerHTML = `<b>${ok ? 'Correcto.' : 'No es correcto.'}</b> ${extra}${ex.why ? ` <span class="why">${ok ? '' : '<span class="lab">Explicación</span>'}${esc(ex.why)}</span>` : ''}`;
    onResult(ok);
  };
  if (ex.type === 'mcq') {
    li.querySelectorAll('.choice').forEach(b => b.onclick = () => {
      const j = Number(b.dataset.j), ok = j === ex.a;
      li.querySelectorAll('.choice').forEach(x => { x.disabled = true; if (Number(x.dataset.j) === ex.a) x.classList.add('right'); });
      if (!ok) b.classList.add('wrong');
      show(ok, ok ? '' : `Has elegido <b>«${esc(ex.opts ? ex.opts[j] : b.textContent)}»</b>; la correcta es <b>«${esc(ex.opts ? ex.opts[ex.a] : '')}»</b>.`);
    });
  } else if (ex.type === 'gap') {
    const inp = li.querySelector('.gapin');
    const check = () => {
      const val = normAns(inp.value), exact = ex.a.includes(val);
      // Sin el acento correcto también vale, pero se avisa (en el móvil es fácil olvidarlo)
      const near = !exact && ex.a.find(x => noMarks(x) === noMarks(val));
      const ok = exact || !!near;
      inp.classList.toggle('right', ok); inp.classList.toggle('wrong', !ok);
      show(ok, near ? `Bien, pero fíjate en los acentos: se escribe <b>${esc(near)}</b>.` : ok ? '' : `Respuesta: <b>${esc(ex.a[0])}</b>.`);
    };
    li.querySelector('.check').onclick = check;
    inp.onkeydown = e => { if (e.key === 'Enter') check(); };
  } else if (ex.type === 'order') {
    const built = li.querySelector('.built'), picked = [];
    const draw = () => { built.innerHTML = picked.map((k, n) => `<button class="chip on" data-n="${n}">${esc(ex.words[k])}</button>`).join(' ') || '<span class="muted small">Toca las palabras en orden…</span>';
      built.querySelectorAll('.chip').forEach(c => c.onclick = () => { const k = picked.splice(Number(c.dataset.n), 1)[0]; li.querySelector(`.pool .chip[data-k="${k}"]`).hidden = false; draw(); }); };
    li.querySelectorAll('.pool .chip').forEach(c => c.onclick = () => { picked.push(Number(c.dataset.k)); c.hidden = true; draw(); });
    draw();
    li.querySelector('.check').onclick = () => { const ok = normAns(picked.map(k => ex.words[k]).join(' ')) === normAns(ex.a); show(ok, ok ? '' : `Orden correcto: <b>${esc(ex.a)}</b>.`); };
  } else if (ex.type === 'find') {
    const toks = tokensOf(ex.parts);
    li.querySelectorAll('.tok').forEach(t => t.onclick = () => t.classList.toggle('sel'));
    li.querySelector('.check').onclick = () => {
      const sel = new Set([...li.querySelectorAll('.tok.sel')].map(t => Number(t.dataset.k)));
      const want = new Set(toks.map((t, k) => (t.role === ex.role ? k : -1)).filter(k => k >= 0));
      const ok = sel.size === want.size && [...want].every(k => sel.has(k));
      li.querySelectorAll('.tok').forEach(t => { t.disabled = true; t.classList.add(ROLE[toks[t.dataset.k].role].cls); });
      const hints = ok ? [] : findHints(ex.parts, sel, ex.role);
      show(ok, ok ? '' : `<ul class="hints">${hints.map(h => `<li>${h}</li>`).join('')}</ul>`);
    };
  }
}

// ---------- Lectura desmontada ----------
function sentenceText(s) { return s.parts.map(p => p[1]).join(' '); }

function renderReading(body, id) {
  const r = UNITS[id].reading, p = progress(id);
  body.innerHTML = `
    <div class="instr">
      <b>Cómo hacerlo:</b> 1) Lee el texto entero una vez, sin parar, aunque no lo entiendas todo. 2) Toca cada frase: primero intenta encontrar tú el verbo principal y luego mira cómo se desmonta. 3) Contesta las preguntas.
    </div>
    <article class="reading">
      <h2>${esc(r.title)} <span class="phase" style="--c:var(--muted)">${esc(r.level)}</span></h2>
      <p class="rtext">${r.sentences.map((s, k) => `<span class="sent ${p.sent?.[k] ? 'sdone' : ''}" data-k="${k}" tabindex="0" role="button">${esc(sentenceText(s))}</span>`).join(' ')}</p>
    </article>
    <div id="breakdown"></div>
    <h2>Preguntas de comprensión</h2>
    <ol class="exlist">${r.questions.map((q, i) => `<li class="exitem" data-q="${i}">${exerciseHtml({ type: 'mcq', q: esc(q.q), opts: q.opts }, i)}</li>`).join('')}</ol>
    <div id="rsummary"></div>`;
  if (p.reading) readingSummary($('#rsummary'), id);
  const open = k => {
    body.querySelectorAll('.sent').forEach(x => x.classList.toggle('active', Number(x.dataset.k) === k));
    drawBreakdown($('#breakdown'), id, k);
    $('#breakdown').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
  body.querySelectorAll('.sent').forEach(el => {
    el.onclick = () => open(Number(el.dataset.k));
    el.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(Number(el.dataset.k)); } };
  });
  const answered = new Set();
  body.querySelectorAll('[data-q]').forEach(li => {
    const q = r.questions[li.dataset.q];
    bindExercise(li, { type: 'mcq', a: q.a, opts: q.opts, why: '' }, ok => {
      answered.add(li.dataset.q);
      setProgress(id, pr => { (pr.rq ||= {})[li.dataset.q] = ok; });
      if (answered.size === r.questions.length) { setProgress(id, pr => { pr.reading = true; }); readingSummary($('#rsummary'), id); }
    });
  });
}

function drawBreakdown(box, id, k) {
  const r = UNITS[id].reading, s = r.sentences[k];
  const toks = tokensOf(s.parts);
  const hasV = toks.some(t => t.role === 'V');
  box.innerHTML = `
    <div class="bd">
      <div class="row between"><b>Frase ${k + 1} de ${r.sentences.length}</b><button class="icon small" id="bdclose" aria-label="Cerrar">${icon('x')}</button></div>
      ${hasV ? `<p class="small muted">Reto: toca el verbo principal (o los verbos principales, si la frase tiene varias partes unidas por <i>and</i>, <i>or</i> o dos puntos).</p>
      <div class="tokens">${toks.map((t, n) => `<button class="tok" data-n="${n}">${esc(t.w)}</button>`).join(' ')}</div>
      <div class="row"><button id="bdcheck">Comprobar</button><button id="bdshow">Ver solución</button></div>` : ''}
      <div class="fb bad" id="bdhints" hidden></div>
      <div id="bdsol" ${hasV ? 'hidden' : ''}>
        <div class="parts">${s.parts.map(([role, text]) => `<span class="part ${ROLE[role].cls}" title="${ROLE[role].name}">${esc(text)}<small>${ROLE[role].name}</small></span>`).join('')}</div>
        <p class="es"><span class="lab">Traducción</span>${esc(s.es)}</p>
        <p class="note">${icon('bulb')}<span>${esc(s.note)}</span></p>
        ${s.vocab?.length ? `<ul class="vocab">${s.vocab.map(([w, es]) => `<li><b>${esc(w)}</b> — ${esc(es)} ${Vocab.addButton(w, es, sentenceText(s))}</li>`).join('')}</ul>` : ''}
        <div class="wordpick"><span class="lab">¿Otra palabra? Tócala para guardarla</span>
          <div class="wp-words">${toks.map(t => t.w.replace(/[.,;:!?"“”()]/g, '')).filter(w => w.length > 2).map(w => `<button class="wp" data-w="${esc(w)}">${esc(w)}</button>`).join('')}</div>
          <form class="wp-form" hidden><input class="wp-w" aria-label="Palabra"><input class="wp-es" placeholder="Significado en español" aria-label="Significado"><button class="primary" type="submit">${icon('plus')}Guardar</button></form>
        </div>
        <div class="row between">
          ${k > 0 ? `<button id="bdprev">← Frase anterior</button>` : '<span></span>'}
          ${k < r.sentences.length - 1 ? `<button class="primary" id="bdnext">Siguiente frase →</button>` : '<span class="muted small">Última frase. Ahora contesta las preguntas.</span>'}
        </div>
      </div>
    </div>`;
  const reveal = () => {
    $('#bdsol').hidden = false;
    box.querySelectorAll('.tok').forEach(t => { t.disabled = true; t.classList.add(ROLE[toks[t.dataset.n].role].cls); });
    setProgress(id, p => { (p.sent ||= {})[k] = true; });
    document.querySelector(`.sent[data-k="${k}"]`)?.classList.add('sdone');
  };
  box.querySelectorAll('.tok').forEach(t => t.onclick = () => t.classList.toggle('sel'));
  $('#bdcheck')?.addEventListener('click', () => {
    const sel = new Set([...box.querySelectorAll('.tok.sel')].map(t => Number(t.dataset.n)));
    const want = toks.map((t, n) => (t.role === 'V' ? n : -1)).filter(n => n >= 0);
    const ok = sel.size === want.length && want.every(n => sel.has(n));
    const cats = new Set();
    for (const n of sel) {
      const t = toks[n], w = t.w.replace(/[^A-Za-z']/g, '').toLowerCase(), prev = (toks[n - 1]?.w || '').replace(/[^A-Za-z]/g, '').toLowerCase();
      if (t.role === 'V') continue;
      if (w === 'to' || prev === 'to' || (/ing$/.test(w) && w.length > 4)) cats.add('inf');
      else cats.add({ R: 'R', S: 'S', O: 'O', C: 'C', X: 'X' }[t.role]);
    }
    if (want.some(n => !sel.has(n)) && want.some(n => sel.has(n))) cats.add('miss');
    if (!sel.size) cats.add('S');
    setProgress(id, p => { (p.rd ||= {})[k] = ok ? 'ok' : { cats: [...cats] }; });
    toast(ok ? '¡Bien! Ese es el esqueleto.' : 'Casi. Mira abajo por qué.');
    reveal();
    if (!ok) { const h = findHints(s.parts, sel, 'V'); $('#bdhints').hidden = false; $('#bdhints').innerHTML = `<b>Por qué no:</b><ul class="hints">${h.map(x => `<li>${x}</li>`).join('')}</ul>`; }
  });
  $('#bdshow')?.addEventListener('click', () => { setProgress(id, p => { (p.rd ||= {})[k] ??= 'skip'; }); reveal(); });
  $('#bdclose').onclick = () => { box.innerHTML = ''; document.querySelectorAll('.sent.active').forEach(x => x.classList.remove('active')); };
  $('#bdprev')?.addEventListener('click', () => { document.querySelector(`.sent[data-k="${k - 1}"]`).click(); });
  $('#bdnext')?.addEventListener('click', () => { document.querySelector(`.sent[data-k="${k + 1}"]`).click(); });
  Vocab.bindAddButtons(box);
  const form = box.querySelector('.wp-form');
  box.querySelectorAll('.wp').forEach(b => b.onclick = () => {
    form.hidden = false; form.querySelector('.wp-w').value = b.dataset.w.toLowerCase();
    const known = (s.vocab || []).find(([w]) => w.toLowerCase().split(/[ (]/)[0] === b.dataset.w.toLowerCase());
    form.querySelector('.wp-es').value = known ? known[1] : ''; form.querySelector('.wp-es').focus();
  });
  if (form) form.onsubmit = e => {
    e.preventDefault();
    const w = form.querySelector('.wp-w').value, es = form.querySelector('.wp-es').value;
    if (Vocab.add(w, es, sentenceText(s))) { toast(`"${w}" guardada en tus tarjetas`); form.hidden = true; }
    else toast(es.trim() ? 'Esa palabra ya está en tus tarjetas.' : 'Escribe el significado.');
  };
}

// ---------- Resumen al terminar la lectura ----------
const REVIEW = {
  R: ['Oraciones secundarias', 'El verbo que va detrás de who, which, that, because, when, if… no es el principal: tapa esa pieza.', 'u01'],
  inf: ['Infinitivos y formas en -ing', '"to + verbo" y las formas en -ing sin auxiliar no son verbos conjugados.', 'u08'],
  S: ['Sujeto y verbo', 'El sujeto va justo delante del verbo principal; el verbo es lo que viene después.', 'u01'],
  O: ['Complementos', 'Lo que va detrás del verbo lo completa (qué, a quién…): no es el verbo.', 'u01'],
  C: ['Conectores', 'and, but, so, however… unen ideas; no son verbos.', 'u05'],
  X: ['Información extra', 'Lo que va detrás de una preposición (in, at, for…) o indica cuándo/dónde nunca es sujeto ni verbo.', 'u01'],
  miss: ['Verbos con auxiliar', 'El verbo principal incluye sus auxiliares: has lived, was built, can remember.', 'u03'],
  skip: ['Frases sin intentar', 'Antes de ver la solución, intenta siempre encontrar tú el verbo: es lo que entrena la lectura.', null],
};
function readingSummary(box, id) {
  const u = UNITS[id], r = u.reading, p = progress(id), rd = p.rd || {}, rq = p.rq || {};
  const tried = Object.keys(rd).length, okS = Object.values(rd).filter(v => v === 'ok').length;
  const badQ = r.questions.map((q, i) => ({ q, i })).filter(({ i }) => rq[i] === false);
  const badS = r.sentences.map((s, k) => ({ s, k, v: rd[k] })).filter(x => x.v && x.v !== 'ok');
  const cats = new Set();
  for (const { v } of badS) {
    if (v === 'skip') { cats.add('skip'); continue; }
    (v.cats || []).forEach(c => cats.add(c));
  }
  // Palabras: las de las frases que costaron primero, luego el resto que aún no tienes
  const words = [];
  const pushW = (w, es, ex) => { if (!words.some(x => x.w === w) && !Vocab.has(w)) words.push({ w, es, ex }); };
  badS.forEach(({ s }) => (s.vocab || []).forEach(([w, es]) => pushW(w, es, sentenceText(s))));
  r.sentences.forEach(s => (s.vocab || []).forEach(([w, es]) => pushW(w, es, sentenceText(s))));
  const perfect = !badS.length && !badQ.length && tried === r.sentences.length;
  box.innerHTML = `
    <section class="rsum">
      <div class="rsum-head">${icon(perfect ? 'trophy' : 'sparkle')}<div><span class="overline">Resumen de la lectura</span><h2>${perfect ? '¡Lectura perfecta!' : 'Lectura terminada'}</h2></div></div>
      <div class="rsum-stats">
        <div><b>${okS}/${r.sentences.length}</b><span>frases desmontadas a la primera</span></div>
        <div><b>${r.questions.length - badQ.length}/${r.questions.length}</b><span>preguntas de comprensión</span></div>
      </div>
      ${cats.size ? `<h3>Lo que tienes que repasar</h3><ul class="review">${[...cats].map(c => `<li><b>${REVIEW[c][0]}</b><span>${REVIEW[c][1]}</span>${REVIEW[c][2] ? `<a href="#libro/${REVIEW[c][2]}">Ver en el libro${icon('arrow')}</a>` : ''}</li>`).join('')}</ul>` : ''}
      ${badS.filter(x => x.v !== 'skip').length ? `<h3>Frases que te costaron</h3><ul class="hardlist">${badS.filter(x => x.v !== 'skip').map(({ s }) => `<li><p>${s.parts.map(([role, t]) => `<span class="${ROLE[role].cls}">${esc(t)}</span>`).join(' ')}</p><small>${esc(s.note)}</small></li>`).join('')}</ul>` : ''}
      ${badQ.length ? `<h3>Preguntas falladas</h3><ul class="hardlist">${badQ.map(({ q }) => `<li><p>${esc(q.q)}</p><small>Respuesta: ${esc(q.opts[q.a])}</small></li>`).join('')}</ul>` : ''}
      ${words.length ? `<h3>Palabras para tus tarjetas</h3>
        <div class="pickwords">${words.map((x, i) => `<label class="pw"><input type="checkbox" data-i="${i}" ${i < 12 ? 'checked' : ''}><b>${esc(x.w)}</b><span>${esc(x.es)}</span></label>`).join('')}</div>
        <button class="primary" id="addsel">${icon('plus')}Añadir las marcadas a mis tarjetas</button>` : '<p class="muted">Ya tienes todas las palabras de esta lectura en tus tarjetas.</p>'}
    </section>`;
  $('#addsel')?.addEventListener('click', e => {
    let n = 0;
    box.querySelectorAll('.pw input:checked').forEach(c => { const x = words[c.dataset.i]; if (Vocab.add(x.w, x.es, x.ex)) n++; });
    const note = `Lectura "${r.title}": ${okS}/${r.sentences.length} frases y ${r.questions.length - badQ.length}/${r.questions.length} preguntas.${cats.size ? ' Repasar: ' + [...cats].map(c => REVIEW[c][0]).join(', ') + '.' : ''}`;
    store.set(st => { st.notes[today()] = (st.notes[today()] ? st.notes[today()] + '\n' : '') + note; });
    toast(n ? `${n} palabra${n > 1 ? 's' : ''} añadida${n > 1 ? 's' : ''} a tus tarjetas` : 'No había palabras nuevas que añadir');
    e.currentTarget.disabled = true;
  });
  box.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---------- Libro: toda la gramática para leer y consultar ----------
const BOOK_PDF = 'https://robertmartib.github.io/Speakly/libro/Speakly-Libro-B1.pdf';
function bookIndex() {
  return SYLLABUS.map((u, i) => ({ ...u, n: i + 1, text: UNITS[u.id] ? (u.title + ' ' + u.focus + ' ' + UNITS[u.id].theory.map(t => t.h + ' ' + t.html.replace(/<[^>]+>/g, ' ')).join(' ')).toLowerCase() : '' }));
}
function renderBook(main, args) {
  const id = args[0];
  if (id === 'irregulares') return renderIrregular(main);
  if (id) return renderBookUnit(main, id);
  const idx = bookIndex();
  main.innerHTML = `
    <section class="bookhead">
      <span class="eyebrow">Tu libro de gramática</span>
      <h1>${esc(ACTIVE_COURSE.subtitle)}</h1>
      <p class="muted">Toda la teoría de la ruta, unidad por unidad. Es lo mismo que estudias cada día en la app: aquí lo tienes ordenado para leer y consultar.</p>
      ${COURSE_DEF.id === 'en' ? `<div class="row"><a class="btn primary" href="${BOOK_PDF}" target="_blank" rel="noopener">${icon('download')}Libro en PDF</a><a class="btn" href="#libro/irregulares">${icon('layers')}Verbos irregulares</a></div>` : ''}
    </section>
    <input class="search" id="bq" placeholder="${COURSE_DEF.id === 'ja' ? 'Busca un tema: hiragana, は, です…' : 'Busca un tema: since, pasiva, although, used to…'}" autocomplete="off" autocapitalize="off">
    <div id="blist"></div>`;
  const draw = q => {
    q = q.trim().toLowerCase();
    $('#blist').innerHTML = LEVELS.filter(l => l.kind !== 'exam').map(lv => {
      const items = idx.filter(u => u.level === lv.id && (!q || u.text.includes(q)));
      if (!items.length) return '';
      return `<section class="lvl" style="--c:${lv.color}"><header><h2>${lv.name}</h2></header>
        <ol class="units">${items.map(u => `<li><a href="#libro/${u.id}" class="${UNITS[u.id] ? '' : 'pending'}"><span class="n">${u.n}</span>
          <span class="ut"><b>${esc(u.title)}</b><small>${esc(u.focus)}</small></span><span class="us">${UNITS[u.id] ? icon('right', 'chev') : '<small>pronto</small>'}</span></a></li>`).join('')}</ol></section>`;
    }).join('') || '<p class="empty">No hay ninguna unidad sobre eso todavía.</p>';
  };
  draw('');
  $('#bq').oninput = e => draw(e.target.value);
}
function renderBookUnit(main, id) {
  const meta = unitById(id), u = UNITS[id];
  if (!meta || !u) { main.innerHTML = '<a class="back" href="#libro">← Libro</a><p class="empty">Esta unidad todavía no está escrita.</p>'; return; }
  const i = SYLLABUS.indexOf(meta), lv = levelById(meta.level);
  const prev = SYLLABUS.slice(0, i).reverse().find(x => UNITS[x.id]), next = SYLLABUS.slice(i + 1).find(x => UNITS[x.id]);
  main.innerHTML = `
    <a class="back" href="#libro">← Índice del libro</a>
    <header class="unit-head" style="--c:${lv.color}"><span class="phase" style="--c:${lv.color}">${lv.name} · Unidad ${i + 1}</span><h1>${esc(meta.title)}</h1><p class="muted">${esc(meta.focus)}</p></header>
    <div class="theory" style="margin-top:16px">${u.theory.map(sec => `<section><h2>${esc(sec.h)}</h2>${sec.html}</section>`).join('')}</div>
    ${roleLegend()}
    <div class="row between" style="margin-top:20px">
      ${prev ? `<a class="btn" href="#libro/${prev.id}">← ${esc(prev.title)}</a>` : '<span></span>'}
      <a class="btn primary" href="#unidad/${id}/practica">Practicar esta unidad →</a>
      ${next ? `<a class="btn" href="#libro/${next.id}">${esc(next.title)} →</a>` : '<span></span>'}
    </div>`;
}
function renderIrregular(main) {
  main.innerHTML = `
    <a class="back" href="#libro">← Índice del libro</a>
    <h1>Verbos irregulares</h1>
    <p class="muted">Infinitivo, pasado y participio. El participio es el que va con <i>have</i> (present perfect) y con <i>be</i> (pasiva).</p>
    <input class="search" id="iq" placeholder="Busca un verbo en inglés o en español…" autocomplete="off" autocapitalize="off">
    <div class="tablewrap"><table class="irr"><thead><tr><th>Infinitivo</th><th>Pasado</th><th>Participio</th><th>Significado</th></tr></thead><tbody id="irows"></tbody></table></div>`;
  const draw = q => {
    q = q.trim().toLowerCase();
    $('#irows').innerHTML = IRREGULAR.filter(r => !q || r.join(' ').toLowerCase().includes(q)).map(r => `<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td><td class="muted">${r[3]}</td></tr>`).join('');
  };
  draw('');
  $('#iq').oninput = e => draw(e.target.value);
}
