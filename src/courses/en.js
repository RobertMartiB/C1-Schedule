// Curso de inglés: de B1 a C1 Advanced, con 3 horas al día (descanso los domingos).
const COURSE_DEF = {
  id: 'en',
  chatTopic: 'inglés para aprobar el Cambridge C1 Advanced',
  readingLinks: [['News in Levels', 'https://www.newsinlevels.com'], ['BBC Learning English', 'https://www.bbc.co.uk/learningenglish']],
  minutes: { main: 60, read: 45, series: 45, vocab: 30, writing: 45 },
  levels: [
  { id: 'b1', name: 'B1+', color: '#2f9e6e', goal: 'Asentar la base y aprender a leer frases largas sin perderte.',
    series: { name: 'Modern Family', season: 1, episodes: 24 } },
  { id: 'b2', name: 'B2', color: '#3d63f5', goal: 'Dominar la gramática del First y leer textos largos con soltura.',
    series: { name: 'The Crown', season: 1, episodes: 10 } },
  { id: 'c1', name: 'C1', color: '#8a55f0', goal: 'Las estructuras avanzadas que aparecen en el C1 y vocabulario preciso.',
    series: { name: 'Succession', season: 1, episodes: 10 } },
  { id: 'exam', kind: 'exam', name: 'Examen C1', color: '#d9437a', goal: 'Formato de cada paper del C1 Advanced y simulacros cronometrados.',
    series: { name: 'Sherlock', season: 3, episodes: 3 } },
],

  syllabus: [
  // B1+
  { id: 'u01', level: 'b1', title: 'El esqueleto de la frase', focus: 'Sujeto, verbo y complementos. Cómo leer frases largas.' },
  { id: 'u02', level: 'b1', title: 'Oraciones de relativo', focus: 'who, which, that, whose, where. Cuándo se omiten.' },
  { id: 'u03', level: 'b1', title: 'Present perfect o past simple', focus: 'Pasado terminado frente a pasado conectado con el presente.' },
  { id: 'u04', level: 'b1', title: 'La pasiva', focus: 'Quién recibe la acción. Todos los tiempos.' },
  { id: 'u05', level: 'b1', title: 'Conectores de contraste y causa', focus: 'although, however, despite, because of, so…' },
  { id: 'u06', level: 'b1', title: 'Narrar en pasado', focus: 'Past continuous, past perfect y used to.' },
  { id: 'u07', level: 'b1', title: 'Condicionales 0, 1 y 2', focus: 'Situaciones reales e hipotéticas.' },
  { id: 'u08', level: 'b1', title: 'Verbo + -ing o + to', focus: 'enjoy doing, decide to do, stop/remember/try.' },
  // B2
  { id: 'u09', level: 'b2', title: 'Tercer condicional y mixtos', focus: 'Hablar de un pasado que no pasó.' },
  { id: 'u10', level: 'b2', title: 'Wish e if only', focus: 'Deseos y arrepentimientos.' },
  { id: 'u11', level: 'b2', title: 'Modales de deducción', focus: 'must / might / can\'t (have).' },
  { id: 'u12', level: 'b2', title: 'Estilo indirecto', focus: 'Contar lo que alguien dijo o preguntó.' },
  { id: 'u13', level: 'b2', title: 'Participle clauses', focus: 'Frases con -ing y -ed que resumen oraciones.' },
  { id: 'u14', level: 'b2', title: 'El futuro a fondo', focus: 'will, going to, future continuous y perfect.' },
  { id: 'u15', level: 'b2', title: 'Phrasal verbs esenciales', focus: 'Los 60 que más salen en el examen.' },
  { id: 'u16', level: 'b2', title: 'Collocations', focus: 'make/do, have/take y adjetivo + nombre.' },
  { id: 'u17', level: 'b2', title: 'Formación de palabras', focus: 'Prefijos y sufijos (Use of English Part 3).' },
  { id: 'u18', level: 'b2', title: 'Hábitos: used to, would, be used to', focus: 'Costumbres pasadas y presentes.' },
  // C1
  { id: 'u19', level: 'c1', title: 'Inversión', focus: 'Never have I…, Not only…, Had I known…' },
  { id: 'u20', level: 'c1', title: 'Cleft sentences', focus: 'What I need is…, It was… that…' },
  { id: 'u21', level: 'c1', title: 'Pasiva avanzada', focus: 'It is said that… / He is thought to…' },
  { id: 'u22', level: 'c1', title: 'Subjuntivo y verbos de sugerencia', focus: 'suggest/insist that he go, It\'s time…' },
  { id: 'u23', level: 'c1', title: 'Nominalización', focus: 'Convertir verbos en sustantivos: el inglés de los textos formales.' },
  { id: 'u24', level: 'c1', title: 'Matizar: hedging', focus: 'tend to, appear to, it could be argued…' },
  { id: 'u25', level: 'c1', title: 'Conectores avanzados', focus: 'notwithstanding, albeit, hence, whereby…' },
  { id: 'u26', level: 'c1', title: 'Expresiones idiomáticas', focus: 'Las que aparecen en readings y listenings del C1.' },
  ],

// Escritos semanales (los sábados), por nivel
  writings: {
  b1: ['Un email a un amigo contándole tu fin de semana (120–150 palabras).', 'Una historia que empiece por "I had never felt so nervous." (140 palabras).', 'Un artículo: "My favourite place in my town" (150 palabras).'],
  b2: ['Essay: ¿Deberían ser gratis los museos? (140–190 palabras).', 'Review de una serie que estés viendo (140–190 palabras).', 'Email formal reclamando un producto defectuoso (140–190 palabras).', 'Report: instalaciones deportivas de tu barrio (140–190 palabras).'],
  c1: ['Essay: ventajas e inconvenientes del teletrabajo (220–260 palabras).', 'Proposal: mejorar la biblioteca de tu ciudad (220–260 palabras).', 'Review de un libro o película para una revista (220–260 palabras).', 'Report sobre el uso del móvil en clase (220–260 palabras).'],
  exam: ['Essay de examen cronometrado: 45 minutos.', 'Part 2 de examen (report, review o proposal): 45 minutos.'],
  },

  holidays: {
  '2026-12-24': 'Nochebuena', '2026-12-25': 'Navidad', '2026-12-31': 'Nochevieja',
  '2027-01-01': 'Año Nuevo', '2027-01-06': 'Reyes',
},

  start: '2026-11-02',
  examPrepDays: 36,    // ~6 semanas de formato y simulacros
};
