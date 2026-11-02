// Francés · Unidad 1 · Saludar y presentarse (être y pronombres)
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;

UNITS.f01 = {
  theory: [
    {
      h: 'Saludar: depende de la hora y de con quién hablas',
      html: `<table class="t">
        <tr><th>Francés</th><th>Cuándo</th></tr>
        <tr><td>${say('Bonjour')}</td><td>Buenos días / buenas tardes. Se usa <b>todo el día</b> hasta que anochece. Es el saludo básico: en Francia, entrar en una tienda sin decir «bonjour» se considera de mala educación.</td></tr>
        <tr><td>${say('Bonsoir')}</td><td>Buenas tardes / buenas noches, al llegar a un sitio por la tarde-noche.</td></tr>
        <tr><td>${say('Salut')}</td><td>Hola / adiós entre amigos. Informal.</td></tr>
        <tr><td>${say('Au revoir')}</td><td>Adiós (siempre correcto).</td></tr>
        <tr><td>${say('Bonne nuit')}</td><td>Buenas noches, solo al irte a dormir.</td></tr>
      </table>
      <p>Para preguntar qué tal: ${say('Comment allez-vous ?')} (formal) o ${say('Ça va ?')} (informal). La respuesta típica: ${say('Ça va bien, merci. Et vous ?')}</p>`,
    },
    {
      h: 'Tu y vous: tú y usted',
      html: `<p>Como en español, el francés distingue el trato informal y el formal:</p>
      <ul>
        <li><b>tu</b> = tú: amigos, familia, niños y gente joven en ambientes informales.</li>
        <li><b>vous</b> = usted: desconocidos, el trabajo, las tiendas, las personas mayores.</li>
      </ul>
      <p>Ojo: <b>vous</b> también es el plural «vosotros/ustedes». En Francia se usa el <b>vous</b> mucho más que el «usted» en España. Ante la duda, usa <b>vous</b> hasta que la otra persona te proponga tutearos (<i>on peut se tutoyer ?</i>).</p>`,
    },
    {
      h: 'El verbo être (ser y estar)',
      html: `<p>En francés, <b>ser</b> y <b>estar</b> son el mismo verbo: <b>être</b>. Y, a diferencia del español, <b>el pronombre es obligatorio</b>: no se puede decir solo «suis», hay que decir «je suis».</p>
      <table class="t">
        <tr><th>Pronombre</th><th>être</th><th>Español</th></tr>
        <tr><td>je</td><td>${say('je suis', 'suis')}</td><td>yo soy / estoy</td></tr>
        <tr><td>tu</td><td>${say('tu es', 'es')}</td><td>tú eres / estás</td></tr>
        <tr><td>il / elle / on</td><td>${say('il est', 'est')}</td><td>él / ella es · «on» = nosotros (coloquial)</td></tr>
        <tr><td>nous</td><td>${say('nous sommes', 'sommes')}</td><td>nosotros somos</td></tr>
        <tr><td>vous</td><td>${say('vous êtes', 'êtes')}</td><td>vosotros sois / usted es</td></tr>
        <tr><td>ils / elles</td><td>${say('ils sont', 'sont')}</td><td>ellos / ellas son</td></tr>
      </table>
      <p><b>tu es</b> y <b>il est</b> se escriben distinto pero suenan igual: «é». Y la <b>s</b> final casi nunca se pronuncia: <i>je suis</i> suena «yə suí».</p>`,
    },
    {
      h: 'Presentarte en tres frases',
      html: `<ul>
        <li><b>El nombre</b>: ${say('Je m\'appelle Laura.')} (literalmente «me llamo») o ${say('Je suis Laura.')}</li>
        <li><b>La nacionalidad</b>: ${say('Je suis espagnol.')} (hombre) / ${say('Je suis espagnole.')} (mujer). Las nacionalidades se escriben en <b>minúscula</b>.</li>
        <li><b>De dónde eres</b>: ${say('Je suis de Barcelone.')}</li>
        <li><b>La profesión</b>, sin artículo: ${say('Je suis étudiant.')} (no «un étudiant»).</li>
      </ul>
      <p>Para preguntar: ${say('Comment tu t\'appelles ?')} (¿cómo te llamas?) · ${say('Tu es d\'où ?')} (¿de dónde eres?)</p>`,
    },
    {
      h: 'Dos sonidos que no tenemos en español',
      html: `<ul>
        <li><b>La u francesa</b> (${say('tu')}): pon la boca para decir «u» y di «i». Es la misma que la ü alemana. No es nuestra «u»: <i>tu</i> no suena «tu», suena casi «tü».</li>
        <li><b>La r francesa</b> (${say('Paris')}): se pronuncia en la garganta, como una «j» muy suave. Nunca es vibrante como nuestra «rr».</li>
      </ul>
      <p>Y la regla de oro: <b>las consonantes finales casi nunca suenan</b>. <i>Paris</i> = «parí», <i>vous êtes</i> = «vu-zet».</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: 'Entras en una panadería a las 11 de la mañana. ¿Qué dices?', opts: ['Bonjour !', 'Bonsoir !', 'Bonne nuit !', 'Salut !'], a: 0, why: '«Bonjour» se usa durante todo el día. «Salut» es demasiado informal para una tienda.' },
    { type: 'mcq', q: 'Hablas con una persona mayor que no conoces. ¿Cómo le preguntas qué tal?', opts: ['Comment allez-vous ?', 'Ça va, toi ?', 'Salut, ça va ?', 'Comment vas-tu ?'], a: 0, why: 'Con desconocidos y personas mayores se usa «vous».' },
    { type: 'mcq', q: 'Nous ___ espagnols.', opts: ['sommes', 'êtes', 'sont', 'suis'], a: 0, why: 'nous → sommes.' },
    { type: 'mcq', q: 'Elle ___ française.', opts: ['est', 'es', 'êtes', 'suis'], a: 0, why: 'il / elle / on → est.' },
    { type: 'mcq', q: '¿Cuál es correcta?', opts: ['Je suis professeur.', 'Je suis un professeur.', 'Suis professeur.', 'Je professeur suis.'], a: 0, why: 'La profesión va sin artículo, y el pronombre «je» es obligatorio.' },
    { type: 'mcq', q: 'Laura es española. ¿Cómo lo dice ella?', opts: ['Je suis espagnole.', 'Je suis espagnol.', 'Je suis Espagnole.', 'Je suis de espagnole.'], a: 0, why: 'Mujer → espagnole (con -e). Las nacionalidades van en minúscula.' },
    { type: 'gap', q: 'Vous ___ de Madrid ? (être)', a: ['êtes'], why: 'vous → êtes. Lleva acento circunflejo en la ê.' },
    { type: 'gap', q: 'Ils ___ très sympas. (être)', a: ['sont'], why: 'ils / elles → sont.' },
    { type: 'gap', q: 'Tu ___ étudiant ? (être)', a: ['es'], why: 'tu → es. Suena igual que «est».' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo.', parts: [['S', 'Mon frère'], ['V', 'est'], ['O', 'médecin'], ['X', 'à Lyon.']], why: '«est» es el verbo être: «mi hermano es médico en Lyon».' },
    { type: 'find', role: 'S', prompt: 'Toca el sujeto.', parts: [['S', 'Nous'], ['V', 'sommes'], ['O', 'en retard'], ['X', 'aujourd\'hui.']], why: 'El sujeto es «nous». En francés nunca se omite.' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['Je', 'm\'appelle', 'Marc', 'et', 'je', 'suis', 'canadien'], a: 'Je m\'appelle Marc et je suis canadien', why: 'Me llamo Marc y soy canadiense. Fíjate en que «je» se repite.' },
  ],

  reading: {
    title: 'Au café',
    level: 'A1',
    sentences: [
      { parts: [['W', 'Bonjour !'], ['S', 'Je'], ['V', 'm\'appelle'], ['O', 'Sophie.']],
        es: '¡Hola! Me llamo Sophie.',
        note: '«m\'appelle»: la «me» pierde la e delante de vocal (apostrophe). Literalmente «me llamo».',
        vocab: [['bonjour', 'hola, buenos días'], ['je m\'appelle', 'me llamo']] },
      { parts: [['S', 'Je'], ['V', 'suis'], ['O', 'française'], ['C', 'et'], ['S', 'je'], ['V', 'suis'], ['O', 'de Lyon.']],
        es: 'Soy francesa y soy de Lyon.',
        note: 'Dos frases con el mismo verbo, être. Sophie es mujer: française, con -e.',
        vocab: [['français / française', 'francés / francesa'], ['de', 'de (origen)']] },
      { parts: [['S', 'Et vous,'], ['V', 'vous êtes'], ['O', 'd\'où ?']],
        es: 'Y usted, ¿de dónde es?',
        note: 'Pregunta informal de estructura muy hablada: el interrogativo «d\'où» va al final.',
        vocab: [['d\'où', 'de dónde'], ['vous êtes', 'usted es / vosotros sois']] },
      { parts: [['S', 'Moi,'], ['S', 'je'], ['V', 'suis'], ['O', 'espagnol,'], ['O', 'de Valence.']],
        es: 'Yo soy español, de Valencia.',
        note: '«Moi» refuerza el pronombre, como «yo» en «yo soy…». No sustituye a «je», que sigue siendo obligatorio.',
        vocab: [['moi', 'yo (para remarcar)'], ['espagnol', 'español']] },
      { parts: [['S', 'Je'], ['V', 'suis'], ['O', 'étudiant'], ['X', 'à Paris'], ['X', 'cette année.']],
        es: 'Soy estudiante en París este año.',
        note: '«étudiant» va sin artículo: con las profesiones no se pone «un».',
        vocab: [['étudiant', 'estudiante'], ['à Paris', 'en París'], ['cette année', 'este año']] },
      { parts: [['W', 'Enchantée !'], ['S', 'Vous'], ['V', 'êtes'], ['O', 'ici'], ['X', 'pour longtemps ?']],
        es: '¡Encantada! ¿Va a estar aquí mucho tiempo?',
        note: 'Sophie dice «enchantée» con -e porque es mujer. Literalmente: «¿Está aquí por mucho tiempo?».',
        vocab: [['enchanté(e)', 'encantado/a'], ['ici', 'aquí'], ['longtemps', 'mucho tiempo']] },
      { parts: [['W', 'Non,'], ['X', 'seulement'], ['O', 'six mois.'], ['W', 'Au revoir, Sophie !']],
        es: 'No, solo seis meses. ¡Adiós, Sophie!',
        note: 'Frase sin verbo, como en español. «Au revoir» es la despedida universal.',
        vocab: [['seulement', 'solo, solamente'], ['mois', 'mes'], ['au revoir', 'adiós']] },
    ],
    questions: [
      { q: '¿De dónde es Sophie?', opts: ['De Lyon', 'De París', 'De Valencia', 'De Barcelona'], a: 0 },
      { q: '¿Qué hace el chico en París?', opts: ['Es estudiante', 'Es profesor', 'Está de vacaciones', 'Trabaja en un café'], a: 0 },
      { q: '¿Por qué Sophie dice «enchantée» y no «enchanté»?', opts: ['Porque es mujer', 'Porque es formal', 'Porque es una pregunta', 'Porque está en plural'], a: 0 },
    ],
  },
};
})();
