// Portugués · Unidad 2 · Ser y estar
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;

UNITS.p02 = {
  theory: [
    {
      h: 'Como en español… casi',
      html: `<p>El portugués tiene <b>ser</b> y <b>estar</b>, igual que el español, y en general se usan igual:</p>
      <ul>
        <li><b>ser</b>: identidad, origen, profesión, características: ${say('Ela é médica.')} · ${say('A casa é grande.')}</li>
        <li><b>estar</b>: estados pasajeros y cómo te encuentras: ${say('Eu estou cansado.')} · ${say('O café está frio.')}</li>
      </ul>
      <p>Pero hay <b>una gran diferencia</b>: para decir dónde está algo que <b>no se mueve</b> (edificios, ciudades), el portugués usa <b>ser</b> (o <b>ficar</b>):</p>
      <ul>
        <li>${say('Onde é o banheiro?')} (¿dónde está el baño?)</li>
        <li>${say('O museu fica no centro.')} (el museo está en el centro)</li>
      </ul>
      <p>Para personas y cosas que se mueven, <b>estar</b>, como en español: ${say('Onde você está?')}</p>`,
    },
    {
      h: 'El verbo estar',
      html: `<table class="t">
        <tr><th>Pronombre</th><th>estar</th></tr>
        <tr><td>eu</td><td>${say('eu estou', 'estou')}</td></tr>
        <tr><td>tu</td><td>${say('tu estás', 'estás')}</td></tr>
        <tr><td>você / ele / ela</td><td>${say('ele está', 'está')}</td></tr>
        <tr><td>nós</td><td>${say('nós estamos', 'estamos')}</td></tr>
        <tr><td>vocês / eles / elas</td><td>${say('eles estão', 'estão')}</td></tr>
      </table>
      <p>En el habla de Brasil, <i>está</i> se acorta muchísimo: <b>tá</b>. ${say('Tá bom!')} = ¡vale! / ¡está bien!</p>`,
    },
    {
      h: 'Ficar: el comodín',
      html: `<p><b>ficar</b> es uno de los verbos más usados del portugués y no tiene un equivalente exacto:</p>
      <ul>
        <li>Estar situado: ${say('Lisboa fica em Portugal.')}</li>
        <li>Quedarse: ${say('Vou ficar em casa hoje.')} (hoy me quedo en casa)</li>
        <li>Ponerse, volverse: ${say('Ele ficou nervoso.')} (se puso nervioso)</li>
      </ul>`,
    },
    {
      h: 'Expresiones con estar que conviene saber',
      html: `<ul>
        <li><b>estar com fome</b> = tener hambre: ${say('Estou com fome.')}</li>
        <li><b>estar com sede / frio / calor / sono</b> = tener sed / frío / calor / sueño.</li>
        <li><b>estar com pressa</b> = tener prisa.</li>
      </ul>
      <p>Fíjate en la diferencia con el español: donde nosotros decimos <b>tener</b> hambre, el portugués dice <b>estar con</b> hambre.</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '¿Dónde está la estación? → Onde ___ a estação?', opts: ['é / fica', 'está', 'estou', 'são'], a: 0, why: 'Para la ubicación de algo que no se mueve se usa «ser» o «ficar».' },
    { type: 'mcq', q: 'Tengo hambre →', opts: ['Estou com fome.', 'Tenho fome.', 'Sou com fome.', 'Estou fome.'], a: 0, why: 'En portugués se dice «estar com fome». («Tenho fome» también se entiende, pero «estar com» es lo natural.)' },
    { type: 'mcq', q: 'Ela ___ professora.', opts: ['é', 'está', 'fica', 'estão'], a: 0, why: 'La profesión va con ser.' },
    { type: 'mcq', q: 'Nós ___ muito cansados hoje.', opts: ['estamos', 'somos', 'estão', 'ficam'], a: 0, why: 'Un estado pasajero va con estar: nós estamos.' },
    { type: 'mcq', q: '«Tá bom!» significa…', opts: ['¡Vale! / ¡Está bien!', '¡Qué bueno estás!', '¡Buenos días!', '¡Basta!'], a: 0, why: '«Tá» es la forma hablada de «está».' },
    { type: 'mcq', q: 'Ele ___ nervoso antes do exame. (se puso)', opts: ['ficou', 'foi', 'é', 'tem'], a: 0, why: '«ficar» también significa ponerse, volverse.' },
    { type: 'gap', q: 'Eles ___ no Brasil agora. (estar)', a: ['estão'], why: 'eles → estão.' },
    { type: 'gap', q: 'Eu ___ com sede. (estar)', a: ['estou'], why: 'eu → estou. «Estar com sede» = tener sed.' },
    { type: 'gap', q: 'Hoje eu vou ___ em casa. (quedarme)', a: ['ficar'], why: '«ficar» = quedarse.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo.', parts: [['S', 'O restaurante'], ['V', 'fica'], ['X', 'perto da praia.']], why: '«fica» indica dónde está algo que no se mueve.' },
    { type: 'find', role: 'O', prompt: 'Toca lo que dice cómo está.', parts: [['S', 'A sopa'], ['V', 'está'], ['O', 'muito quente.']], why: '«muito quente» (muy caliente) es un estado pasajero.' },
    { type: 'order', prompt: 'Ordena: «Mi madre está muy contenta».', words: ['Minha', 'mãe', 'está', 'muito', 'feliz'], a: 'Minha mãe está muito feliz', why: 'Un estado de ánimo va con estar.' },
  ],

  reading: {
    title: 'Primeiro dia em Lisboa',
    level: 'A1',
    sentences: [
      { parts: [['S', 'Eu'], ['V', 'estou'], ['X', 'em Lisboa'], ['X', 'pela primeira vez.']],
        es: 'Estoy en Lisboa por primera vez.',
        note: 'Una persona (que se mueve) en un lugar: estar.',
        vocab: [['pela primeira vez', 'por primera vez']] },
      { parts: [['S', 'O meu hotel'], ['V', 'fica'], ['X', 'no bairro de Alfama.']],
        es: 'Mi hotel está en el barrio de Alfama.',
        note: 'Un edificio (que no se mueve): ficar. En Portugal es normal poner artículo delante del posesivo: «o meu hotel».',
        vocab: [['o bairro', 'el barrio'], ['ficar', 'estar situado']] },
      { parts: [['S', 'As ruas'], ['V', 'são'], ['O', 'estreitas'], ['C', 'e'], ['O', 'muito bonitas.']],
        es: 'Las calles son estrechas y muy bonitas.',
        note: 'Características: ser.',
        vocab: [['a rua', 'la calle'], ['estreito', 'estrecho'], ['bonito', 'bonito']] },
      { parts: [['C', 'Agora'], ['S', 'eu'], ['V', 'estou'], ['O', 'com fome.']],
        es: 'Ahora tengo hambre.',
        note: '«estar com fome» = tener hambre.',
        vocab: [['agora', 'ahora'], ['estar com fome', 'tener hambre']] },
      { parts: [['S', 'Os pastéis de nata'], ['V', 'são'], ['O', 'deliciosos'], ['C', 'e'], ['V', 'estão'], ['O', 'quentes!']],
        es: '¡Los pasteles de nata son deliciosos y están calientes!',
        note: 'Las dos cosas en una frase: son deliciosos (siempre, ser) y están calientes (ahora, estar).',
        vocab: [['o pastel de nata', 'el pastel de nata'], ['delicioso', 'delicioso'], ['quente', 'caliente']] },
      { parts: [['X', 'Amanhã'], ['V', 'vou ficar'], ['X', 'o dia todo'], ['X', 'na cidade.']],
        es: 'Mañana me voy a quedar todo el día en la ciudad.',
        note: '«vou ficar» = voy a quedarme. Es el futuro más habitual (unidad 11).',
        vocab: [['amanhã', 'mañana'], ['o dia todo', 'todo el día'], ['a cidade', 'la ciudad']] },
    ],
    questions: [
      { q: '¿Dónde está el hotel?', opts: ['En el barrio de Alfama', 'Cerca de la playa', 'Fuera de Lisboa', 'En el centro comercial'], a: 0 },
      { q: '¿Cómo son las calles?', opts: ['Estrechas y bonitas', 'Anchas y modernas', 'Feas', 'Calientes'], a: 0 },
      { q: '¿Por qué se dice «o hotel fica» y no «o hotel está»?', opts: ['Porque un edificio no se mueve', 'Porque es plural', 'Porque es pasado', 'Porque es Brasil'], a: 0 },
    ],
  },
};
})();
