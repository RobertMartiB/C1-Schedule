// Francés · Unidad 2 · El género y los artículos
(() => {
const say = (txt, label) => `<button class="saybtn" data-say="${txt}">${label || txt}</button>`;

UNITS.f02 = {
  theory: [
    {
      h: 'Todo nombre es masculino o femenino',
      html: `<p>Como en español, en francés todos los nombres tienen género. Muchas veces coincide con el español (<i>le livre</i>, el libro; <i>la maison</i>, la casa), pero <b>no siempre</b>:</p>
      <table class="t">
        <tr><th>Francés</th><th>Español</th></tr>
        <tr><td>${say('la mer')}</td><td>el mar (femenino en francés)</td></tr>
        <tr><td>${say('le lait')}</td><td>la leche (masculino en francés)</td></tr>
        <tr><td>${say('la voiture')}</td><td>el coche</td></tr>
        <tr><td>${say('le fleuve')}, ${say('le sel')}, ${say('le nez')}</td><td>el río, la sal, la nariz</td></tr>
      </table>
      <p>Consejo: <b>aprende cada palabra con su artículo</b>: no «maison», sino «la maison».</p>`,
    },
    {
      h: 'Artículos definidos: le, la, l\', les',
      html: `<table class="t">
        <tr><th></th><th>Singular</th><th>Plural</th></tr>
        <tr><td>Masculino</td><td>${say('le garçon')}</td><td rowspan="2">${say('les garçons')} · ${say('les filles')}</td></tr>
        <tr><td>Femenino</td><td>${say('la fille')}</td></tr>
        <tr><td>Delante de vocal o h muda</td><td>${say('l\'ami')} · ${say('l\'école')} · ${say('l\'hôtel')}</td><td>${say('les amis', 'les amis')} (suena «le-za-mí»)</td></tr>
      </table>
      <p><b>les</b> sirve para masculino y femenino. Y fíjate en la <b>liaison</b>: la s de <i>les</i>, que normalmente no suena, se pronuncia como «z» si la palabra siguiente empieza por vocal.</p>`,
    },
    {
      h: 'Artículos indefinidos: un, une, des',
      html: `<table class="t">
        <tr><th></th><th>Singular</th><th>Plural</th></tr>
        <tr><td>Masculino</td><td>${say('un livre')}</td><td rowspan="2">${say('des livres')} · ${say('des pommes')}</td></tr>
        <tr><td>Femenino</td><td>${say('une pomme')}</td></tr>
      </table>
      <p>Diferencia importante con el español: en plural, el francés <b>necesita</b> el artículo <b>des</b>, aunque en español no pongamos nada:</p>
      <ul>
        <li>Tengo amigos en Francia → <b>J'ai des amis en France.</b></li>
        <li>Hay niños en el parque → <b>Il y a des enfants dans le parc.</b></li>
      </ul>`,
    },
    {
      h: 'Pistas para adivinar el género',
      html: `<p>No hay reglas perfectas, pero estas terminaciones ayudan mucho:</p>
      <ul>
        <li>Casi siempre <b>femeninas</b>: <b>-tion / -sion</b> (la nation), <b>-té</b> (la liberté), <b>-ette</b> (la baguette), <b>-ence / -ance</b> (la chance).</li>
        <li>Casi siempre <b>masculinas</b>: <b>-ment</b> (le moment), <b>-age</b> (le fromage, ¡pero la plage!), <b>-eau</b> (le bateau, ¡pero l'eau es femenino!), <b>-isme</b> (le tourisme).</li>
      </ul>`,
    },
    {
      h: 'El plural: se escribe, pero casi no se oye',
      html: `<p>Normalmente se añade una <b>-s</b>: <i>un chat → des chats</i>. Esa s <b>no se pronuncia</b>: <i>chat</i> y <i>chats</i> suenan igual. Por eso, al hablar, lo que te dice si es plural es el <b>artículo</b>: <i>le</i> («le») frente a <i>les</i> («lé»).</p>
      <p>Algunas palabras hacen el plural en <b>-x</b>: <i>un bateau → des bateaux</i>, <i>un cheval → des chevaux</i>.</p>`,
    },
  ],

  exercises: [
    { type: 'mcq', q: '___ voiture (el coche)', opts: ['la', 'le', 'l\'', 'les'], a: 0, why: '«voiture» es femenino en francés, aunque «coche» sea masculino en español.' },
    { type: 'mcq', q: '___ école (la escuela)', opts: ['l\'', 'la', 'le', 'une l\''], a: 0, why: 'Delante de vocal, le/la se convierten en l\'.' },
    { type: 'mcq', q: '___ mer est belle aujourd\'hui.', opts: ['La', 'Le', 'L\'', 'Un'], a: 0, why: '«la mer»: femenino en francés, masculino en español.' },
    { type: 'mcq', q: 'J\'ai ___ amis à Paris. (Tengo amigos en París)', opts: ['des', '—', 'les', 'un'], a: 0, why: 'En plural indefinido, el francés necesita «des» aunque en español no pongamos nada.' },
    { type: 'mcq', q: '¿Qué palabra es femenina?', opts: ['la liberté', 'le fromage', 'le moment', 'le tourisme'], a: 0, why: 'Las palabras en -té suelen ser femeninas.' },
    { type: 'mcq', q: '¿Cómo se pronuncia «les amis»?', opts: ['le-za-mí', 'les-a-mís', 'le-a-mí', 'les-za-mís'], a: 0, why: 'Liaison: la s de «les» suena como z delante de vocal. La s final de «amis» no suena.' },
    { type: 'gap', q: '___ livre (un libro)', a: ['un'], why: '«livre» (libro) es masculino → un.' },
    { type: 'gap', q: '___ pomme (una manzana)', a: ['une'], why: '«pomme» es femenino → une.' },
    { type: 'gap', q: 'un bateau → des ___', a: ['bateaux'], why: 'Las palabras en -eau hacen el plural en -x.' },
    { type: 'gap', q: '___ hôtel (el hotel)', a: ['l\'', 'l'], why: 'La h de «hôtel» es muda: se comporta como una vocal → l\'hôtel.' },
    { type: 'find', role: 'O', prompt: 'Toca el complemento directo (lo que hay).', parts: [['X', 'Dans la rue,'], ['V', 'il y a'], ['O', 'des enfants'], ['X', 'et un chien.']], why: '«il y a» = hay. Lo que hay: «des enfants».' },
    { type: 'order', prompt: 'Ordena: «El gato come una manzana».', words: ['Le', 'chat', 'mange', 'une', 'pomme'], a: 'Le chat mange une pomme', why: 'Sujeto (le chat) + verbo (mange) + complemento (une pomme).' },
  ],

  reading: {
    title: 'Mon quartier',
    level: 'A1',
    sentences: [
      { parts: [['S', 'J\''], ['V', 'habite'], ['X', 'dans un petit appartement'], ['X', 'à Marseille.']],
        es: 'Vivo en un piso pequeño en Marsella.',
        note: '«J\'habite»: je + habite. La h es muda, así que je pierde la e.',
        vocab: [['habiter', 'vivir (en un sitio)'], ['un appartement', 'un piso'], ['petit', 'pequeño']] },
      { parts: [['X', 'Dans mon quartier,'], ['V', 'il y a'], ['O', 'une boulangerie,'], ['O', 'un marché'], ['C', 'et'], ['O', 'des cafés.']],
        es: 'En mi barrio hay una panadería, un mercado y cafeterías.',
        note: '«il y a» = hay. Fíjate en el «des» de «des cafés», que en español no traducimos.',
        vocab: [['le quartier', 'el barrio'], ['il y a', 'hay'], ['la boulangerie', 'la panadería'], ['le marché', 'el mercado']] },
      { parts: [['S', 'La boulangerie'], ['V', 'est'], ['X', 'à côté de la mer.']],
        es: 'La panadería está al lado del mar.',
        note: 'Être sirve para «estar» en un lugar. Y recuerda: «la mer», femenino.',
        vocab: [['à côté de', 'al lado de'], ['la mer', 'el mar']] },
      { parts: [['X', 'Le matin,'], ['S', 'les gens'], ['V', 'achètent'], ['O', 'des croissants'], ['C', 'et'], ['O', 'une baguette.']],
        es: 'Por la mañana, la gente compra cruasanes y una barra de pan.',
        note: '«les gens» (la gente) es plural en francés. Por eso el verbo va en plural: achètent.',
        vocab: [['le matin', 'la mañana'], ['les gens', 'la gente'], ['acheter', 'comprar'], ['la baguette', 'la barra de pan']] },
      { parts: [['S', 'Le marché'], ['V', 'est ouvert'], ['X', 'le samedi.']],
        es: 'El mercado abre (está abierto) los sábados.',
        note: '«le samedi», con artículo, significa «los sábados» (todos). Sin artículo, «samedi» es «este sábado».',
        vocab: [['ouvert', 'abierto'], ['le samedi', 'los sábados']] },
      { parts: [['S', 'J\''], ['V', 'aime'], ['O', 'mon quartier'], ['R', 'parce qu\'il est vivant.']],
        es: 'Me gusta mi barrio porque tiene vida.',
        note: '«aimer» = gustar o querer. A diferencia del español, la persona que siente el gusto es el sujeto: «yo amo mi barrio».',
        vocab: [['aimer', 'gustar, querer'], ['parce que', 'porque'], ['vivant', 'vivo, con vida']] },
    ],
    questions: [
      { q: '¿Dónde vive la persona?', opts: ['En un piso pequeño en Marsella', 'En una casa grande en París', 'Encima de la panadería', 'Al lado del mercado'], a: 0 },
      { q: '¿Cuándo abre el mercado?', opts: ['Los sábados', 'Cada mañana', 'Este sábado', 'Los domingos'], a: 0 },
      { q: 'En «des cafés», ¿por qué está «des»?', opts: ['Porque el plural indefinido en francés necesita artículo', 'Porque es una cafetería concreta', 'Porque «café» es femenino', 'Es un error'], a: 0 },
    ],
  },
};
})();
