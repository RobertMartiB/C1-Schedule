// Japonés · Unidad 3 · Hiragana ま や ら わ ん
UNITS.j03 = {
  theory: [
    {
      h: 'La fila M: ま み む め も',
      html: `${kanaTable([[['ま', 'ma'], ['み', 'mi'], ['む', 'mu'], ['め', 'me'], ['も', 'mo']]])}
      <ul>
        <li><b>ま (ma)</b>: como ほ sin el palo de la izquierda: una <i>ma</i>-ma con dos brazos.</li>
        <li><b>み (mi)</b>: un número 21 escrito con prisa.</li>
        <li><b>む (mu)</b>: una vaca de perfil haciendo «muuu».</li>
        <li><b>め (me)</b>: un ojo, y «ojo» en japonés es justamente め. Es como ぬ sin el lazo final.</li>
        <li><b>も (mo)</b>: un anzuelo con dos cebos: más («<i>mo</i>-re»), también.</li>
      </ul>`,
    },
    {
      h: 'Las filas Y y W: solo cinco sílabas',
      html: `${kanaTable([[['や', 'ya'], null, ['ゆ', 'yu'], null, ['よ', 'yo']], [['わ', 'wa'], null, null, null, ['を', 'o']]])}
      <ul>
        <li><b>や (ya)</b>: un yak con sus cuernos.</li>
        <li><b>ゆ (yu)</b>: un pez que da la vuelta: «<i>yu</i>-ju».</li>
        <li><b>よ (yo)</b>: un yo-yo colgando de una cuerda.</li>
        <li><b>わ (wa)</b>: como ね pero sin la colita: una persona sentada diciendo «¡wa-a!».</li>
        <li><b>を (o)</b>: se pronuncia «o» y <b>solo se usa como partícula</b> (marca lo que haces: パンを たべます = como pan).</li>
      </ul>`,
    },
    {
      h: 'La fila R: ら り る れ ろ',
      html: `${kanaTable([[['ら', 'ra'], ['り', 'ri'], ['る', 'ru'], ['れ', 're'], ['ろ', 'ro']]])}
      <p>La <b>r</b> japonesa está entre nuestra <b>r suave</b> (la de «pero») y la <b>l</b>. Para un hispanohablante es fácil: di «pe<b>r</b>o» con la lengua un poco más relajada. <b>Nunca es una rr fuerte.</b></p>
      <ul>
        <li><b>ら (ra)</b>: como ち al revés.</li>
        <li><b>り (ri)</b>: dos líneas como un <i>río</i> que cae.</li>
        <li><b>る (ru)</b>: como ろ pero con un lazo al final: una <i>ru</i>-leta.</li>
        <li><b>れ (re)</b>: como ね y わ, pero con la cola recta hacia arriba.</li>
        <li><b>ろ (ro)</b>: como る sin el lazo.</li>
      </ul>`,
    },
    {
      h: 'La ん: la única consonante sola',
      html: `${kanaTable([[['ん', 'n']]])}
      <p><b>ん (n)</b> es la única letra que no lleva vocal. Nunca empieza una palabra. Parece una <i>n</i> minúscula escrita deprisa.</p>
      <div class="ex">${sayBtn('ほん')} hon · libro &nbsp; ${sayBtn('にほん')} nihon · Japón &nbsp; ${sayBtn('みんな')} minna · todos</div>
      <p><b>¡Enhorabuena!</b> Con esta unidad ya conoces las <b>46 sílabas básicas del hiragana</b>.</p>`,
    },
  ],
  exercises: [
    { type: 'mcq', q: '¿Cuál significa «ojo»?', opts: ['め', 'ぬ', 'ね', 'わ'], a: 0, why: 'め (me) = ojo. ぬ tiene un lazo extra al final.' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">を</span>?', opts: ['o', 'wo', 'wa', 'yo'], a: 0, why: 'を se pronuncia «o» y solo se usa como partícula.' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">る</span>?', opts: ['ru', 'ro', 'ra', 'nu'], a: 0, why: 'る tiene un lazo al final; ろ no.' },
    { type: 'mcq', q: '¿Cuál es «wa»?', opts: ['わ', 'れ', 'ね', 'ぬ'], a: 0, why: 'わ, れ y ね empiezan igual: わ acaba redondeada sin cola.' },
    { type: 'mcq', q: '¿Cómo se pronuncia la r japonesa?', opts: ['Suave, como en «pero»', 'Fuerte, como en «perro»', 'Como una j', 'Como en inglés'], a: 0, why: 'Es una r suave, casi entre r y l.' },
    { type: 'mcq', q: '¿Qué tiene de especial ん?', opts: ['No lleva vocal y nunca empieza una palabra', 'Se lee «nu»', 'Solo es partícula', 'Es katakana'], a: 0, why: 'ん es una n sola.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">やま</span> (montaña) → ___', a: ['yama'], why: 'や = ya, ま = ma.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">さくら</span> (cerezo) → ___', a: ['sakura'], why: 'さ = sa, く = ku, ら = ra.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">にほん</span> (Japón) → ___', a: ['nihon'], why: 'に = ni, ほ = ho, ん = n.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">わたし</span> (yo) → ___', a: ['watashi', 'watasi'], why: 'わ = wa, た = ta, し = shi.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">くるま</span> (coche) → ___', a: ['kuruma'], why: 'く = ku, る = ru, ま = ma.' },
    { type: 'mcq', q: '¿Qué significa よる (yoru)?', opts: ['noche', 'mañana', 'nieve', 'montaña'], a: 0, why: 'よる = noche. あさ = mañana, ゆき = nieve, やま = montaña.' },
  ],
  reading: {
    title: 'Japón en diez palabras',
    level: 'Hiragana',
    sentences: [
      { parts: [['W', 'にほん']], es: 'nihon · Japón', note: 'に + ほ + ん. Los japoneses llaman así a su país.', vocab: [['にほん (nihon)', 'Japón']] },
      { parts: [['W', 'やま']], es: 'yama · montaña', note: 'や + ま. El monte Fuji es ふじさん (Fuji-san).', vocab: [['やま (yama)', 'montaña']] },
      { parts: [['W', 'さくら']], es: 'sakura · cerezo (en flor)', note: 'さ + く + ら. La flor más famosa de Japón.', vocab: [['さくら (sakura)', 'cerezo']] },
      { parts: [['W', 'ゆき']], es: 'yuki · nieve', note: 'ゆ + き.', vocab: [['ゆき (yuki)', 'nieve']] },
      { parts: [['W', 'くるま']], es: 'kuruma · coche', note: 'く + る + ま.', vocab: [['くるま (kuruma)', 'coche']] },
      { parts: [['W', 'ほん']], es: 'hon · libro', note: 'ほ + ん.', vocab: [['ほん (hon)', 'libro']] },
      { parts: [['W', 'みんな']], es: 'minna · todos, todo el mundo', note: 'み + ん + な. La ん alarga la n: «min-na».', vocab: [['みんな (minna)', 'todos']] },
      { parts: [['W', 'わたし の ほん']], es: 'watashi no hon · mi libro', note: 'わたし (yo) + の (de) + ほん (libro). Ya puedes leer frases.', vocab: [['わたし (watashi)', 'yo']] },
    ],
    questions: [
      { q: '¿Cómo se lee さくら?', opts: ['sakura', 'sukura', 'sakuru', 'sakaru'], a: 0 },
      { q: '¿Qué significa みんな?', opts: ['todos', 'montaña', 'coche', 'nieve'], a: 0 },
      { q: '¿Qué significa わたし の ほん?', opts: ['mi libro', 'mi coche', 'el libro de Japón', 'todos los libros'], a: 0 },
    ],
  },
};
