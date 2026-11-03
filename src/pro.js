// Talkiro Pro (5 €/mes): el tutor de IA y aprender con tus propias series y películas.
// Todo lo demás (unidades, ejercicios Cambridge, libro, tarjetas) es gratis.
// El cobro irá con Google Play Billing cuando la app esté en la tienda; hasta entonces ENFORCED = false
// y la ventana deja seguir gratis («versión de pruebas»).
const Pro = (() => {
  const ENFORCED = false;
  const PRICE = '5 €/mes';
  const FEATURES = {
    ai: { icon: 'sparkle', title: 'El tutor de IA es de Talkiro Pro', text: 'Pregúntale dudas de gramática, pide traducciones y explicaciones de cualquier frase.' },
    series: { icon: 'film', title: 'Aprender con series y películas es de Talkiro Pro', text: 'Conecta tu servidor Jellyfin y aprende con tus propias series y películas.' },
  };
  const seen = new Set(); // ventanas ya mostradas en esta sesión (para no repetirlas cada vez)

  const active = () => store.get().pro?.active === true;

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
        <li>${icon('film')}<div><b>Tus series y películas</b><span>Subtítulos en inglés, retos que paran la película para traducir lo que oyes y palabras nuevas a tus tarjetas.</span></div></li>
        <li>${icon('pencil')}<div><b>Corrección del Writing</b><span>Tus redacciones corregidas con el baremo del examen (próximamente).</span></div></li>
      </ul>
      <p class="pro-free">${icon('check')}Gratis siempre: todas las unidades, los ejercicios Cambridge, el libro y las tarjetas.</p>
      <button class="primary wide" id="probuy">Hazte Pro · ${PRICE}</button>
      <p class="muted small center" id="pronote">Cancela cuando quieras desde Google Play.</p>
      ${feature === 'ai' ? '<button class="ghost wide" id="proownkey">Tengo mi propia clave de API</button>' : ''}
      ${ENFORCED ? '' : `<button class="ghost wide" id="profree">Seguir gratis (versión de pruebas)</button>`}
    </div>`;
    dlg.showModal();
    $('#proclose').onclick = () => dlg.close();
    $('#probuy').onclick = () => { $('#pronote').textContent = 'Muy pronto: el pago estará disponible cuando Talkiro llegue a Google Play.'; };
    $('#proownkey')?.addEventListener('click', () => { dlg.close(); location.hash = 'ajustes'; setTimeout(() => $('#ckey')?.focus(), 300); });
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
    return `<div class="panel">
      <p>${active() ? '<b>Tienes Talkiro Pro.</b> Gracias por apoyar la app.' : `Talkiro Pro cuesta <b>${PRICE}</b> e incluye el tutor de IA y aprender con tus series y películas. Todo lo demás es gratis.`}</p>
      <div class="row"><button class="${active() ? '' : 'primary'}" id="proinfo">${icon('star')}${active() ? 'Ver qué incluye' : 'Ver Talkiro Pro'}</button></div>
    </div>`;
  }
  function bindSettings() { $('#proinfo').onclick = () => dialog('ai'); }

  return { active, gate, dialog, settingsHtml, bindSettings, ENFORCED };
})();
