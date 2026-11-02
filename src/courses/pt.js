// Curso de portugués: desde cero hasta el B1 (Celpe-Bras intermedio / CIPLE-DEPLE).
// Se enseña la variante de Brasil y se señalan las diferencias con Portugal.
const COURSE_DEF = {
  id: 'pt',
  chatTopic: 'portugués desde cero hasta el B1, sobre todo de Brasil, señalando las diferencias con Portugal. Escribe el portugués correctamente (ã, õ, ç, acentos) y explica en español, avisando de los falsos amigos',
  minutes: { main: 45, read: 20, series: 30, vocab: 20 },
  readingTitle: 'Leer en portugués',
  readingDetail: 'Una noticia corta en portugués. Al parecerse tanto al español, intenta entenderla sin diccionario y luego busca los falsos amigos.',
  readingLinks: [['Joca (noticias para jóvenes)', 'https://www.jornaljoca.com.br'], ['RTP Ensina', 'https://ensina.rtp.pt']],
  seriesHint: { text: 'Algo en portugués con subtítulos', detail: 'Una serie o película brasileña o portuguesa de tu Jellyfin, con subtítulos en portugués. Fíjate en cómo se pronuncian las vocales nasales (ão, õe).' },
  levels: [
    { id: 'a1', name: 'A1', color: '#84cc16', goal: 'Presentarte, hablar de tu día a día y entender frases sencillas.' },
    { id: 'a2', name: 'A2', color: '#22c55e', goal: 'Contar lo que hiciste, describir el pasado y desenvolverte en viajes.' },
    { id: 'b1', name: 'B1', color: '#14b8a6', goal: 'Dar tu opinión, expresar deseos y entender textos normales.' },
  ],
  syllabus: [
    // A1
    { id: 'p01', level: 'a1', title: 'Olá: saludar y presentarse', focus: 'Saludos, você y tu, y la pronunciación de las nasales.' },
    { id: 'p02', level: 'a1', title: 'Ser y estar', focus: 'Parecidos al español, pero no iguales.' },
    { id: 'p03', level: 'a1', title: 'Verbos en -ar, -er, -ir', focus: 'falar, comer, abrir en presente.' },
    { id: 'p04', level: 'a1', title: 'Artículos y contracciones', focus: 'o, a, os, as · do, na, pelo: preposición + artículo.' },
    { id: 'p05', level: 'a1', title: 'Ter y la negación', focus: 'Tener, la edad y «não».' },
    { id: 'p06', level: 'a1', title: 'Hacer preguntas', focus: 'o que, onde, quando, como, por que, quanto.' },
    { id: 'p07', level: 'a1', title: 'Números, hora y fechas', focus: 'Contar, decir la hora y quedar.' },
    { id: 'p08', level: 'a1', title: 'Ir, fazer, poder, querer', focus: 'Cuatro verbos irregulares imprescindibles.' },
    // A2
    { id: 'p09', level: 'a2', title: 'Pretérito perfeito', focus: 'Contar lo que hiciste: eu falei, eu comi.' },
    { id: 'p10', level: 'a2', title: 'Pretérito imperfeito', focus: 'Describir el pasado y las costumbres.' },
    { id: 'p11', level: 'a2', title: 'El futuro con ir', focus: 'Vou viajar amanhã.' },
    { id: 'p12', level: 'a2', title: 'Pronombres de complemento', focus: 'Te vi, eu o vi, vi ele: Brasil y Portugal.' },
    { id: 'p13', level: 'a2', title: 'Acciones en curso', focus: 'Estou falando (Brasil) · estou a falar (Portugal).' },
    { id: 'p14', level: 'a2', title: 'Comparar', focus: 'mais… que, menos… que, melhor, pior.' },
    { id: 'p15', level: 'a2', title: 'Falsos amigos', focus: 'esquisito, pegar, borracha, exquisito: no son lo que parecen.' },
    { id: 'p16', level: 'a2', title: 'Posesivos y demostrativos', focus: 'meu, seu, dele · este, esse, aquele.' },
    // B1
    { id: 'p17', level: 'b1', title: 'Futuro y condicional', focus: 'falarei, falaria: registro escrito y cortesía.' },
    { id: 'p18', level: 'b1', title: 'Subjuntivo presente', focus: 'Espero que você venha.' },
    { id: 'p19', level: 'b1', title: 'El infinitivo personal', focus: 'Para nós sairmos: algo que el español no tiene.' },
    { id: 'p20', level: 'b1', title: 'El futuro de subjuntivo', focus: 'Quando você chegar… Muy vivo en portugués.' },
    { id: 'p21', level: 'b1', title: 'El imperativo', focus: 'Dar instrucciones y consejos.' },
    { id: 'p22', level: 'b1', title: 'El pluscuamperfecto', focus: 'Eu tinha falado.' },
    { id: 'p23', level: 'b1', title: 'Relativos y conectores', focus: 'que, onde, cujo · porém, embora, portanto.' },
    { id: 'p24', level: 'b1', title: 'Dar tu opinión', focus: 'Na minha opinião… Argumentar y matizar.' },
  ],
};
