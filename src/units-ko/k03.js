// Coreano · Unidad 3 · Hangul: consonantes aspiradas y tensas, vocales con y
(() => {
const hg = (k, r) => `<button class="saybtn" data-say="${k}"><span class="big">${k}</span> ${r}</button>`;

UNITS.k03 = {
  theory: [
    {
      h: 'Las consonantes aspiradas: con un golpe de aire',
      html: `<p>Si a una consonante básica le añades un trazo, sale con <b>mucho aire</b>, como cuando dices «pa» con fuerza delante de una vela:</p>
      <table class="t">
        <tr><th>Básica</th><th>Aspirada</th><th>Suena</th><th>Ejemplo</th></tr>
        <tr><td>ㄱ (g/k)</td><td><span class="big">ㅋ</span></td><td>k con aire</td><td>${hg('커피', 'keopi · café')}</td></tr>
        <tr><td>ㄷ (d/t)</td><td><span class="big">ㅌ</span></td><td>t con aire</td><td>${hg('토마토', 'tomato · tomate')}</td></tr>
        <tr><td>ㅂ (b/p)</td><td><span class="big">ㅍ</span></td><td>p con aire</td><td>${hg('피자', 'pija · pizza')}</td></tr>
        <tr><td>ㅈ (ch suave)</td><td><span class="big">ㅊ</span></td><td>ch con aire</td><td>${hg('치마', 'chima · falda')}</td></tr>
      </table>
      <p>Truco: pon la mano delante de la boca. Con ㅋ ㅌ ㅍ ㅊ tienes que notar el aire.</p>`,
    },
    {
      h: 'Las consonantes tensas: dobles y sin aire',
      html: `<p>Si <b>duplicas</b> una consonante, sale <b>tensa</b>: con la garganta apretada y <b>sin nada de aire</b>, como nuestras p, t, k españolas pero más fuertes.</p>
      <table class="t">
        <tr><th>Tensa</th><th>Suena</th><th>Ejemplo</th></tr>
        <tr><td><span class="big">ㄲ</span></td><td>k tensa</td><td>${hg('까치', 'kkachi · urraca')}</td></tr>
        <tr><td><span class="big">ㄸ</span></td><td>t tensa</td><td>${hg('따다', 'ttada · coger (fruta)')}</td></tr>
        <tr><td><span class="big">ㅃ</span></td><td>p tensa</td><td>${hg('빵', 'ppang · pan')}</td></tr>
        <tr><td><span class="big">ㅆ</span></td><td>s fuerte</td><td>${hg('싸다', 'ssada · barato')}</td></tr>
        <tr><td><span class="big">ㅉ</span></td><td>ch tensa</td><td>${hg('짜다', 'jjada · salado')}</td></tr>
      </table>
      <p>Para un hispanohablante, las tensas son las más fáciles de imitar: suenan casi como nuestras p, t, k, pronunciadas con fuerza.</p>`,
    },
    {
      h: 'La familia completa: suave, con aire y tensa',
      html: `<p>Compara estas tres sílabas. Cambian el significado:</p>
      <ul>
        <li>${hg('불', 'bul · fuego')} (suave) · ${hg('풀', 'pul · hierba')} (con aire) · ${hg('뿔', 'ppul · cuerno')} (tensa)</li>
        <li>${hg('달', 'dal · luna')} · ${hg('탈', 'tal · máscara')} · ${hg('딸', 'ttal · hija')}</li>
      </ul>`,
    },
    {
      h: 'Las vocales con «y»: un trazo más',
      html: `<p>Añadiendo un segundo trazo corto, las vocales llevan una «y» delante:</p>
      <table class="t">
        <tr><th>Vocal</th><th>Con y</th><th>Ejemplo</th></tr>
        <tr><td>ㅏ a</td><td><span class="big">ㅑ</span> ya</td><td>${hg('야구', 'yagu · béisbol')}</td></tr>
        <tr><td>ㅓ eo</td><td><span class="big">ㅕ</span> yeo</td><td>${hg('여자', 'yeoja · mujer')}</td></tr>
        <tr><td>ㅗ o</td><td><span class="big">ㅛ</span> yo</td><td>${hg('요리', 'yori · cocina, cocinar')}</td></tr>
        <tr><td>ㅜ u</td><td><span class="big">ㅠ</span> yu</td><td>${hg('우유', 'uyu · leche')}</td></tr>
      </table>
      <p>Ya conoces casi todo el hangul: solo te falta la consonante final (batchim) a fondo, en la unidad 4.</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '¿Qué letra es la «p» con aire?', opts: ['ㅍ', 'ㅂ', 'ㅃ', 'ㅁ'], a: 0, why: 'ㅂ (b/p suave) + trazo = ㅍ, con aire. ㅃ es la tensa.' },
    { type: 'mcq', q: '¿Cómo son las consonantes dobles (ㄲ ㄸ ㅃ ㅆ ㅉ)?', opts: ['Tensas y sin aire', 'Con mucho aire', 'Mudas', 'Largas como en italiano'], a: 0, why: 'Las dobles son tensas: garganta apretada y sin aire.' },
    { type: 'mcq', q: '¿Qué significa <span class="big">커피</span>?', opts: ['café', 'pizza', 'falda', 'tomate'], a: 0, why: '커피 (keopi) = café, del inglés coffee.' },
    { type: 'mcq', q: '¿Qué significa <span class="big">빵</span>?', opts: ['pan', 'fuego', 'hija', 'leche'], a: 0, why: '빵 (ppang) = pan (del portugués pão).' },
    { type: 'mcq', q: '¿Cuál significa «hija»?', opts: ['딸', '달', '탈', '팔'], a: 0, why: '딸 (ttal, tensa) = hija. 달 (dal) = luna. 탈 (tal) = máscara.' },
    { type: 'mcq', q: '¿Cómo se lee <span class="big">여자</span>?', opts: ['yeoja', 'yaja', 'eoja', 'yoja'], a: 0, why: 'ㅕ = yeo. 여자 = mujer.' },
    { type: 'mcq', q: '¿Qué vocal es «yo»?', opts: ['ㅛ', 'ㅕ', 'ㅑ', 'ㅠ'], a: 0, why: 'ㅗ (o) con dos trazos hacia arriba = ㅛ (yo).' },
    { type: 'gap', q: 'Escribe cómo suena <span class="big">피자</span>: ___', a: ['pija', 'pizza', 'pidza'], why: 'ㅍ (p con aire) + ㅣ = pi; ㅈ + ㅏ = ja: pija, «pizza».' },
    { type: 'gap', q: 'Escribe cómo suena <span class="big">토마토</span>: ___', a: ['tomato'], why: 'ㅌ (t con aire): to-ma-to.' },
    { type: 'gap', q: 'Escribe cómo suena <span class="big">우유</span> (leche): ___', a: ['uyu'], why: '우 (u) + 유 (yu).' },
    { type: 'mcq', q: '¿Qué significa <span class="big">싸다</span>?', opts: ['barato', 'salado', 'caro', 'dulce'], a: 0, why: '싸다 (ssada) = barato. 짜다 (jjada) = salado.' },
    { type: 'mcq', q: '¿Cuál de estas consonantes NO es aspirada?', opts: ['ㄲ', 'ㅋ', 'ㅌ', 'ㅊ'], a: 0, why: 'ㄲ es tensa (doble). ㅋ ㅌ ㅊ son aspiradas.' },
  ],

  reading: {
    title: 'En la cafetería coreana',
    level: 'Hangul',
    sentences: [
      { parts: [['W', '커피']], es: 'keopi · café', note: 'ㅋ con aire. Los coreanos beben muchísimo café: hay cafeterías en cada esquina.', vocab: [['커피 (keopi)', 'café']] },
      { parts: [['W', '빵']], es: 'ppang · pan, bollo', note: 'ㅃ tensa y ㅇ final («ng»).', vocab: [['빵 (ppang)', 'pan, bollo']] },
      { parts: [['W', '우유']], es: 'uyu · leche', note: '우 + 유. 카페 라테 (kape ratte) es el café con leche.', vocab: [['우유 (uyu)', 'leche']] },
      { parts: [['W', '피자']], es: 'pija · pizza', note: 'El coreano no tiene «z»: la adapta con ㅈ.', vocab: [['피자 (pija)', 'pizza']] },
      { parts: [['W', '케이크']], es: 'keikeu · tarta', note: 'Del inglés cake. La ㅡ final se añade porque el coreano no tiene «k» suelta al final de esta palabra.', vocab: [['케이크 (keikeu)', 'tarta']] },
      { parts: [['W', '아이스'], ['W', '아메리카노']], es: 'aiseu amerikano · americano con hielo', note: 'La bebida más pedida en Corea, incluso en invierno.', vocab: [['아이스 (aiseu)', 'con hielo'], ['아메리카노 (amerikano)', 'café americano']] },
      { parts: [['W', '싸요!']], es: 'ssayo · ¡es barato!', note: '싸다 (barato) en la forma educada -요. Lo verás en la unidad 7.', vocab: [['싸요 (ssayo)', 'es barato']] },
    ],
    questions: [
      { q: '¿Qué significa 우유?', opts: ['leche', 'café', 'pan', 'tarta'], a: 0 },
      { q: '¿Cómo se adapta «pizza» al coreano?', opts: ['피자', '피짜', '비자', '피사'], a: 0 },
      { q: '¿Qué significa 싸요?', opts: ['Es barato', 'Es caro', 'Es salado', 'Es dulce'], a: 0 },
    ],
  },
};
})();
