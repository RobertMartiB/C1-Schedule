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

  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "The town that saved its cinema", text: "Ten years ago, the small cinema in Bridgeford was about to [1] down. It was an old building [2] needed expensive repairs, and fewer and fewer people were going. Then a group of neighbours decided to [3] action. They [4] money by organising concerts and markets, and within a year they had enough to repair the roof. Today the cinema is run by volunteers, most of whom had no previous [5] of running a business. It shows a [6] range of films, from new releases to old classics. Tickets are cheap, and the cinema has become a [7] place for families. \"It's more than a cinema,\" says one volunteer. \"It's [8] the whole town meets.\"" },
    2: { title: "A letter from my grandmother", text: "Last week I found a letter [9] my grandmother wrote in 1965. The woman to [10] it was addressed was her best friend, Elena, [11] had moved to Argentina. In the letter, my grandmother describes the village [12] she grew up and the house [13] roof was always leaking. She also mentions the day [14] she met my grandfather, at a dance in the main square. Elena, [15] letters are also in a box in our attic, wrote back every month for forty years. Reading them, I realised how little I knew about the people [16] I thought I knew best." },
    3: { title: "The volunteers behind the festival", text: "Every summer, our town organises a music festival which is completely [17] on volunteers. People [18] give up their weekends to help, and the [19] work all year to find the right bands. The festival has grown [20] since it started. Many of the [21] are local, and the event attracts thousands of [22] from all over the country. It has a huge [23] impact on the area, and the atmosphere is always [24]." },
  },
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
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["close", "end", "finish", "stop"], a: 0, why: "Close down = cerrar definitivamente un negocio." },
    { part: 1, type: 'mcq', opts: ["which", "what", "who", "whose"], a: 0, why: "Relativo para una cosa (a building): which." },
    { part: 1, type: 'mcq', opts: ["take", "make", "do", "give"], a: 0, why: "Take action = pasar a la acción." },
    { part: 1, type: 'mcq', opts: ["raised", "rose", "grew", "lifted"], a: 0, why: "Raise money = recaudar dinero. Rise no lleva complemento." },
    { part: 1, type: 'mcq', opts: ["experience", "skill", "practice", "habit"], a: 0, why: "Experience of doing something = experiencia en hacer algo." },
    { part: 1, type: 'mcq', opts: ["wide", "long", "big", "tall"], a: 0, why: "A wide range of = una gran variedad de." },
    { part: 1, type: 'mcq', opts: ["favourite", "preferred", "chosen", "liked"], a: 0, why: "A favourite place = un lugar preferido. Preferred no va delante de «place» con este sentido." },
    { part: 1, type: 'mcq', opts: ["where", "which", "what", "that"], a: 0, why: "Where = el lugar donde. Which necesitaría una preposición (in which)." },
    { part: 2, type: 'gap', a: ["that", "which"], why: "Relativo de cosa en una definición: that o which." },
    { part: 2, type: 'gap', a: ["whom"], why: "Detrás de preposición, para personas: to whom." },
    { part: 2, type: 'gap', a: ["who"], why: "Relativo de persona tras coma: who (nunca that)." },
    { part: 2, type: 'gap', a: ["where"], why: "El pueblo donde creció: where." },
    { part: 2, type: 'gap', a: ["whose"], why: "La casa cuyo tejado: whose." },
    { part: 2, type: 'gap', a: ["when", "that"], why: "El día en que: when (o that)." },
    { part: 2, type: 'gap', a: ["whose"], why: "Elena, cuyas cartas: whose." },
    { part: 2, type: 'gap', a: ["that", "who", "whom"], why: "Relativo de persona como complemento: that, who o whom." },
    { part: 3, type: 'gap', stem: "DEPEND", a: ["dependent"], why: "Adjetivo: dependent on (depender de)." },
    { part: 3, type: 'gap', stem: "WILL", a: ["willingly"], why: "Adverbio que modifica a «give up»: willingly (de buena gana)." },
    { part: 3, type: 'gap', stem: "ORGANISE", a: ["organisers", "organizers"], why: "Personas en plural: organisers." },
    { part: 3, type: 'gap', stem: "CONSIDER", a: ["considerably"], why: "Adverbio de cantidad con «grown»: considerably." },
    { part: 3, type: 'gap', stem: "PERFORM", a: ["performers"], why: "Personas que actúan, en plural: performers." },
    { part: 3, type: 'gap', stem: "VISIT", a: ["visitors"], why: "Thousands of + plural: visitors." },
    { part: 3, type: 'gap', stem: "ECONOMY", a: ["economic"], why: "Adjetivo delante de «impact»: economic." },
    { part: 3, type: 'gap', stem: "FRIEND", a: ["friendly"], why: "Adjetivo después de «is»: friendly." },
    { part: 4, type: 'gap', s1: "I met a man. His dog had won a prize.", key: "WHOSE", s2: "I met a man ___ won a prize.", a: ["whose dog had"], why: "Whose sustituye a «his»: cuyo perro." },
    { part: 4, type: 'gap', s1: "That's the hotel. We stayed there last summer.", key: "WHERE", s2: "That's the hotel ___ last summer.", a: ["where we stayed"], why: "Where sustituye a «there»." },
    { part: 4, type: 'gap', s1: "The woman is my aunt. She is talking to Tom.", key: "WHO", s2: "The woman ___ Tom is my aunt.", a: ["who is talking to", "who is speaking to"], why: "La relativa va pegada a «the woman»." },
    { part: 4, type: 'gap', s1: "I don't remember the year. We moved to Madrid then.", key: "WHEN", s2: "I don't remember the year ___ to Madrid.", a: ["when we moved"], why: "When sustituye a «then»." },
    { part: 4, type: 'gap', s1: "Paris is the city. I'd most like to visit it.", key: "WHICH", s2: "Paris is the city ___ most like to visit.", a: ["which i would", "which id"], why: "Which sustituye a «it»: no se repite el pronombre." },
    { part: 4, type: 'gap', s1: "The film was boring. We saw it last night.", key: "THAT", s2: "The film ___ last night was boring.", a: ["that we saw"], why: "That sustituye a «it»; la relativa va detrás de «the film»." },
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
