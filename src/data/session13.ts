import type { SessionData } from "./types";

export const session13: SessionData = {
  id: 13,
  title: "Broadcast: Talk to Sprites",
  subtitle: "Session 13 · New Idea Lab",
  emoji: "📣",
  description:
    "Understand how sprites send messages to each other through tiny experiments before building a project next session.",
  color: "#3B82F6",
  slides: [
    {
      id: 1,
      title: "Today Is an Idea Lab",
      emoji: "🧪",
      type: "review",
      image: "/images/scratch/editor-full.webp",
      content: [
        "Today we are not building a big game.",
        "We will run small experiments and ask: who heard the message?",
        "Next session we will use the idea to build an Interactive Story.",
      ],
      reviewPoints: [
        "A sprite has its own scripts.",
        "An event tells a script when to start.",
        "A variable can remember a value.",
      ],
      mascotMessage: "Today we learn one new way for sprites to communicate.",
      teacherNotes: {
        questions: [
          "لو عندنا شخصيتين، إزاي واحدة تقول للتانية إن دورها بدأ؟",
          "هل نحتاج أن نضع كود الشخصيتين في نفس المكان؟",
        ],
        expectedAnswers: [
          "نبعت رسالة أو نستخدم حدثاً.",
          "لا، كل Sprite له كوده.",
        ],
        tips: [
          "سمِّ الحصة Idea Lab بوضوح؛ لا تعدهم بمشروع اليوم حتى لا يسبقوا الشرح.",
          "ابدأ بتجربة صغيرة على Scratch مفتوح، ولا تعرض قصة طويلة قبل أن يفهموا الرسالة.",
        ],
        transition: "هنمثل الفكرة في الفصل الأول قبل ما نفتح بلوكات جديدة.",
      },
      bgVariant: "blue",
    },
    {
      id: 2,
      title: "Human Broadcast",
      emoji: "🗣️",
      type: "activity",
      content: [
        "One child is the Director.",
        "The Director says: SCENE ONE!",
        "Only children with the SCENE ONE card act.",
        "This is exactly what a broadcast does.",
      ],
      activitySteps: [
        "Give one child a Director card and the other child a Hero card.",
        "Say a message that the Hero is not listening for.",
        "Say `SCENE ONE!` and let the Hero act.",
        "Ask: who decided when the Hero started?",
      ],
      mascotMessage: "A message is a signal, not a speech bubble.",
      teacherNotes: {
        questions: [
          "هل كل الأطفال يتحركون عند أي كلمة؟",
          "ما الذي يجعل الطفل الصحيح يبدأ؟",
        ],
        expectedAnswers: [
          "لا، الذي ينتظر الرسالة فقط.",
          "اسم الرسالة يطابق البطاقة.",
        ],
        tips: [
          "لا تستخدم كلمة broadcast أولاً؛ استخدم كلمة signal ثم سمِّها بعد أن يعيشوا التجربة.",
          "بدّل الأدوار حتى لا يتحول النشاط إلى شرح للطفل الأسرع فقط.",
        ],
        transition: "نحول Director إلى Sprite ونحول النداء إلى بلوك أصفر.",
      },
      bgVariant: "green",
    },
    {
      id: 3,
      title: "The Message Block",
      emoji: "📨",
      type: "content",
      image: "/images/scratch/events-palette.webp",
      content: [
        "`broadcast` sends a named message.",
        "The message does not appear on the Stage.",
        "A different Sprite can listen for the same name.",
        "The name must match exactly.",
      ],
      codeSnippet: [
        "broadcast scene1",
        "",
        "when I receive scene1",
        "    say My turn! for 2 seconds",
      ],
      mascotMessage: "I send the signal; another sprite decides what to do.",
      teacherNotes: {
        questions: [
          "هل كلمة scene1 ستظهر للمشاهد؟",
          "ماذا يحدث إذا كان المرسل يقول scene1 والمستقبل ينتظر scene2؟",
        ],
        expectedAnswers: [
          "لا، هي اسم إشارة فقط.",
          "المستقبل لن يبدأ.",
        ],
        tips: [
          "اكتب scene1 على بطاقتين متطابقتين وscene2 على بطاقتين مختلفتين لتوضيح المطابقة.",
          "خلي الأطفال يقرأوا البلوك كجملة: broadcast scene1 = ابعت إشارة اسمها scene1.",
        ],
        transition: "ننفذ أصغر تجربة: Sprite يرسل، وSprite يستقبل.",
      },
      bgVariant: "purple",
    },
    {
      id: 4,
      title: "Experiment 1 — One Message",
      emoji: "1️⃣",
      type: "activity",
      image: "/images/scratch/code-area.webp",
      content: [
        "Make one Sprite send `hello`.",
        "Make another Sprite listen for `hello`.",
        "Do not add a story yet.",
      ],
      codeSnippet: [
        "DIRECTOR",
        "when green flag clicked",
        "    broadcast hello",
        "",
        "FRIEND",
        "when I receive hello",
        "    say Hello, Director! for 2 seconds",
      ],
      activitySteps: [
        "Choose two sprites and rename them Director and Friend.",
        "On Director, add the green-flag event and `broadcast hello`.",
        "On Friend, add `when I receive hello`.",
        "Attach a `say` block to Friend.",
        "Click the flag and point to the moment Friend starts.",
      ],
      mascotMessage: "One message, one reaction. That is the whole experiment.",
      teacherNotes: {
        questions: [
          "أي Sprite أرسل الرسالة؟",
          "أي event بدأ Friend؟",
        ],
        expectedAnswers: [
          "Director.",
          "when I receive hello.",
        ],
        tips: [
          "بعد كل إضافة شغل العلم. لا تسمح لهم بكتابة السكربتين دفعة واحدة دون اختبار.",
          "لو Friend لا يتكلم، لا تصلح الكود مباشرة؛ اسأل عن اسم الرسالة في الطرفين.",
        ],
        transition: "نجحت رسالة واحدة. ماذا لو كان هناك رسالتان مختلفتان؟",
      },
      bgVariant: "orange",
    },
    {
      id: 5,
      title: "Experiment 2 — Two Signals",
      emoji: "2️⃣",
      type: "activity",
      content: [
        "Add a second message called `bye`.",
        "The same Sprite can listen for `hello` and `bye`.",
        "Each message starts a different response.",
      ],
      codeSnippet: [
        "when green flag clicked",
        "    broadcast hello and wait",
        "    broadcast bye",
        "",
        "when I receive hello",
        "    say Welcome! for 1 seconds",
        "",
        "when I receive bye",
        "    say Goodbye! for 1 seconds",
      ],
      activitySteps: [
        "Create a new message named `bye`.",
        "Add `when I receive bye` as a separate script.",
        "Give it a different say block.",
        "Send hello first, then bye.",
        "Ask the children to predict the order before clicking the flag.",
      ],
      mascotMessage: "One Sprite can listen for more than one message.",
      teacherNotes: {
        questions: [
          "هل نضع hello وbye في نفس القبعة؟",
          "أي رسالة ستصل أولاً؟",
        ],
        expectedAnswers: [
          "لا، لكل رسالة when I receive منفصل.",
          "hello ثم bye.",
        ],
        tips: [
          "استخدم separate scripts بصرياً. لا تدخل في threads أو concurrency.",
          "اختبر `broadcast` العادي أولاً، ثم `and wait` فقط لتوضيح أن المرسل ينتظر المستقبل.",
        ],
        transition: "دلوقتي نسأل: ما الفرق بين broadcast وbroadcast and wait؟",
      },
      bgVariant: "blue",
    },
    {
      id: 6,
      title: "Broadcast or Broadcast and Wait?",
      emoji: "⏱️",
      type: "content",
      content: [
        "`broadcast` sends the message and keeps going.",
        "`broadcast and wait` sends the message and pauses until the receiver finishes.",
        "Use `and wait` when order matters.",
      ],
      codeSnippet: [
        "broadcast scene1",
        "switch backdrop to Scene2",
        "",
        "broadcast scene1 and wait",
        "switch backdrop to Scene2",
      ],
      mascotMessage: "And wait means: finish your turn before I continue.",
      teacherNotes: {
        questions: [
          "لو أرسلت الرسالة ثم غيرت الخلفية فوراً، هل المستقبل انتهى؟",
          "متى نحتاج أن ننتظر؟",
        ],
        expectedAnswers: [
          "ليس بالضرورة.",
          "عندما نريد ترتيب المشهد أو الحوار.",
        ],
        tips: [
          "مثّلها بحوار: broadcast عادي = المدرس قال ابدأ ومشى، and wait = المدرس ينتظر نهاية النشاط.",
          "لا تحول الفرق إلى تعريف حفظ؛ نفذ النسختين أمامهم وشاهد التداخل.",
        ],
        transition: "نرسم خريطة بسيطة للرسالة قبل أن نحولها إلى قصة.",
      },
      bgVariant: "purple",
    },
    {
      id: 7,
      title: "Message Map on Paper",
      emoji: "🗺️",
      type: "activity",
      content: [
        "Draw three cards: title, scene1, ending.",
        "Write who sends each message.",
        "Write which Sprite receives it.",
        "No Scratch code yet: just plan the conversation.",
      ],
      activitySteps: [
        "Write `title`, `scene1`, and `ending` on three cards.",
        "Draw arrows from Director to the message cards.",
        "Write one Sprite name next to each message.",
        "Read the map aloud as: when I receive…, I…",
      ],
      mascotMessage: "A message map is a tiny plan for a bigger story.",
      teacherNotes: {
        questions: [
          "لماذا نخطط الرسائل قبل كتابة الكود؟",
          "ماذا نكتب بجانب ending؟",
        ],
        expectedAnswers: [
          "عشان نعرف مين يبدأ ومين يرد.",
          "الجملة أو الفعل الأخير.",
        ],
        tips: [
          "هذا ليس flowchart جديداً؛ اجعله خريطة رسائل بسيطة بثلاث بطاقات فقط.",
          "لو الطفل يريد خمس شخصيات، اطلب منه الاحتفاظ بثلاثة أدوار الآن وتأجيل الباقي للمشروع.",
        ],
        transition: "نراجع المفهوم بأسئلة قصيرة، ثم ننهي بحفظ الخطة للمشروع القادم.",
      },
      bgVariant: "green",
    },
    {
      id: 8,
      title: "Quiz: Who Starts?",
      emoji: "❓",
      type: "quiz",
      content: ["Choose the event that starts a receiver’s script."],
      quiz: {
        question: "Which block starts a script when a message named scene1 arrives?",
        options: ["when green flag clicked", "when I receive scene1", "when this sprite clicked", "forever"],
        correctIndex: 1,
      },
      mascotMessage: "Look for the hat that is waiting for the message.",
      teacherNotes: {
        questions: [
          "ما اسم الرسالة في السؤال؟",
          "أي بلوك يحتوي الاسم نفسه؟",
        ],
        expectedAnswers: [
          "scene1.",
          "when I receive scene1.",
        ],
        tips: [
          "اطلب منهم تحديد كلمة scene1 في السؤال والبلوك قبل الإجابة.",
          "اشرح أن green flag قد يرسل الرسالة، لكنه ليس الذي يستقبلها.",
        ],
        transition: "آخر تجربة: نكسر اسم الرسالة ونصلحه.",
      },
      bgVariant: "orange",
    },
    {
      id: 9,
      title: "Debug: The Silent Friend",
      emoji: "🐞",
      type: "game",
      content: [
        "The Director broadcasts `scene2`.",
        "The Friend listens for `scene1`.",
        "The Friend stays silent.",
        "Find the one mismatch and fix it.",
      ],
      codeSnippet: [
        "DIRECTOR",
        "broadcast scene2",
        "",
        "FRIEND (BUG)",
        "when I receive scene1",
        "    say I am ready! for 2 seconds",
        "",
        "FIX: use the same message name on both sides",
      ],
      activitySteps: [
        "Run the broken experiment and describe what did not happen.",
        "Circle the message name on the sender and receiver.",
        "Change one name so they match.",
        "Run the flag again and explain the fix.",
      ],
      mascotMessage: "No matching message means no reaction.",
      teacherNotes: {
        questions: [
          "هل المشكلة في say أم في اسم الرسالة؟",
          "ما التغيير الواحد الذي سنجربه؟",
        ],
        expectedAnswers: [
          "اسم الرسالة.",
          "نجعل الاسمين متطابقين.",
        ],
        tips: [
          "هذه الحصة للشرح، لذلك لا تحول الـ Debug إلى مشروع. دقيقة أو دقيقتان كافيتان.",
          "اربط التصحيح بدرس debugging: نحدد الاختلاف ثم نغير شيئاً واحداً.",
        ],
        transition: "نحفظ Message Map؛ الجلسة القادمة ستستخدمه لبناء Interactive Movie.",
      },
      bgVariant: "orange",
    },
    {
      id: 10,
      title: "Quiz: Which One Waits?",
      emoji: "🧠",
      type: "quiz",
      content: ["Choose the block for ordered scenes."],
      quiz: {
        question: "Which block should the Director use when it must wait for a scene to finish?",
        options: ["broadcast message", "broadcast message and wait", "say message", "change backdrop"],
        correctIndex: 1,
      },
      mascotMessage: "Order matters when one scene must finish before the next.",
      teacherNotes: {
        questions: [
          "ما الكلمة المهمة في السؤال: finish أم start؟",
          "أين توجد كلمة wait؟",
        ],
        expectedAnswers: [
          "finish.",
          "في broadcast and wait.",
        ],
        tips: [
          "لا تشرح كل استخدامات and wait؛ ثبتها فقط كأداة ترتيب.",
          "اطلب من الطفل أن يقول مثالاً: ابعت scene1 واستنى ثم ابعت scene2.",
        ],
        transition: "نغلق الحصة بجملة واحدة يستطيع الطفل تذكرها.",
      },
      bgVariant: "blue",
    },
    {
      id: 11,
      title: "Exit Ticket",
      emoji: "🎫",
      type: "review",
      content: ["Complete these three sentences before leaving."],
      reviewPoints: [
        "`broadcast` sends a named signal.",
        "`when I receive` starts the listener’s script.",
        "`broadcast and wait` helps scenes happen in order.",
      ],
      flipCards: [
        {
          frontEmoji: "📣",
          frontText: "broadcast",
          backEmoji: "📨",
          backText: "Send a named message",
        },
        {
          frontEmoji: "👂",
          frontText: "when I receive",
          backEmoji: "▶️",
          backText: "Start when that message arrives",
        },
        {
          frontEmoji: "⏳",
          frontText: "and wait",
          backEmoji: "🔢",
          backText: "Keep the next scene in order",
        },
      ],
      mascotMessage: "Next time your message map becomes a real story.",
      teacherNotes: {
        questions: [
          "أكمل: broadcast يعني…؟",
          "أكمل: when I receive يعني…؟",
        ],
        expectedAnswers: [
          "إرسال رسالة باسم معين.",
          "ابدأ الكود عندما تصل الرسالة.",
        ],
        tips: [
          "لا تسأل الطفل أن يحفظ أسماء البلوكات فقط؛ اطلب منه شرح العلاقة بين المرسل والمستقبل.",
          "احتفظ بخريطة الرسائل أو صورة لها لتستخدمها في بداية Session 14.",
        ],
        transition: "Session 13 انتهت. لا يوجد مشروع كبير اليوم؛ المشروع في الجلسة القادمة.",
      },
      bgVariant: "green",
    },
    {
      id: 12,
      title: "Homework: Draw the Story",
      emoji: "🏠",
      type: "homework",
      image: "/images/scratch/stage-bubble.webp",
      content: [
        "Draw three boxes: Title, Scene 1, Ending.",
        "Draw the characters in each box.",
        "Write one sentence each character will say.",
        "Do not code at home; bring the plan next session.",
      ],
      activitySteps: [
        "Choose a simple theme: space trip, lost pet, or school adventure.",
        "Name the three scenes.",
        "Write the message that moves from one scene to the next.",
        "Bring the drawing for the Interactive Movie project.",
      ],
      mascotMessage: "A good story starts with a small plan.",
      teacherNotes: {
        questions: [
          "ما أسماء المشاهد الثلاثة؟",
          "من سيرسل رسالة الانتقال؟",
        ],
        expectedAnswers: [
          "أي أسماء واضحة يختارها الطفل.",
          "Director أو الشخصية التي تنهي المشهد.",
        ],
        tips: [
          "الواجب ورقي حتى لا يبدأ الطفل في بناء المشروع قبل الجلسة العملية.",
          "لو الطفل لا يحب الرسم، يكفي ثلاث جمل وثلاثة أسماء رسائل.",
        ],
        transition: "في الجلسة القادمة سنحول الخريطة إلى Interactive Movie يعمل.",
      },
      bgVariant: "purple",
    },
  ],
};
