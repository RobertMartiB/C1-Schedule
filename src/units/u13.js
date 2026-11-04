// Unidad 13 · Participle clauses
UNITS.u13 = {
  theory: [
    {
      h: 'La idea: resumir una oración en pocas palabras',
      html: `<p>Una <b>participle clause</b> es una oración secundaria «comprimida»: se quita el sujeto y el conector, y el verbo se queda en <b>-ing</b>, en <b>participio (-ed)</b> o en <b>having + participio</b>. Es muy típica de los textos escritos, las noticias y el examen C1.</p>
      <div class="ex"><span class="r">Because she felt tired</span>, she went to bed early.<br>→ <span class="r">Feeling tired</span>, <span class="s">she</span> <span class="v">went</span> to bed early.</div>
      <p>Las dos frases dicen lo mismo. La segunda es más corta y suena más escrita.</p>`,
    },
    {
      h: 'Regla de oro: el mismo sujeto',
      html: `<p>La participle clause <b>no tiene sujeto propio</b>: se entiende que es <b>el mismo que el de la oración principal</b>.</p>
      <div class="ex"><span class="r">Walking home</span>, <span class="s">I</span> <span class="v">saw</span> an accident. ✓ (yo caminaba y yo vi)<br>
      <s>Walking home, an accident happened.</s> ✗ (¿el accidente caminaba a casa?)</div>
      <p>Este error se llama <i>dangling participle</i> y en el examen penaliza. Si los sujetos son distintos, usa una oración completa: <i>While I was walking home, an accident happened.</i></p>`,
    },
    {
      h: 'Con -ing: sentido activo',
      html: `<p>La forma en <b>-ing</b> significa que el sujeto <b>hace</b> la acción. Según el contexto equivale a:</p>
      <table class="t">
        <tr><th>Significado</th><th>Oración completa</th><th>Participle clause</th></tr>
        <tr><td>Causa</td><td><i>Because he didn't know the way, he got lost.</i></td><td><b>Not knowing</b> the way, he got lost.</td></tr>
        <tr><td>Al mismo tiempo</td><td><i>While she was waiting, she read a book.</i></td><td><b>Waiting</b> for the bus, she read a book.</td></tr>
        <tr><td>Relativa</td><td><i>The man who is sitting there…</i></td><td>The man <b>sitting</b> there…</td></tr>
        <tr><td>Resultado</td><td><i>…, and this caused delays.</i></td><td>It snowed heavily, <b>causing</b> delays.</td></tr>
      </table>
      <p>La negación va delante: <b>not</b> + -ing (<i>Not wanting to wake him, …</i>).</p>`,
    },
    {
      h: 'Con participio (-ed): sentido pasivo',
      html: `<p>El <b>participio</b> significa que el sujeto <b>recibe</b> la acción (es pasiva comprimida):</p>
      <div class="ex"><span class="r">Built in 1890</span>, <span class="s">the bridge</span> <span class="v">is</span> still in use. = <i>The bridge, which was built in 1890, …</i><br>
      <span class="r">Shocked by the news</span>, <span class="s">she</span> <span class="v">sat</span> down. = <i>Because she was shocked by the news, …</i></div>
      <p>Truco: si puedes poner delante «que fue / que es / al ser», es participio. Si el sujeto hace la acción, -ing.</p>
      <div class="ex">The film <b>shown</b> last night (que fue emitida) ≠ the documentary <b>showing</b> the effects (que muestra)</div>`,
    },
    {
      h: 'Con having + participio: algo anterior',
      html: `<p><b>Having + participio</b> deja claro que la primera acción terminó <b>antes</b> que la segunda:</p>
      <div class="ex"><span class="r">Having finished the report</span>, <span class="s">she</span> <span class="v">went</span> home. = <i>After she had finished…</i><br>
      <span class="r">Having been warned</span>, <span class="s">they</span> <span class="v">took</span> an umbrella. = <i>Because they had been warned…</i> (pasiva)</div>`,
    },
    {
      h: 'Con conectores: after, before, while, when, since',
      html: `<p>Algunos conectores pueden ir seguidos directamente de la participle clause:</p>
      <div class="ex"><b>After leaving</b> school, he travelled for a year.<br>
      <b>Before signing</b> the contract, read it carefully.<br>
      <b>Since moving</b> to London, she has made many friends.<br>
      <b>When asked</b> about it, the minister refused to comment. (pasiva)</div>`,
    },
    {
      h: 'Cómo leerlas sin perderte',
      html: `<p>En los textos suelen ir <b>al principio de la frase y seguidas de una coma</b>. El esqueleto empieza después de la coma:</p>
      <div class="ex"><span class="r">Encouraged by the results of the first trial</span>, <span class="s">the researchers</span> <span class="v">decided</span> <span class="o">to repeat the experiment</span>.</div>
      <p>Tapa la parte de antes de la coma y lee: <i>the researchers decided to repeat the experiment</i>. Luego vuelve y pregúntate: ¿por qué? Porque los resultados les animaron.</p>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>Arriving at the hotel, the room was ready.</s> → <b>Arriving at the hotel, we found the room ready.</b> El sujeto tiene que ser el mismo.</li>
        <li><s>Built the house in 1990, …</s> → <b>Built in 1990, the house…</b> El participio va sin objeto: la casa fue construida.</li>
        <li><s>Interesting by the offer, she called.</s> → <b>Interested in the offer, she called.</b> -ed para lo que siente la persona.</li>
        <li><s>Having finish the exam, …</s> → <b>Having finished</b>: siempre participio después de having.</li>
      </ul>`,
    },
  ],

  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "A change of direction", text: "Having spent ten years working night shifts at a hospital, Maria finally decided to [1] a change. Exhausted by the irregular hours, she [2] for a position at a local school. Although the salary was lower, she felt it was [3] the sacrifice. Looking back, she says the decision [4] her life in ways she hadn't expected. She now has time to [5] up hobbies she had abandoned, and her health has [6] improved. Encouraged by her example, two of her former colleagues are [7] doing the same. 'It's never too late to [8] a fresh start,' she says." },
    2: { title: "The view from the tower", text: "[9] from the top of the old tower, the city looks surprisingly calm. Built [10] the end of the nineteenth century, the tower was originally designed [11] a temporary structure. [12] been saved from demolition several times, it is now one of the city's most popular attractions. Visitors arriving early can enjoy the view without [13] to queue. Those [14] prefer to avoid the stairs can take the lift, [15] was installed in 1960. Having reached the top, most people stay there [16] at least half an hour." },
    3: { title: "A new career", text: "Working [17] at a local shelter, Ana discovered a sense of [18] she had never felt in her office job. [19] by the gratitude of the families she helped, she began to [20] her career. The [21] to leave a well-paid job was not easy, and some friends questioned her [22]. However, having completed a course in social work, she now works [23] with homeless families and describes the change as completely [24]." },
  },

  exercises: [
    { type: 'mcq', q: '___ tired, she went to bed early.', opts: ['Feeling', 'Felt', 'Having feel', 'To feel'], a: 0, why: 'Causa con sentido activo: ella se sentía cansada → Feeling.' },
    { type: 'mcq', q: '___ in 1890, the bridge is still in use.', opts: ['Built', 'Building', 'Having built', 'To build'], a: 0, why: 'El puente fue construido (pasiva) → participio: Built.' },
    { type: 'mcq', q: '___ the report, she went home.', opts: ['Having finished', 'Finished', 'Having finish', 'Finish'], a: 0, why: 'Acción anterior y terminada: Having + participio.' },
    { type: 'mcq', q: 'The woman ___ next to the window is my teacher.', opts: ['sitting', 'sat', 'having sat', 'to sit'], a: 0, why: 'Relativa reducida activa: who is sitting → sitting.' },
    { type: 'mcq', q: '¿Cuál es correcta?', opts: ['Walking home, I saw an accident.', 'Walking home, an accident happened.', 'Walked home, I saw an accident.', 'Walking home, it was raining.'], a: 0, why: 'La participle clause comparte sujeto con la principal: yo caminaba, yo vi.' },
    { type: 'mcq', q: '___ the way, he got lost.', opts: ['Not knowing', 'Knowing not', "Don't knowing", 'No knowing'], a: 0, why: 'La negación va delante: Not + -ing.' },
    { type: 'mcq', q: '___ about the plan, the minister refused to comment.', opts: ['When asked', 'When asking', 'When having ask', 'When to ask'], a: 0, why: 'Al ministro le preguntaron (pasiva): When asked.' },
    { type: 'gap', q: 'After ___ (leave) school, he travelled around Asia.', a: ['leaving'], why: 'After + -ing.' },
    { type: 'gap', q: '___ (shock) by the news, she sat down in silence.', a: ['shocked'], why: 'A ella la impactó la noticia: participio con sentido pasivo.' },
    { type: 'gap', q: 'It snowed all night, ___ (cause) long delays.', a: ['causing'], why: 'Resultado de la acción anterior: -ing.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal.', parts: [['R', 'Encouraged by the first results,'], ['S', 'the researchers'], ['V', 'repeated'], ['O', 'the experiment.']], why: '"Encouraged" es un participio sin auxiliar: no es el verbo principal. Esqueleto: the researchers repeated the experiment.' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['Having', 'lost', 'his', 'keys', 'he', 'called', 'a', 'locksmith'], a: 'Having lost his keys he called a locksmith', why: 'Having + participio (acción anterior) y después el esqueleto: he called a locksmith.' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["make", "do", "take", "give"], a: 0, why: "Make a change = hacer un cambio." },
    { part: 1, type: 'mcq', opts: ["applied", "requested", "asked", "demanded"], a: 0, why: "Apply for a position = solicitar un puesto." },
    { part: 1, type: 'mcq', opts: ["worth", "value", "deserving", "merit"], a: 0, why: "Be worth the sacrifice = merecer la pena." },
    { part: 1, type: 'mcq', opts: ["transformed", "converted", "turned", "switched"], a: 0, why: "Transform somebody's life = transformar la vida. Convert y turn necesitan into." },
    { part: 1, type: 'mcq', opts: ["take", "get", "bring", "set"], a: 0, why: "Take up a hobby = empezar una afición." },
    { part: 1, type: 'mcq', opts: ["noticeably", "hardly", "barely", "scarcely"], a: 0, why: "Noticeably = de forma notable. Las otras tres significan «apenas» y cambian el sentido." },
    { part: 1, type: 'mcq', opts: ["considering", "thinking", "planning", "wondering"], a: 0, why: "Consider + -ing. Thinking necesitaría of; planning, to." },
    { part: 1, type: 'mcq', opts: ["make", "do", "give", "put"], a: 0, why: "Make a fresh start = empezar de cero." },
    { part: 2, type: 'gap', a: ["seen", "viewed"], why: "La ciudad es vista desde la torre: participio con sentido pasivo." },
    { part: 2, type: 'gap', a: ["at", "towards", "near", "around"], why: "At the end of = a finales de." },
    { part: 2, type: 'gap', a: ["as"], why: "Designed as = diseñado como." },
    { part: 2, type: 'gap', a: ["having"], why: "Having been saved: acción anterior en pasiva." },
    { part: 2, type: 'gap', a: ["having"], why: "Without + -ing: without having to queue." },
    { part: 2, type: 'gap', a: ["who", "that"], why: "Relativo para personas: those who prefer." },
    { part: 2, type: 'gap', a: ["which"], why: "Relativa explicativa con coma: which (no that)." },
    { part: 2, type: 'gap', a: ["for"], why: "Duración: for at least half an hour." },
    { part: 3, type: 'gap', stem: "VOLUNTARY", a: ["voluntarily"], why: "Adverbio que acompaña a working: voluntarily." },
    { part: 3, type: 'gap', stem: "FULFIL", a: ["fulfilment", "fulfillment"], why: "Sustantivo: a sense of fulfilment (realización)." },
    { part: 3, type: 'gap', stem: "MOTIVATE", a: ["motivated"], why: "Participle clause pasiva: a ella la motivaba la gratitud." },
    { part: 3, type: 'gap', stem: "CONSIDER", a: ["reconsider"], why: "Verbo con prefijo re-: replantearse." },
    { part: 3, type: 'gap', stem: "DECIDE", a: ["decision"], why: "Sustantivo: the decision to leave." },
    { part: 3, type: 'gap', stem: "JUDGE", a: ["judgement", "judgment"], why: "Sustantivo: question somebody's judgement (criterio)." },
    { part: 3, type: 'gap', stem: "PROFESSION", a: ["professionally"], why: "Adverbio: work professionally." },
    { part: 3, type: 'gap', stem: "WORTH", a: ["worthwhile"], why: "Adjetivo: worthwhile (que merece la pena)." },
    { part: 4, type: 'gap', s1: "After she had finished her homework, she went out.", key: "HAVING", s2: "___, she went out.", a: ["having finished her homework", "having done her homework"], why: "Having + participio para la acción anterior." },
    { part: 4, type: 'gap', s1: "Because he didn't feel well, Tom stayed at home.", key: "NOT", s2: "___, Tom stayed at home.", a: ["not feeling well", "not feeling very well"], why: "Causa negativa: Not + -ing." },
    { part: 4, type: 'gap', s1: "The house, which was built in 1920, needs repairs.", key: "BUILT", s2: "The house, ___, needs repairs.", a: ["built in 1920"], why: "Relativa pasiva reducida: which was built → built." },
    { part: 4, type: 'gap', s1: "The man who is standing by the door is my uncle.", key: "STANDING", s2: "The man ___ is my uncle.", a: ["standing by the door", "standing next to the door"], why: "Relativa activa reducida: who is standing → standing." },
    { part: 4, type: 'gap', s1: "As we had already seen the film, we decided to stay at home.", key: "SEEN", s2: "___ the film, we decided to stay at home.", a: ["having already seen", "having seen"], why: "Causa anterior: Having (already) seen." },
    { part: 4, type: 'gap', s1: "She was told the news and immediately called her mother.", key: "TOLD", s2: "___ the news, she immediately called her mother.", a: ["having been told", "on being told", "after being told"], why: "Acción anterior en pasiva: Having been told." },
  ],

  reading: {
    title: 'The last lighthouse keeper',
    level: 'B2',
    sentences: [
      { parts: [['R', 'Built on a rock two miles from the coast,'], ['S', 'the lighthouse'], ['V', 'has guided'], ['O', 'ships'], ['X', 'for more than 150 years.']],
        es: 'Construido sobre una roca a dos millas de la costa, el faro lleva más de 150 años guiando barcos.',
        note: '"Built…" es una participle clause pasiva (el faro fue construido). Tápala: el esqueleto es "the lighthouse has guided ships".',
        vocab: [['lighthouse', 'faro'], ['rock', 'roca'], ['coast', 'costa'], ['guide', 'guiar']] },
      { parts: [['S', 'Its last keeper,'], ['R', 'a man named Peter Lane,'], ['V', 'lived'], ['X', 'there alone'], ['X', 'for almost twenty years.']],
        es: 'Su último farero, un hombre llamado Peter Lane, vivió allí solo casi veinte años.',
        note: '"Named Peter Lane" es otro participio: un hombre que se llamaba (= who was named) Peter Lane.',
        vocab: [['keeper', 'guarda; aquí, farero'], ['named', 'llamado'], ['alone', 'solo']] },
      { parts: [['R', 'Having trained as an engineer,'], ['S', 'he'], ['V', 'repaired'], ['O', 'everything himself,'], ['X', 'from the lamp to the radio.']],
        es: 'Como se había formado como ingeniero, lo reparaba todo él mismo, desde la lámpara hasta la radio.',
        note: 'Having + participio: primero se formó como ingeniero, después reparaba las cosas.',
        vocab: [['train as', 'formarse como'], ['repair', 'reparar'], ['himself', 'él mismo'], ['lamp', 'lámpara']] },
      { parts: [['R', 'Supplied by boat once a month,'], ['S', 'he'], ['V', 'learned'], ['O', 'to plan his meals very carefully.']],
        es: 'Como le llevaban provisiones en barco una vez al mes, aprendió a planificar sus comidas con mucho cuidado.',
        note: '"Supplied by boat": a él le abastecían (pasiva). El verbo principal es learned.',
        vocab: [['supply', 'abastecer, suministrar'], ['once a month', 'una vez al mes'], ['meal', 'comida'], ['carefully', 'con cuidado']] },
      { parts: [['X', 'During storms,'], ['S', 'he'], ['V', 'stayed'], ['X', 'awake all night,'], ['R', 'checking the light every hour.']],
        es: 'Durante las tormentas, se quedaba despierto toda la noche, comprobando la luz cada hora.',
        note: 'La participle clause va al final: "checking…" describe lo que hacía mientras estaba despierto.',
        vocab: [['storm', 'tormenta'], ['awake', 'despierto'], ['check', 'comprobar']] },
      { parts: [['X', 'In 1998'], ['S', 'the lighthouse'], ['V', 'was automated,'], ['R', 'leaving Peter without a job.']],
        es: 'En 1998 el faro se automatizó, lo que dejó a Peter sin trabajo.',
        note: '"Leaving…" expresa el resultado de la automatización. Ojo: ¿quién deja a Peter sin trabajo? La automatización, el sujeto de la frase.',
        vocab: [['automate', 'automatizar'], ['leave somebody without', 'dejar a alguien sin']] },
      { parts: [['R', 'Asked whether he missed the island,'], ['S', 'he'], ['V', 'smiled'], ['C', 'and'], ['V', 'said'], ['R', 'that he still woke up every night to check the light.']],
        es: 'Cuando le preguntaron si echaba de menos la isla, sonrió y dijo que todavía se despertaba cada noche para comprobar la luz.',
        note: '"Asked…" = cuando le preguntaron (pasiva). Dos verbos principales unidos por and: smiled y said.',
        vocab: [['miss', 'echar de menos'], ['island', 'isla'], ['wake up (woke, woken)', 'despertarse']] },
    ],
    questions: [
      { q: 'Why could Peter repair everything himself?', opts: ['He had trained as an engineer.', 'He had a lot of free time.', 'The radio told him how to do it.', 'He learned from previous keepers.'], a: 0 },
      { q: 'What happened in 1998?', opts: ['The lighthouse started working automatically.', 'A storm destroyed the lamp.', 'Peter decided to retire.', 'The boat stopped bringing supplies.'], a: 0 },
      { q: 'What does the last sentence suggest?', opts: ['His old routine is still part of his life.', 'He is glad he left the island.', 'He cannot sleep because of an illness.', 'He wants to work there again.'], a: 0 },
    ],
  },
};
