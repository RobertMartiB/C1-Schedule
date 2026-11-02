// Árabe · Unidad 2 · Las letras ج ح خ د ذ ر ز
(() => {
const ar = (w, r) => `<button class="saybtn" data-say="${w}"><span class="big rtl" lang="ar">${w}</span> ${r}</button>`;
const big = w => `<span class="big rtl" lang="ar">${w}</span>`;

UNITS.a02 = {
  theory: [
    {
      h: 'La familia de ج: ج ح خ',
      html: `<p>Tres letras con la misma forma de «gancho», distinguidas por los puntos:</p>
      <table class="t">
        <tr><th>Letra</th><th>Nombre</th><th>Suena</th><th>Puntos</th></tr>
        <tr><td>${ar('ج', '')}</td><td>jīm</td><td>«y» fuerte, como la «j» inglesa de «jam» (en Egipto, «g»)</td><td>uno dentro</td></tr>
        <tr><td>${ar('ح', '')}</td><td>ḥā'</td><td>Una «h» muy aspirada, desde la garganta, como cuando echas el aliento en un cristal</td><td>ninguno</td></tr>
        <tr><td>${ar('خ', '')}</td><td>khā'</td><td>Nuestra «j» fuerte</td><td>uno encima</td></tr>
      </table>
      <p>Para un hispanohablante, ${big('خ')} es muy fácil: es nuestra jota. La difícil es ${big('ح')}: imagina que te has quemado con la sopa y sueltas el aire: «¡hhh!».</p>`,
    },
    {
      h: 'Dos parejas que no se unen por la izquierda: د ذ y ر ز',
      html: `<p>Igual que la alif, estas cuatro letras <b>no se unen a la letra siguiente</b>:</p>
      <table class="t">
        <tr><th>Letra</th><th>Nombre</th><th>Suena</th></tr>
        <tr><td>${ar('د', '')}</td><td>dāl</td><td>d</td></tr>
        <tr><td>${ar('ذ', '')}</td><td>dhāl</td><td>Como la «d» suave de «cada», o la «th» inglesa de «this»</td></tr>
        <tr><td>${ar('ر', '')}</td><td>rā'</td><td>r vibrante, como en «pero» (o «perro» si es doble)</td></tr>
        <tr><td>${ar('ز', '')}</td><td>zāy</td><td>Una s sonora, como el zumbido de una abeja: «zzz»</td></tr>
      </table>
      <p>Diferencia: ${big('د')} y ${big('ذ')} son como un ángulo pequeño que se queda <b>sobre la línea</b>; ${big('ر')} y ${big('ز')} son una curva que <b>baja por debajo</b> de la línea.</p>`,
    },
    {
      h: 'Las seis letras que no se unen a la siguiente',
      html: `<p>Ya las conoces todas menos una: ${big('ا')} ${big('د')} ${big('ذ')} ${big('ر')} ${big('ز')} y ${big('و')} (wāw, unidad 5). Después de ellas siempre hay un pequeño hueco, aunque la palabra continúe:</p>
      <p>${ar('دار', 'dār · casa, hogar')}: د no se une a ا, y ا no se une a ر. ¡Tres letras sueltas en una palabra!</p>`,
    },
    {
      h: 'El sukun: cuando no hay vocal',
      html: `<p>Un pequeño círculo encima de una letra, ${big('بْ')}, se llama <b>sukun</b> e indica que esa consonante <b>no lleva vocal</b>:</p>
      <p>${ar('بَحْر', 'baḥr · mar')}: بَ (ba) + حْ (ḥ, sin vocal) + ر (r).</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '¿Qué letra suena como nuestra jota fuerte?', opts: ['خ', 'ح', 'ج', 'ه'], a: 0, why: 'خ (khā\'), con un punto encima, es nuestra j.' },
    { type: 'mcq', q: '¿Qué letra tiene un punto dentro del gancho?', opts: ['ج', 'ح', 'خ', 'د'], a: 0, why: 'ج (jīm) tiene el punto dentro (debajo del gancho).' },
    { type: 'mcq', q: '¿Cuál de estas letras NO se une a la letra siguiente?', opts: ['ر', 'ب', 'ت', 'ج'], a: 0, why: 'ر es una de las seis letras que no se unen por la izquierda.' },
    { type: 'mcq', q: '¿Cómo suena <span class="big rtl">ز</span>?', opts: ['Una s sonora («zzz»)', 'Como la z española', 'Como la r', 'Como la d'], a: 0, why: 'ز es la «z» del inglés o el francés: una s que vibra. La z española es ث.' },
    { type: 'mcq', q: '¿Qué diferencia hay entre د y ر?', opts: ['د se queda sobre la línea; ر baja por debajo', 'Son la misma letra', 'د lleva puntos', 'ر se une siempre'], a: 0, why: 'Las dos no se unen a la izquierda, pero د es un ángulo sobre la línea y ر una curva que baja.' },
    { type: 'mcq', q: '¿Qué indica el sukun (ْ)?', opts: ['Que la consonante no lleva vocal', 'Una vocal larga', 'Una letra doble', 'El final de la palabra'], a: 0, why: 'El sukun indica ausencia de vocal: بَحْر = baḥr.' },
    { type: 'mcq', q: '¿Qué significa <span class="big rtl">بحر</span>?', opts: ['mar', 'pan', 'casa', 'amor'], a: 0, why: 'بحر (baḥr) = mar.' },
    { type: 'mcq', q: '¿Qué significa <span class="big rtl">خبز</span>?', opts: ['pan', 'mar', 'hermano', 'vecino'], a: 0, why: 'خبز (khubz) = pan.' },
    { type: 'gap', q: 'Escribe con letras latinas cómo suena <span class="big rtl">دار</span>: ___', a: ['dar', 'daar'], why: 'د (d) + ا (ā) + ر (r) = dār, «casa, hogar».' },
    { type: 'gap', q: 'Escribe con letras latinas cómo suena <span class="big rtl">أخ</span> (hermano): ___', a: ['akh', 'aj', 'ach'], why: 'أ (a) + خ (kh) = akh.' },
    { type: 'mcq', q: '¿Qué significa <span class="big rtl">حب</span>?', opts: ['amor', 'mar', 'pan', 'puerta'], a: 0, why: 'حب (ḥubb) = amor. Con la ح aspirada de la garganta.' },
    { type: 'mcq', q: '¿Cuántas letras de دار se unen entre sí?', opts: ['Ninguna', 'Todas', 'Solo la primera y la segunda', 'Solo las dos últimas'], a: 0, why: 'د y ا no se unen a la siguiente, y ر es la última: las tres van separadas.' },
  ],

  reading: {
    title: 'Palabras con las nuevas letras',
    level: 'Alfabeto',
    sentences: [
      { parts: [['W', 'بحر']], es: 'baḥr · mar', note: 'ب + ح (sin vocal) + ر. La ح se pronuncia con aire desde la garganta.', vocab: [['بحر (baḥr)', 'mar']] },
      { parts: [['W', 'خبز']], es: 'khubz · pan', note: 'خ (nuestra j) + ب + ز.', vocab: [['خبز (khubz)', 'pan']] },
      { parts: [['W', 'دار']], es: 'dār · casa, hogar', note: 'Tres letras que no se unen a la siguiente: د, ا y ر.', vocab: [['دار (dār)', 'casa, hogar']] },
      { parts: [['W', 'جار']], es: 'jār · vecino', note: 'ج + ا + ر.', vocab: [['جار (jār)', 'vecino']] },
      { parts: [['W', 'حب']], es: 'ḥubb · amor', note: 'La ب final es doble (bb): se marca con un signo llamado shadda (unidad 6).', vocab: [['حب (ḥubb)', 'amor']] },
      { parts: [['W', 'أخ']], es: 'akh · hermano', note: 'أ + خ. Femenino: أخت (ukht), hermana.', vocab: [['أخ (akh)', 'hermano'], ['أخت (ukht)', 'hermana']] },
      { parts: [['W', 'درج']], es: 'daraj · escalera', note: 'د + ر + ج: las dos primeras no se unen a la siguiente.', vocab: [['درج (daraj)', 'escalera']] },
    ],
    questions: [
      { q: '¿Qué significa جار?', opts: ['vecino', 'casa', 'mar', 'pan'], a: 0 },
      { q: '¿Qué letra de خبز suena como nuestra jota?', opts: ['خ', 'ب', 'ز', 'Ninguna'], a: 0 },
      { q: '¿Cómo se dice «hermano»?', opts: ['أخ', 'أب', 'باب', 'حب'], a: 0 },
    ],
  },
};
})();
