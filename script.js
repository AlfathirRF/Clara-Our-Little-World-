const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const opening = document.getElementById("opening");
const menu = document.getElementById("menu");

const hint = document.getElementById("hint");

let noCount = 0;


/* =======================
   TOMBOL NO
======================== */

noBtn.addEventListener("click", function () {

  noCount++;

  const messages = [
    "Ishh.. Hem kok gitu kamu",
    "Yakin mau pilih NO?",
    "Aku kasih kesempatan lagi...",
    "Kamu Kenapa sih beb?",
    "Tombolnya mulai takut sama kamu..",
    "MENDING KAMU PENCET TOMBOL YES DEH"
  ];

  hint.textContent =
    messages[Math.min(noCount - 1, messages.length - 1)];


  /*
    Setelah ditekan,
    tombol NO berpindah ke posisi random.
  */

  noBtn.style.position = "fixed";

  const padding = 20;

  const maxX =
    window.innerWidth -
    noBtn.offsetWidth -
    padding;

  const maxY =
    window.innerHeight -
    noBtn.offsetHeight -
    padding;

  const x =
    Math.random() *
    (maxX - padding) +
    padding;

  const y =
    Math.random() *
    (maxY - padding) +
    padding;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;


  /*
    Tombol YES sedikit membesar.
  */

  const scale =
    Math.min(1 + noCount * 0.07, 1.5);

  yesBtn.style.transform =
    `scale(${scale})`;

});


/* =========================
   TOMBOL YES
========================= */

yesBtn.addEventListener("click", function () {

    createHeartBurst();

    setTimeout(function () {

        opening.style.display = "none";
        menu.style.display = "none";
        noBtn.style.display = "none";

        giftScreen.classList.add("active");

    }, 650);

});


/* =========================
   HEART BURST
========================= */

function createHeartBurst() {

  const container =
    document.getElementById("heartsBurst");

  const hearts = [
    "♥",
    "♡",
    "💗",
    "💕",
    "💖"
  ];


  for (let i = 0; i < 35; i++) {

    const heart =
      document.createElement("span");

    heart.className = "burst-heart";

    heart.textContent =
      hearts[
        Math.floor(
          Math.random() * hearts.length
        )
      ];


    const x =
      (Math.random() - 0.5) * 700;

    const y =
      (Math.random() - 0.5) * 700;


    heart.style.setProperty(
      "--x",
      `${x}px`
    );

    heart.style.setProperty(
      "--y",
      `${y}px`
    );


    container.appendChild(heart);


    setTimeout(function () {

      heart.remove();

    }, 1300);

  }

}

const loadingScreen = document.getElementById("loading-screen");
const loadingMessage = document.getElementById("loading-message");

const messages = [
  "Halo Ara / Lala / Clara💗",
  "Semua ini dari Seseorang 🫂",
  "Jemand, der seine Frau sehr liebt🌝"
];

let index = 0;

function showNextMessage() {
  loadingMessage.style.opacity = "0";
  loadingMessage.style.transform = "translateY(15px)";

  setTimeout(() => {
    index++;

    if (index < messages.length) {
      loadingMessage.textContent = messages[index];

      loadingMessage.style.opacity = "1";
      loadingMessage.style.transform = "translateY(0)";

      setTimeout(showNextMessage, 2200);
    } else {
      setTimeout(() => {
        loadingScreen.classList.add("hide");
      }, 1800);
    }
  }, 700);
}

setTimeout(showNextMessage, 2200);

const gift = document.getElementById("gift");
const giftHint = document.getElementById("gift-hint");

let giftClicks = 0;

/* ==================================================
   COUPLE QUIZ
================================================== */

const quizCard =
  document.getElementById("quizCard");

const quiz =
  document.getElementById("quiz");

const quizResult =
  document.getElementById("quizResult");

const backMenu =
  document.getElementById("backMenu");

const returnMenu =
  document.getElementById("returnMenu");

const questionText =
  document.getElementById("questionText");

const questionNumber =
  document.getElementById("questionNumber");

const progress =
  document.getElementById("progress");

const answers =
  document.getElementById("answers");

const nextQuestion =
  document.getElementById("nextQuestion");

const scoreNumber =
  document.getElementById("scoreNumber");

const resultMessage =
  document.getElementById("resultMessage");
/* ==================================================
   QUESTIONS
================================================== */

/*
  BRO:
  bagian ini bebas lu ubah sesuai hubungan kalian.

  answer = nomor jawaban yang benar.
  0 = pilihan pertama
  1 = pilihan kedua
  2 = pilihan ketiga
  3 = pilihan keempat
*/

const questions = [

  {
    question: "Apa Nama Rael/Vano Sebenernya?",
    options: [
      "Alfathir Rivanof Fazri",
      "AlPathir Rivanop Fazry",
      "Alfatir Rifanov Fazry",
      "Alfathir Rifanov Vazri"
    ],
    answer: 0
  },

  {
    question: "Kapan Tanggal Lahir Vano/Rael?...",
    options: [
      "04 September 2009",
      "11 April 2009",
      "11 Juni 2009",
      "22 Agustus 2008"
    ],
    answer: 1
  },

  {
    question: "Apa Makanan Favorite Rael/Vano?",
    options: [
      "Nasi Goreng",
      "Ayam Geprek",
      "Mie Instan",
      "Sayur Bayam"
    ],
    answer: 1
  },

  {
    question: "Karakter Anime apa yang sangat rael cintai?",
    options: [
      "Yani Neko",
      "Hatsune Miku",
      "Ryou Yamada",
      "Mikasa Ackerman"
    ],
    answer: 2
  },

  {
    question: "Film Apa yang pernah kami Tonton Habis Pertama Kali?",
    options: [
      "Dilan 1990",
      "Ajin",
      "Colony",
      "3 idiots"
    ],
    answer: 1
  },

  {
    question: "Apa Warna Yang Rael/Vano sukai?",
    options: [
      "Merah",
      "Biru Muda",
      "Kuning",
      "Hitam"
    ],
    answer: 1
  },

  {
    question: "Siapa Sahabat Rael Yang Betemu Waktu Sd Hingga Saat ini?",
    options: [
      "Rafi",
      "Vio",
      "Alan",
      "Daiyan"
    ],
    answer: 3
  },

  {
    question: "Apa Sayur Yang Sangat Disukai Rael?",
    options: [
      "Sayur Bayam",
      "Sayur Kangkung",
      "Sayur Sop",
      "Sayur Kacang"
    ],
    answer: 1
  },

  {
    question: "Dari Mana Rael Berasal?.",
    options: [
      "Majalengka",
      "Cicalengka",
      "Sumedang",
      "Bandung"
    ],
    answer: 0
  },
{
    question: "Dimana Rael Bersekolah?",
    options: [
      "Sma 2 Majalengka",
      "Sma 1 Majalengka",
      "Smk 1 Panyingkiran",
      "Smk 1 Majalengka"
      
     ],
     answer: 0
  },

  {
    question: "Apa Nama Rael Di Sosial Media?",
    options: [
      "fathir thea",
      "fthea",
      "Theaft2",
      "Raellys"
    ],
    answer: 0
  },

  {
    question: "Apa Mata Pelajaran yang Rael Unggulkan?",
    options: [
      "Sejarah",
      "Sosologi",
      "Ekonomi",
      "B. inggris"
    ],
    answer: 3
  },

  {
    question: "Kapan Tanggal Kita Jadian?",
    options: [
      "17 Desember 2025",
      "10 Desember 2025",
      "18 Desember 2025",
      "1 Januari 2025"
    ],
    answer: 0
  },

  {
    question: "Di Aplikasi Apa Kita Betemu?",
    options: [
      "Facebook",
      "Telegram",
      "WhatsApp",
      "Instragram"
    ],
    answer: 1
  },

  {
    question: "Apa Warna Cat Rumah Rael?",
    options: [
      "Hitam",
      "Putih",
      "Abu",
      "Nila"
    ],
    answer: 1
  },

  {
    question: "Apa Olahraga Yang Rael Minati?",
    options: [
      "Badminton",
      "Sepak Bola",
      "Basketball",
      "Voli"
    ],
    answer: 1
  },

  {
    question: "Apa Merek Hp Yang digunakan Rael?",
    options: [
      "Vivo",
      "Redmi",
      "Realme",
      "Samsung"
    ],
    answer: 2
  },

  {
    question: "Siapa Teman Curhat Rael Yang Rael Obrolkan Apabila Sedang Ada masalah denganmu?",
    options: [
      "Rafi",
      "Vio",
      "Reyhan",
      "Dzikri"
    ],
    answer: 0
  },

  {
    question: "Apa Makanan Pendukung Yang Rael Sukai?",
    options: [
      "Tahu",
      "Kerupuk",
      "Tempe",
      "Risol"
    ],
    answer: 2
  },

  {
    question: "Kapan Tanggal Pertemuan kita nanti?",
    options: [
      "01 Desember 2027",
      "11 April 2027",
      "04 September 2027",
      "17 Desember 2027"
    ],
    answer: 2
  }

];


let currentQuestion = 0;

let score = 20;

let selectedAnswer = null;


/* ==================================================
   OPEN QUIZ
================================================== */

quizCard.addEventListener("click", function () {

  menu.style.display = "none";

  quizResult.style.display = "none";

  quiz.style.display = "block";

  currentQuestion = 0;

  score = 20;

  showQuestion();

});


/* ==================================================
   SHOW QUESTION
================================================== */

function showQuestion() {

  selectedAnswer = null;

  const current =
    questions[currentQuestion];


  questionNumber.textContent =
    `Question ${currentQuestion + 1}`;


  progress.textContent =
    `${currentQuestion + 1} / ${questions.length}`;


  questionText.textContent =
    current.question;


  answers.innerHTML = "";


  nextQuestion.classList.remove(
    "ready"
  );


  current.options.forEach(
    (option, index) => {

      const button =
        document.createElement("button");


      button.className =
        "answer";


      button.textContent =
        option;


      button.addEventListener(
        "click",
        () => selectAnswer(
          button,
          index
        )
      );


      answers.appendChild(
        button
      );

    }
  );

}


/* ==================================================
   SELECT ANSWER
================================================== */

function selectAnswer(button, index) {

  if (selectedAnswer !== null) {
    return;
  }

  selectedAnswer = index;

  const current =
    questions[currentQuestion];

  const allAnswers =
    document.querySelectorAll(".answer");


  // Kunci semua jawaban
  allAnswers.forEach(item => {
    item.style.pointerEvents = "none";
  });


  // =================================
  // JAWABAN BENAR
  // =================================

  if (index === current.answer) {

    button.classList.add("correct");

    // Feedback
    if (typeof showQuizFeedback === "function") {
      showQuizFeedback(
        "Pinternya Babyy Ku hihi 💗",
        "correct"
      );
    }

    // Animasi hati kalau fungsi tersedia
    if (typeof createQuizHearts === "function") {
      createQuizHearts();
    }

  }


  // =================================
  // JAWABAN SALAH
  // =================================

  else {

    // Kurangi 1 poin
    score--;

    button.classList.add("wrong");

    // Getar
    button.classList.add("shake");

    if (typeof showQuizFeedback === "function") {
      showQuizFeedback(
        "Lah Ara. Kok salah? -1 point",
        "wrong"
      );
    }

    // Tunjukkan jawaban benar
    allAnswers[
      current.answer
    ].classList.add("correct");

    setTimeout(() => {
      button.classList.remove("shake");
    }, 500);

  }


  // =================================
  // NEXT SELALU AKTIF
  // =================================

  nextQuestion.classList.add("ready");

}


/* ==================================================
   NEXT
================================================== */

nextQuestion.addEventListener(
  "click",
  function () {

    currentQuestion++;


    if (
      currentQuestion >=
      questions.length
    ) {

      showResult();

    } else {

      showQuestion();

    }

  }
);


/* ==================================================
   RESULT
================================================== */

function showResult() {

  quiz.style.display =
    "none";

  quizResult.style.display =
    "block";


  scoreNumber.textContent =
    score;


  let message = "";


  if (score === 20) {

    message =
      "HAHAHAHA BRAVO BEB, KAMU KEKNYA PAHAM BETUL LAH SOAL AKU, AYOK NIKAH🥰 💗";

  }

  else if (score >= 17) {

    message =
      "ANJAYY, Okee oke!? Ternyata kamu Tau aku, cuma belum sepenuhnya sih huh. 😍💕";

  }

  else if (score >= 14) {

    message =
      "Yah Okelah, cuma.. Kamu harusnya bisa lebih tau lagi soal aku, lalaku... ☺️🌷";

  }

  else if (score >= 10) {

    message =
      "Hemmzz, yahh makanya belajar lagi baby.. masa ga tauu sih😕😞";

  }

  else {

    message =
      "AYANG!? Kok.. Kamu masa gatau aku sih.. aku kecewa hem😒😤";

  }


  resultMessage.textContent =
    message;

}


/* ==================================================
   BACK TO MENU
================================================== */

function goBackToMenu() {

  quiz.style.display =
    "none";

  quizResult.style.display =
    "none";

  menu.style.display =
    "block";

}


backMenu.addEventListener(
  "click",
  goBackToMenu
);


returnMenu.addEventListener(
  "click",
  goBackToMenu
);

function showQuizFeedback(text, type) {

  // Hapus feedback lama
  const oldFeedback =
    document.querySelector(".quiz-feedback");

  if (oldFeedback) {
    oldFeedback.remove();
  }


  const feedback =
    document.createElement("div");

  feedback.className =
    `quiz-feedback ${type}`;

  feedback.textContent =
    text;


  answers.appendChild(
    feedback
  );

}

/* =========================================
   BIRTHDAY GIFT EXPERIENCE
========================================= */

const giftScreen =
  document.getElementById("giftScreen");

const letterScreen =
  document.getElementById("letterScreen");

const signatureScreen =
  document.getElementById("signatureScreen");

const giftBox =
  document.getElementById("giftBox");

const giftProgress =
  document.getElementById("giftProgress");

const tapCounter =
  document.getElementById("tapCounter");

const tapText =
  document.getElementById("tapText");

const openSignature =
  document.getElementById("openSignature");

const clearSignature =
  document.getElementById("clearSignature");

const saveSignature =
  document.getElementById("saveSignature");


/* =========================================
   GIFT SETTINGS
========================================= */

let giftTaps = 0;

const requiredTaps = 12;


/* =========================================
   START GIFT
========================================= */

function startBirthdayGift() {

  giftTaps = 0;

  giftProgress.style.width = "0%";

  tapCounter.textContent =
    "0 / 12";

  tapText.textContent =
    "Tap me!";


  giftBox.classList.remove(
    "open",
    "breaking"
  );


  letterScreen.classList.remove(
    "active"
  );

  signatureScreen.classList.remove(
    "active"
  );

  giftScreen.classList.add(
    "active"
  );

}


/* =========================================
   TAP GIFT
========================================= */

giftBox.addEventListener(
  "click",
  function () {

    if (giftTaps >= requiredTaps) {
      return;
    }


    giftTaps++;


    const percent =
      (giftTaps / requiredTaps) * 100;


    giftProgress.style.width =
      `${percent}%`;


    tapCounter.textContent =
      `${giftTaps} / ${requiredTaps}`;


    /* little tap animation */

    giftBox.style.transform =
      `scale(.92) rotate(${Math.random() * 6 - 3}deg)`;


    setTimeout(() => {

      giftBox.style.transform =
        "";

    }, 120);


    /* =================================
       HALF WAY
    ================================= */

    if (giftTaps === 6) {

      tapText.textContent =
        "Mulai Kebuka Nih.. 👀";

      giftBox.classList.add(
        "open"
      );

    }


    /* =================================
       FINISHED
    ================================= */

    if (giftTaps >= requiredTaps) {

      tapText.textContent =
        "BERHASIL SAYANGKU 💗";

      giftBox.classList.add(
        "breaking"
      );


      setTimeout(() => {

        giftScreen.classList.remove(
          "active"
        );

        letterScreen.classList.add(
          "active"
        );

      }, 800);

    }

  }
);


/* =========================================
   LETTER → SIGNATURE
========================================= */

openSignature.addEventListener(
  "click",
  function () {

    letterScreen.classList.remove(
      "active"
    );

    signatureScreen.classList.add(
      "active"
    );

    setupSignatureCanvas();

  }
);


/* =========================================
   SIGNATURE CANVAS
========================================= */

const canvas =
  document.getElementById(
    "signatureCanvas"
  );

const ctx =
  canvas.getContext("2d");

let drawing = false;


/* resize canvas */

function setupSignatureCanvas() {

  const rect =
    canvas.getBoundingClientRect();


  const ratio =
    window.devicePixelRatio || 1;


  canvas.width =
    rect.width * ratio;

  canvas.height =
    rect.height * ratio;


  ctx.scale(
    ratio,
    ratio
  );


  ctx.lineWidth = 2.5;

  ctx.lineCap = "round";

  ctx.lineJoin = "round";

  ctx.strokeStyle =
    "#c85d7d";

}


/* get position */

function getCanvasPosition(event) {

  const rect =
    canvas.getBoundingClientRect();


  return {

    x:
      event.clientX -
      rect.left,

    y:
      event.clientY -
      rect.top

  };

}


/* =========================================
   START DRAWING
========================================= */

canvas.addEventListener(
  "pointerdown",
  function (event) {

    drawing = true;

    canvas.setPointerCapture(
      event.pointerId
    );


    const pos =
      getCanvasPosition(event);


    ctx.beginPath();

    ctx.moveTo(
      pos.x,
      pos.y
    );


    canvas.parentElement.classList.add(
      "has-signature"
    );

  }
);


/* =========================================
   DRAW
========================================= */

canvas.addEventListener(
  "pointermove",
  function (event) {

    if (!drawing) {
      return;
    }


    const pos =
      getCanvasPosition(event);


    ctx.lineTo(
      pos.x,
      pos.y
    );

    ctx.stroke();

  }
);


/* =========================================
   STOP DRAWING
========================================= */

canvas.addEventListener(
  "pointerup",
  function () {

    drawing = false;

  }
);


canvas.addEventListener(
  "pointercancel",
  function () {

    drawing = false;

  }
);


/* =========================================
   CLEAR SIGNATURE
========================================= */

clearSignature.addEventListener(
  "click",
  function () {

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );


    canvas.parentElement.classList.remove(
      "has-signature"
    );

  }
);


/* =========================================
   SAVE / FINISH
========================================= */

saveSignature.addEventListener(
  "click",
  function () {

    /*
      Untuk sekarang signature tidak
      dikirim ke server.
      Hanya disimpan selama halaman ini
      masih terbuka.
    */

    const signature =
      canvas.toDataURL(
        "image/png"
      );


    localStorage.setItem(
      "birthdaySignature",
      signature
    );


    signatureScreen.classList.remove(
      "active"
    );


    /*
      BALIK KE MENU UTAMA
    */

    const menu =
      document.getElementById("menu");


    if (menu) {

      menu.style.display =
        "block";

    }

  });




const favoriteVerseBtn = document.getElementById("favorite-verse");
const versePage = document.getElementById("verse-menu");
const backToMenu = document.getElementById("backToMenu");

favoriteVerseBtn.addEventListener("click", () => {

  // Buat layar transisi
  const transition = document.createElement("div");
  transition.className = "page-transition";

  document.body.appendChild(transition);

  // Fade in
  requestAnimationFrame(() => {
    transition.classList.add("show");
  });

  // Setelah layar tertutup, pindah halaman
  setTimeout(() => {

    menu.classList.add("hidden");
    versePage.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

    // Fade out
    setTimeout(() => {
      transition.classList.remove("show");

      setTimeout(() => {
        transition.remove();
      }, 220);

    }, 40);

  }, 220);

});


backToMenu.addEventListener("click", () => {

  const transition = document.createElement("div");
  transition.className = "page-transition";

  document.body.appendChild(transition);

  requestAnimationFrame(() => {
    transition.classList.add("show");
  });

  setTimeout(() => {

    versePage.classList.add("hidden");
    menu.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

    setTimeout(() => {
      transition.classList.remove("show");

      setTimeout(() => {
        transition.remove();
      }, 220);

    }, 40);

  }, 220);

});

/* =========================
   VERSE BUTTON TAP EFFECT
========================= */

const verseButtons = document.querySelectorAll(".verse-option");

verseButtons.forEach(button => {

  button.addEventListener("click", () => {

    // mulai ripple
    button.classList.remove("ripple");

    // force browser membaca ulang animasi
    void button.offsetWidth;

    button.classList.add("ripple");

    // hapus setelah animasi selesai
    setTimeout(() => {
      button.classList.remove("ripple");
    }, 500);

  });

});

/* =========================
   VERSE READER SYSTEM
========================= */

const verseReader = document.getElementById("verse-reader");
const readerBack = document.getElementById("readerBack");

const readerIcon = document.getElementById("readerIcon");
const readerLabel = document.getElementById("readerLabel");
const readerTitle = document.getElementById("readerTitle");
const readerSubtitle = document.getElementById("readerSubtitle");

const verseQuote = document.getElementById("verseQuote");
const verseReference = document.getElementById("verseReference");
const verseText = document.getElementById("verseText");
const verseEnding = document.getElementById("verseEnding");


const verseData = {

  sad: {
    icon: "🌧️",
    label: "OPEN KETIKA KAMU SEDIH",
    title: "Untuk Hari-hari yang Terasa Berat",
    subtitle: "Kamu jangan pernah menyerah.",
    quote: "Bahkan di hari-hari yang sulit, masih ada sedikit cahaya yang menanti di depan.",
    reference: "Mazmur 34:19",
    text: "Tuhan dekat dengan orang yang sedang mengalami kesusahan dan memberi kekuatan untuk melewatinya.",
    ending: "Gapapa kok babyy kalo babyy mau istirahat 🤍"
  },

  happy: {
    icon: "☀️",
    label: "OPEN KETIKA KAMU SENANG",
    title: "Simpan ini sebagai kenagan",
    subtitle: "Untuk saat-saat ketika hatimu terasa penuh.",
    quote: "Beberapa momen layak untuk diabadikan, hanya karena momen-momen itu membuat hatimu tersenyum.",
    reference: "Filipi 4:4",
    text: "Tetaplah bersukacita dalam Tuhan; biarlah sukacita itu terus hidup di dalam hatimu.",
    ending: "Tetaplah tersenyum. Kebahagiaanmu adalah sesuatu yang indah. ☀️"
  },

  lost: {
    icon: "🌙",
    label: "OPEN KETIKA KAMU KEHILANGAN",
    title: "Agar kamu memiliki sesuatu yang pasti.",
    subtitle: "Lala bisa melakukannya selangkah demi selangkah..",
    quote: "Setiap Perjalanan pasti ada Jawaban.",
    reference: "Amsal 3:5–6",
    text: "Percayalah kepada Tuhan sepenuhnya dan serahkan jalanmu kepada-Nya; Dia akan menuntun langkahmu.",
    ending: "Percayalah kamu tidak akan sendirian sayang.. 🌙"
  },

  miss: {
    icon: "💌",
    label: "OPEN KETKA KAMU KANGEM AKU",
    title: "A Little Reminder Of Us",
    subtitle: "Untuk saat-saat ketika jarak terasa sedikit lebih jauh.",
    quote: "Terkadang, mengingat momen indah sudah cukup untuk membuat seseorang merasa dekat kembali..",
    reference: "1 Korintus 13:7",
    text: "Kasih tetap bertahan, tetap berharap, dan tetap percaya bahkan ketika keadaan tidak selalu mudah.",
    ending: "Sampai kenangan berikutnya, simpan surat kecil ini baik-baik.. 💌"
  },

  hope: {
    icon: "🌷",
    label: "OPEN KETIKA KAMU BUTUH HARAPAN ",
    title: "Semuanya masih Ada haapan.",
    subtitle: "Untuk hari-hari ketika Lala membutuhkan alasan buat maju..",
    quote: "Bab yang sulit tidak sama dengan akhir cerita",
    reference: "Roma 15:13",
    text: "Semoga Tuhan memenuhi hatimu dengan sukacita, damai, dan pengharapan yang terus bertumbuh.",
    ending: "Bersabarlah. Harapan tidak harus datang sekaligus.. 🌷"
  },

  favorite: {
    icon: "✨",
    label: "OUR FAVORITE VERSE",
    title: "The Verses We Keep Close",
    subtitle: "Two little reminders for us to remember.",

    quote: "Beberapa kata menjadi istimewa karena kenangan dan harapan yang kita kaitkan dengannya.",

    reference: "Amsal 23:18",
    text: "Ada masa depan yang baik bagi orang yang terus berharap; harapan itu tidak akan berakhir sia-sia.",

    ending: "Dan Sejatinya Setiap tindakan ada padamu 🤍"
  }

};

verseButtons.forEach(button => {

  button.addEventListener("click", () => {

    const type = button.dataset.verse;
    const data = verseData[type];

    if (!data) return;

    // ripple
    button.classList.remove("ripple");
    void button.offsetWidth;
    button.classList.add("ripple");

    // transisi
    const transition = document.createElement("div");

    transition.className = "page-transition";

    document.body.appendChild(transition);

    requestAnimationFrame(() => {
      transition.classList.add("show");
    });


    setTimeout(() => {

      // sembunyikan menu Open When
      versePage.classList.add("hidden");

      // isi reader
      readerIcon.textContent = data.icon;
      readerLabel.textContent = data.label;
      readerTitle.textContent = data.title;
      readerSubtitle.textContent = data.subtitle;

      verseQuote.textContent = data.quote;
      verseReference.textContent = data.reference;
      verseText.textContent = data.text;
      verseEnding.textContent = data.ending;

      // tampilkan reader
      verseReader.classList.remove("hidden");

      window.scrollTo({
        top: 0,
        behavior: "instant"
      });


      // fade keluar
      setTimeout(() => {

        transition.classList.remove("show");

        setTimeout(() => {
          transition.remove();
        }, 220);

      }, 60);

    }, 220);

  });

});

readerBack.addEventListener("click", () => {

  const transition = document.createElement("div");

  transition.className = "page-transition";

  document.body.appendChild(transition);

  requestAnimationFrame(() => {
    transition.classList.add("show");
  });


  setTimeout(() => {

    verseReader.classList.add("hidden");

    versePage.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });


    setTimeout(() => {

      transition.classList.remove("show");

      setTimeout(() => {
        transition.remove();
      }, 220);

    }, 60);

  }, 220);

  });

/* =====================================
   JAR OF LITTLE THINGS — NEW JAVASCRIPT
===================================== */

(() => {

  const jarCard =
    document.getElementById("jarCard");

  const jarScreen =
    document.getElementById("jarScreenNew");

  const jarBack =
    document.getElementById("jarBackNew");

  const littleJar =
    document.getElementById("littleJarNew");

  const jarLetter =
    document.getElementById("jarLetterNew");

  const jarStatus =
    document.getElementById("jarStatusNew");

  const jarCount =
    document.getElementById("jarTapCountNew");

  const messageBox =
    document.getElementById("jarMessageBoxNew");

  const messageText =
    document.getElementById("jarMessageTextNew");

  const messageClose =
    document.getElementById("messageCloseNew");


  /* =========================
     CEK ELEMEN
  ========================= */

  if (
    !jarCard ||
    !jarScreen ||
    !jarBack ||
    !littleJar ||
    !jarLetter ||
    !jarStatus ||
    !jarCount ||
    !messageBox ||
    !messageText ||
    !messageClose
  ) {

    console.warn(
      "Jar of Little Things: elemen belum lengkap."
    );

    return;
  }


  /* =========================
     18 PESAN
  ========================= */

  const jarMessages = [

    "Kamu nggak harus selalu kuat. Istirahat juga bagian dari perjalanan.",

    "Semoga hari ini ada satu hal kecil yang berhasil membuatmu tersenyum.",

    "Kalau hari ini terasa berat, pelan-pelan saja. Kamu nggak harus terburu-buru.",

    "Jangan lupa, masih banyak hal baik yang menunggu untuk kamu temui.",

    "Kamu sudah melewati banyak hal sampai sejauh ini. Itu sesuatu yang patut dihargai.",

    "Semoga apa pun yang sedang kamu perjuangkan, perlahan menemukan jalannya.",

    "Terima kasih sudah menjadi dirimu sendiri, dengan segala cerita yang kamu punya.",

    "Tidak apa-apa kalau hari ini kamu hanya ingin beristirahat dan menikmati ketenangan.",

    "Semoga hatimu selalu menemukan alasan kecil untuk merasa tenang.",

    "Kalau kamu sedang ragu, ingat bahwa kamu tidak harus mengetahui semuanya sekarang.",

    "Semoga kebaikan yang kamu berikan kepada orang lain kembali kepadamu suatu hari nanti.",

    "Ada hari yang buruk, tetapi bukan berarti semuanya akan selalu seperti itu.",

    "Jangan lupa menghargai langkah kecilmu. Sekecil apa pun itu, tetap sebuah kemajuan.",

    "Semoga besok membawa sesuatu yang lebih ringan daripada hari ini.",

    "Semoga kamu selalu menemukan alasan kecil untuk tersenyum di tengah kesibukanmu.",

    "Kalau hari ini terasa melelahkan, semoga kamu menemukan waktu untuk bernapas dan beristirahat.",

    "Simpan pesan kecil ini. Mungkin suatu hari nanti kamu akan membutuhkannya lagi.",

    "Semoga kamu selalu menemukan cahaya, bahkan ketika harimu terasa sedikit redup."

  ];


  let tapCount = 0;

  let isOpen = false;

  let lastMessage = -1;


  /* =========================
     RESET
  ========================= */

  function resetJar() {

    tapCount = 0;

    isOpen = false;

    littleJar.classList.remove(
      "jar-open",
      "jar-shake"
    );

    jarLetter.classList.remove(
      "letter-ready"
    );

    jarCount.textContent = "0 / 5";

    jarStatus.innerHTML =
      "<span>✦</span> Ketuk toplesnya 5 kali <span>✦</span>";

  }


  /* =========================
     MASUK JAR
  ========================= */

  jarCard.addEventListener("click", () => {

    const menu =
      document.getElementById("menu");

    if (menu) {
      menu.style.display = "none";
    }

    resetJar();

    jarScreen.style.display = "flex";

    requestAnimationFrame(() => {

      jarScreen.classList.add(
        "jar-show"
      );

    });

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });

  });


  /* =========================
     TAP TOPLES
  ========================= */

  littleJar.addEventListener("click", () => {

    if (isOpen) return;


    tapCount++;

    jarCount.textContent =
      tapCount + " / 5";


    /* SHAKE */

    littleJar.classList.remove(
      "jar-shake"
    );

    void littleJar.offsetWidth;

    littleJar.classList.add(
      "jar-shake"
    );


    /* BELUM 5 */

    if (tapCount < 5) {

      jarStatus.innerHTML =
        "<span>✦</span> Ketuk lagi pelan-pelan <span>✦</span>";

      return;
    }


    /* =========================
       5 TAP
    ========================= */

    isOpen = true;

    jarStatus.innerHTML =
      "<span>♡</span> Toplesnya terbuka... <span>♡</span>";

    littleJar.classList.add(
      "jar-open"
    );


    /* SURAT KELUAR */

    setTimeout(() => {

      jarLetter.classList.add(
        "letter-ready"
      );

    }, 100);

  });


  /* =========================
     PESAN ACAK
  ========================= */

  function getRandomMessage() {

    let index;

    do {

      index =
        Math.floor(
          Math.random() *
          jarMessages.length
        );

    } while (
      index === lastMessage &&
      jarMessages.length > 1
    );

    lastMessage = index;

    return jarMessages[index];

  }


  /* =========================
     TEKAN SURAT
  ========================= */

  jarLetter.addEventListener(
    "click",
    (event) => {

      event.stopPropagation();

      if (!isOpen) return;

      messageText.textContent =
        getRandomMessage();

      messageBox.classList.add(
        "show"
      );

    }
  );


  /* =========================
     TUTUP PESAN
  ========================= */

  messageClose.addEventListener(
    "click",
    () => {

      closeMessage();

    }
  );


  /* Klik area gelap */

  messageBox.addEventListener(
    "click",
    (event) => {

      if (
        event.target === messageBox
      ) {

        closeMessage();

      }

    }
  );


  function closeMessage() {

    messageBox.classList.remove(
      "show"
    );


    /*
      Kasih waktu sedikit supaya
      pesan menghilang dahulu.
    */

    setTimeout(() => {

      closeJar();

    }, 260);

  }


  /* =========================
     TUTUP TOPLES
  ========================= */

  function closeJar() {

    littleJar.classList.remove(
      "jar-open"
    );


    setTimeout(() => {

      isOpen = false;

      tapCount = 0;

      jarCount.textContent =
        "0 / 5";

      jarStatus.innerHTML =
        "<span>✦</span> Ketuk toplesnya 5 kali <span>✦</span>";

    }, 500);

  }


  /* =========================
     BACK KE MENU
  ========================= */

  jarBack.addEventListener(
    "click",
    () => {

      messageBox.classList.remove(
        "show"
      );

      littleJar.classList.remove(
        "jar-open",
        "jar-shake"
      );

      isOpen = false;

      tapCount = 0;

      jarCount.textContent =
        "0 / 5";


      /* FADE OUT */

      jarScreen.classList.remove(
        "jar-show"
      );


      setTimeout(() => {

        jarScreen.style.display =
          "none";


        const menu =
          document.getElementById("menu");

        if (menu) {

          menu.style.display =
            "block";

        }


        window.scrollTo({
          top: 0,
          behavior: "instant"
        });

      }, 280);

    }
  );

})();

/* =====================================================
   OUR SONG — JAVASCRIPT FINAL
   HTML:
   #songCard
   #ourSongPage
   #ourSongBack
   #ourSongPlayer
===================================================== */

(() => {
  "use strict";

  /* =====================================================
     CEK SONG CARD
  ===================================================== */

  const songCard = document.getElementById("songCard");

  if (!songCard) {
    console.warn("OUR SONG: #songCard tidak ditemukan.");
    return;
  }


  /* =====================================================
     ELEMENT OUR SONG
  ===================================================== */

  const page =
    document.getElementById("ourSongPage");

  const back =
    document.getElementById("ourSongBack");

  const player =
    document.getElementById("ourSongPlayer");


  if (!page || !back || !player) {
    console.warn(
      "OUR SONG: HTML Our Song belum lengkap."
    );
    return;
  }


  /* =====================================================
     DATA 6 LAGU
  ===================================================== */

  const songs = [

    {
      title: "Akhirnya Ku Menemukanmu",
      artist: "Naff",
      cover:
        "https://res.cloudinary.com/ln78z8wz/image/upload/v1787983697/ab67616d0000b2739d16cb037e7c420c97292064.jpg",
      audio:
        "https://res.cloudinary.com/ln78z8wz/video/upload/v1787982151/Naff_-_Akhirnya_Ku_Menemukanmu_Lirik_Video.mp3"
    },

    {
      title: "Wanitaku",
      artist: "NOAH",
      cover:
        "https://res.cloudinary.com/ln78z8wz/image/upload/v1787983697/ab67616d0000b273d6342c75204c065e554ede10.jpg",
      audio:
        "https://res.cloudinary.com/ln78z8wz/video/upload/v1787982150/NOAH_-_Wanitaku_Official_Audio.mp3"
    },

    {
      title: "Cinta Luar Biasa",
      artist: "Andmesh",
      cover:
        "https://res.cloudinary.com/ln78z8wz/image/upload/v1787983697/Andmesh_-_Cinta_Luar_Biasa.png",
      audio:
        "https://res.cloudinary.com/ln78z8wz/video/upload/v1787982150/Andmesh_Kamaleng_-_Cinta_Luar_Biasa_lyrics.mp3"
    },

    {
      title: "Kau Lukiskan Aku",
      artist: "Dimas M",
      cover:
        "https://res.cloudinary.com/ln78z8wz/image/upload/v1787983695/images_1.jpg",
      audio:
        "https://res.cloudinary.com/ln78z8wz/video/upload/v1787982143/Dimas_M_-_kau_lukis_aku_Official_Audio_1.mp3"
    },

    {
      title: "Kita Lewati Berdua",
      artist: "Overnight",
      cover:
        "https://res.cloudinary.com/ln78z8wz/image/upload/v1787983701/ab67616d0000b273d05559e98f982b79eb508dcc.jpg",
      audio:
        "https://res.cloudinary.com/ln78z8wz/video/upload/v1787982148/Overnight_-_Kita_Lewati_Berdua_Official_Audio.mp3"
    },

    {
      title: "Resah",
      artist: "Payung Teduh",
      cover:
        "https://res.cloudinary.com/ln78z8wz/image/upload/v1787983696/ab67616d0000b2738ee03809d40edb632fadd3c0.jpg",
      audio:
        "https://res.cloudinary.com/ln78z8wz/video/upload/v1787982147/Resah.mp3"
    },
    
      {
      title: "Celengan Rindu",
      artist: "Fiersa Basari",
      cover:
        "https://res.cloudinary.com/ln78z8wz/image/upload/v1788450756/images_2.jpg",
      audio:
        "https://res.cloudinary.com/ln78z8wz/video/upload/v1788450789/Celengan_Rindu_-_Fiersa_Besari_Lirik_Lagu.mp3"
    },
    
    {
      title: "Komang",
      artist: "Raim Laode",
      cover:
        "https://res.cloudinary.com/ln78z8wz/image/upload/v1788456985/26472133-6d1b-45df-b22f-9e680fb52191.png",
      audio:
        "https://res.cloudinary.com/ln78z8wz/video/upload/v1788451553/Komang_-_Raim_Laode_Lirik_Lagu.mp3"
    },
    
    {
      title: "Dunia Kita Nanti",
      artist: "Raim Laode",
      cover:
        "https://res.cloudinary.com/ln78z8wz/image/upload/v1788456983/ab67616d0000b273a9d1f9b5d3275b0625e13e79.jpg",
      audio:
        "https://res.cloudinary.com/ln78z8wz/video/upload/v1788457093/Dunia_Yang_Nanti_-_Raim_Laode___Lirik_Lagu.mp3"
    }


  ];


  /* =====================================================
     SATU AUDIO SAJA
     BIAR NGGAK DOUBLE
  ===================================================== */

  const audio = new Audio();

  audio.preload = "metadata";

  let currentSong = -1;


  /* =====================================================
     BUKA OUR SONG DARI MENU
  ===================================================== */

  songCard.addEventListener("click", function(e) {

    e.preventDefault();
    e.stopPropagation();

    const menu =
      document.getElementById("menu");

    if (menu) {
      menu.style.display = "none";
    }

    page.style.display = "block";

    requestAnimationFrame(() => {
      page.classList.add("songPageShow");
    });

    player.style.display = "none";

    window.scrollTo(0, 0);

  });


  /* =====================================================
     KLIK LAGU
  ===================================================== */

  const songItems =
    page.querySelectorAll(".songItem");


  songItems.forEach((item, index) => {

    item.addEventListener("click", function(e) {

      e.preventDefault();
      e.stopPropagation();

      openSong(index);

    });

  });


  /* =====================================================
     BUKA PLAYER
  ===================================================== */

  function openSong(index) {

    const song = songs[index];

    if (!song) return;

    currentSong = index;


    /* hentikan lagu sebelumnya */

    audio.pause();

    audio.currentTime = 0;


    /* ganti sumber */

    audio.src = song.audio;


    /* =================================================
       PLAYER HTML
    ================================================= */

    player.innerHTML = `

      <div class="playerInner">

        <button
          class="ourSongBack"
          id="playerBack"
          type="button"
        >
          ←
        </button>


        <span class="playerLabel">
          NOW PLAYING
        </span>


        <img
          class="playerCover"
          id="playerCover"
          src="${song.cover}"
          alt="${song.title}"
        >


        <h2 class="playerTitle">
          ${song.title}
        </h2>


        <p class="playerArtist">
          ${song.artist}
        </p>


        <div class="playerControls">

          <button
            id="prevSong"
            type="button"
          >
            ⏮
          </button>


          <button
            id="playSong"
            class="mainPlay"
            type="button"
          >
            ▶
          </button>


          <button
            id="nextSong"
            type="button"
          >
            ⏭
          </button>

        </div>


        <div class="playerProgress">

          <span id="songCurrent">
            0:00
          </span>

          <input
            id="songProgress"
            type="range"
            min="0"
            max="100"
            value="0"
          >

          <span id="songDuration">
            0:00
          </span>

        </div>


        <p class="playerFooter">
          playing a little memory ♡
        </p>

      </div>

    `;


    /* tampilkan player */

    player.style.display = "block";

    requestAnimationFrame(() => {
      player.classList.add("playerShow");
    });


    /* =================================================
       BUTTON
    ================================================= */

    const playerBack =
      document.getElementById("playerBack");

    const playButton =
      document.getElementById("playSong");

    const previous =
      document.getElementById("prevSong");

    const next =
      document.getElementById("nextSong");

    const progress =
      document.getElementById("songProgress");


    /* BACK PLAYER */

    playerBack.addEventListener(
      "click",
      closePlayer
    );


    /* PLAY */

    playButton.addEventListener(
      "click",
      togglePlay
    );


    /* PREVIOUS */

    previous.addEventListener(
      "click",
      () => {

        let index = currentSong - 1;

        if (index < 0) {
          index = songs.length - 1;
        }

        openSong(index);

      }
    );


    /* NEXT */

    next.addEventListener(
      "click",
      () => {

        let index = currentSong + 1;

        if (index >= songs.length) {
          index = 0;
        }

        openSong(index);

      }
    );


    /* SEEK */

    progress.addEventListener(
      "input",
      () => {

        if (!audio.duration) return;

        audio.currentTime =
          (progress.value / 100) *
          audio.duration;

      }
    );


    /* =================================================
       AUTO PLAY
    ================================================= */

    audio.play()
      .then(() => {

        updatePlay();

      })
      .catch(() => {

        /*
          Beberapa browser memblokir autoplay.
          Kalau terjadi, tinggal tekan ▶.
        */

        updatePlay();

      });

  }


  /* =====================================================
     PLAY / PAUSE
  ===================================================== */

  function togglePlay() {

    if (audio.paused) {

      audio.play();

    } else {

      audio.pause();

    }

  }


  /* =====================================================
     UPDATE PLAY BUTTON
  ===================================================== */

  audio.addEventListener(
    "play",
    updatePlay
  );

  audio.addEventListener(
    "pause",
    updatePlay
  );


  function updatePlay() {

    const button =
      document.getElementById("playSong");

    const cover =
      document.getElementById("playerCover");


    if (button) {

      button.textContent =
        audio.paused
          ? "▶"
          : "Ⅱ";

    }


    if (cover) {

      cover.classList.toggle(
        "playing",
        !audio.paused
      );

    }

  }


  /* =====================================================
     PROGRESS
  ===================================================== */

  audio.addEventListener(
    "timeupdate",
    () => {

      const progress =
        document.getElementById(
          "songProgress"
        );

      const current =
        document.getElementById(
          "songCurrent"
        );


      if (!progress || !current) {
        return;
      }


      if (audio.duration) {

        progress.value =
          (audio.currentTime /
            audio.duration) * 100;

      }


      current.textContent =
        formatTime(
          audio.currentTime
        );

    }
  );


  /* =====================================================
     DURASI
  ===================================================== */

  audio.addEventListener(
    "loadedmetadata",
    () => {

      const duration =
        document.getElementById(
          "songDuration"
        );


      if (duration) {

        duration.textContent =
          formatTime(
            audio.duration
          );

      }

    }
  );


  /* =====================================================
     AUTO NEXT
  ===================================================== */

  audio.addEventListener(
    "ended",
    () => {

      let index =
        currentSong + 1;

      if (index >= songs.length) {
        index = 0;
      }

      openSong(index);

    }
  );


  /* =====================================================
     TUTUP PLAYER
  ===================================================== */

  function closePlayer() {

    audio.pause();

    audio.currentTime = 0;

    audio.removeAttribute("src");

    audio.load();


    player.classList.remove(
      "playerShow"
    );


    setTimeout(() => {

      player.style.display = "none";

    }, 300);

  }


  /* =====================================================
     BACK KE MENU
  ===================================================== */

  back.addEventListener(
    "click",
    function(e) {

      e.preventDefault();
      e.stopPropagation();


      /* MATIKAN MUSIK */

      audio.pause();

      audio.currentTime = 0;

      audio.removeAttribute("src");

      audio.load();


      /* tutup player */

      player.classList.remove(
        "playerShow"
      );


      /* tutup halaman */

      page.classList.remove(
        "songPageShow"
      );


      setTimeout(() => {

        player.style.display = "none";

        page.style.display = "none";


        const menu =
          document.getElementById("menu");

        if (menu) {
          menu.style.display = "block";
        }

        window.scrollTo(0, 0);

      }, 320);

    }
  );


  /* =====================================================
     KALAU TAB DITINGGAL
  ===================================================== */

  document.addEventListener(
    "visibilitychange",
    () => {

      if (document.hidden) {
        audio.pause();
      }

    }
  );


  /* =====================================================
     FORMAT WAKTU
  ===================================================== */

  function formatTime(seconds) {

    if (!Number.isFinite(seconds)) {
      return "0:00";
    }

    const minutes =
      Math.floor(seconds / 60);

    const secondsLeft =
      Math.floor(seconds % 60)
        .toString()
        .padStart(2, "0");

    return `${minutes}:${secondsLeft}`;

  }


  console.log(
    "♡ Our Song berhasil aktif — 6 lagu."
  );
  
})();


/* =============================
   OUR LETTER NAVIGATION
================================ */

const OurLetterCard =
  document.getElementById("OurLetterCard");

const OurLetterPage =
  document.getElementById("our-letter-page");

const OurLetterBack =
  document.getElementById("our-letter-back");


/* OPEN OUR LETTER */

if (OurLetterCard && OurLetterPage) {

  OurLetterCard.addEventListener("click", () => {

    const menu =
      document.getElementById("menu");

    if (menu) {
      menu.style.display = "none";
    }

    OurLetterPage.style.display = "block";

    OurLetterPage.classList.remove(
      "letter-page-exit"
    );

    void OurLetterPage.offsetWidth;

    OurLetterPage.classList.add(
      "letter-page-enter"
    );

  });

}


/* BACK TO MENU */

if (OurLetterBack && OurLetterPage) {

  OurLetterBack.addEventListener("click", () => {

    OurLetterPage.classList.remove(
      "letter-page-enter"
    );

    OurLetterPage.classList.add(
      "letter-page-exit"
    );


    setTimeout(() => {

      OurLetterPage.style.display = "none";

      OurLetterPage.classList.remove(
        "letter-page-exit"
      );

      const menu =
        document.getElementById("menu");

      if (menu) {
        menu.style.display = "block";
      }

    }, 240);

  });

}

/* =================================
   OUR LETTER → LETTER A
================================= */

const LetterCardA =
  document.getElementById("letter-card-a");

const LetterAPage =
  document.getElementById("letter-a-page");

const LetterABack =
  document.getElementById("LetterABack");


/* =============================
   OPEN LETTER A
================================ */

if (LetterCardA && LetterAPage) {

  LetterCardA.addEventListener("click", () => {

    /* Fade out Our Letter */

    if (OurLetterPage) {

      OurLetterPage.classList.remove(
        "letter-page-enter"
      );

      OurLetterPage.classList.add(
        "letter-page-exit"
      );

    }


    /* Setelah fade selesai */

    setTimeout(() => {

      if (OurLetterPage) {

        OurLetterPage.style.display = "none";

        OurLetterPage.classList.remove(
          "letter-page-exit"
        );

      }


      /* Tampilkan Surat A */

      LetterAPage.style.display = "block";

      LetterAPage.classList.remove(
        "letter-reading-exit"
      );

      void LetterAPage.offsetWidth;

      LetterAPage.classList.add(
        "letter-reading-enter"
      );


      /* Scroll ke paling atas */

      LetterAPage.scrollTop = 0;

    }, 240);

  });

}


/* ===========================
   LETTER A → OUR LETTER
============================== */

if (LetterABack && LetterAPage) {

  LetterABack.addEventListener("click", () => {

    /* Surat A fade out */

    LetterAPage.classList.remove(
      "letter-reading-enter"
    );

    LetterAPage.classList.add(
      "letter-reading-exit"
    );


    setTimeout(() => {

      LetterAPage.style.display = "none";

      LetterAPage.classList.remove(
        "letter-reading-exit"
      );


      /* Tampilkan Our Letter */

      if (OurLetterPage) {

        OurLetterPage.style.display = "block";

        OurLetterPage.classList.remove(
          "letter-page-exit"
        );

        void OurLetterPage.offsetWidth;

        OurLetterPage.classList.add(
          "letter-page-enter"
        );

      }

    }, 250);

  });

}

/* =================================
   OUR LETTER → LETTER B
================================= */

const LetterCardB =
  document.getElementById("letter-card-b");

const LetterBPage =
  document.getElementById("letter-b-page");

const LetterBBack =
  document.getElementById("LetterBBack");


/* OPEN LETTER B */

if (LetterCardB && LetterBPage) {

  LetterCardB.addEventListener("click", () => {

    /* Fade out Our Letter */

    if (OurLetterPage) {

      OurLetterPage.classList.remove(
        "letter-page-enter"
      );

      OurLetterPage.classList.add(
        "letter-page-exit"
      );

    }


    /* Tunggu animasi selesai */

    setTimeout(() => {

      if (OurLetterPage) {

        OurLetterPage.style.display = "none";

        OurLetterPage.classList.remove(
          "letter-page-exit"
        );

      }


      /* Tampilkan Letter B */

      LetterBPage.style.display = "block";

      LetterBPage.classList.remove(
        "letter-reading-exit"
      );

      void LetterBPage.offsetWidth;

      LetterBPage.classList.add(
        "letter-reading-enter"
      );


      /* Scroll ke atas */

      LetterBPage.scrollTop = 0;

    }, 240);

  });

}


/* LETTER B → OUR LETTER */

if (LetterBBack && LetterBPage) {

  LetterBBack.addEventListener("click", () => {

    /* Letter B fade out */

    LetterBPage.classList.remove(
      "letter-reading-enter"
    );

    LetterBPage.classList.add(
      "letter-reading-exit"
    );


    setTimeout(() => {

      LetterBPage.style.display = "none";

      LetterBPage.classList.remove(
        "letter-reading-exit"
      );


      /* Kembali ke Our Letter */

      if (OurLetterPage) {

        OurLetterPage.style.display = "block";

        OurLetterPage.classList.remove(
          "letter-page-exit"
        );

        void OurLetterPage.offsetWidth;

        OurLetterPage.classList.add(
          "letter-page-enter"
        );

      }

    }, 250);

  });

}

/* =================================
   OUR LETTER → LETTER C
================================= */

const LetterCardC =
  document.getElementById("letter-card-c");

const LetterCPage =
  document.getElementById("letter-c-page");

const LetterCBack =
  document.getElementById("LetterCBack");


/* OPEN LETTER C */

if (LetterCardC && LetterCPage) {

  LetterCardC.addEventListener("click", () => {

    /* Our Letter keluar */

    if (OurLetterPage) {

      OurLetterPage.classList.remove(
        "letter-page-enter"
      );

      OurLetterPage.classList.add(
        "letter-page-exit"
      );

    }


    /* Tunggu animasi Our Letter */

    setTimeout(() => {

      if (OurLetterPage) {

        OurLetterPage.style.display = "none";

        OurLetterPage.classList.remove(
          "letter-page-exit"
        );

      }


      /* Tampilkan Letter C */

      LetterCPage.style.display = "block";

      LetterCPage.classList.remove(
        "letter-reading-exit"
      );

      void LetterCPage.offsetWidth;

      LetterCPage.classList.add(
        "letter-reading-enter"
      );


      /* Scroll ke paling atas */

      LetterCPage.scrollTop = 0;

    }, 240);

  });

}


/* =============================
   LETTER C → OUR LETTER
================================= */

if (LetterCBack && LetterCPage) {

  LetterCBack.addEventListener("click", () => {

    /* Letter C keluar */

    LetterCPage.classList.remove(
      "letter-reading-enter"
    );

    LetterCPage.classList.add(
      "letter-reading-exit"
    );


    setTimeout(() => {

      LetterCPage.style.display = "none";

      LetterCPage.classList.remove(
        "letter-reading-exit"
      );


      /* Kembali ke Our Letter */

      if (OurLetterPage) {

        OurLetterPage.style.display = "block";

        OurLetterPage.classList.remove(
          "letter-page-exit"
        );

        void OurLetterPage.offsetWidth;

        OurLetterPage.classList.add(
          "letter-page-enter"
        );

      }

    }, 250);

  });

}

/* =================================
   OUR LETTER → LETTER D
================================= */

const LetterCardD =
  document.getElementById("letter-card-d");

const LetterDPage =
  document.getElementById("letter-d-page");

const LetterDBack =
  document.getElementById("LetterDBack");


/* =================================
   OPEN LETTER D
================================= */

if (LetterCardD && LetterDPage) {

  LetterCardD.addEventListener("click", () => {

    /* Our Letter keluar */

    if (OurLetterPage) {

      OurLetterPage.classList.remove(
        "letter-page-enter"
      );

      OurLetterPage.classList.add(
        "letter-page-exit"
      );

    }


    /* Tunggu animasi selesai */

    setTimeout(() => {

      if (OurLetterPage) {

        OurLetterPage.style.display = "none";

        OurLetterPage.classList.remove(
          "letter-page-exit"
        );

      }


      /* Tampilkan Letter D */

      LetterDPage.style.display = "block";

      LetterDPage.classList.remove(
        "letter-reading-exit"
      );

      void LetterDPage.offsetWidth;

      LetterDPage.classList.add(
        "letter-reading-enter"
      );


      /* Scroll ke atas */

      LetterDPage.scrollTop = 0;

    }, 240);

  });

}


/* =================================
   LETTER D → OUR LETTER
================================= */

if (LetterDBack && LetterDPage) {

  LetterDBack.addEventListener("click", () => {

    /* Letter D keluar */

    LetterDPage.classList.remove(
      "letter-reading-enter"
    );

    LetterDPage.classList.add(
      "letter-reading-exit"
    );


    /* Tunggu animasi selesai */

    setTimeout(() => {

      LetterDPage.style.display = "none";

      LetterDPage.classList.remove(
        "letter-reading-exit"
      );


      /* Kembali ke Our Letter */

      if (OurLetterPage) {

        OurLetterPage.style.display = "block";

        OurLetterPage.classList.remove(
          "letter-page-exit"
        );

        void OurLetterPage.offsetWidth;

        OurLetterPage.classList.add(
          "letter-page-enter"
        );

      }

    }, 350);

  });

}

/* =================================
   GLOBAL TAP SOUND
================================= */

const tapSound =
  document.getElementById("tapSound");

document.addEventListener("click", () => {

  if (!tapSound) return;

  tapSound.pause();
  tapSound.currentTime = 0;

  tapSound.volume = 0.45;

  tapSound.play().catch(() => {});

});

/* =================================
   OUR TIMELINE — NAVIGATION
================================= */

const OurMemoriesCard =
  document.getElementById("OurMemoriesCard");

const OurTimelinePage =
  document.getElementById("our-timeline-page");

const OurTimelineBack =
  document.getElementById("our-timeline-back");


/* =================================
   OPEN OUR TIMELINE
================================= */

if (OurMemoriesCard && OurTimelinePage) {

  OurMemoriesCard.addEventListener("click", () => {

    /* MENU KELUAR */

    const menu =
      document.getElementById("menu");

    if (menu) {
      menu.style.display = "none";
    }


    /* TAMPILKAN TIMELINE */

    OurTimelinePage.style.display = "block";

    OurTimelinePage.classList.remove(
      "timeline-page-exit"
    );

    void OurTimelinePage.offsetWidth;

    OurTimelinePage.classList.add(
      "timeline-page-enter"
    );


    /* BALIK KE ATAS */

    OurTimelinePage.scrollTop = 0;


    /* RESET SEMUA ITEM */

    const timelineItems =
      OurTimelinePage.querySelectorAll(
        ".timeline-item"
      );

    timelineItems.forEach(item => {
      item.classList.remove(
        "timeline-visible"
      );
    });

    /* AKTIFKAN OBSERVER */

    observeTimelineItems();

  });

}


/* =================================
   BACK TO MENU
================================= */

if (OurTimelineBack && OurTimelinePage) {

  OurTimelineBack.addEventListener("click", () => {

    OurTimelinePage.classList.remove(
      "timeline-page-enter"
    );

    OurTimelinePage.classList.add(
      "timeline-page-exit"
    );


    setTimeout(() => {

      OurTimelinePage.style.display = "none";

      OurTimelinePage.classList.remove(
        "timeline-page-exit"
      );


      const menu =
        document.getElementById("menu");

      if (menu) {
        menu.style.display = "block";
      }

    }, 300);

  });

}


/* =================================
   SCROLL REVEAL
================================= */

let timelineObserver = null;


function observeTimelineItems() {

  if (timelineObserver) {
    timelineObserver.disconnect();
  }


  const items =
    OurTimelinePage.querySelectorAll(
      ".timeline-item"
    );


  timelineObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "timeline-visible"
            );

          }

        });

      },
      {
        root: OurTimelinePage,
        threshold: 0.15
      }
    );


  items.forEach(item => {

    timelineObserver.observe(item);

  });

}