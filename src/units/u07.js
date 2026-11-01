// Unidad 7 · Condicionales 0, 1 y 2
UNITS.u07 = {
  theory: [
    {
      h: 'La idea: ¿qué tan real es la condición?',
      html: `<p>Un condicional tiene dos partes: la <b>condición</b> (con <i>if</i>) y el <b>resultado</b>. El tiempo verbal te dice cuánto de real es la situación:</p>
      <table class="t">
        <tr><th>Tipo</th><th>Situación</th><th>Forma</th></tr>
        <tr><td><b>0</b></td><td>Siempre es verdad</td><td>If + presente, presente</td></tr>
        <tr><td><b>1</b></td><td>Posible en el futuro</td><td>If + presente, will + infinitivo</td></tr>
        <tr><td><b>2</b></td><td>Imaginaria o poco probable</td><td>If + pasado, would + infinitivo</td></tr>
      </table>`,
    },
    {
      h: 'Condicional 0: verdades generales',
      html: `<div class="ex">If you <span class="v">heat</span> ice, it <span class="v">melts</span>.<br>If I <span class="v">drink</span> coffee at night, I <span class="v">can't</span> sleep.</div>
      <p><i>If</i> aquí funciona casi como <i>when</i> («siempre que»).</p>`,
    },
    {
      h: 'Condicional 1: lo que puede pasar',
      html: `<div class="ex">If it <span class="v">rains</span> tomorrow, we <span class="v">will stay</span> at home.<br>You'<span class="v">ll miss</span> the bus if you <span class="v">don't hurry</span>.</div>
      <p><b>Regla de oro:</b> después de <i>if</i> nunca va <i>will</i>. Lo mismo con <b>when, as soon as, unless, before, until</b>:</p>
      <div class="ex">I'll call you when I <b>arrive</b>. ✓ · <s>when I will arrive</s> ✗</div>
      <p><b>Unless</b> = if not: <i>You won't pass <u>unless</u> you study.</i> = if you don't study.</p>`,
    },
    {
      h: 'Condicional 2: lo imaginario',
      html: `<div class="ex">If I <span class="v">had</span> more money, I <span class="v">would travel</span> more. (no tengo)<br>
      If I <span class="v">were</span> you, I <span class="v">wouldn't buy</span> it. (consejo)<br>
      What <span class="v">would</span> you <span class="v">do</span> if you <span class="v">won</span> the lottery?</div>
      <p>El pasado aquí <b>no habla del pasado</b>: habla de un presente o futuro imaginario. Con <i>be</i> se usa <b>were</b> para todas las personas, sobre todo en «If I were you».</p>`,
    },
    {
      h: 'En los textos: if no siempre va primero',
      html: `<p>El orden puede cambiar. Si <i>if</i> va primero, se pone coma; si va segundo, no:</p>
      <div class="ex">If you need help, call me. · Call me if you need help.</div>
      <p>Al leer, busca el esqueleto en la parte <b>sin if</b>: esa es la frase principal.</p>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>If it will rain, …</s> → <b>If it rains, …</b></li>
        <li><s>If I would have money, …</s> → <b>If I had money, …</b> (en español: «si tuviera», nunca «si tendría»).</li>
        <li><s>If I was you…</s> → <b>If I were you…</b> (en el examen, mejor <i>were</i>).</li>
        <li><s>I'll tell you when I will know.</s> → <b>when I know</b>.</li>
      </ul>`,
    },
  ],
  exercises: [
    { type: 'mcq', q: 'If you mix red and white, you ___ pink.', opts: ['get', 'will got', 'would get', 'got'], a: 0, why: 'Verdad general → condicional 0: presente + presente.' },
    { type: 'mcq', q: 'If it ___ tomorrow, we\'ll cancel the trip.', opts: ['rains', 'will rain', 'would rain', 'rained'], a: 0, why: 'Después de "if" no va "will". Condicional 1: if + presente.' },
    { type: 'mcq', q: 'If I ___ rich, I would buy a house by the sea.', opts: ['were', 'am', 'will be', 'would be'], a: 0, why: 'Situación imaginaria → condicional 2: if + pasado (were).' },
    { type: 'mcq', q: 'I\'ll phone you as soon as I ___ home.', opts: ['get', 'will get', 'got', 'would get'], a: 0, why: '"As soon as" funciona como "if": presente, no will.' },
    { type: 'mcq', q: 'You won\'t pass the exam ___ you study harder.', opts: ['unless', 'if', 'when', 'as soon as'], a: 0, why: '"Unless" = if not.' },
    { type: 'mcq', q: 'If I were you, I ___ that email.', opts: ['wouldn\'t send', 'won\'t send', 'don\'t send', 'didn\'t send'], a: 0, why: 'Consejo con condicional 2: would + infinitivo.' },
    { type: 'gap', q: 'What ___ you do if you lost your passport abroad?', a: ['would'], why: 'Situación imaginaria → would.' },
    { type: 'gap', q: 'If she ___ (have) more time, she would learn to paint.', a: ['had'], why: 'Condicional 2: if + pasado.' },
    { type: 'gap', q: 'If you don\'t hurry, you ___ miss the train.', a: ['will', 'll'], why: 'Condicional 1: will + infinitivo.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal (el de la parte sin if).', parts: [['R', 'If the weather is good this weekend,'], ['S', 'we'], ['V', 'will go'], ['X', 'hiking in the mountains.']], why: 'La parte con "if" es la condición. El esqueleto es "we will go hiking".' },
    { type: 'mcq', q: '¿Qué significa? "If I had a car, I would drive to work."', opts: ['No tengo coche.', 'Tengo coche.', 'Tuve coche antes.', 'Voy a comprar un coche.'], a: 0, why: 'El condicional 2 habla de algo irreal ahora: no tengo coche.' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['If', 'I', 'were', 'you', 'I', 'would', 'apologise'], a: 'If I were you I would apologise', why: 'Fórmula fija de consejo: If I were you, I would…' },
  ],
  reading: {
    title: 'What if we all worked four days a week?',
    level: 'B1+',
    sentences: [
      { parts: [['R', 'If you could choose,'], ['V', 'would'], ['S', 'you'], ['V', 'work'], ['O', 'four longer days or five shorter ones?']],
        es: 'Si pudieras elegir, ¿trabajarías cuatro días más largos o cinco más cortos?',
        note: 'Pregunta en condicional 2: es una situación imaginaria. En las preguntas, "would" va delante del sujeto.',
        vocab: [['choose', 'elegir'], ['longer', 'más largo']] },
      { parts: [['S', 'Several companies in the UK'], ['V', 'have tested'], ['O', 'a four-day week'], ['X', 'without cutting salaries.']],
        es: 'Varias empresas del Reino Unido han probado la semana de cuatro días sin recortar los sueldos.',
        note: '"Without + -ing" = sin hacer algo.',
        vocab: [['test', 'probar'], ['cut', 'recortar'], ['salary', 'sueldo']] },
      { parts: [['S', 'Most of them'], ['V', 'found'], ['R', 'that if employees have a three-day weekend, they come back more rested and make fewer mistakes.']],
        es: 'La mayoría descubrió que, si los empleados tienen un fin de semana de tres días, vuelven más descansados y cometen menos errores.',
        note: 'Dentro de lo que encontraron hay un condicional 0 (verdad general): if + presente, presente.',
        vocab: [['employee', 'empleado/a'], ['rested', 'descansado'], ['make a mistake', 'cometer un error']] },
      { parts: [['C', 'However,'], ['S', 'the system'], ['V', 'doesn\'t work'], ['X', 'for every job.']],
        es: 'Sin embargo, el sistema no funciona para todos los trabajos.',
        note: 'Frase corta que marca el contraste.',
        vocab: [['every', 'todo, cada']] },
      { parts: [['R', 'If a hospital closed on Fridays,'], ['S', 'patients'], ['V', 'would suffer,'], ['C', 'so'], ['S', 'hospitals'], ['V', 'would need'], ['O', 'more staff'], ['X', 'to cover the extra day.']],
        es: 'Si un hospital cerrara los viernes, los pacientes sufrirían, así que los hospitales necesitarían más personal para cubrir el día extra.',
        note: 'Condicional 2: situación imaginaria. Esqueletos: "patients would suffer" y "hospitals would need more staff".',
        vocab: [['suffer', 'sufrir'], ['staff', 'personal, plantilla'], ['cover', 'cubrir']] },
      { parts: [['S', 'Experts'], ['V', 'believe'], ['R', 'that the four-day week will spread slowly'], ['R', 'unless governments decide to support it.']],
        es: 'Los expertos creen que la semana de cuatro días se extenderá lentamente a menos que los gobiernos decidan apoyarla.',
        note: '"Unless" = if not. Fíjate: "unless governments decide" en presente, aunque hable del futuro.',
        vocab: [['spread', 'extenderse'], ['unless', 'a menos que'], ['support', 'apoyar']] },
    ],
    questions: [
      { q: 'What did the UK companies test?', opts: ['Working from home.', 'A four-day week with the same salary.', 'Shorter holidays.', 'Lower salaries.'], a: 1 },
      { q: 'What did most companies find?', opts: ['Employees made more mistakes.', 'Employees were more rested.', 'Employees wanted to work five days.', 'Salaries had to be cut.'], a: 1 },
      { q: 'Why is a four-day week difficult for hospitals?', opts: ['Doctors don\'t want it.', 'They would need more staff.', 'Patients prefer Fridays.', 'It is illegal.'], a: 1 },
    ],
  },
};
