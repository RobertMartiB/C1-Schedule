// Unidad x02 · Comparar: comparativos y superlativos
UNITS.x02 = {
  theory: [
    {
      h: 'La idea: -er / more y -est / most',
      html: `<p>Para comparar dos cosas se usa el <b>comparativo</b> + <b>than</b>. Para destacar una entre varias, el <b>superlativo</b> con <b>the</b>. Que lleve terminación o «more/most» depende de lo <b>largo</b> que sea el adjetivo.</p>
      <table class="t">
        <tr><th>Adjetivo</th><th>Comparativo</th><th>Superlativo</th></tr>
        <tr><td>Corto (1 sílaba): cheap</td><td>cheap<b>er</b> than</td><td>the cheap<b>est</b></td></tr>
        <tr><td>Acaba en -y: easy</td><td>eas<b>ier</b> than</td><td>the eas<b>iest</b></td></tr>
        <tr><td>Largo: expensive</td><td><b>more</b> expensive than</td><td><b>the most</b> expensive</td></tr>
        <tr><td>Irregular: good / bad / far</td><td>better / worse / further</td><td>the best / the worst / the furthest</td></tr>
      </table>
      <p>Ortografía: consonante-vocal-consonante dobla la última letra: <i>big → bigger, hot → hottest</i>.</p>`,
    },
    {
      h: 'Igual o no tan: as … as',
      html: `<p><b>as + adjetivo + as</b> = tan … como. En negativa, <b>not as … as</b> = no tan … como.</p>
      <div class="ex">My flat is <span class="v">as big as</span> yours.<br>
      The film was<span class="v">n't as good as</span> the book. (= the book was better)</div>
      <p>Para decir «lo mismo que»: <b>the same as</b>. <i>Your phone is the same as mine.</i> (<s>the same that</s>)</p>`,
    },
    {
      h: 'Mucho más, un poco más: matizar',
      html: `<p>Delante del comparativo puedes poner cuánto:</p>
      <div class="ex"><b>much / far / a lot</b> + comparativo = mucho más: Trains are <span class="v">much faster</span> than buses.<br>
      <b>a bit / slightly</b> = un poco: It's <span class="v">slightly cheaper</span> online.<br>
      <b>by far</b> + superlativo: It's <span class="v">by far the best</span> restaurant in town.</div>
      <p><b>Ojo:</b> nunca <s>very better</s>. «Very» no va con comparativos: se dice <b>much better</b>.</p>`,
    },
    {
      h: 'Cuanto más… más: the more…, the more…',
      html: `<p>Para decir que dos cosas cambian a la vez, se usan <b>dos comparativos con the</b>:</p>
      <div class="ex"><span class="v">The more</span> you practise, <span class="v">the better</span> you get.<br>
      <span class="v">The sooner</span>, <span class="v">the better</span>. (Cuanto antes, mejor.)</div>
      <p>Y para algo que cambia poco a poco, se repite el comparativo: <i>It's getting <b>colder and colder</b>. / <b>more and more</b> expensive.</i></p>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>more cheap</s> → <b>cheaper</b>. Adjetivo corto: terminación -er.</li>
        <li><s>more better</s> → <b>better</b>. No se juntan las dos formas.</li>
        <li><s>bigger that</s> → <b>bigger than</b>. Que = than al comparar.</li>
        <li><s>the most good</s> → <b>the best</b>. Irregular.</li>
        <li><s>the best of the world</s> → <b>the best in the world</b>. Con lugares y grupos, in.</li>
      </ul>`,
    },
  ],
  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "The world's smallest country", text: "Vatican City is by [1] the smallest country in the world. It [2] up an area of less than half a square kilometre, which is smaller than many city [3]. Only about 800 people [4] it home. Despite its size, it is one of the most [5] places on Earth, with millions of tourists every year. The queues for the museums can be [6] longer in summer, so it is a good idea to book tickets in [7]. The [8] you arrive, the shorter the queue." },
    2: { title: "Faster, higher, stronger", text: "Athletes today are faster [9] they were fifty years ago, and some of [10] reasons are obvious. Training is much [11] scientific, and diets are healthier [12] ever before. Shoes are lighter, too. In fact, some of the fastest marathon times in history were run in shoes [13] were later banned. Some experts say that today's athletes are not [14] talented as the old champions; they just have [15] better equipment. The more technology improves, the [16] difficult it becomes to compare different generations." },
    3: { title: "Choosing a phone", text: "Choosing a new phone can be [17]. There is a huge [18] of models, and the most [19] ones are not always the best. Many [20] only use a few basic functions, so a cheaper phone can be [21] adequate. Battery life is often more important than the camera's [22]. Before you buy, read [23] reviews and compare the [24] and weaknesses of each model." },
  },
  exercises: [
    { type: 'mcq', q: 'This hotel is ___ than the one we stayed in last year.', opts: ['cheaper', 'more cheap', 'cheapest', 'more cheaper'], a: 0, why: 'Adjetivo corto: cheap → cheaper.' },
    { type: 'mcq', q: 'It was ___ day of my life.', opts: ['the best', 'the better', 'the most good', 'best'], a: 0, why: 'Superlativo irregular: the best.' },
    { type: 'mcq', q: 'Your phone is the same ___ mine.', opts: ['as', 'that', 'than', 'like'], a: 0, why: 'The same as = igual que.' },
    { type: 'mcq', q: 'The exam was ___ easier than I expected.', opts: ['much', 'very', 'more', 'too'], a: 0, why: 'Para intensificar un comparativo: much (nunca very).' },
    { type: 'mcq', q: 'The more you read, ___ your vocabulary becomes.', opts: ['the richer', 'richer', 'the richest', 'more rich'], a: 0, why: 'The more…, the + comparativo.' },
    { type: 'mcq', q: "Madrid isn't ___ London.", opts: ['as big as', 'as bigger as', 'so big than', 'bigger as'], a: 0, why: 'Not as + adjetivo + as.' },
    { type: 'mcq', q: "It's the tallest building ___ the city.", opts: ['in', 'of', 'from', 'at'], a: 0, why: 'Superlativo + in con lugares.' },
    { type: 'gap', q: 'My new job is ___ (interesting) than my old one.', a: ['more interesting'], why: 'Adjetivo largo: more interesting.' },
    { type: 'gap', q: 'This is the ___ (bad) film I have ever seen.', a: ['worst'], why: 'Bad → worse → the worst.' },
    { type: 'gap', q: 'Prices are getting higher and ___ every year.', a: ['higher'], why: 'Comparativo repetido: cada vez más.' },
    { type: 'find', role: 'S', prompt: 'Toca el sujeto (solo el núcleo y lo que va pegado).', parts: [['S', 'The cheapest flights'], ['V', 'are'], ['O', 'usually the ones'], ['R', 'that you book months in advance.']], why: 'El sujeto es «the cheapest flights»: lo que va detrás de are es el complemento.' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['The', 'sooner', 'we', 'leave', 'the', 'better'], a: 'The sooner we leave the better', why: 'The + comparativo, the + comparativo.' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["far", "much", "very", "most"], a: 0, why: "By far + superlativo = con diferencia." },
    { part: 1, type: 'mcq', opts: ["takes", "gives", "holds", "sets"], a: 0, why: "Take up an area = ocupar una superficie." },
    { part: 1, type: 'mcq', opts: ["parks", "fields", "grounds", "lands"], a: 0, why: "City parks = parques urbanos." },
    { part: 1, type: 'mcq', opts: ["call", "name", "make", "say"], a: 0, why: "Call somewhere home = vivir en un sitio, considerarlo tu casa." },
    { part: 1, type: 'mcq', opts: ["visited", "travelled", "seen", "gone"], a: 0, why: "The most visited places = los lugares más visitados." },
    { part: 1, type: 'mcq', opts: ["even", "very", "so", "such"], a: 0, why: "Even + comparativo = aún más." },
    { part: 1, type: 'mcq', opts: ["advance", "front", "ahead", "before"], a: 0, why: "In advance = con antelación." },
    { part: 1, type: 'mcq', opts: ["earlier", "first", "quicker", "prompter"], a: 0, why: "The earlier…, the shorter… = cuanto antes…, más corta…" },
    { part: 2, type: 'gap', a: ["than"], why: "Comparativo + than." },
    { part: 2, type: 'gap', a: ["the"], why: "Some of the reasons." },
    { part: 2, type: 'gap', a: ["more"], why: "Adjetivo largo: more scientific." },
    { part: 2, type: 'gap', a: ["than"], why: "Healthier than ever = más sanas que nunca." },
    { part: 2, type: 'gap', a: ["that", "which"], why: "Relativo de cosa: that o which." },
    { part: 2, type: 'gap', a: ["as"], why: "Not as … as." },
    { part: 2, type: 'gap', a: ["much", "far"], why: "Much better = mucho mejor." },
    { part: 2, type: 'gap', a: ["more"], why: "The more…, the more difficult…" },
    { part: 3, type: 'gap', stem: "CONFUSE", a: ["confusing"], why: "Adjetivo con -ing: confusing (algo que confunde)." },
    { part: 3, type: 'gap', stem: "VARY", a: ["variety"], why: "Sustantivo: variety." },
    { part: 3, type: 'gap', stem: "EXPENSE", a: ["expensive"], why: "Adjetivo: expensive." },
    { part: 3, type: 'gap', stem: "CONSUME", a: ["consumers"], why: "Personas, plural: consumers." },
    { part: 3, type: 'gap', stem: "PERFECT", a: ["perfectly"], why: "Adverbio delante de adjetivo: perfectly." },
    { part: 3, type: 'gap', stem: "RESOLVE", a: ["resolution"], why: "Sustantivo: resolution." },
    { part: 3, type: 'gap', stem: "DEPEND", a: ["independent"], why: "Adjetivo con prefijo: independent." },
    { part: 3, type: 'gap', stem: "STRONG", a: ["strengths"], why: "Sustantivo plural: strengths (puntos fuertes)." },
    { part: 4, type: 'gap', s1: "No mountain in Spain is higher than Teide.", key: "HIGHEST", s2: "Teide is ___ Spain.", a: ["the highest mountain in"], why: "Superlativo + in." },
    { part: 4, type: 'gap', s1: "My brother is less patient than me.", key: "AS", s2: "My brother isn't ___ me.", a: ["as patient as"], why: "Not as … as." },
    { part: 4, type: 'gap', s1: "I've never eaten such a delicious cake.", key: "MOST", s2: "This is ___ I have ever eaten.", a: ["the most delicious cake"], why: "Superlativo + ever: el más… que he…" },
    { part: 4, type: 'gap', s1: "If you practise more, you'll get better.", key: "THE", s2: "___ better you'll get.", a: ["the more you practise the", "the more you practice the"], why: "The more…, the better…" },
    { part: 4, type: 'gap', s1: "The train is much faster than the bus.", key: "NEARLY", s2: "The bus is ___ the train.", a: ["not nearly as fast as"], why: "Not nearly as … as = ni de lejos tan … como." },
    { part: 4, type: 'gap', s1: "Your bag and my bag are identical.", key: "SAME", s2: "Your bag is ___ mine.", a: ["the same as"], why: "The same as." },
  ],

  reading: {
    title: 'City or village?',
    level: 'B1',
    sentences: [
      { parts: [['S', 'Living in a big city'], ['V', 'is'], ['O', 'usually more expensive than living in a village.']],
        es: 'Vivir en una gran ciudad suele ser más caro que vivir en un pueblo.',
        note: 'El sujeto es una acción con -ing (living). Comparativo largo: more expensive than.',
        vocab: [['expensive', 'caro'], ['village', 'pueblo']] },
      { parts: [['C', 'However,'], ['S', 'cities'], ['V', 'offer'], ['O', 'far more jobs and much better public transport.']],
        es: 'Sin embargo, las ciudades ofrecen muchos más trabajos y un transporte público mucho mejor.',
        note: 'Far y much intensifican el comparativo.',
        vocab: [['offer', 'ofrecer'], ['public transport', 'transporte público']] },
      { parts: [['S', 'Villages'], ['V', 'are'], ['O', 'quieter and safer,'], ['R', 'which is why many families choose them.']],
        es: 'Los pueblos son más tranquilos y seguros, por eso muchas familias los eligen.',
        note: 'Dos comparativos cortos: quieter, safer. Which is why = por eso.',
        vocab: [['quiet', 'tranquilo'], ['safe', 'seguro'], ['choose', 'elegir']] },
      { parts: [['S', 'The air'], ['V', 'is'], ['O', 'cleaner,'], ['C', 'and'], ['S', 'houses'], ['V', 'are'], ['O', 'not as small as in the city centre.']],
        es: 'El aire es más limpio, y las casas no son tan pequeñas como en el centro.',
        note: 'Not as … as = no tan … como.',
        vocab: [['clean', 'limpio'], ['city centre', 'centro de la ciudad']] },
      { parts: [['C', 'But'], ['S', 'the nearest hospital'], ['V', 'can be'], ['O', 'an hour away.']],
        es: 'Pero el hospital más cercano puede estar a una hora.',
        note: 'Superlativo: the nearest.',
        vocab: [['near', 'cerca'], ['away', 'de distancia']] },
      { parts: [['X', 'In a recent survey,'], ['S', 'young people'], ['V', 'said'], ['R', 'that the most important thing for them was having friends nearby.']],
        es: 'En una encuesta reciente, los jóvenes dijeron que lo más importante para ellos era tener amigos cerca.',
        note: 'Superlativo largo: the most important.',
        vocab: [['survey', 'encuesta'], ['nearby', 'cerca']] },
      { parts: [['R', 'The older people get,'], ['X', 'the more'], ['S', 'they'], ['V', 'value'], ['O', 'peace and quiet.']],
        es: 'Cuanto mayor se hace la gente, más valora la tranquilidad.',
        note: 'The + comparativo…, the more… = cuanto más…, más.',
        vocab: [['value', 'valorar'], ['peace and quiet', 'tranquilidad']] },
    ],
    questions: [
      { q: 'What is an advantage of cities, according to the text?', opts: ['More jobs and better transport.', 'Cleaner air.', 'Bigger houses.', 'Safer streets.'], a: 0 },
      { q: 'What is a problem of villages?', opts: ['The nearest hospital can be far away.', 'They are too noisy.', 'Houses are very small.', 'They are more expensive.'], a: 0 },
      { q: 'What happens as people get older?', opts: ['They value peace and quiet more.', 'They move to cities.', 'They need more friends.', 'They spend more money.'], a: 0 },
    ],
  },
};
