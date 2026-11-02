// Árabe · Unidad 1 · Cómo se escribe el árabe y las letras ا ب ت ث
(() => {
const ar = (w, r) => `<button class="saybtn" data-say="${w}"><span class="big rtl" lang="ar">${w}</span> ${r}</button>`;
const big = w => `<span class="big rtl" lang="ar">${w}</span>`;

UNITS.a01 = {
  theory: [
    {
      h: 'Tres cosas que cambian respecto al español',
      html: `<ol>
        <li><b>Se escribe de derecha a izquierda.</b> Los libros se abren por lo que para nosotros es «el final».</li>
        <li><b>Las letras se unen entre sí</b>, también en letra de imprenta. Por eso cada letra tiene <b>hasta cuatro formas</b>: aislada, al principio, en medio y al final de la palabra.</li>
        <li><b>Las vocales cortas no se suelen escribir.</b> Se escriben solo las consonantes y las vocales largas. En los libros para aprender (y en este curso) se añaden unas marcas pequeñas encima y debajo para indicarlas.</li>
      </ol>
      <p>El alfabeto tiene <b>28 letras</b>, y todas son consonantes, salvo tres que hacen también de vocales largas (ا و ي).</p>`,
    },
    {
      h: 'La primera letra: alif (ا)',
      html: `<p>${big('ا')} <b>alif</b> es un palo vertical. Sirve para la <b>a larga</b> («aa») y como soporte de otros sonidos. Es una de las seis letras que <b>no se unen a la letra siguiente</b> (a su izquierda): después de alif siempre hay un pequeño hueco.</p>
      <p>Cuando lleva encima una pequeña marca, ${big('أ')}, se llama <b>alif con hamza</b> y marca un pequeño golpe de voz antes de la vocal, como al decir «a-a» separando las aes.</p>`,
    },
    {
      h: 'La familia de ب: ب ت ث',
      html: `<p>Muchas letras árabes comparten la misma forma y se distinguen solo por los <b>puntos</b>. La primera familia tiene forma de «barca»:</p>
      <table class="t">
        <tr><th>Letra</th><th>Nombre</th><th>Suena</th><th>Puntos</th></tr>
        <tr><td>${ar('ب', '')}</td><td>bā'</td><td>b</td><td>uno debajo</td></tr>
        <tr><td>${ar('ت', '')}</td><td>tā'</td><td>t</td><td>dos encima</td></tr>
        <tr><td>${ar('ث', '')}</td><td>thā'</td><td>z española (como en «zapato»)</td><td>tres encima</td></tr>
      </table>
      <p>Truco: <b>b</b>, con un punto <b>b</b>ajo; <b>t</b>, dos en lo al<b>t</b>o; y la <b>th</b>, tres.</p>`,
    },
    {
      h: 'Las formas al unirse',
      html: `<p>Al unirse, la «barca» de ب ت ث se queda pequeña, como un dientecito:</p>
      <table class="t">
        <tr><th>Aislada</th><th>Al principio</th><th>En medio</th><th>Al final</th></tr>
        <tr><td>${big('ب')}</td><td>${big('بـ')}</td><td>${big('ـبـ')}</td><td>${big('ـب')}</td></tr>
        <tr><td>${big('ت')}</td><td>${big('تـ')}</td><td>${big('ـتـ')}</td><td>${big('ـت')}</td></tr>
      </table>
      <p>Por ejemplo, ${ar('باب', 'bāb · puerta')}: ب al principio (unida a la alif), alif (que no se une a la izquierda) y ب aislada al final.</p>`,
    },
    {
      h: 'Las vocales cortas',
      html: `<p>Se marcan con signos pequeños encima o debajo de la consonante:</p>
      <ul>
        <li>${big('بَ')} <b>fatha</b>, una rayita encima = <b>ba</b></li>
        <li>${big('بِ')} <b>kasra</b>, una rayita debajo = <b>bi</b></li>
        <li>${big('بُ')} <b>damma</b>, un pequeño «9» encima = <b>bu</b></li>
      </ul>
      <p>Los adultos los leen sin estas marcas porque reconocen las palabras, igual que nosotros leemos «q» por «que» en un mensaje. Tú los verás siempre al principio.</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '¿En qué dirección se escribe el árabe?', opts: ['De derecha a izquierda', 'De izquierda a derecha', 'De arriba abajo', 'Depende de la palabra'], a: 0, why: 'El árabe se escribe y se lee de derecha a izquierda.' },
    { type: 'mcq', q: '¿Qué letra suena «b»?', opts: ['ب', 'ت', 'ث', 'ا'], a: 0, why: 'ب tiene un punto debajo.' },
    { type: 'mcq', q: '¿Qué letra suena «t»?', opts: ['ت', 'ب', 'ث', 'ا'], a: 0, why: 'ت tiene dos puntos encima.' },
    { type: 'mcq', q: '¿Cómo suena <span class="big rtl">ث</span>?', opts: ['Como la z española', 'Como la t', 'Como la s', 'Como la b'], a: 0, why: 'ث (thā\') suena como nuestra z de «zapato» o la «th» inglesa de «think».' },
    { type: 'mcq', q: '¿Qué distingue a ب, ت y ث?', opts: ['Solo los puntos', 'El tamaño', 'El color', 'La dirección'], a: 0, why: 'Tienen la misma forma y se distinguen por el número y la posición de los puntos.' },
    { type: 'mcq', q: '¿Cuántas letras tiene el alfabeto árabe?', opts: ['28', '22', '33', '46'], a: 0, why: '28 letras, casi todas consonantes.' },
    { type: 'mcq', q: '¿Qué tiene de especial la alif (ا)?', opts: ['No se une a la letra que va después', 'No se pronuncia nunca', 'Solo va al final', 'Siempre lleva tres puntos'], a: 0, why: 'La alif es una de las seis letras que no se unen por la izquierda.' },
    { type: 'mcq', q: '<span class="big rtl">بِ</span> se lee…', opts: ['bi', 'ba', 'bu', 'b'], a: 0, why: 'La rayita debajo (kasra) es la vocal i.' },
    { type: 'mcq', q: '<span class="big rtl">بُ</span> se lee…', opts: ['bu', 'ba', 'bi', 'ub'], a: 0, why: 'El pequeño «9» encima (damma) es la vocal u.' },
    { type: 'mcq', q: '¿Qué significa <span class="big rtl">باب</span>?', opts: ['puerta', 'padre', 'casa', 'libro'], a: 0, why: 'باب (bāb) = puerta.' },
    { type: 'gap', q: 'Escribe con letras latinas cómo suena <span class="big rtl">بَابَا</span>: ___', a: ['baba', 'baaba'], why: 'بَ (ba) + ا (a larga) + بَ (ba) + ا: bābā, «papá».' },
    { type: 'mcq', q: '¿Por qué en los textos de adultos no se ven las vocales cortas?', opts: ['Porque se sobreentienden', 'Porque no existen', 'Porque son mayúsculas', 'Porque están prohibidas'], a: 0, why: 'Los lectores las deducen de la palabra; los textos para aprender las marcan.' },
  ],

  reading: {
    title: 'Primeras palabras',
    level: 'Alfabeto',
    sentences: [
      { parts: [['W', 'باب']], es: 'bāb · puerta', note: 'Se lee de derecha a izquierda: ب (b) + ا (ā) + ب (b).', vocab: [['باب (bāb)', 'puerta']] },
      { parts: [['W', 'أب']], es: 'ab · padre', note: 'أ (alif con hamza, un pequeño golpe de voz) + ب.', vocab: [['أب (ab)', 'padre']] },
      { parts: [['W', 'بابا']], es: 'bābā · papá', note: 'Como en español. Fíjate en que las dos ب se unen a la alif siguiente, pero la alif no se une a la ب siguiente.', vocab: [['بابا (bābā)', 'papá']] },
      { parts: [['W', 'تاب']], es: 'tāba · se arrepintió', note: 'ت (dos puntos encima) + ا + ب.', vocab: [['تاب (tāba)', 'arrepentirse']] },
      { parts: [['W', 'ثابت']], es: 'thābit · fijo, estable', note: 'Las cuatro letras de la unidad: ث + ا + ب + ت. También es un nombre propio.', vocab: [['ثابت (thābit)', 'fijo, estable']] },
    ],
    questions: [
      { q: '¿Qué significa أب?', opts: ['padre', 'puerta', 'papá', 'casa'], a: 0 },
      { q: '¿Cómo se lee باب?', opts: ['bāb', 'bat', 'tab', 'bab con a corta y sin alif'], a: 0 },
      { q: 'En ثابت, ¿qué letra va primero (a la derecha)?', opts: ['ث (th)', 'ت (t)', 'ب (b)', 'ا (alif)'], a: 0 },
    ],
  },
};
})();
