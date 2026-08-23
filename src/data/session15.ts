import type { SessionData } from "./types";

export const session15: SessionData = {
  id: 15,
  title: "Clones: One Sprite, Many Copies",
  subtitle: "Session 15 · New Idea Lab",
  emoji: "🧬",
  description:
    "Understand clone creation, clone behavior, and clone cleanup through tiny experiments before building a project next session.",
  color: "#8B5CF6",
  slides: [
    {
      id: 1,
      title: "Today Is a Clone Lab",
      emoji: "🧪",
      type: "review",
      image: "/images/scratch/editor-full.webp",
      content: [
        "Today we will not build Space Shooter.",
        "We will make tiny copies, watch what they do, and clean them up.",
        "Next session we will use the idea in a Weather Factory project.",
      ],
      reviewPoints: [
        "A Sprite has scripts and a costume.",
        "A loop can repeat an action.",
        "A random number can change a position.",
      ],
      mascotMessage: "One little Sprite is about to become a whole crowd.",
      teacherNotes: {
        questions: [
          "لو عايزين 30 قطرة مطر، هل نرسم 30 Sprite؟",
          "هل نريد أن نكتب نفس الكود 30 مرة؟",
        ],
        expectedAnswers: [
          "لا، نستخدم clones.",
          "لا، نستخدم Sprite واحداً ينشئ نسخاً.",
        ],
        tips: [
          "كرر أن اليوم Lab وليس Project؛ هذا يمنع الأطفال من القفز إلى Space Shooter.",
          "استخدم قلم وورقة أو مكعبات صغيرة لتمثيل الأصل والنسخ قبل Scratch.",
        ],
        transition: "نبدأ بتمييز الأصل عن النسخة.",
      },
      bgVariant: "blue",
    },
    {
      id: 2,
      title: "Original or Clone?",
      emoji: "👯",
      type: "activity",
      content: [
        "The original is the Sprite we choose in the Sprite Pane.",
        "A clone is a temporary copy made while the project runs.",
        "Copies can run their own clone script.",
      ],
      activitySteps: [
        "Choose one Sprite and call it the Original.",
        "Make three paper copies and call them Clones.",
        "Give each copy the same movement instruction.",
        "Ask which instruction had to be written three times on paper.",
      ],
      mascotMessage: "The original makes the copies; the copies do the job.",
      teacherNotes: {
        questions: [
          "أين نرى الـ Original؟",
          "متى تظهر الـ Clone؟",
        ],
        expectedAnswers: [
          "في Sprite Pane قبل تشغيل المشروع.",
          "أثناء تشغيل الكود.",
        ],
        tips: [
          "لا تستخدم كلمة duplicate كبديل دائم؛ ثبت Clone كاسم Scratch الرسمي.",
          "اطلب من طفل أن يكون Original وثلاثة أطفال Clones، ثم بدّل الأدوار.",
        ],
        transition: "ننشئ أول Clone حقيقي ببلوك واحد.",
      },
      bgVariant: "green",
    },
    {
      id: 3,
      title: "The Three Clone Blocks",
      emoji: "🧬",
      type: "content",
      image: "/images/scratch/editor-full.webp",
      content: [
        "`create clone of myself` makes a copy.",
        "`when I start as a clone` tells every copy what to do.",
        "`delete this clone` removes the copy when its job is over.",
      ],
      codeSnippet: [
        "create clone of myself",
        "",
        "when I start as a clone",
        "    say I am a copy! for 1 seconds",
        "",
        "delete this clone",
      ],
      mascotMessage: "Create, act, delete: every clone has a life cycle.",
      teacherNotes: {
        questions: [
          "أي بلوك يصنع النسخة؟",
          "أي بلوك يبدأ كود النسخة؟",
          "لماذا نحذف النسخة؟",
        ],
        expectedAnswers: [
          "create clone of myself.",
          "when I start as a clone.",
          "عندما تنتهي مهمتها حتى لا تتراكم.",
        ],
        tips: [
          "استخدم ثلاثة ألوان على السبورة: Create أزرق، Act أخضر، Delete أحمر.",
          "لا تشرح كيف يعمل Scratch داخلياً؛ دورة الحياة تكفي.",
        ],
        transition: "نجرب Create مرة واحدة ثم نرى نسخة واحدة فقط.",
      },
      bgVariant: "purple",
    },
    {
      id: 4,
      title: "Experiment 1 — One Copy",
      emoji: "1️⃣",
      type: "activity",
      image: "/images/scratch/code-area.webp",
      content: [
        "Create one clone when the flag is clicked.",
        "Give the clone a short message.",
        "The original should stay quiet.",
      ],
      codeSnippet: [
        "when green flag clicked",
        "    create clone of myself",
        "",
        "when I start as a clone",
        "    say I am the copy! for 2 seconds",
      ],
      activitySteps: [
        "Choose a sprite and add the green-flag script.",
        "Attach `create clone of myself`.",
        "Add `when I start as a clone` as a separate script.",
        "Attach a say block to the clone script.",
        "Click the flag once and count the voices.",
      ],
      mascotMessage: "One click made one temporary copy.",
      teacherNotes: {
        questions: [
          "كم نسخة صنعنا؟",
          "أي script قال الجملة؟",
        ],
        expectedAnswers: [
          "نسخة واحدة.",
          "when I start as a clone.",
        ],
        tips: [
          "إذا ظهر الكلام من الأصل أيضاً، تحقق أن الطفل وضع say تحت clone hat وليس تحت green flag.",
          "شغل العلم مرة ثانية ولاحظ أن Scratch ينشئ نسخة جديدة في التشغيل الجديد.",
        ],
        transition: "لو أردنا خمس نسخ، نكرر أمر Create خمس مرات.",
      },
      bgVariant: "orange",
    },
    {
      id: 5,
      title: "Experiment 2 — Five Copies",
      emoji: "5️⃣",
      type: "activity",
      content: [
        "Put the create block inside `repeat 5`.",
        "One instruction now makes five copies.",
        "Change the clone message so each copy is easy to count.",
      ],
      codeSnippet: [
        "when green flag clicked",
        "    repeat 5",
        "        create clone of myself",
        "",
        "when I start as a clone",
        "    say Copy! for 1 seconds",
      ],
      activitySteps: [
        "Wrap `create clone of myself` inside `repeat 5`.",
        "Run the project and count the copies.",
        "Change 5 to 2 and predict the result.",
        "Change it back to 5 before the next experiment.",
      ],
      mascotMessage: "A loop tells the Original how many copies to make.",
      teacherNotes: {
        questions: [
          "ما الذي يحدد عدد النسخ؟",
          "هل repeat موجود على النسخة أم الأصل؟",
        ],
        expectedAnswers: [
          "الرقم داخل repeat.",
          "على الأصل الذي يصنع النسخ.",
        ],
        tips: [
          "اجعل الطفل يضع إصبعه على مكان repeat وcreate قبل التشغيل.",
          "لا تضف forever بعد repeat بعد؛ نريد عددًا واضحاً يمكن توقعه.",
        ],
        transition: "النسخ ظهرت فوق بعضها. نغير مكان كل نسخة.",
      },
      bgVariant: "blue",
    },
    {
      id: 6,
      title: "Experiment 3 — Copies in New Places",
      emoji: "🎲",
      type: "activity",
      image: "/images/scratch/stage-100-50.webp",
      content: [
        "A clone can move to a new random place when it starts.",
        "The original stays hidden so we only see the copies.",
        "Run the flag twice: the pattern should change.",
      ],
      codeSnippet: [
        "when green flag clicked",
        "    hide",
        "    repeat 5",
        "        create clone of myself",
        "",
        "when I start as a clone",
        "    go to x: (pick random -220 to 220) y: (pick random -150 to 150)",
        "    show",
      ],
      activitySteps: [
        "Add `hide` before repeat on the Original.",
        "In the clone script, add random x and y.",
        "Add `show` after the random position.",
        "Run the flag and look at the pattern.",
        "Run it again and compare the two patterns.",
      ],
      mascotMessage: "Same code, different places: the copies make a new pattern each time.",
      teacherNotes: {
        questions: [
          "لماذا نضع random داخل clone script؟",
          "ماذا يحدث لو وضعنا go to قبل create؟",
        ],
        expectedAnswers: [
          "حتى كل نسخة تختار مكانها عند بدايتها.",
          "الأصل فقط سيتحرك قبل صنع النسخ.",
        ],
        tips: [
          "لا تدخل في حدود دقيقة؛ استخدم -220 إلى 220 و-150 إلى 150 كنطاق آمن.",
          "إذا لم تظهر النسخ، ذكّرهم أن Original مخفي وأن clone يحتاج show.",
        ],
        transition: "النسخ تتحرك، لكن لا بد أن تعرف متى تنتهي.",
      },
      bgVariant: "green",
    },
    {
      id: 7,
      title: "Experiment 4 — A Clone Has a Job",
      emoji: "🏃",
      type: "activity",
      content: [
        "Give each clone a small job: move down until it reaches the floor.",
        "The loop belongs in the clone script.",
        "The clone deletes itself after the job.",
      ],
      codeSnippet: [
        "when I start as a clone",
        "    go to x: (pick random -220 to 220) y: 170",
        "    show",
        "    repeat until <(y position) < -170>",
        "        change y by -8",
        "    delete this clone",
      ],
      activitySteps: [
        "Add a starting position at the top.",
        "Add `repeat until y position < -170`.",
        "Inside it, add `change y by -8`.",
        "After the loop, add `delete this clone`.",
        "Run the flag and watch one clone finish its job.",
      ],
      mascotMessage: "When the job is done, the clone cleans itself up.",
      teacherNotes: {
        questions: [
          "ما job النسخة هنا؟",
          "متى نحذفها؟",
        ],
        expectedAnswers: [
          "النزول إلى أسفل الشاشة.",
          "بعد وصولها إلى الأرض.",
        ],
        tips: [
          "لو repeat until سبقته في المنهج، ذكّرهم أنه سؤال يراقب الوصول وليس فكرة جديدة اليوم.",
          "اجعلهم يرسمون سهم الكود: start → fall → bottom → delete.",
        ],
        transition: "نصنع الآن الخطأ الأكثر شيوعاً: النسخ التي لا تختفي.",
      },
      bgVariant: "purple",
    },
    {
      id: 8,
      title: "Debug: Endless Copies",
      emoji: "🐞",
      type: "game",
      content: [
        "Remove `delete this clone` for ten seconds.",
        "Watch what happens after many copies finish falling.",
        "Put the block back at the end of the clone job.",
      ],
      codeSnippet: [
        "BUG",
        "when I start as a clone",
        "    repeat until <bottom>",
        "        change y by -8",
        "    (delete this clone is missing)",
        "",
        "FIX",
        "    delete this clone",
      ],
      activitySteps: [
        "Predict whether the project will stay fast.",
        "Run the project for ten seconds.",
        "Explain what happened to finished copies.",
        "Restore `delete this clone`.",
        "Run again and compare.",
      ],
      mascotMessage: "Finished clones must leave the stage and the project.",
      teacherNotes: {
        questions: [
          "هل النسخة ما زالت تؤدي دوراً بعد الوصول إلى الأرض؟",
          "ما البلوك الذي ينهي حياتها؟",
        ],
        expectedAnswers: [
          "لا، لكنّها ما زالت موجودة إذا لم نحذفها.",
          "delete this clone.",
        ],
        tips: [
          "لا تقل إن الكمبيوتر ينهار؛ قل إن النسخ تتراكم وقد تجعل المشروع بطيئاً.",
          "هذه تجربة قصيرة. أعد البلوك فوراً حتى لا يظل المشروع مزعجاً.",
        ],
        transition: "نراجع دورة الحياة في سؤالين ثم نترك المشروع للجلسة القادمة.",
      },
      bgVariant: "orange",
    },
    {
      id: 9,
      title: "Quiz: Put the Life Cycle in Order",
      emoji: "❓",
      type: "quiz",
      content: ["Choose the correct order for a clone."],
      quiz: {
        question: "What is the best order for a clone’s life?",
        options: [
          "delete → create → act",
          "create → act → delete",
          "act → delete → create",
          "create → delete → act",
        ],
        correctIndex: 1,
      },
      mascotMessage: "A clone is born, works, then leaves.",
      teacherNotes: {
        questions: [
          "أي كلمة تعني الولادة؟",
          "ماذا يأتي بعد أن تنتهي المهمة؟",
        ],
        expectedAnswers: [
          "create.",
          "delete.",
        ],
        tips: [
          "استخدم حركة جسم: افتح اليد للـ create، تحرك للـ act، أغلق اليد للـ delete.",
          "لا تشرح أن clone يمكن أن يظل موجوداً؛ هذا استثناء غير مطلوب.",
        ],
        transition: "نختم بتحديد ما سيبنيه كل طفل في Project Weather Factory.",
      },
      bgVariant: "blue",
    },
    {
      id: 10,
      title: "Choose Your Weather",
      emoji: "🌧️",
      type: "activity",
      image: "/images/scratch/stage-bubble.webp",
      content: [
        "Choose one: rain, snow, stars, or confetti.",
        "The code pattern stays the same.",
        "Only the costume, speed, and backdrop change next session.",
      ],
      activitySteps: [
        "Write your weather choice on a sticky note.",
        "Draw one original Sprite and three copies.",
        "Write the clone job: start, move, finish, delete.",
        "Bring the plan to Project Session 16.",
      ],
      mascotMessage: "Same clone engine, different weather idea.",
      teacherNotes: {
        questions: [
          "أي جزء يغير شكل الطقس؟",
          "أي جزء لا يتغير مهما اخترنا؟",
        ],
        expectedAnswers: [
          "costume أو backdrop.",
          "create → clone job → delete.",
        ],
        tips: [
          "الاختيار هنا يحمسهم، لكنه ليس وقت فتح مكتبة sprites طويلاً.",
          "إن اختلفت الأفكار، كلهم سيبدأون بنفس Weather Factory ثم يخصصونها.",
        ],
        transition: "نعمل Exit Ticket قصيراً قبل نهاية الوقت.",
      },
      bgVariant: "green",
    },
    {
      id: 11,
      title: "Exit Ticket",
      emoji: "🎫",
      type: "review",
      content: ["Answer these without opening the project."],
      reviewPoints: [
        "The Original creates a clone with `create clone of myself`.",
        "The clone starts its job at `when I start as a clone`.",
        "The clone leaves with `delete this clone`.",
      ],
      flipCards: [
        {
          frontEmoji: "🧬",
          frontText: "create clone",
          backEmoji: "👯",
          backText: "Make a temporary copy",
        },
        {
          frontEmoji: "▶️",
          frontText: "start as clone",
          backEmoji: "🏃",
          backText: "Run the copy’s job",
        },
        {
          frontEmoji: "🧹",
          frontText: "delete clone",
          backEmoji: "✅",
          backText: "Remove the finished copy",
        },
      ],
      mascotMessage: "Next time one drop becomes a whole weather system.",
      teacherNotes: {
        questions: [
          "هل الـ clone هو الـ Original؟",
          "ما أول سؤال تسأله عندما تتراكم النسخ؟",
        ],
        expectedAnswers: [
          "لا، هي نسخة مؤقتة منه.",
          "هل يوجد delete this clone بعد انتهاء المهمة؟",
        ],
        tips: [
          "اختبر الفهم بالكلام والحركة، لا بإعادة فتح Scratch في آخر دقيقة.",
          "احفظ اختيار الطقس لكل طفل لتبدأ به Session 16.",
        ],
        transition: "Session 15 انتهت: شرحنا Clones بتجارب قصيرة. التطبيق الكامل في الجلسة القادمة.",
      },
      bgVariant: "purple",
    },
  ],
};
