// Banderas de cada curso en SVG (los emojis de bandera no se ven en Windows).
// Todas en proporción 3:2 (viewBox 30×20) para que queden alineadas en las tarjetas.
const FLAGS = (() => {
  const star = (cx, cy, r, rot = 0) => {
    const p = [];
    for (let i = 0; i < 10; i++) {
      const a = (rot - 90 + i * 36) * Math.PI / 180, rr = i % 2 ? r * 0.382 : r;
      p.push(`${(cx + rr * Math.cos(a)).toFixed(2)},${(cy + rr * Math.sin(a)).toFixed(2)}`);
    }
    return `<polygon points="${p.join(' ')}"/>`;
  };
  const vbars = (a, b, c) => `<rect width="10" height="20" fill="${a}"/><rect x="10" width="10" height="20" fill="${b}"/><rect x="20" width="10" height="20" fill="${c}"/>`;
  const hbars = (a, b, c) => `<rect width="30" height="6.67" fill="${a}"/><rect y="6.67" width="30" height="6.67" fill="${b}"/><rect y="13.33" width="30" height="6.67" fill="${c}"/>`;
  // Trigrama de Corea: tres barras (enteras o partidas) giradas alrededor del centro
  const tri = (cx, cy, rot, pattern) => `<g transform="translate(${cx} ${cy}) rotate(${rot})" fill="#000">${pattern.map((solid, i) => {
    const y = -1.6 + i * 1.2;
    return solid ? `<rect x="-2" y="${y}" width="4" height="0.8"/>` : `<rect x="-2" y="${y}" width="1.75" height="0.8"/><rect x="0.25" y="${y}" width="1.75" height="0.8"/>`;
  }).join('')}</g>`;
  const svg = {
    en: `<rect width="30" height="20" fill="#012169"/>
      <path d="M0,0 30,20 M30,0 0,20" stroke="#fff" stroke-width="4"/>
      <path d="M0,0 30,20 M30,0 0,20" stroke="#C8102E" stroke-width="1.6"/>
      <path d="M15,0V20M0,10H30" stroke="#fff" stroke-width="6"/>
      <path d="M15,0V20M0,10H30" stroke="#C8102E" stroke-width="3.4"/>`,
    fr: vbars('#0055A4', '#fff', '#EF4135'),
    it: vbars('#009246', '#fff', '#CE2B37'),
    de: hbars('#000', '#DD0000', '#FFCE00'),
    ru: hbars('#fff', '#0039A6', '#D52B1E'),
    pt: `<rect width="30" height="20" fill="#009C3B"/><polygon points="15,2.2 27.8,10 15,17.8 2.2,10" fill="#FFDF00"/>
      <circle cx="15" cy="10" r="4.6" fill="#002776"/><path d="M10.6,9.1 Q15,7.6 19.5,11" stroke="#fff" stroke-width="0.8" fill="none"/>`,
    ja: `<rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="6" fill="#BC002D"/>`,
    zh: `<rect width="30" height="20" fill="#EE1C25"/><g fill="#FFDE00">${star(5, 5, 3)}${star(10, 2, 1, 23)}${star(12, 4, 1, 45)}${star(12, 7, 1, 70)}${star(10, 9, 1, 20)}</g>`,
    ko: `<rect width="30" height="20" fill="#fff"/>
      <g transform="rotate(33.7 15 10)"><circle cx="15" cy="10" r="5" fill="#0047A0"/><path d="M10,10 A5,5 0 0 1 20,10Z" fill="#CD2E3A"/>
      <circle cx="12.5" cy="10" r="2.5" fill="#CD2E3A"/><circle cx="17.5" cy="10" r="2.5" fill="#0047A0"/></g>
      ${tri(6, 4.3, -56.3, [1, 1, 1])}${tri(24, 15.7, -56.3, [0, 0, 0])}${tri(24, 4.3, 56.3, [0, 1, 0])}${tri(6, 15.7, 56.3, [1, 0, 1])}`,
    ar: `${hbars('#CE1126', '#fff', '#000')}<g fill="#C09300"><path d="M15,7.6 L16.6,9 L16.2,12.2 L15,12.8 L13.8,12.2 L13.4,9Z"/><rect x="13.6" y="12.6" width="2.8" height="0.6"/></g>`,
  };
  const out = {};
  for (const [id, body] of Object.entries(svg)) out[id] = `<svg class="flag" viewBox="0 0 30 20" aria-hidden="true"><defs><clipPath id="fc-${id}"><rect width="30" height="20" rx="3"/></clipPath></defs><g clip-path="url(#fc-${id})">${body}</g></svg>`;
  return out;
})();
const flagOf = id => FLAGS[id] || '';
