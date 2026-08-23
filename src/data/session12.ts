import type { SessionData } from "./types";

export const session12: SessionData = {
  id: 12,
  title: "Project: Scoreboard Clicker",
  subtitle: "Session 12 · Build with Variables",
  emoji: "🏆",
  description:
    "Use the variable ideas from Session 11 to build a small click challenge with a score, a reset, and a player name.",
  color: "#10B981",
  slides: [
    {
      id: 1,
      title: "Project Day",
      emoji: "🏆",
      type: "review",
      image: "/images/scratch/stage-bubble.webp",
      content: [
        "Today we build Scoreboard Clicker.",
        "There is no new variable idea today.",
        "Use the box, set, change, input, and output from Session 11.",
      ],
      reviewPoints: [
        "A variable is a named box.",
        "Set chooses or resets a value.",
        "Change updates the current value.",
        "Ask is input; say is output.",
      ],
      mascotMessage: "You learned the tool. Today you will use it in a game.",
      teacherNotes: {
        questions: [
          "ما الذي سيخزنه score؟",
          "ما أول كود عند بداية اللعبة؟",
        ],
        expectedAnswers: [
          "عدد النقاط.",
          "set score to 0.",
        ],
        tips: [
          "لا تشرح Variable من جديد إلا إذا احتاج طفل تذكيراً سريعاً.",
          "اعرض Minimum Build من البداية حتى يعرف الأطفال متى ينجح المشروع.",
        ],
        transition: "نقرأ شروط نجاح المشروع ثم نجهز زر اللعب.",
      },
      bgVariant: "blue",
    },
    {
      id: 2,
      title: "Minimum Build",
      emoji: "✅",
      type: "content",
      image: "/images/scratch/editor-full.webp",
      content: [
        "A target sprite works like a button.",
        "Each click adds one point.",
        "The green flag resets the score to 0.",
        "The score stays visible while the player clicks.",
      ],
      codeSnippet: [
        "when green flag clicked",
        "set score to 0",
        "",
        "when this sprite clicked",
        "change score by 1",
      ],
      mascotMessage: "Click me to change the number in the box.",
      teacherNotes: {
        questions: [
          "ما الحدث الذي يزيد score؟",
          "هل نحتاج forever للضغط؟",
        ],
        expectedAnswers: [
          "when this sprite clicked.",
          "لا، click يشغل الكود كل مرة.",
        ],
        tips: [
          "اكتب الكود كجزئين منفصلين: reset عند flag، update عند click.",
          "لا تضف timer أو lives في Minimum Build.",
        ],
        transition: "نصمم واجهة بسيطة ثم نبدأ بالـ reset.",
      },
      bgVariant: "green",
    },
    {
      id: 3,
      title: "Step 1 — Make the Score",
      emoji: "📦",
      type: "activity",
      image: "/images/scratch/editor-full.webp",
      content: [
        "Create one variable called `score` for all sprites.",
        "Place its monitor on the Stage.",
        "Do not create lives yet.",
      ],
      activitySteps: [
        "Click Variables.",
        "Click Make a Variable.",
        "Type `score`.",
        "Choose For all sprites.",
        "Keep the score monitor visible.",
      ],
      codeSnippet: [
        "Variables → Make a Variable",
        "name: score",
        "☑ For all sprites",
      ],
      mascotMessage: "One project, one shared score box.",
      teacherNotes: {
        questions: [
          "لماذا نستخدم For all sprites؟",
          "أين نرى قيمة score؟",
        ],
        expectedAnswers: [
          "حتى تشترك كل الشخصيات في نفس نقاط اللعبة.",
          "في monitor على Stage.",
        ],
        tips: [
          "لو الطفل لديه score من مشروع قديم، يعيد استخدامه بدلاً من إنشاء score2.",
          "أوقف أي variable قديم على Stage إذا سبب تشتيتاً.",
        ],
        transition: "الصندوق جاهز. نكتب reset ونختبره.",
      },
      bgVariant: "purple",
    },
    {
      id: 4,
      title: "Step 2 — Reset the Game",
      emoji: "🔄",
      type: "activity",
      image: "/images/scratch/flag-stop.png",
      content: [
        "The green flag starts a fresh round.",
        "Put `set score to 0` under the flag.",
        "Test by changing the score, then pressing the flag again.",
      ],
      codeSnippet: [
        "when green flag clicked",
        "set score to 0",
      ],
      activitySteps: [
        "Select the stage or a controller sprite.",
        "Add when green flag clicked.",
        "Attach set score to 0.",
        "Run the flag.",
        "Use the variable monitor to test a non-zero value, then run the flag again.",
      ],
      mascotMessage: "Every round starts from zero.",
      teacherNotes: {
        questions: [
          "ماذا يثبت أن reset يعمل؟",
          "أين نضع set؟",
        ],
        expectedAnswers: [
          "أرفع score ثم أشغل flag فأجده 0.",
          "في بداية سكربت green flag.",
        ],
        tips: [
          "لا تسمح لهم بإضافة click قبل رؤية reset يعمل.",
          "استخدم عبارة: Start clean before you play.",
        ],
        transition: "النتيجة تبدأ نظيفة. نربطها بزر الهدف.",
      },
      bgVariant: "blue",
    },
    {
      id: 5,
      title: "Step 3 — Click to Score",
      emoji: "🖱️",
      type: "activity",
      image: "/images/scratch/stage.webp",
      content: [
        "Choose a target sprite: star, coin, apple, or button.",
        "Each click changes score by 1.",
        "Test one click, then five clicks.",
      ],
      activitySteps: [
        "Choose and rename the target `Target`.",
        "Add when this sprite clicked.",
        "Attach change score by 1.",
        "Run the green flag and click the target once.",
        "Predict the score after five clicks, then test it.",
      ],
      codeSnippet: [
        "when this sprite clicked",
        "change score by 1",
      ],
      mascotMessage: "One click, one point. Can you reach five?",
      teacherNotes: {
        questions: [
          "ما الذي يربط الضغط بتغيير score؟",
          "هل click مرة واحدة يضيف نقطة واحدة أم يعيد score للصفر؟",
        ],
        expectedAnswers: [
          "when this sprite clicked.",
          "يضيف نقطة واحدة.",
        ],
        tips: [
          "لو score لا يزيد، تحقق من أن الطفل يبرمج Target وليس Sprite آخر.",
          "أعد العد مع الطفل: 0، 1، 2، 3، 4، 5.",
        ],
        transition: "النسخة الأساسية تعمل. نضيف هدفاً للفوز باستخدام نفس الأوامر.",
      },
      bgVariant: "orange",
    },
    {
      id: 6,
      title: "Step 4 — Add a Win Target",
      emoji: "🎯",
      type: "activity",
      content: [
        "The game ends when score reaches 10.",
        "Use the variable value in a condition.",
        "This is not a new variable concept; it is using the value.",
      ],
      codeSnippet: [
        "when green flag clicked",
        "set score to 0",
        "forever",
        "    if <(score) = 10> then",
        "        say You win! for 2 seconds",
        "        stop all",
      ],
      activitySteps: [
        "Add forever to a controller sprite.",
        "Add if score = 10 inside it.",
        "Add say You win! and stop all.",
        "For testing, set score to 10 temporarily.",
        "Restore set score to 0 before the final playtest.",
      ],
      mascotMessage: "The number can help the game decide when you win.",
      teacherNotes: {
        questions: [
          "ماذا نسأل عن score؟",
          "لماذا نختبر بإعطاء score قيمة 10 مؤقتاً؟",
        ],
        expectedAnswers: [
          "هل score يساوي 10؟",
          "حتى لا نضطر إلى عشر ضغطات أثناء الاختبار.",
        ],
        tips: [
          "الـ win condition Bonus؛ Minimum Build لا يتوقف عليه.",
          "لا تقدم AND/OR/NOT هنا؛ سيأتي في جلسة شرح منفصلة لاحقاً.",
        ],
        transition: "نضيف Input/Output اختيارياً ليشعر اللاعب أن اللعبة تخصه.",
      },
      bgVariant: "green",
    },
    {
      id: 7,
      title: "Bonus — Player Name",
      emoji: "🏷️",
      type: "activity",
      image: "/images/scratch/stage-bubble.webp",
      content: [
        "Ask the player for a name at the start.",
        "Store the answer in `playerName`.",
        "Use it in the win message.",
      ],
      codeSnippet: [
        "when green flag clicked",
        "set score to 0",
        "ask What is your name? and wait",
        "set playerName to answer",
        "",
        "say (join Great job, playerName) for 2 seconds",
      ],
      activitySteps: [
        "Create playerName if you want the bonus.",
        "Ask for the name after resetting score.",
        "Store answer in playerName.",
        "Use join in the win message.",
        "Run once and check the name appears.",
      ],
      mascotMessage: "Now the scoreboard knows who is playing.",
      teacherNotes: {
        questions: [
          "ما الـ input؟",
          "أين نخزن answer؟",
        ],
        expectedAnswers: [
          "اسم اللاعب.",
          "في playerName.",
        ],
        tips: [
          "اجعلها Bonus فقط؛ لا تؤخر الطفل الذي ما زال يصلح click score.",
          "لا تسمح بإضافة سؤالين أو نظام حساب جديد.",
        ],
        transition: "نصلح خطأ شائعاً ثم نجهز اللعبة للاختبار.",
      },
      bgVariant: "purple",
    },
    {
      id: 8,
      title: "Debug: The Score That Stays Old",
      emoji: "🐞",
      type: "game",
      content: [
        "Bug: the player clicks and gets points, but a new round starts at the old score.",
        "Find the missing reset.",
        "Fix one block and test again.",
      ],
      codeSnippet: [
        "BUG",
        "when green flag clicked",
        "    (set score to 0 is missing)",
        "",
        "FIX",
        "when green flag clicked",
        "    set score to 0",
      ],
      activitySteps: [
        "Play until score is 3.",
        "Press the green flag and record the new value.",
        "Look only at the green-flag script.",
        "Add set score to 0.",
        "Run again and check the reset.",
      ],
      mascotMessage: "A new round should not inherit yesterday’s points.",
      teacherNotes: {
        questions: [
          "متى يجب أن يحدث reset؟",
          "ما البلوك الناقص؟",
        ],
        expectedAnswers: [
          "عند green flag.",
          "set score to 0.",
        ],
        tips: [
          "اجعل الأطفال يقولون توقعاً قبل الإصلاح.",
          "لا تفتح موضوع حفظ البيانات بين الجلسات؛ المتغير يبدأ من الكود عند التشغيل.",
        ],
        transition: "نختبر المشروع بشخص آخر لا يعرف الكود.",
      },
      bgVariant: "orange",
    },
    {
      id: 9,
      title: "Playtest Checklist",
      emoji: "🎮",
      type: "game",
      image: "/images/scratch/flag-stop.png",
      content: [
        "Swap projects with a partner.",
        "The player checks the score without seeing the code.",
      ],
      activitySteps: [
        "Press the green flag.",
        "Click the target once and check +1.",
        "Click five times and check the value.",
        "Press the green flag and check that score returns to 0.",
        "Tell the creator one thing that works and one fix.",
      ],
      codeSnippet: [
        "PLAYTEST",
        "☐ score starts at 0",
        "☐ one click adds 1",
        "☐ five clicks are counted",
        "☐ green flag resets",
        "☐ win message works if included",
      ],
      mascotMessage: "A scoreboard is finished when another player can use it.",
      teacherNotes: {
        questions: [
          "ما الملاحظة التي ستقولها لزميلك؟",
          "هل كل شرط في القائمة يعمل؟",
        ],
        expectedAnswers: [
          "I expected… I saw…",
          "نعم أو لا مع دليل.",
        ],
        tips: [
          "اجعل الـ playtest قصيراً ومحدداً؛ لا يتحول إلى وقت لعب بلا تعلم.",
          "الطفل يصلح مشكلة واحدة فقط قبل نهاية الوقت.",
        ],
        transition: "نختم بشرح المتغير باستخدام مثال من مشروع الطفل.",
      },
      bgVariant: "blue",
    },
    {
      id: 10,
      title: "Review: Explain Your Box",
      emoji: "🔍",
      type: "review",
      content: ["Use your own project to complete the sentences."],
      reviewPoints: [
        "My variable is called ___.",
        "I set it to ___ when ___.",
        "I change it by ___ when ___.",
        "The player can see the value because ___.",
      ],
      flipCards: [
        {
          frontEmoji: "📦",
          frontText: "Variable",
          backEmoji: "🔢",
          backText: "A named box for a changing value",
        },
        {
          frontEmoji: "0️⃣",
          frontText: "Set",
          backEmoji: "🧼",
          backText: "Choose or reset a value",
        },
        {
          frontEmoji: "+1️⃣",
          frontText: "Change",
          backEmoji: "📈",
          backText: "Update the current value",
        },
      ],
      mascotMessage: "If you can explain the box, you can build with it.",
      teacherNotes: {
        questions: [
          "ما الحدث الذي يغير score في مشروعك؟",
          "ما الفرق بين set وchange؟",
        ],
        expectedAnswers: [
          "when this sprite clicked.",
          "set يختار قيمة، change يعدل القيمة الحالية.",
        ],
        tips: [
          "اطلب من الطفل الإشارة إلى البلوكات في مشروعه أثناء الإجابة.",
          "هذه المراجعة أهم من إضافة Decoration أخيرة.",
        ],
        transition: "الواجب يكرر Scoreboard ولا يقدم فكرة جديدة.",
      },
      bgVariant: "green",
    },
    {
      id: 11,
      title: "Homework: Score Challenge",
      emoji: "🏠",
      type: "homework",
      image: "/images/scratch/stage-bubble.webp",
      content: [
        "Change the target or backdrop.",
        "Keep score reset and click scoring exactly as they are.",
        "Add one small improvement: a win message or player name.",
      ],
      activitySteps: [
        "Choose a new target costume.",
        "Test that click still adds one.",
        "Test that green flag still resets.",
        "Add only one small improvement.",
        "Bring the project next session.",
      ],
      mascotMessage: "Improve the look without changing the engine.",
      teacherNotes: {
        questions: [
          "ما الشيء الذي ستغيره؟",
          "ما الشيء الذي يجب ألا ينكسر؟",
        ],
        expectedAnswers: [
          "الشكل أو الخلفية أو win/name.",
          "reset وclick score.",
        ],
        tips: [
          "الواجب Variation صغيرة في حدود 20 دقيقة.",
          "لو لم يتوفر جهاز، يرسم الطفل شاشة Scoreboard ويكتب الكود الأساسي.",
        ],
        transition: "Session 12 انتهت: Variables أصبحت مشروعاً يعمل، والمفهوم التالي سيبدأ في Session 13.",
      },
      bgVariant: "purple",
    },
  ],
};
