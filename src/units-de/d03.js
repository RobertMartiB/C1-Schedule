// Alemán · Unidad 3 · Los verbos en presente
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;

UNITS.d03 = {
  theory: [
    {
      h: 'La conjugación regular',
      html: `<p>Casi todos los infinitivos alemanes acaban en <b>-en</b>. Se quita y se añaden estas terminaciones:</p>
      <table class="t">
        <tr><th>Persona</th><th>Terminación</th><th>wohnen (vivir)</th><th>lernen (aprender)</th></tr>
        <tr><td>ich</td><td>-e</td><td>${say('ich wohne')}</td><td>${say('ich lerne')}</td></tr>
        <tr><td>du</td><td>-st</td><td>${say('du wohnst')}</td><td>${say('du lernst')}</td></tr>
        <tr><td>er / sie / es</td><td>-t</td><td>${say('er wohnt')}</td><td>${say('sie lernt')}</td></tr>
        <tr><td>wir</td><td>-en</td><td>${say('wir wohnen')}</td><td>${say('wir lernen')}</td></tr>
        <tr><td>ihr</td><td>-t</td><td>${say('ihr wohnt')}</td><td>${say('ihr lernt')}</td></tr>
        <tr><td>sie / Sie</td><td>-en</td><td>${say('sie wohnen')}</td><td>${say('Sie lernen')}</td></tr>
      </table>
      <p>Truco: <b>wir</b> y <b>sie/Sie</b> son siempre iguales que el infinitivo.</p>`,
    },
    {
      h: 'Cuando la raíz acaba en -t o -d',
      html: `<p>Si la raíz termina en <b>t</b> o <b>d</b> (arbeiten, finden), se añade una <b>e</b> para poder pronunciarlo:</p>
      <ul>
        <li>${say('du arbeitest')} (no «arbeitst»)</li>
        <li>${say('er arbeitet')}</li>
        <li>${say('ihr findet')}</li>
      </ul>
      <p>Y si acaba en <b>s, ß o z</b>, con <b>du</b> solo se añade <b>-t</b>: ${say('du heißt')}, ${say('du tanzt')}.</p>`,
    },
    {
      h: 'Verbos que cambian de vocal',
      html: `<p>Algunos verbos muy usados cambian la vocal de la raíz, pero <b>solo con du y er/sie/es</b>:</p>
      <table class="t">
        <tr><th>Cambio</th><th>Infinitivo</th><th>du</th><th>er / sie / es</th></tr>
        <tr><td>e → i</td><td>sprechen (hablar)</td><td>${say('du sprichst')}</td><td>${say('er spricht')}</td></tr>
        <tr><td>e → ie</td><td>sehen (ver)</td><td>${say('du siehst')}</td><td>${say('sie sieht')}</td></tr>
        <tr><td>a → ä</td><td>fahren (ir en vehículo)</td><td>${say('du fährst')}</td><td>${say('er fährt')}</td></tr>
        <tr><td>e → i</td><td>essen (comer)</td><td>${say('du isst')}</td><td>${say('sie isst')}</td></tr>
      </table>
      <p>Con <i>ich, wir, ihr, sie</i> son regulares: <i>ich spreche, wir fahren</i>.</p>`,
    },
    {
      h: 'La regla de oro: el verbo, en segunda posición',
      html: `<p>En una frase normal, el verbo conjugado va <b>siempre en segundo lugar</b>. Lo que va primero puede cambiar, pero el verbo no se mueve:</p>
      <ul>
        <li>${say('Ich lerne heute Deutsch.')}</li>
        <li>${say('Heute lerne ich Deutsch.')}</li>
        <li>${say('Deutsch lerne ich heute.')}</li>
      </ul>
      <p>Si empiezas por otra cosa que no sea el sujeto, el sujeto pasa <b>detrás del verbo</b>. Esto es lo que más cuesta a los hispanohablantes: «Heute ich lerne» está mal.</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: 'Wir ___ in Berlin. (wohnen)', opts: ['wohnen', 'wohnt', 'wohnst', 'wohne'], a: 0, why: 'wir → -en, igual que el infinitivo.' },
    { type: 'mcq', q: 'Du ___ sehr gut Deutsch. (sprechen)', opts: ['sprichst', 'sprechst', 'spricht', 'sprechen'], a: 0, why: 'sprechen cambia e → i con du y er: du sprichst.' },
    { type: 'mcq', q: 'Er ___ nach Hamburg. (fahren)', opts: ['fährt', 'fahrt', 'fährst', 'fahren'], a: 0, why: 'fahren cambia a → ä con du y er: er fährt.' },
    { type: 'mcq', q: 'Du ___ zu viel. (arbeiten)', opts: ['arbeitest', 'arbeitst', 'arbeitet', 'arbeiten'], a: 0, why: 'Raíz en -t: se añade una e → du arbeitest.' },
    { type: 'mcq', q: '¿Cuál es correcta?', opts: ['Morgen fahre ich nach Wien.', 'Morgen ich fahre nach Wien.', 'Ich morgen fahre nach Wien.', 'Fahre morgen ich nach Wien.'], a: 0, why: 'El verbo va en segunda posición: si empiezas por «morgen», el sujeto va detrás del verbo.' },
    { type: 'mcq', q: 'Sie (ella) ___ einen Film. (sehen)', opts: ['sieht', 'seht', 'sehen', 'siehst'], a: 0, why: 'sehen cambia e → ie: sie sieht.' },
    { type: 'gap', q: 'Ich ___ Spanisch und Englisch. (sprechen)', a: ['spreche'], why: 'Con ich no cambia la vocal: ich spreche.' },
    { type: 'gap', q: 'Ihr ___ Deutsch. (lernen)', a: ['lernt'], why: 'ihr → -t.' },
    { type: 'gap', q: 'Was ___ du? (essen)', a: ['isst'], why: 'essen: du isst (e → i y solo -t porque la raíz acaba en s).' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo.', parts: [['X', 'Am Wochenende'], ['V', 'spielt'], ['S', 'mein Bruder'], ['O', 'Fußball.']], why: '«spielt» va en segunda posición; el sujeto (mein Bruder) va detrás.' },
    { type: 'find', role: 'S', prompt: 'Toca el sujeto.', parts: [['X', 'Heute'], ['V', 'kocht'], ['S', 'meine Mutter'], ['O', 'Paella.']], why: 'La frase empieza por «heute», así que el sujeto va detrás del verbo.' },
    { type: 'order', prompt: 'Ordena empezando por «Jeden Tag»: «Cada día aprendo alemán».', words: ['Jeden', 'Tag', 'lerne', 'ich', 'Deutsch'], a: 'Jeden Tag lerne ich Deutsch', why: '«Jeden Tag» ocupa la primera posición; el verbo va segundo y el sujeto detrás.' },
  ],

  reading: {
    title: 'Ein normaler Tag',
    level: 'A1',
    sentences: [
      { parts: [['S', 'Anna'], ['V', 'wohnt'], ['X', 'in Leipzig'], ['C', 'und'], ['V', 'studiert'], ['O', 'Medizin.']],
        es: 'Anna vive en Leipzig y estudia Medicina.',
        note: 'er/sie → -t: wohnt, studiert.',
        vocab: [['wohnen', 'vivir'], ['studieren', 'estudiar (en la universidad)'], ['die Medizin', 'la medicina']] },
      { parts: [['X', 'Morgens'], ['V', 'fährt'], ['S', 'sie'], ['X', 'mit dem Fahrrad'], ['X', 'zur Uni.']],
        es: 'Por las mañanas va en bici a la universidad.',
        note: 'fahren → sie fährt. Como la frase empieza por «morgens», el sujeto va detrás del verbo.',
        vocab: [['morgens', 'por las mañanas'], ['das Fahrrad', 'la bicicleta'], ['die Uni', 'la universidad']] },
      { parts: [['X', 'Mittags'], ['V', 'isst'], ['S', 'sie'], ['X', 'in der Mensa.']],
        es: 'A mediodía come en el comedor universitario.',
        note: 'essen → sie isst.',
        vocab: [['mittags', 'a mediodía'], ['die Mensa', 'el comedor universitario']] },
      { parts: [['X', 'Am Nachmittag'], ['V', 'arbeitet'], ['S', 'Anna'], ['X', 'in einem Café.']],
        es: 'Por la tarde, Anna trabaja en una cafetería.',
        note: 'arbeiten → sie arbeitet: raíz en -t, se añade una e.',
        vocab: [['der Nachmittag', 'la tarde'], ['arbeiten', 'trabajar']] },
      { parts: [['X', 'Abends'], ['V', 'sieht'], ['S', 'sie'], ['O', 'eine Serie'], ['C', 'oder'], ['V', 'liest'], ['O', 'ein Buch.']],
        es: 'Por la noche ve una serie o lee un libro.',
        note: 'sehen → sieht; lesen → liest (e → ie).',
        vocab: [['abends', 'por la noche'], ['lesen', 'leer'], ['oder', 'o']] },
      { parts: [['S', 'Sie'], ['V', 'spricht'], ['O', 'Deutsch, Englisch'], ['C', 'und'], ['O', 'ein bisschen Spanisch.']],
        es: 'Habla alemán, inglés y un poco de español.',
        note: 'sprechen → sie spricht. Los idiomas se escriben con mayúscula (son sustantivos).',
        vocab: [['sprechen', 'hablar'], ['ein bisschen', 'un poco']] },
    ],
    questions: [
      { q: '¿Cómo va Anna a la universidad?', opts: ['En bicicleta', 'En coche', 'En tren', 'Andando'], a: 0 },
      { q: '¿Dónde trabaja por la tarde?', opts: ['En una cafetería', 'En el comedor', 'En un hospital', 'No trabaja'], a: 0 },
      { q: '¿Por qué se dice «Morgens fährt sie» y no «Morgens sie fährt»?', opts: ['Porque el verbo va en segunda posición', 'Porque es una pregunta', 'Porque es pasado', 'Porque es plural'], a: 0 },
    ],
  },
};
})();
