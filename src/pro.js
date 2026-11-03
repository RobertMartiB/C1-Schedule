// Talkiro Pro (5 €/mes): el tutor de IA y aprender con tus propias series y películas.
// Todo lo demás (unidades, ejercicios Cambridge, libro, tarjetas) es gratis.
// El cobro irá con Google Play Billing cuando la app esté en la tienda; hasta entonces ENFORCED = false
// y la ventana deja seguir gratis («versión de pruebas»).
const Pro = (() => {
  const ENFORCED = false;
  const PRICE = '5 €/mes';
  // Dirección del servidor de Talkiro Pro (server/ en el repo). Se puede cambiar en Ajustes → Talkiro Pro → Avanzado.
  const DEFAULT_SERVER = '';
  const FEATURES = {
    ai: { icon: 'sparkle', title: 'El tutor de IA es de Talkiro Pro', text: 'Pregúntale dudas de gramática, pide traducciones y explicaciones de cualquier frase.' },
    series: { icon: 'film', title: 'Aprender con series y películas es de Talkiro Pro', text: 'Conecta tu servidor Jellyfin y aprende con tus propias series y películas.' },
  };
  const seen = new Set(); // ventanas ya mostradas en esta sesión (para no repetirlas cada vez)

  const cfg = () => store.get().pro || {};
  const server = () => (cfg().server || DEFAULT_SERVER).replace(/\/+$/, '');
  const token = () => cfg().token || '';
  const active = () => !!(token() && server());

  async function call(path, opts = {}) {
    if (!server()) throw new Error('Talkiro Pro todavía no tiene servidor.');
    const r = await fetch(server() + path, { ...opts, headers: { 'content-type': 'application/json', ...(token() ? { 'x-api-key': token() } : {}), ...(opts.headers || {}) } });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(data.error || `Error ${r.status}`);
    return data;
  }
  async function redeem(code) {
    const { token: t } = await call('/pro/redeem', { method: 'POST', body: JSON.stringify({ code }) });
    store.set(s => { s.pro = { ...(s.pro || {}), token: t }; });
  }
  const status = () => call('/pro/status');
  function logout() { store.set(s => { s.pro = { ...(s.pro || {}), token: '' }; }); }

  function dialog(feature, onContinue) {
    const f = FEATURES[feature] || FEATURES.ai;
    let dlg = $('#prodlg');
    if (!dlg) { dlg = document.createElement('dialog'); dlg.id = 'prodlg'; document.body.appendChild(dlg); dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); }); }
    dlg.innerHTML = `<div class="pro">
      <button class="icon close" id="proclose" aria-label="Cerrar">${icon('x')}</button>
      <span class="pro-badge">${icon('star')}Talkiro Pro</span>
      <h2>${esc(f.title)}</h2>
      <p class="muted">${esc(f.text)}</p>
      <ul class="pro-list">
        <li>${icon('sparkle')}<div><b>Tutor de IA</b><span>Dudas, traducciones y explicaciones, sin necesitar tu propia clave.</span></div></li>
        <li>${icon('film')}<div><b>Tus series y películas</b><span>Subtítulos en inglés y español, toca una palabra para que la IA te la traduzca y guárdala en tus tarjetas. Y retos que paran la película.</span></div></li>
        <li>${icon('pencil')}<div><b>Corrección del Writing</b><span>Tus redacciones corregidas con el baremo del examen (próximamente).</span></div></li>
      </ul>
      <p class="pro-free">${icon('check')}Gratis siempre: todas las unidades, los ejercicios Cambridge, el libro y las tarjetas.</p>
      <button class="primary wide" id="probuy">Hazte Pro · ${PRICE}</button>
      <p class="muted small center" id="pronote">Cancela cuando quieras desde Google Play.</p>
      <button class="ghost wide" id="procode">Tengo un código Pro</button>
      ${feature === 'ai' ? '<button class="ghost wide" id="proownkey">Tengo mi propia clave de API</button>' : ''}
      ${ENFORCED ? '' : `<button class="ghost wide" id="profree">Seguir gratis (versión de pruebas)</button>`}
    </div>`;
    dlg.showModal();
    $('#proclose').onclick = () => dlg.close();
    $('#probuy').onclick = () => { $('#pronote').textContent = 'Muy pronto: el pago estará disponible cuando Talkiro llegue a Google Play.'; };
    $('#proownkey')?.addEventListener('click', () => { dlg.close(); location.hash = 'ajustes'; setTimeout(() => $('#ckey')?.focus(), 300); });
    $('#procode').onclick = () => { dlg.close(); location.hash = 'ajustes'; setTimeout(() => $('#procodein')?.focus(), 300); };
    $('#profree')?.addEventListener('click', () => { dlg.close(); onContinue?.(); });
  }

  // Ejecuta onAllowed si la función está disponible; si no, enseña la ventana de Pro.
  // En el chat, quien tiene su propia clave de API puede usarlo sin Pro.
  function gate(feature, onAllowed) {
    if (active() || (feature === 'ai' && store.get().chat?.key)) return onAllowed?.();
    if (!ENFORCED && seen.has(feature)) return onAllowed?.();
    seen.add(feature);
    dialog(feature, onAllowed);
  }

  function settingsHtml() {
    return `<div class="panel" id="propanel">
      <p>${active() ? '<b>Tienes Talkiro Pro.</b> Gracias por apoyar la app.' : `Talkiro Pro cuesta <b>${PRICE}</b> e incluye el tutor de IA y aprender con tus series y películas. Todo lo demás es gratis.`}</p>
      ${active() ? '<p class="muted small" id="prousage">Comprobando tu uso de este mes…</p>' : `
      <label class="field" style="max-width:none">Código Pro<input id="procodein" placeholder="Por ejemplo AMIGOS-2026" autocomplete="off" autocapitalize="characters"></label>`}
      <div class="row">
        ${active() ? '<button id="proout">Quitar Pro de este dispositivo</button>' : '<button class="primary" id="proredeem">Activar código</button>'}
        <button id="proinfo">${icon('star')}Ver qué incluye</button>
      </div>
      <details class="small"><summary class="muted">Avanzado</summary>
        <label class="field" style="max-width:none">Servidor de Talkiro Pro<input id="proserver" placeholder="https://…" value="${esc(cfg().server || DEFAULT_SERVER)}" autocomplete="off"></label>
      </details>
    </div>`;
  }
  function bindSettings() {
    $('#proinfo').onclick = () => dialog('ai');
    $('#proserver').onchange = e => { store.set(s => { s.pro = { ...(s.pro || {}), server: e.target.value.trim() }; }); toast('Servidor guardado'); };
    $('#proredeem')?.addEventListener('click', async e => {
      const code = $('#procodein').value.trim();
      if (!code) return $('#procodein').focus();
      e.target.disabled = true;
      try { await redeem(code); toast('¡Talkiro Pro activado!'); route(); }
      catch (err) { toast(err.message); e.target.disabled = false; }
    });
    $('#proout')?.addEventListener('click', () => { logout(); route(); });
    if (active()) status().then(s => {
      $('#prousage').textContent = s.active ? `Este mes has usado ${Math.round(s.spentUsd / s.budgetUsd * 100)} % del tutor de IA. Se renueva el ${new Date(s.resetsOn).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}.` : 'Tu Pro ya no está activo.';
    }).catch(err => { $('#prousage').textContent = err.message; });
  }

  return { active, gate, dialog, settingsHtml, bindSettings, token, server, ENFORCED };
})();
