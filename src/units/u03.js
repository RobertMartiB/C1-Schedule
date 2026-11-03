// Unidad 3 · Present perfect o past simple
UNITS.u03 = {
  theory: [
    {
      h: 'La pregunta clave: ¿el momento está terminado?',
      html: `<p>Los dos tiempos hablan de cosas que pasaron, pero miran el pasado de forma distinta:</p>
      <div class="formula">Past simple = pasado cerrado · Present perfect = pasado conectado con ahora</div>
      <div class="ex"><span class="s">I</span> <span class="v">lost</span> <span class="o">my keys</span> <span class="x">yesterday</span>. → Pasó ayer. Fin de la historia.<br>
      <span class="s">I</span> <span class="v">have lost</span> <span class="o">my keys</span>. → Las he perdido y <b>ahora</b> no las tengo.</div>
      <p>Si dices <b>cuándo</b> pasó (yesterday, in 2019, last week, two days ago, when I was a child), el momento está cerrado: <b>past simple</b>.</p>`,
    },
    {
      h: 'Cómo se forman',
      html: `<table class="t">
        <tr><th></th><th>Past simple</th><th>Present perfect</th></tr>
        <tr><td>+</td><td>She <b>worked</b> / <b>went</b></td><td>She <b>has worked</b> / <b>has gone</b></td></tr>
        <tr><td>−</td><td>She <b>didn't work</b></td><td>She <b>hasn't worked</b></td></tr>
        <tr><td>?</td><td><b>Did</b> she <b>work</b>?</td><td><b>Has</b> she <b>worked</b>?</td></tr>
      </table>
      <p>El present perfect es <b>have/has + participio</b>. Los verbos irregulares tienen participio propio: <i>go → went → <b>gone</b></i>, <i>see → saw → <b>seen</b></i>, <i>write → wrote → <b>written</b></i>.</p>`,
    },
    {
      h: 'Cuándo se usa el present perfect',
      html: `<ul>
        <li><b>Experiencias</b> a lo largo de tu vida, sin decir cuándo: <i>I'<b>ve been</b> to Japan twice.</i> · <i>Have you ever <b>tried</b> sushi?</i></li>
        <li><b>Algo que empezó en el pasado y sigue</b>, con <i>for</i> y <i>since</i>: <i>We'<b>ve lived</b> here for ten years.</i> (y seguimos aquí)</li>
        <li><b>Un resultado que importa ahora</b>: <i>Someone <b>has broken</b> the window.</i> (está rota)</li>
        <li><b>Un periodo que aún no ha terminado</b>: <i>today, this week, this year</i>: <i>I'<b>ve drunk</b> three coffees today.</i></li>
        <li>Con <b>just, already, yet</b>: <i>She'<b>s just left</b>.</i> · <i>Have you finished <b>yet</b>?</i> · <i>I'<b>ve already</b> paid.</i></li>
      </ul>`,
    },
    {
      h: 'Palabras que te dan la pista',
      html: `<table class="t">
        <tr><th>Past simple</th><th>Present perfect</th></tr>
        <tr><td>yesterday · last night/week/year · in 2019 · ago · when…? · then</td><td>ever · never · just · already · yet · so far · since · for (hasta ahora) · recently</td></tr>
      </table>
      <p><b>Ojo con «ago»:</b> siempre va con past simple. <i>I met her two years <u>ago</u></i> ✓ · <s>I have met her two years ago</s> ✗</p>
      <p><b>Ojo con «for»:</b> depende de si la situación sigue. <i>I <b>lived</b> in Paris for two years</i> (ya no vivo allí) · <i>I'<b>ve lived</b> in Paris for two years</i> (sigo viviendo allí).</p>`,
    },
    {
      h: 'En los textos: noticias e historias',
      html: `<p>Las noticias suelen empezar en present perfect (lo nuevo, lo que importa ahora) y luego cuentan los detalles en past simple:</p>
      <div class="ex">A local student <span class="v">has won</span> a national science prize. She <span class="v">designed</span> a cheap water filter and <span class="v">presented</span> it in Madrid last month.</div>
      <p>Cuando leas, fíjate en este cambio: el present perfect anuncia, el past simple narra.</p>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>I have seen him yesterday.</s> → <b>I saw him yesterday.</b> En español decimos «lo he visto hoy/ayer» con más libertad; en inglés, si hay un momento terminado, past simple.</li>
        <li><s>I live here since 2015.</s> → <b>I've lived here since 2015.</b> «Vivo aquí desde…» se dice con present perfect.</li>
        <li><s>How long are you here?</s> → <b>How long have you been here?</b></li>
        <li><s>Did you ever go to London?</s> → <b>Have you ever been to London?</b> Experiencia en tu vida → present perfect, y con <i>been to</i>.</li>
      </ul>`,
    },
  ],
  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "My first year abroad", text: "It's been a year since I moved to Dublin, and I've already [1] a lot of new friends. At first it was difficult to [2] used to the weather, but now I hardly notice the rain. I've [3] jobs twice, and the one I have now [4] quite well. I've also [5] up running, and last month I [6] part in my first half marathon. My family is far away, but we have never [7] touch: we talk every Sunday. Moving here is probably the best thing I've ever [8]." },
    2: { title: "Have you ever wondered…?", text: "[9] you ever wondered why English has two past tenses? The present perfect connects the past with the present. We use it for experiences: \"I have [10] been to Japan\" means that at no time in my life have I gone there. We also use it for situations that started in the past and continue now: \"I've lived here [11] three years\" or \"I've lived here [12] 2019\". But if we say exactly when something happened, we need the past simple: \"I visited Japan two years [13].\" A common mistake among Spanish speakers is to say \"I have seen him yesterday\". This is wrong [14] yesterday is a finished time. Words like already and just are also typical: \"I've [15] finished, a moment ago.\" And to ask about duration, we say: \"[16] long have you known her?\"" },
    3: { title: "A life in pictures", text: "The photographer Ana Ruiz has had a long and [17] career. Her [18] about travel began when she was a child, and since then she has visited more than sixty countries. Her images have appeared in [19] magazines. Her most famous [20] opened in 2015 and received [21] reviews. Critics have praised the [22] of her work. Recently she has become [23] interested in climate change, and she has never been afraid of showing the [24] she has seen." },
  },
  exercises: [
    { type: 'mcq', q: 'I ___ my phone. I can\'t find it anywhere.', opts: ['have lost', 'lost', 'lose', 'was losing'], a: 0, why: 'El resultado importa ahora (no lo encuentro): present perfect.' },
    { type: 'mcq', q: 'We ___ to Italy last summer.', opts: ['went', 'have gone', 'have been', 'go'], a: 0, why: '"Last summer" es un momento terminado → past simple.' },
    { type: 'mcq', q: 'She ___ in this company since 2020.', opts: ['has worked', 'worked', 'works', 'is working'], a: 0, why: 'Empezó en 2020 y sigue → present perfect con "since".' },
    { type: 'mcq', q: '___ you ever ___ a horse?', opts: ['Have / ridden', 'Did / ride', 'Have / rode', 'Did / ridden'], a: 0, why: 'Experiencia en tu vida, con "ever" → present perfect: have + participio (ride → rode → ridden).' },
    { type: 'mcq', q: 'They got married three years ___.', opts: ['ago', 'since', 'for', 'before'], a: 0, why: '"Ago" = hace (tiempo). Siempre con past simple.' },
    { type: 'mcq', q: 'I ___ three coffees today, so no more for me!', opts: ['\'ve had', 'had', 'have', 'was having'], a: 0, why: '"Today" no ha terminado → present perfect.' },
    { type: 'gap', q: 'Have you finished your homework ___?', a: ['yet'], why: '"Yet" va al final, en preguntas y negativas: ¿ya…? / todavía no.' },
    { type: 'gap', q: 'I\'ve known Marta ___ we were at school together.', a: ['since'], why: '"Since" + punto de inicio (también una oración: since we were at school).' },
    { type: 'gap', q: 'He has lived in Berlin ___ six years.', a: ['for'], why: '"For" + duración.' },
    { type: 'gap', q: 'When ___ you start learning English?', a: ['did'], why: 'Pregunta con "when" → momento concreto → past simple.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal.', parts: [['S', 'The number of people'], ['R', 'who work from home'], ['V', 'has doubled'], ['X', 'since 2019.']], why: '"Work" es de la relativa. Esqueleto: "The number has doubled". Ojo: el sujeto es "the number" (singular), por eso "has".' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['I', 'have', 'never', 'been', 'to', 'Ireland'], a: 'I have never been to Ireland', why: '"Never" va entre have y el participio.' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["made", "done", "got", "had"], a: 0, why: "Make friends = hacer amigos." },
    { part: 1, type: 'mcq', opts: ["get", "be", "make", "have"], a: 0, why: "Get used to = acostumbrarse a." },
    { part: 1, type: 'mcq', opts: ["changed", "moved", "turned", "exchanged"], a: 0, why: "Change jobs = cambiar de trabajo." },
    { part: 1, type: 'mcq', opts: ["pays", "earns", "wins", "gains"], a: 0, why: "Un trabajo «pays well». Earn lo dice la persona: I earn." },
    { part: 1, type: 'mcq', opts: ["taken", "made", "got", "put"], a: 0, why: "Take up = empezar una afición." },
    { part: 1, type: 'mcq', opts: ["took", "had", "made", "did"], a: 0, why: "Take part in. Va en past simple porque dice cuándo: last month." },
    { part: 1, type: 'mcq', opts: ["lost", "missed", "dropped", "failed"], a: 0, why: "Lose touch = perder el contacto." },
    { part: 1, type: 'mcq', opts: ["done", "made", "had", "got"], a: 0, why: "The best thing I have ever done." },
    { part: 2, type: 'gap', a: ["have"], why: "Pregunta en present perfect: have you ever…?" },
    { part: 2, type: 'gap', a: ["never"], why: "Never = nunca en toda mi vida." },
    { part: 2, type: 'gap', a: ["for"], why: "For + periodo de tiempo (three years)." },
    { part: 2, type: 'gap', a: ["since"], why: "Since + punto de inicio (2019)." },
    { part: 2, type: 'gap', a: ["ago"], why: "Two years ago = hace dos años, con past simple." },
    { part: 2, type: 'gap', a: ["because", "as", "since"], why: "Conector de causa seguido de frase." },
    { part: 2, type: 'gap', a: ["just"], why: "Just = hace un momento." },
    { part: 2, type: 'gap', a: ["how"], why: "How long = cuánto tiempo." },
    { part: 3, type: 'gap', stem: "REMARK", a: ["remarkable"], why: "Adjetivo coordinado con «long»: remarkable." },
    { part: 3, type: 'gap', stem: "EXCITE", a: ["excitement"], why: "Sustantivo sujeto: excitement." },
    { part: 3, type: 'gap', stem: "NUMBER", a: ["numerous"], why: "Adjetivo = muchas: numerous magazines." },
    { part: 3, type: 'gap', stem: "EXHIBIT", a: ["exhibition"], why: "Sustantivo = exposición: exhibition." },
    { part: 3, type: 'gap', stem: "ENTHUSIASM", a: ["enthusiastic"], why: "Adjetivo delante de «reviews»: enthusiastic." },
    { part: 3, type: 'gap', stem: "HONEST", a: ["honesty"], why: "Sustantivo tras «the»: honesty." },
    { part: 3, type: 'gap', stem: "INCREASE", a: ["increasingly"], why: "Adverbio delante del adjetivo: increasingly interested." },
    { part: 3, type: 'gap', stem: "POOR", a: ["poverty"], why: "Sustantivo = pobreza: poverty." },
    { part: 4, type: 'gap', s1: "I started working here three years ago.", key: "FOR", s2: "I ___ three years.", a: ["have worked here for", "have been working here for", "ve worked here for", "ve been working here for"], why: "Present perfect + for para algo que sigue ahora." },
    { part: 4, type: 'gap', s1: "This is my first time in London.", key: "BEEN", s2: "I ___ London before.", a: ["have never been to", "have not been to", "havent been to", "ve never been to"], why: "Never been to = no he estado nunca." },
    { part: 4, type: 'gap', s1: "When did you buy your car?", key: "HAD", s2: "How long ___ your car?", a: ["have you had"], why: "How long + present perfect de «have»." },
    { part: 4, type: 'gap', s1: "I last saw Peter in May.", key: "SEEN", s2: "I ___ May.", a: ["have not seen peter since", "havent seen peter since", "ve not seen peter since"], why: "Not … since + punto de inicio." },
    { part: 4, type: 'gap', s1: "She went to Rome and she's still there.", key: "GONE", s2: "She ___ Rome.", a: ["has gone to"], why: "Has gone to = se ha ido y sigue allí. Has been to = fue y volvió." },
    { part: 4, type: 'gap', s1: "It's two years since we last met.", key: "MET", s2: "We ___ two years.", a: ["have not met for", "havent met for", "have not met in", "havent met in"], why: "Negativo + for: no nos vemos desde hace dos años." },
  ],
  reading: {
    title: 'The village that went offline',
    level: 'B1+',
    sentences: [
      { parts: [['S', 'A small village in the north of Scotland'], ['V', 'has decided'], ['O', 'to switch off its public Wi-Fi every Sunday.']],
        es: 'Un pueblo pequeño del norte de Escocia ha decidido apagar su wifi público todos los domingos.',
        note: 'Empieza en present perfect: es la noticia, lo nuevo. El sujeto es largo ("A small village in the north of Scotland") y el verbo es "has decided".',
        vocab: [['switch off', 'apagar'], ['public', 'público']] },
      { parts: [['S', 'The idea'], ['V', 'came'], ['X', 'from a group of parents'], ['R', 'who were worried about their children\'s screen time.']],
        es: 'La idea surgió de un grupo de padres a los que les preocupaba el tiempo de pantalla de sus hijos.',
        note: 'Ahora pasa a past simple ("came") para contar los detalles. "Who were worried…" es una relativa sobre los padres.',
        vocab: [['be worried about', 'estar preocupado por'], ['screen time', 'tiempo de pantalla']] },
      { parts: [['X', 'Last spring'], ['S', 'they'], ['V', 'organised'], ['O', 'a meeting'], ['C', 'and'], ['S', 'most of the village'], ['V', 'voted'], ['X', 'in favour.']],
        es: 'La primavera pasada organizaron una reunión y la mayor parte del pueblo votó a favor.',
        note: '"Last spring" = momento terminado → past simple. Dos esqueletos unidos por "and".',
        vocab: [['vote in favour', 'votar a favor'], ['meeting', 'reunión']] },
      { parts: [['X', 'Since then,'], ['S', 'the local café'], ['V', 'has started'], ['O', 'a board games afternoon'], ['C', 'and'], ['S', 'the library'], ['V', 'has seen'], ['O', 'more visitors than ever.']],
        es: 'Desde entonces, la cafetería del pueblo ha empezado una tarde de juegos de mesa y la biblioteca ha tenido más visitantes que nunca.',
        note: '"Since then" conecta con el presente → present perfect. Fíjate en "has seen more visitors": en inglés, un lugar puede "ver" visitantes.',
        vocab: [['since then', 'desde entonces'], ['board game', 'juego de mesa'], ['than ever', 'que nunca']] },
      { parts: [['S', 'Not everyone'], ['V', 'has been'], ['O', 'happy,'], ['C', 'however.']],
        es: 'Sin embargo, no todo el mundo ha estado contento.',
        note: '"However" puede ir al final de la frase. Esqueleto: "Not everyone has been happy".',
        vocab: [['however', 'sin embargo'], ['not everyone', 'no todo el mundo']] },
      { parts: [['S', 'Some teenagers'], ['V', 'complained'], ['R', 'that they had nothing to do,'], ['C', 'and'], ['S', 'two of them'], ['V', 'walked'], ['O', 'five kilometres'], ['X', 'to the next town'], ['X', 'to find a signal.']],
        es: 'Algunos adolescentes se quejaron de que no tenían nada que hacer, y dos de ellos caminaron cinco kilómetros hasta el siguiente pueblo para encontrar cobertura.',
        note: 'Dos esqueletos: "Some teenagers complained…" y "two of them walked…". "To find a signal" explica para qué.',
        vocab: [['complain', 'quejarse'], ['signal', 'señal, cobertura'], ['the next town', 'el pueblo de al lado']] },
      { parts: [['C', 'But'], ['X', 'so far'], ['S', 'the experiment'], ['V', 'has worked'], ['C', 'and'], ['S', 'other villages'], ['V', 'have asked'], ['R', 'how they can do the same.']],
        es: 'Pero, hasta ahora, el experimento ha funcionado y otros pueblos han preguntado cómo pueden hacer lo mismo.',
        note: '"So far" (hasta ahora) es una pista clara de present perfect.',
        vocab: [['so far', 'hasta ahora'], ['the same', 'lo mismo']] },
    ],
    questions: [
      { q: 'What has the village decided to do?', opts: ['Ban mobile phones.', 'Turn off public Wi-Fi on Sundays.', 'Close the library on Sundays.', 'Build a new café.'], a: 1 },
      { q: 'Who suggested the idea?', opts: ['The teenagers.', 'The library staff.', 'Some worried parents.', 'The owner of the café.'], a: 2 },
      { q: 'How have other villages reacted?', opts: ['They have criticised it.', 'They have asked for information.', 'They have ignored it.', 'They have copied it already.'], a: 1 },
    ],
  },
};
