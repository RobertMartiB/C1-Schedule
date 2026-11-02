// Cursos disponibles. Cada curso tiene su propio temario, calendario y progreso guardado aparte.
// El curso activo se elige en la pantalla de cursos y se carga antes que el resto de la app.
const UNITS = {}; // cada fichero de unidad añade aquí su contenido

const COURSES = {
  en: {
    id: 'en', code: 'EN', name: 'Inglés', subtitle: 'De B1 a C1 Advanced (Cambridge)',
    color: '#4f5bff', storeKey: 'c1tracker:v2', syncId: 'c1tracker',
    files: ['courses/en.js', 'units/u01.js', 'units/u02.js', 'units/u03.js', 'units/u04.js', 'units/u05.js', 'units/u06.js', 'units/u07.js', 'units/u08.js'],
  },
  ja: {
    id: 'ja', code: 'JA', name: 'Japonés', subtitle: 'Desde cero hasta el JLPT N5',
    color: '#e0457b', storeKey: 'tracker:ja', syncId: 'c1tracker-ja',
    files: ['courses/ja.js', 'units-ja/j01.js', 'units-ja/j02.js', 'units-ja/j03.js', 'units-ja/j04.js'],
  },
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
  get picked() { try { return sessionStorage.getItem('tracker:picked') === '1'; } catch { return true; } },
  set picked(v) { try { sessionStorage.setItem('tracker:picked', v ? '1' : ''); } catch {} },
};

const ACTIVE_COURSE = COURSES[CourseStore.active] || COURSES.en;
document.write(ACTIVE_COURSE.files.map(f => `<script src="${f}"><\/script>`).join(''));
