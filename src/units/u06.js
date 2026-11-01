// Unidad 6 · Narrar en pasado
UNITS.u06 = {
  theory: [
    {
      h: 'Tres tiempos para contar una historia',
      html: `<p>Para contar algo que pasó, el inglés combina tres tiempos. Cada uno tiene un papel:</p>
      <table class="t">
        <tr><th>Tiempo</th><th>Papel en la historia</th><th>Ejemplo</th></tr>
        <tr><td><b>Past simple</b></td><td>Los hechos principales, uno detrás de otro</td><td>I <b>opened</b> the door and <b>saw</b> a cat.</td></tr>
        <tr><td><b>Past continuous</b></td><td>El fondo: lo que estaba pasando</td><td>It <b>was raining</b> and people <b>were running</b>.</td></tr>
        <tr><td><b>Past perfect</b></td><td>Lo que había pasado antes</td><td>Someone <b>had left</b> the window open.</td></tr>
      </table>`,
    },
    {
      h: 'Past continuous: lo que estaba pasando',
      html: `<div class="formula">was / were + verbo-ing</div>
      <p>Describe una acción en progreso en un momento del pasado. Muy a menudo, otra acción corta (past simple) la interrumpe:</p>
      <div class="ex">I <span class="v">was cooking</span> <span class="c">when</span> the phone <span class="v">rang</span>.<br>
      <span class="c">While</span> we <span class="v">were walking</span> home, it started to snow.</div>
      <p><b>When</b> suele ir con la acción corta y <b>while</b> con la larga.</p>`,
    },
    {
      h: 'Past perfect: el pasado del pasado',
      html: `<div class="formula">had + participio</div>
      <p>Se usa cuando ya estás contando algo en pasado y necesitas ir <b>más atrás</b>:</p>
      <div class="ex">When I arrived at the station, the train <span class="v">had already left</span>.<br>→ Primero se fue el tren; después llegué yo.</div>
      <p>Compara: <i>When I arrived, the train <b>left</b></i> = llegué y en ese momento salió. Con <i>had left</i>, ya no estaba.</p>
      <p>Al leer, <b>'d</b> puede ser <i>had</i> o <i>would</i>. Si detrás va un participio, es <i>had</i>: <i>She'd finished</i> = she had finished.</p>`,
    },
    {
      h: 'Used to: costumbres que ya no existen',
      html: `<div class="formula">used to + infinitivo</div>
      <div class="ex">I <b>used to</b> play football every weekend. (antes sí, ahora no)<br>
      There <b>used to</b> be a cinema here. (antes había, ya no)<br>
      Did you <b>use to</b> live in Madrid? · I <b>didn't use to</b> like coffee.</div>
      <p>No confundir con <b>be used to + -ing</b> (estar acostumbrado), de la unidad 1 del examen: <i>I'm used to getting up early.</i></p>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>When I was child, I was going to the beach every summer.</s> → <b>I used to go</b> o <b>I went</b>. El imperfecto español de costumbre («iba») no es past continuous.</li>
        <li><s>I use to play tennis.</s> (hablando del pasado) → <b>I used to play tennis.</b></li>
        <li><s>When I arrived, she already left.</s> → <b>she had already left</b>.</li>
        <li><s>I was knowing the answer.</s> → <b>I knew the answer.</b> Verbos de estado (know, like, want, believe) no van en continuo.</li>
      </ul>`,
    },
  ],
  exercises: [
    { type: 'mcq', q: 'I ___ a shower when the lights went out.', opts: ['was having', 'had', 'have had', 'had had'], a: 0, why: 'Acción en progreso interrumpida por otra corta → past continuous.' },
    { type: 'mcq', q: 'By the time the police arrived, the thieves ___.', opts: ['had escaped', 'escaped', 'were escaping', 'have escaped'], a: 0, why: 'Pasó antes de que llegara la policía → past perfect.' },
    { type: 'mcq', q: 'When I was a child, I ___ to the beach every summer.', opts: ['used to go', 'was going', 'had gone', 'use to go'], a: 0, why: 'Costumbre del pasado → used to (o past simple). No past continuous.' },
    { type: 'mcq', q: '___ she was reading, her brother was watching TV.', opts: ['While', 'When', 'During', 'For'], a: 0, why: 'Dos acciones largas a la vez → while.' },
    { type: 'mcq', q: 'She didn\'t recognise me because she ___ me for years.', opts: ['hadn\'t seen', 'didn\'t see', 'wasn\'t seeing', 'hasn\'t seen'], a: 0, why: 'Causa anterior al momento pasado → past perfect.' },
    { type: 'mcq', q: 'There ___ a bakery on this corner, but it closed.', opts: ['used to be', 'was being', 'had been being', 'is used to be'], a: 0, why: 'Situación pasada que ya no existe → used to be.' },
    { type: 'gap', q: 'I didn\'t ___ to like vegetables, but now I love them.', a: ['use'], why: 'En negativa y pregunta, sin -d: didn\'t use to.' },
    { type: 'gap', q: 'What ___ you doing at 9 o\'clock last night?', a: ['were'], why: 'Past continuous en pregunta: were you doing.' },
    { type: 'gap', q: 'When we got to the cinema, the film had already ___. (start)', a: ['started'], why: 'Past perfect: had + participio.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal.', parts: [['R', 'While I was waiting for the bus,'], ['S', 'I'], ['V', 'met'], ['O', 'an old friend.']], why: '"Was waiting" está en la subordinada con "while". El hecho principal: "I met an old friend".' },
    { type: 'mcq', q: '¿Qué significa "She\'d left"?', opts: ['She had left.', 'She would left.', 'She did left.', 'She has left.'], a: 0, why: '\'d + participio = had. (\'d + infinitivo = would.)' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['It', 'was', 'raining', 'when', 'we', 'left', 'the', 'house'], a: 'It was raining when we left the house', why: 'Fondo (past continuous) + acción corta (past simple) con when.' },
  ],
  reading: {
    title: 'The wrong train',
    level: 'B1+',
    sentences: [
      { parts: [['X', 'Last winter'], ['S', 'I'], ['V', 'was travelling'], ['X', 'to Edinburgh'], ['X', 'for a job interview.']],
        es: 'El invierno pasado viajaba a Edimburgo para una entrevista de trabajo.',
        note: 'Past continuous para poner el fondo de la historia.',
        vocab: [['job interview', 'entrevista de trabajo']] },
      { parts: [['S', 'I'], ['V', 'had prepared'], ['O', 'everything'], ['X', 'carefully the night before:'], ['S', 'my clothes'], ['V', 'were'], ['O', 'ready'], ['C', 'and'], ['S', 'I'], ['V', 'had printed'], ['O', 'my train ticket.']],
        es: 'Lo había preparado todo con cuidado la noche anterior: tenía la ropa lista y había impreso el billete de tren.',
        note: 'Past perfect ("had prepared", "had printed") porque es anterior al viaje.',
        vocab: [['carefully', 'con cuidado'], ['the night before', 'la noche anterior'], ['print', 'imprimir']] },
      { parts: [['C', 'But'], ['R', 'while I was reading my notes on the platform,'], ['S', 'I'], ['V', 'didn\'t notice'], ['R', 'that the platform number had changed.']],
        es: 'Pero mientras leía mis apuntes en el andén, no me di cuenta de que había cambiado el número de andén.',
        note: 'Tres tiempos en una frase: fondo (was reading), hecho principal (didn\'t notice) y algo anterior (had changed).',
        vocab: [['platform', 'andén'], ['notice', 'darse cuenta de']] },
      { parts: [['S', 'I'], ['V', 'got on'], ['O', 'the first train'], ['R', 'that arrived'], ['C', 'and'], ['V', 'fell'], ['O', 'asleep.']],
        es: 'Me subí al primer tren que llegó y me quedé dormido.',
        note: 'Hechos principales seguidos → past simple. "Fall asleep" = quedarse dormido.',
        vocab: [['get on', 'subirse a (un tren, un bus)'], ['fall asleep', 'quedarse dormido']] },
      { parts: [['R', 'When I woke up,'], ['S', 'the train'], ['V', 'was crossing'], ['O', 'a bridge'], ['C', 'and'], ['S', 'I'], ['V', 'could see'], ['O', 'the sea.']],
        es: 'Cuando me desperté, el tren estaba cruzando un puente y podía ver el mar.',
        note: 'Acción corta (woke up) + lo que estaba pasando en ese momento (was crossing).',
        vocab: [['wake up (woke, woken)', 'despertarse'], ['bridge', 'puente']] },
      { parts: [['S', 'I'], ['V', 'realised'], ['R', 'that I had taken the train to Glasgow.']],
        es: 'Me di cuenta de que había cogido el tren a Glasgow.',
        note: '"Had taken" es anterior a "realised".',
        vocab: [['realise', 'darse cuenta']] },
      { parts: [['S', 'I'], ['V', 'arrived'], ['X', 'two hours late,'], ['C', 'but'], ['S', 'they'], ['V', 'gave'], ['O', 'me'], ['O', 'the job'], ['X', 'anyway:'], ['S', 'the manager'], ['V', 'said'], ['R', 'she had once done exactly the same thing.']],
        es: 'Llegué dos horas tarde, pero me dieron el trabajo igualmente: la directora dijo que una vez había hecho exactamente lo mismo.',
        note: '"Anyway" = de todos modos. Fíjate en la relativa escondida sin "that": "said (that) she had once done…".',
        vocab: [['anyway', 'de todos modos'], ['manager', 'director/a, jefe/a'], ['once', 'una vez']] },
    ],
    questions: [
      { q: 'Why was the writer going to Edinburgh?', opts: ['To visit a friend.', 'For a job interview.', 'To see the sea.', 'For a holiday.'], a: 1 },
      { q: 'Why did the writer take the wrong train?', opts: ['The ticket was wrong.', 'He did not notice the platform had changed.', 'The train was late.', 'He arrived late at the station.'], a: 1 },
      { q: 'Why did the manager give him the job?', opts: ['He had excellent notes.', 'Nobody else applied.', 'She had made the same mistake once.', 'He apologised.'], a: 2 },
    ],
  },
};
