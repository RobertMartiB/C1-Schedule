// Unidad 1 · El esqueleto de la frase
// Roles de las piezas en las lecturas: S sujeto · V verbo principal · O lo que completa al verbo
// R oración secundaria (relativa, subordinada) · C conector · X información extra (tiempo, lugar, modo)
UNITS.u01 = {
  theory: [
    {
      h: 'La idea clave',
      html: `<p>Toda frase en inglés, por larga que sea, tiene un <b>esqueleto</b>: <b>sujeto + verbo</b> (y casi siempre algo que completa al verbo). Todo lo demás son piezas que cuelgan de ese esqueleto.</p>
      <p>Cuando una frase larga te lía, el problema casi nunca es que no conozcas las palabras: es que intentas entenderla <b>de izquierda a derecha, palabra por palabra</b>. En inglés funciona mejor <b>buscar primero el esqueleto</b> y después ir colgando el resto.</p>
      <div class="ex"><span class="s">The man</span> <span class="v">is</span> <span class="o">a doctor</span>.<br>
      <span class="s">The man</span> <span class="r">who lives next door to my parents</span> <span class="v">is</span> <span class="o">a doctor</span>.</div>
      <p>Las dos frases dicen lo mismo en lo esencial: <i>el hombre es médico</i>. La segunda solo añade <i>qué hombre</i>.</p>`,
    },
    {
      h: 'El orden en inglés es casi fijo',
      html: `<p>En español podemos mover las piezas («Llegó ayer mi hermano», «Mi hermano llegó ayer»). En inglés el orden normal es siempre:</p>
      <div class="formula">Sujeto → Verbo → Complemento → (lugar) → (tiempo)</div>
      <div class="ex"><span class="s">My brother</span> <span class="v">arrived</span> <span class="x">yesterday</span>. ✓<br><s>Arrived yesterday my brother.</s> ✗</div>
      <p>Y el sujeto <b>siempre aparece</b>, aunque en español lo quitemos:</p>
      <div class="ex"><s>Is raining.</s> ✗ → <span class="s">It</span> <span class="v">is raining</span>. ✓<br><s>Is important to rest.</s> ✗ → <span class="s">It</span> <span class="v">is</span> <span class="o">important</span> <span class="x">to rest</span>. ✓</div>
      <p>Esto es una ventaja al leer: <b>lo que va justo delante del verbo principal es (casi siempre) el sujeto</b>.</p>`,
    },
    {
      h: 'Cómo reconocer el verbo principal',
      html: `<p>El verbo principal es el que está <b>conjugado</b> (lleva tiempo: presente, pasado, futuro…). Los auxiliares van con él y forman un solo bloque:</p>
      <div class="ex"><span class="v">works</span> · <span class="v">has been working</span> · <span class="v">will work</span> · <span class="v">can work</span> · <span class="v">was built</span> · <span class="v">didn't know</span></div>
      <p><b>No</b> son el verbo principal:</p>
      <ul>
        <li>Los <b>infinitivos</b> con <i>to</i>: <i>She decided <u>to leave</u></i> → el principal es <i>decided</i>.</li>
        <li>Las formas en <b>-ing</b> o <b>-ed</b> sin auxiliar delante: <i>The woman <u>sitting</u> there <b>is</b> my aunt</i> → el principal es <i>is</i>.</li>
        <li>Los verbos que van <b>después de who, which, that, because, when, if, although…</b>: pertenecen a una oración secundaria.</li>
      </ul>`,
    },
    {
      h: 'Las piezas que cuelgan del esqueleto',
      html: `<p>Casi todo lo que hace larga una frase es una de estas cinco piezas. Aprende a reconocerlas por la palabra con la que empiezan:</p>
      <table class="t">
        <tr><th>Pieza</th><th>Empieza por…</th><th>Ejemplo</th></tr>
        <tr><td><span class="r">Relativa</span></td><td>who, which, that, whose, where</td><td>the book <u>that I bought</u></td></tr>
        <tr><td><span class="r">Subordinada</span></td><td>because, when, if, although, while, since, after</td><td><u>Although it was late</u>, we went out.</td></tr>
        <tr><td><span class="x">Preposición + nombre</span></td><td>in, on, at, with, for, of, during…</td><td><u>During the summer</u>, prices rise.</td></tr>
        <tr><td><span class="x">Participio</span></td><td>-ing, -ed (sin auxiliar)</td><td>the money <u>spent on education</u></td></tr>
        <tr><td><span class="c">Conector</span></td><td>however, therefore, moreover, and, but</td><td><u>However</u>, nobody noticed.</td></tr>
      </table>
      <p>Truco: <b>tapa mentalmente esas piezas</b> y lo que queda es el esqueleto.</p>`,
    },
    {
      h: 'El método de los 4 pasos',
      html: `<ol class="steps">
        <li><b>Busca los verbos conjugados</b> de la frase.</li>
        <li><b>Descarta</b> los que van detrás de who/which/that/because/when/if/although…</li>
        <li>El que queda es el <b>verbo principal</b>. Lo que va delante es el <b>sujeto</b> (quita las piezas que cuelgan de él).</li>
        <li>Lee el esqueleto en voz alta y <b>después</b> añade las piezas una a una.</li>
      </ol>
      <div class="ex"><span class="x">Last year</span>, <span class="s">the company</span> <span class="r">that my sister works for</span> <span class="v">opened</span> <span class="o">three new offices</span> <span class="x">in Asia</span>.</div>
      <p>Verbos conjugados: <i>works</i> y <i>opened</i>. <i>Works</i> va detrás de <i>that</i> → secundaria. Esqueleto: <b>the company opened three new offices</b>. Luego: ¿qué compañía? la de mi hermana. ¿Cuándo? el año pasado. ¿Dónde? en Asia.</p>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>Is very interesting this book.</s> → <b>This book is very interesting.</b> El sujeto va delante.</li>
        <li><s>Yesterday went I to the cinema.</s> → <b>Yesterday I went to the cinema.</b> Aunque empieces por el tiempo, después va sujeto + verbo.</li>
        <li><s>Exist many problems.</s> → <b>There are many problems.</b> Para «hay/existen» se usa <i>there is / there are</i>.</li>
        <li>Al leer: tomar el primer verbo que ves como principal. En <i>People who <u>exercise</u> regularly <b>sleep</b> better</i>, el principal es <b>sleep</b>.</li>
      </ul>`,
    },
  ],

  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "Never too late to learn", text: "When Marta turned forty, she [1] a decision that surprised everyone: she would finally learn English properly. She had studied it at school, but she could only [2] the time and order a coffee. At first she found it hard to [3] time for classes, because she worked long hours. So she [4] her alarm half an hour earlier and studied before breakfast. After a few months, she was able to [5] part in short conversations with tourists in her shop. Her biggest [6] was understanding native speakers, who seemed to speak incredibly fast. Her teacher gave her a useful piece of [7]: listen for the verb first, and the rest of the sentence will [8] sense." },
    2: { title: "Why word order matters", text: "In Spanish, you can often leave out the subject, but in English [9] is almost always necessary. You cannot simply say \"is raining\"; you have to say \"[10] is raining\". In the same way, to say that something exists, English uses \"there\": \"[11] are three reasons for this.\" The basic order is subject, verb and object, and it rarely changes. \"The dog bit the man\" means something very different [12] \"The man bit the dog\". Adverbs like \"often\" usually go before the main verb, but after the verb \"to [13]\": \"She is often late.\" Questions need an auxiliary verb: \"Where [14] you live?\" Learners who understand this pattern find long sentences much easier, [15] they know where to look for the verb. Once you can find the skeleton of a sentence, everything else is just extra information [16] has been added around it." },
    3: { title: "A good language teacher", text: "The most [17] learners are not always the most intelligent ones. Research shows that [18] matters far more than talent. A good teacher gives clear [19] and never makes students feel [20] when they make mistakes. In fact, mistakes are a natural part of [21]. Students also need regular [22] from their teachers. It is also [23] to read every day, even [24] texts written for learners." },
  },
  exercises: [
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal (todas sus palabras).', parts: [['S', 'My neighbour'], ['V', 'has lived'], ['X', 'in this building'], ['X', 'for twenty years.']], why: '"Has lived" es un solo bloque: auxiliar + participio.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal.', parts: [['S', 'The students'], ['R', 'who passed the exam'], ['V', 'received'], ['O', 'a certificate.']], why: '"Passed" va detrás de "who": es de la relativa. El esqueleto es "The students received a certificate".' },
    { type: 'find', role: 'S', prompt: 'Toca el sujeto del verbo principal (solo el núcleo, sin la relativa).', parts: [['S', 'The film'], ['R', 'that we saw last night'], ['V', 'was'], ['O', 'really boring.']], why: 'El esqueleto es "The film was boring". "That we saw last night" solo dice qué película.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal.', parts: [['R', 'Although she was tired,'], ['S', 'Laura'], ['V', 'finished'], ['O', 'the report'], ['X', 'before midnight.']], why: '"Was" va detrás de "although": es la subordinada. El principal es "finished".' },
    { type: 'find', role: 'S', prompt: 'Toca el sujeto.', parts: [['X', 'In most European countries,'], ['S', 'children'], ['V', 'start'], ['O', 'school'], ['X', 'at the age of six.']], why: 'La frase empieza por un complemento de lugar, pero el sujeto es lo que va justo delante del verbo: "children".' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal.', parts: [['S', 'People'], ['R', 'who exercise regularly'], ['V', 'tend'], ['O', 'to sleep better.']], why: '"Exercise" pertenece a la relativa. El principal es "tend" ("to sleep" es un infinitivo).' },
    { type: 'mcq', q: '¿Cuál es el esqueleto de esta frase?<br><i>The decision to close the old factory, which had employed hundreds of local people, was announced on Monday.</i>', opts: ['The decision was announced', 'The old factory had employed people', 'Hundreds of people was announced', 'The factory was announced on Monday'], a: 0, why: 'Verbos conjugados: "had employed" (detrás de "which", secundaria) y "was announced". Sujeto: "the decision" (lo que va antes, quitando las piezas).' },
    { type: 'mcq', q: '¿Cuál es el verbo principal?<br><i>Anyone wishing to apply for the course should send an email before Friday.</i>', opts: ['should send', 'wishing', 'to apply', 'apply'], a: 0, why: '"Wishing" es un participio sin auxiliar y "to apply" un infinitivo. El verbo conjugado es "should send".' },
    { type: 'mcq', q: 'Elige la frase correcta.', opts: ['It is important to drink water.', 'Is important to drink water.', 'Important is to drink water.', 'Is important drink water.'], a: 0, why: 'En inglés el sujeto siempre aparece. Cuando no hay uno real se usa "it".' },
    { type: 'mcq', q: 'Elige la frase correcta.', opts: ['There are many problems in this city.', 'Exist many problems in this city.', 'Many problems exist in this city they.', 'Has many problems this city.'], a: 0, why: '"Hay/existen" = there is / there are.' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['Yesterday', 'my', 'parents', 'bought', 'a', 'new', 'car'], a: 'Yesterday my parents bought a new car', why: 'Tiempo al principio (opcional), luego sujeto + verbo + complemento.' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['The', 'woman', 'who', 'called', 'you', 'is', 'my', 'boss'], a: 'The woman who called you is my boss', why: 'La relativa "who called you" va pegada a "the woman". El verbo principal es "is".' },
    { type: 'gap', q: '___ is raining again, so take an umbrella.', a: ['it'], why: 'El tiempo atmosférico lleva "it" como sujeto.' },
    { type: 'gap', q: '___ are three restaurants near my house.', a: ['there'], why: '"Hay" + plural = there are.' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["made", "did", "took", "got"], a: 0, why: "Colocación fija: make a decision (tomar una decisión)." },
    { part: 1, type: 'mcq', opts: ["tell", "say", "speak", "talk"], a: 0, why: "Tell the time = decir la hora. Es una expresión fija." },
    { part: 1, type: 'mcq', opts: ["make", "do", "put", "give"], a: 0, why: "Make time for something = sacar tiempo para algo." },
    { part: 1, type: 'mcq', opts: ["set", "put", "fixed", "placed"], a: 0, why: "Set an alarm = poner el despertador." },
    { part: 1, type: 'mcq', opts: ["take", "have", "make", "join"], a: 0, why: "Take part in = participar en. Join no lleva «part»." },
    { part: 1, type: 'mcq', opts: ["challenge", "attempt", "trial", "effort"], a: 0, why: "Her biggest challenge = su mayor reto. Las otras no significan «dificultad»." },
    { part: 1, type: 'mcq', opts: ["advice", "tip", "suggestion", "idea"], a: 0, why: "Advice es incontable y por eso va con «a piece of». Tip, suggestion e idea son contables: a tip, a suggestion." },
    { part: 1, type: 'mcq', opts: ["make", "do", "have", "give"], a: 0, why: "Make sense = tener sentido." },
    { part: 2, type: 'gap', a: ["it"], why: "It se refiere al sujeto: en inglés casi siempre hace falta." },
    { part: 2, type: 'gap', a: ["it"], why: "Sujeto vacío obligatorio con el tiempo: it is raining." },
    { part: 2, type: 'gap', a: ["there"], why: "There are = hay. Sirve para decir que algo existe." },
    { part: 2, type: 'gap', a: ["from", "to", "than"], why: "Different from (también to; than en inglés americano)." },
    { part: 2, type: 'gap', a: ["be"], why: "Con el verbo to be, el adverbio va detrás: she is often late." },
    { part: 2, type: 'gap', a: ["do"], why: "Las preguntas en presente necesitan el auxiliar do: where do you live?" },
    { part: 2, type: 'gap', a: ["because", "as", "since"], why: "Hace falta un conector de causa seguido de una frase completa." },
    { part: 2, type: 'gap', a: ["that", "which"], why: "Relativo que se refiere a «information»: that o which." },
    { part: 3, type: 'gap', stem: "SUCCESS", a: ["successful"], why: "Adjetivo delante de «learners»: successful." },
    { part: 3, type: 'gap', stem: "MOTIVATE", a: ["motivation"], why: "Hace falta un sustantivo como sujeto: motivation." },
    { part: 3, type: 'gap', stem: "EXPLAIN", a: ["explanations"], why: "Sustantivo en plural, porque no hay artículo delante: clear explanations." },
    { part: 3, type: 'gap', stem: "COMFORT", a: ["uncomfortable"], why: "Feel + adjetivo, y negativo por el sentido: uncomfortable." },
    { part: 3, type: 'gap', stem: "LEARN", a: ["learning"], why: "Después de la preposición «of» va un sustantivo en -ing: learning." },
    { part: 3, type: 'gap', stem: "ENCOURAGE", a: ["encouragement"], why: "Sustantivo con -ment: encouragement." },
    { part: 3, type: 'gap', stem: "USE", a: ["useful"], why: "It is + adjetivo: useful." },
    { part: 3, type: 'gap', stem: "SIMPLE", a: ["simplified"], why: "Participio usado como adjetivo: simplified texts (textos adaptados)." },
    { part: 4, type: 'gap', s1: "It's not necessary for you to bring anything.", key: "HAVE", s2: "You ___ anything.", a: ["dont have to bring", "do not have to bring"], why: "Don't have to = no hace falta." },
    { part: 4, type: 'gap', s1: "There were a lot of people at the concert.", key: "CROWDED", s2: "The concert ___ people.", a: ["was crowded with", "was very crowded with", "was really crowded with"], why: "Be crowded with = estar lleno de gente." },
    { part: 4, type: 'gap', s1: "My brother is taller than me.", key: "AS", s2: "I'm ___ my brother.", a: ["not as tall as", "not so tall as"], why: "Not as + adjetivo + as = no tan… como." },
    { part: 4, type: 'gap', s1: "What time does the film start?", key: "KNOW", s2: "Do you ___ starts?", a: ["know what time the film", "know when the film"], why: "Pregunta indirecta: sujeto + verbo, sin «does»." },
    { part: 4, type: 'gap', s1: "I find grammar really interesting.", key: "INTERESTED", s2: "I ___ grammar.", a: ["am really interested in", "am very interested in", "am interested in"], why: "Be interested in = interesarse por." },
    { part: 4, type: 'gap', s1: "Where is the station? Can you tell me?", key: "WHERE", s2: "Can you tell me ___ ?", a: ["where the station is"], why: "En la pregunta indirecta el verbo va al final: where the station is." },
  ],

  reading: {
    title: 'Why we forget what we read',
    level: 'B1+',
    sentences: [
      { parts: [['S', 'Most of us'], ['V', 'have had'], ['O', 'the same experience:'], ['S', 'we'], ['V', 'finish'], ['O', 'a book,'], ['C', 'and'], ['X', 'a few weeks later'], ['S', 'we'], ['V', 'can remember'], ['O', 'almost nothing about it.']],
        es: 'Casi todos hemos vivido lo mismo: terminamos un libro y, unas semanas después, apenas recordamos nada de él.',
        note: 'Son tres frases unidas por los dos puntos y por "and". Cada una tiene su propio esqueleto: "Most of us have had…", "we finish…", "we can remember…". Aquí "Most of us" funciona como sujeto.',
        vocab: [['experience', 'experiencia'], ['almost nothing', 'casi nada'], ['a few weeks later', 'unas semanas después'], ['most of us', 'la mayoría de nosotros'], ['remember', 'recordar']] },
      { parts: [['S', 'This'], ['V', 'is'], ['O', 'not a sign'], ['R', 'that our memory is getting worse.']],
        es: 'Esto no es señal de que nuestra memoria esté empeorando.',
        note: 'Esqueleto corto: "This is not a sign". "That our memory is getting worse" explica de qué es señal.',
        vocab: [['a sign', 'una señal'], ['get worse', 'empeorar'], ['memory', 'memoria; recuerdo']] },
      { parts: [['C', 'In fact,'], ['S', 'researchers'], ['R', 'who study memory'], ['V', 'say'], ['R', 'that forgetting is completely normal.']],
        es: 'De hecho, los investigadores que estudian la memoria dicen que olvidar es completamente normal.',
        note: '"Study" va detrás de "who": es la relativa. El verbo principal es "say". Y lo que dicen va en otra secundaria con "that".',
        vocab: [['in fact', 'de hecho'], ['researcher', 'investigador/a'], ['forgetting', 'olvidar (el hecho de olvidar)'], ['study', 'estudiar, investigar'], ['completely', 'completamente']] },
      { parts: [['S', 'The brain'], ['V', 'keeps'], ['O', 'information'], ['R', 'that it uses often'], ['C', 'and'], ['V', 'throws away'], ['O', 'the rest.']],
        es: 'El cerebro guarda la información que usa a menudo y tira el resto.',
        note: 'Un sujeto con dos verbos: "The brain keeps… and throws away…". "That it uses often" dice qué información.',
        vocab: [['keep', 'guardar, conservar'], ['throw away', 'tirar, desechar'], ['the rest', 'el resto'], ['brain', 'cerebro'], ['often', 'a menudo']] },
      { parts: [['R', 'When we read a novel in one weekend,'], ['S', 'we'], ['V', 'give'], ['O', 'the brain'], ['O', 'very few chances'], ['X', 'to return to the story.']],
        es: 'Cuando leemos una novela en un fin de semana, le damos al cerebro muy pocas ocasiones de volver a la historia.',
        note: 'Empieza con una subordinada ("When we read…"). Tras la coma llega el esqueleto: "we give the brain very few chances".',
        vocab: [['novel', 'novela'], ['chance', 'oportunidad, ocasión'], ['return to', 'volver a'], ['very few', 'muy pocos'], ['in one weekend', 'en un solo fin de semana']] },
      { parts: [['S', 'People'], ['R', 'who read a chapter a day'], ['C', 'and'], ['R', 'think about it before the next one'], ['V', 'remember'], ['O', 'much more.']],
        es: 'Quienes leen un capítulo al día y piensan en él antes del siguiente recuerdan mucho más.',
        note: 'Ojo: hay tres verbos ("read", "think", "remember"). Los dos primeros van con "who" (la relativa es doble, unida por "and"). El principal es "remember": esqueleto "People remember much more".',
        vocab: [['chapter', 'capítulo'], ['the next one', 'el siguiente'], ['a day', 'al día'], ['think about', 'pensar en'], ['much more', 'mucho más']] },
      { parts: [['S', 'Writing a short summary or explaining the plot to a friend'], ['V', 'is'], ['O', 'even more effective.']],
        es: 'Escribir un breve resumen o explicarle la trama a un amigo es aún más eficaz.',
        note: 'Aquí el sujeto es largo y empieza por -ing: "Writing a short summary or explaining the plot to a friend". En inglés las acciones pueden ser sujeto con -ing. Verbo: "is".',
        vocab: [['summary', 'resumen'], ['plot', 'trama, argumento'], ['effective', 'eficaz'], ['explain', 'explicar'], ['even more', 'aún más']] },
      { parts: [['C', 'So'], ['R', 'if you want to remember a book,'], ['S', 'the answer'], ['V', 'is'], ['O', 'simple:'], ['V', 'read'], ['O', 'it'], ['X', 'more slowly'], ['C', 'and'], ['V', 'talk'], ['X', 'about it.']],
        es: 'Así que, si quieres recordar un libro, la respuesta es sencilla: léelo más despacio y habla de él.',
        note: 'Esqueleto: "the answer is simple". Después de los dos puntos vienen dos imperativos ("read", "talk"), que no tienen sujeto porque son órdenes.',
        vocab: [['slowly', 'despacio'], ['talk about', 'hablar de'], ['answer', 'respuesta'], ['simple', 'sencillo']] },
    ],
    questions: [
      { q: 'According to the text, forgetting what we read…', opts: ['is a sign of a bad memory.', 'is completely normal.', 'only happens with long books.', 'happens more to older people.'], a: 1 },
      { q: 'Why do we forget a novel we read in one weekend?', opts: ['Because novels are too long.', 'Because we read too fast to understand.', 'Because the brain has few chances to return to the story.', 'Because we are tired at weekends.'], a: 2 },
      { q: 'What does the writer suggest?', opts: ['Reading shorter books.', 'Reading more books.', 'Reading slowly and talking about the book.', 'Reading the same book twice.'], a: 2 },
    ],
  },
};
