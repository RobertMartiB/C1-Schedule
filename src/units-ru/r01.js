// Ruso · Unidad 1 · Cirílico: las letras amigas y las falsas amigas
(() => {
const ru = (w, r) => `<button class="saybtn" data-say="${w}"><span class="big">${w}</span> ${r}</button>`;

UNITS.r01 = {
  theory: [
    {
      h: 'El cirílico no es tan difícil como parece',
      html: `<p>El ruso se escribe con el <b>alfabeto cirílico</b>: 33 letras. Viene del alfabeto griego, como el nuestro viene del latino, así que <b>muchas letras ya las conoces</b>.</p>
      <p>Lo mejor: el ruso se lee <b>casi siempre como se escribe</b>, letra a letra. En dos o tres días podrás leer cualquier palabra (aunque todavía no sepas qué significa).</p>
      <p>Las letras las dividimos en tres grupos: las <b>amigas</b> (se escriben y suenan como en español), las <b>falsas amigas</b> (se parecen a una letra nuestra, pero suenan distinto) y las <b>nuevas</b> (unidad 2).</p>`,
    },
    {
      h: 'Las amigas: А, К, М, О, Т, Е',
      html: `<table class="t">
        <tr><th>Letra</th><th>Suena</th><th>Ejemplo</th></tr>
        <tr><td><span class="big">А а</span></td><td>a</td><td>${ru('мама', 'mama')}</td></tr>
        <tr><td><span class="big">К к</span></td><td>k</td><td>${ru('кот', 'kot · gato')}</td></tr>
        <tr><td><span class="big">М м</span></td><td>m</td><td>${ru('мак', 'mak · amapola')}</td></tr>
        <tr><td><span class="big">О о</span></td><td>o (con acento) · a (sin acento)</td><td>${ru('кто', 'kto · quién')}</td></tr>
        <tr><td><span class="big">Т т</span></td><td>t</td><td>${ru('там', 'tam · allí')}</td></tr>
        <tr><td><span class="big">Е е</span></td><td>«ye» (ie)</td><td>${ru('нет', 'nyet · no')}</td></tr>
      </table>
      <p>Ojo con la <b>Е</b>: suena «ye», no «e». Y en minúscula, la <b>т</b> manuscrita se parece a una m: en letra de imprenta, que es la que verás aquí, no hay problema.</p>`,
    },
    {
      h: 'Las falsas amigas: cuidado',
      html: `<p>Estas letras parecen latinas, pero <b>suenan distinto</b>. Son las que más confunden al principio:</p>
      <table class="t">
        <tr><th>Letra</th><th>Parece…</th><th>Pero suena…</th><th>Ejemplo</th></tr>
        <tr><td><span class="big">В в</span></td><td>B</td><td><b>v</b> (labiodental)</td><td>${ru('вот', 'vot · aquí está')}</td></tr>
        <tr><td><span class="big">Н н</span></td><td>H</td><td><b>n</b></td><td>${ru('нос', 'nos · nariz')}</td></tr>
        <tr><td><span class="big">Р р</span></td><td>P</td><td><b>r</b> (vibrante, como «pero» o «perro»)</td><td>${ru('рот', 'rot · boca')}</td></tr>
        <tr><td><span class="big">С с</span></td><td>C</td><td><b>s</b></td><td>${ru('сок', 'sok · zumo')}</td></tr>
        <tr><td><span class="big">У у</span></td><td>Y</td><td><b>u</b></td><td>${ru('тут', 'tut · aquí')}</td></tr>
        <tr><td><span class="big">Х х</span></td><td>X</td><td><b>j</b> (como nuestra jota)</td><td>${ru('хор', 'jor · coro')}</td></tr>
      </table>
      <p>Truco: ${ru('ресторан', 'restorán')} se escribe con Р (r), Е (ye→e), С (s), Т, О, Р, А, Н (n). Si lo lees «pectopah», ¡te han engañado las falsas amigas!</p>`,
    },
    {
      h: 'Ya puedes leer palabras internacionales',
      html: `<ul>
        <li>${ru('метро', 'metró')} · ${ru('такси', 'taksí')} (la и es «i», la verás en la unidad 2)</li>
        <li>${ru('атом', 'átom')} · ${ru('кот', 'kot')} (gato)</li>
        <li>${ru('Москва', 'Moskvá')} · ${ru('ресторан', 'restorán')}</li>
      </ul>
      <p>El ruso tiene muchas palabras internacionales. Si una palabra rusa te suena a algo, ¡probablemente lo sea!</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '¿Cómo suena la letra <span class="big">Р</span>?', opts: ['r', 'p', 'b', 'f'], a: 0, why: 'Р parece una P, pero es la r rusa.' },
    { type: 'mcq', q: '¿Cómo suena la letra <span class="big">Н</span>?', opts: ['n', 'h', 'j', 'i'], a: 0, why: 'Н parece una H, pero suena n.' },
    { type: 'mcq', q: '¿Cómo suena la letra <span class="big">В</span>?', opts: ['v', 'b', 'p', 'f'], a: 0, why: 'В parece una B, pero suena v.' },
    { type: 'mcq', q: '¿Cómo suena la letra <span class="big">Х</span>?', opts: ['j (jota)', 'ks', 'h muda', 'sh'], a: 0, why: 'Х suena como nuestra jota.' },
    { type: 'mcq', q: '¿Cómo suena la letra <span class="big">У</span>?', opts: ['u', 'i', 'y griega', 'v'], a: 0, why: 'У parece una Y, pero suena u.' },
    { type: 'mcq', q: '¿Cómo se lee <span class="big">ресторан</span>?', opts: ['restorán', 'pectopah', 'resтoran con t inglesa', 'rektoran'], a: 0, why: 'Р=r, Е=e, С=s, Т=t, О=o, Р=r, А=a, Н=n.' },
    { type: 'mcq', q: '¿Qué significa <span class="big">нет</span>?', opts: ['no', 'red', 'sí', 'nada'], a: 0, why: 'нет (nyet) = no. Н es n y Е suena «ye».' },
    { type: 'gap', q: 'Escribe con letras latinas: <span class="big">метро</span> → ___', a: ['metro'], why: 'М-Е-Т-Р-О: metro.' },
    { type: 'gap', q: 'Escribe con letras latinas: <span class="big">кот</span> (gato) → ___', a: ['kot'], why: 'К-О-Т: kot.' },
    { type: 'gap', q: 'Escribe con letras latinas: <span class="big">сок</span> (zumo) → ___', a: ['sok'], why: 'С es s: sok.' },
    { type: 'gap', q: 'Escribe con letras latinas: <span class="big">Москва</span> → ___', a: ['moskva', 'moskvá'], why: 'М-О-С-К-В-А. Recuerda: В suena v.' },
    { type: 'mcq', q: '¿Qué palabra significa «aquí»?', opts: ['тут', 'там', 'кто', 'вот'], a: 0, why: 'тут (tut) = aquí. там (tam) = allí. кто (kto) = quién.' },
  ],

  reading: {
    title: 'Palabras que ya sabes leer',
    level: 'Cirílico',
    sentences: [
      { parts: [['W', 'мама']], es: 'mama · mamá', note: 'Solo letras amigas: м, а.', vocab: [['мама', 'mamá']] },
      { parts: [['W', 'кот']], es: 'kot · gato', note: 'Letras amigas: к, о, т.', vocab: [['кот', 'gato']] },
      { parts: [['W', 'метро']], es: 'metró · metro', note: 'La Р es r. El acento va al final: metró.', vocab: [['метро', 'metro']] },
      { parts: [['W', 'ресторан']], es: 'restorán · restaurante', note: 'La palabra trampa: tiene Р, С y Н, tres falsas amigas.', vocab: [['ресторан', 'restaurante']] },
      { parts: [['W', 'Москва']], es: 'Moskvá · Moscú', note: 'В = v. El acento va en la última sílaba.', vocab: [['Москва', 'Moscú']] },
      { parts: [['W', 'сок']], es: 'sok · zumo', note: 'С = s.', vocab: [['сок', 'zumo']] },
      { parts: [['W', 'Вот'], ['W', 'кот.']], es: 'Vot kot. · Aquí está el gato.', note: 'Tu primera frase. вот = he aquí, aquí está. En ruso no hay artículos (ni «el» ni «un»).', vocab: [['вот', 'aquí está, he aquí']] },
    ],
    questions: [
      { q: '¿Qué significa сок?', opts: ['zumo', 'gato', 'mamá', 'nariz'], a: 0 },
      { q: '¿Cómo se lee Москва?', opts: ['Moskvá', 'Mockba', 'Moskba', 'Moscú'], a: 0 },
      { q: '¿Qué significa «Вот кот»?', opts: ['Aquí está el gato', 'No hay gato', 'El gato come', '¿Quién es el gato?'], a: 0 },
    ],
  },
};
})();
