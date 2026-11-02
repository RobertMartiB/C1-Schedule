// Japonés · Unidad 1 · Hiragana あ か さ
// Tabla de kana: cada celda se puede tocar para oír la sílaba (data-say).
const kanaTable = rows => `<div class="kana">${rows.map(row => `<div class="krow">${row.map(c => c
  ? `<button class="kcell" data-say="${c[0]}"><span class="kk">${c[0]}</span><span class="kr">${c[1]}</span></button>`
  : '<span class="kcell empty"></span>').join('')}</div>`).join('')}</div>`;
const sayBtn = (jp, label) => `<button class="saybtn" data-say="${jp}">${label || jp}</button>`;

UNITS.j01 = {
  theory: [
    {
      h: 'Cómo se escribe el japonés',
      html: `<p>El japonés usa a la vez <b>tres sistemas de escritura</b>:</p>
      <table class="t">
        <tr><th>Sistema</th><th>Para qué sirve</th><th>Ejemplo</th></tr>
        <tr><td><b>Hiragana</b></td><td>Palabras japonesas y las terminaciones de la gramática</td><td>${sayBtn('すし')} (sushi)</td></tr>
        <tr><td><b>Katakana</b></td><td>Palabras que vienen de otros idiomas</td><td>${sayBtn('パン')} (pan)</td></tr>
        <tr><td><b>Kanji</b></td><td>Caracteres de origen chino con significado propio</td><td>${sayBtn('山', '山')} (montaña)</td></tr>
      </table>
      <p>Empezamos por el <b>hiragana</b> porque es la base de todo: cuando un niño japonés no sabe un kanji, lo escribe en hiragana. Son <b>46 sílabas básicas</b> y se aprenden en unos pocos días.</p>`,
    },
    {
      h: 'Una gran ventaja: suenas como en español',
      html: `<p>Las cinco vocales del japonés son <b>las mismas que las del español</b>: a, e, i, o, u, cortas y claras. Para un hispanohablante, la pronunciación del japonés es mucho más fácil que la del inglés.</p>
      <p>Cada letra de hiragana es <b>una sílaba</b> (no una letra suelta): か es «ka», さ es «sa». Las sílabas se leen siempre igual, sin excepciones como las del inglés.</p>
      <p>Toca cualquier sílaba de las tablas para oírla.</p>`,
    },
    {
      h: 'Las vocales: あ い う え お',
      html: `${kanaTable([[['あ', 'a'], ['い', 'i'], ['う', 'u'], ['え', 'e'], ['お', 'o']]])}
      <p><b>Trucos para recordarlas:</b></p>
      <ul>
        <li><b>あ (a)</b>: una cruz con una gran barriga redonda abajo: «¡Aaah, qué lleno estoy!».</li>
        <li><b>い (i)</b>: dos palitos, como dos letras <i>i</i> sin punto.</li>
        <li><b>う (u)</b>: una oreja de perfil con un pelo encima: «¿Uh? ¿Qué has dicho?».</li>
        <li><b>え (e)</b>: una persona con los brazos abiertos haciendo ejercicio: «¡Eeeh, vamos!».</li>
        <li><b>お (o)</b>: parecida a あ, pero con un trazo extra a la derecha, como una <i>o</i> que se ha caído.</li>
      </ul>
      <p>Ojo: la <b>u</b> japonesa se pronuncia con los labios casi relajados, menos redondeada que en español.</p>`,
    },
    {
      h: 'La fila K: か き く け こ',
      html: `${kanaTable([[['か', 'ka'], ['き', 'ki'], ['く', 'ku'], ['け', 'ke'], ['こ', 'ko']]])}
      <ul>
        <li><b>か (ka)</b>: como una <i>k</i> con un trazo extra al lado.</li>
        <li><b>き (ki)</b>: una llave antigua (en inglés, <i>key</i>, suena igual).</li>
        <li><b>く (ku)</b>: el pico de un pájaro que hace «cu-cú».</li>
        <li><b>け (ke)</b>: un palo y una <i>k</i> torcida: «¿Ke?».</li>
        <li><b>こ (ko)</b>: dos trazos horizontales, como dos <i>co</i>-lumpios uno encima de otro.</li>
      </ul>`,
    },
    {
      h: 'La fila S: さ し す せ そ',
      html: `${kanaTable([[['さ', 'sa'], ['し', 'shi'], ['す', 'su'], ['せ', 'se'], ['そ', 'so']]])}
      <ul>
        <li><b>さ (sa)</b>: muy parecida a き, pero con un solo trazo horizontal.</li>
        <li><b>し (shi)</b>: un anzuelo de pesca. <b>Atención: se lee «shi», no «si».</b></li>
        <li><b>す (su)</b>: un nudo con una cola larga hacia abajo, como un <i>su</i>-ricato colgado.</li>
        <li><b>せ (se)</b>: como una boca abierta que dice «¡se acabó!».</li>
        <li><b>そ (so)</b>: un zigzag, como el camino de un <i>so</i>-námbulo.</li>
      </ul>`,
    },
    {
      h: 'Cómo practicar',
      html: `<ol class="steps">
        <li>Escribe cada sílaba a mano 5 veces <b>diciéndola en voz alta</b>.</li>
        <li>Lee palabras reales en cuanto sepas 5 o 6 sílabas: así se fijan mucho mejor que en una tabla.</li>
        <li>Repasa un poco cada día en vez de mucho un solo día.</li>
      </ol>
      <p>En los ejercicios y en la lectura de esta unidad solo aparecen las sílabas que ya conoces.</p>`,
    },
  ],
  exercises: [
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">あ</span>?', opts: ['a', 'o', 'e', 'i'], a: 0, why: 'あ = a. お (o) se parece, pero tiene un trazo extra a la derecha.' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">お</span>?', opts: ['o', 'a', 'u', 'e'], a: 0, why: 'お = o. Compárala con あ: お tiene un trazo suelto a la derecha.' },
    { type: 'mcq', q: '¿Cuál es «ki»?', opts: ['き', 'さ', 'か', 'け'], a: 0, why: 'き tiene dos trazos horizontales; さ solo uno.' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">し</span>?', opts: ['shi', 'si', 'tsu', 'ni'], a: 0, why: 'し se lee «shi». No existe «si» en japonés.' },
    { type: 'mcq', q: '¿Cuál es «sa»?', opts: ['さ', 'き', 'ち', 'そ'], a: 0, why: 'さ = sa. き tiene un trazo horizontal más.' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">く</span>?', opts: ['ku', 'he', 'ko', 'shi'], a: 0, why: 'く parece un pico: «cu-cú».' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">せ</span>?', opts: ['se', 'sa', 'ke', 'su'], a: 0, why: 'せ = se.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">すし</span> → ___', a: ['sushi', 'susi'], why: 'す = su, し = shi → sushi.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">かお</span> (cara) → ___', a: ['kao'], why: 'か = ka, お = o → kao.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">いえ</span> (casa) → ___', a: ['ie'], why: 'い = i, え = e → ie.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">あさ</span> (mañana) → ___', a: ['asa'], why: 'あ = a, さ = sa → asa.' },
    { type: 'mcq', q: '¿Qué palabra significa «paraguas»?', opts: ['かさ (kasa)', 'あさ (asa)', 'かお (kao)', 'いす (isu)'], a: 0, why: 'かさ = paraguas. あさ = mañana, かお = cara, いす = silla.' },
  ],
  reading: {
    title: 'Primeras palabras',
    level: 'Hiragana',
    sentences: [
      { parts: [['W', 'あさ']], es: 'asa · la mañana', note: 'あ (a) + さ (sa). Fíjate: dos sílabas, dos letras.', vocab: [['あさ (asa)', 'mañana']] },
      { parts: [['W', 'かさ']], es: 'kasa · paraguas', note: 'か (ka) + さ (sa). Solo cambia la primera sílaba respecto a あさ.', vocab: [['かさ (kasa)', 'paraguas']] },
      { parts: [['W', 'いす']], es: 'isu · silla', note: 'い (i) + す (su). En el habla rápida, la u final casi no se oye: «is».', vocab: [['いす (isu)', 'silla']] },
      { parts: [['W', 'すし']], es: 'sushi', note: 'す (su) + し (shi). Ya puedes leer la palabra japonesa más famosa.', vocab: [['すし (sushi)', 'sushi']] },
      { parts: [['W', 'えき']], es: 'eki · estación (de tren)', note: 'え (e) + き (ki). Una palabra muy útil si viajas.', vocab: [['えき (eki)', 'estación']] },
      { parts: [['W', 'おかし']], es: 'okashi · dulces, chucherías', note: 'お (o) + か (ka) + し (shi). Tu primera palabra de tres sílabas.', vocab: [['おかし (okashi)', 'dulces']] },
      { parts: [['W', 'すき']], es: 'suki · me gusta', note: 'す (su) + き (ki). すし が すき (me gusta el sushi) lo leerás muy pronto.', vocab: [['すき (suki)', 'gustar, me gusta']] },
      { parts: [['W', 'あおい']], es: 'aoi · azul', note: 'あ (a) + お (o) + い (i). Las vocales seguidas se pronuncian todas, una detrás de otra.', vocab: [['あおい (aoi)', 'azul']] },
    ],
    questions: [
      { q: '¿Cómo se lee えき y qué significa?', opts: ['eki · estación', 'iki · aliento', 'ake · rojo', 'aki · otoño'], a: 0 },
      { q: '¿Qué palabra significa «me gusta»?', opts: ['すき', 'すし', 'さけ', 'いす'], a: 0 },
      { q: '¿Cuántas sílabas tiene おかし?', opts: ['Tres: o-ka-shi', 'Dos: ok-ashi', 'Cuatro: o-k-a-shi', 'Seis'], a: 0 },
    ],
  },
};
