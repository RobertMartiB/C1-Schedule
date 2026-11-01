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
