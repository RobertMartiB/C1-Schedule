// Italiano · Unidad 1 · Saludar y presentarse (essere, tu y Lei)
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;

UNITS.i01 = {
  theory: [
    {
      h: 'Saludar en italiano',
      html: `<table class="t">
        <tr><th>Italiano</th><th>Cuándo</th></tr>
        <tr><td>${say('Ciao!')}</td><td>Hola <b>y</b> adiós, entre amigos. Informal.</td></tr>
        <tr><td>${say('Buongiorno!')}</td><td>Buenos días. Formal, hasta primera hora de la tarde.</td></tr>
        <tr><td>${say('Buonasera!')}</td><td>Buenas tardes / noches, a partir de media tarde.</td></tr>
        <tr><td>${say('Salve!')}</td><td>Hola neutro: ni muy formal ni muy informal. Muy útil.</td></tr>
        <tr><td>${say('Arrivederci!')}</td><td>Adiós. Con mucho respeto: ${say('ArrivederLa!')}</td></tr>
        <tr><td>${say('Buonanotte!')}</td><td>Buenas noches, solo al irte a dormir.</td></tr>
      </table>`,
    },
    {
      h: 'Tu y Lei: el tú y el usted',
      html: `<p>Para tratar de usted, el italiano usa <b>Lei</b>, que literalmente significa «ella», y lo conjuga como «ella»: <i>Lei è</i> = usted es. Se escribe a menudo con mayúscula para distinguirlo.</p>
      <ul>
        <li>${say('Come stai?')} = ¿cómo estás? (tú)</li>
        <li>${say('Come sta?')} = ¿cómo está (usted)?</li>
      </ul>
      <p>Como en España, el <b>tu</b> es muy común entre gente joven, pero con desconocidos mayores, en tiendas y oficinas, usa <b>Lei</b>.</p>`,
    },
    {
      h: 'El verbo essere (ser y estar)',
      html: `<table class="t">
        <tr><th>Pronombre</th><th>essere</th><th>Español</th></tr>
        <tr><td>io</td><td>${say('io sono', 'sono')}</td><td>yo soy</td></tr>
        <tr><td>tu</td><td>${say('tu sei', 'sei')}</td><td>tú eres</td></tr>
        <tr><td>lui / lei / Lei</td><td>${say('lui è', 'è')}</td><td>él / ella es · usted es</td></tr>
        <tr><td>noi</td><td>${say('noi siamo', 'siamo')}</td><td>nosotros somos</td></tr>
        <tr><td>voi</td><td>${say('voi siete', 'siete')}</td><td>vosotros sois</td></tr>
        <tr><td>loro</td><td>${say('loro sono', 'sono')}</td><td>ellos son</td></tr>
      </table>
      <p>Como en español, <b>el pronombre se puede omitir</b>: <i>Sono spagnolo</i> = soy español. Ojo: <b>è</b> (con acento) es «es»; <b>e</b> (sin acento) es «y».</p>
      <p>Diferencia con el español: <b>essere</b> sirve para ser y para muchos usos de estar (<i>sono stanco</i>, estoy cansado), pero para preguntar qué tal se usa <b>stare</b>: <i>come stai?</i></p>`,
    },
    {
      h: 'Presentarte',
      html: `<ul>
        <li>${say('Mi chiamo Laura.')} (me llamo Laura)</li>
        <li>${say('Sono spagnola, di Siviglia.')} (soy española, de Sevilla): la ciudad va con <b>di</b>.</li>
        <li>${say('Abito a Roma.')} (vivo en Roma): con ciudades, <b>a</b>; con países, <b>in</b>: ${say('Abito in Italia.')}</li>
        <li>${say('Sono studente.')} / ${say('Sono studentessa.')} La profesión, sin artículo.</li>
        <li>${say('Piacere!')} = ¡encantado/a!</li>
      </ul>`,
    },
    {
      h: 'Pronunciación: casi como el español, salvo…',
      html: `<ul>
        <li><b>ci, ce</b> suenan «chi, che»: ${say('ciao')} («chao»), ${say('cena')} («chena»).</li>
        <li><b>chi, che</b> suenan «qui, que»: ${say('che cosa')} («que cosa»), ${say('chiave')}.</li>
        <li><b>gli</b> suena como nuestra «ll» bien pronunciada: ${say('figlio')}. <b>gn</b> suena «ñ»: ${say('gnocchi')}.</li>
        <li><b>Las dobles consonantes</b> se pronuncian más largas, y cambian el significado: ${say('pena')} (pena) frente a ${say('penna')} (bolígrafo).</li>
      </ul>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: 'Te despides de un amigo. ¿Qué dices?', opts: ['Ciao!', 'Buonasera!', 'Buongiorno!', 'Salve!'], a: 0, why: '«Ciao» sirve para saludar y para despedirse entre amigos.' },
    { type: 'mcq', q: 'Preguntas a un señor mayor cómo está.', opts: ['Come sta?', 'Come stai?', 'Come state?', 'Come sei?'], a: 0, why: 'Con «Lei» (usted), el verbo va en tercera persona: come sta?' },
    { type: 'mcq', q: 'Noi ___ di Valencia.', opts: ['siamo', 'siete', 'sono', 'sei'], a: 0, why: 'noi → siamo.' },
    { type: 'mcq', q: 'Marco ___ italiano.', opts: ['è', 'e', 'sei', 'ha'], a: 0, why: '«è» con acento es el verbo (es). «e» sin acento significa «y».' },
    { type: 'mcq', q: 'Vivo en Roma →', opts: ['Abito a Roma.', 'Abito in Roma.', 'Abito di Roma.', 'Abito da Roma.'], a: 0, why: 'Con ciudades se usa «a»; con países, «in».' },
    { type: 'mcq', q: '¿Cómo se pronuncia «chiave» (llave)?', opts: ['«quiave»', '«chiave»', '«shiave»', '«kiabe» con b'], a: 0, why: '«chi» suena «qui». «ci» sería «chi».' },
    { type: 'gap', q: 'Voi ___ stanchi? (essere)', a: ['siete'], why: 'voi → siete.' },
    { type: 'gap', q: 'Tu ___ simpatico. (essere)', a: ['sei'], why: 'tu → sei.' },
    { type: 'gap', q: 'Abito ___ Spagna. (en España)', a: ['in'], why: 'Con países se usa «in».' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo.', parts: [['S', 'Mia sorella'], ['V', 'abita'], ['X', 'a Milano.']], why: '«abita» (vive) es el verbo.' },
    { type: 'find', role: 'O', prompt: 'Toca lo que dice cómo es (el atributo).', parts: [['S', 'La pizza'], ['V', 'è'], ['O', 'buonissima.']], why: '«buonissima» (buenísima) dice cómo es la pizza.' },
    { type: 'order', prompt: 'Ordena: «Me llamo Pablo y soy de Lima».', words: ['Mi', 'chiamo', 'Pablo', 'e', 'sono', 'di', 'Lima'], a: 'Mi chiamo Pablo e sono di Lima', why: '«e» (y) sin acento une las dos frases.' },
  ],

  reading: {
    title: 'Al bar',
    level: 'A1',
    sentences: [
      { parts: [['W', 'Buongiorno!'], ['S', 'Io'], ['V', 'sono'], ['O', 'Giulia.']],
        es: '¡Buenos días! Soy Giulia.',
        note: 'Aquí «io» es opcional, como «yo» en español; se pone para remarcar.',
        vocab: [['buongiorno', 'buenos días'], ['sono', 'soy']] },
      { parts: [['V', 'Sono'], ['O', 'italiana'], ['C', 'e'], ['V', 'abito'], ['X', 'a Napoli.']],
        es: 'Soy italiana y vivo en Nápoles.',
        note: 'Sin pronombre, como en español. «e» (y) une las dos partes.',
        vocab: [['italiana', 'italiana'], ['abitare', 'vivir'], ['Napoli', 'Nápoles']] },
      { parts: [['S', 'Lei'], ['V', 'è'], ['O', 'spagnolo?']],
        es: '¿Usted es español?',
        note: 'Giulia trata de usted al chico: «Lei è…».',
        vocab: [['Lei', 'usted'], ['spagnolo', 'español']] },
      { parts: [['W', 'Sì,'], ['V', 'sono'], ['X', 'di Bilbao,'], ['C', 'ma'], ['V', 'lavoro'], ['X', 'qui'], ['X', 'da un mese.']],
        es: 'Sí, soy de Bilbao, pero trabajo aquí desde hace un mes.',
        note: '«da un mese» = desde hace un mes. En italiano, el tiempo que dura algo va con «da».',
        vocab: [['ma', 'pero'], ['lavorare', 'trabajar'], ['qui', 'aquí'], ['da un mese', 'desde hace un mes']] },
      { parts: [['S', 'Il caffè'], ['X', 'qui'], ['V', 'è'], ['O', 'buonissimo!']],
        es: '¡El café aquí está buenísimo!',
        note: 'Al pedir «un caffè» en Italia te sirven un espresso. Si quieres algo parecido al café con leche, pide «un caffellatte».',
        vocab: [['il caffè', 'el café'], ['buonissimo', 'buenísimo']] },
      { parts: [['W', 'Piacere!'], ['S', 'Io'], ['V', 'mi chiamo'], ['O', 'Andrés.']],
        es: '¡Encantado! Me llamo Andrés.',
        note: '«Piacere» = (es un) placer, encantado.',
        vocab: [['piacere', 'encantado/a'], ['mi chiamo', 'me llamo']] },
    ],
    questions: [
      { q: '¿Dónde vive Giulia?', opts: ['En Nápoles', 'En Roma', 'En Bilbao', 'En Milán'], a: 0 },
      { q: '¿Desde cuándo trabaja Andrés allí?', opts: ['Desde hace un mes', 'Desde hace un año', 'Desde hoy', 'No trabaja allí'], a: 0 },
      { q: '¿Qué te sirven en Italia si pides «un caffè»?', opts: ['Un espresso', 'Un café con leche', 'Un café americano', 'Un capuchino'], a: 0 },
    ],
  },
};
})();
