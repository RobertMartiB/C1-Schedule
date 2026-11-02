// Curso de francés: desde cero hasta el B1 del Marco Común Europeo (DELF B1).
const COURSE_DEF = {
  id: 'fr',
  chatTopic: 'francés desde cero hasta el B1. Escribe el francés correctamente (con sus acentos) y explica en español',
  minutes: { main: 45, read: 20, series: 30, vocab: 20 },
  readingTitle: 'Leer en francés fácil',
  readingDetail: 'Una noticia corta o un texto para estudiantes. Léelo dos veces: la primera sin diccionario, la segunda buscando solo lo imprescindible.',
  readingLinks: [['1jour1actu (noticias para jóvenes)', 'https://www.1jour1actu.com'], ['RFI Savoirs: français facile', 'https://francaisfacile.rfi.fr/fr/']],
  seriesHint: { text: 'Algo en francés con subtítulos', detail: 'Una serie o película en francés de tu Jellyfin, con subtítulos en francés. Apunta 3 expresiones que oigas varias veces.' },
  levels: [
    { id: 'a1', name: 'A1', color: '#0ea5e9', goal: 'Presentarte, hablar de tu día a día y entender frases sencillas.' },
    { id: 'a2', name: 'A2', color: '#6366f1', goal: 'Contar lo que hiciste, describir cómo era algo y desenvolverte en situaciones cotidianas.' },
    { id: 'b1', name: 'B1', color: '#a855f7', goal: 'Dar tu opinión, hacer hipótesis y entender textos y conversaciones normales.' },
  ],
  syllabus: [
    // A1
    { id: 'f01', level: 'a1', title: 'Bonjour: saludar y presentarse', focus: 'Saludos, el verbo être y los pronombres personales.' },
    { id: 'f02', level: 'a1', title: 'Le, la, les: el género y los artículos', focus: 'Artículos definidos e indefinidos, masculino, femenino y plural.' },
    { id: 'f03', level: 'a1', title: 'Verbos en -er en presente', focus: 'parler, habiter, aimer… La conjugación más regular del francés.' },
    { id: 'f04', level: 'a1', title: 'Avoir y la negación', focus: 'Tener, la edad y la negación ne… pas.' },
    { id: 'f05', level: 'a1', title: 'Hacer preguntas', focus: 'Est-ce que, qu\'est-ce que, où, quand, comment, pourquoi.' },
    { id: 'f06', level: 'a1', title: 'Números, hora y fechas', focus: 'Contar hasta 100 (¡soixante-dix!), decir la hora y la fecha.' },
    { id: 'f07', level: 'a1', title: 'Aller, faire y venir', focus: 'Tres verbos irregulares imprescindibles y las preposiciones con ciudades y países.' },
    { id: 'f08', level: 'a1', title: 'Adjetivos y posesivos', focus: 'Concordancia, posición del adjetivo y mon, ma, mes…' },
    // A2
    { id: 'f09', level: 'a2', title: 'Passé composé con avoir', focus: 'Contar lo que hiciste: j\'ai mangé, j\'ai fini, j\'ai pris.' },
    { id: 'f10', level: 'a2', title: 'Passé composé con être', focus: 'Los verbos de movimiento y los pronominales: je suis allé(e).' },
    { id: 'f11', level: 'a2', title: 'Futur proche y passé récent', focus: 'Je vais partir · je viens d\'arriver.' },
    { id: 'f12', level: 'a2', title: 'Pronombres de complemento', focus: 'le, la, les, lui, leur y su posición.' },
    { id: 'f13', level: 'a2', title: 'El imparfait', focus: 'Describir el pasado y las costumbres. Imparfait o passé composé.' },
    { id: 'f14', level: 'a2', title: 'Comparar', focus: 'plus… que, moins… que, aussi… que, meilleur y mieux.' },
    { id: 'f15', level: 'a2', title: 'Los pronombres y y en', focus: 'J\'y vais · j\'en veux deux.' },
    { id: 'f16', level: 'a2', title: 'Verbos pronominales', focus: 'se lever, s\'appeler, se souvenir: la rutina diaria.' },
    // B1
    { id: 'f17', level: 'b1', title: 'El futur simple', focus: 'Planes, promesas y predicciones.' },
    { id: 'f18', level: 'b1', title: 'El conditionnel', focus: 'Cortesía, deseos y la hipótesis con si.' },
    { id: 'f19', level: 'b1', title: 'El subjonctif présent', focus: 'Il faut que, je veux que, bien que…' },
    { id: 'f20', level: 'b1', title: 'Pronombres relativos', focus: 'qui, que, dont, où.' },
    { id: 'f21', level: 'b1', title: 'El plus-que-parfait', focus: 'El pasado del pasado.' },
    { id: 'f22', level: 'b1', title: 'El estilo indirecto', focus: 'Il a dit que… Contar lo que dijo otra persona.' },
    { id: 'f23', level: 'b1', title: 'Conectores', focus: 'pourtant, donc, alors que, grâce à, à cause de…' },
    { id: 'f24', level: 'b1', title: 'Dar tu opinión (DELF B1)', focus: 'Argumentar por escrito y en voz alta.' },
  ],
};
