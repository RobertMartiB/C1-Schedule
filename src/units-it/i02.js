// Italiano · Unidad 2 · Los artículos y el plural
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;

UNITS.i02 = {
  theory: [
    {
      h: 'Artículos definidos: más formas que en español',
      html: `<p>El italiano tiene varias formas para «el» y «los», según <b>cómo empieza la palabra siguiente</b>:</p>
      <table class="t">
        <tr><th></th><th>Singular</th><th>Plural</th><th>Cuándo</th></tr>
        <tr><td rowspan="3">Masculino</td><td><b>il</b> ${say('il libro')}</td><td><b>i</b> ${say('i libri')}</td><td>Delante de consonante normal</td></tr>
        <tr><td><b>lo</b> ${say('lo studente')}</td><td rowspan="2"><b>gli</b> ${say('gli studenti')} · ${say('gli amici')}</td><td>Delante de <b>s + consonante</b>, <b>z</b>, gn, ps, y</td></tr>
        <tr><td><b>l'</b> ${say('l\'amico')}</td><td>Delante de vocal</td></tr>
        <tr><td rowspan="2">Femenino</td><td><b>la</b> ${say('la casa')}</td><td rowspan="2"><b>le</b> ${say('le case')} · ${say('le amiche')}</td><td>Delante de consonante</td></tr>
        <tr><td><b>l'</b> ${say('l\'amica')}</td><td>Delante de vocal</td></tr>
      </table>
      <p>Lo más difícil para un hispanohablante: <b>lo</b> y <b>gli</b>. Recuerda <b>lo zaino</b> (la mochila), <b>lo studente</b>, <b>gli zii</b> (los tíos).</p>`,
    },
    {
      h: 'Artículos indefinidos: un, uno, una, un\'',
      html: `<table class="t">
        <tr><th>Masculino</th><th>Femenino</th></tr>
        <tr><td><b>un</b> ${say('un libro')}, ${say('un amico')} (¡sin apóstrofo!)</td><td><b>una</b> ${say('una casa')}</td></tr>
        <tr><td><b>uno</b> ${say('uno studente')}, ${say('uno zaino')}</td><td><b>un\'</b> ${say('un\'amica')} (con apóstrofo)</td></tr>
      </table>
      <p>Truco: el apóstrofo solo aparece en <b>femenino</b>. <i>un amico</i> (masculino) va sin apóstrofo; <i>un'amica</i> (femenino) lo lleva.</p>`,
    },
    {
      h: 'El plural cambia la última vocal',
      html: `<p>En italiano el plural no añade -s: <b>cambia la vocal final</b>.</p>
      <table class="t">
        <tr><th>Singular</th><th>Plural</th><th>Regla</th></tr>
        <tr><td>il libr<b>o</b></td><td>i libr<b>i</b></td><td>-o → -i</td></tr>
        <tr><td>la cas<b>a</b></td><td>le cas<b>e</b></td><td>-a → -e</td></tr>
        <tr><td>il cane / la notte</td><td>i can<b>i</b> / le nott<b>i</b></td><td>-e → -i (masculinos y femeninos)</td></tr>
        <tr><td>il caffè, la città</td><td>i caffè, le città</td><td>Acabadas en vocal con acento: no cambian</td></tr>
        <tr><td>il bar, il film</td><td>i bar, i film</td><td>Palabras extranjeras: no cambian</td></tr>
      </table>`,
    },
    {
      h: 'Cuidado con los géneros que cambian respecto al español',
      html: `<ul>
        <li>Masculinos en italiano y femeninos en español: <b>il latte</b> (la leche), <b>il fiore</b> (la flor), <b>il sangue</b> (la sangre), <b>il miele</b> (la miel).</li>
        <li><b>la fine</b> (el fin), <b>la gente</b> (la gente, singular como en español).</li>
        <li>Y algunos plurales irregulares: <b>l'uovo → le uova</b> (el huevo → los huevos, ¡femenino en plural!), <b>l'uomo → gli uomini</b>.</li>
      </ul>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '___ studente', opts: ['lo', 'il', 'la', 'l\''], a: 0, why: 'Delante de s + consonante se usa «lo».' },
    { type: 'mcq', q: '___ amico (un amigo)', opts: ['un', 'un\'', 'uno', 'una'], a: 0, why: 'Masculino delante de vocal: «un», sin apóstrofo. El apóstrofo es solo para el femenino.' },
    { type: 'mcq', q: '___ amica (una amiga)', opts: ['un\'', 'un', 'uno', 'una l\''], a: 0, why: 'Femenino delante de vocal: «un\'», con apóstrofo.' },
    { type: 'mcq', q: 'Plural de «lo zaino» (la mochila):', opts: ['gli zaini', 'i zaini', 'le zaine', 'lo zaini'], a: 0, why: 'lo → gli, y -o → -i.' },
    { type: 'mcq', q: 'Plural de «la città»:', opts: ['le città', 'le cittè', 'le cittàs', 'i città'], a: 0, why: 'Las palabras que acaban en vocal con acento no cambian en plural.' },
    { type: 'mcq', q: '«La leche» en italiano es…', opts: ['il latte', 'la latte', 'lo latte', 'l\'latte'], a: 0, why: '«latte» es masculino en italiano: il latte.' },
    { type: 'gap', q: '___ libri (los libros)', a: ['i'], why: 'il → i en plural.' },
    { type: 'gap', q: 'la casa → le ___', a: ['case'], why: '-a → -e en plural femenino.' },
    { type: 'gap', q: 'il cane → i ___', a: ['cani'], why: '-e → -i en plural.' },
    { type: 'gap', q: '___ amici (los amigos)', a: ['gli'], why: 'Masculino plural delante de vocal: gli.' },
    { type: 'find', role: 'S', prompt: 'Toca el sujeto.', parts: [['S', 'Gli studenti'], ['V', 'studiano'], ['X', 'in biblioteca.']], why: '«Gli studenti» es el sujeto: por eso el verbo va en plural.' },
    { type: 'order', prompt: 'Ordena: «Los niños comen las manzanas».', words: ['I', 'bambini', 'mangiano', 'le', 'mele'], a: 'I bambini mangiano le mele', why: 'il bambino → i bambini; la mela → le mele.' },
  ],

  reading: {
    title: 'Il mercato',
    level: 'A1',
    sentences: [
      { parts: [['X', 'Il sabato mattina'], ['V', 'vado'], ['X', 'al mercato'], ['X', 'con mia nonna.']],
        es: 'Los sábados por la mañana voy al mercado con mi abuela.',
        note: '«Il sabato», con artículo, significa «todos los sábados». «al» = a + il.',
        vocab: [['il sabato', 'los sábados'], ['la mattina', 'la mañana'], ['andare', 'ir'], ['la nonna', 'la abuela']] },
      { parts: [['X', 'Al mercato'], ['V', 'ci sono'], ['O', 'la frutta,'], ['O', 'il pesce'], ['C', 'e'], ['O', 'i formaggi.']],
        es: 'En el mercado hay fruta, pescado y quesos.',
        note: '«ci sono» = hay (plural). En singular: «c\'è».',
        vocab: [['ci sono / c\'è', 'hay'], ['la frutta', 'la fruta'], ['il pesce', 'el pescado'], ['il formaggio', 'el queso']] },
      { parts: [['S', 'Mia nonna'], ['V', 'compra'], ['O', 'sempre'], ['O', 'le uova'], ['X', 'da un contadino.']],
        es: 'Mi abuela siempre compra los huevos a un campesino.',
        note: '«le uova»: plural femenino de «l\'uovo», que es masculino en singular. Uno de los plurales irregulares más usados.',
        vocab: [['comprare', 'comprar'], ['sempre', 'siempre'], ['l\'uovo / le uova', 'el huevo / los huevos'], ['il contadino', 'el campesino']] },
      { parts: [['S', 'Io'], ['V', 'preferisco'], ['O', 'le pesche'], ['C', 'e'], ['O', 'gli zucchini.']],
        es: 'Yo prefiero los melocotones y los calabacines.',
        note: '«gli zucchini»: delante de z, el artículo es lo / gli. «la pesca» → «le pesche» (se añade h para mantener el sonido «k»).',
        vocab: [['preferire', 'preferir'], ['la pesca', 'el melocotón'], ['lo zucchino', 'el calabacín']] },
      { parts: [['S', 'Il mercato'], ['V', 'è'], ['O', 'pieno di gente'], ['C', 'e'], ['O', 'di colori.']],
        es: 'El mercado está lleno de gente y de colores.',
        note: '«la gente» es singular, como en español.',
        vocab: [['pieno di', 'lleno de'], ['la gente', 'la gente'], ['il colore', 'el color']] },
    ],
    questions: [
      { q: '¿Cuándo va al mercado?', opts: ['Los sábados por la mañana', 'Este sábado', 'Cada día', 'Los domingos'], a: 0 },
      { q: '¿Qué compra siempre la abuela al campesino?', opts: ['Huevos', 'Pescado', 'Queso', 'Melocotones'], a: 0 },
      { q: '¿Por qué se dice «gli zucchini» y no «i zucchini»?', opts: ['Porque empieza por z', 'Porque es femenino', 'Porque es singular', 'Porque es una fruta'], a: 0 },
    ],
  },
};
})();
