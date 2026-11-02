// Alemán · Unidad 2 · Der, die, das: géneros, artículos y plural
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;

UNITS.d02 = {
  theory: [
    {
      h: 'Tres géneros: masculino, femenino y neutro',
      html: `<p>El alemán tiene <b>tres</b> géneros, cada uno con su artículo:</p>
      <table class="t">
        <tr><th>Género</th><th>Artículo («el / la»)</th><th>Ejemplo</th></tr>
        <tr><td>Masculino</td><td><b>der</b></td><td>${say('der Mann')} (el hombre), ${say('der Tisch')} (la mesa)</td></tr>
        <tr><td>Femenino</td><td><b>die</b></td><td>${say('die Frau')} (la mujer), ${say('die Stadt')} (la ciudad)</td></tr>
        <tr><td>Neutro</td><td><b>das</b></td><td>${say('das Kind')} (el niño), ${say('das Buch')} (el libro)</td></tr>
      </table>
      <p>El género <b>no suele coincidir</b> con el español: <i>der Tisch</i> (la mesa) es masculino, <i>das Mädchen</i> (la chica) es neutro. Por eso la regla número uno es: <b>aprende siempre cada palabra con su artículo</b>. En la app, guarda tus tarjetas como «der Tisch», no «Tisch».</p>`,
    },
    {
      h: 'Un truco para recordar el género: los colores',
      html: `<p>Muchos estudiantes asocian un color a cada género y lo imaginan al aprender cada palabra: <b style="color:#79a6ff">der = azul</b>, <b style="color:#ff7b7b">die = rojo</b>, <b style="color:#4ade80">das = verde</b>. Imagina una mesa azul (der Tisch), una ciudad roja (die Stadt), un libro verde (das Buch).</p>
      <p>Además, hay terminaciones que ayudan mucho:</p>
      <ul>
        <li>Siempre <b>die</b>: <b>-ung</b> (die Zeitung), <b>-heit / -keit</b> (die Freiheit), <b>-ion</b> (die Nation), <b>-tät</b> (die Universität).</li>
        <li>Siempre <b>das</b>: <b>-chen / -lein</b>, los diminutivos (das Mädchen, das Brötchen).</li>
        <li>Casi siempre <b>der</b>: <b>-er</b> para personas que hacen algo (der Lehrer), los días, meses y estaciones (der Montag, der Juli, der Sommer).</li>
      </ul>`,
    },
    {
      h: 'Artículos indefinidos: ein, eine, ein',
      html: `<table class="t">
        <tr><th>Masculino</th><th>Femenino</th><th>Neutro</th></tr>
        <tr><td>${say('ein Hund')}</td><td>${say('eine Katze')}</td><td>${say('ein Haus')}</td></tr>
      </table>
      <p>Fíjate: masculino y neutro comparten <b>ein</b>. En plural no hay artículo indefinido: <i>Hunde</i> = perros.</p>
      <p>Para negar un sustantivo se usa <b>kein</b> (ningún): ${say('Das ist kein Hund.')} (Eso no es un perro.) · ${say('Ich habe keine Zeit.')} (No tengo tiempo.)</p>`,
    },
    {
      h: 'El plural: siempre die',
      html: `<p>Buena noticia: en plural, el artículo es siempre <b>die</b>, sea cual sea el género. Mala noticia: el plural del sustantivo cambia de muchas maneras, así que también conviene aprenderlo.</p>
      <table class="t">
        <tr><th>Singular</th><th>Plural</th><th>Cómo se forma</th></tr>
        <tr><td>die Frau</td><td>${say('die Frauen')}</td><td>-en (casi todos los femeninos)</td></tr>
        <tr><td>der Tisch</td><td>${say('die Tische')}</td><td>-e</td></tr>
        <tr><td>das Kind</td><td>${say('die Kinder')}</td><td>-er</td></tr>
        <tr><td>das Auto</td><td>${say('die Autos')}</td><td>-s (palabras extranjeras)</td></tr>
        <tr><td>der Apfel</td><td>${say('die Äpfel')}</td><td>con Umlaut (a → ä)</td></tr>
        <tr><td>das Zimmer</td><td>${say('die Zimmer')}</td><td>igual que el singular</td></tr>
      </table>`,
    },
    {
      h: 'Las palabras compuestas: el género lo decide la última',
      html: `<p>El alemán une palabras para crear otras nuevas. El género lo da <b>siempre la última</b>:</p>
      <ul>
        <li>das Haus (casa) + die Tür (puerta) = <b>die Haustür</b> (la puerta de casa)</li>
        <li>die Hand (mano) + der Schuh (zapato) = <b>der Handschuh</b> (el guante)</li>
      </ul>
      <p>Para entender una palabra larga, léela <b>de atrás hacia delante</b>: <i>Kinderzimmer</i> = Zimmer (habitación) de Kinder (niños).</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '___ Zeitung (el periódico)', opts: ['die', 'der', 'das', 'den'], a: 0, why: 'Las palabras en -ung son siempre femeninas.' },
    { type: 'mcq', q: '___ Mädchen (la chica)', opts: ['das', 'die', 'der', 'ein'], a: 0, why: 'Los diminutivos en -chen son siempre neutros, aunque se refieran a una chica.' },
    { type: 'mcq', q: '___ Lehrer (el profesor)', opts: ['der', 'die', 'das', 'eine'], a: 0, why: 'Las personas que hacen algo, en -er, son masculinas.' },
    { type: 'mcq', q: '¿Qué artículo llevan todos los plurales?', opts: ['die', 'der', 'das', 'Depende del género'], a: 0, why: 'En plural, el artículo definido es siempre «die».' },
    { type: 'mcq', q: 'der Tisch → die ___', opts: ['Tische', 'Tischen', 'Tischs', 'Tisch'], a: 0, why: 'Tisch hace el plural en -e: die Tische.' },
    { type: 'mcq', q: 'die Hand + der Schuh = ___ Handschuh', opts: ['der', 'die', 'das', 'den'], a: 0, why: 'En las palabras compuestas, el género lo decide la última palabra: der Schuh.' },
    { type: 'gap', q: 'Das ist ___ Katze. (una gata)', a: ['eine'], why: '«Katze» es femenino → eine.' },
    { type: 'gap', q: 'Das ist ___ Haus. (una casa)', a: ['ein'], why: '«Haus» es neutro → ein.' },
    { type: 'gap', q: 'Ich habe ___ Zeit. (no tengo tiempo)', a: ['keine'], why: 'Para negar un sustantivo se usa kein/keine. Zeit es femenino → keine.' },
    { type: 'gap', q: 'das Kind → die ___', a: ['kinder'], why: 'Kind hace el plural en -er: die Kinder.' },
    { type: 'find', role: 'S', prompt: 'Toca el sujeto.', parts: [['S', 'Die Kinder'], ['V', 'spielen'], ['X', 'im Park.']], why: '«Die Kinder» (los niños) es el sujeto: por eso el verbo va en plural.' },
    { type: 'order', prompt: 'Ordena: «El libro es nuevo».', words: ['Das', 'Buch', 'ist', 'neu'], a: 'Das Buch ist neu', why: 'Buch es neutro → das Buch.' },
  ],

  reading: {
    title: 'Meine Wohnung',
    level: 'A1',
    sentences: [
      { parts: [['S', 'Ich'], ['V', 'wohne'], ['X', 'in einer kleinen Wohnung'], ['X', 'in Köln.']],
        es: 'Vivo en un piso pequeño en Colonia.',
        note: '«einer» es una forma de «eine» (die Wohnung) que verás en la unidad del dativo. De momento, quédate con la idea.',
        vocab: [['die Wohnung', 'el piso'], ['klein', 'pequeño'], ['Köln', 'Colonia']] },
      { parts: [['S', 'Die Wohnung'], ['V', 'hat'], ['O', 'zwei Zimmer,'], ['O', 'eine Küche'], ['C', 'und'], ['O', 'ein Bad.']],
        es: 'El piso tiene dos habitaciones, una cocina y un baño.',
        note: 'Tres géneros en una frase: die Küche (eine), das Bad (ein) y Zimmer en plural.',
        vocab: [['das Zimmer', 'la habitación'], ['die Küche', 'la cocina'], ['das Bad', 'el baño']] },
      { parts: [['X', 'Im Wohnzimmer'], ['V', 'steht'], ['S', 'ein großes Sofa.']],
        es: 'En el salón hay un sofá grande.',
        note: 'El verbo en segunda posición: la frase empieza por el lugar, así que el sujeto (ein großes Sofa) va detrás del verbo.',
        vocab: [['das Wohnzimmer', 'el salón (sala de vivir)'], ['stehen', 'estar (de pie, colocado)'], ['groß', 'grande']] },
      { parts: [['S', 'Der Tisch'], ['V', 'ist'], ['O', 'alt,'], ['C', 'aber'], ['S', 'die Stühle'], ['V', 'sind'], ['O', 'neu.']],
        es: 'La mesa es vieja, pero las sillas son nuevas.',
        note: 'der Tisch (singular, ist) y die Stühle (plural de der Stuhl, sind).',
        vocab: [['der Tisch', 'la mesa'], ['der Stuhl / die Stühle', 'la silla / las sillas'], ['alt', 'viejo'], ['neu', 'nuevo'], ['aber', 'pero']] },
      { parts: [['S', 'Ich'], ['V', 'habe'], ['O', 'keinen Fernseher,'], ['C', 'aber'], ['S', 'ich'], ['V', 'habe'], ['O', 'viele Bücher.']],
        es: 'No tengo televisión, pero tengo muchos libros.',
        note: '«keinen» es «kein» con la terminación del acusativo masculino (unidad 4). «Bücher» es el plural de das Buch.',
        vocab: [['der Fernseher', 'la tele'], ['viele', 'muchos'], ['das Buch / die Bücher', 'el libro / los libros']] },
      { parts: [['S', 'Meine Wohnung'], ['V', 'ist'], ['O', 'klein,'], ['C', 'aber'], ['O', 'sehr gemütlich.']],
        es: 'Mi piso es pequeño, pero muy acogedor.',
        note: '«gemütlich» es una palabra muy alemana: cómodo, acogedor, agradable.',
        vocab: [['gemütlich', 'acogedor'], ['sehr', 'muy']] },
    ],
    questions: [
      { q: '¿Cuántas habitaciones tiene el piso?', opts: ['Dos', 'Una', 'Tres', 'Ninguna'], a: 0 },
      { q: '¿Qué es nuevo en el piso?', opts: ['Las sillas', 'La mesa', 'El sofá', 'La tele'], a: 0 },
      { q: '¿Qué artículo lleva «Küche»?', opts: ['die (eine Küche)', 'der', 'das', 'No lleva artículo'], a: 0 },
    ],
  },
};
})();
