// Plan de estudio C1 Advanced (sacado del CSV) y generador de tareas día a día.

const BOOKS = [
  {
    id: 'agiu', title: 'Advanced Grammar in Use', author: 'Martin Hewings · Cambridge',
    from: '2026-11-02', to: '2027-01-18',
    why: 'Unidades 1–105 y el Study Planner del principio. Es el libro de las semanas 1–8.',
  },
  {
    id: 'alp', title: 'Advanced Language Practice', author: 'Michael Vince · Macmillan',
    from: '2026-12-29', to: '2027-01-18',
    why: 'Una sección de Use of English al día desde la semana 6.',
  },
  {
    id: 'ca', title: 'Complete Advanced', author: 'Cambridge (o Advanced Trainer)',
    from: '2027-01-19', to: '2027-03-08',
    why: 'Unidades 1–14: formato de cada paper del examen. Si no está, coge el Advanced Trainer.',
  },
  {
    id: 'at', title: 'Advanced Trainer', author: 'Cambridge · alternativa / simulacros',
    from: '2027-02-16', to: '2027-03-08',
    why: 'Exámenes completos para los 2–3 simulacros cronometrados de las semanas 13–15.',
  },
];

const PHASES = [
  {
    id: 1, weeks: '1–4', from: '2026-11-02', to: '2026-12-21', color: '#4f7cff',
    title: 'Gramática I', books: 'Advanced Grammar in Use',
    summary: 'Unidades 1–50. 1–2 uds/día. Study Planner la semana 1 y salta lo que ya domines.',
    series: { name: 'The Crown', season: 1, episodes: 10 },
  },
  {
    id: 2, weeks: '5–8', from: '2026-12-22', to: '2027-01-18', color: '#9b5cff',
    title: 'Gramática II', books: 'Advanced Grammar in Use + Advanced Language Practice',
    summary: 'Uds 51–105 (inversiones, clefts, participle clauses). Desde la semana 6, 1 sección/día de Use of English de Vince.',
    series: { name: 'Succession', season: 1, episodes: 10 },
  },
  {
    id: 3, weeks: '9–12', from: '2027-01-19', to: '2027-02-15', color: '#14a37f',
    title: 'Formato del examen', books: 'Complete Advanced (o Advanced Trainer)',
    summary: 'Unidades 1–7. Entrenar el formato de cada paper. 1 writing/semana en Write & Improve.',
    series: { name: 'Succession', season: 2, episodes: 10 },
  },
  {
    id: 4, weeks: '13–15', from: '2027-02-16', to: '2027-03-08', color: '#e08a1e',
    title: 'Simulacros', books: 'Complete Advanced / Advanced Trainer',
    summary: 'Unidades 8–14 + 2–3 simulacros cronometrados (3h55, sin parar).',
    series: { name: 'Sherlock', season: 3, episodes: 3 },
  },
  {
    id: 5, weeks: '16', from: '2027-03-09', to: '2027-03-12', color: '#e0457b',
    title: 'Repaso final', books: 'Tu libreta de errores',
    summary: 'Solo lo que fallaste en los simulacros. 1 writing final. Descanso el día anterior.',
    series: null,
  },
];

// Días sin estudio (fiestas). Se puede ver el episodio si apetece.
const HOLIDAYS = {
  '2026-12-24': 'Nochebuena', '2026-12-25': 'Navidad', '2026-12-31': 'Nochevieja',
  '2027-01-01': 'Año Nuevo', '2027-01-06': 'Reyes',
};

// ---- utilidades de fecha (siempre en hora local) ----
const pad = n => String(n).padStart(2, '0');
const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parse = s => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
const addDays = (s, n) => { const d = parse(s); d.setDate(d.getDate() + n); return iso(d); };
function range(from, to) { const out = []; for (let s = from; s <= to; s = addDays(s, 1)) out.push(s); return out; }
const weekday = s => parse(s).getDay(); // 0 = domingo

// Reparte `count` elementos entre `slots` huecos lo más equilibrado posible.
function spread(count, slots) {
  const out = [];
  for (let i = 0; i < slots; i++) {
    const a = Math.floor(i * count / slots), b = Math.floor((i + 1) * count / slots);
    out.push([a, b - 1]);
  }
  return out;
}
const unitsText = (a, b) => (a === b ? `Unidad ${a}` : `Unidades ${a}–${b}`);

function buildSchedule() {
  const days = {};
  const day = s => (days[s] ??= { date: s, tasks: [], input: null, phase: null, holiday: HOLIDAYS[s] || null });
  const add = (s, t) => day(s).tasks.push(t);

  for (const p of PHASES) for (const s of range(p.from, p.to)) day(s).phase = p.id;

  // --- Fases 1 y 2: Advanced Grammar in Use ---
  function grammar(phase, firstUnit, lastUnit) {
    const all = range(phase.from, phase.to);
    const study = all.filter(s => weekday(s) !== 0 && !HOLIDAYS[s]);
    const slots = spread(lastUnit - firstUnit + 1, study.length);
    let weekStart = null, weekEnd = null;
    for (const s of all) {
      if (HOLIDAYS[s]) { add(s, { kind: 'rest', text: `Día libre: ${HOLIDAYS[s]}`, detail: 'Hoy no toca estudiar. Si te apetece, mira el episodio en inglés.' }); continue; }
      if (weekday(s) === 0) {
        if (weekStart !== null) add(s, {
          kind: 'review', book: 'agiu', text: `Repaso semanal: ${unitsText(weekStart, weekEnd)}`,
          detail: 'Rehaz solo los ejercicios que fallaste esta semana y pásalos a tu libreta de errores. Haz también las "Additional exercises" del final del libro que toquen estas unidades.',
        });
        weekStart = weekEnd = null;
        continue;
      }
      const [a, b] = slots[study.indexOf(s)];
      if (b < a) continue;
      const ua = firstUnit + a, ub = firstUnit + b;
      weekStart ??= ua; weekEnd = ub;
      add(s, {
        kind: 'grammar', book: 'agiu', text: `Advanced Grammar in Use · ${unitsText(ua, ub)}`,
        detail: 'Cada unidad son 2 páginas: lee la explicación de la izquierda, haz los ejercicios de la derecha y corrige con las soluciones del final. Apunta los fallos.',
      });
    }
  }
  const [p1, p2, p3, p4, p5] = PHASES;

  add(p1.from, {
    kind: 'setup', book: 'agiu', text: 'Study Planner de Advanced Grammar in Use',
    detail: 'Está al principio del libro. Hazlo entero y marca las unidades que ya dominas: esas te las puedes saltar (deja la tarea marcada como hecha).',
  });
  grammar(p1, 1, 50);
  grammar(p2, 51, 105);

  // Vince: 1 sección de Use of English al día desde la semana 6
  let section = 1;
  for (const s of range('2026-12-29', p2.to)) {
    if (HOLIDAYS[s] || weekday(s) === 0) continue;
    add(s, {
      kind: 'uoe', book: 'alp', text: `Advanced Language Practice · Use of English, sección ${section++}`,
      detail: 'Haz la sección sin mirar la gramática, corrige y repasa en Grammar in Use los puntos que falles.',
    });
  }

  // --- Fase 3: Complete Advanced 1–7 ---
  {
    const parts = ['Reading & Use of English', 'Grammar + Vocabulary', 'Listening', 'Speaking + Writing'];
    const tips = [
      'Haz las tareas de Reading y Use of English de la unidad. Cronométrate: el paper real son 90 min para 8 partes.',
      'Gramática y vocabulario de la unidad. Las listas de palabras, a tu libreta.',
      'Listening con el audio del libro (el código de acceso suele venir dentro). Primero sin pausas, como en el examen.',
      'Speaking: responde en voz alta y grábate con el móvil (Part 2 = 1 min por persona). Lee el modelo de Writing de la unidad.',
    ];
    const items = [];
    for (let u = 1; u <= 7; u++) parts.forEach((p, i) => items.push({ u, p, tip: tips[i] }));
    const all = range(p3.from, p3.to);
    const study = all.filter(s => weekday(s) !== 0);
    const slots = spread(items.length, study.length);
    for (const s of all) {
      if (weekday(s) === 0) {
        add(s, { kind: 'review', text: 'Repaso semanal + vocabulario', detail: 'Repasa la libreta de errores y el vocabulario de la semana. Lee en voz alta 10 frases nuevas.' });
        continue;
      }
      const [a, b] = slots[study.indexOf(s)];
      for (let i = a; i <= b; i++) {
        const it = items[i];
        add(s, { kind: 'exam', book: 'ca', text: `Complete Advanced · Unidad ${it.u}: ${it.p}`, detail: it.tip });
      }
      if (weekday(s) === 6) add(s, {
        kind: 'writing', text: 'Writing de la semana en Write & Improve', link: 'https://writeandimprove.com',
        detail: 'Escribe un essay, report, review o proposal (220–260 palabras) en Write & Improve. Corrige lo que te marque y vuelve a enviarlo.',
      });
    }
  }

  // --- Fase 4: Complete Advanced 8–14 + simulacros los sábados ---
  {
    const parts = ['Reading & Use of English + Grammar', 'Listening, Speaking y Writing'];
    const items = [];
    for (let u = 8; u <= 14; u++) parts.forEach(p => items.push({ u, p }));
    const all = range(p4.from, p4.to);
    const study = all.filter(s => weekday(s) !== 0 && weekday(s) !== 6);
    const slots = spread(items.length, study.length);
    let mock = 1;
    for (const s of all) {
      if (weekday(s) === 6) {
        add(s, {
          kind: 'mock', book: 'at', text: `Simulacro ${mock++} completo (3h55, sin parar)`,
          detail: 'Reading & Use of English 90 min · Writing 90 min · Listening 40 min · Speaking 15 min (grábate). Móvil fuera, cronómetro y nada de pausas.',
        });
        continue;
      }
      if (weekday(s) === 0) {
        add(s, { kind: 'review', text: 'Corregir el simulacro de ayer', detail: 'Corrige, calcula tu nota por paper y apunta cada error en la libreta: será lo que repases la semana 16.' });
        continue;
      }
      const [a, b] = slots[study.indexOf(s)];
      if (b < a) { add(s, { kind: 'review', text: 'Repaso libre', detail: 'Repasa la parte del examen que peor te salió en el último simulacro.' }); continue; }
      for (let i = a; i <= b; i++) add(s, { kind: 'exam', book: 'ca', text: `Complete Advanced · Unidad ${items[i].u}: ${items[i].p}`, detail: 'Igual que en la fase anterior: cronométrate y apunta los errores.' });
    }
  }

  // --- Fase 5: repaso final ---
  const final = [
    { kind: 'review', text: 'Errores de Reading & Use of English', detail: 'Solo lo que fallaste en los simulacros. Rehaz esos ejercicios.' },
    { kind: 'review', text: 'Errores de Listening + Speaking en voz alta', detail: 'Repite un Listening que te costó. Practica Speaking Part 2 con temporizador (1 min).' },
    { kind: 'writing', text: 'Writing final cronometrado (45 min)', link: 'https://writeandimprove.com', detail: 'Un essay de Part 1 en 45 minutos. Revísalo en Write & Improve.' },
    { kind: 'rest', text: 'Descanso', detail: 'Hoy nada de estudiar. Prepara el DNI, la confirmación del examen y lápices. Duerme bien.' },
  ];
  range(p5.from, p5.to).forEach((s, i) => final[i] && add(s, final[i]));

  // --- Input diario: series repartidas por fase ---
  for (const p of PHASES) {
    if (!p.series) continue;
    const all = range(p.from, p.to);
    let prev = 0;
    all.forEach((s, i) => {
      const ep = Math.floor(i * p.series.episodes / all.length) + 1;
      day(s).input = { ...p.series, episode: ep, fresh: ep !== prev };
      prev = ep;
    });
  }
  return days;
}

const SCHEDULE = buildSchedule();
const PLAN_START = PHASES[0].from;
const PLAN_END = PHASES[PHASES.length - 1].to;
