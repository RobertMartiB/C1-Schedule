// Japonés · Unidad 5 · Katakana 1: ア カ サ タ ナ
// Usa kanaTable y sayBtn, definidos en j01.js.
UNITS.j05 = {
  theory: [
    {
      h: 'Para qué sirve el katakana',
      html: `<p>El <b>katakana</b> tiene los <b>mismos sonidos</b> que el hiragana, pero se escribe con trazos más rectos y angulosos. Se usa sobre todo para:</p>
      <ul>
        <li><b>Palabras que vienen de otros idiomas</b>: ${sayBtn('テニス')} (tenisu, tenis), ${sayBtn('アイス')} (aisu, helado).</li>
        <li><b>Nombres extranjeros</b>: tu nombre se escribe en katakana.</li>
        <li><b>Destacar palabras</b>, como nosotros usamos la cursiva o las mayúsculas, y para onomatopeyas en el manga.</li>
      </ul>
      <p>Como ya conoces los sonidos, solo tienes que aprender las formas nuevas. Fíjate en que muchas se parecen a su versión en hiragana.</p>`,
    },
    {
      h: 'Las vocales y la fila K: ア イ ウ エ オ · カ キ ク ケ コ',
      html: `${kanaTable([[['ア', 'a'], ['イ', 'i'], ['ウ', 'u'], ['エ', 'e'], ['オ', 'o']], [['カ', 'ka'], ['キ', 'ki'], ['ク', 'ku'], ['ケ', 'ke'], ['コ', 'ko']]])}
      <ul>
        <li><b>カ (ka)</b> y <b>か (ka)</b> son casi iguales, sin el trazo suelto.</li>
        <li><b>キ (ki)</b> se parece a き sin la curva de abajo.</li>
        <li><b>エ (e)</b> es como una «I» mayúscula romana.</li>
        <li><b>コ (ko)</b>: dos trazos en ángulo, como un cuadrado abierto.</li>
      </ul>`,
    },
    {
      h: 'Las filas S y T: サ シ ス セ ソ · タ チ ツ テ ト',
      html: `${kanaTable([[['サ', 'sa'], ['シ', 'shi'], ['ス', 'su'], ['セ', 'se'], ['ソ', 'so']], [['タ', 'ta'], ['チ', 'chi'], ['ツ', 'tsu'], ['テ', 'te'], ['ト', 'to']]])}
      <p><b>La trampa más famosa del katakana</b>: シ (shi) y ツ (tsu), y también ソ (so) y ン (n, unidad 6).</p>
      <ul>
        <li><b>シ (shi)</b>: los puntos están a la <b>izquierda</b> y el trazo largo sube <b>de abajo arriba</b>, como una sonrisa ladeada.</li>
        <li><b>ツ (tsu)</b>: los puntos están <b>arriba</b> y el trazo largo baja <b>de arriba abajo</b>.</li>
      </ul>`,
    },
    {
      h: 'La fila N: ナ ニ ヌ ネ ノ',
      html: `${kanaTable([[['ナ', 'na'], ['ニ', 'ni'], ['ヌ', 'nu'], ['ネ', 'ne'], ['ノ', 'no']]])}
      <ul>
        <li><b>ニ (ni)</b>: dos rayas, igual que el kanji del número dos.</li>
        <li><b>ノ (no)</b>: un solo trazo curvo, el más sencillo.</li>
      </ul>`,
    },
    {
      h: 'Cómo se adaptan las palabras extranjeras',
      html: `<p>El japonés no tiene consonantes sueltas (salvo la n), así que añade vocales: <i>text</i> → ${sayBtn('テキスト')} (te-ki-su-to), <i>tacos</i> → ${sayBtn('タコス')} (ta-ko-su).</p>
      <p>Casi siempre se añade <b>u</b> y, después de t o d, <b>o</b>. Leer katakana es como un juego: dilo en voz alta y adivina la palabra.</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">シ</span>?', opts: ['shi', 'tsu', 'so', 'n'], a: 0, why: 'シ: puntos a la izquierda y trazo de abajo arriba = shi.' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">ツ</span>?', opts: ['tsu', 'shi', 'so', 'chi'], a: 0, why: 'ツ: puntos arriba y trazo de arriba abajo = tsu.' },
    { type: 'mcq', q: '¿Cuál es «ka» en katakana?', opts: ['カ', 'か', 'ク', 'タ'], a: 0, why: 'カ es la versión en katakana de か.' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">ニ</span>?', opts: ['ni', 'ne', 'na', 'ko'], a: 0, why: 'ニ = ni: dos rayas.' },
    { type: 'mcq', q: '¿Para qué se usa sobre todo el katakana?', opts: ['Palabras de otros idiomas y nombres extranjeros', 'Las terminaciones de los verbos', 'Los números', 'Los nombres japoneses'], a: 0, why: 'El katakana se usa para préstamos, nombres extranjeros y para destacar palabras.' },
    { type: 'mcq', q: '¿Qué significa <span class="jp">テニス</span>?', opts: ['tenis', 'texto', 'tacos', 'helado'], a: 0, why: 'テ (te) + ニ (ni) + ス (su) = tenisu, tenis.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">アイス</span> → ___', a: ['aisu'], why: 'ア (a) + イ (i) + ス (su) = aisu, «helado» (del inglés ice).' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">ネクタイ</span> → ___', a: ['nekutai'], why: 'ネ (ne) + ク (ku) + タ (ta) + イ (i): necktie, «corbata».' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">ココア</span> → ___', a: ['kokoa'], why: 'コ (ko) + コ (ko) + ア (a): cacao, chocolate caliente.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">スイス</span> → ___', a: ['suisu'], why: 'ス (su) + イ (i) + ス (su): Suiza.' },
    { type: 'mcq', q: '¿Cómo se escribe «text» en japonés?', opts: ['テキスト', 'テクスト', 'タキスト', 'テキツト'], a: 0, why: 'te-ki-su-to: se añaden vocales a las consonantes sueltas.' },
    { type: 'mcq', q: '¿Qué palabra está escrita en katakana?', opts: ['タコス', 'すし', 'さけ', 'あさ'], a: 0, why: 'タコス (takosu, tacos) está en katakana; las otras, en hiragana.' },
  ],
  reading: {
    title: 'En la cafetería',
    level: 'Katakana',
    sentences: [
      { parts: [['W', 'アイス']], es: 'aisu · helado', note: 'Del inglés «ice (cream)».', vocab: [['アイス (aisu)', 'helado']] },
      { parts: [['W', 'ココア']], es: 'kokoa · chocolate caliente', note: 'Del inglés «cocoa».', vocab: [['ココア (kokoa)', 'cacao, chocolate caliente']] },
      { parts: [['W', 'タコス']], es: 'takosu · tacos', note: 'Del español, a través del inglés.', vocab: [['タコス (takosu)', 'tacos']] },
      { parts: [['W', 'テキスト']], es: 'tekisuto · libro de texto', note: 'Del inglés «text»: en japonés significa sobre todo «libro de texto».', vocab: [['テキスト (tekisuto)', 'libro de texto']] },
      { parts: [['W', 'テニス']], es: 'tenisu · tenis', note: 'La s final se convierte en «su».', vocab: [['テニス (tenisu)', 'tenis']] },
      { parts: [['W', 'ネクタイ']], es: 'nekutai · corbata', note: 'Del inglés «necktie».', vocab: [['ネクタイ (nekutai)', 'corbata']] },
      { parts: [['W', 'スイス']], es: 'suisu · Suiza', note: 'Del inglés «Swiss».', vocab: [['スイス (suisu)', 'Suiza']] },
      { parts: [['W', 'ここ'], ['W', 'は'], ['W', 'カフェ'], ['W', 'です。']], es: 'koko wa kafe desu · Esto es una cafetería.', note: 'Hiragana y katakana juntos en una frase. フェ (fe) lo verás en la unidad 7; la は de tema se lee «wa».', vocab: [['ここ (koko)', 'aquí'], ['カフェ (kafe)', 'cafetería'], ['です (desu)', 'es']] },
    ],
    questions: [
      { q: '¿Qué significa ネクタイ?', opts: ['corbata', 'tenis', 'Suiza', 'texto'], a: 0 },
      { q: '¿Cómo se lee ココア?', opts: ['kokoa', 'kakoa', 'kokua', 'cocoa'], a: 0 },
      { q: '¿Qué letra de katakana suena «tsu»?', opts: ['ツ', 'シ', 'ソ', 'ス'], a: 0 },
    ],
  },
};
