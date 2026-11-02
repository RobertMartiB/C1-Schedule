// Japonés · Unidad 4 · Hiragana: sonidos combinados
UNITS.j04 = {
  theory: [
    {
      h: 'Las comillas ゛: sonidos sonoros',
      html: `<p>Con dos rayitas (<b>゛</b>, llamadas <i>dakuten</i>) cinco filas cambian de sonido:</p>
      ${kanaTable([
        [['が', 'ga'], ['ぎ', 'gi'], ['ぐ', 'gu'], ['げ', 'ge'], ['ご', 'go']],
        [['ざ', 'za'], ['じ', 'ji'], ['ず', 'zu'], ['ぜ', 'ze'], ['ぞ', 'zo']],
        [['だ', 'da'], ['ぢ', 'ji'], ['づ', 'zu'], ['で', 'de'], ['ど', 'do']],
        [['ば', 'ba'], ['び', 'bi'], ['ぶ', 'bu'], ['べ', 'be'], ['ぼ', 'bo']],
      ])}
      <p>K → <b>G</b> (siempre suave, «ga, gi, gu» como en «guitarra»), S → <b>Z</b> (una z sonora, como zumbido de abeja), T → <b>D</b>, H → <b>B</b>.</p>
      <p>ぢ y づ casi no se usan: «ji» y «zu» se escriben casi siempre じ y ず.</p>`,
    },
    {
      h: 'El circulito ゜: el sonido P',
      html: `${kanaTable([[['ぱ', 'pa'], ['ぴ', 'pi'], ['ぷ', 'pu'], ['ぺ', 'pe'], ['ぽ', 'po']]])}
      <p>Solo la fila H acepta el circulito (<b>゜</b>, <i>handakuten</i>) y se convierte en <b>P</b>: は → ぱ.</p>`,
    },
    {
      h: 'Sílabas combinadas: きゃ, しゅ, ちょ…',
      html: `<p>Una sílaba en <b>-i</b> seguida de una <b>や, ゆ o よ pequeña</b> forma una sola sílaba:</p>
      ${kanaTable([
        [['きゃ', 'kya'], ['きゅ', 'kyu'], ['きょ', 'kyo']],
        [['しゃ', 'sha'], ['しゅ', 'shu'], ['しょ', 'sho']],
        [['ちゃ', 'cha'], ['ちゅ', 'chu'], ['ちょ', 'cho']],
        [['じゃ', 'ja'], ['じゅ', 'ju'], ['じょ', 'jo']],
        [['りゃ', 'rya'], ['りゅ', 'ryu'], ['りょ', 'ryo']],
      ])}
      <p>Fíjate en el tamaño: <b>きや</b> (ki-ya, dos sílabas) no es lo mismo que <b>きゃ</b> (kya, una sola). La や pequeña va un poco más abajo.</p>
      <p>Atención: じゃ se lee «<b>ya</b>» con la y fuerte del inglés «<i>jam</i>»: parecido a «dya».</p>`,
    },
    {
      h: 'La っ pequeña: una pausa',
      html: `<p>Una <b>つ pequeña (っ)</b> no se pronuncia: indica una <b>pausa breve</b> que dobla la consonante siguiente.</p>
      <div class="ex">${sayBtn('きて')} kite (ven) → ${sayBtn('きって')} ki<b>tt</b>e (sello)<br>${sayBtn('さか')} saka (cuesta) → ${sayBtn('さっか')} sa<b>kk</b>a (escritor)</div>
      <p>Imagina que tropiezas un momento antes de la sílaba: «ki · te».</p>`,
    },
    {
      h: 'Vocales largas',
      html: `<p>Algunas vocales se alargan el doble de tiempo, y eso <b>cambia el significado</b>:</p>
      <div class="ex">${sayBtn('おばさん')} obasan (tía) → ${sayBtn('おばあさん')} ob<b>aa</b>san (abuela)<br>${sayBtn('おじさん')} ojisan (tío) → ${sayBtn('おじいさん')} oj<b>ii</b>san (abuelo)</div>
      <p>Truco de lectura: <b>おう</b> y <b>えい</b> casi siempre se pronuncian <b>ō</b> y <b>ē</b> largas: ${sayBtn('ありがとう')} arigat<b>ō</b> (gracias), ${sayBtn('せんせい')} sens<b>ē</b> (profesor).</p>`,
    },
  ],
  exercises: [
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">が</span>?', opts: ['ga', 'ka', 'ba', 'za'], a: 0, why: 'か + ゛ = が (ga).' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">ぱ</span>?', opts: ['pa', 'ba', 'ha', 'fa'], a: 0, why: 'は + ゜ = ぱ (pa).' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">じ</span>?', opts: ['ji', 'shi', 'zi', 'chi'], a: 0, why: 'し + ゛ = じ (ji).' },
    { type: 'mcq', q: '¿Cuál es «kyo» (una sola sílaba)?', opts: ['きょ', 'きよ', 'こよ', 'きゅ'], a: 0, why: 'La よ es pequeña: きょ = kyo. きよ (grande) serían dos sílabas.' },
    { type: 'mcq', q: '¿Qué hace la っ pequeña?', opts: ['Una pausa que dobla la consonante siguiente', 'Se lee «tsu»', 'Alarga la vocal', 'Indica una pregunta'], a: 0, why: 'きって = kitte, con una pausa antes de la t.' },
    { type: 'mcq', q: '¿Qué significa おばあさん?', opts: ['abuela', 'tía', 'madre', 'abuelo'], a: 0, why: 'La a larga cambia el significado: おばさん = tía, おばあさん = abuela.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">ごはん</span> (arroz, comida) → ___', a: ['gohan'], why: 'ご = go, は = ha, ん = n.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">きって</span> (sello) → ___', a: ['kitte'], why: 'La っ dobla la t: kitte.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">でんしゃ</span> (tren) → ___', a: ['densha', 'densya'], why: 'で = de, ん = n, しゃ = sha.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">ありがとう</span> → ___', a: ['arigatou', 'arigatoo', 'arigato'], why: 'あ-り-が-と-う: la う alarga la o → arigatō.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">がっこう</span> (escuela) → ___', a: ['gakkou', 'gakkoo', 'gakko'], why: 'が + っ (dobla la k) + こう (kō).' },
    { type: 'mcq', q: '¿Cómo se lee せんせい?', opts: ['sensē (sensei)', 'sensi', 'sense', 'sansei'], a: 0, why: 'えい se pronuncia como una e larga: sensē. En romaji se escribe sensei.' },
  ],
  reading: {
    title: 'Frases para sobrevivir en Japón',
    level: 'Hiragana',
    sentences: [
      { parts: [['W', 'ありがとう']], es: 'arigatō · gracias', note: 'La う final alarga la o. Más educado: ありがとう ございます.', vocab: [['ありがとう (arigatō)', 'gracias']] },
      { parts: [['W', 'すみません']], es: 'sumimasen · perdone, disculpe', note: 'Sirve para pedir perdón, llamar al camarero o dar las gracias por una molestia.', vocab: [['すみません (sumimasen)', 'perdone, disculpe']] },
      { parts: [['W', 'おはよう']], es: 'ohayō · buenos días', note: 'お-は-よ-う: la う alarga la o.', vocab: [['おはよう (ohayō)', 'buenos días']] },
      { parts: [['W', 'こんにちは']], es: 'konnichiwa · hola, buenas tardes', note: 'Ojo: la última は se lee «wa» porque en su origen era una partícula.', vocab: [['こんにちは (konnichiwa)', 'hola']] },
      { parts: [['W', 'でんしゃ']], es: 'densha · tren', note: 'で + ん + しゃ: tres sílabas, «den-sha».', vocab: [['でんしゃ (densha)', 'tren']] },
      { parts: [['W', 'がっこう']], es: 'gakkō · escuela', note: 'La っ dobla la k y la う alarga la o.', vocab: [['がっこう (gakkō)', 'escuela']] },
      { parts: [['W', 'ちょっと']], es: 'chotto · un poco', note: 'ちょ (cho) + っ (pausa) + と (to). Muy común para decir «no» con educación: ちょっと… (es que…).', vocab: [['ちょっと (chotto)', 'un poco']] },
      { parts: [['W', 'ごはん を たべます']], es: 'gohan o tabemasu · como (arroz/comida)', note: 'を se lee «o». Tu primera frase con verbo: たべます = comer (forma educada).', vocab: [['ごはん (gohan)', 'arroz, comida'], ['たべます (tabemasu)', 'comer']] },
    ],
    questions: [
      { q: '¿Qué dirías para llamar a un camarero?', opts: ['すみません', 'ありがとう', 'おはよう', 'ちょっと'], a: 0 },
      { q: '¿Por qué こんにちは termina en «wa»?', opts: ['La は final se lee «wa» porque era una partícula', 'Es una errata', 'Es katakana', 'Todas las は se leen wa'], a: 0 },
      { q: '¿Qué significa でんしゃ?', opts: ['tren', 'escuela', 'gracias', 'comida'], a: 0 },
    ],
  },
};
