// Alemán · Unidad 1 · Saludar y presentarse (sein, du y Sie)
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;

UNITS.d01 = {
  theory: [
    {
      h: 'Saludar en alemán',
      html: `<table class="t">
        <tr><th>Alemán</th><th>Cuándo</th></tr>
        <tr><td>${say('Hallo!')}</td><td>Hola. Vale casi siempre, sobre todo con gente joven.</td></tr>
        <tr><td>${say('Guten Morgen!')}</td><td>Buenos días (hasta las 11 más o menos).</td></tr>
        <tr><td>${say('Guten Tag!')}</td><td>Buenos días / buenas tardes. Algo formal: tiendas, oficinas.</td></tr>
        <tr><td>${say('Guten Abend!')}</td><td>Buenas tardes / noches, al llegar por la tarde-noche.</td></tr>
        <tr><td>${say('Tschüss!')}</td><td>Adiós (informal). Formal: ${say('Auf Wiedersehen!')}</td></tr>
      </table>
      <p>En el sur de Alemania y en Austria oirás ${say('Servus!')} y ${say('Grüß Gott!')}; en Suiza, ${say('Grüezi!')}</p>`,
    },
    {
      h: 'Du y Sie: el tú y el usted',
      html: `<ul>
        <li><b>du</b> = tú: amigos, familia, niños, compañeros de clase.</li>
        <li><b>Sie</b> = usted: desconocidos, el trabajo, las tiendas. Se escribe <b>siempre con mayúscula</b>.</li>
      </ul>
      <p>En Alemania el <b>Sie</b> se usa bastante más que el «usted» en España: con un desconocido adulto, empieza siempre por <b>Sie</b>. Fíjate en que <b>Sie</b> se conjuga como «ellos»: <i>Sie sind</i> = usted es.</p>`,
    },
    {
      h: 'El verbo sein (ser y estar)',
      html: `<p>Como en francés, <b>ser y estar son el mismo verbo</b>: <b>sein</b>. Y el pronombre es <b>obligatorio</b>.</p>
      <table class="t">
        <tr><th>Pronombre</th><th>sein</th><th>Español</th></tr>
        <tr><td>ich</td><td>${say('ich bin', 'bin')}</td><td>yo soy / estoy</td></tr>
        <tr><td>du</td><td>${say('du bist', 'bist')}</td><td>tú eres</td></tr>
        <tr><td>er / sie / es</td><td>${say('er ist', 'ist')}</td><td>él / ella / ello es</td></tr>
        <tr><td>wir</td><td>${say('wir sind', 'sind')}</td><td>nosotros somos</td></tr>
        <tr><td>ihr</td><td>${say('ihr seid', 'seid')}</td><td>vosotros sois</td></tr>
        <tr><td>sie / Sie</td><td>${say('sie sind', 'sind')}</td><td>ellos son / usted es</td></tr>
      </table>
      <p>Cuidado con <b>sie</b>: en minúscula puede ser «ella» (sie ist) o «ellos» (sie sind). Lo distingues por el verbo.</p>`,
    },
    {
      h: 'Presentarte',
      html: `<ul>
        <li>${say('Ich heiße Laura.')} (me llamo Laura) o ${say('Ich bin Laura.')}</li>
        <li>${say('Ich komme aus Spanien.')} (soy de España, literalmente «vengo de España»)</li>
        <li>${say('Ich wohne in Berlin.')} (vivo en Berlín)</li>
        <li>${say('Ich bin Student.')} / ${say('Ich bin Studentin.')}: la profesión <b>va sin artículo</b> y tiene forma femenina con <b>-in</b>.</li>
      </ul>
      <p>Para preguntar: ${say('Wie heißt du?')} · ${say('Wie heißen Sie?')} · ${say('Woher kommst du?')}</p>`,
    },
    {
      h: 'Pronunciación: lo que cambia respecto al español',
      html: `<ul>
        <li><b>w</b> suena como nuestra <b>v</b> labiodental: ${say('Wien')} («vin»).</li>
        <li><b>ei</b> suena «ai» y <b>ie</b> suena «i» larga: ${say('heißen')} («jáisen»), ${say('Bier')} («bir»).</li>
        <li><b>h</b> al principio se aspira, como una j suave: ${say('Hallo')}.</li>
        <li><b>ß</b> («eszett») es una s fuerte: ${say('Tschüss')}, ${say('heißen')}.</li>
        <li><b>ü</b> y <b>ö</b>: pon la boca de «u» y di «i» (ü), o pon la boca de «o» y di «e» (ö).</li>
      </ul>
      <p>Y algo que sorprende: en alemán <b>todos los sustantivos se escriben con mayúscula</b>: <i>der Hund, die Stadt, das Buch</i>.</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: 'Son las 9 de la mañana y entras en una panadería. ¿Qué dices?', opts: ['Guten Morgen!', 'Guten Abend!', 'Tschüss!', 'Gute Nacht!'], a: 0, why: '«Guten Morgen» se usa por la mañana. «Gute Nacht» es solo para ir a dormir.' },
    { type: 'mcq', q: 'Hablas con tu nueva jefa. ¿Cómo le preguntas su nombre?', opts: ['Wie heißen Sie?', 'Wie heißt du?', 'Wer bist du?', 'Wie heißt ihr?'], a: 0, why: 'Con alguien a quien no tuteas se usa Sie, que se conjuga como «ellos»: heißen.' },
    { type: 'mcq', q: 'Wir ___ aus Mexiko.', opts: ['sind', 'seid', 'bist', 'ist'], a: 0, why: 'wir → sind.' },
    { type: 'mcq', q: 'Du ___ sehr nett.', opts: ['bist', 'ist', 'bin', 'seid'], a: 0, why: 'du → bist. Las formas de du casi siempre acaban en -st.' },
    { type: 'mcq', q: '¿Cuál es correcta?', opts: ['Ich bin Lehrerin.', 'Ich bin eine Lehrerin.', 'Bin Lehrerin.', 'Ich Lehrerin bin.'], a: 0, why: 'La profesión va sin artículo y el pronombre «ich» es obligatorio.' },
    { type: 'mcq', q: '«Sie ist müde.» ¿Quién está cansado?', opts: ['Ella', 'Ellos', 'Usted', 'Vosotros'], a: 0, why: 'Con «ist» (singular), sie significa «ella». Ellos o usted irían con «sind».' },
    { type: 'gap', q: 'Ihr ___ in Berlin. (sein)', a: ['seid'], why: 'ihr → seid. No confundir con «sind».' },
    { type: 'gap', q: 'Ich ___ Tom. (sein)', a: ['bin'], why: 'ich → bin.' },
    { type: 'gap', q: 'Woher ___ du? (kommen)', a: ['kommst'], why: 'Con du, el verbo termina en -st: du kommst.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo.', parts: [['S', 'Meine Schwester'], ['V', 'wohnt'], ['X', 'in Hamburg.']], why: '«wohnt» (vive) es el verbo. En alemán va en segunda posición.' },
    { type: 'find', role: 'S', prompt: 'Toca el sujeto.', parts: [['X', 'Heute'], ['V', 'sind'], ['S', 'wir'], ['O', 'sehr müde.']], why: 'Cuando la frase empieza por otra cosa (heute), el verbo sigue en segunda posición y el sujeto pasa detrás: «Heute sind wir…».' },
    { type: 'order', prompt: 'Ordena: «Me llamo Ana y soy de Chile».', words: ['Ich', 'heiße', 'Ana', 'und', 'komme', 'aus', 'Chile'], a: 'Ich heiße Ana und komme aus Chile', why: 'Con «und» se puede no repetir el sujeto si es el mismo.' },
  ],

  reading: {
    title: 'Im Sprachkurs',
    level: 'A1',
    sentences: [
      { parts: [['W', 'Hallo!'], ['S', 'Ich'], ['V', 'heiße'], ['O', 'Jonas.']],
        es: '¡Hola! Me llamo Jonas.',
        note: '«heiße» viene de «heißen», llamarse. Con ich, el verbo acaba en -e.',
        vocab: [['heißen', 'llamarse'], ['hallo', 'hola']] },
      { parts: [['S', 'Ich'], ['V', 'komme'], ['X', 'aus Österreich'], ['C', 'und'], ['V', 'wohne'], ['X', 'jetzt in München.']],
        es: 'Soy de Austria y ahora vivo en Múnich.',
        note: 'Un sujeto (ich) con dos verbos unidos por «und»: komme y wohne.',
        vocab: [['aus', 'de (origen)'], ['Österreich', 'Austria'], ['jetzt', 'ahora'], ['wohnen', 'vivir']] },
      { parts: [['S', 'Das'], ['V', 'ist'], ['O', 'Lucía.']],
        es: 'Esta es Lucía.',
        note: '«Das ist…» sirve para presentar a alguien: «este/esta es…».',
        vocab: [['das ist', 'este / esta es']] },
      { parts: [['S', 'Sie'], ['V', 'ist'], ['O', 'Spanierin'], ['C', 'und'], ['V', 'ist'], ['O', 'Ärztin.']],
        es: 'Es española y es médica.',
        note: 'Aquí «sie ist» = ella es. Spanierin y Ärztin acaban en -in porque Lucía es mujer.',
        vocab: [['die Spanierin', 'la española'], ['die Ärztin', 'la médica']] },
      { parts: [['X', 'Im Kurs'], ['V', 'sind'], ['S', 'wir'], ['O', 'zwölf Personen.']],
        es: 'En el curso somos doce personas.',
        note: 'El verbo en segunda posición: como la frase empieza por «Im Kurs», el sujeto «wir» va detrás de «sind».',
        vocab: [['der Kurs', 'el curso'], ['zwölf', 'doce'], ['die Person', 'la persona']] },
      { parts: [['S', 'Unsere Lehrerin'], ['V', 'ist'], ['O', 'sehr nett.']],
        es: 'Nuestra profesora es muy simpática.',
        note: '«Lehrerin» con mayúscula: es un sustantivo.',
        vocab: [['die Lehrerin', 'la profesora'], ['sehr', 'muy'], ['nett', 'simpático, amable']] },
      { parts: [['W', 'Tschüss'], ['C', 'und'], ['W', 'bis morgen!']],
        es: '¡Adiós y hasta mañana!',
        note: '«bis» = hasta. También: bis bald (hasta pronto), bis später (hasta luego).',
        vocab: [['tschüss', 'adiós'], ['bis morgen', 'hasta mañana']] },
    ],
    questions: [
      { q: '¿De dónde es Jonas?', opts: ['De Austria', 'De Múnich', 'De España', 'De Suiza'], a: 0 },
      { q: '¿Qué hace Lucía?', opts: ['Es médica', 'Es profesora', 'Es estudiante', 'Vive en Austria'], a: 0 },
      { q: 'En «Im Kurs sind wir zwölf», ¿por qué «wir» va detrás del verbo?', opts: ['Porque el verbo siempre va en segunda posición', 'Porque es una pregunta', 'Porque es plural', 'Porque es formal'], a: 0 },
    ],
  },
};
})();
