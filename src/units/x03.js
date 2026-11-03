// Unidad x03 · Vocabulario: trabajo y estudios
UNITS.x03 = {
  theory: [
    {
      h: 'La idea: aprender bloques, no palabras sueltas',
      html: `<p>En el examen no basta con saber qué significa <i>job</i>: hay que saber con qué palabras va. Por eso esta unidad está en <b>bloques</b> (collocations): verbo + nombre, adjetivo + nombre y preposiciones fijas.</p>
      <div class="ex"><b>apply for</b> a job · <b>earn</b> a salary · <b>take</b> an exam · <b>make</b> progress · <b>get</b> a degree</div>
      <p>Truco: cuando apuntes una palabra nueva, apunta también la frase donde la viste.</p>`,
    },
    {
      h: 'Buscar y conseguir trabajo',
      html: `<table class="t">
        <tr><th>Inglés</th><th>Español</th></tr>
        <tr><td><b>apply for</b> a job / a position</td><td>solicitar un puesto</td></tr>
        <tr><td>send your <b>CV</b> (UK) / <b>résumé</b> (US)</td><td>enviar el currículum</td></tr>
        <tr><td>have / attend an <b>interview</b></td><td>tener una entrevista</td></tr>
        <tr><td>be <b>offered</b> the job · <b>turn down</b> an offer</td><td>que te ofrezcan el puesto · rechazar una oferta</td></tr>
        <tr><td>be <b>hired</b> · be <b>fired</b> / be <b>made redundant</b></td><td>ser contratado · ser despedido / por reducción de plantilla</td></tr>
        <tr><td><b>full-time</b> · <b>part-time</b> · <b>temporary</b> · <b>permanent</b></td><td>jornada completa · media jornada · temporal · fijo</td></tr>
      </table>`,
    },
    {
      h: 'En el trabajo',
      html: `<div class="ex"><b>earn</b> a good salary (ganar) · <b>get a pay rise</b> (subida de sueldo)<br>
      <b>work overtime</b> (horas extra) · <b>meet a deadline</b> (cumplir un plazo)<br>
      <b>be in charge of</b> (estar a cargo de) · <b>deal with</b> customers (tratar con)<br>
      <b>colleague</b> (compañero de trabajo) · <b>boss / manager</b> · <b>staff</b> (plantilla)</div>
      <p><b>Ojo:</b> <i>work</i> es incontable (<s>a work</s>); <i>job</i> es contable (a job). <i>Career</i> es la trayectoria profesional, no «la carrera» de la universidad.</p>`,
    },
    {
      h: 'Estudios',
      html: `<div class="ex"><b>take / sit</b> an exam (hacer un examen) · <b>pass</b> (aprobar) · <b>fail</b> (suspender)<br>
      <b>do / get a degree in</b> law (estudiar / sacarse la carrera de Derecho)<br>
      <b>revise</b> (UK) / <b>review</b> (US) for an exam (repasar) · <b>enrol on</b> a course (matricularse)<br>
      <b>make progress</b> (avanzar) · <b>keep up with</b> (seguir el ritmo) · <b>drop out</b> (dejar los estudios)</div>`,
    },
    {
      h: 'Falsos amigos y errores típicos',
      html: `<ul class="errs">
        <li><s>I want to pass the exam</s> para «presentarse»: <b>take the exam</b>. Pass es aprobar.</li>
        <li><s>I'm studying a career</s> → <b>I'm doing a degree</b>. Career no es «carrera universitaria».</li>
        <li><s>He's a good partner</s> (en el trabajo) → <b>colleague</b>. Partner es socio o pareja.</li>
        <li><s>Assist to class</s> → <b>attend class</b>. Assist significa ayudar.</li>
        <li><s>I have a lot of works</s> → <b>a lot of work</b>. Incontable.</li>
      </ul>`,
    },
  ],
  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "My first real job", text: "Last month, I finally [1] a job as a junior designer. I had been looking for work for almost a year, so I was over the [2]. The company [3] me a permanent contract, and the salary is better than I expected, although I will have to work [4] at busy times. My [5] are friendly and always willing to help. My manager says that if I [6] good progress, I'll get a pay [7] after six months. For now, my main challenge is learning to [8] with difficult clients." },
    2: { title: "Studying while working", text: "More and more adults are going back to university [9] they have full-time jobs. It isn't easy: you have to study in the evenings and [10] weekends, and it can be hard to keep up [11] the younger students. Many people drop [12] in the first year. Those [13] succeed say that organisation is the key. They plan [14] week carefully, and they don't feel guilty about saying no [15] invitations. In the end, getting a degree [16] the age of forty can be even more rewarding than at twenty." },
    3: { title: "Choosing a career", text: "Choosing a career is one of the most important [17] you will ever make, and it can feel [18]. Some people know [19] what they want to do from a young age. Others try several jobs before finding the right [20]. Experts recommend thinking about your [21] interests, your strengths and your [22], as well as the [23] of jobs in each field. A good salary matters, but job [24] matters even more." },
  },
  exercises: [
    { type: 'mcq', q: 'She has ___ for a job in a bank.', opts: ['applied', 'asked', 'requested', 'demanded'], a: 0, why: 'Apply for a job = solicitar un trabajo.' },
    { type: 'mcq', q: "I'm really nervous. I ___ my driving test tomorrow.", opts: ["'m taking", "'m passing", "'m approving", "'m giving"], a: 0, why: 'Take a test = presentarse. Pass = aprobar.' },
    { type: 'mcq', q: 'He was ___ because the company had to cut costs.', opts: ['made redundant', 'made fired', 'put redundant', 'done redundant'], a: 0, why: 'Be made redundant = despido por reducción de plantilla.' },
    { type: 'mcq', q: 'I have too much ___ this week.', opts: ['work', 'works', 'job', 'jobs'], a: 0, why: 'Work es incontable: much work.' },
    { type: 'mcq', q: 'We must finish the report today. We have to ___ the deadline.', opts: ['meet', 'do', 'make', 'reach'], a: 0, why: 'Meet a deadline = cumplir un plazo.' },
    { type: 'mcq', q: 'My ___ and I usually have lunch together at the office.', opts: ['colleagues', 'partners', 'companions', 'mates of work'], a: 0, why: 'Colleague = compañero de trabajo.' },
    { type: 'mcq', q: 'She ___ out of university in her second year.', opts: ['dropped', 'fell', 'left', 'went'], a: 0, why: 'Drop out = dejar los estudios.' },
    { type: 'gap', q: "They offered me the job, but I turned it ___ because the salary was too low.", a: ['down'], why: 'Turn down = rechazar.' },
    { type: 'gap', q: 'She is in charge ___ a team of ten people.', a: ['of'], why: 'In charge of = a cargo de.' },
    { type: 'gap', q: "I'm doing a ___ in engineering. (carrera)", a: ['degree'], why: 'Degree = carrera universitaria.' },
    { type: 'find', role: 'O', prompt: 'Toca el complemento del verbo (lo que se solicita).', parts: [['S', 'More than two hundred people'], ['V', 'applied for'], ['O', 'the job'], ['X', 'in just three days.']], why: 'Apply for va con su preposición; lo solicitado es «the job».' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['I', 'have', 'to', 'revise', 'for', 'my', 'exams'], a: 'I have to revise for my exams', why: 'Revise for = repasar para.' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["landed", "reached", "won", "caught"], a: 0, why: "Land a job = conseguir un trabajo (informal)." },
    { part: 1, type: 'mcq', opts: ["moon", "sky", "sun", "stars"], a: 0, why: "Be over the moon = estar encantado." },
    { part: 1, type: 'mcq', opts: ["offered", "proposed", "suggested", "invited"], a: 0, why: "Offer somebody something = ofrecer algo a alguien." },
    { part: 1, type: 'mcq', opts: ["overtime", "extra", "overhours", "more time"], a: 0, why: "Work overtime = hacer horas extra." },
    { part: 1, type: 'mcq', opts: ["colleagues", "partners", "companions", "fellows"], a: 0, why: "Colleagues = compañeros de trabajo." },
    { part: 1, type: 'mcq', opts: ["make", "do", "have", "take"], a: 0, why: "Make progress = avanzar." },
    { part: 1, type: 'mcq', opts: ["rise", "growth", "lift", "jump"], a: 0, why: "A pay rise = una subida de sueldo." },
    { part: 1, type: 'mcq', opts: ["deal", "treat", "handle", "manage"], a: 0, why: "Deal with = tratar con. Handle y manage no llevan with." },
    { part: 2, type: 'gap', a: ["although", "though", "while"], why: "Contraste + frase completa: although." },
    { part: 2, type: 'gap', a: ["at", "on"], why: "At weekends (UK) / on weekends (US)." },
    { part: 2, type: 'gap', a: ["with"], why: "Keep up with = seguir el ritmo de." },
    { part: 2, type: 'gap', a: ["out"], why: "Drop out = abandonar los estudios." },
    { part: 2, type: 'gap', a: ["who", "that"], why: "Those who = los que." },
    { part: 2, type: 'gap', a: ["each", "every", "their"], why: "Each week / every week." },
    { part: 2, type: 'gap', a: ["to"], why: "Say no to = decir que no a." },
    { part: 2, type: 'gap', a: ["at"], why: "At the age of = a la edad de." },
    { part: 3, type: 'gap', stem: "DECIDE", a: ["decisions"], why: "Sustantivo plural: decisions." },
    { part: 3, type: 'gap', stem: "OVERWHELM", a: ["overwhelming"], why: "Adjetivo con -ing: overwhelming (abrumador)." },
    { part: 3, type: 'gap', stem: "EXACT", a: ["exactly"], why: "Adverbio: exactly." },
    { part: 3, type: 'gap', stem: "OCCUPY", a: ["occupation"], why: "Sustantivo: occupation (profesión)." },
    { part: 3, type: 'gap', stem: "PERSON", a: ["personal"], why: "Adjetivo: personal." },
    { part: 3, type: 'gap', stem: "WEAK", a: ["weaknesses"], why: "Sustantivo plural: weaknesses." },
    { part: 3, type: 'gap', stem: "AVAILABLE", a: ["availability"], why: "Sustantivo: availability." },
    { part: 3, type: 'gap', stem: "SATISFY", a: ["satisfaction"], why: "Job satisfaction = satisfacción en el trabajo." },
    { part: 4, type: 'gap', s1: "I sent my CV to the company to get a job there.", key: "APPLIED", s2: "I ___ at the company.", a: ["applied for a job", "applied for a position"], why: "Apply for a job." },
    { part: 4, type: 'gap', s1: "They didn't accept my offer.", key: "TURNED", s2: "They ___ offer.", a: ["turned down my"], why: "Turn down = rechazar." },
    { part: 4, type: 'gap', s1: "She manages a team of ten people.", key: "CHARGE", s2: "She ___ a team of ten people.", a: ["is in charge of"], why: "Be in charge of = estar a cargo de." },
    { part: 4, type: 'gap', s1: "I failed the exam.", key: "PASS", s2: "I ___ the exam.", a: ["did not pass", "didnt pass"], why: "Fail = not pass." },
    { part: 4, type: 'gap', s1: "He left university before finishing his degree.", key: "DROPPED", s2: "He ___ university.", a: ["dropped out of"], why: "Drop out of = abandonar." },
    { part: 4, type: 'gap', s1: "I find it hard to study as fast as the rest of the class.", key: "KEEP", s2: "I find it hard to ___ the rest of the class.", a: ["keep up with"], why: "Keep up with = seguir el ritmo de." },
  ],

  reading: {
    title: 'From the classroom to the office',
    level: 'B1',
    sentences: [
      { parts: [['X', 'After finishing her degree in economics,'], ['S', 'Marta'], ['V', 'applied for'], ['O', 'dozens of jobs.']],
        es: 'Después de terminar la carrera de Económicas, Marta solicitó decenas de trabajos.',
        note: 'After + -ing al principio es información extra. Esqueleto: Marta applied for jobs.',
        vocab: [['degree', 'carrera, título'], ['apply for', 'solicitar'], ['dozens of', 'decenas de']] },
      { parts: [['S', 'Most companies'], ['X', 'never'], ['V', 'replied,'], ['C', 'and'], ['S', 'she'], ['V', 'started'], ['O', 'to feel discouraged.']],
        es: 'La mayoría de las empresas nunca contestó, y empezó a sentirse desanimada.',
        note: 'Never va entre sujeto y verbo. Discouraged = desanimado.',
        vocab: [['reply', 'contestar'], ['discouraged', 'desanimado']] },
      { parts: [['X', 'Finally,'], ['S', 'a small consultancy'], ['V', 'invited'], ['O', 'her'], ['O', 'to an interview.']],
        es: 'Por fin, una pequeña consultora la invitó a una entrevista.',
        note: 'Invite somebody to something.',
        vocab: [['consultancy', 'consultora'], ['interview', 'entrevista']] },
      { parts: [['S', 'She'], ['V', 'was offered'], ['O', 'a temporary contract'], ['R', 'which became permanent a year later.']],
        es: 'Le ofrecieron un contrato temporal que se hizo fijo un año después.',
        note: 'Pasiva con persona como sujeto: she was offered. Temporary / permanent.',
        vocab: [['temporary', 'temporal'], ['contract', 'contrato'], ['permanent', 'fijo, indefinido']] },
      { parts: [['X', 'Today'], ['S', 'she'], ['V', 'is in charge of'], ['O', 'a team of six,'], ['C', 'and'], ['V', 'deals with'], ['O', 'clients from all over Europe.']],
        es: 'Hoy está a cargo de un equipo de seis y trata con clientes de toda Europa.',
        note: 'Dos verbos para el mismo sujeto unidos por and.',
        vocab: [['be in charge of', 'estar a cargo de'], ['deal with', 'tratar con']] },
      { parts: [['S', 'She'], ['V', 'admits'], ['R', 'that university did not prepare her for the real world of work.']],
        es: 'Reconoce que la universidad no la preparó para el mundo real del trabajo.',
        note: 'Admit = reconocer. La secundaria con that dice qué reconoce.',
        vocab: [['admit', 'reconocer, admitir'], ['prepare', 'preparar']] },
      { parts: [['R', 'If she could give one piece of advice to students,'], ['S', 'it'], ['V', 'would be'], ['O', 'to get work experience as early as possible.']],
        es: 'Si pudiera dar un consejo a los estudiantes, sería que consigan experiencia laboral lo antes posible.',
        note: 'Segundo condicional. Work experience = experiencia laboral (incontable).',
        vocab: [['piece of advice', 'consejo'], ['work experience', 'experiencia laboral']] },
    ],
    questions: [
      { q: 'How did Marta feel when companies did not reply?', opts: ['Discouraged.', 'Relieved.', 'Excited.', 'Angry with her university.'], a: 0 },
      { q: 'What kind of contract did she get at first?', opts: ['A temporary one.', 'A permanent one.', 'A part-time one.', 'No contract.'], a: 0 },
      { q: 'What is her advice to students?', opts: ['Get work experience early.', 'Do a second degree.', 'Apply only to big companies.', 'Study economics.'], a: 0 },
    ],
  },
};
