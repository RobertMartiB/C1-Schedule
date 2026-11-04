// Unidad 11 · Modales de deducción
UNITS.u11 = {
  theory: [
    {
      h: 'La idea: lo que crees, no lo que sabes',
      html: `<p>Los modales de deducción sirven para decir <b>cómo de seguro estás</b> de algo que no sabes con certeza. En español usamos «debe de», «puede que» o «no puede ser».</p>
      <table class="t">
        <tr><th>Seguridad</th><th>Presente</th><th>Español</th></tr>
        <tr><td>Casi seguro que sí</td><td><b>must</b> + infinitivo</td><td>debe de…</td></tr>
        <tr><td>Es posible</td><td><b>might / may / could</b> + infinitivo</td><td>puede que…</td></tr>
        <tr><td>Casi seguro que no</td><td><b>can't</b> + infinitivo</td><td>no puede ser que…</td></tr>
      </table>
      <div class="ex">The lights are on. They <span class="v">must be</span> at home.<br>
      She <span class="v">might be</span> in the library; I'm not sure.<br>
      He <span class="v">can't be</span> hungry. He's just had lunch.</div>`,
    },
    {
      h: 'Lo contrario de must es can\'t (no mustn\'t)',
      html: `<p>En deducción, el negativo de <b>must</b> es <b>can't</b>. <i>Mustn't</i> significa prohibición, no deducción.</p>
      <div class="ex">That <span class="v">can't be</span> Tom: he's in Paris. (deducción)<br>
      You <span class="v">mustn't</span> park here. (prohibición, otra cosa)</div>
      <p>Para «puede que no», usa <b>might not / may not</b> (no <i>can't</i>, que es mucho más seguro):</p>
      <div class="ex">She <span class="v">might not know</span> about the meeting. (puede que no lo sepa)</div>`,
    },
    {
      h: 'Deducciones sobre el pasado: modal + have + participio',
      html: `<p>Para deducir algo que <b>ya pasó</b>, el modal va seguido de <b>have + participio</b>:</p>
      <div class="ex">The street is wet. It <span class="v">must have rained</span>. (debe de haber llovido)<br>
      I can't find my keys. I <span class="v">might have left</span> them at work. (puede que me las haya dejado)<br>
      She <span class="v">can't have seen</span> us; she didn't say hello. (no puede ser que nos viera)</div>
      <p>También <b>couldn't have</b> = can't have: <i>He couldn't have known.</i></p>`,
    },
    {
      h: 'Acciones en curso: modal + be + -ing',
      html: `<p>Si deduces lo que alguien <b>está haciendo</b> ahora, usa <b>be + -ing</b>; si es lo que <b>estaba haciendo</b>, <b>have been + -ing</b>:</p>
      <div class="ex">He isn't answering. He <span class="v">must be driving</span>.<br>
      Her eyes are red. She <span class="v">might have been crying</span>.</div>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>He must to be tired.</s> → <b>He must be tired.</b> Los modales nunca llevan «to».</li>
        <li><s>She mustn't be at home</s> (para deducir) → <b>She can't be at home.</b></li>
        <li><s>They must went out.</s> → <b>They must have gone out.</b> Pasado = have + participio.</li>
        <li><s>It can rain later</s> (posibilidad concreta) → <b>It might / could rain later.</b> «Can» es para posibilidades generales: <i>It can be cold in April.</i></li>
      </ul>`,
    },
  ],
  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "The city in the jungle", text: "When explorers first came [1] the ruins in the early twentieth century, they could hardly believe their eyes. The city must have been [2] for centuries, as trees were growing through the walls of its temples. Experts still [3] about why its inhabitants left. Some believe that an [4] of disease may have wiped them out, while others think they might have [5] the city because of a long drought. What is certain is that leaving cannot have been an easy [6]. Without written records, we may never get to the [7] of the mystery. Still, each new excavation [8] fresh light on the past." },
    2: { title: "The stones of Stonehenge", text: "Who built Stonehenge, and why? The honest answer is that nobody knows for [9]. The builders [10] have been extremely well organised, because some of the stones weigh more than twenty tonnes. They can't [11] used modern machines, so they might have moved the stones on wooden rollers, or they [12] have used sledges pulled by hundreds of people. Some people claim the monument was a kind of calendar; [13] think it was a place of healing. Recent research suggests it may also have been used for burials, [14] human remains have been found there. Whatever its purpose, it must have taken generations [15] complete. It is hard to imagine how much effort went [16] building it." },
    3: { title: "Missing on the mountain", text: "The [17] of the climber last winter remains [18]. The weather that day was [19] good, and he was a [20] experienced mountaineer. Rescuers found his [21] near the summit, which suggests that he must have fallen [22]. However, some [23] believe the evidence is [24] and that he may have chosen a different route down." },
  },
  exercises: [
    { type: 'mcq', q: "There's no answer. They ___ be out.", opts: ['must', 'mustn\'t', 'can\'t', 'should'], a: 0, why: 'Casi seguro que sí: must.' },
    { type: 'mcq', q: "That ___ be Laura's car. She sold it last year.", opts: ["can't", "mustn't", 'might', 'must'], a: 0, why: 'Casi seguro que no: can\'t (no mustn\'t).' },
    { type: 'mcq', q: "I'm not sure where Pablo is. He ___ be in the gym.", opts: ['might', 'must', "can't", 'has to'], a: 0, why: 'Solo es una posibilidad: might.' },
    { type: 'mcq', q: 'The ground is wet. It ___ during the night.', opts: ['must have rained', 'must rain', 'must rained', 'must have rain'], a: 0, why: 'Deducción sobre el pasado: must have + participio.' },
    { type: 'mcq', q: "She ___ my message. She hasn't replied.", opts: ["can't have read", "mustn't have read", "can't read", "can't have reading"], a: 0, why: 'Casi seguro que no, en pasado: can\'t have + participio.' },
    { type: 'mcq', q: "He isn't picking up the phone. He ___.", opts: ['must be driving', 'must drive', 'must driving', 'must to drive'], a: 0, why: 'Acción en curso: must be + -ing.' },
    { type: 'mcq', q: "I can't find my wallet. I ___ it on the bus.", opts: ['might have left', 'might leave', 'might left', 'might to leave'], a: 0, why: 'Posibilidad en pasado: might have + participio.' },
    { type: 'gap', q: "You ___ (must / be) exhausted after such a long flight.", a: ['must be'], why: 'Deducción en presente: must + infinitivo.' },
    { type: 'gap', q: "They ___ (can't / finish) already. They only started ten minutes ago.", a: ['cant have finished', 'cannot have finished'], why: 'Casi seguro que no, en pasado: can\'t have finished.' },
    { type: 'gap', q: 'Her eyes are red. She might have ___ (cry).', a: ['been crying'], why: 'Acción en curso en el pasado: might have been + -ing.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal completo (modal incluido).', parts: [['S', 'The thieves'], ['V', 'must have entered'], ['X', 'through the kitchen window.']], why: 'El modal, have y el participio forman un solo bloque verbal.' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['He', "can't", 'have', 'known', 'about', 'the', 'party'], a: "He can't have known about the party", why: 'Can\'t have + participio: deducción negativa sobre el pasado.' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["across", "over", "through", "along"], a: 0, why: "Come across = encontrarse con algo por casualidad." },
    { part: 1, type: 'mcq', opts: ["abandoned", "resigned", "dropped", "quit"], a: 0, why: "Abandon a place = abandonar un lugar." },
    { part: 1, type: 'mcq', opts: ["disagree", "dispute", "contradict", "oppose"], a: 0, why: "Disagree about = no estar de acuerdo sobre algo." },
    { part: 1, type: 'mcq', opts: ["outbreak", "outcome", "outlook", "output"], a: 0, why: "An outbreak of disease = un brote de una enfermedad." },
    { part: 1, type: 'mcq', opts: ["fled", "ran", "flew", "rushed"], a: 0, why: "Flee (fled) a place = huir de un lugar." },
    { part: 1, type: 'mcq', opts: ["decision", "resolution", "conclusion", "determination"], a: 0, why: "An easy decision = una decisión fácil." },
    { part: 1, type: 'mcq', opts: ["bottom", "base", "root", "foot"], a: 0, why: "Get to the bottom of = llegar al fondo de un asunto." },
    { part: 1, type: 'mcq', opts: ["sheds", "gives", "puts", "makes"], a: 0, why: "Shed light on = arrojar luz sobre." },
    { part: 2, type: 'gap', a: ["sure", "certain"], why: "For sure = con seguridad." },
    { part: 2, type: 'gap', a: ["must"], why: "Deducción segura: must have been." },
    { part: 2, type: 'gap', a: ["have"], why: "Can't have + participio." },
    { part: 2, type: 'gap', a: ["may", "might", "could"], why: "Posibilidad en pasado: may have used." },
    { part: 2, type: 'gap', a: ["others"], why: "Some…; others… = unos…; otros…" },
    { part: 2, type: 'gap', a: ["as", "because", "since"], why: "Causa + frase completa." },
    { part: 2, type: 'gap', a: ["to"], why: "It took generations to complete." },
    { part: 2, type: 'gap', a: ["into"], why: "Effort goes into something = el esfuerzo se dedica a algo." },
    { part: 3, type: 'gap', stem: "DISAPPEAR", a: ["disappearance"], why: "Sustantivo: disappearance." },
    { part: 3, type: 'gap', stem: "MYSTERY", a: ["mysterious"], why: "Adjetivo: mysterious." },
    { part: 3, type: 'gap', stem: "EXCEPT", a: ["exceptionally"], why: "Adverbio delante de adjetivo: exceptionally good." },
    { part: 3, type: 'gap', stem: "HIGH", a: ["highly"], why: "Highly experienced = muy experimentado." },
    { part: 3, type: 'gap', stem: "EQUIP", a: ["equipment"], why: "Sustantivo incontable: equipment." },
    { part: 3, type: 'gap', stem: "ACCIDENT", a: ["accidentally"], why: "Adverbio: accidentally." },
    { part: 3, type: 'gap', stem: "INVESTIGATE", a: ["investigators"], why: "Personas, plural: investigators." },
    { part: 3, type: 'gap', stem: "CONCLUDE", a: ["inconclusive"], why: "Adjetivo negativo: inconclusive (no concluyente)." },
    { part: 4, type: 'gap', s1: "I'm sure he forgot about the meeting.", key: "MUST", s2: "He ___ about the meeting.", a: ["must have forgotten"], why: "Deducción segura sobre el pasado: must have + participio." },
    { part: 4, type: 'gap', s1: "It's impossible that she saw us.", key: "SEEN", s2: "She ___ us.", a: ["cant have seen", "cannot have seen", "couldnt have seen"], why: "Deducción negativa: can't have seen." },
    { part: 4, type: 'gap', s1: "Perhaps they took the wrong road.", key: "MIGHT", s2: "They ___ the wrong road.", a: ["might have taken"], why: "Posibilidad en pasado: might have taken." },
    { part: 4, type: 'gap', s1: "I'm certain she is working late tonight.", key: "MUST", s2: "She ___ late tonight.", a: ["must be working"], why: "Acción en curso: must be + -ing." },
    { part: 4, type: 'gap', s1: "It's possible that he didn't receive the email.", key: "MAY", s2: "He ___ the email.", a: ["may not have received", "may not have got", "may not have gotten"], why: "Puede que no: may not have + participio." },
    { part: 4, type: 'gap', s1: "I'm sure the children weren't sleeping; I could hear them laughing.", key: "BEEN", s2: "The children ___; I could hear them laughing.", a: ["cant have been sleeping", "cannot have been sleeping", "couldnt have been sleeping"], why: "Acción en curso en el pasado: can't have been + -ing." },
  ],

  reading: {
    title: 'The empty flat',
    level: 'B2',
    sentences: [
      { parts: [['X', 'When the police arrived,'], ['S', 'the flat'], ['V', 'was'], ['O', 'completely empty.']],
        es: 'Cuando llegó la policía, el piso estaba completamente vacío.',
        note: 'La secundaria con when va delante; el esqueleto es «the flat was empty».',
        vocab: [['flat', 'piso'], ['empty', 'vacío']] },
      { parts: [['S', 'The tenant'], ['V', 'must have left'], ['X', 'in a hurry,'], ['R', 'because there was still food on the table.']],
        es: 'El inquilino debió de irse con prisa, porque todavía había comida en la mesa.',
        note: 'Must have left = deducción segura sobre el pasado, con una prueba (la comida).',
        vocab: [['tenant', 'inquilino'], ['in a hurry', 'con prisa']] },
      { parts: [['S', 'He'], ['V', "can't have gone"], ['X', 'far:'], ['S', 'his car'], ['V', 'was'], ['X', 'still in the garage.']],
        es: 'No pudo haber ido lejos: su coche seguía en el garaje.',
        note: 'Can\'t have gone = casi seguro que no.',
        vocab: [['far', 'lejos'], ['still', 'todavía']] },
      { parts: [['S', 'A neighbour'], ['V', 'said'], ['R', 'that he might have been hiding from someone.']],
        es: 'Un vecino dijo que quizá se estaba escondiendo de alguien.',
        note: 'Might have been + -ing: posibilidad sobre algo en curso en el pasado.',
        vocab: [['neighbour', 'vecino'], ['hide', 'esconderse']] },
      { parts: [['S', 'Another'], ['V', 'thought'], ['R', 'he could simply be on holiday.']],
        es: 'Otro pensaba que simplemente podía estar de vacaciones.',
        note: 'Could be = posibilidad en presente.',
        vocab: [['simply', 'simplemente'], ['on holiday', 'de vacaciones']] },
      { parts: [['X', 'Two days later,'], ['S', 'the mystery'], ['V', 'was solved.']],
        es: 'Dos días después, el misterio se resolvió.',
        note: 'Pasiva en pasado: was solved.',
        vocab: [['mystery', 'misterio'], ['solve', 'resolver']] },
      { parts: [['S', 'He'], ['V', 'had been'], ['X', 'in hospital'], ['X', 'all along,'], ['R', 'after a neighbour found him unwell on the stairs.']],
        es: 'Había estado en el hospital desde el principio, después de que un vecino lo encontrara indispuesto en la escalera.',
        note: 'All along = desde el principio, todo el tiempo.',
        vocab: [['all along', 'desde el principio'], ['unwell', 'indispuesto, enfermo'], ['stairs', 'escalera']] },
    ],
    questions: [
      { q: 'Why did the police think he left in a hurry?', opts: ['There was still food on the table.', 'His car was gone.', 'The door was open.', 'A neighbour saw him running.'], a: 0 },
      { q: "Why couldn't he have gone far?", opts: ['His car was still in the garage.', 'He had no money.', 'He was ill.', 'The police were watching.'], a: 0 },
      { q: 'Where had he really been?', opts: ['In hospital.', 'On holiday.', 'Hiding at a friend\'s house.', 'In the garage.'], a: 0 },
    ],
  },
};
