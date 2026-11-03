// Unidad 9 · Tercer condicional y condicionales mixtos
UNITS.u09 = {
  theory: [
    {
      h: 'La idea: un pasado que no pasó',
      html: `<p>En la unidad 7 viste los condicionales 0, 1 y 2. El <b>tercer condicional</b> habla de algo que <b>ya no se puede cambiar</b>: imaginas un pasado distinto y su resultado, también en el pasado.</p>
      <table class="t">
        <tr><th>Tipo</th><th>Situación</th><th>Forma</th></tr>
        <tr><td><b>2</b></td><td>Presente o futuro imaginario</td><td>If + pasado, would + infinitivo</td></tr>
        <tr><td><b>3</b></td><td>Pasado imaginario</td><td>If + <b>past perfect</b>, <b>would have</b> + participio</td></tr>
      </table>
      <div class="ex">If I <span class="v">had studied</span> more, I <span class="v">would have passed</span> the exam.<br><i>Si hubiera estudiado más, habría aprobado el examen.</i> (No estudié y suspendí.)</div>`,
    },
    {
      h: 'Cómo se forma',
      html: `<p><b>Condición:</b> if + <b>had</b> + participio (past perfect).<br><b>Resultado:</b> <b>would have</b> + participio.</p>
      <div class="ex">If we <span class="v">had left</span> earlier, we <span class="v">wouldn't have missed</span> the train.<br>
      She <span class="v">would have called</span> you if she <span class="v">had known</span>.<br>
      What <span class="v">would</span> you <span class="v">have done</span> if you <span class="v">had been</span> there?</div>
      <p>En lugar de <i>would</i> puedes usar <b>could have</b> (habría podido) o <b>might have</b> (quizá habría):</p>
      <div class="ex">If you had asked me, I <span class="v">could have helped</span> you.</div>`,
    },
    {
      h: 'La trampa al escuchar: \'d = had o would',
      html: `<p>En la lengua hablada, <b>'d</b> puede ser <b>had</b> o <b>would</b>, y en el tercer condicional aparecen los dos:</p>
      <div class="ex">If I<b>'d</b> known, I<b>'d</b> have come.<br>= If I <b>had</b> known, I <b>would</b> have come.</div>
      <p>Truco: si después de 'd viene un <b>participio</b> (known), es <b>had</b>. Si viene <b>have</b> o un infinitivo, es <b>would</b>. Y <i>would have</i> suena casi «wouldof»: <i>I'd've come</i>.</p>`,
    },
    {
      h: 'Condicionales mixtos: pasado y presente mezclados',
      html: `<p>A veces una condición del <b>pasado</b> tiene un resultado en el <b>presente</b>, o al revés. Entonces se mezclan las formas:</p>
      <p><b>Pasado → presente</b> (if + past perfect, would + infinitivo):</p>
      <div class="ex">If I <span class="v">had taken</span> that job, I <span class="v">would be</span> rich now.<br><i>Si hubiera aceptado ese trabajo, ahora sería rico.</i></div>
      <p><b>Presente → pasado</b> (if + pasado, would have + participio):</p>
      <div class="ex">If I <span class="v">spoke</span> German, I <span class="v">would have understood</span> the film.<br><i>Si hablara alemán (no lo hablo), habría entendido la película.</i></div>
      <p>Pista: busca palabras de tiempo como <b>now, today, yesterday, last year</b>. Te dicen qué parte va en presente y cuál en pasado.</p>`,
    },
    {
      h: 'Expresar arrepentimiento y críticas',
      html: `<p>El tercer condicional es la forma natural de hablar de errores y arrepentimientos. Fíjate también en estas estructuras de la misma familia (las verás en la unidad 10):</p>
      <div class="ex">I <span class="v">should have told</span> you. (Debería habértelo dicho.)<br>You <span class="v">shouldn't have shouted</span>. (No deberías haber gritado.)</div>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>If I would have known…</s> → <b>If I had known…</b> En la parte del <i>if</i> nunca va <i>would</i>, igual que en español no decimos «si habría sabido».</li>
        <li><s>I would had gone.</s> → <b>I would have gone.</b> Después de <i>would</i>, siempre <b>have</b>.</li>
        <li><s>If I had went…</s> → <b>If I had gone…</b> Hace falta el <b>participio</b>, no el pasado.</li>
        <li>Mezclar el tiempo sin querer: <i>If I had studied medicine, I would have been a doctor now</i> → mejor <b>I would be a doctor now</b>, porque el resultado es presente.</li>
      </ul>`,
    },
  ],
  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "A lucky escape", text: "If Tom hadn't [1] the bus that morning, he would never have met Ana. He was standing at the bus stop in the pouring rain when a woman [2] over and offered him a lift. It turned out that she worked in the same [3] of business as him, and they got [4] immediately. Looking [5], Tom says that rainy morning changed his life. If he had [6] the bus, as he usually did, they would never have [7] paths. And if his alarm clock had [8] off on time, he would probably still be single." },
    2: { title: "The mistake that made millions", text: "In 1968, a scientist called Spencer Silver was trying to create a very strong glue. Instead, he invented one [9] was so weak that it hardly stuck at all. If he [10] been more successful, the sticky note might never have existed. For years nobody knew what to do with it. Then a colleague, Art Fry, [11] was frustrated because his bookmarks kept falling out of his song book, had an idea. If Fry [12] not sung in a church choir, he might never have thought of it. The notes went on sale in 1980, and [13] then they have become one of the best-known office products in the world. Silver later said he would [14] given up if his colleagues hadn't encouraged him. The company would be [15] poorer today if it hadn't been for that weak glue. It shows that a mistake can sometimes turn [16] to be a great idea." },
    3: { title: "Regrets of a lottery winner", text: "When Mark won the lottery, he made some [17] decisions. He gave money to almost everyone, [18] people he hardly knew, and he spent a fortune on [19] cars. If he had asked for [20] from a [21] expert, he would have avoided a lot of [22] problems. Now he admits that his behaviour was [23]. \"If I had been wiser, I'd still be rich,\" he says with a [24] smile." },
  },
  exercises: [
    { type: 'mcq', q: 'If you ___ me, I would have helped you.', opts: ['had asked', 'asked', 'would ask', 'have asked'], a: 0, why: 'Tercer condicional: if + past perfect (had asked).' },
    { type: 'mcq', q: 'If she had left on time, she ___ the flight.', opts: ['wouldn\'t have missed', 'didn\'t miss', 'wouldn\'t miss', 'hadn\'t missed'], a: 0, why: 'Resultado en el pasado: would have + participio.' },
    { type: 'mcq', q: 'If I ___ that job in 2020, I would be living in London now.', opts: ['had accepted', 'accepted', 'would accept', 'have accepted'], a: 0, why: 'Mixto: condición pasada (2020) → resultado presente (now).' },
    { type: 'mcq', q: 'If he spoke French, he ___ the instructions yesterday.', opts: ['would have understood', 'would understand', 'had understood', 'understood'], a: 0, why: 'Mixto: condición presente (no habla francés) → resultado pasado (yesterday).' },
    { type: 'mcq', q: '«If I\'d known, I\'d have come.» ¿Qué significa cada \'d?', opts: ['had … would', 'would … had', 'had … had', 'would … would'], a: 0, why: '\'d + participio (known) = had. \'d + have = would.' },
    { type: 'mcq', q: 'If we had taken a taxi, we ___ arrived on time.', opts: ['might have', 'might', 'had', 'would'], a: 0, why: 'might have + participio = quizá habríamos llegado.' },
    { type: 'mcq', q: 'Elige la frase correcta.', opts: ['If I had known, I would have told you.', 'If I would have known, I would have told you.', 'If I had knew, I would told you.', 'If I knew, I would have tell you.'], a: 0, why: 'If + had + participio, would have + participio.' },
    { type: 'gap', q: 'If it ___ (not / rain), we would have gone to the beach.', a: ['hadnt rained', 'had not rained'], why: 'Condición pasada negativa: hadn\'t rained.' },
    { type: 'gap', q: 'She would have passed if she ___ (study) harder.', a: ['had studied'], why: 'If + past perfect.' },
    { type: 'gap', q: 'If I had saved more money, I ___ (be) on holiday now.', a: ['would be', 'd be'], why: 'Mixto: el resultado es presente (now) → would be.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo de la oración principal (el resultado).', parts: [['R', 'If the team had trained harder,'], ['S', 'they'], ['V', 'would have won'], ['O', 'the final.']], why: 'La parte con if es la condición. El esqueleto es «they would have won the final».' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['If', 'I', 'had', 'seen', 'you', 'I', 'would', 'have', 'said', 'hello'], a: 'If I had seen you I would have said hello', why: 'If + had seen (condición), would have said (resultado).' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["missed", "lost", "failed", "dropped"], a: 0, why: "Miss the bus = perder el autobús. Lose es perder un objeto." },
    { part: 1, type: 'mcq', opts: ["pulled", "drew", "pushed", "turned"], a: 0, why: "Pull over = parar el coche a un lado." },
    { part: 1, type: 'mcq', opts: ["line", "row", "queue", "string"], a: 0, why: "Line of business = sector, ramo." },
    { part: 1, type: 'mcq', opts: ["on", "over", "through", "by"], a: 0, why: "Get on (well) = llevarse bien." },
    { part: 1, type: 'mcq', opts: ["back", "behind", "ahead", "after"], a: 0, why: "Looking back = echando la vista atrás." },
    { part: 1, type: 'mcq', opts: ["caught", "reached", "arrived", "won"], a: 0, why: "Catch the bus = coger el autobús." },
    { part: 1, type: 'mcq', opts: ["crossed", "met", "joined", "passed"], a: 0, why: "Cross paths = cruzarse en la vida." },
    { part: 1, type: 'mcq', opts: ["gone", "sounded", "rung", "started"], a: 0, why: "Go off = sonar (una alarma)." },
    { part: 2, type: 'gap', a: ["that", "which"], why: "Relativo de cosa: that o which." },
    { part: 2, type: 'gap', a: ["had"], why: "Tercer condicional: if + had been." },
    { part: 2, type: 'gap', a: ["who"], why: "Relativo de persona entre comas: who." },
    { part: 2, type: 'gap', a: ["had"], why: "If + had not sung." },
    { part: 2, type: 'gap', a: ["since"], why: "Since then = desde entonces." },
    { part: 2, type: 'gap', a: ["have"], why: "Would have given up." },
    { part: 2, type: 'gap', a: ["much", "far", "a lot"], why: "Much poorer = mucho más pobre." },
    { part: 2, type: 'gap', a: ["out"], why: "Turn out to be = resultar ser." },
    { part: 3, type: 'gap', stem: "FORTUNE", a: ["unfortunate"], why: "Adjetivo negativo: unfortunate." },
    { part: 3, type: 'gap', stem: "INCLUDE", a: ["including"], why: "Including = incluidos." },
    { part: 3, type: 'gap', stem: "LUXURY", a: ["luxurious"], why: "Adjetivo: luxurious." },
    { part: 3, type: 'gap', stem: "ADVISE", a: ["advice"], why: "Sustantivo: advice (con c)." },
    { part: 3, type: 'gap', stem: "FINANCE", a: ["financial"], why: "Adjetivo: financial." },
    { part: 3, type: 'gap', stem: "PAIN", a: ["painful"], why: "Adjetivo: painful." },
    { part: 3, type: 'gap', stem: "RESPONSIBLE", a: ["irresponsible"], why: "Adjetivo negativo: irresponsible." },
    { part: 3, type: 'gap', stem: "REGRET", a: ["regretful"], why: "Adjetivo: regretful (arrepentido)." },
    { part: 4, type: 'gap', s1: "I didn't know you were ill, so I didn't visit you.", key: "WOULD", s2: "If I had known you were ill, I ___ you.", a: ["would have visited", "would have come to see"], why: "Tercer condicional: would have + participio." },
    { part: 4, type: 'gap', s1: "We got lost because we didn't take a map.", key: "IF", s2: "We wouldn't have got lost ___ a map.", a: ["if we had taken", "if wed taken", "if we had brought", "if we had had"], why: "If + past perfect." },
    { part: 4, type: 'gap', s1: "I didn't study medicine, so I'm not a doctor now.", key: "WOULD", s2: "If I had studied medicine, I ___ now.", a: ["would be a doctor"], why: "Mixto: condición pasada, resultado presente." },
    { part: 4, type: 'gap', s1: "She missed the train because she overslept.", key: "NOT", s2: "If she ___, she would have caught the train.", a: ["had not overslept", "hadnt overslept"], why: "If + had not + participio." },
    { part: 4, type: 'gap', s1: "Luckily, he was wearing a helmet, so he wasn't badly hurt.", key: "BEEN", s2: "If he hadn't been wearing a helmet, he ___ badly hurt.", a: ["would have been", "might have been", "could have been"], why: "Would have been hurt." },
    { part: 4, type: 'gap', s1: "It was only thanks to your help that I passed.", key: "FOR", s2: "If it ___ your help, I wouldn't have passed.", a: ["had not been for", "hadnt been for"], why: "If it hadn't been for = de no ser por." },
  ],

  reading: {
    title: 'The decision that changed everything',
    level: 'B2',
    sentences: [
      { parts: [['X', 'In 1962,'], ['S', 'a large record company in London'], ['V', 'rejected'], ['O', 'a young band from Liverpool.']],
        es: 'En 1962, una gran discográfica de Londres rechazó a un grupo joven de Liverpool.',
        note: 'Esqueleto: «a company rejected a band». Todo lo demás son complementos.',
        vocab: [['record company', 'discográfica'], ['reject', 'rechazar'], ['band', 'grupo (de música)']] },
      { parts: [['S', 'One of the managers'], ['V', 'said'], ['R', 'that guitar groups were going out of fashion.']],
        es: 'Uno de los directivos dijo que los grupos de guitarras estaban pasando de moda.',
        note: 'Lo que dijo va en una secundaria con «that». «Going out of fashion» = pasando de moda.',
        vocab: [['manager', 'directivo, gerente'], ['go out of fashion', 'pasar de moda']] },
      { parts: [['S', 'The band,'], ['R', 'of course,'], ['V', 'was'], ['O', 'the Beatles.']],
        es: 'El grupo, por supuesto, eran los Beatles.',
        note: '«of course» va entre comas: es un inciso. El esqueleto es «The band was the Beatles».',
        vocab: [['of course', 'por supuesto']] },
      { parts: [['R', 'If the company had signed them,'], ['S', 'it'], ['V', 'would have become'], ['O', 'one of the richest in the world.']],
        es: 'Si la discográfica los hubiera fichado, se habría convertido en una de las más ricas del mundo.',
        note: 'Tercer condicional puro: if + had signed (pasado imaginario), would have become (resultado pasado).',
        vocab: [['sign', 'fichar, firmar un contrato'], ['become', 'convertirse en']] },
      { parts: [['C', 'Instead,'], ['S', 'another label'], ['V', 'signed'], ['O', 'them'], ['X', 'a few months later.']],
        es: 'En cambio, otro sello los fichó unos meses después.',
        note: '«Instead» = en cambio, en lugar de eso. Muy frecuente en los readings del examen.',
        vocab: [['instead', 'en cambio'], ['label', 'sello discográfico']] },
      { parts: [['S', 'Historians'], ['V', 'sometimes wonder'], ['R', 'whether music would sound different today'], ['R', 'if that first meeting had gone well.']],
        es: 'Los historiadores a veces se preguntan si la música sonaría distinta hoy si aquella primera reunión hubiera ido bien.',
        note: 'Condicional mixto: «had gone» (pasado) → «would sound today» (presente).',
        vocab: [['wonder', 'preguntarse'], ['whether', 'si (en preguntas indirectas)'], ['go well', 'salir bien']] },
      { parts: [['S', 'The manager'], ['X', 'probably'], ['V', 'regretted'], ['O', 'his words'], ['X', 'for the rest of his life.']],
        es: 'Probablemente el directivo se arrepintió de sus palabras el resto de su vida.',
        note: '«regret» = arrepentirse de, lamentar. «Probably» va pegado al verbo, pero no forma parte de él: el verbo es solo «regretted».',
        vocab: [['probably', 'probablemente'], ['regret', 'arrepentirse de, lamentar']] },
    ],
    questions: [
      { q: 'Why did the company reject the band?', opts: ['They thought guitar groups were going out of fashion.', 'The band was too expensive.', 'The band was from Liverpool.', 'They already had the Beatles.'], a: 0 },
      { q: 'What would have happened if the company had signed them?', opts: ['It would have become very rich.', 'The Beatles would have split up.', 'It would have closed.', 'Nothing would have changed.'], a: 0 },
      { q: 'Which sentence is a mixed conditional?', opts: ['Music would sound different today if that meeting had gone well.', 'If the company had signed them, it would have become rich.', 'Another label signed them.', 'The manager regretted his words.'], a: 0 },
    ],
  },
};
