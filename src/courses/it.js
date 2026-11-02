// Curso de italiano: desde cero hasta el B1 (CELI 2 / CILS B1).
const COURSE_DEF = {
  id: 'it',
  chatTopic: 'italiano desde cero hasta el B1. Escribe el italiano correctamente (con sus acentos) y explica en español, avisando de los falsos amigos con el español',
  minutes: { main: 45, read: 20, series: 30, vocab: 20 },
  readingTitle: 'Leer en italiano fácil',
  readingDetail: 'Una noticia corta en italiano. Al ser tan parecido al español, intenta entenderla entera sin diccionario y luego comprueba las palabras dudosas.',
  readingLinks: [['Due parole (italiano fácil)', 'https://www.dueparole.it'], ['RAI Cultura: Italiano', 'https://www.raicultura.it/speciali/italiano/']],
  seriesHint: { text: 'Algo en italiano con subtítulos', detail: 'Una serie o película en italiano de tu Jellyfin, con subtítulos en italiano. Apunta 3 palabras que se parezcan al español pero signifiquen otra cosa.' },
  levels: [
    { id: 'a1', name: 'A1', color: '#10b981', goal: 'Presentarte, hablar de tu día a día y entender frases sencillas.' },
    { id: 'a2', name: 'A2', color: '#06b6d4', goal: 'Contar lo que hiciste, describir el pasado y desenvolverte en viajes.' },
    { id: 'b1', name: 'B1', color: '#6366f1', goal: 'Dar tu opinión, expresar deseos y dudas y entender textos normales.' },
  ],
  syllabus: [
    // A1
    { id: 'i01', level: 'a1', title: 'Ciao: saludar y presentarse', focus: 'Saludos, el verbo essere y tu o Lei.' },
    { id: 'i02', level: 'a1', title: 'Il, lo, la: los artículos', focus: 'El sistema de artículos italiano y el plural.' },
    { id: 'i03', level: 'a1', title: 'Verbos en -are, -ere, -ire', focus: 'parlare, prendere, dormire en presente.' },
    { id: 'i04', level: 'a1', title: 'Avere y la negación', focus: 'Tener, la edad (ho vent\'anni) y non.' },
    { id: 'i05', level: 'a1', title: 'Hacer preguntas', focus: 'chi, che cosa, dove, quando, come, perché, quanto.' },
    { id: 'i06', level: 'a1', title: 'Números, hora y fechas', focus: 'Contar, decir la hora y quedar con alguien.' },
    { id: 'i07', level: 'a1', title: 'Preposiciones articuladas', focus: 'nel, sul, dal, al, del: preposición + artículo.' },
    { id: 'i08', level: 'a1', title: 'Posesivos y la familia', focus: 'mio padre, la mia casa: cuándo va artículo.' },
    // A2
    { id: 'i09', level: 'a2', title: 'Passato prossimo con avere', focus: 'Ho mangiato, ho visto, ho fatto.' },
    { id: 'i10', level: 'a2', title: 'Passato prossimo con essere', focus: 'Sono andato/a: movimiento, cambio y reflexivos.' },
    { id: 'i11', level: 'a2', title: 'Verbos reflexivos', focus: 'alzarsi, chiamarsi, divertirsi: la rutina.' },
    { id: 'i12', level: 'a2', title: 'El imperfetto', focus: 'Describir el pasado y las costumbres.' },
    { id: 'i13', level: 'a2', title: 'Pronombres directos e indirectos', focus: 'lo, la, li, le, gli, le.' },
    { id: 'i14', level: 'a2', title: 'Ci y ne', focus: 'Ci vado · ne voglio due.' },
    { id: 'i15', level: 'a2', title: 'El futuro semplice', focus: 'Planes, predicciones y suposiciones.' },
    { id: 'i16', level: 'a2', title: 'Comparar', focus: 'più… di, meno… che, migliore, il più bello.' },
    // B1
    { id: 'i17', level: 'b1', title: 'El condizionale', focus: 'Cortesía, deseos y consejos: vorrei, dovresti.' },
    { id: 'i18', level: 'b1', title: 'El congiuntivo presente', focus: 'Penso che sia… Credo che abbia…' },
    { id: 'i19', level: 'b1', title: 'El imperativo', focus: 'Dar instrucciones: mangia, mangiate, mangi.' },
    { id: 'i20', level: 'b1', title: 'El trapassato prossimo', focus: 'El pasado del pasado: avevo già mangiato.' },
    { id: 'i21', level: 'b1', title: 'Pronombres relativos', focus: 'che, cui, il quale.' },
    { id: 'i22', level: 'b1', title: 'El estilo indirecto', focus: 'Ha detto che… Contar lo que dijo otra persona.' },
    { id: 'i23', level: 'b1', title: 'Pronombres combinados', focus: 'me lo, glielo, te ne.' },
    { id: 'i24', level: 'b1', title: 'Dar tu opinión', focus: 'Secondo me… Argumentar y matizar.' },
  ],
};
