// Chino · Unidad 1 · Pinyin y los cuatro tonos
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;
const hz = (han, py) => `<button class="saybtn" data-say="${han}"><span class="big">${han}</span> ${py}</button>`;

UNITS.z01 = {
  theory: [
    {
      h: 'Cómo se escribe el chino',
      html: `<p>El chino no tiene alfabeto: se escribe con <b>caracteres</b> (汉字, hànzì). Cada carácter es <b>una sílaba</b> y casi siempre tiene un significado propio: 人 = persona, 山 = montaña, 大 = grande.</p>
      <p>Para aprender a pronunciarlos se usa el <b>pinyin</b>: el chino escrito con letras latinas y unas marcas para el tono. Es lo que vas a usar al principio, y también es como se escribe chino en el móvil (escribes «nihao» y el teclado te propone 你好).</p>
      <p>En este curso aprendemos el <b>chino simplificado</b>, el que se usa en China continental y Singapur.</p>`,
    },
    {
      h: 'Los cuatro tonos: la clave del chino',
      html: `<p>En chino, la misma sílaba con un tono distinto es <b>otra palabra</b>. Toca cada una para oírla:</p>
      <table class="t">
        <tr><th>Tono</th><th>Cómo suena</th><th>Ejemplo</th></tr>
        <tr><td><b>1.º</b> ā</td><td>Alto y plano, como cantando una nota larga.</td><td>${hz('妈', 'mā')} madre</td></tr>
        <tr><td><b>2.º</b> á</td><td>Sube, como cuando preguntas «¿eh?».</td><td>${hz('麻', 'má')} cáñamo</td></tr>
        <tr><td><b>3.º</b> ǎ</td><td>Baja y vuelve a subir un poco. Grave.</td><td>${hz('马', 'mǎ')} caballo</td></tr>
        <tr><td><b>4.º</b> à</td><td>Cae de golpe, como una orden: «¡ya!».</td><td>${hz('骂', 'mà')} regañar</td></tr>
        <tr><td>Neutro</td><td>Corto y suave, sin marca.</td><td>${hz('吗', 'ma')} (partícula de pregunta)</td></tr>
      </table>
      <p>Truco: imagina que dibujas el tono en el aire con la mano mientras hablas: — / ˇ \\.</p>`,
    },
    {
      h: 'La sílaba china: inicial + final + tono',
      html: `<p>Cada sílaba tiene una <b>inicial</b> (consonante), una <b>final</b> (vocal o vocal + n/ng) y un <b>tono</b>. Hay solo unas 400 sílabas distintas (¡con tonos, unas 1.300!).</p>
      <ul>
        <li><b>mā</b> = m + a + 1.<sup>er</sup> tono</li>
        <li><b>hǎo</b> = h + ao + 3.<sup>er</sup> tono</li>
        <li><b>zhōng</b> = zh + ong + 1.<sup>er</sup> tono</li>
      </ul>
      <p>La marca del tono va sobre la vocal principal: primero <b>a</b> o <b>e</b> si están (hǎo, méi); en <b>ou</b>, sobre la o (dōu); si no, sobre la última vocal (guì, liù).</p>`,
    },
    {
      h: 'Letras que no suenan como en español',
      html: `<table class="t">
        <tr><th>Pinyin</th><th>Suena parecido a…</th><th>Ejemplo</th></tr>
        <tr><td><b>h</b></td><td>Nuestra «j» suave</td><td>${hz('好', 'hǎo')} bien</td></tr>
        <tr><td><b>x</b></td><td>Una «s» con la lengua pegada abajo, casi «si»</td><td>${hz('谢谢', 'xièxie')} gracias</td></tr>
        <tr><td><b>q</b></td><td>«ch» con mucho aire</td><td>${hz('七', 'qī')} siete</td></tr>
        <tr><td><b>j</b></td><td>«ch» suave (como «y» argentina sorda)</td><td>${hz('九', 'jiǔ')} nueve</td></tr>
        <tr><td><b>zh</b></td><td>«ch» con la lengua hacia atrás</td><td>${hz('中', 'zhōng')} centro</td></tr>
        <tr><td><b>c</b></td><td>«ts» con aire</td><td>${hz('菜', 'cài')} plato, verdura</td></tr>
        <tr><td><b>r</b></td><td>Entre la «r» inglesa y la «y»</td><td>${hz('人', 'rén')} persona</td></tr>
        <tr><td><b>ü</b> (u tras j, q, x, y)</td><td>Boca de «u», diciendo «i»</td><td>${hz('去', 'qù')} ir</td></tr>
      </table>`,
    },
    {
      h: 'El cambio del tercer tono',
      html: `<p>Una regla que se aplica siempre: cuando hay <b>dos terceros tonos seguidos</b>, el primero se pronuncia como <b>segundo tono</b>.</p>
      <p>${hz('你好', 'nǐ hǎo')} se escribe con dos terceros tonos, pero se dice «ní hǎo».</p>
      <p>En pinyin se sigue escribiendo nǐ hǎo: el cambio solo se hace al hablar.</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '¿Qué tono sube, como una pregunta?', opts: ['El 2.º (á)', 'El 1.º (ā)', 'El 3.º (ǎ)', 'El 4.º (à)'], a: 0, why: 'El segundo tono sube: má.' },
    { type: 'mcq', q: '¿Qué tono cae de golpe?', opts: ['El 4.º (à)', 'El 1.º (ā)', 'El 2.º (á)', 'El 3.º (ǎ)'], a: 0, why: 'El cuarto tono es descendente y seco: mà.' },
    { type: 'mcq', q: '«mǎ» con tercer tono significa…', opts: ['caballo', 'madre', 'regañar', 'cáñamo'], a: 0, why: 'mā = madre, má = cáñamo, mǎ = caballo, mà = regañar.' },
    { type: 'mcq', q: '¿Cómo se pronuncia de verdad «nǐ hǎo»?', opts: ['ní hǎo', 'nǐ hǎo, los dos graves', 'nì hào', 'nī hāo'], a: 0, why: 'Dos terceros tonos seguidos: el primero se pronuncia como segundo.' },
    { type: 'mcq', q: 'La «h» de «hǎo» suena como…', opts: ['una «j» suave', 'nada, es muda', 'una «g»', 'una «ch»'], a: 0, why: 'La h del pinyin es aspirada, como una j suave.' },
    { type: 'mcq', q: '¿Dónde va la marca del tono en «hao»?', opts: ['Sobre la a: hǎo', 'Sobre la o: haǒ', 'Sobre la h', 'No lleva'], a: 0, why: 'Si hay una «a», la marca va sobre ella.' },
    { type: 'mcq', q: '¿Qué significa 人 (rén)?', opts: ['persona', 'grande', 'montaña', 'centro'], a: 0, why: '人 = persona. Parece una persona andando.' },
    { type: 'gap', q: 'Escribe en pinyin, sin tono, cómo se dice «gracias» (谢谢): ___', a: ['xiexie', 'xie xie'], why: 'xièxie: la x suena casi como «si».' },
    { type: 'gap', q: 'Escribe en pinyin, sin tono, «hola» (你好): ___', a: ['nihao', 'ni hao'], why: 'nǐ hǎo.' },
    { type: 'mcq', q: '¿Cuántos tonos tiene el mandarín (sin contar el neutro)?', opts: ['Cuatro', 'Dos', 'Seis', 'Ninguno'], a: 0, why: 'Cuatro tonos y un tono neutro.' },
    { type: 'mcq', q: '中 (zhōng), «centro», tiene el tono…', opts: ['1.º: alto y plano', '2.º: sube', '3.º: baja y sube', '4.º: cae'], a: 0, why: 'La marca ō (raya plana) es el primer tono. 中国 (Zhōngguó) = China, «el país del centro».' },
    { type: 'mcq', q: '«qī» (siete): la q suena como…', opts: ['«ch» con mucho aire', '«k»', '«cu»', '«s»'], a: 0, why: 'La q del pinyin no suena como en español: es una «ch» aspirada.' },
  ],

  reading: {
    title: 'Diez palabras para empezar',
    level: 'Pinyin',
    sentences: [
      { parts: [['W', '你好']], es: 'nǐ hǎo · hola', note: '你 (tú) + 好 (bien). Literalmente «tú bien». Recuerda: se pronuncia «ní hǎo».', vocab: [['你好 (nǐ hǎo)', 'hola']] },
      { parts: [['W', '谢谢']], es: 'xièxie · gracias', note: 'El segundo 谢 va en tono neutro: corto y suave.', vocab: [['谢谢 (xièxie)', 'gracias']] },
      { parts: [['W', '再见']], es: 'zàijiàn · adiós', note: '再 (otra vez) + 见 (ver): «hasta la vista». Dos cuartos tonos seguidos.', vocab: [['再见 (zàijiàn)', 'adiós']] },
      { parts: [['W', '中国']], es: 'Zhōngguó · China', note: '中 (centro) + 国 (país). El «país del centro».', vocab: [['中国 (Zhōngguó)', 'China']] },
      { parts: [['W', '人']], es: 'rén · persona', note: 'Uno de los caracteres más sencillos y más usados. 中国人 = chino (persona de China).', vocab: [['人 (rén)', 'persona']] },
      { parts: [['W', '大']], es: 'dà · grande', note: 'Una persona (人) con los brazos abiertos: «así de grande».', vocab: [['大 (dà)', 'grande']] },
      { parts: [['W', '妈妈']], es: 'māma · mamá', note: 'Primer tono + neutro. Las palabras de familia suelen repetir la sílaba.', vocab: [['妈妈 (māma)', 'mamá']] },
      { parts: [['W', '不']], es: 'bù · no', note: 'La negación más común. Delante de un cuarto tono cambia a segundo: 不是 se dice «bú shì».', vocab: [['不 (bù)', 'no']] },
    ],
    questions: [
      { q: '¿Qué significa 再见?', opts: ['Adiós', 'Hola', 'Gracias', 'Perdón'], a: 0 },
      { q: '¿Qué significa literalmente 中国?', opts: ['El país del centro', 'El país grande', 'El país de las personas', 'El país del este'], a: 0 },
      { q: '¿Cómo se lee 谢谢?', opts: ['xièxie', 'shèshe', 'xiéxié', 'chièchie'], a: 0 },
    ],
  },
};
})();
