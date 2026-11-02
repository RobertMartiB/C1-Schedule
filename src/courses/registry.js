// Cursos disponibles. Cada curso tiene su propio temario, calendario y progreso guardado aparte.
// El curso activo se elige en la pantalla de cursos y se carga antes que el resto de la app.
const UNITS = {}; // cada fichero de unidad añade aquí su contenido

// lang: voz para leer en voz alta · sub: cómo reconocer sus subtítulos en Jellyfin · inLang: «en francés», etc.
const course = (id, code, name, subtitle, color, lang, sub, inLang, files) =>
  ({ id, code, name, subtitle, color, lang, sub, inLang, storeKey: 'tracker:' + id, syncId: 'speakly-' + id, files });

const COURSES = {
  en: {
    id: 'en', code: 'EN', name: 'Inglés', subtitle: 'De B1 a C1 Advanced (Cambridge)',
    color: '#4f5bff', storeKey: 'c1tracker:v2', syncId: 'c1tracker', lang: 'en-GB', sub: /^(en|eng)$|english|ingl/i, inLang: 'en inglés',
    files: ['courses/en.js', 'units/u01.js', 'units/u02.js', 'units/u03.js', 'units/u04.js', 'units/u05.js', 'units/u06.js', 'units/u07.js', 'units/u08.js'],
  },
  fr: course('fr', 'FR', 'Francés', 'Desde cero hasta el B1', '#0ea5e9', 'fr-FR', /^(fr|fre|fra)$|french|franc/i, 'en francés', ['courses/fr.js', 'units-fr/f01.js', 'units-fr/f02.js', 'units-fr/f03.js']),
  de: course('de', 'DE', 'Alemán', 'Desde cero hasta el B1', '#eab308', 'de-DE', /^(de|ger|deu)$|german|alem|deutsch/i, 'en alemán', ['courses/de.js', 'units-de/d01.js', 'units-de/d02.js', 'units-de/d03.js']),
  it: course('it', 'IT', 'Italiano', 'Desde cero hasta el B1', '#10b981', 'it-IT', /^(it|ita)$|italian/i, 'en italiano', ['courses/it.js', 'units-it/i01.js', 'units-it/i02.js', 'units-it/i03.js']),
  pt: course('pt', 'PT', 'Portugués', 'Desde cero hasta el B1 (Brasil y Portugal)', '#84cc16', 'pt-BR', /^(pt|por)$|portug/i, 'en portugués', ['courses/pt.js', 'units-pt/p01.js', 'units-pt/p02.js', 'units-pt/p03.js']),
  ja: {
    id: 'ja', code: 'JA', name: 'Japonés', subtitle: 'Desde cero hasta el JLPT N5',
    color: '#e0457b', storeKey: 'tracker:ja', syncId: 'c1tracker-ja', lang: 'ja-JP', sub: /^(ja|jpn)$|japan|japon/i, inLang: 'en japonés',
    files: ['courses/ja.js', 'units-ja/j01.js', 'units-ja/j02.js', 'units-ja/j03.js', 'units-ja/j04.js'],
  },
  zh: course('zh', 'ZH', 'Chino mandarín', 'Desde cero hasta el HSK 2', '#ef4444', 'zh-CN', /^(zh|chi|zho|cmn)$|chinese|chino|mandarin/i, 'en chino', ['courses/zh.js', 'units-zh/z01.js', 'units-zh/z02.js']),
  ko: course('ko', 'KO', 'Coreano', 'Desde cero hasta el TOPIK I', '#8b5cf6', 'ko-KR', /^(ko|kor)$|korean|corea/i, 'en coreano', ['courses/ko.js', 'units-ko/k01.js', 'units-ko/k02.js']),
  ru: course('ru', 'RU', 'Ruso', 'Desde cero hasta el A2', '#f97316', 'ru-RU', /^(ru|rus)$|russian|ruso/i, 'en ruso', ['courses/ru.js', 'units-ru/r01.js', 'units-ru/r02.js']),
  ar: course('ar', 'AR', 'Árabe', 'Árabe estándar desde cero hasta el A2', '#14b8a6', 'ar-SA', /^(ar|ara)$|arabic|árabe|arabe/i, 'en árabe', ['courses/ar.js', 'units-ar/a01.js', 'units-ar/a02.js']),
};

const CourseStore = {
  get active() { try { return localStorage.getItem('tracker:course'); } catch { return null; } },
  set active(id) { try { localStorage.setItem('tracker:course', id); } catch {} },
  get added() {
    try { const a = JSON.parse(localStorage.getItem('tracker:courses') || 'null'); if (Array.isArray(a) && a.length) return a; } catch {}
    return ['en']; // quien ya usaba la app tiene el curso de inglés
  },
  add(id) { const a = this.added; if (!a.includes(id)) { a.push(id); try { localStorage.setItem('tracker:courses', JSON.stringify(a)); } catch {} } },
  // Fecha de inicio de cada curso (el de inglés tiene la suya fija en su plan)
  start(id) {
    try {
      let s = localStorage.getItem('tracker:start:' + id);
      if (!s) { const d = new Date(); s = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; localStorage.setItem('tracker:start:' + id, s); }
      return s;
    } catch { return null; }
  },
  // Forma de estudiar de cada curso: por niveles (módulos al día, sin fechas) o con un plan de calendario.
  // Sin elegir, se mantiene el plan de siempre (calendario de 3 horas, descanso los domingos).
  pace(id) {
    const def = { mode: 'plan', goal: 2, minutes: 180, days: 6 };
    try { const p = JSON.parse(localStorage.getItem('tracker:pace:' + id) || 'null'); if (p) return { ...def, ...p, chosen: true }; } catch {}
    return def;
  },
  setPace(id, p) { try { localStorage.setItem('tracker:pace:' + id, JSON.stringify({ mode: p.mode, goal: p.goal, minutes: p.minutes, days: p.days })); } catch {} },
  get picked() { try { return sessionStorage.getItem('tracker:picked') === '1'; } catch { return true; } },
  set picked(v) { try { sessionStorage.setItem('tracker:picked', v ? '1' : ''); } catch {} },
};

const ACTIVE_COURSE = COURSES[CourseStore.active] || COURSES.en;
document.write(ACTIVE_COURSE.files.map(f => `<script src="${f}"><\/script>`).join(''));
