// Mini chat con Claude para dudas de idioma y traducciones.
// Usa el SDK oficial de Anthropic (vendor/anthropic.js) con la clave de API del propio usuario,
// guardada solo en este dispositivo. Las respuestas aparecen mientras se escriben (streaming).
const Chat = (() => {
  const MODELS = [
    ['claude-opus-5-5', 'Claude Opus 5.5 (la más capaz)'],
    ['claude-sonnet-5-5', 'Claude Sonnet 5.5 (más barata)'],
    ['claude-haiku-4-5', 'Claude Haiku 4.5 (la más barata y rápida)'],
  ];
  let history = []; // conversación de esta sesión (no se guarda)
  let busy = false;

  const cfg = () => store.get().chat || {};
  const model = () => cfg().model || 'claude-opus-5-5';

  function systemPrompt() {
    const course = typeof COURSE_DEF !== 'undefined' ? COURSE_DEF : null;
    const t = today(), d = SCHEDULE[t];
    const unit = d?.main?.unit ? unitById(d.main.unit) : null;
    return [
      `Eres el tutor de idiomas de la app "Talkiro". El alumno es hispanohablante y estudia ${course ? course.chatTopic : 'idiomas'}.`,
      unit ? `Ahora mismo está en la unidad "${unit.title}" (${unit.focus}).` : '',
      'Responde siempre en español, de forma breve y clara (normalmente 2-6 frases).',
      'Para traducciones, da la traducción y, si ayuda, una nota corta sobre una expresión o estructura.',
      'Para dudas de gramática, explica cuándo se usa, con 1-2 ejemplos sencillos.',
      'Si te pegan un texto escrito por el alumno, corrígelo señalando los errores y por qué.',
      'No uses tablas largas ni títulos: el chat es pequeño.',
    ].filter(Boolean).join(' ');
  }

  function el() { return $('#chatpanel'); }

  function open() { Pro.gate('ai', show); }
  function show() {
    let p = el();
    if (!p) {
      p = document.createElement('div');
      p.id = 'chatpanel';
      document.body.appendChild(p);
    }
    p.hidden = false;
    draw();
  }
  function close() { if (el()) el().hidden = true; }
  function toggle() { el() && !el().hidden ? close() : open(); }

  function draw() {
    const p = el();
    const hasKey = !!cfg().key || Pro.active();
    p.innerHTML = `
      <div class="chat-head"><span>${icon('sparkle')}Pregúntale a Claude</span><button class="icon small" id="chatclose" aria-label="Cerrar">${icon('x')}</button></div>
      ${!hasKey ? `
        <div class="chat-setup">
          <p>Para usar el chat necesitas una <b>clave de API de Anthropic</b> (se crea en <a href="https://console.anthropic.com" target="_blank" rel="noopener">console.anthropic.com</a>). Cada pregunta cuesta muy poco, pero no es gratis.</p>
          <p class="muted small">La clave se guarda solo en este dispositivo. Puedes cambiarla en Ajustes.</p>
          <form id="chatkey"><input type="password" id="ck" placeholder="sk-ant-…" autocomplete="off" required><button class="primary" type="submit">Guardar</button></form>
        </div>` : `
        <div class="chat-log" id="chatlog">${history.length ? history.map(m => bubble(m.role, m.text)).join('') : `<div class="chat-hint">Pregunta lo que quieras: <i>«¿Cuándo se usa since?»</i>, <i>«Traduce: I'm looking forward to it»</i>, <i>«¿Está bien esta frase…?»</i></div>`}</div>
        <form class="chat-input" id="chatform"><textarea id="chatq" rows="1" placeholder="Escribe tu pregunta…"></textarea><button class="primary icon" type="submit" aria-label="Enviar" ${busy ? 'disabled' : ''}>${icon('arrow')}</button></form>`}`;
    $('#chatclose').onclick = close;
    $('#chatkey')?.addEventListener('submit', e => { e.preventDefault(); store.set(s => { s.chat = { ...(s.chat || {}), key: $('#ck').value.trim() }; }); draw(); });
    const q = $('#chatq');
    if (q) {
      q.oninput = () => { q.style.height = 'auto'; q.style.height = Math.min(q.scrollHeight, 120) + 'px'; };
      q.onkeydown = e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); $('#chatform').requestSubmit(); } };
      $('#chatform').onsubmit = e => { e.preventDefault(); const text = q.value.trim(); if (text && !busy) { q.value = ''; send(text); } };
      setTimeout(() => q.focus(), 30);
      scrollDown();
    }
  }
  const bubble = (role, text) => `<div class="msg ${role}">${role === 'assistant' ? format(text) : esc(text)}</div>`;
  // Formato mínimo: negritas, cursivas y saltos de línea
  const format = t => esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>').replace(/\n/g, '<br>');
  const scrollDown = () => { const l = $('#chatlog'); if (l) l.scrollTop = l.scrollHeight; };

  async function send(text) {
    if (!window.Anthropic) { toast('No se ha podido cargar el chat.'); return; }
    history.push({ role: 'user', text });
    history.push({ role: 'assistant', text: '' });
    busy = true; draw();
    const out = () => $('#chatlog')?.lastElementChild;
    if (out()) out().innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
    // Con Talkiro Pro el chat va por nuestro servidor (que pone el modelo y el límite); si no, con la clave del usuario
    const viaPro = Pro.active() && !cfg().key;
    const client = viaPro
      ? new window.Anthropic({ apiKey: Pro.token(), baseURL: Pro.server(), dangerouslyAllowBrowser: true })
      : new window.Anthropic({ apiKey: cfg().key, dangerouslyAllowBrowser: true });
    const m = viaPro ? 'claude-opus-5-5' : model();
    const params = {
      model: m,
      max_tokens: 16000,
      system: systemPrompt(),
      messages: history.slice(0, -1).map(x => ({ role: x.role, content: x.text })),
    };
    // Los modelos 5.5 llevan esfuerzo bajo (es un chat) y fallback automático si algo se rechaza
    const smart = m === 'claude-opus-5-5' || m === 'claude-sonnet-5-5';
    if (smart) params.output_config = { effort: 'low' };
    try {
      const stream = smart
        ? client.beta.messages.stream({ ...params, betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' })
        : client.messages.stream(params);
      let acc = '';
      for await (const event of stream) {
        if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
          acc += event.delta.text;
          history[history.length - 1].text = acc;
          if (out()) { out().innerHTML = format(acc); scrollDown(); }
        }
      }
      const final = await stream.finalMessage();
      if (final.stop_reason === 'refusal') {
        history[history.length - 1].text = 'No puedo responder a esta pregunta. Prueba a formularla de otra manera.';
      } else if (!acc.trim()) {
        history[history.length - 1].text = final.content.filter(b => b.type === 'text').map(b => b.text).join('') || '(Sin respuesta)';
      }
    } catch (err) {
      const A = window.Anthropic;
      let msg = 'No se ha podido contactar con Claude. Inténtalo de nuevo.';
      if (viaPro && (err instanceof A.AuthenticationError || err instanceof A.RateLimitError)) msg = err.error?.error?.message || msg;
      else if (err instanceof A.AuthenticationError) msg = 'La clave de API no es válida. Cámbiala en Ajustes.';
      else if (err instanceof A.PermissionDeniedError) msg = 'Tu clave no tiene permiso para usar este modelo. Elige otro en Ajustes.';
      else if (err instanceof A.RateLimitError) msg = 'Demasiadas preguntas seguidas o sin saldo. Espera un momento o revisa tu cuenta.';
      else if (err instanceof A.APIConnectionError) msg = 'Sin conexión a internet.';
      else if (err instanceof A.APIError) msg = `Error de la API (${err.status}).`;
      history[history.length - 1].text = msg;
    } finally {
      busy = false; draw();
    }
  }

  function settingsHtml() {
    return `
      <div class="panel">
        <p>Un chat pequeño (botón arriba a la izquierda) para preguntar dudas y pedir traducciones. Necesita tu propia clave de API de Anthropic; se guarda solo en este dispositivo.</p>
        <label class="field" style="max-width:none">Clave de API<input type="password" id="ckey" placeholder="sk-ant-…" value="${esc(cfg().key || '')}" autocomplete="off"></label>
        <label class="field">Modelo<select id="cmodel">${MODELS.map(([v, l]) => `<option value="${v}" ${model() === v ? 'selected' : ''}>${l}</option>`).join('')}</select></label>
      </div>`;
  }
  function bindSettings() {
    $('#ckey').onchange = e => { store.set(s => { s.chat = { ...(s.chat || {}), key: e.target.value.trim() }; }); toast('Clave guardada'); };
    $('#cmodel').onchange = e => { store.set(s => { s.chat = { ...(s.chat || {}), model: e.target.value }; }); toast('Modelo guardado'); };
  }

  return { open, close, toggle, settingsHtml, bindSettings };
})();
