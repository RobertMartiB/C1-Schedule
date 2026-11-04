// Unidad 12 · Estilo indirecto
UNITS.u12 = {
  theory: [
    {
      h: 'La idea: contar lo que alguien dijo',
      html: `<p>El <b>estilo indirecto</b> (reported speech) sirve para contar lo que otra persona dijo, sin citarla palabra por palabra. Cuando el verbo que introduce va en pasado (<i>said, told</i>), el verbo de lo que se dijo suele dar <b>un paso atrás</b> en el tiempo.</p>
      <table class="t">
        <tr><th>Lo que dijo</th><th>Lo que cuentas</th></tr>
        <tr><td>present simple: "I <b>live</b> here."</td><td>past simple: He said he <b>lived</b> there.</td></tr>
        <tr><td>present continuous: "I'<b>m working</b>."</td><td>past continuous: She said she <b>was working</b>.</td></tr>
        <tr><td>past simple / present perfect: "I <b>saw</b> it." / "I'<b>ve seen</b> it."</td><td>past perfect: He said he <b>had seen</b> it.</td></tr>
        <tr><td>will: "I'<b>ll</b> call you."</td><td>would: She said she <b>would</b> call me.</td></tr>
        <tr><td>can / may: "I <b>can</b> help."</td><td>could / might: He said he <b>could</b> help.</td></tr>
      </table>`,
    },
    {
      h: 'Say o tell',
      html: `<p><b>Tell</b> siempre lleva a quién se lo dices; <b>say</b> no (o lleva <i>to</i>):</p>
      <div class="ex">She <span class="v">told me</span> (that) she was tired.<br>
      She <span class="v">said</span> (that) she was tired. / She said <b>to me</b> that…<br>
      <s>She said me…</s> · <s>She told that…</s></div>
      <p>El <b>that</b> se puede omitir en la conversación.</p>`,
    },
    {
      h: 'Cambian también las palabras de tiempo y lugar',
      html: `<div class="ex">now → <b>then</b> · today → <b>that day</b> · tonight → <b>that night</b><br>
      tomorrow → <b>the next day / the following day</b> · yesterday → <b>the day before / the previous day</b><br>
      next week → <b>the following week</b> · ago → <b>before</b> · here → <b>there</b> · this → <b>that</b></div>
      <p>Si lo que se dijo <b>sigue siendo verdad</b>, el cambio de tiempo es opcional: <i>He said he <b>lives</b> in Madrid</i> (y sigue viviendo allí).</p>`,
    },
    {
      h: 'Preguntas indirectas: sin auxiliar y orden normal',
      html: `<p>Al contar una pregunta, desaparecen <i>do/does/did</i> y el orden vuelve a ser <b>sujeto + verbo</b>. Las preguntas de sí o no llevan <b>if</b> o <b>whether</b>.</p>
      <div class="ex">"Where <b>do you live</b>?" → She asked me where <span class="v">I lived</span>.<br>
      "<b>Are you</b> coming?" → He asked <span class="v">if I was coming</span>.<br>
      <s>She asked me where did I live.</s></div>`,
    },
    {
      h: 'Órdenes, peticiones y verbos que resumen',
      html: `<p>Las órdenes y peticiones se cuentan con <b>tell / ask + persona + (not) to + infinitivo</b>:</p>
      <div class="ex">"Sit down." → She <span class="v">told us to sit</span> down.<br>
      "Please don't shout." → He <span class="v">asked me not to shout</span>.</div>
      <p>En el C1 se valora usar verbos que resumen la intención: <b>suggest</b> (+ -ing), <b>offer / promise / refuse</b> (+ to), <b>warn / remind / advise</b> (+ persona + to), <b>admit / deny</b> (+ -ing).</p>
      <div class="ex">"Let's take a taxi." → She <span class="v">suggested taking</span> a taxi.<br>
      "I didn't break it!" → He <span class="v">denied breaking</span> it.</div>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>He said me that…</s> → <b>He told me that…</b></li>
        <li><s>She asked where was the station.</s> → <b>She asked where the station was.</b></li>
        <li><s>He told me don't worry.</s> → <b>He told me not to worry.</b></li>
        <li><s>She suggested me to go.</s> → <b>She suggested (that) I go / suggested going.</b></li>
      </ul>`,
    },
  ],
  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "Leaving university", text: "When I told my parents I wanted to leave university, they didn't [1] it well. My father [2] that I was making a terrible mistake, and my mother asked me to at least [3] it over for a few weeks. I [4] them that I had already found a job, and promised I would go back to studying if things didn't [5] out. In the end, they [6] to let me try. My mother later [7] that she had been more worried than angry. Looking back, I'm glad I [8] my ground." },
    2: { title: "Advice from a writer", text: "A journalist once asked a famous novelist [9] she wrote every day. She replied that she [10], but only when she felt like it. She explained that she had [11] tried to follow a strict timetable when she was young, [12] it had made her miserable. She told the journalist [13] to believe people who said writing was easy, and suggested [14] long walks instead of staring at a blank page. When the journalist asked her what advice she [15] give to young writers, she said that they should read as much as they [16]." },
    3: { title: "The factory closure", text: "The [17] that the factory would close was met with [18] by its workers. The manager [19] to the staff and explained that the [20] was unavoidable. [21] of the union said they would demand [22] for everyone. They also accused the company of being [23] about how [24] the factory really was." },
  },
  exercises: [
    { type: 'mcq', q: '"I\'m tired." → She said she ___ tired.', opts: ['was', 'is being', 'had', 'were'], a: 0, why: 'Present simple → past simple.' },
    { type: 'mcq', q: 'He ___ me that he would be late.', opts: ['told', 'said', 'asked', 'spoke'], a: 0, why: 'Tell + persona.' },
    { type: 'mcq', q: '"Where do you work?" → She asked me where ___.', opts: ['I worked', 'did I work', 'I did work', 'do I work'], a: 0, why: 'Pregunta indirecta: sin auxiliar y sujeto + verbo.' },
    { type: 'mcq', q: '"Are you coming?" → He asked ___ I was coming.', opts: ['if', 'that', 'what', 'do'], a: 0, why: 'Pregunta de sí o no: if / whether.' },
    { type: 'mcq', q: '"I\'ll help you tomorrow." → She said she would help me ___.', opts: ['the next day', 'tomorrow', 'yesterday', 'the day before'], a: 0, why: 'Tomorrow → the next day.' },
    { type: 'mcq', q: '"Don\'t touch it." → He told me ___ it.', opts: ['not to touch', "don't touch", 'to not touching', 'not touch'], a: 0, why: 'Orden negativa: tell + persona + not to.' },
    { type: 'mcq', q: '"Let\'s go to the beach." → She suggested ___ to the beach.', opts: ['going', 'to go', 'go', 'us to go'], a: 0, why: 'Suggest + -ing.' },
    { type: 'gap', q: '"I have finished." → He said he ___ (finish).', a: ['had finished'], why: 'Present perfect → past perfect.' },
    { type: 'gap', q: '"I can swim." → She said she ___ swim.', a: ['could'], why: 'Can → could.' },
    { type: 'gap', q: '"I didn\'t take the money!" → He denied ___ (take) the money.', a: ['taking'], why: 'Deny + -ing.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal (el que introduce lo que se dijo).', parts: [['S', 'The manager'], ['V', 'told'], ['O', 'us'], ['R', 'that the office would close early that day.']], why: 'Told es el verbo principal; lo que se dijo va en la secundaria con that.' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['She', 'asked', 'me', 'what', 'time', 'the', 'train', 'left'], a: 'She asked me what time the train left', why: 'Pregunta indirecta: sujeto (the train) + verbo (left).' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["take", "get", "have", "receive"], a: 0, why: "Take something well/badly = tomarse algo bien/mal." },
    { part: 1, type: 'mcq', opts: ["insisted", "denied", "refused", "persuaded"], a: 0, why: "Insist that = insistir en que." },
    { part: 1, type: 'mcq', opts: ["think", "turn", "look", "put"], a: 0, why: "Think it over = pensárselo." },
    { part: 1, type: 'mcq', opts: ["assured", "explained", "said", "described"], a: 0, why: "Assure somebody that = asegurar a alguien que. Explain y say no llevan persona detrás." },
    { part: 1, type: 'mcq', opts: ["work", "turn", "come", "go"], a: 0, why: "Work out = salir bien." },
    { part: 1, type: 'mcq', opts: ["agreed", "accepted", "admitted", "allowed"], a: 0, why: "Agree to do = aceptar hacer algo." },
    { part: 1, type: 'mcq', opts: ["confessed", "denied", "refused", "blamed"], a: 0, why: "Confess that = confesar que." },
    { part: 1, type: 'mcq', opts: ["stood", "kept", "stayed", "put"], a: 0, why: "Stand your ground = mantenerse firme." },
    { part: 2, type: 'gap', a: ["whether", "if"], why: "Pregunta indirecta de sí o no: whether / if." },
    { part: 2, type: 'gap', a: ["did"], why: "Respuesta corta en pasado: she did." },
    { part: 2, type: 'gap', a: ["once", "always", "often"], why: "Once = una vez, en otro tiempo." },
    { part: 2, type: 'gap', a: ["but"], why: "Contraste: but." },
    { part: 2, type: 'gap', a: ["not"], why: "Tell somebody not to do." },
    { part: 2, type: 'gap', a: ["taking", "going"], why: "Suggest + -ing." },
    { part: 2, type: 'gap', a: ["would"], why: "Will → would en estilo indirecto." },
    { part: 2, type: 'gap', a: ["could"], why: "As much as they could = todo lo que pudieran." },
    { part: 3, type: 'gap', stem: "ANNOUNCE", a: ["announcement"], why: "Sustantivo: announcement." },
    { part: 3, type: 'gap', stem: "BELIEVE", a: ["disbelief"], why: "Sustantivo negativo: disbelief (incredulidad)." },
    { part: 3, type: 'gap', stem: "APOLOGY", a: ["apologised", "apologized"], why: "Verbo en pasado: apologised." },
    { part: 3, type: 'gap', stem: "CLOSE", a: ["closure"], why: "Sustantivo: closure (cierre)." },
    { part: 3, type: 'gap', stem: "REPRESENT", a: ["representatives"], why: "Personas, plural: representatives." },
    { part: 3, type: 'gap', stem: "COMPENSATE", a: ["compensation"], why: "Sustantivo: compensation." },
    { part: 3, type: 'gap', stem: "HONEST", a: ["dishonest"], why: "Adjetivo negativo: dishonest." },
    { part: 3, type: 'gap', stem: "PROFIT", a: ["profitable"], why: "Adjetivo: profitable (rentable)." },
    { part: 4, type: 'gap', s1: "\"I'll call you later,\" she said to me.", key: "PROMISED", s2: "She ___ later.", a: ["promised to call me", "promised she would call me", "promised that she would call me"], why: "Promise + to: resume la intención." },
    { part: 4, type: 'gap', s1: "\"Where are you going?\" he asked me.", key: "WHERE", s2: "He asked me ___ going.", a: ["where i was"], why: "Pregunta indirecta: sujeto + verbo, un paso atrás." },
    { part: 4, type: 'gap', s1: "\"You should see a doctor,\" she told him.", key: "ADVISED", s2: "She ___ a doctor.", a: ["advised him to see", "advised him to go to", "advised him to visit"], why: "Advise + persona + to." },
    { part: 4, type: 'gap', s1: "\"I didn't break the window,\" said Tom.", key: "DENIED", s2: "Tom ___ the window.", a: ["denied breaking", "denied having broken", "denied that he had broken"], why: "Deny + -ing." },
    { part: 4, type: 'gap', s1: "\"Don't forget to bring your passports,\" the guide said to us.", key: "REMINDED", s2: "The guide ___ our passports.", a: ["reminded us to bring", "reminded us to take"], why: "Remind + persona + to." },
    { part: 4, type: 'gap', s1: "\"Did you enjoy the film?\" she asked him.", key: "WHETHER", s2: "She asked ___ the film.", a: ["him whether he had enjoyed", "him whether he enjoyed", "him whether he liked"], why: "Whether + orden normal." },
  ],

  reading: {
    title: 'The interview',
    level: 'B2',
    sentences: [
      { parts: [['X', 'At the start of the interview,'], ['S', 'the director'], ['V', 'asked'], ['O', 'Ana'], ['R', 'why she wanted the job.']],
        es: 'Al principio de la entrevista, la directora le preguntó a Ana por qué quería el trabajo.',
        note: 'Pregunta indirecta: why she wanted (sin did, orden normal).',
        vocab: [['interview', 'entrevista'], ['director', 'directora']] },
      { parts: [['S', 'Ana'], ['V', 'explained'], ['R', 'that she had been working in tourism for five years.']],
        es: 'Ana explicó que llevaba cinco años trabajando en turismo.',
        note: 'Have been working → had been working (un paso atrás).',
        vocab: [['explain', 'explicar'], ['tourism', 'turismo']] },
      { parts: [['S', 'She'], ['V', 'admitted'], ['O', 'having little experience of management,'], ['C', 'but'], ['V', 'promised'], ['O', 'to learn quickly.']],
        es: 'Reconoció que tenía poca experiencia en dirección, pero prometió aprender rápido.',
        note: 'Admit + -ing; promise + to. Verbos que resumen la intención.',
        vocab: [['admit', 'reconocer'], ['management', 'dirección, gestión'], ['promise', 'prometer']] },
      { parts: [['S', 'The director'], ['V', 'wanted'], ['O', 'to know'], ['R', 'whether she could start the following week.']],
        es: 'La directora quería saber si podía empezar la semana siguiente.',
        note: 'Whether = si (pregunta de sí o no). Next week → the following week.',
        vocab: [['whether', 'si'], ['the following week', 'la semana siguiente']] },
      { parts: [['S', 'Ana'], ['V', 'said'], ['R', 'that she would need to give two weeks\' notice.']],
        es: 'Ana dijo que tendría que avisar con dos semanas de antelación.',
        note: 'Will → would.',
        vocab: [['give notice', 'avisar de que dejas un trabajo'], ['need', 'necesitar']] },
      { parts: [['X', 'At the end,'], ['S', 'the director'], ['V', 'told'], ['O', 'her'], ['O', 'not to worry'], ['C', 'and'], ['V', 'promised'], ['R', 'that she would call her the next day.']],
        es: 'Al final, la directora le dijo que no se preocupara y le prometió que la llamaría al día siguiente.',
        note: 'Told her not to + infinitivo (consejo negativo). Will → would y tomorrow → the next day.',
        vocab: [['worry', 'preocuparse'], ['the next day', 'al día siguiente']] },
    ],
    questions: [
      { q: 'What did Ana admit?', opts: ['That she had little management experience.', 'That she had never worked in tourism.', 'That she could not start soon.', 'That she wanted more money.'], a: 0 },
      { q: 'Why could Ana not start the following week?', opts: ['She needed to give two weeks\' notice.', 'She was on holiday.', 'She had another interview.', 'She was ill.'], a: 0 },
      { q: 'What did the director promise?', opts: ['To call her the next day.', 'To give her the job.', 'To pay for her training.', 'To meet her again.'], a: 0 },
    ],
  },
};
