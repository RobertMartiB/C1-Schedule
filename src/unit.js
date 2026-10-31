// Pantalla de una unidad: teoría, práctica (ejercicios autocorregidos) y lectura desmontada.

const ROLE = {
  S: { name: 'Sujeto', cls: 's' }, V: { name: 'Verbo principal', cls: 'v' }, O: { name: 'Complemento', cls: 'o' },
  R: { name: 'Oración secundaria', cls: 'r' }, C: { name: 'Conector', cls: 'c' }, X: { name: 'Información extra', cls: 'x' },
};
const roleLegend = () => `<div class="legend-roles">${Object.values(ROLE).map(r => `<span class="${r.cls}">${r.name}</span>`).join('')}</div>`;
const normAns = s => String(s || '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

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
  const tabs = [['teoria', '📖 Teoría', st.theory], ['practica', `✍️ Práctica ${st.exOk}/${st.exTotal}`, st.exOk === st.exTotal], ['lectura', '🔍 Lectura', st.reading]];
  main.innerHTML = head + `
    <nav class="tabs">${tabs.map(([t, label, ok]) => `<a href="#unidad/${id}/${t}" class="${t === tab ? 'on' : ''}">${label}${ok ? ' ✓' : ''}</a>`).join('')}</nav>
    <div id="tabbody"></div>`;
  const body = $('#tabbody');
  if (tab === 'practica') renderPractice(body, id);
  else if (tab === 'lectura') renderReading(body, id);
  else renderTheory(body, id);
}

// ---------- Teoría ----------
function renderTheory(body, id) {
  const u = UNITS[id];
  body.innerHTML = `
    <div class="theory">${u.theory.map(sec => `<section><h2>${esc(sec.h)}</h2>${sec.html}</section>`).join('')}</div>
    ${roleLegend()}
    <div class="row end"><button class="primary" id="theoryDone">${progress(id).theory ? '✓ Teoría leída · Ir a la práctica →' : 'He leído la teoría · Ir a la práctica →'}</button></div>`;
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
    <ol class="exlist">${list.map(({ ex, i }) => `<li class="exitem" data-i="${i}">${exerciseHtml(ex, i)}</li>`).join('') || '<p class="empty">¡No tienes fallos pendientes!</p>'}</ol>
    <div class="row end"><a class="btn primary" href="#unidad/${id}/lectura">Ir a la lectura →</a></div>`;
  body.querySelectorAll('.exitem').forEach(li => bindExercise(li, u.exercises[li.dataset.i], ok => {
    setProgress(id, pr => { (pr.ex ||= {})[li.dataset.i] = ok; });
    const tabsEl = document.querySelector('.tabs a:nth-child(2)'); const st = unitStatus(id);
    if (tabsEl) tabsEl.textContent = `✍️ Práctica ${st.exOk}/${st.exTotal}${st.exOk === st.exTotal ? ' ✓' : ''}`;
  }));
  $('#wrongonly')?.addEventListener('click', () => renderPractice(body, id, true));
  $('#all')?.addEventListener('click', () => renderPractice(body, id, false));
  $('#resetex').onclick = e => {
    if (!e.target.dataset.sure) { e.target.dataset.sure = 1; e.target.textContent = 'Pulsa otra vez para borrar tus respuestas'; return; }
    setProgress(id, pr => { pr.ex = {}; }); renderPractice(body, id);
  };
}

const tokensOf = parts => parts.flatMap(([role, text], pi) => text.split(/\s+/).filter(Boolean).map(w => ({ w, role, pi })));

function exerciseHtml(ex, i) {
  const fb = '<div class="fb" hidden></div>';
  if (ex.type === 'mcq') return `<div class="exq">${ex.q}</div><div class="choices">${ex.opts.map((o, j) => `<button class="choice" data-j="${j}">${esc(o)}</button>`).join('')}</div>${fb}`;
  if (ex.type === 'gap') return `<div class="exq">${esc(ex.q).replace('___', `<input class="gapin" aria-label="Respuesta" autocomplete="off" autocapitalize="off" spellcheck="false">`)}</div><div class="row"><button class="check">Comprobar</button></div>${fb}`;
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
    fb.innerHTML = `<b>${ok ? '✓ Correcto.' : '✗ No es correcto.'}</b> ${extra}${ex.why ? ` <span class="why">${esc(ex.why)}</span>` : ''}`;
    onResult(ok);
  };
  if (ex.type === 'mcq') {
    li.querySelectorAll('.choice').forEach(b => b.onclick = () => {
      const j = Number(b.dataset.j), ok = j === ex.a;
      li.querySelectorAll('.choice').forEach(x => { x.disabled = true; if (Number(x.dataset.j) === ex.a) x.classList.add('right'); });
      if (!ok) b.classList.add('wrong');
      show(ok);
    });
  } else if (ex.type === 'gap') {
    const inp = li.querySelector('.gapin');
    const check = () => { const ok = ex.a.includes(normAns(inp.value)); inp.classList.toggle('right', ok); inp.classList.toggle('wrong', !ok); show(ok, ok ? '' : `Respuesta: <b>${esc(ex.a[0])}</b>.`); };
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
      show(ok, ok ? '' : `Lo que buscabas está marcado como <span class="${ROLE[ex.role].cls}">${ROLE[ex.role].name.toLowerCase()}</span>.`);
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
    <ol class="exlist">${r.questions.map((q, i) => `<li class="exitem" data-q="${i}">${exerciseHtml({ type: 'mcq', q: esc(q.q), opts: q.opts }, i)}</li>`).join('')}</ol>`;
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
    bindExercise(li, { type: 'mcq', a: q.a, why: '' }, () => {
      answered.add(li.dataset.q);
      if (answered.size === r.questions.length) { setProgress(id, pr => { pr.reading = true; }); toast('¡Lectura completada!'); }
    });
  });
}

function drawBreakdown(box, id, k) {
  const r = UNITS[id].reading, s = r.sentences[k];
  const toks = tokensOf(s.parts);
  const hasV = toks.some(t => t.role === 'V');
  box.innerHTML = `
    <div class="bd">
      <div class="row between"><b>Frase ${k + 1} de ${r.sentences.length}</b><button class="icon small" id="bdclose" aria-label="Cerrar">✕</button></div>
      ${hasV ? `<p class="small muted">Reto: toca el verbo principal (o los verbos principales, si la frase tiene varias partes unidas por <i>and</i>, <i>or</i> o dos puntos).</p>
      <div class="tokens">${toks.map((t, n) => `<button class="tok" data-n="${n}">${esc(t.w)}</button>`).join(' ')}</div>
      <div class="row"><button id="bdcheck">Comprobar</button><button id="bdshow">Ver solución</button></div>` : ''}
      <div id="bdsol" ${hasV ? 'hidden' : ''}>
        <div class="parts">${s.parts.map(([role, text]) => `<span class="part ${ROLE[role].cls}" title="${ROLE[role].name}">${esc(text)}<small>${ROLE[role].name}</small></span>`).join('')}</div>
        <p class="es">🇪🇸 ${esc(s.es)}</p>
        <p class="note">💡 ${esc(s.note)}</p>
        ${s.vocab?.length ? `<ul class="vocab">${s.vocab.map(([w, es]) => `<li><b>${esc(w)}</b> — ${esc(es)} ${Vocab.addButton(w, es, sentenceText(s))}</li>`).join('')}</ul>` : ''}
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
    toast(ok ? '✓ ¡Bien! Ese es el esqueleto.' : 'Casi. Mira la solución: el verbo principal va en rojo.');
    reveal();
  });
  $('#bdshow')?.addEventListener('click', reveal);
  $('#bdclose').onclick = () => { box.innerHTML = ''; document.querySelectorAll('.sent.active').forEach(x => x.classList.remove('active')); };
  $('#bdprev')?.addEventListener('click', () => { document.querySelector(`.sent[data-k="${k - 1}"]`).click(); });
  $('#bdnext')?.addEventListener('click', () => { document.querySelector(`.sent[data-k="${k + 1}"]`).click(); });
  Vocab.bindAddButtons(box);
}
