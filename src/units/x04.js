// Unidad x04 · Vocabulario: viajes y lugares
UNITS.x04 = {
  theory: [
    {
      h: 'Trip, travel, journey: no son lo mismo',
      html: `<table class="t">
        <tr><th>Palabra</th><th>Uso</th><th>Ejemplo</th></tr>
        <tr><td><b>travel</b></td><td>Verbo, o el viajar en general (incontable)</td><td>I love travel. / I travel a lot.</td></tr>
        <tr><td><b>trip</b></td><td>Un viaje con ida y vuelta (corto o largo)</td><td>a business trip, a day trip</td></tr>
        <tr><td><b>journey</b></td><td>El trayecto de un sitio a otro</td><td>The journey took six hours.</td></tr>
        <tr><td><b>flight</b> / <b>voyage</b></td><td>En avión / largo por mar</td><td>a long-haul flight</td></tr>
      </table>
      <p><b>Ojo:</b> <s>a travel</s> no existe: se dice <b>a trip</b>.</p>`,
    },
    {
      h: 'Transporte y alojamiento',
      html: `<div class="ex"><b>catch / miss</b> the train (coger / perder) · <b>get on / off</b> a bus (subir / bajar) · <b>get in / out of</b> a car<br>
      <b>book</b> a room (reservar) · <b>check in / check out</b> (registrarse / dejar el hotel)<br>
      <b>a single / double room</b> · <b>half board / full board</b> (media pensión / pensión completa)<br>
      <b>a return ticket</b> (ida y vuelta, UK) · <b>a one-way ticket</b> (solo ida)<br>
      <b>luggage</b> (equipaje, incontable) · <b>hand luggage</b> (equipaje de mano)</div>`,
    },
    {
      h: 'Describir un lugar',
      html: `<p>Adjetivos que suben la nota frente a <i>nice</i> o <i>beautiful</i>:</p>
      <div class="ex"><b>breathtaking</b> views (impresionantes) · a <b>picturesque</b> village (pintoresco)<br>
      <b>crowded</b> / <b>packed</b> streets (abarrotadas) · <b>lively</b> nightlife (animada)<br>
      <b>remote</b> (aislado) · <b>off the beaten track</b> (lejos de las rutas turísticas)<br>
      <b>touristy</b> (demasiado turístico, negativo) · <b>unspoilt</b> (sin estropear por el turismo)</div>`,
    },
    {
      h: 'Expresiones útiles',
      html: `<div class="ex"><b>set off</b> (salir de viaje) · <b>get away</b> (escaparse unos días)<br>
      <b>go sightseeing</b> (hacer turismo) · <b>take a day off</b> (cogerse un día libre)<br>
      <b>broaden your horizons</b> (ampliar horizontes) · <b>travel light</b> (viajar ligero)</div>`,
    },
    {
      h: 'Errores típicos de hispanohablantes',
      html: `<ul class="errs">
        <li><s>I lost the train</s> → <b>I missed the train</b>. Lose es perder un objeto.</li>
        <li><s>a travel to Italy</s> → <b>a trip to Italy</b>.</li>
        <li><s>luggages</s> → <b>luggage / pieces of luggage</b>. Incontable.</li>
        <li><s>arrive to Madrid</s> → <b>arrive in Madrid</b> (ciudad, país) / <b>arrive at</b> the airport (lugar concreto).</li>
        <li><s>the camping</s> → <b>the campsite</b>. Camping es la actividad.</li>
      </ul>`,
    },
  ],
  // Formato Cambridge C1 (Reading and Use of English, partes 1–4). Textos y preguntas propios.
  exam: {
    1: { title: "A weekend in Lisbon", text: "Last spring we decided to [1] away for a long weekend. We [2] a cheap flight and a small apartment in the old town. The flight was delayed, but we [3] it to the apartment before dark. The old town is very [4], with narrow streets and colourful houses. On the first day we went [5] and climbed up to the castle, where the views were [6]. In the evening the bars were [7] with people. We travelled [8], with just hand luggage, so we didn't have to wait at the airport." },
    2: { title: "Before you go", text: "Before you set [9] on a long trip, check that your passport is valid. Many countries won't let you in [10] it is valid for at least six months. It is also worth taking out travel insurance, [11] case you get ill. Try to learn a few words of the local language: people really appreciate it, even [12] you make mistakes. When you arrive [13] the airport, don't change money at the first desk you see, because the rates there are usually [14] worse than in the city. And finally, don't forget to look [15] from your phone and enjoy the place. After [16], that's why you went!" },
    3: { title: "Greener holidays", text: "Tourism is one of the world's [17] industries, but its [18] impact is huge. Flights are responsible for a large part of carbon [19]. That is why more and more [20] are choosing trains. Some cities have [21] a tourist tax to reduce [22] in the most popular areas. Many people believe that tourism should be [23], even if that makes holidays [24] more expensive." },
  },
  exercises: [
    { type: 'mcq', q: 'We ___ the last train and had to take a taxi.', opts: ['missed', 'lost', 'failed', 'left'], a: 0, why: 'Miss the train = perder el tren.' },
    { type: 'mcq', q: 'How was your ___ to Japan?', opts: ['trip', 'travel', 'journey of', 'voyage by'], a: 0, why: 'Un viaje concreto con ida y vuelta: trip.' },
    { type: 'mcq', q: 'The ___ from the airport to the hotel took two hours.', opts: ['journey', 'travel', 'trip of', 'excursion'], a: 0, why: 'El trayecto: journey.' },
    { type: 'mcq', q: 'We arrived ___ London at midnight.', opts: ['in', 'to', 'at', 'on'], a: 0, why: 'Arrive in + ciudad.' },
    { type: 'mcq', q: 'You can only take one piece of hand ___ on the plane.', opts: ['luggage', 'luggages', 'baggages', 'suitcases'], a: 0, why: 'Luggage es incontable: one piece of luggage.' },
    { type: 'mcq', q: 'The streets were so ___ that we could hardly move.', opts: ['crowded', 'remote', 'unspoilt', 'picturesque'], a: 0, why: 'Crowded = abarrotado.' },
    { type: 'mcq', q: 'We have to ___ out of the hotel before 11 a.m.', opts: ['check', 'get', 'go', 'book'], a: 0, why: 'Check out = dejar la habitación.' },
    { type: 'gap', q: 'We set ___ at six in the morning to avoid the traffic.', a: ['off', 'out'], why: 'Set off = ponerse en camino.' },
    { type: 'gap', q: 'Hurry up and get ___ the bus, it\'s leaving!', a: ['on'], why: 'Get on a bus / train / plane.' },
    { type: 'gap', q: 'I\'d like a ___ ticket to Bristol, please. I\'m coming back tomorrow. (ida y vuelta)', a: ['return'], why: 'Return ticket = ida y vuelta (UK).' },
    { type: 'find', role: 'V', prompt: 'Toca el verbo principal.', parts: [['S', 'The small village'], ['R', 'where my grandparents live'], ['V', 'has'], ['O', 'breathtaking views of the mountains.']], why: '«where my grandparents live» es una secundaria; el verbo principal es has.' },
    { type: 'order', prompt: 'Ordena la frase.', words: ['We', 'booked', 'a', 'double', 'room', 'with', 'half', 'board'], a: 'We booked a double room with half board', why: 'Book a room = reservar una habitación.' },
    // Cambridge C1 · Reading and Use of English (preguntas 1–30)
    { part: 1, type: 'mcq', opts: ["get", "put", "take", "run"], a: 0, why: "Get away = escaparse unos días." },
    { part: 1, type: 'mcq', opts: ["booked", "ordered", "paid", "bought"], a: 0, why: "Book = reservar (vuelo y alojamiento)." },
    { part: 1, type: 'mcq', opts: ["made", "got", "reached", "arrived"], a: 0, why: "Make it to = conseguir llegar a." },
    { part: 1, type: 'mcq', opts: ["picturesque", "remote", "spacious", "modern"], a: 0, why: "Picturesque = pintoresco." },
    { part: 1, type: 'mcq', opts: ["sightseeing", "visiting", "touring", "viewing"], a: 0, why: "Go sightseeing = hacer turismo." },
    { part: 1, type: 'mcq', opts: ["breathtaking", "breathless", "breathing", "breathy"], a: 0, why: "Breathtaking = impresionante. Breathless = sin aliento (una persona)." },
    { part: 1, type: 'mcq', opts: ["packed", "stuffed", "loaded", "covered"], a: 0, why: "Packed with people = abarrotado." },
    { part: 1, type: 'mcq', opts: ["light", "easy", "thin", "soft"], a: 0, why: "Travel light = viajar con poco equipaje." },
    { part: 2, type: 'gap', a: ["off", "out"], why: "Set off = ponerse en camino." },
    { part: 2, type: 'gap', a: ["unless"], why: "Unless = a menos que." },
    { part: 2, type: 'gap', a: ["in"], why: "In case = por si." },
    { part: 2, type: 'gap', a: ["if"], why: "Even if = aunque, incluso si." },
    { part: 2, type: 'gap', a: ["at"], why: "Arrive at + lugar concreto (aeropuerto, estación)." },
    { part: 2, type: 'gap', a: ["much", "far"], why: "Much / far + comparativo." },
    { part: 2, type: 'gap', a: ["up"], why: "Look up from = levantar la vista de." },
    { part: 2, type: 'gap', a: ["all"], why: "After all = al fin y al cabo." },
    { part: 3, type: 'gap', stem: "LARGE", a: ["largest"], why: "Superlativo: largest." },
    { part: 3, type: 'gap', stem: "ENVIRONMENT", a: ["environmental"], why: "Adjetivo: environmental." },
    { part: 3, type: 'gap', stem: "EMIT", a: ["emissions"], why: "Sustantivo plural: emissions." },
    { part: 3, type: 'gap', stem: "TRAVEL", a: ["travellers", "travelers"], why: "Personas: travellers (UK) / travelers (US)." },
    { part: 3, type: 'gap', stem: "INTRODUCE", a: ["introduced"], why: "Present perfect: have introduced." },
    { part: 3, type: 'gap', stem: "CROWD", a: ["overcrowding"], why: "Sustantivo con prefijo: overcrowding (masificación)." },
    { part: 3, type: 'gap', stem: "SUSTAIN", a: ["sustainable"], why: "Adjetivo: sustainable (sostenible)." },
    { part: 3, type: 'gap', stem: "SLIGHT", a: ["slightly"], why: "Adverbio con comparativo: slightly more expensive." },
    { part: 4, type: 'gap', s1: "We didn't catch the bus.", key: "MISSED", s2: "We ___.", a: ["missed the bus"], why: "Miss the bus = perder el autobús." },
    { part: 4, type: 'gap', s1: "The flight to Rome took three hours.", key: "JOURNEY", s2: "The ___ by plane took three hours.", a: ["journey to rome"], why: "Journey = trayecto." },
    { part: 4, type: 'gap', s1: "I left the hotel at noon.", key: "CHECKED", s2: "I ___ at noon.", a: ["checked out of the hotel"], why: "Check out of a hotel." },
    { part: 4, type: 'gap', s1: "We started our journey at dawn.", key: "SET", s2: "We ___ dawn.", a: ["set off at", "set out at"], why: "Set off = salir de viaje." },
    { part: 4, type: 'gap', s1: "There were too many people on the beach.", key: "CROWDED", s2: "The beach ___.", a: ["was too crowded", "was overcrowded", "was very crowded"], why: "Crowded = abarrotado." },
    { part: 4, type: 'gap', s1: "We'd like to reserve a room for two nights.", key: "BOOK", s2: "We'd ___ for two nights.", a: ["like to book a room"], why: "Book a room = reservar una habitación." },
  ],

  reading: {
    title: 'Off the beaten track',
    level: 'B1',
    sentences: [
      { parts: [['X', 'Every summer,'], ['S', 'millions of tourists'], ['V', 'visit'], ['O', 'the same famous cities.']],
        es: 'Cada verano, millones de turistas visitan las mismas ciudades famosas.',
        note: 'Esqueleto sencillo: tourists visit cities.',
        vocab: [['tourist', 'turista'], ['famous', 'famoso']] },
      { parts: [['S', 'The streets'], ['V', 'become'], ['O', 'so crowded'], ['R', 'that local people avoid the centre.']],
        es: 'Las calles se llenan tanto que la gente del lugar evita el centro.',
        note: 'So + adjetivo + that = tan … que.',
        vocab: [['crowded', 'abarrotado'], ['local people', 'la gente del lugar'], ['avoid', 'evitar']] },
      { parts: [['C', 'But'], ['S', 'a growing number of travellers'], ['V', 'prefer'], ['O', 'places off the beaten track.']],
        es: 'Pero cada vez más viajeros prefieren lugares lejos de las rutas turísticas.',
        note: 'A growing number of = un número creciente de.',
        vocab: [['traveller', 'viajero'], ['off the beaten track', 'lejos de las rutas turísticas']] },
      { parts: [['S', 'They'], ['V', 'stay'], ['X', 'in small guesthouses'], ['C', 'and'], ['V', 'eat'], ['X', 'where the locals eat.']],
        es: 'Se alojan en pensiones pequeñas y comen donde come la gente del lugar.',
        note: 'Dos verbos con el mismo sujeto.',
        vocab: [['guesthouse', 'pensión, casa de huéspedes'], ['locals', 'gente del lugar']] },
      { parts: [['S', 'The journey'], ['V', 'is'], ['O', 'often longer,'], ['C', 'but'], ['S', 'the reward'], ['V', 'is'], ['O', 'an unspoilt landscape.']],
        es: 'El trayecto suele ser más largo, pero la recompensa es un paisaje sin estropear.',
        note: 'Journey = el trayecto. Unspoilt = que el turismo no ha estropeado.',
        vocab: [['journey', 'trayecto'], ['reward', 'recompensa'], ['unspoilt', 'sin estropear']] },
      { parts: [['S', 'Some remote villages'], ['V', 'have started'], ['O', 'to depend on this new kind of tourism.']],
        es: 'Algunos pueblos aislados han empezado a depender de este nuevo tipo de turismo.',
        note: 'Depend on = depender de.',
        vocab: [['remote', 'aislado'], ['depend on', 'depender de']] },
      { parts: [['C', 'However,'], ['S', 'experts'], ['V', 'warn'], ['R', 'that these places could become touristy too.']],
        es: 'Sin embargo, los expertos avisan de que estos lugares también podrían volverse demasiado turísticos.',
        note: 'Touristy tiene sentido negativo.',
        vocab: [['warn', 'avisar, advertir'], ['touristy', 'demasiado turístico']] },
    ],
    questions: [
      { q: 'Why do local people avoid the centre of famous cities?', opts: ['Because it is too crowded.', 'Because it is too expensive.', 'Because it is dangerous.', 'Because there are no shops.'], a: 0 },
      { q: 'Where do these new travellers stay?', opts: ['In small guesthouses.', 'In big hotels.', 'In campsites.', 'With friends.'], a: 0 },
      { q: 'What are experts worried about?', opts: ['That remote places could become touristy.', 'That villages will lose money.', 'That journeys will be longer.', 'That tourists will stop travelling.'], a: 0 },
    ],
  },
};
