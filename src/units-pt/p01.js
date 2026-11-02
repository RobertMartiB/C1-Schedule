// Portugués · Unidad 1 · Saludar y presentarse (você, tu y las vocales nasales)
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;

UNITS.p01 = {
  theory: [
    {
      h: 'Saludar en portugués',
      html: `<table class="t">
        <tr><th>Portugués</th><th>Cuándo</th></tr>
        <tr><td>${say('Olá!')} · ${say('Oi!')}</td><td>Hola. <b>Oi</b> es muy brasileño e informal.</td></tr>
        <tr><td>${say('Bom dia!')}</td><td>Buenos días (hasta el mediodía).</td></tr>
        <tr><td>${say('Boa tarde!')}</td><td>Buenas tardes.</td></tr>
        <tr><td>${say('Boa noite!')}</td><td>Buenas noches, al llegar <b>y</b> al irse.</td></tr>
        <tr><td>${say('Tchau!')}</td><td>Adiós (informal). También ${say('Até logo!')} (hasta luego) y ${say('Até amanhã!')} (hasta mañana).</td></tr>
      </table>
      <p>Para preguntar qué tal: ${say('Tudo bem?')} y se responde ${say('Tudo bem!')} o ${say('Tudo bom!')} En Portugal también: ${say('Como está?')}</p>`,
    },
    {
      h: 'Você y tu: aquí cambian Brasil y Portugal',
      html: `<ul>
        <li><b>Brasil</b>: se usa casi siempre <b>você</b> para «tú», y se conjuga como «él»: <i>você é</i> = tú eres. Para ser formal: <b>o senhor / a senhora</b>.</li>
        <li><b>Portugal</b>: se usa <b>tu</b> con amigos y familia (<i>tu és</i>) y <b>você</b> o <b>o senhor</b> para ser más formal.</li>
      </ul>
      <p>En este curso usamos sobre todo <b>você</b>, que se entiende en todos los países de habla portuguesa.</p>`,
    },
    {
      h: 'El verbo ser',
      html: `<table class="t">
        <tr><th>Pronombre</th><th>ser</th><th>Español</th></tr>
        <tr><td>eu</td><td>${say('eu sou', 'sou')}</td><td>yo soy</td></tr>
        <tr><td>tu</td><td>${say('tu és', 'és')}</td><td>tú eres (Portugal)</td></tr>
        <tr><td>você / ele / ela</td><td>${say('você é', 'é')}</td><td>tú eres (Brasil) · él / ella es</td></tr>
        <tr><td>nós</td><td>${say('nós somos', 'somos')}</td><td>nosotros somos</td></tr>
        <tr><td>vocês / eles / elas</td><td>${say('eles são', 'são')}</td><td>vosotros sois · ellos son</td></tr>
      </table>
      <p>Fíjate: <b>é</b> (es) lleva acento; <b>e</b> (y) no. Y <b>vocês</b> sustituye a «vosotros»: el portugués no tiene una forma propia como «sois».</p>`,
    },
    {
      h: 'Presentarte',
      html: `<ul>
        <li>${say('Meu nome é Laura.')} (mi nombre es Laura) o ${say('Eu me chamo Laura.')}</li>
        <li>${say('Sou espanhola, de Madri.')} (soy española, de Madrid). En Brasil, Madrid se escribe <b>Madri</b>.</li>
        <li>${say('Eu moro em São Paulo.')} (vivo en São Paulo): «vivir» en un sitio es <b>morar</b>.</li>
        <li>${say('Prazer!')} o ${say('Muito prazer!')} = ¡encantado/a!</li>
      </ul>`,
    },
    {
      h: 'Las vocales nasales: el sonido más portugués',
      html: `<p>Cuando una vocal lleva <b>~</b> (til) o va seguida de <b>m / n</b> al final de sílaba, se pronuncia <b>por la nariz</b>:</p>
      <ul>
        <li>${say('não')} (no), ${say('pão')} (pan), ${say('irmão')} (hermano): «ão» suena como «aun» dicho por la nariz, sin cerrar la n.</li>
        <li>${say('bom')} (bueno), ${say('sim')} (sí): la m final no se pronuncia como m; solo nasaliza la vocal.</li>
      </ul>
      <p>Otros sonidos: <b>lh</b> suena como nuestra «ll» (${say('filho')}), <b>nh</b> como «ñ» (${say('amanhã')}), y <b>ç</b> como una «s» (${say('coração')}). En Brasil, <b>de</b> y <b>te</b> finales suenan «yi» y «chi»: ${say('cidade')} («sidáyi»), ${say('noite')} («nóichi»).</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: 'Te encuentras a un amigo brasileño. ¿Qué le preguntas?', opts: ['Oi, tudo bem?', 'Boa noite, senhor.', 'Até amanhã!', 'Tchau, tudo bem?'], a: 0, why: '«Oi, tudo bem?» es el saludo informal más típico de Brasil.' },
    { type: 'mcq', q: 'En Brasil, «tú eres» se dice normalmente…', opts: ['você é', 'tu és', 'você és', 'tu é'], a: 0, why: 'En Brasil se usa «você», que se conjuga como «él»: você é.' },
    { type: 'mcq', q: 'Nós ___ amigos.', opts: ['somos', 'são', 'é', 'sou'], a: 0, why: 'nós → somos.' },
    { type: 'mcq', q: 'Ellos son de Lisboa →', opts: ['Eles são de Lisboa.', 'Eles é de Lisboa.', 'Eles somos de Lisboa.', 'Eles sou de Lisboa.'], a: 0, why: 'eles → são (con vocal nasal).' },
    { type: 'mcq', q: '«Vivo en Río» en portugués:', opts: ['Moro no Rio.', 'Vivo em Rio.', 'Sou no Rio.', 'Estou de Rio.'], a: 0, why: '«Vivir» en un lugar es «morar». «no» = em + o (en el).' },
    { type: 'mcq', q: '¿Cómo suena «lh» en «filho»?', opts: ['Como nuestra «ll»', 'Como «l» + «h» aspirada', 'Como «j»', 'Como «ñ»'], a: 0, why: 'lh = ll, nh = ñ.' },
    { type: 'gap', q: 'Eu ___ brasileiro. (ser)', a: ['sou'], why: 'eu → sou.' },
    { type: 'gap', q: 'Você ___ muito simpático. (ser)', a: ['é'], why: 'você → é, con acento.' },
    { type: 'gap', q: '«No» en portugués: ___', a: ['não'], why: '«não», con vocal nasal.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo.', parts: [['S', 'Minha irmã'], ['V', 'mora'], ['X', 'em Belo Horizonte.']], why: '«mora» (vive) es el verbo.' },
    { type: 'find', role: 'S', prompt: 'Toca el sujeto.', parts: [['S', 'Vocês'], ['V', 'são'], ['O', 'muito legais.']], why: '«Vocês» (vosotros) es el sujeto. «legal» en Brasil significa «guay, majo».' },
    { type: 'order', prompt: 'Ordena: «Mi nombre es Pedro y soy de Chile».', words: ['Meu', 'nome', 'é', 'Pedro', 'e', 'sou', 'do', 'Chile'], a: 'Meu nome é Pedro e sou do Chile', why: '«do» = de + o: algunos países llevan artículo (o Chile, o Brasil).' },
  ],

  reading: {
    title: 'Na praia',
    level: 'A1',
    sentences: [
      { parts: [['W', 'Oi!'], ['S', 'Meu nome'], ['V', 'é'], ['O', 'Camila.']],
        es: '¡Hola! Mi nombre es Camila.',
        note: '«Meu nome é…» es la forma más habitual de presentarse.',
        vocab: [['oi', 'hola'], ['meu nome', 'mi nombre']] },
      { parts: [['V', 'Sou'], ['O', 'brasileira'], ['C', 'e'], ['V', 'moro'], ['X', 'em Salvador,'], ['X', 'na Bahia.']],
        es: 'Soy brasileña y vivo en Salvador, en Bahía.',
        note: 'Sin pronombre, como en español. «na» = em + a (en la).',
        vocab: [['brasileira', 'brasileña'], ['morar', 'vivir (residir)'], ['na', 'en la']] },
      { parts: [['S', 'Você'], ['V', 'é'], ['O', 'de onde?']],
        es: '¿De dónde eres?',
        note: 'Con «você», el verbo va en tercera persona: você é. El interrogativo puede ir al final en la lengua hablada.',
        vocab: [['de onde', 'de dónde'], ['você', 'tú (Brasil)']] },
      { parts: [['V', 'Sou'], ['X', 'de Sevilha,'], ['X', 'na Espanha.'], ['S', 'Eu'], ['V', 'estou'], ['X', 'aqui'], ['X', 'de férias.']],
        es: 'Soy de Sevilla, en España. Estoy aquí de vacaciones.',
        note: 'Ojo: en portugués «España» lleva artículo: «a Espanha», y por eso «na Espanha».',
        vocab: [['Sevilha', 'Sevilla'], ['a Espanha', 'España'], ['estar de férias', 'estar de vacaciones']] },
      { parts: [['S', 'A praia'], ['V', 'é'], ['O', 'linda,'], ['C', 'não é?']],
        es: 'La playa es preciosa, ¿verdad?',
        note: '«não é?» = ¿verdad?, ¿no? En el habla rápida se oye «né?».',
        vocab: [['a praia', 'la playa'], ['lindo / linda', 'precioso/a'], ['não é? / né?', '¿verdad?']] },
      { parts: [['W', 'Muito prazer,'], ['O', 'Camila!'], ['W', 'Tchau!']],
        es: '¡Encantado, Camila! ¡Adiós!',
        note: '«Tchau» viene del italiano «ciao».',
        vocab: [['muito prazer', 'mucho gusto'], ['tchau', 'adiós']] },
    ],
    questions: [
      { q: '¿Dónde vive Camila?', opts: ['En Salvador', 'En Sevilla', 'En Río', 'En Lisboa'], a: 0 },
      { q: '¿Qué hace el chico en Brasil?', opts: ['Está de vacaciones', 'Trabaja', 'Estudia', 'Vive allí'], a: 0 },
      { q: '¿Qué significa «né?» en el habla rápida?', opts: ['¿verdad?', 'no', 'nada', 'nunca'], a: 0 },
    ],
  },
};
})();
