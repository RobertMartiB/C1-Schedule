// Curso de alemán: desde cero hasta el B1 (Goethe-Zertifikat B1).
const COURSE_DEF = {
  id: 'de',
  chatTopic: 'alemán desde cero hasta el B1. Escribe el alemán correctamente (sustantivos en mayúscula, ä ö ü ß) y explica en español',
  minutes: { main: 45, read: 20, series: 30, vocab: 20 },
  readingTitle: 'Leer en alemán fácil',
  readingDetail: 'Una noticia en alemán sencillo. Primero busca los verbos: en alemán, el verbo conjugado siempre va en segunda posición.',
  readingLinks: [['nachrichtenleicht.de (noticias en alemán fácil)', 'https://www.nachrichtenleicht.de'], ['Deutsche Welle: Deutsch lernen', 'https://learngerman.dw.com/es']],
  seriesHint: { text: 'Algo en alemán con subtítulos', detail: 'Una serie o película en alemán de tu Jellyfin (Dark es perfecta), con subtítulos en alemán. Apunta 3 palabras que oigas varias veces.' },
  levels: [
    { id: 'a1', name: 'A1', color: '#eab308', goal: 'Presentarte, hablar de ti y de tu día a día con frases sencillas.' },
    { id: 'a2', name: 'A2', color: '#f97316', goal: 'Contar lo que hiciste, usar los casos y desenvolverte en situaciones cotidianas.' },
    { id: 'b1', name: 'B1', color: '#ef4444', goal: 'Dar tu opinión, hacer hipótesis y entender textos normales.' },
  ],
  syllabus: [
    // A1
    { id: 'd01', level: 'a1', title: 'Hallo: saludar y presentarse', focus: 'Saludos, el verbo sein y los pronombres. Du o Sie.' },
    { id: 'd02', level: 'a1', title: 'Der, die, das', focus: 'Los tres géneros, los artículos y el plural.' },
    { id: 'd03', level: 'a1', title: 'Los verbos en presente', focus: 'wohnen, lernen, arbeiten… y los que cambian de vocal.' },
    { id: 'd04', level: 'a1', title: 'Haben y el acusativo', focus: 'Ich habe einen Hund: el primer caso.' },
    { id: 'd05', level: 'a1', title: 'Preguntas y el verbo en segunda posición', focus: 'W-Fragen y la regla de oro del orden alemán.' },
    { id: 'd06', level: 'a1', title: 'Números, hora y fechas', focus: 'einundzwanzig: los números se dicen al revés.' },
    { id: 'd07', level: 'a1', title: 'Verbos separables', focus: 'aufstehen → Ich stehe um 7 Uhr auf.' },
    { id: 'd08', level: 'a1', title: 'Verbos modales', focus: 'können, müssen, wollen, dürfen: el infinitivo al final.' },
    // A2
    { id: 'd09', level: 'a2', title: 'Perfekt con haben', focus: 'Ich habe gearbeitet: contar el pasado en alemán hablado.' },
    { id: 'd10', level: 'a2', title: 'Perfekt con sein', focus: 'Ich bin gefahren: movimiento y cambio de estado.' },
    { id: 'd11', level: 'a2', title: 'El dativo', focus: 'mit dem Bus, ich gebe dir: el segundo caso.' },
    { id: 'd12', level: 'a2', title: 'Preposiciones de lugar', focus: 'in, an, auf… ¿acusativo o dativo? (Wechselpräpositionen)' },
    { id: 'd13', level: 'a2', title: 'Declinación del adjetivo', focus: 'ein großer Hund, der große Hund.' },
    { id: 'd14', level: 'a2', title: 'Weil y dass: el verbo al final', focus: 'Las subordinadas mandan el verbo al final.' },
    { id: 'd15', level: 'a2', title: 'Präteritum de sein, haben y modales', focus: 'war, hatte, konnte, musste.' },
    { id: 'd16', level: 'a2', title: 'Verbos reflexivos', focus: 'sich freuen, sich waschen, sich interessieren für.' },
    // B1
    { id: 'd17', level: 'b1', title: 'Konjunktiv II', focus: 'würde, wäre, hätte: deseos, cortesía e hipótesis.' },
    { id: 'd18', level: 'b1', title: 'Oraciones de relativo', focus: 'der Mann, der… / die Frau, die…' },
    { id: 'd19', level: 'b1', title: 'La pasiva', focus: 'Das Haus wird gebaut.' },
    { id: 'd20', level: 'b1', title: 'El futuro', focus: 'werden + infinitivo, y cuándo basta con el presente.' },
    { id: 'd21', level: 'b1', title: 'El genitivo', focus: 'das Auto meines Vaters, wegen, trotz.' },
    { id: 'd22', level: 'b1', title: 'Infinitivo con zu', focus: 'Ich habe keine Zeit, zu kommen. um… zu.' },
    { id: 'd23', level: 'b1', title: 'Conectores dobles', focus: 'entweder… oder, sowohl… als auch, je… desto.' },
    { id: 'd24', level: 'b1', title: 'Dar tu opinión (Goethe B1)', focus: 'Meiner Meinung nach… Argumentar por escrito y en voz alta.' },
  ],
};
