// Italiano · Unidad 3 · Verbos en -are, -ere, -ire en presente
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;

UNITS.i03 = {
  theory: [
    {
      h: 'Tres conjugaciones, como en español',
      html: `<p>Los verbos italianos acaban en <b>-are</b>, <b>-ere</b> o <b>-ire</b>, igual que nuestros -ar, -er, -ir. Las terminaciones también se parecen mucho:</p>
      <table class="t">
        <tr><th></th><th>parlare (hablar)</th><th>prendere (coger)</th><th>dormire (dormir)</th></tr>
        <tr><td>io</td><td>${say('parlo')}</td><td>${say('prendo')}</td><td>${say('dormo')}</td></tr>
        <tr><td>tu</td><td>${say('parli')}</td><td>${say('prendi')}</td><td>${say('dormi')}</td></tr>
        <tr><td>lui / lei / Lei</td><td>${say('parla')}</td><td>${say('prende')}</td><td>${say('dorme')}</td></tr>
        <tr><td>noi</td><td>${say('parliamo')}</td><td>${say('prendiamo')}</td><td>${say('dormiamo')}</td></tr>
        <tr><td>voi</td><td>${say('parlate')}</td><td>${say('prendete')}</td><td>${say('dormite')}</td></tr>
        <tr><td>loro</td><td>${say('parlano')}</td><td>${say('prendono')}</td><td>${say('dormono')}</td></tr>
      </table>
      <p>Diferencias con el español: <b>tu</b> acaba siempre en <b>-i</b> (tu parli, no «parlas»), y <b>noi</b> siempre en <b>-iamo</b>.</p>`,
    },
    {
      h: 'Ojo con el acento de «loro»',
      html: `<p>En la forma de <b>loro</b>, el acento va en la <b>tercera sílaba empezando por el final</b>, no en la penúltima como en español:</p>
      <p>${say('parlano')} se dice «PÁR-la-no», no «par-LA-no». Igual: ${say('abitano')} («Á-bi-ta-no»), ${say('lavorano')} («la-VÓ-ra-no»).</p>`,
    },
    {
      h: 'Los verbos en -ire con -isc-',
      html: `<p>Muchos verbos en <b>-ire</b> (capire, finire, preferire) añaden <b>-isc-</b> en todas las personas salvo noi y voi:</p>
      <table class="t">
        <tr><th>capire (entender)</th></tr>
        <tr><td>${say('io capisco')} · ${say('tu capisci')} · ${say('lui capisce')}</td></tr>
        <tr><td>${say('noi capiamo')} · ${say('voi capite')}</td></tr>
        <tr><td>${say('loro capiscono')}</td></tr>
      </table>
      <p>${say('Non capisco!')} (¡no entiendo!) es una frase que vas a usar mucho al principio.</p>`,
    },
    {
      h: 'Verbos en -care y -gare: la h que mantiene el sonido',
      html: `<p>En <b>giocare</b> (jugar) y <b>pagare</b> (pagar), se añade una <b>h</b> delante de la i para que siga sonando «k» o «g»:</p>
      <ul><li>${say('tu giochi')} · ${say('noi giochiamo')}</li><li>${say('tu paghi')} · ${say('noi paghiamo')}</li></ul>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: 'Tu ___ italiano? (parlare)', opts: ['parli', 'parla', 'parlas', 'parle'], a: 0, why: 'Con tu, la terminación es siempre -i.' },
    { type: 'mcq', q: 'Noi ___ a Firenze. (abitare)', opts: ['abitiamo', 'abitamo', 'abitate', 'abitano'], a: 0, why: 'noi → -iamo en las tres conjugaciones.' },
    { type: 'mcq', q: 'Loro ___ il treno. (prendere)', opts: ['prendono', 'prendano', 'prendeno', 'prendete'], a: 0, why: 'Verbos en -ere: loro → -ono.' },
    { type: 'mcq', q: 'Io non ___. (capire)', opts: ['capisco', 'capo', 'capiso', 'capisci'], a: 0, why: 'capire lleva -isc-: io capisco.' },
    { type: 'mcq', q: '¿Dónde va el acento en «parlano»?', opts: ['PÁR-la-no', 'par-LA-no', 'par-la-NO', 'Da igual'], a: 0, why: 'En la forma de loro, el acento va en la tercera sílaba empezando por el final.' },
    { type: 'mcq', q: 'Tu ___ a calcio? (giocare)', opts: ['giochi', 'gioci', 'giocchi', 'gioca'], a: 0, why: 'Se añade h para mantener el sonido «k»: giochi.' },
    { type: 'gap', q: 'Lui ___ fino alle dieci. (dormire)', a: ['dorme'], why: 'Verbos en -ire: lui → -e.' },
    { type: 'gap', q: 'Voi ___ in un ufficio? (lavorare)', a: ['lavorate'], why: 'voi → -ate en los verbos en -are.' },
    { type: 'gap', q: 'Loro ___ il caffè senza zucchero. (preferire)', a: ['preferiscono'], why: 'preferire lleva -isc-: loro preferiscono.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo.', parts: [['S', 'I miei amici'], ['V', 'mangiano'], ['X', 'sempre'], ['X', 'tardi.']], why: '«mangiano» (comen): loro → -ano.' },
    { type: 'find', role: 'O', prompt: 'Toca el complemento directo.', parts: [['S', 'Mia madre'], ['V', 'legge'], ['O', 'il giornale'], ['X', 'ogni mattina.']], why: 'Lo que lee: «il giornale» (el periódico).' },
    { type: 'order', prompt: 'Ordena: «No entiendo la pregunta».', words: ['Non', 'capisco', 'la', 'domanda'], a: 'Non capisco la domanda', why: 'La negación «non» va delante del verbo. «domanda» = pregunta (falso amigo).' },
  ],

  reading: {
    title: 'La giornata di Luca',
    level: 'A1',
    sentences: [
      { parts: [['S', 'Luca'], ['V', 'abita'], ['X', 'a Bologna'], ['C', 'e'], ['V', 'lavora'], ['X', 'in una libreria.']],
        es: 'Luca vive en Bolonia y trabaja en una librería.',
        note: '«libreria» es una librería (tienda de libros). La biblioteca es «biblioteca».',
        vocab: [['abitare', 'vivir'], ['lavorare', 'trabajar'], ['la libreria', 'la librería']] },
      { parts: [['X', 'La mattina'], ['V', 'prende'], ['O', 'un cappuccino'], ['X', 'al bar.']],
        es: 'Por la mañana toma un capuchino en el bar.',
        note: 'El sujeto (lui) se omite, como en español: la frase empieza directamente por el verbo tras «la mattina». «prendere» = tomar, coger.',
        vocab: [['la mattina', 'por la mañana'], ['prendere', 'tomar, coger'], ['il bar', 'la cafetería']] },
      { parts: [['X', 'In libreria'], ['V', 'parla'], ['X', 'con molti clienti'], ['C', 'e'], ['V', 'consiglia'], ['O', 'libri.']],
        es: 'En la librería habla con muchos clientes y recomienda libros.',
        note: '«consigliare» = aconsejar, recomendar.',
        vocab: [['il cliente', 'el cliente'], ['consigliare', 'recomendar']] },
      { parts: [['X', 'La sera'], ['S', 'Luca e i suoi amici'], ['V', 'giocano'], ['X', 'a calcetto.']],
        es: 'Por la noche, Luca y sus amigos juegan al fútbol sala.',
        note: 'giocare → giocano (loro). «calcetto» = fútbol sala; «calcio» = fútbol.',
        vocab: [['la sera', 'la noche, la tarde-noche'], ['giocare', 'jugar'], ['il calcetto', 'el fútbol sala']] },
      { parts: [['S', 'Luca'], ['V', 'preferisce'], ['O', 'dormire'], ['X', 'presto'], ['R', 'perché la libreria apre alle otto.']],
        es: 'Luca prefiere dormirse pronto porque la librería abre a las ocho.',
        note: 'preferire → preferisce (con -isc-). «presto» = pronto (y no «rápido»).',
        vocab: [['preferire', 'preferir'], ['presto', 'pronto, temprano'], ['aprire', 'abrir']] },
    ],
    questions: [
      { q: '¿Dónde trabaja Luca?', opts: ['En una librería', 'En una biblioteca', 'En un bar', 'En un banco'], a: 0 },
      { q: '¿Qué hace por la noche?', opts: ['Juega al fútbol sala', 'Lee libros', 'Trabaja', 'Toma un capuchino'], a: 0 },
      { q: '¿Qué significa «presto» en italiano?', opts: ['pronto, temprano', 'rápido', 'prestado', 'listo'], a: 0 },
    ],
  },
};
})();
