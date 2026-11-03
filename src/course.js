// Motor de la ruta: convierte el temario del curso activo en un calendario día a día.
// Cada unidad tiene teoría, práctica y una lectura desmontada; el contenido vive en units*/.

// Datos del curso activo (courses/xx.js) convertidos a las constantes que usa la app.
const LEVELS = COURSE_DEF.levels;
const SYLLABUS = COURSE_DEF.syllabus;
const WRITINGS = COURSE_DEF.writings || {};
const HOLIDAYS = COURSE_DEF.holidays || {};
const PLAN_START = COURSE_DEF.start || CourseStore.start(COURSE_DEF.id);
const EXAM_PREP_DAYS = COURSE_DEF.examPrepDays || 0;
// Cómo ha elegido estudiar este curso la persona (ver CourseStore.pace)
const PACE = CourseStore.pace(COURSE_DEF.id);
const BY_LEVELS = PACE.mode === 'levels';

// ---- fechas en hora local ----
const pad = n => String(n).padStart(2, '0');
const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const addDays = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return iso(d); };
const weekday = s => parse(s).getDay();

const SESSION = {
  full: { label: 'Unidad completa', icon: '📖', tab: 'teoria', text: u => u.title, detail: 'Hoy toca esta unidad entera: teoría, práctica y lectura desmontada. Mañana, la siguiente.' },
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
      if (PACE.days < 7 && weekday(s) === 0) { days[s] = { date: s, rest: 'Domingo: descanso', blocks: [] }; continue; }
      if (PACE.days < 6 && weekday(s) === 6) { days[s] = { date: s, rest: 'Sábado: descanso', blocks: [] }; continue; }
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
      if (weekday(s) === 6 && WRITINGS[lv.id]?.length) days[s].writing = WRITINGS[lv.id][writingN++ % WRITINGS[lv.id].length];
      return s;
    };
    if (lv.kind !== 'exam') {
      // Una unidad completa por día: cada día un tema nuevo
      for (const u of units) put({ kind: 'unit', unit: u.id, session: 'full' });
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
    if (!lv.series) continue;
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
const PLAN_END = LEVEL_RANGES[LEVELS[LEVELS.length - 1].id].to;
const levelById = id => LEVELS.find(l => l.id === id);
const unitById = id => SYLLABUS.find(u => u.id === id);

// Fecha en la que empieza cada unidad (para la ruta)
const UNIT_START = {};
for (const s of Object.keys(SCHEDULE).sort()) {
  const m = SCHEDULE[s].main;
  if (m?.kind === 'unit' && !UNIT_START[m.unit]) UNIT_START[m.unit] = s;
}
