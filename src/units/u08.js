// Unidad 8 · Verbo + -ing o + to
UNITS.u08 = {
  theory: [
    {
      h: 'El problema',
      html: `<p>Cuando un verbo va seguido de otro, el segundo puede ir en <b>-ing</b> o con <b>to + infinitivo</b>. Depende del primer verbo, y no hay una regla perfecta: hay que aprender los más frecuentes. La buena noticia es que son pocos y salen mucho en el examen.</p>
      <div class="ex">I enjoy <b>reading</b>. · I want <b>to read</b>.</div>`,
    },
    {
      h: 'Verbos que van con -ing',
      html: `<p><b>enjoy, finish, avoid, mind, suggest, consider, keep, practise, imagine, miss, deny, can't stand, don't mind, give up, look forward to</b></p>
      <div class="ex">She <b>avoids driving</b> at night. · Would you <b>mind closing</b> the window? · I'<b>m looking forward to seeing</b> you.</div>
      <p>Y <b>siempre -ing después de una preposición</b> (about, of, at, for, without, before, after…): <i>She's good <u>at</u> <b>drawing</b>.</i> · <i>Thanks <u>for</u> <b>helping</b>.</i></p>
      <p>Ojo: en <i>look forward <u>to</u></i> y <i>be used <u>to</u></i>, el <i>to</i> es preposición → -ing.</p>`,
    },
    {
      h: 'Verbos que van con to + infinitivo',
      html: `<p><b>want, decide, hope, plan, agree, refuse, promise, offer, manage, afford, learn, seem, need, would like</b></p>
      <div class="ex">We <b>decided to stay</b>. · He <b>refused to pay</b>. · I can't <b>afford to buy</b> a car. · She <b>managed to finish</b> on time.</div>
      <p>Muchos hablan de <b>planes, decisiones o intenciones hacia el futuro</b>; eso ayuda a recordarlos.</p>`,
    },
    {
      h: 'Verbos que cambian de significado',
      html: `<table class="t">
        <tr><th>Verbo</th><th>+ -ing</th><th>+ to</th></tr>
        <tr><td><b>stop</b></td><td>dejar de: <i>I stopped <b>smoking</b>.</i></td><td>parar para: <i>I stopped <b>to smoke</b>.</i></td></tr>
        <tr><td><b>remember</b></td><td>recordar algo pasado: <i>I remember <b>meeting</b> him.</i></td><td>acordarse de hacer: <i>Remember <b>to lock</b> the door.</i></td></tr>
        <tr><td><b>forget</b></td><td>olvidar algo pasado: <i>I'll never forget <b>seeing</b> the sea.</i></td><td>olvidarse de hacer: <i>Don't forget <b>to call</b>.</i></td></tr>
        <tr><td><b>try</b></td><td>probar a ver qué pasa: <i>Try <b>restarting</b> it.</i></td><td>intentar (cuesta): <i>I tried <b>to open</b> it, but I couldn't.</i></td></tr>
      </table>
      <p><b>like, love, hate, start, begin, continue</b> admiten los dos casi sin cambio: <i>I like swimming / to swim.</i></p>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>I enjoy to read.</s> → <b>I enjoy reading.</b></li>
        <li><s>I'm looking forward to see you.</s> → <b>to seeing you</b>.</li>
        <li><s>She suggested to go out.</s> → <b>She suggested going out.</b></li>
        <li><s>I want that you come.</s> → <b>I want you to come.</b> En inglés no se dice «want that».</li>
        <li><s>Before to leave, …</s> → <b>Before leaving, …</b> Después de preposición, -ing.</li>
      </ul>`,
    },
  ],
  exercises: [
    { type: 'mcq', q: 'I really enjoy ___ in the sea.', opts: ['swimming', 'to swim', 'swim', 'swam'], a: 0, why: '"Enjoy" va con -ing.' },
    { type: 'mcq', q: 'They decided ___ a new flat.', opts: ['to buy', 'buying', 'buy', 'bought'], a: 0, why: '"Decide" va con to + infinitivo.' },
    { type: 'mcq', q: 'I\'m looking forward to ___ you next week.', opts: ['seeing', 'see', 'saw', 'have seen'], a: 0, why: 'En "look forward to", "to" es preposición → -ing.' },
    { type: 'mcq', q: 'He stopped ___ because it was bad for his health.', opts: ['smoking', 'to smoke', 'smoke', 'smoked'], a: 0, why: 'Dejar de hacer algo → stop + -ing.' },
    { type: 'mcq', q: 'Please remember ___ the lights before you go.', opts: ['to turn off', 'turning off', 'turn off', 'turned off'], a: 0, why: 'Acordarse de hacer algo (futuro) → remember + to.' },
    { type: 'mcq', q: 'We can\'t afford ___ on holiday this year.', opts: ['to go', 'going', 'go', 'gone'], a: 0, why: '"Afford" va con to + infinitivo.' },
    { type: 'mcq', q: 'My boss wants ___ the report today.', opts: ['me to finish', 'that I finish', 'me finish', 'me finishing'], a: 0, why: 'want + persona + to + infinitivo. Nunca "want that".' },
    { type: 'gap', q: 'Would you mind ___ (open) the window?', a: ['opening'], why: '"Mind" va con -ing.' },
    { type: 'gap', q: 'She left without ___ (say) goodbye.', a: ['saying'], why: 'Después de una preposición (without) → -ing.' },
    { type: 'gap', q: 'He promised ___ call me back.', a: ['to'], why: '"Promise" va con to + infinitivo.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal.', parts: [['S', 'Many people'], ['R', 'who try to learn a language alone'], ['V', 'give up'], ['X', 'after a few months.']], why: '"Try to learn" está dentro de la relativa. El esqueleto es "Many people give up".' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['I', 'will', 'never', 'forget', 'meeting', 'my', 'favourite', 'writer'], a: 'I will never forget meeting my favourite writer', why: 'forget + -ing = no olvidar algo que ya pasó.' },
  ],
  reading: {
    title: 'Learning to fail',
    level: 'B1+',
    sentences: [
      { parts: [['S', 'Most of us'], ['V', 'avoid'], ['O', 'doing things'], ['R', 'that we are not good at.']],
        es: 'La mayoría evitamos hacer cosas que no se nos dan bien.',
        note: '"Avoid + -ing". Al final, la preposición "at" se queda sola: "things we are not good at" (unidad 2).',
        vocab: [['avoid', 'evitar'], ['be good at', 'dársele bien algo a alguien']] },
      { parts: [['S', 'We'], ['V', 'are'], ['O', 'afraid of looking stupid,'], ['C', 'so'], ['S', 'we'], ['V', 'stop'], ['O', 'trying'], ['X', 'before we have really started.']],
        es: 'Tenemos miedo de quedar como tontos, así que dejamos de intentarlo antes de haber empezado de verdad.',
        note: '"Afraid of + -ing" (preposición) y "stop + -ing" (dejar de).',
        vocab: [['be afraid of', 'tener miedo de'], ['look stupid', 'quedar como un tonto']] },
      { parts: [['S', 'A teacher in Barcelona'], ['V', 'decided'], ['O', 'to change this'], ['X', 'by inventing a "mistake of the week" competition.']],
        es: 'Una profesora de Barcelona decidió cambiar esto inventándose un concurso de "el error de la semana".',
        note: '"Decide + to". "By + -ing" explica cómo lo hizo.',
        vocab: [['by doing', 'haciendo (modo)'], ['competition', 'concurso']] },
      { parts: [['X', 'Every Friday,'], ['S', 'students'], ['V', 'share'], ['O', 'the biggest mistake'], ['R', 'they have made'], ['C', 'and'], ['V', 'explain'], ['R', 'what they learnt from it.']],
        es: 'Cada viernes, los alumnos comparten el mayor error que han cometido y explican qué aprendieron de él.',
        note: 'Relativa escondida: "the biggest mistake (that) they have made".',
        vocab: [['share', 'compartir'], ['learn from', 'aprender de']] },
      { parts: [['X', 'At first'], ['S', 'many of them'], ['V', 'refused'], ['O', 'to take part,'], ['C', 'but'], ['X', 'after a few weeks'], ['S', 'they'], ['V', 'started'], ['O', 'looking forward to it.']],
        es: 'Al principio muchos se negaron a participar, pero al cabo de unas semanas empezaron a esperarlo con ganas.',
        note: '"Refuse + to" y "look forward to + it". "Start" admite -ing o to.',
        vocab: [['at first', 'al principio'], ['refuse', 'negarse'], ['take part', 'participar']] },
      { parts: [['S', 'The teacher'], ['V', 'says'], ['R', 'that her students now keep trying for longer and don\'t mind making mistakes in front of others.']],
        es: 'La profesora dice que ahora sus alumnos siguen intentándolo durante más tiempo y no les importa equivocarse delante de los demás.',
        note: '"Keep + -ing" (seguir haciendo) y "not mind + -ing" (no importar).',
        vocab: [['keep doing', 'seguir haciendo'], ['not mind', 'no importar'], ['in front of', 'delante de']] },
    ],
    questions: [
      { q: 'Why do we often stop trying new things?', opts: ['We are too busy.', 'We are afraid of looking stupid.', 'We are not interested.', 'Teachers don\'t help us.'], a: 1 },
      { q: 'What happens every Friday in the teacher\'s class?', opts: ['Students take an exam.', 'Students share a mistake and what they learnt.', 'Students choose the best student.', 'Students correct each other\'s homework.'], a: 1 },
      { q: 'How have the students changed?', opts: ['They make fewer mistakes.', 'They refuse to take part.', 'They keep trying for longer.', 'They prefer working alone.'], a: 2 },
    ],
  },
};
