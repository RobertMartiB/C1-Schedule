// Unidad 4 · La pasiva
UNITS.u04 = {
  theory: [
    {
      h: 'Para qué sirve',
      html: `<p>En la voz pasiva, el protagonista de la frase es <b>quien recibe la acción</b>, no quien la hace. Se usa cuando quién lo hace no importa, no se sabe o es obvio.</p>
      <div class="ex">Activa: <span class="s">Someone</span> <span class="v">stole</span> <span class="o">my bike</span>.<br>
      Pasiva: <span class="s">My bike</span> <span class="v">was stolen</span>. → Lo importante es la bici; el ladrón no se sabe.</div>
      <p>En los textos (noticias, ciencia, informes) la pasiva aparece muchísimo. Si no la reconoces, entenderás al revés quién hace qué.</p>`,
    },
    {
      h: 'Cómo se forma',
      html: `<div class="formula">be (en el tiempo que toque) + participio</div>
      <table class="t">
        <tr><th>Tiempo</th><th>Pasiva</th></tr>
        <tr><td>Presente</td><td>English <b>is spoken</b> here.</td></tr>
        <tr><td>Pasado</td><td>The bridge <b>was built</b> in 1890.</td></tr>
        <tr><td>Present perfect</td><td>The meeting <b>has been cancelled</b>.</td></tr>
        <tr><td>Futuro</td><td>The results <b>will be published</b> on Monday.</td></tr>
        <tr><td>Continuo</td><td>The road <b>is being repaired</b>.</td></tr>
        <tr><td>Con modal</td><td>Phones <b>must be switched off</b>.</td></tr>
      </table>
      <p>Truco: el verbo que cambia de tiempo es <b>be</b>. El participio siempre se queda igual.</p>`,
    },
    {
      h: 'Quién lo hace: by',
      html: `<p>Si quieres decir quién hizo la acción, usa <b>by</b>. Solo se añade cuando aporta información:</p>
      <div class="ex">Guernica <span class="v">was painted</span> <span class="x">by Picasso</span>. ✓ (dato importante)<br>
      My bike was stolen <s>by someone</s>. ✗ (no aporta nada)</div>`,
    },
    {
      h: 'Cómo reconocerla al leer',
      html: `<p>Busca <b>be + participio</b>. Cuidado, porque el participio puede parecer un pasado normal:</p>
      <div class="ex">The thief <span class="v">arrested</span> the man. → el ladrón arrestó (activa, raro)<br>
      The thief <span class="v">was arrested</span>. → al ladrón lo arrestaron (pasiva)</div>
      <p>Y recuerda la unidad 2: muchas veces la pasiva aparece «comprimida» como relativa reducida, sin <i>be</i>:</p>
      <div class="ex">The houses <span class="r">built after the war</span> are small. = which were built</div>`,
    },
    {
      h: 'La pasiva y el «se» español',
      html: `<p>Muchas frases con «se» en español se dicen en inglés con pasiva:</p>
      <div class="ex">Se habla inglés. → English <b>is spoken</b>.<br>
      Se construyó en 1890. → It <b>was built</b> in 1890.<br>
      Se cancelaron los vuelos. → The flights <b>were cancelled</b>.</div>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>The house was build in 1900.</s> → <b>was built</b>. Siempre participio, no infinitivo.</li>
        <li><s>It is speaking English here.</s> → <b>English is spoken here.</b></li>
        <li><s>The letter was sended.</s> → <b>was sent</b>. Ojo con los irregulares.</li>
        <li><s>I was born on 1998.</s> → <b>I was born in 1998.</b> «Nacer» en inglés es pasiva: <i>be born</i>.</li>
      </ul>`,
    },
  ],
  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "How chocolate is made", text: "Chocolate is made from the [1] of the cacao tree, which is [2] in hot countries near the equator. After the beans are picked, they are left in the sun to [3]. Then they are [4] to factories all over the world. In the factory, the beans are roasted and then [5] into a thick paste. Sugar and milk are [6] to this paste, and the mixture is [7] for hours until it becomes smooth. Finally, it is poured into moulds and left to [8] down." },
    2: { title: "A famous theft", text: "In 1911, the Mona Lisa [9] stolen from the Louvre in Paris. At first nobody noticed it was missing, and the theft was only discovered [10] following day. The painting had been taken [11] a man called Vincenzo Peruggia, who had worked in the museum. For two years, it was [12] seen. Peruggia was finally caught when he tried to sell it to a gallery in Florence. Today, the painting [13] visited by millions of people every year, and it is kept behind bulletproof glass [14] that nobody can damage it. Some historians believe the theft is the reason [15] the painting became so famous. Before 1911, it [16] hardly known outside the art world." },
    3: { title: "A new hospital", text: "The new hospital, which was [17] opened last week, was designed by a team of local [18]. It is [19] with the latest technology. The project was paid for by the regional [20], and its [21] took four years. Patients will no longer have to make long [22] to the city for [23]. The hospital is also expected to create about 500 jobs, which is great news for the area's [24] young people." },
  },
  exercises: [
    { type: 'mcq', q: 'This castle ___ in the 12th century.', opts: ['was built', 'built', 'is building', 'has built'], a: 0, why: 'El castillo no construye: lo construyeron. Pasado → was + participio.' },
    { type: 'mcq', q: 'Spanish ___ in more than 20 countries.', opts: ['is spoken', 'speaks', 'is speaking', 'spoke'], a: 0, why: 'Presente pasivo: is + participio (speak → spoken).' },
    { type: 'mcq', q: 'The match ___ because of the rain.', opts: ['has been cancelled', 'has cancelled', 'is cancelling', 'cancelled'], a: 0, why: 'El partido no cancela nada: lo cancelan. Present perfect pasivo: has been + participio.' },
    { type: 'mcq', q: 'Your order ___ tomorrow morning.', opts: ['will be delivered', 'will deliver', 'is delivering', 'delivers'], a: 0, why: 'Futuro pasivo: will be + participio.' },
    { type: 'mcq', q: 'The road ___ at the moment, so we have to go another way.', opts: ['is being repaired', 'is repairing', 'repairs', 'has repaired'], a: 0, why: 'Ahora mismo (continuo) + pasiva: is being + participio.' },
    { type: 'mcq', q: '¿Cuál es correcta?', opts: ['I was born in 1998.', 'I born in 1998.', 'I am born in 1998.', 'I was borned in 1998.'], a: 0, why: '"Nacer" = be born. En pasado: I was born.' },
    { type: 'gap', q: 'The Mona Lisa was painted ___ Leonardo da Vinci.', a: ['by'], why: 'Quién hace la acción en pasiva: by.' },
    { type: 'gap', q: 'Mobile phones must ___ switched off during the exam.', a: ['be'], why: 'Modal + be + participio.' },
    { type: 'gap', q: 'The winners will be ___ next week. (announce)', a: ['announced'], why: 'Después de "be" va el participio: announced.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal (con su auxiliar).', parts: [['S', 'More than a million trees'], ['V', 'have been planted'], ['X', 'in the region'], ['X', 'since 2010.']], why: 'Present perfect pasivo: "have been planted" es un solo bloque.' },
    { type: 'find', role: 'S', prompt: 'Toca el sujeto.', parts: [['S', 'The new hospital,'], ['R', 'which was designed by a local architect,'], ['V', 'will be opened'], ['X', 'next year.']], why: 'Esqueleto: "The new hospital will be opened". La relativa con comas es información extra.' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['The', 'thief', 'was', 'arrested', 'by', 'the', 'police'], a: 'The thief was arrested by the police', why: 'Pasiva: sujeto (lo que recibe la acción) + was + participio + by + quien la hace.' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["beans", "grains", "nuts", "stones"], a: 0, why: "Cacao beans = granos de cacao." },
    { part: 1, type: 'mcq', opts: ["grown", "raised", "bred", "built"], a: 0, why: "Las plantas «are grown». Raise y breed se usan con animales." },
    { part: 1, type: 'mcq', opts: ["dry", "burn", "heat", "warm"], a: 0, why: "Se dejan al sol para que se sequen: dry." },
    { part: 1, type: 'mcq', opts: ["shipped", "travelled", "driven", "ridden"], a: 0, why: "Ship = enviar (por barco). Travel no tiene pasiva." },
    { part: 1, type: 'mcq', opts: ["ground", "broken", "cut", "torn"], a: 0, why: "Grind, ground = moler." },
    { part: 1, type: 'mcq', opts: ["added", "joined", "put", "mixed"], a: 0, why: "Add something to something = añadir a." },
    { part: 1, type: 'mcq', opts: ["stirred", "shaken", "beaten", "waved"], a: 0, why: "Stir = remover." },
    { part: 1, type: 'mcq', opts: ["cool", "cold", "freeze", "chill"], a: 0, why: "Cool down = enfriarse. Cold no es verbo." },
    { part: 2, type: 'gap', a: ["was"], why: "Pasiva en pasado: was stolen." },
    { part: 2, type: 'gap', a: ["the"], why: "The following day = al día siguiente." },
    { part: 2, type: 'gap', a: ["by"], why: "En la pasiva, quien lo hace va con by." },
    { part: 2, type: 'gap', a: ["not", "never"], why: "Not seen = no se vio." },
    { part: 2, type: 'gap', a: ["is"], why: "Pasiva en presente: is visited." },
    { part: 2, type: 'gap', a: ["so"], why: "So that = para que." },
    { part: 2, type: 'gap', a: ["why", "that"], why: "The reason why = la razón por la que." },
    { part: 2, type: 'gap', a: ["was"], why: "Pasiva en pasado: was known." },
    { part: 3, type: 'gap', stem: "OFFICIAL", a: ["officially"], why: "Adverbio delante del participio: officially opened." },
    { part: 3, type: 'gap', stem: "ARCHITECTURE", a: ["architects"], why: "Personas, plural: architects." },
    { part: 3, type: 'gap', stem: "EQUIP", a: ["equipped"], why: "Pasiva: is equipped with." },
    { part: 3, type: 'gap', stem: "GOVERN", a: ["government"], why: "Sustantivo: government." },
    { part: 3, type: 'gap', stem: "CONSTRUCT", a: ["construction"], why: "Sustantivo: construction." },
    { part: 3, type: 'gap', stem: "JOURNEY", a: ["journeys"], why: "Plural tras «long» sin artículo: journeys." },
    { part: 3, type: 'gap', stem: "TREAT", a: ["treatment"], why: "Sustantivo: treatment (tratamiento)." },
    { part: 3, type: 'gap', stem: "EMPLOY", a: ["unemployed"], why: "Adjetivo negativo: unemployed (en paro)." },
    { part: 4, type: 'gap', s1: "They built this bridge in 1890.", key: "WAS", s2: "This bridge ___ 1890.", a: ["was built in"], why: "Pasiva en pasado: was built." },
    { part: 4, type: 'gap', s1: "Someone is repairing my car at the moment.", key: "BEING", s2: "My car ___ at the moment.", a: ["is being repaired"], why: "Pasiva en presente continuo: is being + participio." },
    { part: 4, type: 'gap', s1: "People say that he is very rich.", key: "SAID", s2: "He ___ very rich.", a: ["is said to be"], why: "He is said to be = se dice que es." },
    { part: 4, type: 'gap', s1: "They will announce the results tomorrow.", key: "BE", s2: "The results ___ tomorrow.", a: ["will be announced"], why: "Pasiva en futuro: will be + participio." },
    { part: 4, type: 'gap', s1: "A mechanic checked my brakes last week.", key: "HAD", s2: "I ___ last week.", a: ["had my brakes checked"], why: "Have something done: un mecánico lo hizo por mí." },
    { part: 4, type: 'gap', s1: "Nobody has told me about the meeting.", key: "BEEN", s2: "I ___ about the meeting.", a: ["have not been told", "havent been told", "ve not been told"], why: "Pasiva en present perfect negativo." },
  ],
  reading: {
    title: 'How a pencil is made',
    level: 'B1+',
    sentences: [
      { parts: [['S', 'Billions of pencils'], ['V', 'are produced'], ['X', 'every year,'], ['C', 'but'], ['S', 'few people'], ['V', 'know'], ['R', 'how they are made.']],
        es: 'Cada año se producen miles de millones de lápices, pero poca gente sabe cómo se fabrican.',
        note: 'Dos pasivas: "are produced" y "are made". Fíjate en que en español usamos "se".',
        vocab: [['billion', 'mil millones'], ['produce', 'producir, fabricar']] },
      { parts: [['X', 'First,'], ['S', 'the wood'], ['V', 'is cut'], ['X', 'into thin blocks'], ['R', 'which are called slats.']],
        es: 'Primero, la madera se corta en bloques finos que se llaman tablillas.',
        note: '"Is cut": cut es irregular y su participio es igual (cut – cut – cut). La relativa "which are called slats" también es pasiva.',
        vocab: [['wood', 'madera'], ['thin', 'fino, delgado'], ['be called', 'llamarse']] },
      { parts: [['X', 'Then'], ['S', 'small grooves'], ['V', 'are made'], ['X', 'in each slat,'], ['C', 'and'], ['S', 'the "lead"'], ['V', 'is placed'], ['X', 'inside them.']],
        es: 'Luego se hacen pequeñas ranuras en cada tablilla y se coloca dentro la "mina".',
        note: 'Dos pasivas unidas por "and". Ningún "by": no importa quién lo hace (máquinas).',
        vocab: [['groove', 'ranura'], ['place', 'colocar'], ['inside', 'dentro']] },
      { parts: [['X', 'Surprisingly,'], ['S', 'this "lead"'], ['V', 'is not made'], ['X', 'of lead at all:'], ['S', 'it'], ['V', 'is'], ['O', 'a mixture of graphite and clay.']],
        es: 'Sorprendentemente, esta "mina" no está hecha de plomo en absoluto: es una mezcla de grafito y arcilla.',
        note: '"Lead" significa plomo; en español la llamamos "mina". "Be made of" = estar hecho de. "Surprisingly" es un comentario del autor (información extra).',
        vocab: [['lead', 'plomo (y la mina del lápiz)'], ['not… at all', 'en absoluto'], ['mixture', 'mezcla'], ['clay', 'arcilla']] },
      { parts: [['S', 'A second slat'], ['V', 'is glued'], ['X', 'on top,'], ['C', 'and'], ['S', 'the "sandwich"'], ['V', 'is cut'], ['X', 'into individual pencils.']],
        es: 'Encima se pega una segunda tablilla y el "sándwich" se corta en lápices individuales.',
        note: 'Las instrucciones de un proceso casi siempre van en pasiva presente.',
        vocab: [['glue', 'pegar (con pegamento)'], ['on top', 'encima']] },
      { parts: [['X', 'Finally,'], ['S', 'they'], ['V', 'are painted,'], ['V', 'sharpened'], ['C', 'and'], ['V', 'packed'], ['X', 'into boxes.']],
        es: 'Por último, se pintan, se les saca punta y se meten en cajas.',
        note: 'Un solo "are" vale para los tres participios: are painted, (are) sharpened and (are) packed.',
        vocab: [['sharpen', 'sacar punta, afilar'], ['pack', 'empaquetar']] },
      { parts: [['S', 'The yellow colour'], ['R', 'that is used on most American pencils'], ['V', 'was chosen'], ['X', 'in the 1890s'], ['X', 'because the best graphite came from China,'], ['R', 'where yellow was linked to royalty.']],
        es: 'El color amarillo que se usa en la mayoría de lápices estadounidenses se eligió en la década de 1890 porque el mejor grafito venía de China, donde el amarillo se asociaba a la realeza.',
        note: 'Frase difícil. Esqueleto: "The yellow colour was chosen". Todo lo demás cuelga: qué color (relativa), cuándo, por qué, y dónde (otra relativa con "where").',
        vocab: [['choose (chose, chosen)', 'elegir'], ['be linked to', 'estar asociado a'], ['royalty', 'la realeza']] },
    ],
    questions: [
      { q: 'What is the "lead" in a pencil made of?', opts: ['Lead.', 'Graphite and clay.', 'Wood and glue.', 'Paint.'], a: 1 },
      { q: 'What happens after the second slat is glued on top?', opts: ['The lead is placed inside.', 'The pencils are painted.', 'The "sandwich" is cut into pencils.', 'Grooves are made.'], a: 2 },
      { q: 'Why are many American pencils yellow?', opts: ['Yellow is the cheapest paint.', 'It was linked to Chinese royalty.', 'Yellow is easy to see.', 'The first pencil was yellow.'], a: 1 },
    ],
  },
};
