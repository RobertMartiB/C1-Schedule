// Writing con el formato de Cambridge: enunciado como en el examen, cuadro para escribir con contador y cronómetro,
// corrección con la IA según los cuatro criterios del examen (Talkiro Pro o clave propia) y una respuesta modelo.
// Enunciados y modelos originales; solo imitan la estructura del examen.
const WRITING_TASKS = {
  'w-b1-1': { level: 'B1', type: 'Email', words: [120, 150], minutes: 30, es: 'Un email a un amigo contándole tu fin de semana',
    task: `<p>You have received this email from your English-speaking friend, Sam.</p>
      <blockquote>I heard you went away last weekend! Where did you go? What was the best part? Would you recommend it to me?</blockquote>
      <p>Write your <b>email</b> to Sam, answering all the questions.</p>`,
    model: `Hi Sam,

Thanks for your email! Yes, I went to the mountains near Granada with my cousins last weekend, and it was amazing.

We stayed in a small wooden cabin next to a river. On Saturday we walked for about five hours to a lake at the top of a valley. It was hard work, but the views were incredible and the water was so clear that you could see the fish.

The best part, though, was the evening. There was no internet, so we cooked dinner together, played cards and looked at the stars. I had never seen so many in my life!

I would definitely recommend it, especially if you like nature. Just remember to take warm clothes, because it gets really cold at night.

Write soon,
Robert` },
  'w-b1-2': { level: 'B1', type: 'Story', words: [100, 140], minutes: 30, es: 'Una historia que empiece por «I had never felt so nervous»',
    task: `<p>Your English teacher has asked you to write a <b>story</b>.</p>
      <p>Your story must begin with this sentence:</p>
      <blockquote>I had never felt so nervous.</blockquote>
      <p>Write your <b>story</b>.</p>`,
    model: `I had never felt so nervous. In ten minutes I had to sing in front of the whole school, and my hands were shaking.

I had practised the song every day for a month, but now I couldn't remember the first line. While the other students were performing, I kept reading the lyrics on my phone.

Suddenly, my best friend Laura sat down next to me. "Just look at me while you sing," she said, smiling.

When my name was called, I walked onto the stage and found Laura in the third row. The music started and, to my surprise, the words came back immediately.

At the end, everybody stood up and clapped. I was still nervous, but now I was also incredibly happy.` },
  'w-b1-3': { level: 'B1', type: 'Article', words: [120, 150], minutes: 30, es: 'Un artículo: «My favourite place in my town»',
    task: `<p>You see this announcement on an English-language website for teenagers and young adults.</p>
      <blockquote><b>Articles wanted: My favourite place in my town</b><br>What is your favourite place? Why do you like it? What can visitors do there?<br>The best articles will appear on our website.</blockquote>
      <p>Write your <b>article</b>.</p>`,
    model: `A Secret Garden in the City

If you ever visit my town, don't just stay in the busy main square. Walk five minutes up the hill and you will find my favourite place: an old garden behind the public library.

Most tourists don't know it exists, which is exactly why I love it. It is quiet, green and full of orange trees, and in spring the smell is fantastic. I often go there to read or simply to escape from the noise.

Visitors can sit by the small fountain, have a picnic on the grass or join one of the free poetry readings that the library organises on Friday evenings. There is also a tiny café that serves the best hot chocolate in town.

So next time you need a break, follow the hill. You won't regret it!` },

  'w-b2-1': { level: 'B2', type: 'Essay', words: [140, 190], minutes: 40, es: 'Essay: ¿deberían ser gratis los museos?',
    task: `<p>In your English class you have been talking about culture. Now your teacher has asked you to write an <b>essay</b>.</p>
      <blockquote><b>Should museums be free for everyone?</b><br>Notes. Write about:<br>1. education<br>2. the cost of running a museum<br>3. ……… (your own idea)</blockquote>
      <p>Write your <b>essay</b> using all the notes and giving reasons for your point of view.</p>`,
    model: `Museums keep our history and art alive, but someone has to pay for them. Should entry be free for everyone, or should visitors contribute?

The strongest argument for free museums is education. When there is no ticket, schools can organise visits more easily and families on low incomes are not excluded. A child who discovers a passion for science in a museum may become the scientist of the future.

On the other hand, museums are expensive to run. Buildings need maintenance, works of art must be protected and staff have to be paid. If entry is free, this money has to come from taxes or private sponsors, which is not always guaranteed.

Another point to consider is tourism. In many cities, most visitors are tourists who could easily afford a ticket, and this income could be used to improve the museum.

In my opinion, the best solution is a mixed system: free entry for students, children and local residents, and a reasonable price for tourists. This way, museums remain open to everyone without losing the money they need.` },
  'w-b2-2': { level: 'B2', type: 'Review', words: [140, 190], minutes: 40, es: 'Review de una serie que estés viendo',
    task: `<p>You see this announcement on an English-language entertainment website.</p>
      <blockquote><b>Reviews wanted: a series worth watching</b><br>Tell us about a TV series you have watched recently. What is it about? What did you like or dislike about it? Who would you recommend it to?</blockquote>
      <p>Write your <b>review</b>.</p>`,
    model: `If you are looking for a series that makes you laugh and think at the same time, try The Office Next Door.

It follows the employees of a small paper company in a quiet English town. Nothing dramatic happens: people argue about the coffee machine, organise birthday parties and try to impress their boss. Yet the episodes are surprisingly addictive.

What I liked most is the writing. The jokes are clever rather than loud, and the characters slowly become real people. By the end of the first season, I genuinely cared about the shy receptionist and her terrible luck in love. The actors are also excellent, especially the manager, who is embarrassing and kind at the same time.

My only criticism is that some episodes in the second season feel repetitive, as if the writers had run out of ideas.

Overall, I would recommend it to anyone who enjoys gentle comedy, and particularly to English learners, because the characters speak clearly and the situations are easy to follow.` },
  'w-b2-3': { level: 'B2', type: 'Email (formal)', words: [140, 190], minutes: 40, es: 'Email formal reclamando un producto defectuoso',
    task: `<p>Two weeks ago you bought a pair of wireless headphones from an online shop. They have stopped working, and the shop has not answered your first message.</p>
      <p>Write an <b>email</b> to the customer service manager. Explain what happened, say how you feel about the service and what you would like the company to do.</p>`,
    model: `Dear Sir or Madam,

I am writing to complain about a pair of wireless headphones (order number 48213) that I bought from your website on 15 October.

Although they worked perfectly at first, the left earphone stopped working after only ten days, and the battery now lasts less than an hour. I have followed all the instructions in the manual, but the problem has not been solved.

I contacted your customer service team by email on 25 October, but I have not received any reply. I must say I am extremely disappointed, as your website promises an answer within 48 hours.

I would therefore be grateful if you could either replace the headphones or give me a full refund. I would also appreciate it if you could send me a prepaid label so that I can return the faulty product without any extra cost.

I look forward to hearing from you as soon as possible.

Yours faithfully,
Robert Martí` },
  'w-b2-4': { level: 'B2', type: 'Report', words: [140, 190], minutes: 40, es: 'Report: instalaciones deportivas de tu barrio',
    task: `<p>The local council wants to know what young people think about the sports facilities in your area. You have been asked to write a <b>report</b>.</p>
      <p>Describe the facilities that exist, explain what problems there are, and suggest how the council could improve them.</p>
      <p>Write your <b>report</b>.</p>`,
    model: `Report on sports facilities in Las Torres

Introduction
The aim of this report is to describe the sports facilities in our neighbourhood, identify the main problems and suggest some improvements.

Current facilities
At present, there is a football pitch, an outdoor basketball court and a small gym inside the community centre. The football pitch is very popular, especially at weekends.

Main problems
Firstly, the basketball court has no lights, so it cannot be used after six o'clock in winter. Secondly, the gym is too small and its equipment is old. Finally, many young people said that there are no activities for those who are not interested in football.

Recommendations
I would recommend installing lights on the basketball court, which would be a cheap and quick improvement. It would also be a good idea to replace the gym equipment. In addition, the council could offer free classes in other sports, such as climbing or dance, to attract more teenagers.

Conclusion
With a few changes, our facilities could be used by many more people.` },

  'w-c1-1': { level: 'C1', type: 'Essay', words: [220, 260], minutes: 45, es: 'Essay: ventajas e inconvenientes del teletrabajo',
    task: `<p>Your class has attended a panel discussion on the future of work. You have made the notes below.</p>
      <blockquote><b>Which aspect of working from home has the greatest impact?</b><br>• productivity<br>• relationships with colleagues<br>• work–life balance<br><br>Some opinions expressed in the discussion:<br>"People actually work harder when nobody is watching them."<br>"You lose the conversations that create new ideas."<br>"The office never closes when it's in your living room."</blockquote>
      <p>Write an <b>essay</b> discussing <b>two</b> of the aspects in your notes. You should <b>explain which aspect has the greatest impact</b>, giving reasons in support of your answer. You may make use of the opinions expressed in the discussion, but you should use your own words as far as possible.</p>`,
    model: `Working from home, once a privilege of a few freelancers, has become a normal arrangement for millions of employees. Its effects are wide-ranging, but two of them deserve particular attention: productivity and work–life balance.

As far as productivity is concerned, the evidence is more positive than many managers expected. Without long commutes or constant interruptions, employees often complete demanding tasks faster and with fewer errors. Admittedly, not everyone thrives in isolation; some people need the structure of an office to stay focused. Nevertheless, for most knowledge workers, the ability to organise their own day seems to outweigh the risk of distraction.

The impact on work–life balance, however, is more ambiguous. On the one hand, remote workers gain hours that used to be lost in traffic, which they can spend with their families or on exercise. On the other hand, when the office is in the living room, the boundary between work and private life tends to disappear. Many people end up answering emails late at night simply because their laptop is always within reach, and this can gradually lead to exhaustion.

On balance, I believe that work–life balance has the greater impact, precisely because it can go either way. Productivity gains are welcome, but they are of little value if employees burn out. Companies that encourage clear working hours and the right to disconnect are therefore likely to benefit the most from remote work.` },
  'w-c1-2': { level: 'C1', type: 'Proposal', words: [220, 260], minutes: 45, es: 'Proposal: mejorar la biblioteca de tu ciudad',
    task: `<p>Your town council has some money to spend on improving the public library and has invited residents to send proposals.</p>
      <p>Write a <b>proposal</b> explaining why the library is important to local people, describing what currently prevents more people from using it, and recommending how the money should be spent.</p>`,
    model: `Proposal for the improvement of the Central Library

Purpose
This proposal sets out why the Central Library matters to our community and how the funds made available by the council could be used to attract a wider range of users.

The library's value
For many residents, the library is far more than a place to borrow books. Students without a quiet space at home rely on it during exam periods, older people attend its reading groups, and job seekers use its computers to apply for work. In short, it is one of the few places in town that is open to everyone, free of charge.

Current obstacles
Despite this, visitor numbers have fallen steadily. The most frequent complaint is the opening hours: the library closes at seven, just when many people finish work. Furthermore, the computers are outdated and the study area is too small, which means that students are often turned away at busy times.

Recommendations
Firstly, I would strongly recommend extending the opening hours until ten on weekdays, at least during exam seasons. Secondly, part of the budget should go towards replacing the computers and installing reliable Wi-Fi. Finally, the unused storage room on the ground floor could be converted into a second study area at a relatively low cost.

Conclusion
If these measures were adopted, the library would be able to serve a far larger and more varied public, and the investment would benefit the whole community for years to come.` },
  'w-c1-3': { level: 'C1', type: 'Review', words: [220, 260], minutes: 45, es: 'Review de un libro o película para una revista',
    task: `<p>An international magazine has asked its readers to send in reviews of a book or film which deals with an important social issue.</p>
      <p>Write a <b>review</b> describing the book or film, explaining how successfully it deals with the issue, and saying whether you would recommend it to other readers.</p>`,
    model: `A quiet film that refuses to look away

Few films about homelessness manage to avoid either sentimentality or preaching. "Under the Bridge", a modest British drama set in a single winter, succeeds on both counts, and is all the more powerful for it.

The story follows Daniel, a former factory worker who loses his job and, within a few months, his flat. Rather than piling up dramatic events, the director shows the small humiliations of everyday life: being ignored by people in the street, having nowhere to charge a phone, sleeping with one eye open. These details, which most of us never stop to consider, make the issue painfully real.

What impressed me most was the restraint of the lead actor. He rarely raises his voice, yet his tired face conveys more than any speech could. The film also avoids turning the people around him into villains; even the bureaucrats who fail him are shown as overworked rather than cruel, which makes the criticism of the system more convincing.

If the film has a weakness, it is the ending, which feels slightly rushed after such a patient build-up.

Nevertheless, I would wholeheartedly recommend it, particularly to anyone who has ever walked past a homeless person without a second thought. It is not an easy film to watch, but it is one that stays with you long after the credits have rolled.` },
  'w-c1-4': { level: 'C1', type: 'Report', words: [220, 260], minutes: 45, es: 'Report sobre el uso del móvil en clase',
    task: `<p>The director of your language school is considering banning mobile phones in class. You have been asked to write a <b>report</b> for the director.</p>
      <p>Your report should explain how students currently use their phones in class, assess the advantages and disadvantages of a ban, and recommend what the school should do.</p>`,
    model: `Report on the use of mobile phones in class

Introduction
The purpose of this report is to describe how students currently use their mobile phones during lessons, to evaluate the possible effects of a ban and to make a recommendation. The information is based on a short survey answered by sixty students.

Current use
Most students admit that they check messages or social media at least once per lesson. However, a large majority also use their phones for learning purposes, mainly online dictionaries, pronunciation apps and taking photos of the board.

Advantages of a ban
Teachers point out that notifications are a constant source of distraction, and that some students find it hard to concentrate for a whole lesson. A ban would almost certainly improve attention and encourage students to speak to each other rather than look at a screen.

Disadvantages of a ban
On the other hand, a complete ban would remove useful tools. Many students, especially at lower levels, depend on their phones to look up vocabulary quickly. Moreover, several adult students need to be reachable for family or work reasons.

Recommendation
Rather than an outright ban, I would recommend a "phones face down" rule: devices stay on the desk, silenced, and may only be used when the teacher allows it for a specific activity. This compromise would reduce distractions while keeping the educational benefits, and it would be easier to enforce than a total prohibition.` },

  'w-ex-1': { level: 'Examen', type: 'Essay (Part 1)', words: [220, 260], minutes: 45, es: 'Essay de examen cronometrado',
    task: `<p>Your class has listened to a radio discussion about how cities can reduce traffic. You have made the notes below.</p>
      <blockquote><b>Which measure would be most effective in reducing traffic in cities?</b><br>• charging drivers to enter the city centre<br>• improving public transport<br>• encouraging people to cycle<br><br>Some opinions expressed in the discussion:<br>"If driving costs money, people will think twice."<br>"Nobody leaves their car at home for a slow, dirty bus."<br>"Cycling is fine, until it rains."</blockquote>
      <p>Write an <b>essay</b> discussing <b>two</b> of the measures in your notes. You should <b>explain which measure you think would be more effective</b>, giving reasons in support of your answer.</p>`,
    model: `Traffic congestion is one of the most visible problems of modern cities, causing pollution, noise and countless wasted hours. Among the measures that have been proposed, charging drivers to enter the centre and improving public transport are perhaps the most widely debated.

A congestion charge has the obvious advantage of producing immediate results. When driving into the centre becomes expensive, many people reconsider whether a particular journey is really necessary, and cities that have introduced such fees have seen a noticeable drop in traffic. Nevertheless, the measure is often criticised as unfair, since it affects people on low incomes far more than wealthy drivers, who can simply afford to pay.

Improving public transport, by contrast, tackles the root of the problem. People generally drive not because they enjoy traffic jams, but because the alternatives are slow, unreliable or uncomfortable. Frequent, clean and affordable buses and trains would give them a genuine reason to leave the car at home. The main drawback is that such improvements require considerable investment and take years to complete.

In my view, improving public transport would ultimately be the more effective measure. A charge may reduce traffic in the short term, but without good alternatives it merely punishes drivers who have no other option. Ideally, of course, the two measures could be combined, with the revenue from the charge being used to fund better public transport, so that each policy reinforces the other.` },
  'w-ex-2': { level: 'Examen', type: 'Part 2 (review)', words: [220, 260], minutes: 45, es: 'Part 2 de examen: una review',
    task: `<p>A travel website has asked readers to review a museum, gallery or exhibition they have visited. The review should describe the place, comment on how well it engages visitors of different ages, and say whether it is worth the price of the ticket.</p>
      <p>Write your <b>review</b>.</p>`,
    model: `The Science Hangar: learning with your hands

Tucked away in a former aircraft hangar on the edge of the city, the Science Hangar is not the kind of museum where you tiptoe past glass cases in silence. Here, almost every exhibit is meant to be touched, pushed or switched on.

The space is divided into five zones, from electricity to the human body. The highlight for me was the "storm room", where visitors stand inside a cage while artificial lightning strikes just a few metres away. It is spectacular, but each demonstration is followed by a clear explanation of what has just happened, so the fun never replaces the science.

What impressed me most was how well the museum caters for different ages. Young children were clearly delighted by the giant water tables and building blocks, while teenagers queued for the robotics workshop. Even the adults in our group, myself included, lost track of time in the section on optical illusions. My only reservation is that the information panels are rather long; some visitors, especially younger ones, simply ignore them.

At fifteen euros for adults, the ticket is not cheap, but considering that a visit can easily fill an entire day, I would say it offers good value for money. Families should look out for the reduced weekend pass.

All in all, the Science Hangar is an ideal destination for anyone who believes that the best way to understand the world is to experiment with it.` },
};

const CRITERIA = [['Content', 'Contenido'], ['Communicative Achievement', 'Logro comunicativo'], ['Organisation', 'Organización'], ['Language', 'Lenguaje']];
const wordCount = t => (t.trim().match(/[\p{L}\p{N}'’-]+/gu) || []).length;

function renderWriting(main, id) {
  const w = WRITING_TASKS[id];
  if (!w) { main.innerHTML = '<p class="empty">Ese writing no existe.</p>'; return; }
  const saved = store.get().writing?.[id] || {};
  main.innerHTML = `
    <a class="back" href="#hoy">← Hoy</a>
    <header class="unit-head"><span class="phase">Writing · ${esc(w.level)} · ${esc(w.type)}</span><h1>${esc(w.es)}</h1>
      <p class="muted">${w.words[0]}–${w.words[1]} palabras · ${w.minutes} minutos, como en el examen.</p></header>
    <div class="wtask">${w.task}<p class="muted small">Write your answer in <b>${w.words[0]}–${w.words[1]}</b> words in an appropriate style.</p></div>
    <div class="wbar"><span id="wcount"></span><button id="wtimer">${icon('timer')}Cronómetro ${w.minutes}:00</button></div>
    <textarea id="wtext" rows="14" placeholder="Escribe aquí tu respuesta en inglés…" spellcheck="false">${esc(saved.text || '')}</textarea>
    <div class="row"><button class="primary" id="wcheck">${icon('sparkle')}Corregir con la IA</button><button id="wmodel">${icon('eye')}Ver respuesta modelo</button></div>
    <div id="wfeedback">${saved.feedback ? feedbackHtml(saved.feedback) : ''}</div>
    <div id="wmodelbox" hidden><h2>Respuesta modelo</h2><div class="wmodel">${esc(w.model).replace(/\n/g, '<br>')}</div>
      <p class="muted small">Fíjate en cómo organiza los párrafos y en los conectores. No hace falta que la tuya sea igual.</p></div>`;
  const txt = $('#wtext');
  const count = () => {
    const n = wordCount(txt.value), [a, b] = w.words;
    $('#wcount').innerHTML = `<b class="${n < a || n > b ? 'off' : 'ok'}">${n}</b> / ${a}–${b} palabras`;
  };
  count();
  let saveT;
  txt.oninput = () => { count(); clearTimeout(saveT); saveT = setTimeout(() => store.set(s => { (s.writing ||= {})[id] = { ...(s.writing[id] || {}), text: txt.value }; }), 400); };
  let timer = null;
  $('#wtimer').onclick = e => {
    if (timer) { clearInterval(timer); timer = null; e.currentTarget.innerHTML = `${icon('timer')}Cronómetro ${w.minutes}:00`; return; }
    const end = Date.now() + w.minutes * 60e3, btn = e.currentTarget;
    const tick = () => {
      const left = Math.max(0, end - Date.now()), m = Math.floor(left / 60e3), s = Math.floor(left / 1000) % 60;
      if (!document.body.contains(btn)) return clearInterval(timer);
      btn.innerHTML = `${icon('timer')}${m}:${String(s).padStart(2, '0')}`;
      if (!left) { clearInterval(timer); timer = null; toast('¡Tiempo! En el examen ya tendrías que entregar.'); }
    };
    tick(); timer = setInterval(tick, 1000);
  };
  $('#wmodel').onclick = () => { $('#wmodelbox').hidden = !$('#wmodelbox').hidden; };
  $('#wcheck').onclick = async e => {
    const text = txt.value.trim();
    if (wordCount(text) < 40) { toast('Escribe al menos 40 palabras para poder corregirlo.'); return; }
    if (!Chat.canAsk()) { Pro.dialog('ai'); return; }
    const btn = e.currentTarget; btn.disabled = true;
    $('#wfeedback').innerHTML = '<p class="muted">Corrigiendo como un examinador de Cambridge…</p>';
    try {
      const out = await Chat.quick(
        `Eres un examinador experto del Cambridge ${w.level === 'B1' ? 'B1 Preliminary' : w.level === 'B2' ? 'B2 First' : 'C1 Advanced'}. Corrige el writing de un alumno hispanohablante con los cuatro criterios oficiales (Content, Communicative Achievement, Organisation, Language), cada uno de 0 a 5.
Responde en español, con este formato exacto:
PUNTOS: C=<n> CA=<n> O=<n> L=<n>
**Lo que está bien:** 2 o 3 puntos concretos.
**Lo que hay que mejorar:** 3 o 4 puntos concretos, citando frases del alumno.
**Errores:** lista de «frase original → corrección» (máximo 8).
**Para subir de nota:** un consejo práctico.
Sé exigente pero amable. No reescribas el texto entero.`,
        `Tarea (${w.type}, ${w.words[0]}–${w.words[1]} palabras):\n${w.task.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()}\n\nTexto del alumno (${wordCount(text)} palabras):\n${text}`, 6000);
      store.set(s => { (s.writing ||= {})[id] = { ...(s.writing[id] || {}), text, feedback: out, at: today() }; });
      $('#wfeedback').innerHTML = feedbackHtml(out);
    } catch (err) {
      $('#wfeedback').innerHTML = `<p class="muted">${esc(err.error?.error?.message || err.message || 'No se ha podido corregir ahora.')}</p>`;
    } finally { btn.disabled = false; }
  };
}

function feedbackHtml(out) {
  const m = out.match(/PUNTOS:\s*C\s*=\s*(\d)\D+CA\s*=\s*(\d)\D+O\s*=\s*(\d)\D+L\s*=\s*(\d)/i);
  const rest = out.replace(/^.*PUNTOS:.*$/im, '').trim();
  const scores = m ? m.slice(1).map(Number) : null;
  const fmt = t => esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
  return `<section class="wfb"><h2>Corrección</h2>
    ${scores ? `<div class="wscores">${CRITERIA.map(([en, es], i) => `<div><b>${scores[i]}<small>/5</small></b><span>${es}</span></div>`).join('')}<div class="total"><b>${scores.reduce((a, b) => a + b, 0)}<small>/20</small></b><span>Total</span></div></div>` : ''}
    <div class="wtext">${fmt(rest)}</div></section>`;
}
