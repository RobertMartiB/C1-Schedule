// Unidad x01 · El futuro: will, going to y presente continuo
UNITS.x01 = {
  theory: [
    {
      h: 'La idea: en inglés hay varios futuros',
      html: `<p>En español casi todo se resuelve con «iré» o «voy a ir». En inglés, la forma depende de <b>por qué</b> dices que algo va a pasar: ¿lo has decidido ahora? ¿lo tenías planeado? ¿ya está organizado? ¿lo ves venir?</p>
      <table class="t">
        <tr><th>Forma</th><th>Cuándo</th><th>Ejemplo</th></tr>
        <tr><td><b>will</b></td><td>Decisión en el momento, promesa, ofrecimiento, predicción por opinión</td><td>I'll help you.</td></tr>
        <tr><td><b>be going to</b></td><td>Plan ya decidido, o predicción con pruebas delante</td><td>I'm going to study law.</td></tr>
        <tr><td><b>presente continuo</b></td><td>Cita o plan ya organizado (con día, hora, entradas…)</td><td>I'm meeting Ana at six.</td></tr>
        <tr><td><b>presente simple</b></td><td>Horarios fijos: trenes, clases, películas</td><td>The train leaves at 7.</td></tr>
      </table>`,
    },
    {
      h: 'Will: lo que decides ahora y lo que crees',
      html: `<p>Usa <b>will</b> + infinitivo (sin to) cuando decides algo <b>en el momento de hablar</b>, para prometer, ofrecer ayuda o dar tu opinión sobre el futuro.</p>
      <div class="ex">The phone's ringing. I<span class="v">'ll get</span> it. (decisión ahora)<br>
      I <span class="v">won't tell</span> anyone, I promise. (promesa)<br>
      I think it <span class="v">will rain</span> later. (opinión)</div>
      <p>Con opiniones va muy bien con <b>I think, probably, I'm sure</b>. Ojo: «probably» va <b>después</b> de will y <b>antes</b> de won't: <i>She'll probably come. / She probably won't come.</i></p>`,
    },
    {
      h: 'Going to: planes y pruebas',
      html: `<p><b>Be going to</b> + infinitivo sirve para lo que <b>ya habías decidido</b> antes de hablar, y para predicciones basadas en algo que <b>estás viendo</b>.</p>
      <div class="ex">I<span class="v">'m going to start</span> a new course in January. (ya lo tenía pensado)<br>
      Look at those clouds. It<span class="v">'s going to rain</span>. (lo estoy viendo)</div>
      <p>Compara: «I'll buy some milk» (se me acaba de ocurrir) frente a «I'm going to buy some milk» (lo había decidido al salir de casa).</p>`,
    },
    {
      h: 'Presente continuo y presente simple con valor de futuro',
      html: `<p>Cuando un plan ya está <b>organizado</b> con otra persona, hora o lugar, lo normal es el <b>presente continuo</b>. Suele llevar una expresión de tiempo.</p>
      <div class="ex">We<span class="v">'re flying</span> to Rome on Friday. (ya tenemos los billetes)<br>
      What <span class="v">are</span> you <span class="v">doing</span> this weekend?</div>
      <p>Para <b>horarios</b> oficiales se usa el presente simple:</p>
      <div class="ex">The film <span class="v">starts</span> at 9.30. / Our flight <span class="v">lands</span> at noon.</div>`,
    },
    {
      h: 'Después de when, if, as soon as… ¡presente!',
      html: `<p>En las frases de tiempo con <b>when, as soon as, before, after, until</b> y en las condicionales con <b>if</b>, el verbo va en <b>presente</b> aunque hable del futuro. En español pasa algo parecido con el subjuntivo («cuando llegue»).</p>
      <div class="ex">I'll call you when I <span class="v">arrive</span>. (<s>when I will arrive</s>)<br>
      As soon as she <span class="v">finishes</span>, we'll leave.</div>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>I will go to the cinema tonight with Laura, we have tickets.</s> → <b>I'm going to the cinema tonight.</b> Con un plan ya organizado, presente continuo.</li>
        <li><s>I'll call you when I will arrive.</s> → <b>when I arrive.</b> Detrás de when, presente.</li>
        <li><s>Will you to come?</s> → <b>Will you come?</b> Will nunca lleva «to» detrás.</li>
        <li><s>I go to help you.</s> → <b>I'll help you.</b> «Voy a ayudarte» como ofrecimiento espontáneo es will.</li>
      </ul>`,
    },
  ],
  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "Plans for the summer", text: "This summer, my brother and I are [1] on a road trip around Scotland. We have already [2] a small campervan, and we're picking it up in Edinburgh on 1 July. Our parents think we will [3] tired of driving after a few days, but we're determined to [4] the most of it. We are going to [5] most nights at campsites, and if the weather [6] us down, we'll stay in cheap hostels. My brother has [7] to do all the cooking, which is good news, because I can't even boil an egg! I'm sure it will be a trip to [8]." },
    2: { title: "The future of work", text: "Experts say that in twenty years' time, many of today's jobs [9] have disappeared. Robots are [10] to take over repetitive tasks, but they won't replace people [11] jobs need creativity. What [12] this mean for young people? Most experts agree that we will have to keep learning all our lives. As [13] as one skill becomes out of date, we will need to learn another. Some schools are already preparing [14] this change. Next year, my school [15] offering a course in programming. I'm not sure [16] I'll enjoy it, but I'm going to try." },
    3: { title: "Packing for Scotland", text: "Our [17] is at six in the morning, so we're packing tonight. The weather in Scotland is famously [18], so we need [19] jackets and warm jumpers. We have made all the [20] for the campervan, and I'm really [21] about the trip. My parents are a bit [22], but we've promised to drive [23] and to send them [24] updates." },
  },
  exercises: [
    { type: 'mcq', q: '«Hace frío aquí.» — «Vale, ___ the window.»', opts: ["I'll close", "I'm closing", 'I close', 'I going to close'], a: 0, why: 'Decisión en el momento de hablar: will.' },
    { type: 'mcq', q: 'Look at that car! It ___ crash!', opts: ["'s going to", "'ll", 'crashes', 'is crashing to'], a: 0, why: 'Predicción con pruebas delante: going to.' },
    { type: 'mcq', q: 'We ___ dinner with my parents on Saturday. They booked a table.', opts: ['are having', 'will have', 'have', 'are going have'], a: 0, why: 'Plan ya organizado (mesa reservada): presente continuo.' },
    { type: 'mcq', q: 'The last bus ___ at 23.40.', opts: ['leaves', 'is leaving to', 'will leaving', 'going to leave'], a: 0, why: 'Horario oficial: presente simple.' },
    { type: 'mcq', q: "I'll text you as soon as I ___ home.", opts: ['get', 'will get', "'m going to get", 'got'], a: 0, why: 'Detrás de as soon as va presente.' },
    { type: 'mcq', q: 'Elige la frase correcta.', opts: ['She probably won\'t come.', 'She won\'t probably come.', 'She will not to come probably.', 'She probably will not to come.'], a: 0, why: 'Probably va delante de won\'t (y detrás de will).' },
    { type: 'mcq', q: '«¿Qué planes tienes para el verano?» — «I ___ learn to surf. I\'ve already paid for the course.»', opts: ["'m going to", "'ll", 'will to', 'going'], a: 0, why: 'Plan decidido de antes: going to.' },
    { type: 'gap', q: "Don't worry, I ___ (not / tell) anyone your secret.", a: ['wont tell', 'will not tell'], why: 'Promesa: will (en negativa, won\'t).' },
    { type: 'gap', q: 'What time ___ (the film / start)?', a: ['does the film start'], why: 'Horario: presente simple en pregunta.' },
    { type: 'gap', q: "I'll wait here until you ___ (come) back.", a: ['come'], why: 'Detrás de until, presente.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal (con su auxiliar).', parts: [['S', 'My sister and her boyfriend'], ['V', 'are moving'], ['X', 'to Canada'], ['X', 'next month.']], why: 'Are moving es presente continuo con valor de futuro: el traslado ya está organizado.' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['I', 'think', 'it', 'will', 'be', 'a', 'great', 'party'], a: 'I think it will be a great party', why: 'Opinión sobre el futuro: I think + will.' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["going", "making", "doing", "taking"], a: 0, why: "Go on a trip = irse de viaje." },
    { part: 1, type: 'mcq', opts: ["hired", "lent", "charged", "paid"], a: 0, why: "Hire = alquilar (para usarlo tú). Lend = prestar a otro." },
    { part: 1, type: 'mcq', opts: ["get", "turn", "go", "make"], a: 0, why: "Get tired of = cansarse de." },
    { part: 1, type: 'mcq', opts: ["make", "do", "take", "have"], a: 0, why: "Make the most of = aprovechar al máximo." },
    { part: 1, type: 'mcq', opts: ["spend", "pass", "live", "rest"], a: 0, why: "Spend the night = pasar la noche." },
    { part: 1, type: 'mcq', opts: ["lets", "puts", "gets", "takes"], a: 0, why: "Let somebody down = fallarle a alguien. Presente tras if." },
    { part: 1, type: 'mcq', opts: ["offered", "proposed", "suggested", "insisted"], a: 0, why: "Offer to do = ofrecerse a hacer. Suggest e insist no van con to + infinitivo." },
    { part: 1, type: 'mcq', opts: ["remember", "recall", "remind", "memorise"], a: 0, why: "A trip to remember = un viaje inolvidable." },
    { part: 2, type: 'gap', a: ["will"], why: "Futuro perfecto: will have disappeared (habrán desaparecido)." },
    { part: 2, type: 'gap', a: ["going"], why: "Be going to: predicción con pruebas." },
    { part: 2, type: 'gap', a: ["whose"], why: "Personas cuyos trabajos: whose." },
    { part: 2, type: 'gap', a: ["will", "does"], why: "Pregunta sobre el futuro: what will this mean?" },
    { part: 2, type: 'gap', a: ["soon"], why: "As soon as = en cuanto." },
    { part: 2, type: 'gap', a: ["for"], why: "Prepare for = prepararse para." },
    { part: 2, type: 'gap', a: ["is"], why: "Presente continuo con valor de futuro: is offering." },
    { part: 2, type: 'gap', a: ["whether", "if"], why: "Not sure whether = no estoy seguro de si." },
    { part: 3, type: 'gap', stem: "DEPART", a: ["departure"], why: "Sustantivo: departure (salida)." },
    { part: 3, type: 'gap', stem: "PREDICT", a: ["unpredictable"], why: "Adjetivo negativo: unpredictable." },
    { part: 3, type: 'gap', stem: "WATER", a: ["waterproof"], why: "Adjetivo compuesto: waterproof (impermeable)." },
    { part: 3, type: 'gap', stem: "ARRANGE", a: ["arrangements"], why: "Sustantivo plural: arrangements (preparativos)." },
    { part: 3, type: 'gap', stem: "EXCITE", a: ["excited"], why: "Adjetivo de cómo me siento: excited (con -ed)." },
    { part: 3, type: 'gap', stem: "CONCERN", a: ["concerned"], why: "Adjetivo: concerned (preocupados)." },
    { part: 3, type: 'gap', stem: "CARE", a: ["carefully"], why: "Adverbio con drive: carefully." },
    { part: 3, type: 'gap', stem: "DAY", a: ["daily"], why: "Adjetivo: daily (diarias)." },
    { part: 4, type: 'gap', s1: "I've decided to study medicine.", key: "GOING", s2: "I ___ medicine.", a: ["am going to study"], why: "Plan decidido: be going to." },
    { part: 4, type: 'gap', s1: "We've arranged to meet Tom at eight.", key: "MEETING", s2: "We ___ at eight.", a: ["are meeting tom"], why: "Plan organizado: presente continuo." },
    { part: 4, type: 'gap', s1: "The train's departure time is 6.15.", key: "LEAVES", s2: "The ___ 6.15.", a: ["train leaves at"], why: "Horario: presente simple." },
    { part: 4, type: 'gap', s1: "I'll phone you immediately after I land.", key: "SOON", s2: "I'll phone you ___ land.", a: ["as soon as i"], why: "As soon as + presente." },
    { part: 4, type: 'gap', s1: "I don't think she'll come to the party.", key: "PROBABLY", s2: "She ___ to the party.", a: ["probably wont come", "probably will not come"], why: "Probably va delante de won't." },
    { part: 4, type: 'gap', s1: "Do you have any plans for tonight?", key: "DOING", s2: "What ___ tonight?", a: ["are you doing"], why: "Planes: presente continuo." },
  ],

  reading: {
    title: 'A year that will change everything',
    level: 'B1',
    sentences: [
      { parts: [['X', 'Next September,'], ['S', 'Lucía'], ['V', 'is starting'], ['O', 'a master\'s degree in Dublin.']],
        es: 'El próximo septiembre, Lucía empieza un máster en Dublín.',
        note: 'Presente continuo con valor de futuro: ya está matriculada, el plan está organizado.',
        vocab: [['master\'s degree', 'máster'], ['next', 'próximo']] },
      { parts: [['S', 'She'], ['V', 'has already found'], ['O', 'a room'], ['R', 'that she is going to share with two other students.']],
        es: 'Ya ha encontrado una habitación que va a compartir con otros dos estudiantes.',
        note: 'La relativa usa going to: compartir el piso es un plan ya decidido.',
        vocab: [['room', 'habitación'], ['share', 'compartir']] },
      { parts: [['S', 'Her flight'], ['V', 'leaves'], ['X', 'Madrid'], ['X', 'at seven in the morning'], ['X', 'on the first of September.']],
        es: 'Su vuelo sale de Madrid a las siete de la mañana el uno de septiembre.',
        note: 'Horario fijo: presente simple (leaves), aunque sea futuro.',
        vocab: [['flight', 'vuelo'], ['leave', 'salir, partir']] },
      { parts: [['S', 'Her mother'], ['V', 'is worried'], ['R', 'that she will feel lonely at first.']],
        es: 'A su madre le preocupa que al principio se sienta sola.',
        note: 'Predicción basada en una opinión: will.',
        vocab: [['worried', 'preocupado'], ['lonely', 'solo, que se siente solo'], ['at first', 'al principio']] },
      { parts: [['C', 'But'], ['S', 'Lucía'], ['V', 'has promised'], ['R', 'that she will call home every Sunday.']],
        es: 'Pero Lucía ha prometido que llamará a casa todos los domingos.',
        note: 'Una promesa: will.',
        vocab: [['promise', 'prometer'], ['call home', 'llamar a casa']] },
      { parts: [['R', 'As soon as she arrives,'], ['S', 'she'], ['V', 'is going to look for'], ['O', 'a part-time job.']],
        es: 'En cuanto llegue, va a buscar un trabajo a media jornada.',
        note: 'Detrás de as soon as va presente (arrives). El resultado es un plan: going to.',
        vocab: [['as soon as', 'en cuanto'], ['look for', 'buscar'], ['part-time job', 'trabajo a media jornada']] },
      { parts: [['S', 'She'], ['V', 'is sure'], ['R', 'that her English will improve a lot.']],
        es: 'Está segura de que su inglés mejorará mucho.',
        note: 'Opinión sobre el futuro con I\'m sure: will.',
        vocab: [['sure', 'seguro'], ['improve', 'mejorar']] },
    ],
    questions: [
      { q: 'Why does the text say "is starting" and not "will start"?', opts: ['Because the plan is already arranged.', 'Because it is a promise.', 'Because it is a timetable.', 'Because she decided it at that moment.'], a: 0 },
      { q: 'What is her mother worried about?', opts: ['That Lucía will feel lonely.', 'That the flight will be late.', 'That Lucía won\'t find a room.', 'That Lucía won\'t call.'], a: 0 },
      { q: 'What will Lucía do when she arrives?', opts: ['Look for a part-time job.', 'Call her mother.', 'Find a room.', 'Start her degree.'], a: 0 },
    ],
  },
};
