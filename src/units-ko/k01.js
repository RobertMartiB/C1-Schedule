// Coreano · Unidad 1 · Hangul: cómo funciona y las vocales
(() => {
const hg = (k, r) => `<button class="saybtn" data-say="${k}"><span class="big">${k}</span> ${r}</button>`;

UNITS.k01 = {
  theory: [
    {
      h: 'El hangul: un alfabeto inventado para ser fácil',
      html: `<p>El coreano se escribe con el <b>hangul</b> (한글), un alfabeto creado en el siglo XV por el rey Sejong para que todo el mundo pudiera aprender a leer. Es tan lógico que <b>se aprende en unos pocos días</b>.</p>
      <p>Tiene <b>letras</b> (como nuestro alfabeto), pero se escriben <b>agrupadas en bloques</b>, uno por sílaba:</p>
      <p>ㅎ (h) + ㅏ (a) + ㄴ (n) = <span class="big">한</span> (han) · ㄱ (g) + ㅡ (eu) + ㄹ (l) = <span class="big">글</span> (geul)</p>
      <p>Así, 한글 son <b>dos bloques</b> (dos sílabas) formados por <b>seis letras</b>.</p>`,
    },
    {
      h: 'Las vocales verticales: ㅏ ㅓ ㅣ',
      html: `<p>Las vocales se construyen con trazos que representan el cielo (punto, ahora un trazo corto), la tierra (—) y la persona (|).</p>
      <table class="t">
        <tr><th>Vocal</th><th>Suena</th><th>Truco</th></tr>
        <tr><td>${hg('아', 'ㅏ a')}</td><td>«a»</td><td>El trazo apunta <b>hacia fuera</b> (a la derecha): «¡ah!»</td></tr>
        <tr><td>${hg('어', 'ㅓ eo')}</td><td>Una «o» muy abierta, casi «a»</td><td>El trazo apunta hacia dentro</td></tr>
        <tr><td>${hg('이', 'ㅣ i')}</td><td>«i»</td><td>Una persona de pie: un palo, como la i</td></tr>
      </table>
      <p>Una vocal <b>nunca se escribe sola</b>: lleva delante <b>ㅇ</b>, que al principio de sílaba <b>no suena</b>. Por eso «a» se escribe 아.</p>`,
    },
    {
      h: 'Las vocales horizontales: ㅗ ㅜ ㅡ',
      html: `<table class="t">
        <tr><th>Vocal</th><th>Suena</th><th>Truco</th></tr>
        <tr><td>${hg('오', 'ㅗ o')}</td><td>«o» cerrada, como en español</td><td>El trazo apunta <b>hacia arriba</b>: «¡oh, mira arriba!»</td></tr>
        <tr><td>${hg('우', 'ㅜ u')}</td><td>«u»</td><td>El trazo apunta <b>hacia abajo</b></td></tr>
        <tr><td>${hg('으', 'ㅡ eu')}</td><td>Una «u» con los labios estirados, sin redondear</td><td>Una línea plana: la boca plana</td></tr>
      </table>
      <p>Las vocales <b>verticales</b> (ㅏ ㅓ ㅣ) se escriben a la <b>derecha</b> de la consonante: 아. Las <b>horizontales</b> (ㅗ ㅜ ㅡ) se escriben <b>debajo</b>: 오.</p>`,
    },
    {
      h: 'Vocales combinadas',
      html: `<table class="t">
        <tr><th>Vocal</th><th>Suena</th><th>De dónde sale</th></tr>
        <tr><td>${hg('애', 'ㅐ ae')}</td><td>«e» abierta</td><td>ㅏ + ㅣ</td></tr>
        <tr><td>${hg('에', 'ㅔ e')}</td><td>«e»</td><td>ㅓ + ㅣ. Hoy en día ㅐ y ㅔ suenan prácticamente igual.</td></tr>
        <tr><td>${hg('와', 'ㅘ wa')}</td><td>«ua»</td><td>ㅗ + ㅏ</td></tr>
        <tr><td>${hg('워', 'ㅝ wo')}</td><td>«uo»</td><td>ㅜ + ㅓ</td></tr>
      </table>`,
    },
    {
      h: 'Las primeras palabras',
      html: `<p>Con lo que ya sabes puedes leer palabras de solo vocales:</p>
      <ul>
        <li>${hg('아이', 'ai')} = niño</li>
        <li>${hg('오이', 'oi')} = pepino</li>
        <li>${hg('우유', 'uyu')} = leche (유 = yu, lo verás en la unidad 3)</li>
        <li>${hg('아우', 'au')} = hermano menor (antiguo)</li>
      </ul>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '¿Cómo suena <span class="big">아</span>?', opts: ['a', 'o', 'eo', 'u'], a: 0, why: 'ㅇ no suena al principio; ㅏ = a.' },
    { type: 'mcq', q: '¿Cómo suena <span class="big">오</span>?', opts: ['o', 'u', 'a', 'eu'], a: 0, why: 'ㅗ: el trazo apunta hacia arriba = o.' },
    { type: 'mcq', q: '¿Cómo suena <span class="big">우</span>?', opts: ['u', 'o', 'eu', 'i'], a: 0, why: 'ㅜ: el trazo apunta hacia abajo = u.' },
    { type: 'mcq', q: '¿Cuál es «eo»?', opts: ['어', '아', '오', '으'], a: 0, why: 'ㅓ: el trazo apunta hacia dentro (hacia la consonante).' },
    { type: 'mcq', q: '¿Cuál es «eu»?', opts: ['으', '우', '이', '오'], a: 0, why: 'ㅡ es una línea plana: «eu», con los labios estirados.' },
    { type: 'mcq', q: '¿Qué hace ㅇ al principio de una sílaba?', opts: ['No suena', 'Suena «ng»', 'Suena «o»', 'Suena «h»'], a: 0, why: 'Al principio de sílaba, ㅇ es muda: solo sostiene la vocal.' },
    { type: 'mcq', q: '¿Dónde se escriben las vocales horizontales (ㅗ ㅜ ㅡ)?', opts: ['Debajo de la consonante', 'A la derecha', 'Encima', 'A la izquierda'], a: 0, why: 'Las verticales van a la derecha (아); las horizontales, debajo (오).' },
    { type: 'mcq', q: '¿Qué significa <span class="big">오이</span>?', opts: ['pepino', 'niño', 'leche', 'cinco'], a: 0, why: '오이 (oi) = pepino.' },
    { type: 'gap', q: 'Escribe en letras latinas cómo suena <span class="big">아이</span>: ___', a: ['ai'], why: '아 (a) + 이 (i) = ai, «niño».' },
    { type: 'gap', q: 'Escribe en letras latinas cómo suena <span class="big">와</span>: ___', a: ['wa', 'ua'], why: 'ㅗ + ㅏ = wa.' },
    { type: 'mcq', q: '¿Cuántos bloques (sílabas) tiene 한글?', opts: ['Dos', 'Seis', 'Uno', 'Tres'], a: 0, why: 'Dos bloques: 한 (han) y 글 (geul), con seis letras en total.' },
    { type: 'mcq', q: '¿Quién creó el hangul?', opts: ['El rey Sejong, en el siglo XV', 'Los monjes budistas, en el siglo I', 'Los japoneses, en el siglo XX', 'Nadie: viene del chino'], a: 0, why: 'El rey Sejong lo creó en 1443 para que todo el pueblo pudiera leer.' },
  ],

  reading: {
    title: 'Leer solo con vocales',
    level: 'Hangul',
    sentences: [
      { parts: [['W', '아']], es: 'a', note: 'ㅇ (muda) + ㅏ (a).', vocab: [['아 (a)', '¡ah! (exclamación)']] },
      { parts: [['W', '오']], es: 'o · cinco', note: 'ㅇ + ㅗ. También significa «cinco» en los números sino-coreanos.', vocab: [['오 (o)', 'cinco']] },
      { parts: [['W', '이']], es: 'i · dos', note: 'ㅇ + ㅣ. También es «dos» y «este/esta».', vocab: [['이 (i)', 'dos; este']] },
      { parts: [['W', '아이']], es: 'ai · niño', note: 'Dos bloques: 아 + 이.', vocab: [['아이 (ai)', 'niño/a']] },
      { parts: [['W', '오이']], es: 'oi · pepino', note: 'Dos bloques: 오 + 이.', vocab: [['오이 (oi)', 'pepino']] },
      { parts: [['W', '이에']], es: 'ie', note: 'Practica la ㅔ: suena como nuestra «e».', vocab: [['ㅔ (e)', 'vocal «e»']] },
      { parts: [['W', '와']], es: 'wa · ¡hala! (sorpresa)', note: 'ㅗ + ㅏ en un solo bloque. Los coreanos dicen «와!» cuando algo les sorprende.', vocab: [['와 (wa)', '¡hala!, ¡guau!']] },
    ],
    questions: [
      { q: '¿Qué significa 아이?', opts: ['niño', 'pepino', 'cinco', 'leche'], a: 0 },
      { q: '¿Cómo se lee 오이?', opts: ['oi', 'ai', 'ui', 'eoi'], a: 0 },
      { q: '¿Qué dirías si algo te sorprende?', opts: ['와!', '오이', '이', '아이'], a: 0 },
    ],
  },
};
})();
