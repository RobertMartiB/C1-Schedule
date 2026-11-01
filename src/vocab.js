// Tarjetas de vocabulario con repetición espaciada (cajas de Leitner).
// Cada acierto pasa la tarjeta a la caja siguiente y la vuelve a preguntar más tarde.
const Vocab = (() => {
  const INTERVALS = [0, 1, 2, 4, 8, 16, 32, 64]; // días hasta la próxima vez, según la caja

  const cards = () => store.get().cards || [];
  const due = (day = today()) => cards().filter(c => c.due <= day);
  const has = w => cards().some(c => c.w.toLowerCase() === w.toLowerCase());

  function add(w, es, ex = '') {
    w = w.trim(); es = es.trim();
    if (!w || !es || has(w)) return false;
    store.set(s => { (s.cards ||= []).push({ id: crypto.randomUUID(), w, es, ex, box: 0, due: today(), added: today() }); });
    return true;
  }
  function answer(id, knew) {
    store.set(s => {
      const c = s.cards.find(x => x.id === id);
      if (!c) return;
      c.box = knew ? Math.min(c.box + 1, INTERVALS.length - 1) : 0;
      c.due = addDays(today(), knew ? INTERVALS[c.box] : 0);
      c.seen = (c.seen || 0) + 1;
    });
  }
  function remove(id) { store.set(s => { s.cards = s.cards.filter(c => c.id !== id); }); }

  // Botón "+ tarjeta" reutilizable (lecturas, unidades…)
  function addButton(w, es, ex) {
    const on = has(w);
    return `<button class="addcard ${on ? 'on' : ''}" data-w="${esc(w)}" data-es="${esc(es)}" data-ex="${esc(ex || '')}" ${on ? 'disabled' : ''}>${on ? `${icon('check')}Guardada` : `${icon('plus')}Guardar`}</button>`;
  }
  function bindAddButtons(root) {
    root.querySelectorAll('.addcard:not([disabled])').forEach(b => b.onclick = () => {
      add(b.dataset.w, b.dataset.es, b.dataset.ex);
      b.innerHTML = `${icon('check')}Guardada`; b.classList.add('on'); b.disabled = true;
    });
  }

  function render(main) {
    const list = due();
    const all = cards().slice().sort((a, b) => a.w.localeCompare(b.w));
    main.innerHTML = `
      <h1>Vocabulario</h1>
      <p class="muted">Las palabras que guardas de las lecturas y las series. Cada día te pregunto las que toca repasar; si la sabes, tarda más en volver.</p>
      <section class="review-box" id="review"></section>
      <h2>Añadir una palabra</h2>
      <form class="addform" id="addform">
        <input id="nw" placeholder="Palabra o expresión en inglés" required autocomplete="off" autocapitalize="off">
        <input id="nes" placeholder="Traducción" required autocomplete="off">
        <input id="nex" placeholder="Frase de ejemplo (opcional)" autocomplete="off">
        <button class="primary" type="submit">Añadir</button>
      </form>
      <h2>Tus tarjetas (${all.length})</h2>
      ${all.length ? `<ul class="cardlist">${all.map(c => `<li><b>${esc(c.w)}</b><span>${esc(c.es)}</span><span class="box" title="Caja ${c.box}">${'●'.repeat(c.box)}${'○'.repeat(INTERVALS.length - 1 - c.box)}</span><button class="icon small" data-del="${c.id}" aria-label="Borrar ${esc(c.w)}">${icon('x')}</button></li>`).join('')}</ul>`
        : '<p class="empty">Aún no tienes tarjetas. Añádelas desde las lecturas con el botón <b>+ tarjeta</b> o con el formulario.</p>'}`;
    drawReview(list);
    $('#addform').onsubmit = e => {
      e.preventDefault();
      if (add($('#nw').value, $('#nes').value, $('#nex').value)) { toast('Tarjeta añadida'); render(main); }
      else toast('Esa palabra ya está en tus tarjetas.');
    };
    main.querySelectorAll('[data-del]').forEach(b => b.onclick = () => { remove(b.dataset.del); render(main); });
  }

  function drawReview(queue) {
    const box = $('#review');
    if (!queue.length) { box.innerHTML = `<p class="done-msg">${icon('check')}No te queda ninguna tarjeta por repasar hoy.</p>`; return; }
    const c = queue[0];
    box.innerHTML = `
      <div class="flash">
        <span class="muted small">${queue.length} por repasar hoy</span>
        <div class="front">${esc(c.w)}</div>
        ${c.ex ? `<div class="exline">${esc(c.ex)}</div>` : ''}
        <div class="back" hidden>${esc(c.es)}</div>
        <div class="row" id="fbtns"><button class="primary" id="show">Ver traducción</button></div>
      </div>`;
    $('#show').onclick = () => {
      box.querySelector('.back').hidden = false;
      $('#fbtns').innerHTML = `<button id="no">No la sabía</button><button class="primary" id="yes">${icon('check')}La sabía</button>`;
      $('#no').onclick = () => { Vocab.answer(c.id, false); drawReview([...queue.slice(1), c]); };
      $('#yes').onclick = () => { Vocab.answer(c.id, true); drawReview(queue.slice(1)); };
    };
  }

  return { add, answer, due, has, addButton, bindAddButtons, render };
})();
