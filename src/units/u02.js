// Unidad 2 · Oraciones de relativo
UNITS.u02 = {
  theory: [
    {
      h: 'Para qué sirven',
      html: `<p>Una oración de relativo es una pieza que <b>dice algo más de un nombre</b>: qué persona, qué cosa, qué lugar. Es la pieza que más alarga las frases de los textos, así que reconocerla es la mitad del trabajo al leer.</p>
      <div class="ex">I met a woman. <i>She</i> speaks six languages.<br>→ I met a woman <span class="r">who speaks six languages</span>.</div>`,
    },
    {
      h: 'Qué pronombre usar',
      html: `<table class="t">
        <tr><th>Pronombre</th><th>Para</th><th>Ejemplo</th></tr>
        <tr><td><b>who</b></td><td>personas</td><td>the teacher <u>who helped me</u></td></tr>
        <tr><td><b>which</b></td><td>cosas y animales</td><td>the phone <u>which I bought</u></td></tr>
        <tr><td><b>that</b></td><td>personas o cosas (más informal)</td><td>the film <u>that won the prize</u></td></tr>
        <tr><td><b>whose</b></td><td>posesión («cuyo»)</td><td>the man <u>whose car was stolen</u></td></tr>
        <tr><td><b>where</b></td><td>lugares</td><td>the town <u>where I grew up</u></td></tr>
        <tr><td><b>when</b></td><td>momentos</td><td>the day <u>when we met</u></td></tr>
      </table>
      <p>En español casi siempre decimos «que». En inglés hay que elegir: <b>personas → who</b>, <b>cosas → which</b>, y <b>that</b> vale para las dos.</p>`,
    },
    {
      h: 'Con comas o sin comas',
      html: `<p>Hay dos tipos y cambian el significado:</p>
      <div class="ex"><b>Sin comas (especificativa):</b> My brother <span class="r">who lives in London</span> is a nurse.<br>→ Tengo varios hermanos; hablo del que vive en Londres.</div>
      <div class="ex"><b>Con comas (explicativa):</b> My brother, <span class="r">who lives in London</span>, is a nurse.<br>→ Solo tengo un hermano; de paso digo que vive en Londres.</div>
      <p>Reglas de las de <b>comas</b>: no se puede usar <b>that</b> y el pronombre <b>nunca</b> se omite.</p>
      <div class="ex">My car, <s>that</s> <b>which</b> is ten years old, still works perfectly.</div>`,
    },
    {
      h: 'Cuándo desaparece el pronombre',
      html: `<p>Esto es lo que más confunde al leer. Si el pronombre es el <b>objeto</b> (detrás viene otro sujeto), en las relativas sin comas se puede <b>quitar</b>, y los nativos lo quitan casi siempre:</p>
      <div class="ex">The book <span class="r">(that) I read last summer</span> was amazing.<br>The people <span class="r">(who) we met in Rome</span> were very friendly.</div>
      <p><b>Pista para leer:</b> si ves <b>nombre + sujeto + verbo</b> seguidos (<i>the book I read</i>, <i>the man she married</i>), ahí hay una relativa escondida. Mentalmente, añade «que».</p>
      <div class="ex">The house <span class="r">they bought</span> <span class="v">needs</span> a lot of work. → La casa <i>que</i> compraron necesita mucho trabajo.</div>
      <p>Si el pronombre es el <b>sujeto</b> de la relativa (detrás viene directamente el verbo), <b>no</b> se puede quitar: <i>the man <u>who lives</u> here</i>.</p>`,
    },
    {
      h: 'Relativas reducidas (-ing / -ed)',
      html: `<p>En los textos verás a menudo relativas «comprimidas» sin pronombre ni verbo conjugado:</p>
      <div class="ex">the woman <span class="r">sitting by the window</span> = the woman who is sitting by the window<br>
      a novel <span class="r">written in 1850</span> = a novel which was written in 1850<br>
      products <span class="r">made in China</span> = products which are made in China</div>
      <p><b>-ing</b> = sentido activo (la persona hace algo). <b>-ed / participio</b> = sentido pasivo (a la cosa le hacen algo). Recuerda de la unidad 1: estas formas <b>no</b> son el verbo principal.</p>`,
    },
    {
      h: 'Preposición al final',
      html: `<p>En inglés normal la preposición se queda al final de la relativa. Es muy frecuente y al principio despista:</p>
      <div class="ex">the company <span class="r">my sister works for</span> → la empresa <i>para la que</i> trabaja mi hermana<br>
      the person <span class="r">I was talking to</span> → la persona <i>con la que</i> hablaba</div>
      <p>La versión formal pone la preposición delante y obliga a usar <b>whom</b> o <b>which</b>: <i>the person <u>to whom</u> I was talking</i>.</p>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>The book that I read it was great.</s> → <b>The book that I read was great.</b> No se repite el objeto («que lo leí»).</li>
        <li><s>The man which lives here…</s> → <b>The man who lives here…</b> Personas con <i>who</i>.</li>
        <li><s>My mother, that is a teacher, …</s> → <b>My mother, who is a teacher, …</b> Con comas no hay <i>that</i>.</li>
        <li><s>The city where I live in…</s> → <b>The city where I live</b> o <b>the city I live in</b>. No las dos cosas.</li>
        <li><s>A friend who his father is a pilot</s> → <b>A friend whose father is a pilot</b>.</li>
      </ul>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: 'The woman ___ lives upstairs is a musician.', opts: ['who', 'which', 'whose', 'where'], a: 0, why: 'Persona y sujeto de la relativa → who (o that).' },
    { type: 'mcq', q: 'This is the café ___ we first met.', opts: ['where', 'which', 'who', 'whose'], a: 0, why: 'Lugar en el que pasa algo → where.' },
    { type: 'mcq', q: 'I have a friend ___ brother plays for Barcelona.', opts: ['whose', 'who', 'who\'s', 'which'], a: 0, why: 'Posesión (su hermano) → whose. "Who\'s" es "who is".' },
    { type: 'mcq', q: 'My grandmother, ___ is 90, still drives.', opts: ['who', 'that', 'which', '— (nada)'], a: 0, why: 'Relativa con comas: no se puede usar "that" ni quitar el pronombre.' },
    { type: 'mcq', q: '¿En qué frase se puede quitar el pronombre?', opts: ['The film that we watched was boring.', 'The film that won the prize was boring.', 'The man who called you is here.', 'My car, which is red, is outside.'], a: 0, why: 'Solo cuando el pronombre es el objeto (detrás viene otro sujeto: "we"). → The film we watched was boring.' },
    { type: 'mcq', q: '¿Qué significa?<br><i>The flat they rented was tiny.</i>', opts: ['El piso que alquilaron era diminuto.', 'Alquilaron el piso y era diminuto.', 'Ellos alquilaron un piso diminuto.', 'El piso alquiló a ellos.'], a: 0, why: 'Nombre + sujeto + verbo ("the flat they rented") = relativa con el pronombre omitido.' },
    { type: 'mcq', q: '¿Cuál es el verbo principal?<br><i>The students taking the exam tomorrow must bring their ID.</i>', opts: ['must bring', 'taking', 'bring', 'take'], a: 0, why: '"Taking the exam tomorrow" es una relativa reducida (= who are taking). El principal es "must bring".' },
    { type: 'mcq', q: 'Elige la frase correcta.', opts: ['The book that I lent you was mine.', 'The book that I lent you it was mine.', 'The book who I lent you was mine.', 'The book what I lent you was mine.'], a: 0, why: 'No se repite el objeto ("it"), y para cosas: that / which. "What" no es relativo después de un nombre.' },
    { type: 'gap', q: 'That\'s the girl ___ dog bit me.', a: ['whose'], why: 'El perro de la chica → whose.' },
    { type: 'gap', q: 'The bus ___ goes to the airport leaves every hour.', a: ['which', 'that'], why: 'Cosa y sujeto de la relativa → which / that.' },
    { type: 'gap', q: 'I\'ll never forget the day ___ I passed my driving test.', a: ['when', 'that'], why: 'Momento → when (o that, más informal).' },
    { type: 'gap', q: 'Is this the person you were talking ___?', a: ['to', 'about', 'with'], why: 'La preposición se queda al final: talk to / talk about / talk with.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal.', parts: [['S', 'The houses'], ['R', 'built after the war'], ['V', 'were'], ['O', 'quite small.']], why: '"Built after the war" es una relativa reducida pasiva (= which were built). El principal es "were".' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal.', parts: [['S', 'The restaurant'], ['R', 'my parents recommended'], ['V', 'has closed'], ['X', 'down.']], why: '"My parents recommended" es una relativa sin pronombre (= that my parents recommended). El principal: "has closed".' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['The', 'man', 'whose', 'wallet', 'I', 'found', 'gave', 'me', 'a', 'reward'], a: 'The man whose wallet I found gave me a reward', why: 'Esqueleto: The man gave me a reward. La relativa "whose wallet I found" va pegada a "the man".' },
  ],

  reading: {
    title: 'The library that never closes',
    level: 'B1+',
    sentences: [
      { parts: [['X', 'In a small village in Wales'], ['V', 'there is'], ['S', 'a red telephone box'], ['R', 'that no longer has a telephone.']],
        es: 'En un pueblo pequeño de Gales hay una cabina de teléfono roja que ya no tiene teléfono.',
        note: '"There is" + sujeto: el esqueleto es "there is a red telephone box". La relativa con "that" dice qué tiene de especial.',
        vocab: [['telephone box', 'cabina de teléfono'], ['no longer', 'ya no']] },
      { parts: [['C', 'Instead,'], ['S', 'the shelves'], ['R', 'people have built inside it'], ['V', 'are'], ['O', 'full of books'], ['R', 'which anyone can borrow for free.']],
        es: 'En su lugar, las estanterías que la gente ha construido dentro están llenas de libros que cualquiera puede llevarse prestados gratis.',
        note: 'Relativa escondida: "the shelves people have built" = las estanterías QUE la gente ha construido. Esqueleto: "the shelves are full of books".',
        vocab: [['instead', 'en su lugar'], ['shelf / shelves', 'estante(s)'], ['borrow', 'tomar prestado'], ['for free', 'gratis']] },
      { parts: [['S', 'The idea'], ['V', 'came'], ['X', 'from a retired teacher'], ['R', 'whose house is next to the box.']],
        es: 'La idea fue de una profesora jubilada cuya casa está al lado de la cabina.',
        note: '"Whose house" = cuya casa. Esqueleto corto: "The idea came from a retired teacher".',
        vocab: [['retired', 'jubilado/a'], ['next to', 'al lado de']] },
      { parts: [['S', 'She'], ['V', 'wanted'], ['O', 'to create a place'], ['R', 'where neighbours could share the books'], ['R', 'they had already read.']],
        es: 'Quería crear un lugar donde los vecinos pudieran compartir los libros que ya habían leído.',
        note: 'Dos relativas seguidas: "where neighbours could share the books" y "(that) they had already read". Fíjate en "the books they had read": nombre + sujeto + verbo.',
        vocab: [['create', 'crear'], ['neighbour', 'vecino/a'], ['share', 'compartir']] },
      { parts: [['X', 'Today'], ['S', 'the box,'], ['R', 'which is open day and night,'], ['V', 'contains'], ['O', 'more than three hundred books.']],
        es: 'Hoy la cabina, que está abierta día y noche, contiene más de trescientos libros.',
        note: 'Relativa con comas: es información extra. Tápala y queda "the box contains more than three hundred books".',
        vocab: [['day and night', 'día y noche'], ['contain', 'contener']] },
      { parts: [['S', 'Visitors'], ['R', 'passing through the village'], ['X', 'often'], ['V', 'stop'], ['O', 'to take a photo'], ['C', 'or'], ['V', 'leave'], ['O', 'a book of their own.']],
        es: 'Los visitantes que pasan por el pueblo a menudo se paran a hacer una foto o a dejar un libro suyo.',
        note: '"Passing through the village" es una relativa reducida (= who are passing). Esqueleto: "Visitors stop… or leave…".',
        vocab: [['pass through', 'pasar por'], ['leave', 'dejar'], ['of their own', 'suyo propio']] },
      { parts: [['S', 'The teacher'], ['V', 'says'], ['R', 'that the books people choose to leave tell you a lot about the village.']],
        es: 'La profesora dice que los libros que la gente decide dejar te cuentan mucho sobre el pueblo.',
        note: 'Difícil: dentro de "that…" hay otra relativa escondida ("the books people choose to leave" = los libros QUE la gente decide dejar), y su verbo es "tell". Esqueleto de la frase entera: "The teacher says…". Esqueleto de lo que dice: "the books tell you a lot".',
        vocab: [['choose', 'elegir, decidir'], ['a lot about', 'mucho sobre']] },
    ],
    questions: [
      { q: 'What is special about the telephone box?', opts: ['It is the oldest in Wales.', 'It is used as a small library.', 'It still has a working telephone.', 'It is only open during the day.'], a: 1 },
      { q: 'Who had the idea?', opts: ['A group of visitors.', 'The local council.', 'A retired teacher who lives next to it.', 'A telephone company.'], a: 2 },
      { q: 'According to the teacher, the books people leave…', opts: ['are usually very old.', 'say a lot about the village.', 'are mostly for children.', 'are sold to visitors.'], a: 1 },
    ],
  },
};
