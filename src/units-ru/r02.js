// Ruso · Unidad 2 · Cirílico: las letras nuevas
(() => {
const ru = (w, r) => `<button class="saybtn" data-say="${w}"><span class="big">${w}</span> ${r}</button>`;

UNITS.r02 = {
  theory: [
    {
      h: 'Letras nuevas con sonidos que ya conoces',
      html: `<table class="t">
        <tr><th>Letra</th><th>Suena</th><th>Ejemplo</th></tr>
        <tr><td><span class="big">Б б</span></td><td>b</td><td>${ru('банк', 'bank · banco')}</td></tr>
        <tr><td><span class="big">Г г</span></td><td>g (siempre «ga, gue, gui»)</td><td>${ru('год', 'god · año')}</td></tr>
        <tr><td><span class="big">Д д</span></td><td>d</td><td>${ru('дом', 'dom · casa')}</td></tr>
        <tr><td><span class="big">З з</span></td><td>z zumbante (como una s sonora, «zzz»)</td><td>${ru('зонт', 'zont · paraguas')}</td></tr>
        <tr><td><span class="big">И и</span></td><td>i</td><td>${ru('и', 'i · y')}</td></tr>
        <tr><td><span class="big">Л л</span></td><td>l</td><td>${ru('лампа', 'lampa · lámpara')}</td></tr>
        <tr><td><span class="big">П п</span></td><td>p</td><td>${ru('папа', 'papa · papá')}</td></tr>
        <tr><td><span class="big">Ф ф</span></td><td>f</td><td>${ru('фото', 'foto')}</td></tr>
        <tr><td><span class="big">Э э</span></td><td>e</td><td>${ru('это', 'eto · esto')}</td></tr>
      </table>`,
    },
    {
      h: 'Los sonidos «sh», «ch», «ts» y «zh»',
      html: `<table class="t">
        <tr><th>Letra</th><th>Suena</th><th>Ejemplo</th></tr>
        <tr><td><span class="big">Ш ш</span></td><td>sh (como «shhh», silencio)</td><td>${ru('шапка', 'shapka · gorro')}</td></tr>
        <tr><td><span class="big">Щ щ</span></td><td>sh suave y larga («shsh»)</td><td>${ru('борщ', 'borsch · sopa de remolacha')}</td></tr>
        <tr><td><span class="big">Ч ч</span></td><td>ch</td><td>${ru('чай', 'chai · té')}</td></tr>
        <tr><td><span class="big">Ц ц</span></td><td>ts</td><td>${ru('центр', 'tsentr · centro')}</td></tr>
        <tr><td><span class="big">Ж ж</span></td><td>zh (como la «j» francesa de «je», o la «ll» argentina)</td><td>${ru('журнал', 'zhurnal · revista')}</td></tr>
      </table>`,
    },
    {
      h: 'Las vocales con «y» delante',
      html: `<p>El ruso tiene vocales que llevan una «y» incorporada al principio:</p>
      <table class="t">
        <tr><th>Letra</th><th>Suena</th><th>Ejemplo</th></tr>
        <tr><td><span class="big">Я я</span></td><td>ya</td><td>${ru('я', 'ya · yo')}</td></tr>
        <tr><td><span class="big">Ю ю</span></td><td>yu</td><td>${ru('юмор', 'yumor · humor')}</td></tr>
        <tr><td><span class="big">Ё ё</span></td><td>yo (siempre con acento)</td><td>${ru('ёлка', 'yolka · abeto')}</td></tr>
        <tr><td><span class="big">Е е</span></td><td>ye (ya la conoces)</td><td>${ru('где', 'gde · dónde')}</td></tr>
        <tr><td><span class="big">Й й</span></td><td>«i» corta, como en «hoy»</td><td>${ru('чай', 'chai · té')}</td></tr>
      </table>
      <p>¡La palabra «yo» en ruso es una sola letra: <b>я</b>! Y es la última del alfabeto.</p>`,
    },
    {
      h: 'Las tres letras más raras',
      html: `<ul>
        <li><span class="big">Ы ы</span>: una «i» pronunciada con la lengua hacia atrás, como si dijeras «i» con la boca de «u» relajada. ${ru('ты', 'ty · tú')} · ${ru('мы', 'my · nosotros')}</li>
        <li><span class="big">Ь</span> (<b>signo blando</b>): no suena; ablanda la consonante anterior, como si añadieras una «i» muy breve. ${ru('мать', 'mat\' · madre')}</li>
        <li><span class="big">Ъ</span> (<b>signo duro</b>): no suena; separa sílabas. Es poco frecuente: ${ru('объект', 'ob-yekt · objeto')}</li>
      </ul>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '¿Cómo suena <span class="big">Ш</span>?', opts: ['sh', 'ch', 'ts', 'sch'], a: 0, why: 'Ш = sh.' },
    { type: 'mcq', q: '¿Cómo suena <span class="big">Ч</span>?', opts: ['ch', 'sh', 'ts', 'zh'], a: 0, why: 'Ч = ch, como en «chai» (té).' },
    { type: 'mcq', q: '¿Cómo suena <span class="big">Ц</span>?', opts: ['ts', 'ch', 's', 'k'], a: 0, why: 'Ц = ts: центр (tsentr).' },
    { type: 'mcq', q: '¿Qué significa <span class="big">я</span>?', opts: ['yo', 'y', 'tú', 'ya'], a: 0, why: 'я (ya) = yo.' },
    { type: 'mcq', q: '¿Qué hace el signo blando <span class="big">Ь</span>?', opts: ['Ablanda la consonante anterior', 'Suena «i» larga', 'Separa palabras', 'Suena «b»'], a: 0, why: 'Ь no suena por sí mismo: ablanda (palataliza) la consonante de antes.' },
    { type: 'mcq', q: '¿Qué palabra significa «té»?', opts: ['чай', 'дом', 'год', 'суп'], a: 0, why: 'чай (chai) = té.' },
    { type: 'mcq', q: '¿Qué significa <span class="big">дом</span>?', opts: ['casa', 'año', 'humo', 'domingo'], a: 0, why: 'дом (dom) = casa.' },
    { type: 'gap', q: 'Escribe con letras latinas: <span class="big">фото</span> → ___', a: ['foto'], why: 'Ф = f.' },
    { type: 'gap', q: 'Escribe con letras latinas: <span class="big">папа</span> → ___', a: ['papa'], why: 'П = p.' },
    { type: 'gap', q: 'Escribe con letras latinas: <span class="big">банк</span> → ___', a: ['bank'], why: 'Б = b.' },
    { type: 'gap', q: 'Escribe con letras latinas: <span class="big">шапка</span> → ___', a: ['shapka'], why: 'Ш = sh.' },
    { type: 'mcq', q: '¿Qué significa <span class="big">это</span>?', opts: ['esto', 'eso no', 'él', 'aquí'], a: 0, why: 'это (eto) = esto, eso. Э suena e.' },
  ],

  reading: {
    title: 'Мой дом · Mi casa',
    level: 'Cirílico',
    sentences: [
      { parts: [['S', 'Это'], ['O', 'мой дом.']], es: 'Éto moi dom. · Esta es mi casa.', note: 'En ruso no hay verbo «ser» en presente: «esto mi casa». Y no hay artículos.', vocab: [['это', 'esto, este es'], ['мой', 'mi'], ['дом', 'casa']] },
      { parts: [['S', 'Это'], ['O', 'мама'], ['C', 'и'], ['O', 'папа.']], es: 'Éto mama i papa. · Estos son mamá y papá.', note: 'и = y.', vocab: [['и', 'y'], ['мама', 'mamá'], ['папа', 'papá']] },
      { parts: [['S', 'Я'], ['O', 'студент.']], es: 'Ya studént. · Soy estudiante.', note: 'Literalmente «yo estudiante». Sin verbo.', vocab: [['я', 'yo'], ['студент', 'estudiante']] },
      { parts: [['X', 'Вот'], ['O', 'чай'], ['C', 'и'], ['O', 'торт.']], es: 'Vot chai i tort. · Aquí está el té y la tarta.', note: 'вот = aquí está, he aquí.', vocab: [['чай', 'té'], ['торт', 'tarta']] },
      { parts: [['X', 'Где'], ['O', 'кот?']], es: 'Gde kot? · ¿Dónde está el gato?', note: 'где (gde) = dónde. Tampoco hace falta verbo.', vocab: [['где', 'dónde']] },
      { parts: [['O', 'Кот'], ['X', 'там.']], es: 'Kot tam. · El gato está allí.', note: 'там = allí.', vocab: [['там', 'allí']] },
    ],
    questions: [
      { q: '¿Cómo se dice «Soy estudiante» en ruso?', opts: ['Я студент.', 'Я есть студент.', 'Это студент.', 'Студент я есть.'], a: 0 },
      { q: '¿Qué significa где?', opts: ['dónde', 'allí', 'qué', 'quién'], a: 0 },
      { q: '¿Qué hay en la mesa?', opts: ['Té y tarta', 'Zumo y pan', 'Sopa', 'Nada'], a: 0 },
    ],
  },
};
})();
