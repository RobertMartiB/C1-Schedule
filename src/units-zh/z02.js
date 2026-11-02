// Chino · Unidad 2 · Saludar y presentarse
(() => {
const hz = (han, py) => `<button class="saybtn" data-say="${han}"><span class="big">${han}</span> ${py}</button>`;

UNITS.z02 = {
  theory: [
    {
      h: 'Saludar',
      html: `<table class="t">
        <tr><th>Chino</th><th>Significado</th></tr>
        <tr><td>${hz('你好！', 'nǐ hǎo')}</td><td>Hola (a una persona).</td></tr>
        <tr><td>${hz('您好！', 'nín hǎo')}</td><td>Hola (respetuoso: a mayores, clientes, jefes). 您 es el «usted» chino.</td></tr>
        <tr><td>${hz('你们好！', 'nǐmen hǎo')}</td><td>Hola (a varias personas). 们 (men) forma el plural de los pronombres.</td></tr>
        <tr><td>${hz('早上好！', 'zǎoshang hǎo')}</td><td>Buenos días.</td></tr>
        <tr><td>${hz('再见！', 'zàijiàn')}</td><td>Adiós.</td></tr>
      </table>`,
    },
    {
      h: 'Los pronombres: más fáciles que en español',
      html: `<table class="t">
        <tr><th>Singular</th><th>Plural (+ 们 men)</th></tr>
        <tr><td>${hz('我', 'wǒ')} yo</td><td>${hz('我们', 'wǒmen')} nosotros</td></tr>
        <tr><td>${hz('你', 'nǐ')} tú</td><td>${hz('你们', 'nǐmen')} vosotros</td></tr>
        <tr><td>${hz('他', 'tā')} él · ${hz('她', 'tā')} ella</td><td>${hz('他们', 'tāmen')} ellos</td></tr>
      </table>
      <p><b>他</b> (él) y <b>她</b> (ella) suenan exactamente igual: tā. Solo se distinguen por escrito (人 a la izquierda para él, 女 «mujer» para ella).</p>`,
    },
    {
      h: 'Los verbos no se conjugan',
      html: `<p>¡La mejor noticia del chino! Los verbos <b>no cambian</b> según la persona ni el tiempo:</p>
      <ul>
        <li>${hz('我是学生。', 'Wǒ shì xuésheng.')} Yo soy estudiante.</li>
        <li>${hz('他是学生。', 'Tā shì xuésheng.')} Él es estudiante.</li>
        <li>${hz('我们是学生。', 'Wǒmen shì xuésheng.')} Nosotros somos estudiantes.</li>
      </ul>
      <p>El orden es como en español: <b>sujeto + verbo + complemento</b>. El verbo <b>是 (shì)</b> = ser, pero solo se usa con sustantivos: para decir «estoy bien» no se usa 是 (lo verás pronto).</p>`,
    },
    {
      h: 'Presentarte',
      html: `<ul>
        <li>${hz('我叫安娜。', 'Wǒ jiào Ānnà.')} Me llamo Ana. (叫 = llamarse)</li>
        <li>${hz('我是西班牙人。', 'Wǒ shì Xībānyá rén.')} Soy español/a. País + 人 (persona) = nacionalidad.</li>
        <li>${hz('认识你很高兴。', 'Rènshi nǐ hěn gāoxìng.')} Encantado/a de conocerte.</li>
      </ul>
      <p>Y para preguntar: ${hz('你叫什么名字？', 'Nǐ jiào shénme míngzi?')} (¿cómo te llamas?, literalmente «¿tú llamas qué nombre?»). Fíjate: la palabra interrogativa <b>什么</b> (qué) va <b>donde iría la respuesta</b>, no al principio.</p>`,
    },
    {
      h: 'Países',
      html: `<ul>
        <li>${hz('中国', 'Zhōngguó')} China → ${hz('中国人', 'Zhōngguó rén')} chino/a</li>
        <li>${hz('西班牙', 'Xībānyá')} España</li>
        <li>${hz('墨西哥', 'Mòxīgē')} México</li>
        <li>${hz('阿根廷', 'Āgēntíng')} Argentina</li>
        <li>${hz('美国', 'Měiguó')} Estados Unidos (el «país bonito»)</li>
      </ul>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: 'Saludas a tu profesor mayor de forma respetuosa:', opts: ['您好！(nín hǎo)', '你好！(nǐ hǎo)', '你们好！(nǐmen hǎo)', '再见！(zàijiàn)'], a: 0, why: '您 (nín) es la forma respetuosa de «tú».' },
    { type: 'mcq', q: '«Nosotros» en chino es…', opts: ['我们 (wǒmen)', '你们 (nǐmen)', '他们 (tāmen)', '我 (wǒ)'], a: 0, why: '我 (yo) + 们 (plural) = nosotros.' },
    { type: 'mcq', q: '¿Cómo se dice «Ella es estudiante»?', opts: ['她是学生。', '她是学生们。', '她们是学生。', '她叫学生。'], a: 0, why: 'El verbo 是 no cambia y el sustantivo no necesita plural.' },
    { type: 'mcq', q: '他 y 她…', opts: ['suenan igual (tā), se escriben distinto', 'se escriben igual, suenan distinto', 'significan lo mismo', 'son plural'], a: 0, why: '他 (él) y 她 (ella) se pronuncian igual: tā.' },
    { type: 'mcq', q: '¿Qué significa 西班牙人?', opts: ['español/a', 'España', 'el idioma español', 'Hispanoamérica'], a: 0, why: 'País + 人 (persona) = nacionalidad.' },
    { type: 'mcq', q: '¿Dónde va 什么 (qué) en una pregunta?', opts: ['Donde iría la respuesta', 'Siempre al principio', 'Siempre al final', 'Después del sujeto'], a: 0, why: 'En chino el orden no cambia: la palabra interrogativa ocupa el lugar de la respuesta.' },
    { type: 'gap', q: 'Escribe en pinyin, sin tono: 我 = ___', a: ['wo'], why: '我 = wǒ, yo.' },
    { type: 'gap', q: 'Escribe en pinyin, sin tono, «llamarse» (叫): ___', a: ['jiao'], why: '叫 = jiào.' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo.', parts: [['S', '我'], ['V', '叫'], ['O', '路易斯。']], why: '叫 (jiào) = llamarse: «Me llamo Luis».' },
    { type: 'find', role: 'S', prompt: 'Toca el sujeto.', parts: [['S', '他们'], ['V', '是'], ['O', '中国人。']], why: '他们 (tāmen) = ellos.' },
    { type: 'order', prompt: 'Ordena: «Yo soy mexicano».', words: ['我', '是', '墨西哥', '人'], a: '我 是 墨西哥 人', why: 'Sujeto + 是 + país + 人.' },
    { type: 'order', prompt: 'Ordena: «¿Cómo te llamas?»', words: ['你', '叫', '什么', '名字'], a: '你 叫 什么 名字', why: 'Literalmente «tú llamas qué nombre»: 什么 va donde iría la respuesta.' },
  ],

  reading: {
    title: '在学校 · En la escuela',
    level: 'Inicial',
    sentences: [
      { parts: [['W', '你好！']], es: 'Nǐ hǎo! · ¡Hola!', note: 'Recuerda: «ní hǎo».', vocab: [['你好 (nǐ hǎo)', 'hola']] },
      { parts: [['S', '我'], ['V', '叫'], ['O', '王明。']], es: 'Wǒ jiào Wáng Míng. · Me llamo Wang Ming.', note: 'En chino el apellido va primero: Wáng es el apellido, Míng el nombre.', vocab: [['叫 (jiào)', 'llamarse']] },
      { parts: [['S', '我'], ['V', '是'], ['O', '中国人。']], es: 'Wǒ shì Zhōngguó rén. · Soy chino.', note: 'Sujeto + 是 + nacionalidad.', vocab: [['是 (shì)', 'ser'], ['中国人 (Zhōngguó rén)', 'chino/a']] },
      { parts: [['S', '你'], ['V', '叫'], ['O', '什么名字？']], es: 'Nǐ jiào shénme míngzi? · ¿Cómo te llamas?', note: '什么 (qué) ocupa el lugar de la respuesta.', vocab: [['什么 (shénme)', 'qué'], ['名字 (míngzi)', 'nombre']] },
      { parts: [['S', '我'], ['V', '叫'], ['O', '卡门，'], ['S', '我'], ['V', '是'], ['O', '西班牙人。']], es: 'Wǒ jiào Kǎmén, wǒ shì Xībānyá rén. · Me llamo Carmen, soy española.', note: 'Los nombres extranjeros se adaptan con caracteres que suenan parecido: 卡门 = Kǎmén.', vocab: [['西班牙人 (Xībānyá rén)', 'español/a']] },
      { parts: [['S', '她'], ['V', '是'], ['O', '我的老师。']], es: 'Tā shì wǒ de lǎoshī. · Ella es mi profesora.', note: '的 (de) marca la posesión: 我的 = mío/mi. Lo verás a fondo en la unidad 9.', vocab: [['老师 (lǎoshī)', 'profesor/a'], ['我的 (wǒ de)', 'mi']] },
      { parts: [['W', '认识你很高兴！']], es: 'Rènshi nǐ hěn gāoxìng! · ¡Encantado de conocerte!', note: 'Literalmente «conocerte (me hace) muy contento».', vocab: [['认识 (rènshi)', 'conocer'], ['高兴 (gāoxìng)', 'contento']] },
    ],
    questions: [
      { q: '¿Cuál es el apellido de 王明 (Wáng Míng)?', opts: ['Wáng', 'Míng', 'Los dos', 'Ninguno'], a: 0 },
      { q: '¿De dónde es Carmen?', opts: ['De España', 'De China', 'De México', 'De Argentina'], a: 0 },
      { q: '¿Quién es la profesora?', opts: ['Ella (她)', 'Carmen', 'Wang Ming', 'Yo'], a: 0 },
    ],
  },
};
})();
