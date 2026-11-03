// Genera el libro en PDF de inglés con las unidades escritas: teoría, práctica (con los ejercicios
// en formato Cambridge), lectura y soluciones al final.
// Uso: npm run libro  →  website/libro/Talkiro-Libro.pdf
const { app, BrowserWindow } = require('electron');
const fs = require('fs'), path = require('path'), vm = require('vm');

const SRC = path.join(__dirname, '..', 'src');
const OUT = path.join(__dirname, '..', 'website', 'libro', 'Talkiro-Libro.pdf');

// Carga el curso, las unidades y los anexos en un contexto aislado, como los carga la app
const ctx = { UNITS: {} };
vm.createContext(ctx);
const load = f => vm.runInContext(fs.readFileSync(path.join(SRC, f), 'utf8').replace(/^const (\w+) =/gm, 'var $1 ='), ctx);
load('courses/en.js');
load('reference.js');
const syllabus = ctx.COURSE_DEF.syllabus, levels = ctx.COURSE_DEF.levels;
for (const u of syllabus) if (fs.existsSync(path.join(SRC, 'units', u.id + '.js'))) load('units/' + u.id + '.js');
const units = syllabus.filter(u => ctx.UNITS[u.id]);

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const LETTER = 'ABCD';
const PARTS = {
  1: ['Multiple-choice cloze', 'Read the text and choose the answer (A, B, C or D) that fits each gap best.'],
  2: ['Open cloze', 'Read the text and write one word in each gap.'],
  3: ['Word formation', 'Use the word in capitals to form a word that fits each gap.'],
  4: ['Key word transformation', 'Complete the second sentence so that it means the same as the first. Use the word given without changing it, and write between three and six words.'],
};
const levelName = id => levels.find(l => l.id === id)?.name || id;
// Las opciones siempre en el mismo orden (no alfabético, para que la correcta no sea siempre la A)
const order = (opts, seed) => opts.map((o, j) => ({ j, k: [...(o + seed)].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 9973, 7) })).sort((a, b) => a.k - b.k).map(x => x.j);

const solutions = [];
function exercises(u, n) {
  const sol = [];
  let html = '', k = 0;
  const plain = u.exercises.filter(e => !e.part), exam = u.exercises.filter(e => e.part);
  if (plain.length) {
    html += '<h3>Práctica</h3><ol class="ex">';
    for (const ex of plain) {
      k++;
      if (ex.type === 'mcq') {
        const o = order(ex.opts, k);
        html += `<li>${ex.q}<div class="opts">${o.map((j, i) => `<span><b>${LETTER[i]}</b> ${esc(ex.opts[j])}</span>`).join('')}</div></li>`;
        sol.push(`${k}. ${LETTER[o.indexOf(ex.a)]}`);
      } else if (ex.type === 'gap') {
        html += `<li>${ex.q.replace('___', '<span class="line"></span>')}</li>`;
        sol.push(`${k}. ${esc(ex.a[0])}`);
      } else if (ex.type === 'order') {
        html += `<li>${esc(ex.prompt)}<div class="words">${[...ex.words].sort().map(esc).join(' / ')}</div><span class="line long"></span></li>`;
        sol.push(`${k}. ${esc(ex.a)}`);
      } else if (ex.type === 'find') {
        html += `<li>${esc(ex.prompt)}<div class="sent">${esc(ex.parts.map(p => p[1]).join(' '))}</div></li>`;
        sol.push(`${k}. ${esc(ex.parts.filter(p => p[0] === ex.role).map(p => p[1]).join(' '))}`);
      }
    }
    html += '</ol>';
  }
  if (exam.length) {
    html += '<h3>Cambridge C1 · Reading and Use of English</h3>';
    for (const part of [1, 2, 3, 4]) {
      const items = exam.filter(e => e.part === part);
      if (!items.length) continue;
      const first = exam.indexOf(items[0]) + 1, last = first + items.length - 1;
      html += `<div class="part"><h4>Part ${part} · ${PARTS[part][0]} <small>(${first}–${last})</small></h4><p class="rubric">${PARTS[part][1]}</p>`;
      if (part < 4) {
        const t = u.exam[part];
        html += `<div class="etext"><b>${esc(t.title)}</b><p>${esc(t.text).replace(/\[(\d+)\]/g, (_, m) => {
          const e = exam[m - 1];
          return `<span class="gap">(${m})${e.stem ? ` <i>${esc(e.stem)}</i>` : ''}</span>`;
        })}</p></div>`;
        if (part === 1) html += `<table class="mc">${items.map((ex, i) => { const o = order(ex.opts, first + i); sol.push(`C${first + i}. ${LETTER[o.indexOf(ex.a)]} (${esc(ex.opts[ex.a])})`); return `<tr><td><b>${first + i}</b></td>${o.map((j, l) => `<td><b>${LETTER[l]}</b> ${esc(ex.opts[j])}</td>`).join('')}</tr>`; }).join('')}</table>`;
        else items.forEach((ex, i) => sol.push(`C${first + i}. ${esc(ex.a.join(' / '))}`));
      } else {
        html += '<ol class="kwt" start="' + first + '">' + items.map((ex, i) => { sol.push(`C${first + i}. ${esc(ex.a[0])}`); return `<li>${esc(ex.s1)}<div class="kw">${esc(ex.key)}</div>${esc(ex.s2).replace('___', '<span class="line long"></span>')}</li>`; }).join('') + '</ol>';
      }
      html += '</div>';
    }
  }
  solutions.push({ n, title: u.title, sol, reading: [] });
  return html;
}

function reading(u, n) {
  const r = ctx.UNITS[u.id].reading;
  if (!r) return '';
  const s = solutions[solutions.length - 1];
  r.questions?.forEach((q, i) => { const o = order(q.opts, i + 50); s.reading.push(`${i + 1}. ${LETTER[o.indexOf(q.a)]}`); });
  return `<h3>Lectura · ${esc(r.title)}</h3>
    <div class="reading">${r.sentences.map(x => esc(x.parts.map(p => p[1]).join(' '))).join(' ')}</div>
    <h4>Vocabulario</h4><p class="vocab">${r.sentences.flatMap(x => x.vocab || []).map(([w, es]) => `<b>${esc(w)}</b> ${esc(es)}`).join(' · ')}</p>
    ${r.questions?.length ? `<h4>Preguntas</h4><ol class="ex">${r.questions.map((q, i) => { const o = order(q.opts, i + 50); return `<li>${esc(q.q)}<div class="opts">${o.map((j, l) => `<span><b>${LETTER[l]}</b> ${esc(q.opts[j])}</span>`).join('')}</div></li>`; }).join('')}</ol>` : ''}`;
}

const byLevel = [...new Set(units.map(u => u.level))].map(lv => `${levelName(lv)}`).join(' y ');
const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Libro de inglés · Talkiro</title><style>
  @page { size: A4; margin: 18mm 16mm 20mm; }
  body { font: 10.5pt/1.55 system-ui, "Segoe UI", Roboto, sans-serif; color: #1b1830; }
  h1 { font-size: 26pt; margin: 40mm 0 4mm; } h2 { font-size: 18pt; margin: 0 0 2mm; }
  h3 { font-size: 12.5pt; margin: 7mm 0 2mm; color: #5a3fd6; border-bottom: 1px solid #ddd; padding-bottom: 1mm; }
  h4 { font-size: 10.5pt; margin: 4mm 0 1mm; } small { color: #777; font-weight: normal; }
  .over { letter-spacing: .25em; font-size: 8pt; color: #777; text-transform: uppercase; }
  .unit { page-break-before: always; } .focus { color: #666; margin: 0 0 4mm; }
  .toc div { margin: 3mm 0; } .toc b { display: block; }
  .ex { position: static; padding-left: 6mm; } .ex li { margin: 0 0 2.5mm; break-inside: avoid; }
  .opts { display: flex; flex-wrap: wrap; gap: 1mm 6mm; margin-top: 1mm; } .opts b, .mc b { color: #5a3fd6; }
  .line { display: inline-block; min-width: 28mm; border-bottom: 1px solid #555; } .line.long { min-width: 70mm; }
  .words, .sent { font-style: italic; color: #444; }
  .ex table, table.mc { border-collapse: collapse; width: 100%; font-size: 9.5pt; } .mc td { padding: 1mm 2mm; border-bottom: 1px solid #eee; }
  .part { break-inside: auto; } .rubric { font-weight: 600; margin: 0 0 2mm; }
  h3, h4, .rubric { break-after: avoid; page-break-after: avoid; }
  .etext { border-left: 3px solid #7c5cff; padding: 2mm 4mm; background: #f6f4fd; line-height: 1.9; break-inside: avoid; }
  .etext p { margin: 1mm 0 0; } .gap { font-weight: 700; color: #5a3fd6; } .gap i { font-style: normal; font-size: 8pt; }
  .kw { display: inline-block; margin: 1mm 0; padding: 0 3mm; border: 1px solid #7c5cff; font-weight: 800; letter-spacing: .08em; color: #5a3fd6; }
  .kwt li { margin: 0 0 4mm; break-inside: avoid; } .kwt div.kw { display: table; }
  .theory .ex, .theory .ex li { list-style: none; } .theory .ex { background: #f6f4fd; padding: 2mm 4mm; border-radius: 2mm; }
  .theory table { border-collapse: collapse; margin: 2mm 0; } .theory td, .theory th { border: 1px solid #ddd; padding: 1mm 2mm; font-size: 9.5pt; text-align: left; }
  .theory s { color: #b03; } .reading { text-align: justify; } .vocab { font-size: 9.5pt; }
  .sol { columns: 2; font-size: 9pt; } .sol div { break-inside: avoid; margin-bottom: 3mm; } .sol b { display: block; }
  .irr { width: 100%; border-collapse: collapse; font-size: 9pt; } .irr td, .irr th { border-bottom: 1px solid #eee; padding: .6mm 2mm; text-align: left; }
</style></head><body>
<section><div class="over">Libro de gramática · Talkiro</div><h1>Inglés de B1 a C1</h1><h2>Niveles ${byLevel}</h2>
<p>Teoría, práctica, ejercicios con el formato del Cambridge C1 Advanced y lecturas para estudiar en papel. Es el mismo contenido que la app, unidad por unidad. Las soluciones están al final: no las mires hasta terminar cada ejercicio.</p>
<p class="muted"><small>Los textos y ejercicios son originales; solo imitan la estructura del examen.</small></p>
<div class="toc">${units.map((u, i) => `<div><b>Unidad ${i + 1} · ${esc(u.title)} <small>(${levelName(u.level)})</small></b>${esc(u.focus)}</div>`).join('')}<div><b>Soluciones</b></div><div><b>Anexo · Verbos irregulares</b></div></div></section>
${units.map((u, i) => { const d = ctx.UNITS[u.id]; return `<section class="unit"><div class="over">${levelName(u.level)} · Unidad ${i + 1}</div><h2>${esc(u.title)}</h2><p class="focus">${esc(u.focus)}</p>
  <h3>Teoría</h3><div class="theory">${d.theory.map(t => `<h4>${esc(t.h)}</h4>${t.html.replace(/class="ex"/g, 'class="ex"')}`).join('')}</div>
  ${exercises({ ...d, title: u.title }, i + 1)}${reading(u, i + 1)}</section>`; }).join('')}
<section class="unit"><h2>Soluciones</h2><p class="focus">Los números con C son los del bloque Cambridge.</p><div class="sol">${solutions.map(s => `<div><b>Unidad ${s.n} · ${esc(s.title)}</b>${s.sol.join('<br>')}${s.reading.length ? `<br><i>Lectura:</i> ${s.reading.join(' · ')}` : ''}</div>`).join('')}</div></section>
<section class="unit"><h2>Anexo · Verbos irregulares</h2><table class="irr"><tr><th>Infinitivo</th><th>Pasado</th><th>Participio</th><th>Significado</th></tr>${ctx.IRREGULAR.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table></section>
</body></html>`;

app.whenReady().then(async () => {
  const tmp = path.join(app.getPath('temp'), 'talkiro-libro.html');
  fs.writeFileSync(tmp, html);
  const win = new BrowserWindow({ show: false });
  await win.loadFile(tmp);
  const pdf = await win.webContents.printToPDF({
    pageSize: 'A4', printBackground: true, displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: '<div style="font-size:8px;width:100%;text-align:right;padding-right:16mm;color:#888">Talkiro · <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    margins: { top: 0.6, bottom: 0.7, left: 0.6, right: 0.6 },
  });
  fs.writeFileSync(OUT, pdf);
  console.log(`Libro: ${units.length} unidades → ${path.relative(process.cwd(), OUT)} (${Math.round(pdf.length / 1024)} KB)`);
  app.quit();
});
