// Unidad 10 · Wish e if only: deseos y arrepentimientos
UNITS.u10 = {
  theory: [
    {
      h: 'La idea: desear que algo fuera distinto',
      html: `<p><b>Wish</b> (y su versión más intensa, <b>if only</b>) sirve para decir que te gustaría que la realidad fuera otra. Igual que en los condicionales, el verbo «retrocede» un tiempo:</p>
      <table class="t">
        <tr><th>Deseo sobre…</th><th>Forma</th><th>Ejemplo</th></tr>
        <tr><td>El <b>presente</b></td><td>wish + <b>pasado</b></td><td>I wish I <span class="v">had</span> more time. (no lo tengo)</td></tr>
        <tr><td>El <b>pasado</b></td><td>wish + <b>past perfect</b></td><td>I wish I <span class="v">had studied</span> more. (no estudié)</td></tr>
        <tr><td>Algo que <b>otra persona</b> hace y te molesta</td><td>wish + <b>would</b></td><td>I wish you <span class="v">would stop</span> talking.</td></tr>
      </table>`,
    },
    {
      h: 'Wish + pasado: el presente que no es',
      html: `<div class="ex">I wish I <span class="v">lived</span> by the sea. (Ojalá viviera junto al mar.)<br>
      She wishes she <span class="v">could</span> speak Japanese. (Le gustaría poder hablar japonés.)<br>
      I wish it <span class="v">weren't</span> so cold. (Ojalá no hiciera tanto frío.)</div>
      <p>Como en el condicional 2, con <i>be</i> se prefiere <b>were</b> para todas las personas: <i>I wish I were taller</i>. En el examen, usa <i>were</i>.</p>
      <p>En español lo traducimos con <b>ojalá + imperfecto de subjuntivo</b>: «ojalá tuviera», «ojalá pudiera».</p>`,
    },
    {
      h: 'Wish + past perfect: arrepentimientos',
      html: `<div class="ex">I wish I <span class="v">hadn't eaten</span> so much. (Ojalá no hubiera comido tanto.)<br>
      He wishes he <span class="v">had accepted</span> the offer. (Le gustaría haber aceptado la oferta.)</div>
      <p>Es la misma idea que el tercer condicional (unidad 9): hablas de un pasado que ya no se puede cambiar.</p>`,
    },
    {
      h: 'Wish + would: quejas sobre los demás',
      html: `<p><b>Wish + would</b> expresa que te molesta algo que hace otra persona (o una situación) y quieres que cambie:</p>
      <div class="ex">I wish my neighbours <span class="v">would turn</span> the music down.<br>I wish it <span class="v">would stop</span> raining!</div>
      <p>No se usa con uno mismo: <s>I wish I would…</s>. Para tus propios deseos, usa el pasado: <b>I wish I could…</b></p>`,
    },
    {
      h: 'If only: lo mismo, con más emoción',
      html: `<p><b>If only</b> funciona igual que <i>wish</i>, pero suena más intenso o dramático. Muy frecuente en textos narrativos:</p>
      <div class="ex">If only I <span class="v">knew</span> the answer! (presente)<br>If only we <span class="v">had left</span> earlier! (pasado)<br>If only he <span class="v">would listen</span>! (queja)</div>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>I wish I have more money.</s> → <b>I wish I had more money.</b> Después de wish, el verbo retrocede.</li>
        <li><s>I wish I would be taller.</s> → <b>I wish I were taller.</b> Would no se usa contigo mismo.</li>
        <li><s>I wish I didn't go.</s> (para el pasado) → <b>I wish I hadn't gone.</b></li>
        <li>Para desear algo bueno a otra persona no se usa <i>wish</i> + frase, sino <b>hope</b>: <i>I hope you <b>pass</b> the exam</i> (espero que apruebes). <i>Wish</i> solo con nombre: <i>I wish you luck</i>.</li>
      </ul>`,
    },
  ],
  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "The things we wish we had done", text: "A nurse who [1] for dying patients wrote a book about their regrets. Many said, \"I wish I hadn't worked so [2].\" Others wished they had [3] in touch with old friends, and many wished they had [4] their feelings more openly. Instead, they had [5] their emotions to avoid conflict. Some wished they had [6] themselves be happier. The book became a best-seller and was [7] into more than thirty languages. Its message is simple: don't wait until it's too late to [8] the most of your life." },
    2: { title: "If only I had listened", text: "When I was eighteen, my father told me to study something practical, but I didn't listen. Now I wish I [9] followed his advice. I chose philosophy. Don't get me wrong: I loved it. But if [10] I had known how hard it would be to find a job! Sometimes I wish I [11] go back and choose again. My friend Pablo, on the [12] hand, studied engineering. He earns a lot, but he wishes he [13] more free time. \"I wish my boss [14] stop sending me emails at midnight,\" he says. I suppose the answer is to accept our choices [15] stop comparing ourselves with others. After all, it's no use crying over spilt milk, [16] the saying goes." },
    3: { title: "Learning from mistakes", text: "Everyone makes mistakes; it is [17] to live without them. The [18] between successful and unsuccessful people is often their [19] to accept failure. [20] is not the end, but a necessary step. Psychologists say that [21] worry about the past can lead to [22]. Instead, they recommend careful [23] on what went wrong, followed by [24] steps to improve." },
  },
  exercises: [
    { type: 'mcq', q: 'I wish I ___ how to swim. (no sé)', opts: ['knew', 'know', 'would know', 'had known'], a: 0, why: 'Deseo sobre el presente: wish + pasado.' },
    { type: 'mcq', q: 'I wish I ___ to the party last night. It was great.', opts: ['had gone', 'went', 'would go', 'go'], a: 0, why: 'Arrepentimiento sobre el pasado: wish + past perfect.' },
    { type: 'mcq', q: 'I wish you ___ leaving your clothes on the floor!', opts: ['would stop', 'stopped', 'had stopped', 'stop'], a: 0, why: 'Queja sobre lo que hace otra persona: wish + would.' },
    { type: 'mcq', q: 'I wish I ___ taller.', opts: ['were', 'would be', 'am', 'have been'], a: 0, why: 'Con be se usa were. Would no se usa con uno mismo.' },
    { type: 'mcq', q: 'If only I ___ her number! I could call her now.', opts: ['had', 'have', 'would have', 'having'], a: 0, why: 'If only + pasado = deseo sobre el presente.' },
    { type: 'mcq', q: 'Elige la frase correcta.', opts: ['I hope you have a great trip.', 'I wish you have a great trip.', 'I wish you would have a great trip.', 'I hope you had a great trip tomorrow.'], a: 0, why: 'Para desear algo bueno a alguien se usa hope.' },
    { type: 'gap', q: 'She wishes she ___ (can) drive.', a: ['could'], why: 'Wish + pasado: can → could.' },
    { type: 'gap', q: 'I wish I ___ (not / say) that. It was a mistake.', a: ['hadnt said', 'had not said'], why: 'Arrepentimiento: wish + past perfect negativo.' },
    { type: 'gap', q: 'If only it ___ (stop) raining! We want to go out.', a: ['would stop'], why: 'Queja sobre una situación que quieres que cambie: would + infinitivo.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal.', parts: [['S', 'Many people'], ['V', 'wish'], ['R', 'they had chosen a different career.']], why: 'El verbo principal es «wish». «Had chosen» va dentro de la secundaria: es lo que desean.' },
    { type: 'mcq', q: '«I wish I lived in Paris» significa…', opts: ['No vivo en París y me gustaría', 'Vivía en París y me gustaba', 'Viviré en París', 'Ojalá hubiera vivido en París'], a: 0, why: 'Wish + pasado habla del presente: ahora no vivo allí.' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['I', 'wish', 'I', 'had', 'listened', 'to', 'your', 'advice'], a: 'I wish I had listened to your advice', why: 'Arrepentimiento: wish + had listened.' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["cared", "looked", "took", "minded"], a: 0, why: "Care for = cuidar de." },
    { part: 1, type: 'mcq', opts: ["hard", "hardly", "heavy", "strongly"], a: 0, why: "Work hard = trabajar mucho. Hardly = apenas." },
    { part: 1, type: 'mcq', opts: ["kept", "held", "put", "had"], a: 0, why: "Keep in touch = mantener el contacto." },
    { part: 1, type: 'mcq', opts: ["expressed", "spoken", "said", "told"], a: 0, why: "Express your feelings = expresar tus sentimientos." },
    { part: 1, type: 'mcq', opts: ["hidden", "covered", "closed", "shut"], a: 0, why: "Hide your emotions = esconder tus emociones." },
    { part: 1, type: 'mcq', opts: ["let", "made", "allowed", "got"], a: 0, why: "Let + persona + infinitivo sin to: let themselves be." },
    { part: 1, type: 'mcq', opts: ["translated", "changed", "converted", "turned"], a: 0, why: "Translate into = traducir a." },
    { part: 1, type: 'mcq', opts: ["make", "do", "take", "get"], a: 0, why: "Make the most of = aprovechar al máximo." },
    { part: 2, type: 'gap', a: ["had"], why: "Wish + past perfect para arrepentirse del pasado." },
    { part: 2, type: 'gap', a: ["only"], why: "If only = ojalá." },
    { part: 2, type: 'gap', a: ["could"], why: "Wish + could: deseo de poder hacer algo." },
    { part: 2, type: 'gap', a: ["other"], why: "On the other hand." },
    { part: 2, type: 'gap', a: ["had"], why: "Wish + pasado para el presente: wishes he had." },
    { part: 2, type: 'gap', a: ["would"], why: "Wish + would: queja sobre lo que hace otra persona." },
    { part: 2, type: 'gap', a: ["and"], why: "Une dos acciones: accept and stop." },
    { part: 2, type: 'gap', a: ["as"], why: "As the saying goes = como dice el refrán." },
    { part: 3, type: 'gap', stem: "POSSIBLE", a: ["impossible"], why: "Adjetivo negativo: impossible." },
    { part: 3, type: 'gap', stem: "DIFFER", a: ["difference"], why: "Sustantivo: difference." },
    { part: 3, type: 'gap', stem: "ABLE", a: ["ability"], why: "Sustantivo: ability." },
    { part: 3, type: 'gap', stem: "FAIL", a: ["failure"], why: "Sustantivo: failure (el fracaso)." },
    { part: 3, type: 'gap', stem: "EXCESS", a: ["excessive"], why: "Adjetivo: excessive." },
    { part: 3, type: 'gap', stem: "ANXIOUS", a: ["anxiety"], why: "Sustantivo: anxiety." },
    { part: 3, type: 'gap', stem: "REFLECT", a: ["reflection"], why: "Sustantivo: reflection." },
    { part: 3, type: 'gap', stem: "PRACTICE", a: ["practical"], why: "Adjetivo: practical." },
    { part: 4, type: 'gap', s1: "I'm sorry I didn't go to the party.", key: "WISH", s2: "I ___ to the party.", a: ["wish i had gone", "wish id gone", "wish i had been"], why: "Wish + past perfect." },
    { part: 4, type: 'gap', s1: "It's a pity I can't speak Japanese.", key: "ONLY", s2: "If ___ speak Japanese.", a: ["only i could"], why: "If only + could." },
    { part: 4, type: 'gap', s1: "It annoys me that you keep interrupting me.", key: "WISH", s2: "I ___ interrupting me.", a: ["wish you would stop", "wish youd stop"], why: "Wish + would para quejarse." },
    { part: 4, type: 'gap', s1: "You were wrong not to tell her the truth.", key: "SHOULD", s2: "You ___ the truth.", a: ["should have told her"], why: "Should have + participio: crítica del pasado." },
    { part: 4, type: 'gap', s1: "I regret spending so much money.", key: "WISH", s2: "I ___ so much money.", a: ["wish i had not spent", "wish i hadnt spent", "wish id not spent"], why: "Wish + past perfect negativo." },
    { part: 4, type: 'gap', s1: "I regret not studying harder.", key: "ONLY", s2: "If ___ harder.", a: ["only i had studied", "only id studied", "only i had worked"], why: "If only + past perfect." },
  ],

  reading: {
    title: 'The top five regrets of the dying',
    level: 'B2',
    sentences: [
      { parts: [['S', 'An Australian nurse'], ['R', 'who worked with patients in their last weeks of life'], ['V', 'wrote'], ['O', 'a famous list.']],
        es: 'Una enfermera australiana que trabajaba con pacientes en sus últimas semanas de vida escribió una lista famosa.',
        note: 'Esqueleto: «An Australian nurse wrote a famous list». La relativa con «who» dice qué enfermera.',
        vocab: [['nurse', 'enfermero/a'], ['patient', 'paciente'], ['last weeks of life', 'últimas semanas de vida']] },
      { parts: [['S', 'The most common regret'], ['V', 'was'], ['O', '"I wish I had lived a life true to myself."']],
        es: 'El arrepentimiento más común era: «Ojalá hubiera vivido una vida fiel a mí mismo».',
        note: 'Wish + past perfect: un arrepentimiento sobre el pasado.',
        vocab: [['regret', 'arrepentimiento'], ['true to myself', 'fiel a mí mismo']] },
      { parts: [['S', 'Many men'], ['V', 'said'], ['R', 'they wished they hadn\'t worked so hard.']],
        es: 'Muchos hombres decían que ojalá no hubieran trabajado tanto.',
        note: 'Dos secundarias encadenadas: lo que dijeron (they wished…) y lo que deseaban (they hadn\'t worked…).',
        vocab: [['work hard', 'trabajar mucho'], ['so hard', 'tanto']] },
      { parts: [['S', 'Others'], ['V', 'wished'], ['R', 'they had stayed in touch with their friends.']],
        es: 'Otros deseaban haber mantenido el contacto con sus amigos.',
        note: '«stay in touch» = mantener el contacto.',
        vocab: [['stay in touch', 'mantener el contacto']] },
      { parts: [['X', 'Interestingly,'], ['S', 'nobody'], ['V', 'said'], ['R', 'that they wished they had spent more time at the office.']],
        es: 'Curiosamente, nadie dijo que deseara haber pasado más tiempo en la oficina.',
        note: '«Interestingly» = curiosamente. «Nobody» es el sujeto y el verbo va en positivo (said), como en «nobody knows».',
        vocab: [['interestingly', 'curiosamente'], ['nobody', 'nadie'], ['spend time', 'pasar tiempo']] },
      { parts: [['S', 'The nurse'], ['V', 'concluded'], ['R', 'that we should live today in a way'], ['R', 'that we won\'t regret tomorrow.']],
        es: 'La enfermera concluyó que deberíamos vivir hoy de una manera de la que no nos arrepintamos mañana.',
        note: 'Esqueleto: «The nurse concluded that…». Todo lo demás cuelga de «that».',
        vocab: [['conclude', 'concluir'], ['in a way', 'de una manera']] },
    ],
    questions: [
      { q: 'What was the most common regret?', opts: ['Not living a life true to themselves.', 'Not working harder.', 'Not travelling more.', 'Not earning more money.'], a: 0 },
      { q: 'What did many men wish?', opts: ['That they hadn\'t worked so hard.', 'That they had worked harder.', 'That they had more friends at work.', 'That they lived in Australia.'], a: 0 },
      { q: 'What did nobody say?', opts: ['That they wished they had spent more time at the office.', 'That they missed their friends.', 'That they wanted to be happier.', 'That they were true to themselves.'], a: 0 },
    ],
  },
};
