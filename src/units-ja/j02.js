// Japonés · Unidad 2 · Hiragana た な は
UNITS.j02 = {
  theory: [
    {
      h: 'La fila T: た ち つ て と',
      html: `${kanaTable([[['た', 'ta'], ['ち', 'chi'], ['つ', 'tsu'], ['て', 'te'], ['と', 'to']]])}
      <p>Dos sílabas no siguen el patrón: <b>ち se lee «chi»</b> (no «ti») y <b>つ se lee «tsu»</b> (no «tu»). Pasaba lo mismo con し (shi) en la unidad anterior.</p>
      <ul>
        <li><b>た (ta)</b>: parece las letras <i>t</i> y <i>a</i> juntas.</li>
        <li><b>ち (chi)</b>: un número 5 al revés, como un <i>chi</i>-co sentado.</li>
        <li><b>つ (tsu)</b>: una ola del mar: «tsuuu-nami».</li>
        <li><b>て (te)</b>: una mano extendida, y «mano» en japonés es justamente て.</li>
        <li><b>と (to)</b>: un dedo del pie con una astilla clavada: «¡ay, el <i>to</i>-billo!».</li>
      </ul>
      <p>Para «tsu», empieza a decir «ts» como en «tsé-tsé» y añade la u.</p>`,
    },
    {
      h: 'La fila N: な に ぬ ね の',
      html: `${kanaTable([[['な', 'na'], ['に', 'ni'], ['ぬ', 'nu'], ['ね', 'ne'], ['の', 'no']]])}
      <ul>
        <li><b>な (na)</b>: una cruz con un nudo abajo, como un <i>na</i>-vegante atado a su mástil.</li>
        <li><b>に (ni)</b>: un palo y dos rayas, como la palabra <i>ni</i> escrita deprisa.</li>
        <li><b>ぬ (nu)</b>: unos fideos enredados con un lazo al final: «<i>nu</i>-dles».</li>
        <li><b>ね (ne)</b>: como ぬ pero con la cola hacia fuera, como la cola de un gato (猫 se dice «neko»).</li>
        <li><b>の (no)</b>: una señal de prohibido: «¡No!». Es la sílaba que más verás: significa «de» (わたしの = mío).</li>
      </ul>
      <p>Cuidado con <b>ぬ / ね / め</b>: se parecen mucho. Fíjate en el final del trazo.</p>`,
    },
    {
      h: 'La fila H: は ひ ふ へ ほ',
      html: `${kanaTable([[['は', 'ha'], ['ひ', 'hi'], ['ふ', 'fu'], ['へ', 'he'], ['ほ', 'ho']]])}
      <p>La <b>h</b> japonesa suena suave, como una <b>j muy flojita</b> o la h aspirada de algunas zonas de Andalucía. Y <b>ふ se lee «fu»</b>, soplando suave entre los labios (no con los dientes como nuestra f).</p>
      <ul>
        <li><b>は (ha)</b>: un palo y una さ al lado: «¡ja-ja!».</li>
        <li><b>ひ (hi)</b>: una gran sonrisa: «¡ji-ji!».</li>
        <li><b>ふ (fu)</b>: el monte Fuji con nubes alrededor.</li>
        <li><b>へ (he)</b>: un tejado o una montaña. Es la más fácil.</li>
        <li><b>ほ (ho)</b>: como は con una raya más arriba.</li>
      </ul>
      <p><b>Dato importante:</b> cuando は funciona como partícula de tema (lo verás en la unidad 8) se lee «<b>wa</b>», no «ha». Y へ como partícula de dirección se lee «<b>e</b>».</p>`,
    },
  ],
  exercises: [
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">ち</span>?', opts: ['chi', 'ti', 'sa', 'ra'], a: 0, why: 'ち se lee «chi». No existe «ti» en japonés tradicional.' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">つ</span>?', opts: ['tsu', 'tu', 'su', 'shi'], a: 0, why: 'つ = tsu, como una ola: «tsuuu-nami».' },
    { type: 'mcq', q: '¿Cuál es «ne»?', opts: ['ね', 'ぬ', 'め', 'れ'], a: 0, why: 'ね termina con una cola hacia fuera; ぬ termina con un lazo cerrado.' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">ふ</span>?', opts: ['fu', 'hu', 'ho', 'mu'], a: 0, why: 'ふ = fu (soplando suave).' },
    { type: 'mcq', q: '¿Cuál significa «mano»?', opts: ['て', 'と', 'た', 'ち'], a: 0, why: 'て (te) = mano.' },
    { type: 'mcq', q: '¿Cómo se lee <span class="jp">の</span>?', opts: ['no', 'na', 'me', 'ne'], a: 0, why: 'の = no. Es una de las sílabas más frecuentes: significa «de».' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">ねこ</span> (gato) → ___', a: ['neko'], why: 'ね = ne, こ = ko.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">いぬ</span> (perro) → ___', a: ['inu'], why: 'い = i, ぬ = nu.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">はな</span> (flor) → ___', a: ['hana'], why: 'は = ha, な = na.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">くつ</span> (zapatos) → ___', a: ['kutsu', 'kutu'], why: 'く = ku, つ = tsu.' },
    { type: 'gap', q: 'Escribe en romaji: <span class="jp">ひと</span> (persona) → ___', a: ['hito'], why: 'ひ = hi, と = to.' },
    { type: 'mcq', q: '¿Qué significa なつ (natsu)?', opts: ['verano', 'invierno', 'flor', 'gato'], a: 0, why: 'なつ = verano.' },
  ],
  reading: {
    title: 'Animales y cosas de casa',
    level: 'Hiragana',
    sentences: [
      { parts: [['W', 'ねこ']], es: 'neko · gato', note: 'ね (ne) + こ (ko).', vocab: [['ねこ (neko)', 'gato']] },
      { parts: [['W', 'いぬ']], es: 'inu · perro', note: 'い (i) + ぬ (nu). Ojo: ぬ, no ね.', vocab: [['いぬ (inu)', 'perro']] },
      { parts: [['W', 'つくえ']], es: 'tsukue · mesa, escritorio', note: 'つ (tsu) + く (ku) + え (e).', vocab: [['つくえ (tsukue)', 'escritorio, mesa']] },
      { parts: [['W', 'くち']], es: 'kuchi · boca', note: 'く (ku) + ち (chi).', vocab: [['くち (kuchi)', 'boca']] },
      { parts: [['W', 'ほし']], es: 'hoshi · estrella', note: 'ほ (ho) + し (shi).', vocab: [['ほし (hoshi)', 'estrella']] },
      { parts: [['W', 'ふね']], es: 'fune · barco', note: 'ふ (fu) + ね (ne).', vocab: [['ふね (fune)', 'barco']] },
      { parts: [['W', 'なつ']], es: 'natsu · verano', note: 'な (na) + つ (tsu).', vocab: [['なつ (natsu)', 'verano']] },
      { parts: [['W', 'わたし の ねこ']], es: 'watashi no neko · mi gato', note: 'Spoiler de la siguiente unidad: わ (wa) aún no la has visto. の une las dos palabras: «el gato de mí» = mi gato.', vocab: [['の (no)', 'de (posesión)']] },
    ],
    questions: [
      { q: '¿Qué significa いぬ?', opts: ['perro', 'gato', 'barco', 'boca'], a: 0 },
      { q: '¿Cómo se lee つくえ?', opts: ['tsukue', 'tukue', 'sukue', 'tsukai'], a: 0 },
      { q: '¿Qué hace の en わたし の ねこ?', opts: ['Significa «de»: mi gato', 'Significa «y»', 'Es una pregunta', 'Significa «no»'], a: 0 },
    ],
  },
};
