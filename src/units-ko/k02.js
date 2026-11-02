// Coreano · Unidad 2 · Hangul: las consonantes básicas
(() => {
const hg = (k, r) => `<button class="saybtn" data-say="${k}"><span class="big">${k}</span> ${r}</button>`;

UNITS.k02 = {
  theory: [
    {
      h: 'Las consonantes dibujan la boca',
      html: `<p>Las consonantes del hangul representan <b>la forma de la boca o la lengua</b> al pronunciarlas. Por ejemplo, <b>ㄱ</b> dibuja la lengua tocando el fondo del paladar (sonido «g/k») y <b>ㅁ</b> dibuja la boca cerrada (sonido «m»).</p>
      <table class="t">
        <tr><th>Letra</th><th>Suena</th><th>Con ㅏ</th></tr>
        <tr><td><span class="big">ㄱ</span></td><td>g / k (suave)</td><td>${hg('가', 'ga')}</td></tr>
        <tr><td><span class="big">ㄴ</span></td><td>n</td><td>${hg('나', 'na')}</td></tr>
        <tr><td><span class="big">ㄷ</span></td><td>d / t (suave)</td><td>${hg('다', 'da')}</td></tr>
        <tr><td><span class="big">ㄹ</span></td><td>r suave (como en «pero») / l al final</td><td>${hg('라', 'ra')}</td></tr>
        <tr><td><span class="big">ㅁ</span></td><td>m</td><td>${hg('마', 'ma')}</td></tr>
      </table>`,
    },
    {
      h: 'Cinco consonantes más',
      html: `<table class="t">
        <tr><th>Letra</th><th>Suena</th><th>Con ㅏ</th></tr>
        <tr><td><span class="big">ㅂ</span></td><td>b / p (suave)</td><td>${hg('바', 'ba')}</td></tr>
        <tr><td><span class="big">ㅅ</span></td><td>s (delante de ㅣ suena «shi»)</td><td>${hg('사', 'sa')} · ${hg('시', 'si / shi')}</td></tr>
        <tr><td><span class="big">ㅇ</span></td><td>Muda al principio · «ng» al final</td><td>${hg('아', 'a')} · ${hg('강', 'gang')}</td></tr>
        <tr><td><span class="big">ㅈ</span></td><td>«ch» suave / «y» inglesa (j)</td><td>${hg('자', 'ja')}</td></tr>
        <tr><td><span class="big">ㅎ</span></td><td>h aspirada (como una j suave)</td><td>${hg('하', 'ha')}</td></tr>
      </table>
      <p>Las consonantes ㄱ, ㄷ, ㅂ y ㅈ suenan <b>entre</b> nuestras g/k, d/t, b/p: más suaves al principio de palabra y más sonoras entre vocales. Por eso verás escrito tanto «Busan» como «Pusan».</p>`,
    },
    {
      h: 'Cómo se monta un bloque',
      html: `<p>Cada bloque es una sílaba: <b>consonante + vocal (+ consonante final)</b>.</p>
      <ul>
        <li>Vocal vertical → a la derecha: ㄴ + ㅏ = <span class="big">나</span> (na)</li>
        <li>Vocal horizontal → debajo: ㄴ + ㅗ = <span class="big">노</span> (no)</li>
        <li>Con consonante final (<b>batchim</b>), esta va abajo del todo: ㅂ + ㅏ + ㅁ = <span class="big">밤</span> (bam, «noche»)</li>
      </ul>
      <p>Se lee siempre <b>de izquierda a derecha y de arriba abajo</b>.</p>`,
    },
    {
      h: 'Palabras que ya puedes leer',
      html: `<ul>
        <li>${hg('나라', 'nara')} = país</li>
        <li>${hg('나무', 'namu')} = árbol</li>
        <li>${hg('바다', 'bada')} = mar</li>
        <li>${hg('어머니', 'eomeoni')} = madre</li>
        <li>${hg('한국', 'hanguk')} = Corea</li>
        <li>${hg('사랑', 'sarang')} = amor</li>
      </ul>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '¿Cómo se lee <span class="big">나</span>?', opts: ['na', 'ra', 'da', 'ma'], a: 0, why: 'ㄴ (n) + ㅏ (a).' },
    { type: 'mcq', q: '¿Cómo se lee <span class="big">마</span>?', opts: ['ma', 'ba', 'na', 'ha'], a: 0, why: 'ㅁ dibuja la boca cerrada: m.' },
    { type: 'mcq', q: '¿Cuál es «ho»?', opts: ['호', '하', '후', '허'], a: 0, why: 'ㅎ (h) + ㅗ (o, debajo).' },
    { type: 'mcq', q: '¿Cómo se lee <span class="big">시</span>?', opts: ['shi', 'si con s inglesa', 'chi', 'ji'], a: 0, why: 'ㅅ delante de ㅣ suena «shi».' },
    { type: 'mcq', q: '¿Qué hace ㅇ al final de una sílaba, como en 강?', opts: ['Suena «ng»', 'No suena', 'Suena «o»', 'Suena «n»'], a: 0, why: 'Al principio es muda; al final suena «ng»: 강 = gang (río).' },
    { type: 'mcq', q: '¿Qué significa <span class="big">바다</span>?', opts: ['mar', 'árbol', 'país', 'madre'], a: 0, why: '바다 (bada) = mar.' },
    { type: 'mcq', q: '¿Qué significa <span class="big">사랑</span>?', opts: ['amor', 'persona', 'país', 'noche'], a: 0, why: '사랑 (sarang) = amor.' },
    { type: 'gap', q: 'Escribe cómo suena <span class="big">나무</span> (árbol): ___', a: ['namu'], why: 'ㄴ+ㅏ = na, ㅁ+ㅜ = mu.' },
    { type: 'gap', q: 'Escribe cómo suena <span class="big">바나나</span>: ___', a: ['banana'], why: '바 (ba) + 나 (na) + 나 (na): ¡banana!' },
    { type: 'gap', q: 'Escribe cómo suena <span class="big">라디오</span>: ___', a: ['radio', 'ladio'], why: '라 (ra) + 디 (di) + 오 (o). Una palabra que viene del inglés.' },
    { type: 'mcq', q: 'En 밤 (bam, noche), ¿dónde va la ㅁ final?', opts: ['Abajo del todo', 'A la derecha', 'Arriba', 'Delante'], a: 0, why: 'La consonante final (batchim) va siempre debajo del bloque.' },
    { type: 'mcq', q: '¿Por qué se escribe «Busan» y también «Pusan»?', opts: ['Porque ㅂ suena entre b y p', 'Porque es un error', 'Porque hay dos ciudades', 'Porque en el norte se dice distinto'], a: 0, why: 'ㅂ al principio de palabra suena entre nuestra b y nuestra p.' },
  ],

  reading: {
    title: 'Primeras palabras',
    level: 'Hangul',
    sentences: [
      { parts: [['W', '나라']], es: 'nara · país', note: 'ㄹ entre vocales suena como la r de «pero».', vocab: [['나라 (nara)', 'país']] },
      { parts: [['W', '나무']], es: 'namu · árbol', note: 'ㅜ va debajo de ㅁ.', vocab: [['나무 (namu)', 'árbol']] },
      { parts: [['W', '바다']], es: 'bada · mar', note: 'Entre vocales, ㄷ suena como una d clara.', vocab: [['바다 (bada)', 'mar']] },
      { parts: [['W', '어머니']], es: 'eomeoni · madre', note: 'Tres bloques. La forma cariñosa es 엄마 (eomma), mamá.', vocab: [['어머니 (eomeoni)', 'madre'], ['엄마 (eomma)', 'mamá']] },
      { parts: [['W', '한국']], es: 'hanguk · Corea', note: '한 (han) + 국 (guk, país). La ㄱ final suena como una k corta.', vocab: [['한국 (hanguk)', 'Corea']] },
      { parts: [['W', '사랑']], es: 'sarang · amor', note: 'Una palabra que oirás en todas las canciones de K-pop.', vocab: [['사랑 (sarang)', 'amor']] },
      { parts: [['W', '바나나']], es: 'banana · plátano', note: 'Muchas palabras modernas vienen del inglés: 바나나, 라디오, 피자.', vocab: [['바나나 (banana)', 'plátano']] },
    ],
    questions: [
      { q: '¿Qué significa 한국?', opts: ['Corea', 'China', 'Japón', 'país'], a: 0 },
      { q: '¿Cómo se dice «mamá» de forma cariñosa?', opts: ['엄마', '어머니', '나라', '아이'], a: 0 },
      { q: '¿Qué significa 나무?', opts: ['árbol', 'mar', 'amor', 'país'], a: 0 },
    ],
  },
};
})();
