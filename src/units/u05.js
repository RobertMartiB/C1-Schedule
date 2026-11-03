// Unidad 5 · Conectores de contraste y causa
UNITS.u05 = {
  theory: [
    {
      h: 'Por qué importan tanto',
      html: `<p>Los conectores son las <b>señales de tráfico</b> de un texto: te dicen si lo que viene a continuación va en la misma dirección, en contra o es una consecuencia. Si los reconoces, entiendes la lógica del texto aunque no sepas todas las palabras.</p>
      <div class="ex">The hotel was expensive. <span class="c">However</span>, … → viene algo bueno (contraste)<br>
      The hotel was expensive. <span class="c">As a result</span>, … → viene una consecuencia</div>`,
    },
    {
      h: 'Lo que hay que saber de cada uno: qué va detrás',
      html: `<p>El gran problema no es el significado, sino la <b>gramática</b>: unos van con una frase completa y otros con un sustantivo.</p>
      <table class="t">
        <tr><th>Va con…</th><th>Contraste</th><th>Causa</th><th>Consecuencia</th></tr>
        <tr><td><b>Frase</b> (sujeto + verbo)</td><td>although, even though, while, whereas</td><td>because, as, since</td><td>so</td></tr>
        <tr><td><b>Sustantivo o -ing</b></td><td>despite, in spite of</td><td>because of, due to</td><td>—</td></tr>
        <tr><td><b>Frase nueva</b> (tras punto o punto y coma)</td><td>however, nevertheless, on the other hand</td><td>—</td><td>therefore, as a result, consequently</td></tr>
      </table>`,
    },
    {
      h: 'Contraste: although, despite, however',
      html: `<div class="ex"><span class="c">Although</span> it was raining, we went out. (frase completa)<br>
      <span class="c">Despite</span> the rain, we went out. (sustantivo)<br>
      <span class="c">Despite</span> feeling tired, she kept working. (-ing)<br>
      It was raining. <span class="c">However</span>, we went out. (frase nueva, con coma detrás)</div>
      <p><b>Even though</b> es un <i>although</i> más fuerte. <b>Whereas / while</b> comparan dos cosas opuestas: <i>My sister loves cities, <u>whereas</u> I prefer the countryside.</i></p>
      <p><b>On the other hand</b> presenta el otro lado de un argumento. <b>On the contrary</b> significa «al contrario, es justo lo opuesto», no es lo mismo.</p>`,
    },
    {
      h: 'Causa y consecuencia: because, because of, so',
      html: `<div class="ex">We stayed home <span class="c">because</span> it was raining. (frase)<br>
      We stayed home <span class="c">because of</span> the rain. (sustantivo)<br>
      It was raining, <span class="c">so</span> we stayed home. (consecuencia)<br>
      Prices rose sharply. <span class="c">As a result</span>, sales fell. (más formal)</div>
      <p><b>Due to</b> es más formal que <i>because of</i>: <i>The flight was delayed <u>due to</u> fog.</i></p>
      <p>Al leer, <b>as</b> y <b>since</b> pueden despistar: a veces significan «porque» (<i>As it was late, we left</i>), y <i>since</i> también significa «desde» (unidad 3).</p>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>Despite it was cold, …</s> → <b>Although it was cold</b> o <b>Despite the cold</b>.</li>
        <li><s>In spite the rain</s> → <b>In spite of the rain</b>. Lleva <i>of</i>; <i>despite</i> no.</li>
        <li><s>However it was late, we continued.</s> → <b>Although it was late, …</b> o <b>It was late. However, …</b></li>
        <li><s>Because of it was late</s> → <b>Because it was late</b>.</li>
      </ul>`,
    },
  ],
  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "Working from home", text: "[1] working from home has many advantages, it also has some drawbacks. For one thing, you save time [2] you don't have to travel. [3], some people feel lonely. This is mainly [4] the lack of contact with colleagues. [5] being more flexible, home workers often work longer hours and find it hard to [6] off at the end of the day. Some companies have [7] a mixed model. [8], employees come to the office two or three days a week." },
    2: { title: "Cities and the countryside", text: "Some people love living in big cities, [9] others can't stand the noise. Cities offer more jobs and entertainment. On the [10] hand, they are expensive: rents have risen a lot [11] the last ten years. Many young people are moving to the countryside because [12] the high prices. [13] though villages are cheaper, they have fewer services. In [14] of this, the number of remote workers in villages is growing. Some villages have even offered free houses to attract new residents. [15] a result, schools that were about to close have stayed open. The question is [16] this trend will last." },
    3: { title: "Living in the city", text: "One clear advantage of city life is the [17] of having everything nearby, and public transport is usually [18]. However, the cost of [19] has risen so much that it has become [20] for many young people. Noise and [21] are other common complaints. [22], more and more families are moving to small towns, where life is more [23], even though the [24] of jobs is smaller." },
  },
  exercises: [
    { type: 'mcq', q: '___ the traffic, we arrived on time.', opts: ['Despite', 'Although', 'However', 'Because'], a: 0, why: 'Detrás viene un sustantivo ("the traffic") y hay contraste → despite.' },
    { type: 'mcq', q: '___ she studied a lot, she failed the exam.', opts: ['Although', 'Despite', 'However', 'In spite of'], a: 0, why: 'Detrás viene una frase completa (she studied) → although.' },
    { type: 'mcq', q: 'The museum was closed. ___, we visited the park.', opts: ['However', 'Although', 'Despite', 'Because of'], a: 0, why: 'Empieza una frase nueva tras el punto → however.' },
    { type: 'mcq', q: 'The match was cancelled ___ the storm.', opts: ['because of', 'because', 'so', 'although'], a: 0, why: 'Causa + sustantivo → because of.' },
    { type: 'mcq', q: 'I was hungry, ___ I made a sandwich.', opts: ['so', 'because', 'despite', 'however'], a: 0, why: 'Consecuencia dentro de la misma frase → so.' },
    { type: 'mcq', q: 'My brother is very tidy, ___ I\'m quite messy.', opts: ['whereas', 'despite', 'so', 'because of'], a: 0, why: 'Compara dos cosas opuestas → whereas (o while).' },
    { type: 'gap', q: 'In spite ___ the bad reviews, the film was a success.', a: ['of'], why: '"In spite of" siempre lleva "of".' },
    { type: 'gap', q: 'Despite ___ (feel) ill, she went to work.', a: ['feeling'], why: 'Después de "despite" va un sustantivo o un verbo en -ing.' },
    { type: 'gap', q: 'Sales fell by 20%. As a ___, several shops closed.', a: ['result'], why: '"As a result" = como consecuencia.' },
    { type: 'find', role: 'C', prompt: 'Toca el conector.', parts: [['S', 'The plan'], ['V', 'was'], ['O', 'expensive.'], ['C', 'Nevertheless,'], ['S', 'the council'], ['V', 'approved'], ['O', 'it.']], why: '"Nevertheless" = sin embargo (formal). Anuncia algo que va en contra de lo anterior.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal.', parts: [['R', 'Even though the tickets were cheap,'], ['S', 'very few people'], ['V', 'came'], ['X', 'to the concert.']], why: '"Were" está en la subordinada con "even though". Esqueleto: "very few people came".' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['We', 'stayed', 'at', 'home', 'because', 'of', 'the', 'snow'], a: 'We stayed at home because of the snow', why: '"Because of" + sustantivo.' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["Although", "Despite", "However", "Whereas"], a: 0, why: "Although + frase completa." },
    { part: 1, type: 'mcq', opts: ["because", "because of", "due to", "so"], a: 0, why: "Detrás viene una frase (you don't have to…): because." },
    { part: 1, type: 'mcq', opts: ["However", "Although", "Despite", "Even though"], a: 0, why: "Al principio de una frase nueva y con coma: However." },
    { part: 1, type: 'mcq', opts: ["due to", "because", "since", "as"], a: 0, why: "Detrás viene un sustantivo (the lack): due to." },
    { part: 1, type: 'mcq', opts: ["Despite", "Although", "However", "Even"], a: 0, why: "Despite + -ing: despite being." },
    { part: 1, type: 'mcq', opts: ["switch", "turn", "put", "set"], a: 0, why: "Switch off = desconectar, relajarse." },
    { part: 1, type: 'mcq', opts: ["adopted", "adapted", "accepted", "admitted"], a: 0, why: "Adopt a model = adoptar un modelo. Adapt = adaptar." },
    { part: 1, type: 'mcq', opts: ["As a result", "Because of", "So that", "Due to"], a: 0, why: "Consecuencia al principio de frase: As a result." },
    { part: 2, type: 'gap', a: ["whereas", "while", "but"], why: "Contraste entre dos grupos: whereas / while." },
    { part: 2, type: 'gap', a: ["other"], why: "On the other hand = por otro lado." },
    { part: 2, type: 'gap', a: ["over", "in", "during", "for"], why: "Over the last ten years = en los últimos diez años." },
    { part: 2, type: 'gap', a: ["of"], why: "Because of + sustantivo." },
    { part: 2, type: 'gap', a: ["even"], why: "Even though = aunque." },
    { part: 2, type: 'gap', a: ["spite"], why: "In spite of = a pesar de." },
    { part: 2, type: 'gap', a: ["as"], why: "As a result = como resultado." },
    { part: 2, type: 'gap', a: ["whether", "if"], why: "Whether = si (pregunta indirecta)." },
    { part: 3, type: 'gap', stem: "CONVENIENT", a: ["convenience"], why: "Sustantivo tras «the»: convenience." },
    { part: 3, type: 'gap', stem: "RELY", a: ["reliable"], why: "Adjetivo: reliable (fiable)." },
    { part: 3, type: 'gap', stem: "ACCOMMODATE", a: ["accommodation"], why: "Sustantivo = vivienda, alojamiento: accommodation (con dos c y dos m)." },
    { part: 3, type: 'gap', stem: "AFFORD", a: ["unaffordable"], why: "Adjetivo negativo: unaffordable (inasequible)." },
    { part: 3, type: 'gap', stem: "POLLUTE", a: ["pollution"], why: "Sustantivo: pollution." },
    { part: 3, type: 'gap', stem: "CONSEQUENT", a: ["consequently"], why: "Conector adverbio: Consequently." },
    { part: 3, type: 'gap', stem: "PEACE", a: ["peaceful"], why: "Adjetivo: peaceful." },
    { part: 3, type: 'gap', stem: "CHOOSE", a: ["choice"], why: "Sustantivo: choice." },
    { part: 4, type: 'gap', s1: "Although it was raining, we went for a walk.", key: "DESPITE", s2: "We went for a walk ___.", a: ["despite the rain"], why: "Despite + sustantivo: despite the rain." },
    { part: 4, type: 'gap', s1: "The flight was cancelled because of the storm.", key: "DUE", s2: "The flight was cancelled ___ storm.", a: ["due to the"], why: "Due to = because of." },
    { part: 4, type: 'gap', s1: "She was tired, but she kept studying.", key: "SPITE", s2: "___ tired, she kept studying.", a: ["in spite of being", "in spite of feeling"], why: "In spite of + -ing." },
    { part: 4, type: 'gap', s1: "He didn't study, so he failed the exam.", key: "BECAUSE", s2: "He failed the exam ___ study.", a: ["because he did not", "because he didnt"], why: "Because + frase completa." },
    { part: 4, type: 'gap', s1: "I like coffee. My sister, however, prefers tea.", key: "WHEREAS", s2: "I like coffee ___ tea.", a: ["whereas my sister prefers"], why: "Whereas compara dos cosas opuestas." },
    { part: 4, type: 'gap', s1: "Prices went up, so fewer people travelled.", key: "RESULT", s2: "Prices went up. ___ fewer people travelled.", a: ["as a result"], why: "As a result = por eso, como consecuencia." },
  ],
  reading: {
    title: 'Should homework be banned?',
    level: 'B1+',
    sentences: [
      { parts: [['X', 'In some countries'], ['S', 'schools'], ['V', 'have reduced'], ['O', 'homework'], ['X', 'or even stopped giving it,'], ['C', 'and'], ['S', 'the debate'], ['V', 'has reached'], ['O', 'Spain.']],
        es: 'En algunos países los colegios han reducido los deberes o incluso han dejado de ponerlos, y el debate ha llegado a España.',
        note: 'Dos esqueletos unidos por "and". "Or even stopped giving it" comparte el sujeto "schools".',
        vocab: [['homework', 'deberes'], ['reduce', 'reducir'], ['reach', 'llegar a']] },
      { parts: [['S', 'Supporters of homework'], ['V', 'argue'], ['R', 'that it helps students to practise what they have learnt.']],
        es: 'Los defensores de los deberes sostienen que ayudan a los alumnos a practicar lo que han aprendido.',
        note: '"Argue" en inglés suele significar "sostener, defender una idea", no solo "discutir".',
        vocab: [['supporter', 'defensor/a, partidario/a'], ['argue that', 'sostener que']] },
      { parts: [['C', 'However,'], ['S', 'critics'], ['V', 'point out'], ['R', 'that many children spend hours on tasks'], ['R', 'which do not improve their results.']],
        es: 'Sin embargo, los críticos señalan que muchos niños dedican horas a tareas que no mejoran sus resultados.',
        note: '"However" anuncia el otro lado del debate. "Point out" = señalar, hacer notar.',
        vocab: [['critic', 'crítico/a'], ['point out', 'señalar'], ['improve', 'mejorar']] },
      { parts: [['C', 'Moreover,'], ['R', 'because not all families can help their children,'], ['S', 'homework'], ['V', 'may increase'], ['O', 'inequality.']],
        es: 'Además, como no todas las familias pueden ayudar a sus hijos, los deberes pueden aumentar la desigualdad.',
        note: '"Moreover" = además (añade otro argumento en la misma dirección). La causa va delante con "because".',
        vocab: [['moreover', 'además'], ['increase', 'aumentar'], ['inequality', 'desigualdad']] },
      { parts: [['C', 'Despite'], ['O', 'these concerns,'], ['S', 'most teachers'], ['V', 'do not want'], ['O', 'to ban homework completely.']],
        es: 'A pesar de estas preocupaciones, la mayoría de los profesores no quiere prohibir los deberes por completo.',
        note: '"Despite these concerns": despite + sustantivo. Esqueleto: "most teachers do not want to ban homework".',
        vocab: [['concern', 'preocupación'], ['ban', 'prohibir']] },
      { parts: [['C', 'Instead,'], ['S', 'they'], ['V', 'suggest'], ['O', 'shorter, more creative tasks,'], ['X', 'such as reading a book or interviewing a grandparent.']],
        es: 'En su lugar, proponen tareas más cortas y creativas, como leer un libro o entrevistar a un abuelo.',
        note: '"Such as" introduce ejemplos. Detrás de "such as" los verbos van en -ing.',
        vocab: [['instead', 'en su lugar'], ['such as', 'como (por ejemplo)'], ['interview', 'entrevistar']] },
    ],
    questions: [
      { q: 'What do supporters of homework believe?', opts: ['It increases inequality.', 'It helps students practise.', 'It should be creative.', 'It should be banned.'], a: 1 },
      { q: 'Why may homework increase inequality?', opts: ['Because some families cannot help their children.', 'Because it is too long.', 'Because teachers give different tasks.', 'Because it is boring.'], a: 0 },
      { q: 'What do most teachers propose?', opts: ['Banning homework completely.', 'Giving more homework.', 'Shorter and more creative tasks.', 'Only reading at home.'], a: 2 },
    ],
  },
};
