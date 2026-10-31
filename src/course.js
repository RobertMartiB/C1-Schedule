// Ruta B1+ → B2 → C1 → examen, con 3 horas al día (descanso los domingos).
// Cada unidad tiene teoría, práctica y una lectura desmontada; el contenido vive en units/uXX.js.

const UNITS = {}; // cada fichero units/uXX.js añade aquí su contenido

const LEVELS = [
  { id: 'b1', name: 'B1+', color: '#2f9e6e', goal: 'Asentar la base y aprender a leer frases largas sin perderte.',
    series: { name: 'Modern Family', season: 1, episodes: 24 } },
  { id: 'b2', name: 'B2', color: '#3d63f5', goal: 'Dominar la gramática del First y leer textos largos con soltura.',
    series: { name: 'The Crown', season: 1, episodes: 10 } },
  { id: 'c1', name: 'C1', color: '#8a55f0', goal: 'Las estructuras avanzadas que aparecen en el C1 y vocabulario preciso.',
    series: { name: 'Succession', season: 1, episodes: 10 } },
  { id: 'exam', name: 'Examen C1', color: '#d9437a', goal: 'Formato de cada paper del C1 Advanced y simulacros cronometrados.',
    series: { name: 'Sherlock', season: 3, episodes: 3 } },
];

const SYLLABUS = [
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
];

// Escritos semanales (los sábados), por nivel
const WRITINGS = {
  b1: ['Un email a un amigo contándole tu fin de semana (120–150 palabras).', 'Una historia que empiece por "I had never felt so nervous." (140 palabras).', 'Un artículo: "My favourite place in my town" (150 palabras).'],
  b2: ['Essay: ¿Deberían ser gratis los museos? (140–190 palabras).', 'Review de una serie que estés viendo (140–190 palabras).', 'Email formal reclamando un producto defectuoso (140–190 palabras).', 'Report: instalaciones deportivas de tu barrio (140–190 palabras).'],
  c1: ['Essay: ventajas e inconvenientes del teletrabajo (220–260 palabras).', 'Proposal: mejorar la biblioteca de tu ciudad (220–260 palabras).', 'Review de un libro o película para una revista (220–260 palabras).', 'Report sobre el uso del móvil en clase (220–260 palabras).'],
  exam: ['Essay de examen cronometrado: 45 minutos.', 'Part 2 de examen (report, review o proposal): 45 minutos.'],
};

const HOLIDAYS = {
  '2026-12-24': 'Nochebuena', '2026-12-25': 'Navidad', '2026-12-31': 'Nochevieja',
  '2027-01-01': 'Año Nuevo', '2027-01-06': 'Reyes',
};

const PLAN_START = '2026-11-02';
const UNIT_DAYS = 4;          // teoría, práctica, lectura, repaso
const EXAM_PREP_DAYS = 36;    // ~6 semanas de formato y simulacros

// ---- fechas en hora local ----
const pad = n => String(n).padStart(2, '0');
const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const addDays = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return iso(d); };
const weekday = s => parse(s).getDay();

const SESSION = {
  teoria: { label: 'Teoría', icon: '📖', tab: 'teoria', text: u => `Teoría: ${u.title}`, detail: 'Lee la teoría con calma y haz los ejemplos en voz alta. Al final, los primeros ejercicios.' },
  practica: { label: 'Práctica', icon: '✍️', tab: 'practica', text: u => `Práctica: ${u.title}`, detail: 'Todos los ejercicios de la unidad. Lee la explicación de cada fallo.' },
  lectura: { label: 'Lectura', icon: '🔍', tab: 'lectura', text: u => `Lectura desmontada: ${u.title}`, detail: 'Primero lee el texto entero. Luego desmonta cada frase: busca el verbo principal y el sujeto antes de ver la solución.' },
  repaso: { label: 'Repaso', icon: '🔁', tab: 'practica', text: u => `Repaso: ${u.title}`, detail: 'Rehaz los ejercicios que fallaste y relee la teoría de esos puntos. Pasa las palabras nuevas a tus tarjetas.' },
};
const SESSION_ORDER = ['teoria', 'practica', 'lectura', 'repaso'];

function buildSchedule() {
  const days = {};
  let date = PLAN_START;
  const nextStudyDay = () => {
    for (;;) {
      const s = date; date = addDays(date, 1);
      if (weekday(s) === 0) { days[s] = { date: s, rest: 'Domingo: descanso', blocks: [] }; continue; }
      if (HOLIDAYS[s]) { days[s] = { date: s, rest: `${HOLIDAYS[s]}: día libre`, blocks: [] }; continue; }
      return s;
    }
  };
  const levelRanges = {};
  for (const lv of LEVELS) {
    let first = null, last = null, writingN = 0;
    const units = SYLLABUS.filter(u => u.level === lv.id);
    const put = (main) => {
      const s = nextStudyDay();
      first ??= s; last = s;
      days[s] = { date: s, level: lv.id, main, blocks: [] };
      if (weekday(s) === 6) days[s].writing = WRITINGS[lv.id][writingN++ % WRITINGS[lv.id].length];
      return s;
    };
    if (lv.id !== 'exam') {
      for (const u of units) SESSION_ORDER.forEach(session => put({ kind: 'unit', unit: u.id, session }));
      put({ kind: 'levelreview', text: `Repaso general del nivel ${lv.name}`, detail: 'Repasa la teoría de las unidades donde más fallaste y rehaz esos ejercicios.' });
      put({ kind: 'levelreview', text: `Repaso de vocabulario del nivel ${lv.name}`, detail: 'Todas tus tarjetas pendientes y las lecturas de este nivel en modo reto.' });
      put({ kind: 'leveltest', text: `Test de nivel ${lv.name}`, detail: 'Pídele a Claude el test de fin de nivel. Si sacas un 70% o más, pasas al siguiente nivel.' });
    } else {
      const rot = [
        ['Reading & Use of English', 'Partes 1–4 de Use of English cronometradas (Advanced Trainer o sample papers oficiales).'],
        ['Reading & Use of English', 'Partes 5–8 de Reading cronometradas.'],
        ['Listening', 'Un Listening completo (40 min). Corrige y relee la transcripción de lo que fallaste.'],
        ['Writing', 'Un writing de examen en 45 min. Pásaselo a Claude para que lo corrija.'],
        ['Speaking', 'Speaking Part 2 en voz alta con temporizador (1 min) y grabándote. Escúchate y anota errores.'],
      ];
      let k = 0, mock = 1;
      for (let i = 0; i < EXAM_PREP_DAYS; i++) {
        const s = nextStudyDay();
        first ??= s; last = s;
        const main = weekday(s) === 6
          ? { kind: 'mock', text: `Simulacro ${mock++} completo (3h55, sin parar)`, detail: 'Reading & Use of English 90 min · Writing 90 min · Listening 40 min · Speaking 15 min. Móvil fuera y sin pausas.' }
          : { kind: 'exam', text: `Formato del examen: ${rot[k % rot.length][0]}`, detail: rot[k++ % rot.length][1] };
        days[s] = { date: s, level: lv.id, main, blocks: [] };
      }
    }
    levelRanges[lv.id] = { from: first, to: last };
  }
  // Episodios repartidos por nivel (uno nuevo cada pocos días; los demás días se repasan escenas)
  for (const lv of LEVELS) {
    const r = levelRanges[lv.id];
    const study = Object.keys(days).filter(s => s >= r.from && s <= r.to && days[s].level === lv.id).sort();
    let prev = 0;
    study.forEach((s, i) => {
      const ep = Math.min(lv.series.episodes, Math.floor(i * lv.series.episodes / study.length) + 1);
      days[s].input = { ...lv.series, episode: ep, fresh: ep !== prev };
      prev = ep;
    });
  }
  return { days, levelRanges };
}

const { days: SCHEDULE, levelRanges: LEVEL_RANGES } = buildSchedule();
const PLAN_END = LEVEL_RANGES.exam.to;
const levelById = id => LEVELS.find(l => l.id === id);
const unitById = id => SYLLABUS.find(u => u.id === id);

// Fecha en la que empieza cada unidad (para la ruta)
const UNIT_START = {};
for (const s of Object.keys(SCHEDULE).sort()) {
  const m = SCHEDULE[s].main;
  if (m?.kind === 'unit' && !UNIT_START[m.unit]) UNIT_START[m.unit] = s;
}
