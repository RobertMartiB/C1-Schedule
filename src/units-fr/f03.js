// Francés · Unidad 3 · Verbos en -er en presente
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;

UNITS.f03 = {
  theory: [
    {
      h: 'El 90 % de los verbos franceses acaba en -er',
      html: `<p>Los verbos en <b>-er</b> (parler, habiter, aimer, travailler…) son casi todos <b>regulares</b>: aprendes uno y sabes conjugar miles. Se quita <b>-er</b> y se añaden las terminaciones:</p>
      <table class="t">
        <tr><th>Persona</th><th>Terminación</th><th>parler (hablar)</th><th>Suena</th></tr>
        <tr><td>je</td><td>-e</td><td>${say('je parle')}</td><td rowspan="3">«parl» (las tres iguales)</td></tr>
        <tr><td>tu</td><td>-es</td><td>${say('tu parles')}</td></tr>
        <tr><td>il / elle / on</td><td>-e</td><td>${say('elle parle')}</td></tr>
        <tr><td>nous</td><td>-ons</td><td>${say('nous parlons')}</td><td>«parlón»</td></tr>
        <tr><td>vous</td><td>-ez</td><td>${say('vous parlez')}</td><td>«parlé»</td></tr>
        <tr><td>ils / elles</td><td>-ent</td><td>${say('ils parlent')}</td><td>«parl» (¡la -ent no suena!)</td></tr>
      </table>
      <p>La gran trampa: <b>-e, -es y -ent no se pronuncian</b>. Al hablar, <i>je parle, tu parles, il parle</i> e <i>ils parlent</i> suenan exactamente igual. Solo <i>nous</i> y <i>vous</i> suenan distinto.</p>`,
    },
    {
      h: 'Delante de vocal: j\' y la liaison',
      html: `<p>Si el verbo empieza por vocal o h muda, <b>je</b> pierde la e: ${say('j\'aime')} (me gusta / quiero), ${say('j\'habite')} (vivo).</p>
      <p>Y con <b>nous, vous, ils, elles</b> la s final suena como «z»: ${say('nous aimons')} («nu-zemón»), ${say('ils habitent')} («il-zabít»).</p>`,
    },
    {
      h: 'Verbos en -er muy útiles',
      html: `<table class="t">
        <tr><th>Verbo</th><th>Significado</th><th>Ejemplo</th></tr>
        <tr><td>habiter</td><td>vivir (en)</td><td>${say('J\'habite à Madrid.')}</td></tr>
        <tr><td>travailler</td><td>trabajar</td><td>${say('Tu travailles où ?')}</td></tr>
        <tr><td>aimer</td><td>gustar, querer</td><td>${say('J\'aime le chocolat.')}</td></tr>
        <tr><td>regarder</td><td>mirar, ver</td><td>${say('Nous regardons un film.')}</td></tr>
        <tr><td>écouter</td><td>escuchar</td><td>${say('Elle écoute de la musique.')}</td></tr>
        <tr><td>manger</td><td>comer</td><td>${say('Nous mangeons à midi.')} (nous mang<b>e</b>ons: con e para mantener el sonido «y»)</td></tr>
        <tr><td>étudier</td><td>estudiar</td><td>${say('Vous étudiez le français ?')}</td></tr>
      </table>`,
    },
    {
      h: '«Aimer»: gustar al revés',
      html: `<p>En español, «me gusta el chocolate» tiene como sujeto el chocolate. En francés es como en «amar»: el sujeto es <b>quien siente</b>:</p>
      <ul>
        <li>${say('J\'aime le café.')} = Me gusta el café (literalmente «amo el café»).</li>
        <li>${say('Il aime voyager.')} = Le gusta viajar.</li>
      </ul>
      <p>Y fíjate: con <i>aimer</i>, el francés usa el <b>artículo definido</b> (le café, la musique), como el español.</p>`,
    },
    {
      h: 'Un presente para tres usos',
      html: `<p>El presente francés sirve para lo mismo que el español: lo que haces normalmente, lo que haces ahora y el futuro cercano. <b>Je travaille</b> = trabajo / estoy trabajando. Para insistir en «ahora mismo» existe ${say('Je suis en train de travailler.')}</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: 'Nous ___ français. (parler)', opts: ['parlons', 'parlez', 'parlent', 'parle'], a: 0, why: 'nous → -ons.' },
    { type: 'mcq', q: 'Vous ___ à Paris ? (habiter)', opts: ['habitez', 'habitons', 'habitent', 'habites'], a: 0, why: 'vous → -ez.' },
    { type: 'mcq', q: '¿Qué formas de «parler» suenan igual?', opts: ['parle, parles, parlent', 'parlons y parlez', 'Ninguna', 'Todas'], a: 0, why: 'Las terminaciones -e, -es y -ent son mudas.' },
    { type: 'mcq', q: 'Me gusta la música →', opts: ['J\'aime la musique.', 'Me plaît la musique.', 'Je aime la musique.', 'J\'aime musique.'], a: 0, why: 'Je + aime → j\'aime, y «aimer» lleva el artículo definido.' },
    { type: 'mcq', q: 'Nous ___ à midi. (manger)', opts: ['mangeons', 'mangons', 'mangez', 'mangent'], a: 0, why: 'Con manger, nous lleva una e extra para que la g siga sonando «y»: mangeons.' },
    { type: 'mcq', q: '¿Cómo se pronuncia «ils aiment»?', opts: ['«il-zém»', '«il-aimént»', '«ils-em»', '«il-emón»'], a: 0, why: 'Liaison (la s suena z) y la -ent final es muda.' },
    { type: 'gap', q: 'Je ___ dans une banque. (travailler)', a: ['travaille'], why: 'je → -e: je travaille.' },
    { type: 'gap', q: 'Tu ___ la télé ? (regarder)', a: ['regardes'], why: 'tu → -es.' },
    { type: 'gap', q: 'Elles ___ la radio. (écouter)', a: ['écoutent'], why: 'elles → -ent (que no se pronuncia).' },
    { type: 'gap', q: '___ habite à Lyon. (yo)', a: ['j\'', 'j'], why: 'Delante de vocal o h muda, je → j\'.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo.', parts: [['S', 'Mes parents'], ['V', 'habitent'], ['X', 'à la campagne.']], why: '«habitent» (viven): ils/elles → -ent.' },
    { type: 'order', prompt: 'Ordena: «Estudiamos francés por la noche».', words: ['Nous', 'étudions', 'le', 'français', 'le', 'soir'], a: 'Nous étudions le français le soir', why: '«le soir» = por la noche (habitualmente). Los idiomas llevan artículo: le français.' },
  ],

  reading: {
    title: 'Une journée de Thomas',
    level: 'A1',
    sentences: [
      { parts: [['S', 'Thomas'], ['V', 'habite'], ['X', 'à Bordeaux'], ['C', 'et'], ['V', 'travaille'], ['X', 'dans un hôpital.']],
        es: 'Thomas vive en Burdeos y trabaja en un hospital.',
        note: 'Un sujeto, dos verbos en -er: habite, travaille.',
        vocab: [['habiter', 'vivir'], ['travailler', 'trabajar'], ['un hôpital', 'un hospital']] },
      { parts: [['X', 'Le matin,'], ['S', 'il'], ['V', 'écoute'], ['O', 'la radio'], ['X', 'dans la voiture.']],
        es: 'Por la mañana escucha la radio en el coche.',
        note: '«Le matin» = por las mañanas (habitualmente).',
        vocab: [['le matin', 'por la mañana'], ['écouter', 'escuchar'], ['la voiture', 'el coche']] },
      { parts: [['X', 'À midi,'], ['S', 'il'], ['V', 'mange'], ['X', 'avec ses collègues.']],
        es: 'A mediodía come con sus compañeros.',
        note: '«ses» = sus (plural).',
        vocab: [['à midi', 'a mediodía'], ['manger', 'comer'], ['un collègue', 'un compañero de trabajo']] },
      { parts: [['S', 'Ils'], ['V', 'parlent'], ['X', 'beaucoup'], ['C', 'et'], ['V', 'rigolent.']],
        es: 'Hablan mucho y se ríen.',
        note: 'parlent y rigolent: la -ent no se pronuncia.',
        vocab: [['beaucoup', 'mucho'], ['rigoler', 'reírse (coloquial)']] },
      { parts: [['X', 'Le soir,'], ['S', 'Thomas et sa copine'], ['V', 'regardent'], ['O', 'une série.']],
        es: 'Por la noche, Thomas y su novia ven una serie.',
        note: 'Sujeto plural (Thomas et sa copine) → regardent.',
        vocab: [['le soir', 'por la noche'], ['la copine', 'la novia, la amiga'], ['regarder', 'mirar, ver']] },
      { parts: [['S', 'Ils'], ['V', 'adorent'], ['O', 'les séries policières.']],
        es: 'Les encantan las series policiacas.',
        note: '«adorer» = encantar. Como aimer: el sujeto es quien siente.',
        vocab: [['adorer', 'encantar'], ['policier', 'policiaco']] },
    ],
    questions: [
      { q: '¿Dónde trabaja Thomas?', opts: ['En un hospital', 'En una banca', 'En Burdeos, en un coche', 'En casa'], a: 0 },
      { q: '¿Qué hace Thomas por la mañana?', opts: ['Escucha la radio en el coche', 'Ve una serie', 'Come con sus compañeros', 'Estudia'], a: 0 },
      { q: '¿Qué les encanta a Thomas y a su novia?', opts: ['Las series policiacas', 'La radio', 'El cine francés', 'Cocinar'], a: 0 },
    ],
  },
};
})();
