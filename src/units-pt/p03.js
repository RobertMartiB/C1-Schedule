// Portugués · Unidad 3 · Verbos en -ar, -er, -ir en presente
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;

UNITS.p03 = {
  theory: [
    {
      h: 'Casi como en español',
      html: `<p>Los verbos portugueses acaban en <b>-ar, -er, -ir</b>, como los nuestros, y el presente se forma de manera muy parecida:</p>
      <table class="t">
        <tr><th></th><th>falar (hablar)</th><th>comer</th><th>abrir</th></tr>
        <tr><td>eu</td><td>${say('falo')}</td><td>${say('como')}</td><td>${say('abro')}</td></tr>
        <tr><td>tu (Portugal)</td><td>${say('falas')}</td><td>${say('comes')}</td><td>${say('abres')}</td></tr>
        <tr><td>você / ele / ela</td><td>${say('fala')}</td><td>${say('come')}</td><td>${say('abre')}</td></tr>
        <tr><td>nós</td><td>${say('falamos')}</td><td>${say('comemos')}</td><td>${say('abrimos')}</td></tr>
        <tr><td>vocês / eles / elas</td><td>${say('falam')}</td><td>${say('comem')}</td><td>${say('abrem')}</td></tr>
      </table>
      <p>Como en Brasil se usa <b>você</b> y <b>vocês</b>, en la práctica solo necesitas <b>cuatro formas</b>: eu, você/ele, nós y vocês/eles.</p>`,
    },
    {
      h: 'La -m final: otra nasal',
      html: `<p>La terminación de <b>eles</b> acaba en <b>-m</b>, que no se pronuncia como una m: nasaliza la vocal.</p>
      <ul>
        <li>${say('eles falam')}: suena «fálaun», con la a nasal.</li>
        <li>${say('eles comem')}: suena «cómein», con la e nasal.</li>
      </ul>`,
    },
    {
      h: 'Verbos muy usados que se parecen al español… o no',
      html: `<table class="t">
        <tr><th>Portugués</th><th>Español</th><th>Ojo</th></tr>
        <tr><td>${say('morar')}</td><td>vivir (en un sitio)</td><td>«viver» también existe, pero para «vivir la vida».</td></tr>
        <tr><td>${say('trabalhar')}</td><td>trabajar</td><td>lh = ll.</td></tr>
        <tr><td>${say('gostar de')}</td><td>gustar</td><td>Funciona como «aimer» en francés: <b>Eu gosto de café</b> = me gusta el café. ¡Siempre con «de»!</td></tr>
        <tr><td>${say('acordar')}</td><td>despertarse</td><td>Falso amigo: no es «acordarse» (= lembrar).</td></tr>
        <tr><td>${say('tomar')}</td><td>tomar, beber</td><td>Tomar banho = ducharse.</td></tr>
        <tr><td>${say('assistir')}</td><td>ver (una película, la tele)</td><td>Assistir a um filme = ver una película.</td></tr>
      </table>`,
    },
    {
      h: '«Gostar de»: el gusto al revés',
      html: `<p>En español, la cosa que gusta es el sujeto (<i>me gusta el café</i>). En portugués es al revés, y además lleva <b>de</b>:</p>
      <ul>
        <li>${say('Eu gosto de música.')} Me gusta la música.</li>
        <li>${say('Ela gosta do Brasil.')} (do = de + o) Le gusta Brasil.</li>
        <li>${say('Nós gostamos de viajar.')} Nos gusta viajar.</li>
      </ul>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: 'Eu ___ português. (falar)', opts: ['falo', 'fala', 'falas', 'falam'], a: 0, why: 'eu → -o.' },
    { type: 'mcq', q: 'Vocês ___ aqui? (morar)', opts: ['moram', 'moramos', 'mora', 'morais'], a: 0, why: 'vocês se conjuga como eles: moram.' },
    { type: 'mcq', q: 'Me gusta el chocolate →', opts: ['Eu gosto de chocolate.', 'Me gosta o chocolate.', 'Eu gosto chocolate.', 'Gosto o chocolate.'], a: 0, why: '«gostar de»: el sujeto es quien siente, y siempre lleva «de».' },
    { type: 'mcq', q: '«Eu acordo às sete» significa…', opts: ['Me despierto a las siete', 'Me acuerdo a las siete', 'Quedo a las siete', 'Acuerdo a las siete'], a: 0, why: 'Falso amigo: acordar = despertarse. Acordarse = lembrar.' },
    { type: 'mcq', q: 'Nós ___ cedo. (jantar, cenar)', opts: ['jantamos', 'jantam', 'janta', 'jantemos'], a: 0, why: 'nós → -amos.' },
    { type: 'mcq', q: '¿Cómo suena la -m de «falam»?', opts: ['Nasaliza la vocal: «fálaun»', 'Como una m clara', 'No suena nada y la a es normal', 'Como una n'], a: 0, why: 'La -m final no se pronuncia como m: hace nasal la vocal.' },
    { type: 'gap', q: 'Ele ___ muito. (trabalhar)', a: ['trabalha'], why: 'ele → -a.' },
    { type: 'gap', q: 'Eles ___ pizza. (comer)', a: ['comem'], why: 'eles → -em.' },
    { type: 'gap', q: 'Ela gosta ___ Brasil. (del)', a: ['do'], why: 'de + o = do.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo.', parts: [['S', 'Meus pais'], ['V', 'moram'], ['X', 'no interior.']], why: '«moram» (viven).' },
    { type: 'find', role: 'O', prompt: 'Toca lo que le gusta.', parts: [['S', 'Minha irmã'], ['V', 'gosta'], ['O', 'de dançar.']], why: '«de dançar» = bailar, lo que le gusta.' },
    { type: 'order', prompt: 'Ordena: «Vemos una película los viernes».', words: ['Nós', 'assistimos', 'a', 'um', 'filme', 'às', 'sextas'], a: 'Nós assistimos a um filme às sextas', why: '«assistir a» = ver. «às sextas» = los viernes (sexta-feira).' },
  ],

  reading: {
    title: 'A rotina da Júlia',
    level: 'A1',
    sentences: [
      { parts: [['S', 'Júlia'], ['V', 'mora'], ['X', 'em Porto Alegre'], ['C', 'e'], ['V', 'trabalha'], ['X', 'numa escola.']],
        es: 'Júlia vive en Porto Alegre y trabaja en una escuela.',
        note: '«numa» = em + uma (en una).',
        vocab: [['morar', 'vivir'], ['trabalhar', 'trabajar'], ['numa', 'en una']] },
      { parts: [['S', 'Ela'], ['V', 'acorda'], ['X', 'às seis'], ['C', 'e'], ['V', 'toma'], ['O', 'um café'], ['X', 'bem forte.']],
        es: 'Se despierta a las seis y toma un café bien fuerte.',
        note: '«acorda» = se despierta (falso amigo). En portugués no hace falta el «se».',
        vocab: [['acordar', 'despertarse'], ['às seis', 'a las seis'], ['bem', 'muy, bien']] },
      { parts: [['S', 'Os alunos'], ['V', 'gostam'], ['X', 'muito'], ['O', 'da professora Júlia.']],
        es: 'A los alumnos les gusta mucho la profesora Júlia.',
        note: '«gostar de» + a = «gostar da».',
        vocab: [['o aluno', 'el alumno'], ['gostar de', 'gustar']] },
      { parts: [['X', 'À noite,'], ['S', 'ela'], ['V', 'janta'], ['X', 'com o namorado'], ['C', 'e'], ['V', 'assiste'], ['X', 'a uma série.']],
        es: 'Por la noche cena con su novio y ve una serie.',
        note: '«jantar» = cenar; «assistir a» = ver.',
        vocab: [['à noite', 'por la noche'], ['jantar', 'cenar'], ['o namorado', 'el novio']] },
      { parts: [['X', 'Nos fins de semana,'], ['S', 'eles'], ['V', 'viajam'], ['X', 'para a praia.']],
        es: 'Los fines de semana viajan a la playa.',
        note: '«viajam» con la -m nasal.',
        vocab: [['o fim de semana', 'el fin de semana'], ['viajar', 'viajar'], ['a praia', 'la playa']] },
    ],
    questions: [
      { q: '¿A qué hora se despierta Júlia?', opts: ['A las seis', 'A las siete', 'A las ocho', 'No lo dice'], a: 0 },
      { q: '¿Qué hace Júlia por la noche?', opts: ['Cena con su novio y ve una serie', 'Trabaja', 'Viaja a la playa', 'Corrige exámenes'], a: 0 },
      { q: '¿Qué significa «acordar» en portugués?', opts: ['despertarse', 'acordarse', 'ponerse de acuerdo', 'cerrar'], a: 0 },
    ],
  },
};
})();
