let currentLang = "es";

const i18n = {
  es: {
    brandTitle: "Proyecto Inglés • Simple Past Tense",
    presentBtn: "Modo Exposición",
    heroTag: "🎀 Proyecto Final de Inglés • Guía Interactiva",
    heroDesc: "¡Aprende de forma súper fácil y divertida a hablar de acciones que empezaron y terminaron en el pasado! Domina verbos regulares (<strong>-ed</strong>), irregulares, pronunciación y expresiones de tiempo.",
    tabGrammar: "📘 Gramática & Reglas",
    tabPron: "🔊 Pronunciación -ed",
    tabReading: "📖 Reading: Daniel",
    tabMistakes: "✏️ Corrige Errores (10)",
    tabVerbs: "🃏 Verbos Irregulares",
    sec1Title: "1. Estructuras del Simple Past Tense",
    sec1Sub: "Usamos el Simple Past para acciones que ocurrieron y terminaron en un momento específico del pasado.",
    affTitle: "Afirmativo (+)",
    negTitle: "Negativo (-)",
    negNote: "¡Ojo! Al usar <strong>didn't</strong>, el verbo vuelve a su forma base (sin -ed).",
    intTitle: "Interrogativo (?)",
    intNote: "Al preguntar con <strong>Did</strong>, también olvidamos el sufijo del pasado.",
    timeLabel: "⏰ Time Expressions (Expresiones de Tiempo):",
    sec2Title: "2. Reglas de Escritura (Spelling Rules - Regular Verbs)",
    sec2Sub: "Cómo agregar correctamente la terminación <strong>-ed</strong> a los verbos regulares.",
    sp1: "La mayoría de verbos solo añaden <strong>-ed</strong>.",
    sp2: "Si el verbo ya termina en <strong>-e</strong>, solo agrega <strong>-d</strong>.",
    sp3: "Cambia la <strong>y</strong> por <strong>i</strong> y agrega <strong>-ed</strong>.",
    sp4: "Si hay vocal antes de la <strong>y</strong>, NO se cambia.",
    sp5: "Si termina en 1 vocal + 1 consonante acentuada (excepto w, y), duplica la última consonante + <strong>-ed</strong>.",
    pronTitle: 'Pronunciación de la terminación "-ed"',
    pronSub: 'Aunque todos terminan en "-ed" al escribirse, ¡tienen 3 sonidos diferentes! Haz clic en los botones para escucharlos.',
    pronTRule: "Cuando el verbo termina en sonido sordo: <strong>p, k, f, s, ch, sh, x, th</strong>",
    pronDRule: "Cuando el verbo termina en sonido sonoro: <strong>b, g, j, m, n, l, r, th, w, v, z</strong>",
    pronIdRule: "Cuando la última consonante del verbo es: <strong>t</strong> o <strong>d</strong>",
    readTitle: "Reading Comprehension: Daniel's Web Project 💻",
    readSub: "Lee la historia de Daniel sobre diseño web y programación, y responde las 7 preguntas interactivas.",
    listenStory: "Escuchar lectura en inglés",
    readQTitle: "📝 Preguntas de Comprensión (Haz clic para ver las respuestas):",
    misTitle: "Let's Exercise! Corrige los Errores (10 Oraciones)",
    misSub: "Elige la forma correcta en Simple Past para corregir cada oración de la práctica.",
    wrongLabel: "❌ ORACIÓN CON ERROR:",
    btnNextQ: "Siguiente Oración ➡️",
    btnRestart: "🔄 Volver a Intentar",
    verbsTitle: "Tarjetas Mágicas de Verbos Irregulares",
    verbsSub: "Haz clic en cualquier tarjeta para girarla y ver su forma en Simple Past, Past Participle y ejemplo.",
    footerAuthorLabel: "Proyecto Final de Inglés realizado por:",
    footerSub: "Simple Past Tense • HTML5 + CSS3 + JavaScript • Visual Studio / VS Code"
  },
  en: {
    brandTitle: "English Project • Simple Past Tense",
    presentBtn: "Presentation Mode",
    heroTag: "🎀 Final English Project • Interactive Guide",
    heroDesc: "Learn in a super easy and fun way how to talk about actions that started and finished in the past! Master regular verbs (<strong>-ed</strong>), irregular verbs, pronunciation, and time expressions.",
    tabGrammar: "📘 Grammar & Rules",
    tabPron: "🔊 -ed Pronunciation",
    tabReading: "📖 Reading: Daniel",
    tabMistakes: "✏️ Fix Mistakes (10)",
    tabVerbs: "🃏 Irregular Verbs",
    sec1Title: "1. Simple Past Tense Structures",
    sec1Sub: "We use the Simple Past for actions that happened and finished at a specific time in the past.",
    affTitle: "Affirmative (+)",
    negTitle: "Negative (-)",
    negNote: "Watch out! When using <strong>didn't</strong>, the verb goes back to its base form (no -ed).",
    intTitle: "Interrogative (?)",
    intNote: "When asking with <strong>Did</strong>, we also drop the past suffix.",
    timeLabel: "⏰ Time Expressions:",
    sec2Title: "2. Spelling Rules (Regular Verbs)",
    sec2Sub: "How to properly add the <strong>-ed</strong> ending to regular verbs.",
    sp1: "Most regular verbs just add <strong>-ed</strong>.",
    sp2: "If the verb already ends in <strong>-e</strong>, just add <strong>-d</strong>.",
    sp3: "Change <strong>y</strong> to <strong>i</strong> and add <strong>-ed</strong>.",
    sp4: "If there is a vowel before <strong>y</strong>, do NOT change it.",
    sp5: "If it ends in 1 stressed vowel + 1 consonant (except w, y), double the final consonant + <strong>-ed</strong>.",
    pronTitle: 'Pronunciation of the "-ed" Ending',
    pronSub: 'Even though they all end in "-ed" in writing, they have 3 different sounds! Click the buttons to listen.',
    pronTRule: "When the verb ends in a voiceless sound: <strong>p, k, f, s, ch, sh, x, th</strong>",
    pronDRule: "When the verb ends in a voiced sound: <strong>b, g, j, m, n, l, r, th, w, v, z</strong>",
    pronIdRule: "When the last consonant of the verb is: <strong>t</strong> or <strong>d</strong>",
    readTitle: "Reading Comprehension: Daniel's Web Project 💻",
    readSub: "Read Daniel's story about web design and programming, and check the 7 comprehension questions.",
    listenStory: "Listen to the story in English",
    readQTitle: "📝 Comprehension Questions (Click to reveal the answers):",
    misTitle: "Let's Exercise! Correct the Mistakes (10 Sentences)",
    misSub: "Choose the correct Simple Past sentence to fix each mistake from the lesson.",
    wrongLabel: "❌ INCORRECT SENTENCE:",
    btnNextQ: "Next Sentence ➡️",
    btnRestart: "🔄 Try Again",
    verbsTitle: "Magic Irregular Verbs Flashcards",
    verbsSub: "Click any card to flip it and see its Simple Past, Past Participle, and example sentence.",
    footerAuthorLabel: "Final English Project created by:",
    footerSub: "Simple Past Tense • HTML5 + CSS3 + JavaScript • Visual Studio / VS Code"
  }
};

const readingData = [
  {
    q: "1. What did Daniel study?",
    a: "He studied HTML, CSS, and JavaScript at a technical institute."
  },
  {
    q: "2. What did he create for a small company?",
    a: "He created his first professional website for a small company."
  },
  {
    q: "3. What did he add to the website?",
    a: "He added images (and developed the homepage and organized the content)."
  },
  {
    q: "4. Who did Daniel work with?",
    a: "He worked with a team of designers and programmers."
  },
  {
    q: "5. What problems did the team solve?",
    a: "They solved technical problems together."
  },
  {
    q: "6. How did Daniel feel at the end of the project?",
    a: "He felt very happy because he learned many new skills."
  },
  {
    q: "7. What skills did he learn?",
    a: "He learned many new web design and programming skills."
  }
];

const mistakesQuiz = [
  {
    wrong: "I don’t liked your cake.",
    qEs: "1. Selecciona la corrección correcta en pasado negativo:",
    qEn: "1. Select the correct negative past form:",
    options: [
      "I didn’t like your cake.",
      "I didn’t liked your cake.",
      "I don’t like your cake yesterday."
    ],
    correct: 0,
    expEs: '¡Exacto! En negativo pasado usamos "didn\'t" + el verbo en forma base ("like", sin -d).',
    expEn: 'Spot on! In negative past we use "didn\'t" + base verb ("like", without -d).'
  },
  {
    wrong: "I go to the bank yesterday.",
    qEs: '2. "Yesterday" indica pasado. ¿Cuál es el pasado irregular de "go"?',
    qEn: '2. "Yesterday" indicates past. What is the irregular past of "go"?',
    options: [
      "I goed to the bank yesterday.",
      "I went to the bank yesterday.",
      "I gone to the bank yesterday."
    ],
    correct: 1,
    expEs: '¡Muy bien! "Go" es irregular y su pasado simple es "went".',
    expEn: 'Great! "Go" is irregular and its simple past form is "went".'
  },
  {
    wrong: "Do you wanted to buy a car?",
    qEs: "3. Corrige esta pregunta en Simple Past:",
    qEn: "3. Fix this Simple Past question:",
    options: [
      "Did you wanted to buy a car?",
      "Do you want to buy a car yesterday?",
      "Did you want to buy a car?"
    ],
    correct: 2,
    expEs: '¡Correcto! Para preguntas en pasado usamos "Did" al inicio y el verbo principal en forma base ("want").',
    expEn: 'Correct! For past questions we use "Did" at the start and the base verb ("want").'
  },
  {
    wrong: "I didn’t sold my apartment.",
    qEs: '4. ¿Qué pasa con el verbo "sold" después de "didn\'t"?',
    qEn: '4. What happens to "sold" after "didn\'t"?',
    options: [
      "I didn’t sell my apartment.",
      "I didn’t selled my apartment.",
      "I not sold my apartment."
    ],
    correct: 0,
    expEs: '¡Genial! Después de "didn\'t", el verbo vuelve a su forma base: "sell".',
    expEn: 'Awesome! After "didn\'t", the verb returns to its base form: "sell".'
  },
  {
    wrong: "I goed to school with my siblings.",
    qEs: "5. Corrige el verbo irregular mal conjugado:",
    qEn: "5. Fix the wrongly conjugated irregular verb:",
    options: [
      "I gone to school with my siblings.",
      "I went to school with my siblings.",
      "I going to school with my siblings."
    ],
    correct: 1,
    expEs: '¡Excelente! "Goed" no existe; el pasado irregular de "go" es "went".',
    expEn: 'Excellent! "Goed" does not exist; the irregular past of "go" is "went".'
  },
  {
    wrong: "Do you worked with your father?",
    qEs: "6. Corrige el auxiliar y el verbo de esta pregunta:",
    qEn: "6. Fix the auxiliary and verb in this question:",
    options: [
      "Did you work with your father?",
      "Did you worked with your father?",
      "Were you work with your father?"
    ],
    correct: 0,
    expEs: '¡Perfecto! Usamos "Did" y el verbo base "work" (sin -ed).',
    expEn: 'Perfect! We use "Did" and the base verb "work" (without -ed).'
  },
  {
    wrong: "I studyed very much last year.",
    qEs: '7. Aplica la regla ortográfica de "Consonante + y" para "study":',
    qEn: '7. Apply the "Consonant + y" spelling rule for "study":',
    options: [
      "I studyed very much last year.",
      "I studied very much last year.",
      "I studyd very much last year."
    ],
    correct: 1,
    expEs: '¡Muy bien! Como "study" termina en consonante + y, cambiamos la "y" por "i" + "ed" → "studied".',
    expEn: 'Well done! Since "study" ends in consonant + y, we change "y" to "i" + "ed" → "studied".'
  },
  {
    wrong: "I drinked 2 liters of water today.",
    qEs: '8. ¿Cuál es el pasado irregular correcto de "drink"?',
    qEn: '8. What is the correct irregular past of "drink"?',
    options: [
      "I drunk 2 liters of water today.",
      "I drank 2 liters of water today.",
      "I drink 2 liters of water yesterday."
    ],
    correct: 1,
    expEs: "¡Sí! Drink → Drank (Simple Past) → Drunk (Past Participle).",
    expEn: "Yes! Drink → Drank (Simple Past) → Drunk (Past Participle)."
  },
  {
    wrong: "Did you eated at the restaurant?",
    qEs: "9. Corrige esta pregunta en pasado:",
    qEn: "9. Fix this past question:",
    options: [
      "Did you ate at the restaurant?",
      "Did you eat at the restaurant?",
      "Do you eated at the restaurant?"
    ],
    correct: 1,
    expEs: '¡Brillante! Con "Did" usamos el verbo en forma base: "eat".',
    expEn: 'Brilliant! With "Did" we use the base form of the verb: "eat".'
  },
  {
    wrong: "I don’t knew how to speak japanese.",
    qEs: "10. Corrige la última oración en pasado negativo:",
    qEn: "10. Fix the final negative past sentence:",
    options: [
      "I didn’t knew how to speak Japanese.",
      "I didn’t know how to speak Japanese.",
      "I don’t knowed how to speak Japanese."
    ],
    correct: 1,
    expEs: '¡Lo lograste! "Didn\'t" + forma base "know" (y recuerda que los idiomas en inglés van con mayúscula: Japanese).',
    expEn: 'You did it! "Didn\'t" + base form "know" (and remember languages in English are capitalized: Japanese).'
  }
];

const irregularVerbs = [
  { emoji: "🍽️", base: "Eat", past: "Ate", part: "Eaten", meaning: "Comer", ex: "I ate a delicious cake at home." },
  { emoji: "✍️", base: "Write", past: "Wrote", part: "Written", meaning: "Escribir", ex: "I wrote an email to my boss." },
  { emoji: "✈️", base: "Go", past: "Went", part: "Gone", meaning: "Ir", ex: "We went to the beach last week." },
  { emoji: "🎒", base: "Take", past: "Took", part: "Taken", meaning: "Tomar / Llevar", ex: "I took my son to school." },
  { emoji: "🥤", base: "Drink", past: "Drank", part: "Drunk", meaning: "Beber", ex: "I drank water yesterday." },
  { emoji: "🛍️", base: "Buy", past: "Bought", part: "Bought", meaning: "Comprar", ex: "I bought a new apartment last week." },
  { emoji: "🏷️", base: "Sell", past: "Sold", part: "Sold", meaning: "Vender", ex: "She sold her old car." },
  { emoji: "🧠", base: "Know", past: "Knew", part: "Known", meaning: "Saber / Conocer", ex: "I knew how to speak Spanish." },
  { emoji: "🗣️", base: "Speak", past: "Spoke", part: "Spoken", meaning: "Hablar", ex: "They spoke English in class." },
  { emoji: "🏊", base: "Swim", past: "Swam", part: "Swum", meaning: "Nadar", ex: "He swam in the pool last summer." },
  { emoji: "🏗️", base: "Build", past: "Built", part: "Built", meaning: "Construir", ex: "They built a new website." },
  { emoji: "💖", base: "Feel", past: "Felt", part: "Felt", meaning: "Sentir", ex: "Daniel felt very happy." }
];

document.getElementById("btnTranslate").addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  document.getElementById("langBtnText").textContent =
    currentLang === "es" ? "Translate to English" : "Traducir a Español";
  applyTranslations();
  renderQuizQuestion();
});

function applyTranslations() {
  const dict = i18n[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.innerHTML = dict[key];
  });
}

document.getElementById("btnPresent").addEventListener("click", function () {
  document.body.classList.toggle("presentation-mode");
  this.classList.toggle("active");
});

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".section").forEach((s) => s.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

function speakEnglish(text) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  }
}

document.querySelectorAll(".word-speak").forEach((btn) => {
  btn.addEventListener("click", () => {
    speakEnglish(btn.dataset.word);
  });
});

document.getElementById("btnReadAudio").addEventListener("click", () => {
  const text = document
    .querySelector(".story-box")
    .innerText.replace("Escuchar lectura en inglés", "")
    .replace("Listen to the story in English", "");
  speakEnglish(text);
});

function renderReading() {
  const container = document.getElementById("readingQuestions");
  container.innerHTML = readingData
    .map(
      (item) => `
    <div class="rq-item" onclick="this.classList.toggle('open')">
      <div class="rq-q">
        <span>${item.q}</span>
        <span>👀</span>
      </div>
      <div class="rq-a">✅ ${item.a}</div>
    </div>
  `
    )
    .join("");
}

let qIdx = 0;
let qScore = 0;
let answered = false;

function renderQuizQuestion() {
  const item = mistakesQuiz[qIdx];
  answered = false;
  document.getElementById("quizProgress").style.width = `${((qIdx + 1) / mistakesQuiz.length) * 100}%`;
  document.getElementById("wrongSentenceText").textContent = item.wrong;
  document.getElementById("quizQuestion").textContent = currentLang === "es" ? item.qEs : item.qEn;

  const optsDiv = document.getElementById("quizOptions");
  optsDiv.innerHTML = "";
  item.options.forEach((opt, idx) => {
    const b = document.createElement("button");
    b.className = "opt-btn";
    b.textContent = opt;
    b.addEventListener("click", () => handleQuizAnswer(idx, b));
    optsDiv.appendChild(b);
  });

  const fb = document.getElementById("quizFeedback");
  fb.className = "feedback-banner";
  fb.style.display = "none";
  document.getElementById("btnNextQuiz").style.display = "none";
}

function handleQuizAnswer(selectedIdx, btnEl) {
  if (answered) return;
  answered = true;
  const item = mistakesQuiz[qIdx];
  const allBtns = document.querySelectorAll(".opt-btn");
  allBtns.forEach((b) => (b.disabled = true));

  const fb = document.getElementById("quizFeedback");
  const exp = currentLang === "es" ? item.expEs : item.expEn;

  if (selectedIdx === item.correct) {
    qScore++;
    btnEl.classList.add("correct");
    fb.className = "feedback-banner ok";
    fb.textContent = "🎉 " + exp;
  } else {
    btnEl.classList.add("wrong");
    allBtns[item.correct].classList.add("correct");
    fb.className = "feedback-banner err";
    fb.textContent = "💡 " + exp;
  }
  fb.style.display = "block";
  document.getElementById("btnNextQuiz").style.display = "inline-block";
}

document.getElementById("btnNextQuiz").addEventListener("click", () => {
  qIdx++;
  if (qIdx < mistakesQuiz.length) {
    renderQuizQuestion();
  } else {
    document.getElementById("quizBody").style.display = "none";
    const res = document.getElementById("quizResult");
    res.style.display = "block";
    document.getElementById("resultHeading").textContent =
      currentLang === "es" ? "¡Felicidades, Margarita! 🌟" : "Congratulations, Margarita! 🌟";
    document.getElementById("resultScoreText").textContent =
      currentLang === "es"
        ? `Obtuviste ${qScore} de ${mistakesQuiz.length} respuestas correctas.`
        : `You scored ${qScore} out of ${mistakesQuiz.length} correct answers.`;
  }
});

document.getElementById("btnRestartQuiz").addEventListener("click", () => {
  qIdx = 0;
  qScore = 0;
  document.getElementById("quizResult").style.display = "none";
  document.getElementById("quizBody").style.display = "block";
  renderQuizQuestion();
});

function renderFlashcards() {
  const grid = document.getElementById("flashcardsGrid");
  grid.innerHTML = irregularVerbs
    .map(
      (v) => `
    <div class="flashcard" onclick="this.classList.toggle('flipped')">
      <div class="flashcard-inner">
        <div class="flash-front">
          <div class="flash-emoji">${v.emoji}</div>
          <div class="flash-word">${v.base}</div>
          <div class="flash-hint">(${v.meaning}) • Click to flip</div>
        </div>
        <div class="flash-back">
          <div class="flash-word">${v.base} → ${v.past}</div>
          <div style="font-size:0.85rem; font-weight:700; color:#6D28D9; margin:4px 0;">Participle: ${v.part}</div>
          <div style="font-size:0.85rem; color:#1E3A5F; font-style:italic;">"${v.ex}"</div>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

renderReading();
renderQuizQuestion();
renderFlashcards();