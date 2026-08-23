import type { SessionData } from "./types";

export const session11: SessionData = {
  id: 11,
  title: "Variables: Give Data a Name",
  subtitle: "Session 11 · New Idea Lab",
  emoji: "📦",
  description:
    "Learn what a variable is through simple box experiments, then practice set, change, input, and output without building a full project.",
  color: "#10B981",
  slides: [
    {
      id: 1,
      title: "Today Is an Idea Lab",
      emoji: "🧪",
      type: "review",
      image: "/images/scratch/editor-full.webp",
      content: [
        "Today we are not upgrading Maze yet.",
        "We will discover how a program remembers one piece of information.",
        "Next session we will use the idea to build a Scoreboard Clicker.",
      ],
      reviewPoints: [
        "A condition asks a yes/no question.",
        "A loop repeats a check or an action.",
        "A program may need to remember a changing value.",
      ],
      mascotMessage: "Before we build a score, we need to understand the box that stores it.",
      teacherNotes: {
        questions: [
          "إيه حاجات اللعبة ممكن تحتاج تفتكرها؟",
          "هل الكلام في speech bubble هو نفس تخزين رقم؟",
        ],
        expectedAnswers: [
          "النقاط، الأرواح، الوقت، الاسم.",
          "لا، الـ speech bubble يظهر فقط، لكن التخزين يحتفظ بقيمة نستخدمها بعدين.",
        ],
        tips: [
          "لا تبدأ بكلمة variable. ابدأ بالمشكلة: نريد أن تتذكر اللعبة رقماً.",
          "أكد من البداية أن التطبيق الكامل سيكون في Session 12.",
        ],
        transition: "سنستخدم صندوقاً حقيقياً لتمثيل المكان الذي يحتفظ بالقيمة.",
      },
      bgVariant: "blue",
    },
    {
      id: 2,
      title: "The Real-Life Box",
      emoji: "📦",
      type: "activity",
      content: [
        "Write `score` on a paper box.",
        "Put 0 inside.",
        "Replace it with 1, then 2.",
        "The label stays the same; the value changes.",
      ],
      activitySteps: [
        "Show an empty box labelled score.",
        "Ask the children what value should go inside at the start.",
        "Put 0 inside the box.",
        "Pretend to collect a coin and replace 0 with 1.",
        "Ask what stayed the same and what changed.",
      ],
      mascotMessage: "My name is score. My value can change.",
      teacherNotes: {
        questions: [
          "إيه اسم الصندوق؟",
          "إيه اللي اتغير: الاسم ولا الرقم؟",
        ],
        expectedAnswers: [
          "score.",
          "الرقم فقط.",
        ],
        tips: [
          "كرر الجملة: label ثابت، value تتغير.",
          "لا تشرح memory أو data type؛ الصندوق والنقطة كافيان.",
        ],
        transition: "في Scratch نسمي هذا الصندوق Variable.",
      },
      bgVariant: "green",
    },
    {
      id: 3,
      title: "New Word: Variable",
      emoji: "🔤",
      type: "content",
      image: "/images/scratch/editor-full.webp",
      content: [
        "A variable is a named box that stores one value.",
        "The name tells us what the value means.",
        "The value can change while the project runs.",
      ],
      newWord: {
        word: "variable",
        pronunciation: "VAIR-ee-uh-bul",
        meaning: "A named box that stores a value that can change",
        example: "The score variable stores the player’s points.",
      },
      codeSnippet: [
        "name: score",
        "value at start: 0",
        "value later: 1, 2, 3...",
      ],
      mascotMessage: "A useful name helps us know what the box remembers.",
      teacherNotes: {
        questions: [
          "لو الصندوق فيه عدد النقاط، نسميه إيه؟",
          "هل variable لازم تكون score دائماً؟",
        ],
        expectedAnswers: [
          "score.",
          "لا، ممكن lives أو time أو playerName.",
        ],
        tips: [
          "اعرض أمثلة اسمها lives وtime، لكن لا تنشئها كلها في Scratch الآن.",
          "اسأل الطفل أن يقترح اسماً واضحاً، ثم ارفض أسماء مثل x أو box1 بلطف لأنها غير مفهومة.",
        ],
        transition: "نحتاج أمرين: أمر يحدد قيمة البداية، وأمر يغير القيمة.",
      },
      bgVariant: "purple",
    },
    {
      id: 4,
      title: "Set Means Choose a Value",
      emoji: "0️⃣",
      type: "content",
      content: [
        "`set score to 0` puts a chosen value in the box.",
        "Use it at the beginning to start clean.",
        "Set can also replace an old value with a new one.",
      ],
      codeSnippet: [
        "when green flag clicked",
        "set score to 0",
        "",
        "score: 7 → set score to 0 → score: 0",
      ],
      mascotMessage: "Set is like putting a chosen number inside the box.",
      teacherNotes: {
        questions: [
          "لو الصندوق فيه 7 وكتبنا set score to 0، هيبقى فيه كام؟",
          "ليه نستخدم set في بداية اللعبة؟",
        ],
        expectedAnswers: [
          "0.",
          "عشان نبدأ من قيمة نظيفة.",
        ],
        tips: [
          "استخدم بطاقات أرقام، وبدل الرقم داخل الصندوق أمامهم.",
          "لا تقارن set بـ change قبل أن ينفذوا تجربة set شفهياً.",
        ],
        transition: "نجرب البلوك على Sprite صغير، وليس داخل Maze.",
      },
      bgVariant: "orange",
    },
    {
      id: 5,
      title: "Experiment 1 — Set and Watch",
      emoji: "👀",
      type: "activity",
      image: "/images/scratch/code-area.webp",
      content: [
        "Make a variable called `testNumber`.",
        "Set it to 5 when the flag is clicked.",
        "Make the Sprite say the value.",
      ],
      activitySteps: [
        "Create `testNumber` for all sprites.",
        "Add `when green flag clicked`.",
        "Add `set testNumber to 5`.",
        "Add `say testNumber for 2 seconds`.",
        "Change 5 to 9 and predict the new speech bubble.",
      ],
      codeSnippet: [
        "when green flag clicked",
        "set testNumber to 5",
        "say testNumber for 2 seconds",
      ],
      mascotMessage: "The Sprite can read the value stored in the box.",
      teacherNotes: {
        questions: [
          "ما الذي سيقوله Sprite؟",
          "لو غيرنا 5 إلى 9، هل نغير say block؟",
        ],
        expectedAnswers: [
          "5.",
          "لا، القيمة فقط تتغير.",
        ],
        tips: [
          "هذا اختبار صغير ليثبت أن say يمكنه قراءة variable.",
          "احذف testNumber في نهاية التجربة أو اتركه حتى نهاية الحصة كمختبر.",
        ],
        transition: "Set يختار قيمة. Change يعدل القيمة الحالية.",
      },
      bgVariant: "blue",
    },
    {
      id: 6,
      title: "Change Means Update",
      emoji: "➕",
      type: "content",
      content: [
        "`change score by 1` adds 1 to the current value.",
        "If score is 4, it becomes 5.",
        "Change can also subtract: `change lives by -1`.",
      ],
      codeSnippet: [
        "score: 4",
        "change score by 1",
        "score: 5",
        "",
        "lives: 3",
        "change lives by -1",
        "lives: 2",
      ],
      mascotMessage: "Change looks at the old value, then updates it.",
      teacherNotes: {
        questions: [
          "لو score = 4 وعملنا change by 1، النتيجة كام؟",
          "كيف ننقص lives حياة واحدة؟",
        ],
        expectedAnswers: [
          "5.",
          "change lives by -1.",
        ],
        tips: [
          "استخدم أصابع اليد للعد من 4 إلى 5، ومن 3 إلى 2.",
          "لا تستخدم score في لعبة كاملة بعد؛ ركز على معنى update.",
        ],
        transition: "نرى الفرق بين Set وChange في تجربة رقمية سريعة.",
      },
      bgVariant: "green",
    },
    {
      id: 7,
      title: "Experiment 2 — Set or Change?",
      emoji: "⚖️",
      type: "activity",
      image: "/images/scratch/stage-bubble.webp",
      content: [
        "Start `testNumber` at 0.",
        "Change it by 1 three times.",
        "Then set it to 10.",
        "Ask: which command replaced the value?",
      ],
      activitySteps: [
        "Set testNumber to 0 at the green flag.",
        "Add change testNumber by 1 three times.",
        "Make the Sprite say testNumber.",
        "Add set testNumber to 10 and say it again.",
        "Predict both speech bubbles before running.",
      ],
      codeSnippet: [
        "when green flag clicked",
        "set testNumber to 0",
        "change testNumber by 1",
        "change testNumber by 1",
        "change testNumber by 1",
        "say testNumber for 2 seconds  // 3",
        "set testNumber to 10",
        "say testNumber for 2 seconds  // 10",
      ],
      mascotMessage: "Change adds to the old value. Set replaces the old value.",
      teacherNotes: {
        questions: [
          "ما القيمة بعد الثلاثة change؟",
          "أي أمر جعلها 10 مباشرة؟",
        ],
        expectedAnswers: [
          "3.",
          "set.",
        ],
        tips: [
          "لو كتابة الرقم في say ليست واضحة بصرياً، اجعل الطفل يراقب variable monitor على Stage.",
          "هذه آخر تجربة برمجية طويلة في جلسة الشرح؛ بعدها ننتقل إلى Input/Output.",
        ],
        transition: "البرنامج لا يخزن فقط؛ يستطيع أيضاً أن يسأل اللاعب.",
      },
      bgVariant: "orange",
    },
    {
      id: 8,
      title: "Input and Output",
      emoji: "🔁",
      type: "content",
      content: [
        "Input is information the player gives the program.",
        "`ask and wait` collects an answer.",
        "Output is what the program shows or says.",
        "A variable can store the information for later.",
      ],
      codeSnippet: [
        "ask What is your name? and wait",
        "set playerName to answer",
        "say (join Hello,  playerName) for 2 seconds",
      ],
      mascotMessage: "Ask is input. Say is output. The variable connects them.",
      teacherNotes: {
        questions: [
          "ما الـ input في المثال؟",
          "ما الـ output؟",
          "أين نخزن الاسم؟",
        ],
        expectedAnswers: [
          "إجابة اللاعب.",
          "Hello + الاسم في speech bubble.",
          "في playerName variable.",
        ],
        tips: [
          "نفذ السؤال على طفل واحد فقط، ولا تطلب من الجميع كتابة برنامج greeting كامل.",
          "استخدم سهمين على السبورة: Player → Input → Variable → Output.",
        ],
        transition: "نجرب Input/Output كدقيقة واحدة، ثم نختبر فهم الجلسة.",
      },
      bgVariant: "purple",
    },
    {
      id: 9,
      title: "Mini Experiment — Name Badge",
      emoji: "🏷️",
      type: "activity",
      image: "/images/scratch/editor-full.webp",
      content: [
        "Create `playerName`.",
        "Ask for the player’s name.",
        "Store `answer` in playerName.",
        "Say hello using the stored value.",
      ],
      activitySteps: [
        "Create a variable named playerName.",
        "Add `ask What is your name? and wait`.",
        "Add `set playerName to answer`.",
        "Add `say (join Hello, playerName)`.",
        "Run it once and explain the path of the name.",
      ],
      codeSnippet: [
        "when green flag clicked",
        "ask What is your name? and wait",
        "set playerName to answer",
        "say (join Hello, playerName) for 2 seconds",
      ],
      mascotMessage: "The program asked, remembered, and answered.",
      teacherNotes: {
        questions: [
          "من أين جاءت قيمة playerName؟",
          "هل say هو الذي يخزن الاسم؟",
        ],
        expectedAnswers: [
          "من answer بعد ask.",
          "لا، set هو الذي يخزنه في variable.",
        ],
        tips: [
          "لو join جديد عليهم، اشرح فقط أنه يلصق كلمتين؛ لا تتوسع في النصوص.",
          "احتفظ بهذه التجربة منفصلة عن score حتى لا تختلط فكرتان في ذهن الطفل.",
        ],
        transition: "دلوقتي نرى إذا كان الطفل يميز بين الاسم والقيمة والأمر.",
      },
      bgVariant: "blue",
    },
    {
      id: 10,
      title: "Quiz: Choose the Command",
      emoji: "❓",
      type: "quiz",
      content: ["Pick the block that resets a score at the start."],
      quiz: {
        question: "Which block should run when the green flag starts a new game?",
        options: ["change score by 1", "set score to 0", "say score", "ask What is your name? and wait"],
        correctIndex: 1,
      },
      mascotMessage: "A new game needs a clean starting value.",
      teacherNotes: {
        questions: [
          "هل نريد إضافة نقطة أم اختيار بداية؟",
          "ما كلمة البداية في الكود؟",
        ],
        expectedAnswers: [
          "اختيار بداية.",
          "set.",
        ],
        tips: [
          "اطلب من الطفل تمثيل set بوضع بطاقة 0 داخل الصندوق.",
          "لا تجعل الاختبار حفظاً؛ اسأل عن السبب بعد الإجابة.",
        ],
        transition: "سؤال أخير عن Change ثم نكتب خطة Project الجلسة القادمة.",
      },
      bgVariant: "green",
    },
    {
      id: 11,
      title: "Quiz: Read the Number",
      emoji: "🧠",
      type: "quiz",
      content: ["Predict the value after the commands run."],
      quiz: {
        question: "If score starts at 0 and changes by 1 three times, what is score?",
        options: ["0", "1", "3", "10"],
        correctIndex: 2,
      },
      mascotMessage: "Count the updates one by one.",
      teacherNotes: {
        questions: [
          "كم مرة حدث change؟",
          "هل change يستبدل القيمة أم يضيف إليها؟",
        ],
        expectedAnswers: [
          "ثلاث مرات.",
          "يضيف أو يطرح من القيمة الحالية.",
        ],
        tips: [
          "استخدم 0 على السبورة ثم اكتب الأسهم: 0 → 1 → 2 → 3.",
          "لو أجاب الطفل 1، أعد التجربة بالأصابع بدلاً من شرح جديد.",
        ],
        transition: "نختم بقائمة واضحة لما سيطبقه الأطفال في Project Session 12.",
      },
      bgVariant: "orange",
    },
    {
      id: 12,
      title: "Project Preview: Scoreboard Clicker",
      emoji: "👀",
      type: "review",
      content: ["Next session you will use today’s blocks in one small project."],
      reviewPoints: [
        "Create a score variable.",
        "Reset it with set score to 0.",
        "Use change score by 1 when the player clicks.",
        "Show the score and test it with a partner.",
      ],
      codeSnippet: [
        "Today: understand the box",
        "Next session: build the Scoreboard Clicker",
        "No new variable idea will be added there",
      ],
      mascotMessage: "Today we learned the tool. Next time we will build with it.",
      teacherNotes: {
        questions: [
          "ما الذي يجب أن يحدث عند بداية Project؟",
          "ما الحدث الذي يمكن أن يزيد score في Clicker؟",
        ],
        expectedAnswers: [
          "set score to 0.",
          "when this sprite clicked.",
        ],
        tips: [
          "لا تبدأ تنفيذ Clicker في آخر الحصة؛ اكتفِ بالتوقع ووصف الخطة.",
          "اطلب من الطفل أن يرسم زرّاً ويكتب تحته change score by 1 كتحضير بسيط.",
        ],
        transition: "Session 11 انتهت: فهمنا Variable قبل استخدامه في مشروع.",
      },
      bgVariant: "blue",
    },
    {
      id: 13,
      title: "Homework: Draw the Box",
      emoji: "🏠",
      type: "homework",
      image: "/images/scratch/stage-bubble.webp",
      content: [
        "Draw a box labelled `score`.",
        "Show it changing from 0 to 1 to 2.",
        "Write one sentence explaining set.",
        "Write one sentence explaining change.",
        "Do not build the project yet.",
      ],
      activitySteps: [
        "Draw the empty variable box.",
        "Put 0, then 1, then 2 inside it.",
        "Write: set chooses a value.",
        "Write: change updates the current value.",
        "Bring the paper to Project Session 12.",
      ],
      mascotMessage: "A clear picture can explain code before we open Scratch.",
      teacherNotes: {
        questions: [
          "ما الذي سيحضره الطفل للجلسة القادمة؟",
          "هل الواجب يحتاج Scratch؟",
        ],
        expectedAnswers: [
          "رسم الصندوق والقيمة المتغيرة.",
          "لا، يمكن أن يكون على ورقة.",
        ],
        tips: [
          "الواجب تثبيت للفكرة وليس مشروعاً منزلياً.",
          "إذا أراد طفل فتح Scratch، اتركه يجرب لكن لا تجعله شرطاً.",
        ],
        transition: "في الجلسة القادمة سنحول الصندوق إلى Scoreboard Clicker يعمل.",
      },
      bgVariant: "purple",
    },
  ],
};
