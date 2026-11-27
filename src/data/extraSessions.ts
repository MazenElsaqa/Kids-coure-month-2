import type { SessionData, SlideData } from "./types";

type NotesInput = {
  questions?: string[];
  expectedAnswers?: string[];
  tips?: string[];
  transition: string;
  age6?: string[];
  age9?: string[];
};

function notes(input: NotesInput): SlideData["teacherNotes"] {
  return {
    questions: input.questions ?? ["What is the main idea you can explain in your own words?"],
    expectedAnswers: input.expectedAnswers ?? ["Accept an accurate explanation in the learner's own words."],
    tips: input.tips ?? ["Ask the learner to explain before supplying the vocabulary."],
    transition: input.transition,
    age6: input.age6,
    age9: input.age9,
  };
}

function contentSlide(
  id: number,
  title: string,
  emoji: string,
  content: string[],
  teacherNotes: SlideData["teacherNotes"],
  options: Pick<SlideData, "bgVariant" | "newWord"> = {},
): SlideData {
  return {
    id,
    title,
    emoji,
    type: "content",
    content,
    mascotMessage: "Let's think it through together!",
    teacherNotes,
    ...options,
  };
}

function videoSlide(
  id: number,
  title: string,
  videoId: string,
  videoPrompt: string,
  teacherNotes: SlideData["teacherNotes"],
): SlideData {
  return {
    id,
    title,
    emoji: "▶️",
    type: "video",
    content: [],
    videoUrl: `https://www.youtube.com/embed/${videoId}?rel=0`,
    videoPrompt,
    mascotMessage: "Watch for the clue, then tell us what you noticed!",
    teacherNotes,
    bgVariant: "blue",
  };
}

function activitySlide(
  id: number,
  title: string,
  content: string[],
  activitySteps: string[],
  teacherNotes: SlideData["teacherNotes"],
): SlideData {
  return {
    id,
    title,
    emoji: "🧩",
    type: "activity",
    content,
    activitySteps,
    mascotMessage: "Take turns, test your idea, and explain what happened.",
    teacherNotes,
    bgVariant: "orange",
  };
}

function reviewSlide(
  id: number,
  title: string,
  reviewPoints: string[],
  teacherNotes: SlideData["teacherNotes"],
): SlideData {
  return {
    id,
    title,
    emoji: "🗺️",
    type: "review",
    content: ["Say each idea in your own words."],
    reviewPoints,
    mascotMessage: "You remember more than you think!",
    teacherNotes,
    bgVariant: "purple",
  };
}

function quizSlide(
  id: number,
  title: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
  teacherNotes: SlideData["teacherNotes"],
): SlideData {
  return {
    id,
    title,
    emoji: "❓",
    type: "quiz",
    content: [],
    quiz: { question, options, correctIndex, explanation },
    mascotMessage: "Choose an answer, then explain your thinking.",
    teacherNotes,
    bgVariant: "green",
  };
}

const foundationsAge6 = [
  "Use large picture cards, objects, or hand motions; keep number calculations optional.",
];
const foundationsAge9 = [
  "Ask for the technical word and one reason; extend with a small prediction or calculation.",
];
const scratchAge6 = [
  "Let the learner point, act out, or use picture cards before asking for a full sentence.",
];
const scratchAge9 = [
  "Ask the learner to name the rule or block and explain what would change if one step moved.",
];

export const session23: SessionData = {
  id: 23,
  title: "Computer Parts: A Helpful Team",
  subtitle: "Computer & Digital Foundations · Session 1",
  emoji: "🖥️",
  description:
    "Meet the parts that help a computer take input, process instructions, remember active work, store files, and show results.",
  color: "#2563EB",
  slides: [
    contentSlide(
      1,
      "A Computer Is a Team",
      "🤝",
      [
        "A computer takes input, follows instructions, and gives an output.",
        "Different parts help with different jobs.",
        "The operating system helps apps use the computer.",
      ],
      notes({
        questions: ["What is one input? What could be an output?", "Is the operating system a physical part you can hold?"],
        expectedAnswers: ["A key press or mouse click is input; a sound or picture is output.", "No. It is software that helps manage the computer and its apps."],
        tips: ["Draw input → processing → output before naming parts.", "Keep software and hardware distinct: an operating system is software."],
        transition: "Now meet a few teammates inside the computer.",
        age6: ["Act out input, processing, and output with three students.", "Use a real keyboard, headphones, and screen as examples."],
        age9: ["Ask where CPU, RAM, storage, and OS fit in the process.", "Ask why the same app can run on different hardware."],
      }),
      { bgVariant: "blue", newWord: { word: "hardware", pronunciation: "HARD-wair", meaning: "The physical parts of a computer", example: "A keyboard is computer hardware." } },
    ),
    contentSlide(
      2,
      "Parts Have Different Jobs",
      "🧰",
      [
        "CPU: carries out many general instructions.",
        "GPU: helps handle lots of picture and video calculations.",
        "RAM: fast, temporary workspace for programs running now.",
        "SSD or HDD: keeps files when the computer is turned off.",
      ],
      notes({
        questions: ["Which part is the temporary workspace?", "Which parts keep saved files after shutdown?"],
        expectedAnswers: ["RAM.", "An SSD or HDD."],
        tips: ["Use the desk analogy: RAM is the open desk; storage is the filing cabinet.", "Do not say that RAM repairs or corrects disk data. RAM holds active data temporarily."],
        transition: "Watch a component overview and listen for each part's job.",
        age6: ["Use four picture cards: CPU, RAM, SSD, and screen; teach one job at a time."],
        age9: ["Compare RAM and SSD by speed, purpose, and whether data lasts after power is off."],
      }),
      { bgVariant: "green" },
    ),
    videoSlide(
      3,
      "Watch: Computer Components",
      "fGVfqA_Iv6s",
      "Listen for the job of each component. Remember: RAM is temporary working memory; it does not fix disk errors.",
      notes({
        questions: ["Which two parts have jobs you can explain?", "Did the video describe RAM as temporary or permanent storage?"],
        expectedAnswers: ["Answers may include CPU, RAM, storage, or GPU with a correct job.", "Temporary working memory."],
        tips: ["Preview the linked clip. If a statement suggests RAM corrects disk data, correct it: RAM temporarily holds active work; it does not repair a disk."],
        transition: "A mouse click is one kind of input. Let's follow it to a result.",
        age6: ["Pause after each part and let the learner point to its picture."],
        age9: ["Ask the learner to sort heard claims into hardware, software, memory, or storage."],
      }),
    ),
    videoSlide(
      4,
      "Watch: From Click to Screen",
      "AkFi90lZmXA",
      "Follow one mouse click from input through processing to the result on screen.",
      notes({
        questions: ["What did the person do first?", "What did the computer show or do afterward?"],
        expectedAnswers: ["A mouse click was the input.", "The computer processed the instruction and produced a response."],
        tips: ["Use this as a process example, not as a complete map of every chip involved."],
        transition: "Now act out the same journey as a team.",
        age6: ["Use a simple three-person chain: click, computer, screen."],
        age9: ["Invite the learner to add RAM, CPU, or OS to the story where it makes sense."],
      }),
    ),
    activitySlide(
      5,
      "Act Out the Computer Team",
      ["One message travels through several jobs before the user sees a result."],
      [
        "One learner chooses an input card: click, key press, or microphone sound.",
        "A second learner says: the computer follows the program's instructions.",
        "A third learner chooses an output card: picture, sound, or text.",
        "Place RAM and storage cards beside the story and explain their different jobs.",
      ],
      notes({
        questions: ["Where would a saved photo stay when the computer is off?", "What information might RAM hold while an app is open?"],
        expectedAnswers: ["On storage such as an SSD or HDD.", "Temporary information the running app is using."],
        tips: ["The OS is software; it coordinates work but is not a physical component."],
        transition: "Choose the best answer in the quick check.",
        age6: ["Use picture cards and accept pointing plus a short explanation."],
        age9: ["Ask for a complete input → processing → output explanation."],
      }),
    ),
    quizSlide(
      6,
      "Quick Check: Memory or Storage?",
      "Which part is fast temporary workspace for programs that are running now?",
      ["RAM", "SSD", "Computer case", "Ethernet cable"],
      0,
      "RAM is temporary working memory. An SSD keeps saved files for later, even when the computer is off.",
      notes({
        questions: ["Why is SSD not the best answer here?"],
        expectedAnswers: ["An SSD is long-term storage; the question asks about temporary working memory."],
        tips: ["If the learner is unsure, return to the desk-and-filing-cabinet comparison."],
        transition: "Next, we will see how computers represent data." ,
        age6: foundationsAge6,
        age9: foundationsAge9,
      }),
    ),
  ],
};

export const session24: SessionData = {
  id: 24,
  title: "Data & Binary: Patterns a Computer Can Use",
  subtitle: "Computer & Digital Foundations · Session 2",
  emoji: "🔢",
  description:
    "Explore data as information and learn how binary digits can be used in patterns that represent numbers, text, pictures, and sound.",
  color: "#7C3AED",
  slides: [
    contentSlide(
      1,
      "What Is Data?",
      "📦",
      [
        "Data is information a computer can store or use.",
        "A number, a word, a photo, and a sound can all be data.",
        "A pattern needs a rule so a program can interpret it.",
      ],
      notes({
        questions: ["Name one kind of data in a game."],
        expectedAnswers: ["A score, player name, picture, sound, or button press."],
        tips: ["Start with familiar examples; avoid saying that a computer understands meaning like a person."],
        transition: "Computers use binary patterns for digital information.",
        age6: ["Sort picture cards into word, number, picture, or sound."],
        age9: ["Ask what rule a computer needs to interpret a pattern as a letter or color."],
      }),
      { bgVariant: "purple", newWord: { word: "data", pronunciation: "DAY-tuh", meaning: "Information that can be stored or used", example: "A game score is data." } },
    ),
    videoSlide(
      2,
      "Watch: How Computers Represent Data",
      "wgbV6DLVezo",
      "Notice how bit patterns can stand for different kinds of information when we use a rule.",
      notes({
        questions: ["What is a bit?", "Why does a pattern need a rule?"],
        expectedAnswers: ["One binary digit, 0 or 1.", "The rule tells a program how to interpret the pattern."],
        tips: ["Pause to rephrase unfamiliar terms; do not imply that a raw bit pattern carries meaning by itself."],
        transition: "Let's make a tiny binary pattern with two symbols.",
        age6: ["Pause after the explanation of 0 and 1; use two large cards."],
        age9: ["Ask how the same pattern could mean different things under different encoding rules."],
      }),
    ),
    contentSlide(
      3,
      "Bits: Two Symbols for a Pattern",
      "0️⃣1️⃣",
      [
        "A bit is one binary digit: 0 or 1.",
        "We use 0 and 1 as a simple model for different digital signal states.",
        "Groups of bits can make patterns that follow a code or format.",
        "A picture, letter, or sound needs many values and rules—not one magic bit.",
      ],
      notes({
        questions: ["How many choices can one bit show?", "Can one bit describe a whole photo?"],
        expectedAnswers: ["Two symbols: 0 or 1.", "No. A photo needs many values and rules."],
        tips: ["Call on/off a helpful model, not a perfect description of every electronic circuit."],
        transition: "Use a two-card code to send a pattern to a partner.",
        age6: ["Let 0 mean clap and 1 mean tap, then copy a three-symbol pattern."],
        age9: ["For an extension, count the possible patterns of two bits: 00, 01, 10, and 11."],
      }),
      { bgVariant: "blue", newWord: { word: "bit", pronunciation: "bit", meaning: "One binary digit: 0 or 1", example: "A group of bits can form a data pattern." } },
    ),
    activitySlide(
      4,
      "Send a Secret Pattern",
      ["Agree on a code first. Then your partner can decode the pattern."],
      [
        "Choose a rule together: 0 means star and 1 means moon.",
        "Make a four-bit pattern with the 0 and 1 cards.",
        "Read the pattern with your agreed rule.",
        "Change the rule and notice that the same pattern can now mean something else.",
      ],
      notes({
        questions: ["What made the pattern readable?", "Did the bits change when the rule changed?"],
        expectedAnswers: ["The agreed code or rule.", "No; the interpretation changed."],
        tips: ["Keep the activity playful; the star/moon rule is a classroom code, not a real computer encoding."],
        transition: "Check what one bit means.",
        age6: ["Use only three cards and read the pattern aloud together."],
        age9: ["Ask the learner to make a second rule and compare how many outcomes are possible."],
      }),
    ),
    quizSlide(
      5,
      "Quick Check: One Bit",
      "What is one bit?",
      ["One binary digit, 0 or 1", "A whole picture", "A computer screen", "A saved folder"],
      0,
      "One bit is one binary digit. Many bits and an agreed format are needed to represent larger information.",
      notes({
        questions: ["What does a computer need to interpret a longer pattern?"],
        expectedAnswers: ["A rule or format for the pattern."],
        tips: ["Ask for the reason, not only the selected choice."],
        transition: "Next, we will measure how much data can be stored.",
        age6: foundationsAge6,
        age9: foundationsAge9,
      }),
    ),
  ],
};

export const session25: SessionData = {
  id: 25,
  title: "Bits, Bytes & Storage Sizes",
  subtitle: "Computer & Digital Foundations · Session 3",
  emoji: "💾",
  description:
    "Learn bit and byte, compare common storage units, and use the correct decimal or binary rule for a conversion.",
  color: "#0F766E",
  slides: [
    contentSlide(
      1,
      "From Bits to Bytes",
      "🧱",
      [
        "A bit is one 0-or-1 digit.",
        "A byte is a group of 8 bits.",
        "Bytes help us describe file and storage sizes.",
      ],
      notes({
        questions: ["How many bits make one byte?", "Which is the smaller unit: bit or byte?"],
        expectedAnswers: ["Eight bits.", "A bit."],
        tips: ["Keep lowercase b for bit and uppercase B for byte when showing symbols."],
        transition: "Watch the size-unit video, then we will compare the two prefix systems.",
        age6: ["Build a byte by placing eight counters in a row; skip written conversion."],
        age9: ["Ask the learner to explain why a byte is a group rather than a single bit."],
      }),
      { bgVariant: "green", newWord: { word: "byte", pronunciation: "bite", meaning: "A group of 8 bits", example: "A byte is one common small unit for data size." } },
    ),
    videoSlide(
      2,
      "Watch: Bits, Bytes & Storage Units",
      "N4-E590_h04",
      "Listen for the names of storage units. We will use the exact unit symbols shown on the next slide.",
      notes({
        questions: ["Which units did you hear?", "Does every kilo-prefix always use the same multiplier?"],
        expectedAnswers: ["Answers may include byte, kilobyte, megabyte, or gigabyte.", "No. Decimal and binary prefixes use different multipliers."],
        tips: ["Use the video as an introduction, then teach the distinction shown next: kB = 1,000 bytes; KiB = 1,024 bytes."],
        transition: "Here are the two clear rules: decimal and binary.",
        age6: ["Focus on bit, byte, and the idea that larger files need more storage."],
        age9: ["Ask the learner to listen for any multiplier and compare it to the standards on the next slide."],
      }),
    ),
    contentSlide(
      3,
      "Two Prefix Systems: 1,000 or 1,024?",
      "📏",
      [
        "Decimal: 1 kB = 1,000 bytes; 1 MB = 1,000,000 bytes.",
        "Binary: 1 KiB = 1,024 bytes; 1 MiB = 1,048,576 bytes.",
        "The letter i in KiB and MiB marks the binary prefix.",
        "Always read the unit in the question before multiplying.",
      ],
      notes({
        questions: ["How many bytes are in 1 kB?", "How many bytes are in 1 KiB?"],
        expectedAnswers: ["1,000 bytes.", "1,024 bytes."],
        tips: ["The standard symbols are kB/MB/GB for decimal and KiB/MiB/GiB for binary.", "Storage brands often use decimal units; operating systems may display units differently, so compare the label and the measurement rule."],
        transition: "Let's practise choosing the right multiplier.",
        age6: ["Use 1,000 versus 1,024 as a compare-and-point activity; do not require large multiplication."],
        age9: ["Practise 2 kB = 2,000 bytes and 2 KiB = 2,048 bytes, showing the multiplier."],
      }),
      { bgVariant: "blue" },
    ),
    activitySlide(
      4,
      "Sort the Storage Cards",
      ["Read the full unit before comparing the numbers."],
      [
        "Place bit and byte cards first: 8 bits = 1 byte.",
        "Place kB and KiB cards next to their correct multiplier cards: 1,000 and 1,024.",
        "For age 9: solve 3 kB and 3 KiB in bytes.",
        "Explain why the answers are close but not identical.",
      ],
      notes({
        questions: ["What does the i tell you in KiB?", "Which is larger: 3 kB or 3 KiB?"],
        expectedAnswers: ["The unit is binary.", "3 KiB is slightly larger: 3,072 bytes versus 3,000 bytes."],
        tips: ["If a child gives 3,072 for kB, ask them to point to the multiplier printed on the card."],
        transition: "Choose the correct answer in the check.",
        age6: ["Let the learner group eight counters as a byte and compare two large multiplier cards."],
        age9: ["Have the learner write the multiplication beside each answer."],
      }),
    ),
    quizSlide(
      5,
      "Quick Check: Binary Unit",
      "How many bytes are in 1 KiB?",
      ["1,000 bytes", "1,024 bytes", "8 bytes", "1,000,000 bytes"],
      1,
      "KiB is the binary prefix: 1 KiB equals 1,024 bytes. The decimal unit kB equals 1,000 bytes.",
      notes({
        questions: ["What does the i signal?"],
        expectedAnswers: ["A binary prefix."],
        tips: ["Ask the learner to say both rules aloud: kB 1,000; KiB 1,024."],
        transition: "The foundations are ready for a review lab.",
        age6: foundationsAge6,
        age9: foundationsAge9,
      }),
    ),
  ],
};

export const session26: SessionData = {
  id: 26,
  title: "Foundations Review Lab",
  subtitle: "Computer & Digital Foundations · Review",
  emoji: "🧪",
  description:
    "A complete retrieval-and-application review of computer parts, input and output, data, binary patterns, bits, bytes, and storage units.",
  color: "#8B5CF6",
  slides: [
    reviewSlide(1, "The Computer Foundations Map", [
      "Input gives a computer information; processing follows instructions; output shows a result.",
      "CPU processes instructions; GPU helps with many graphics calculations.",
      "RAM is temporary working memory; SSD/HDD keep saved files after shutdown.",
      "The operating system is software that helps apps use computer hardware.",
      "The PSU manages power; cooling removes heat; a NIC connects the computer to a network.",
      "Data includes words, numbers, pictures, and sounds; programs use rules to interpret patterns.",
      "A bit is 0 or 1; 8 bits make 1 byte.",
      "Decimal kB uses 1,000 bytes; binary KiB uses 1,024 bytes.",
    ], notes({
      questions: ["Which idea can you explain confidently? Which one needs another example?"],
      expectedAnswers: ["Accept a reasoned self-assessment; ask the learner to show or explain one idea."],
      tips: ["Use this as a memory map, not a lecture. Hide the list after the first pass and invite retrieval."],
      transition: "Let's test the ideas by matching each computer teammate to its job.",
      age6: foundationsAge6,
      age9: foundationsAge9,
    })),
    activitySlide(2, "Computer Team: Match and Explain", ["A part is not its job—connect each name to what it helps the computer do."], [
      "Sort cards into input, processing, temporary memory, long-term storage, output, software, power, cooling, and network.",
      "Match CPU, GPU, RAM, SSD/HDD, operating system, PSU, fan, NIC, keyboard, and screen to a job.",
      "Explain: PSU manages electrical power; fan or liquid cooling removes heat; NIC enables network connections such as Wi-Fi or Ethernet.",
      "Choose two cards and explain how they work together in one example.",
      "Correct one mix-up: the operating system is software, not a physical part inside the case.",
    ], notes({
      questions: ["Which part keeps a saved file? Which part is software?"],
      expectedAnswers: ["SSD/HDD stores saved files; the operating system is software."],
      tips: ["Accept an appropriate general description; avoid suggesting the CPU is the only part that processes anything."],
      transition: "Now distinguish physical parts from the software that coordinates them.",
      age6: ["Use picture cards and match one job at a time."],
      age9: ["Ask for two linked steps, such as a key press, CPU instructions, and screen output."],
    })),
    quizSlide(3, "Review Check: Hardware or Software?", "Which choice is software that helps apps use the computer's hardware?", ["Operating system", "CPU", "RAM", "Cooling fan"], 0, "The operating system is software. The CPU, RAM, and fan are physical hardware parts.", notes({
      questions: ["Name one operating system you have heard of."],
      expectedAnswers: ["Examples include Windows, macOS, Linux, Android, or iOS."],
      tips: ["Accept a familiar example; the key idea is software versus physical hardware."],
      transition: "A computer also works with information called data.",
      age6: foundationsAge6,
      age9: foundationsAge9,
    })),
    quizSlide(4, "Review Check: Data Patterns", "Why does a computer need a rule or format to interpret a pattern of bits?", ["The pattern does not explain by itself what it represents", "Bits only store pictures", "A byte always means a letter", "The rule makes the computer stop processing"], 0, "A pattern of 0s and 1s can represent different things. A format or rule tells a program how to interpret it.", notes({
      questions: ["Could the same pattern be used in two different ways under two different rules?"],
      expectedAnswers: ["Yes. The interpretation depends on the agreed code or format."],
      tips: ["Use the classroom star/moon code as an analogy, not as a real computer encoding."],
      transition: "Let's check the small units and their exact names.",
      age6: foundationsAge6,
      age9: foundationsAge9,
    })),
    quizSlide(5, "Review Check: Bits and Bytes", "Which statement is correct?", ["1 byte = 8 bits", "1 bit = 8 bytes", "1 byte = 1,024 bits", "A bit is a saved folder"], 0, "A byte contains 8 bits. A bit is the smaller unit and is one binary digit: 0 or 1.", notes({
      questions: ["Which unit is smaller: a bit or a byte?"],
      expectedAnswers: ["A bit."],
      tips: ["Ask the learner to build a byte with eight counters or cards."],
      transition: "Read each unit carefully before choosing a multiplier.",
      age6: foundationsAge6,
      age9: foundationsAge9,
    })),
    quizSlide(6, "Review Check: kB or KiB?", "Which conversion is correct?", ["2 kB = 2,000 bytes", "2 kB = 2,048 bytes", "2 KiB = 2,000 bytes", "2 KiB = 16 bytes"], 0, "The decimal prefix kB uses 1,000, so 2 kB = 2 × 1,000 = 2,000 bytes. For KiB, use 1,024.", notes({
      questions: ["How many bytes are in 2 KiB?"],
      expectedAnswers: ["2,048 bytes."],
      tips: ["Have the child point to the unit before selecting the multiplier."],
      transition: "Use the ideas together in a real-life data journey.",
      age6: ["Compare 1,000 and 1,024 cards; do not require written multiplication."],
      age9: ["Write the unit and multiplication in every answer."],
    })),
    activitySlide(7, "A Drawing's Journey", ["Explain what happens when you draw, save, close, and open a picture."], [
      "Name the input used to create the drawing and the output that lets you see it.",
      "Explain that the running app uses temporary working memory while you draw.",
      "Choose SSD/HDD as the place for a saved file that should remain after shutdown.",
      "Explain how the operating system helps the app work with the computer.",
      "Estimate whether a tiny drawing or a long video usually needs more storage, and say why.",
    ], notes({
      questions: ["What would be lost if you never saved before closing the app?"],
      expectedAnswers: ["Unsaved work in temporary memory may be lost; saved work is stored on SSD/HDD."],
      tips: ["Do not promise that every unsaved file is always recoverable. Focus on the difference between temporary memory and saved storage."],
      transition: "Finish by teaching one foundation idea in your own words.",
      age6: ["Act out draw → show → save using a paper picture and two location cards."],
      age9: ["Add CPU, OS, and file-size units where they fit in the journey."],
    })),
    quizSlide(8, "Exit Check: What Survives Shutdown?", "A student saves a picture, turns the computer off, then opens it tomorrow. Where was the saved picture kept?", ["SSD or HDD storage", "RAM only", "The CPU's instructions", "The cooling fan"], 0, "SSD or HDD storage keeps saved files when the computer is off. RAM is temporary working memory.", notes({
      questions: ["Why is RAM not the best answer?"],
      expectedAnswers: ["RAM is temporary and its active contents do not stay after shutdown."],
      tips: ["End with a confidence check: ask each learner to teach one idea to a partner."],
      transition: "Next, use these foundations to plan clear algorithms.",
      age6: foundationsAge6,
      age9: foundationsAge9,
    })),
  ],
};

export const session27: SessionData = {
  id: 27,
  title: "Computer Time Machine",
  subtitle: "Optional Enrichment · Computer History",
  emoji: "⏳",
  description:
    "Compare older and modern computers by size, speed, and use. This is optional enrichment, not a source for unverified dates or names.",
  color: "#0EA5E9",
  slides: [
    contentSlide(
      1,
      "What Can Change Over Time?",
      "🔎",
      [
        "Computers can change in size, speed, cost, and the ways people use them.",
        "People still give computers instructions and use the results.",
        "A video can start a question; check names and dates before treating them as facts.",
      ],
      notes({
        questions: ["What is one thing you expect to look different in an older computer?"],
        expectedAnswers: ["Accept a reasoned guess; distinguish it from a confirmed fact."],
        tips: ["Keep this as an optional curiosity lesson. Do not assess dates or historical names from the clip alone."],
        transition: "Watch for changes you can observe, not details you have not checked.",
        age6: ["Ask the learner to notice which computer looks bigger or smaller."],
        age9: ["Ask the learner to separate an observation from a historical claim that needs checking."],
      }),
      { bgVariant: "orange" },
    ),
    videoSlide(
      2,
      "Watch: A Short History of Computers",
      "gjVX47dLlN8",
      "Notice a change in size, speed, or use. We are comparing ideas, not memorizing unverified dates.",
      notes({
        questions: ["Name one change you noticed.", "What information would you verify before adding a date to a timeline?"],
        expectedAnswers: ["Accept observable comparisons.", "Check the date against a reliable history source."],
        tips: ["Preview the clip. Keep exact names and dates out of assessment unless independently checked."],
        transition: "Compare two examples using a simple chart.",
        age6: ["Use two pictures and ask: bigger or smaller? older-looking or newer-looking?"],
        age9: ["Compare size, speed, and purpose; label each as an observation or a verified fact."],
      }),
    ),
    activitySlide(
      3,
      "Then and Now",
      ["Choose two computer examples and compare what you can observe."],
      [
        "Draw or describe one older and one modern computer.",
        "Compare size, what people use it for, and how they interact with it.",
        "Write one thing that changed and one idea that stayed the same.",
        "Mark any date or name that still needs checking.",
      ],
      notes({
        questions: ["What stayed the same even though the computers changed?"],
        expectedAnswers: ["People still use instructions, data, and output; accept equivalent explanations."],
        tips: ["Do not grade art quality or ask the child to memorize dates."],
        transition: "Return to the core learning path when ready.",
        age6: ["Draw only one difference and one similarity."],
        age9: ["Add one question you would research to verify a historical detail."],
      }),
    ),
  ],
};

export const session28: SessionData = {
  id: 28,
  title: "Review: Algorithms & Decisions",
  subtitle: "Computational Thinking · Review",
  emoji: "🧠",
  description: "A cumulative review of Sessions 1–4: clear algorithms, sequence, debugging, decomposition, IF/ELSE decisions, and loops.",
  color: "#8B5CF6",
  slides: [
    reviewSlide(1, "The Programmer's Thinking Toolkit", [
      "An algorithm is a clear, complete set of steps in a useful order.",
      "Sequence means the order of steps matters.",
      "Debugging means finding and fixing a mistake in the instructions.",
      "Decomposition breaks one big problem into smaller jobs.",
      "IF/ELSE chooses a path after checking a yes/no condition.",
      "A loop repeats steps; it is different from checking one decision.",
    ], notes({
      questions: ["Which idea helps you split a big job? Which one repeats an action?"],
      expectedAnswers: ["Decomposition splits the job; a loop repeats an action."],
      tips: ["Ask children to retrieve examples before showing the list."],
      transition: "Act like a robot that follows instructions exactly.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    activitySlide(2, "Robot Route Debugger", ["Give a partner a route, then find and fix one broken step."], [
      "Write four clear movement steps to reach a safe classroom target.",
      "Partner follows exactly—no guessing or adding missing instructions.",
      "Place a red card in the route and add an IF/ELSE rule for what to do there.",
      "If the robot misses the target, name the bug and repair the smallest possible step.",
    ], notes({
      questions: ["Was the problem a bad robot or a broken/unclear instruction?"],
      expectedAnswers: ["A broken or unclear instruction."],
      tips: ["Let children test the fixed version to prove that the new instruction works."],
      transition: "Check what makes an algorithm useful to another person.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(3, "Review Check: Good Algorithms", "Which plan is easiest for another person to follow?", ["A clear list of complete steps in order", "A list with missing steps because they are obvious", "A random list of actions", "A plan that changes its meaning each time"], 0, "A useful algorithm is clear, complete, and ordered so another person can follow it without guessing.", notes({
      questions: ["Why should an algorithm not leave out a step that seems obvious to you?"],
      expectedAnswers: ["Another person may not know what to do and could get a different result."],
      tips: ["Ask a child to try following an intentionally incomplete instruction."],
      transition: "Now distinguish a decision from a repeated action.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(4, "Review Check: IF or LOOP?", "The rule says: 'IF the light is red, stop; ELSE, walk.' What kind of idea is this?", ["A decision with two possible paths", "A loop that repeats forever", "A storage unit", "A sequence with no condition"], 0, "IF/ELSE checks a condition and chooses one of two paths. A loop repeats an action.", notes({
      questions: ["What is the yes/no condition in this example?"],
      expectedAnswers: ["Whether the light is red."],
      tips: ["Accept a clear yes/no phrasing."],
      transition: "Check the purpose of a loop.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(5, "Review Check: Repetition", "Which instruction is a loop?", ["Repeat the clap 4 times", "If it is raining, take an umbrella", "Turn left once", "Show a welcome message once"], 0, "A loop repeats an action. 'Repeat the clap 4 times' says to do it again a counted number of times.", notes({
      questions: ["How many claps should happen?"],
      expectedAnswers: ["Four."],
      tips: ["Clap together four times to make the idea concrete."],
      transition: "Programmers also make large jobs easier by breaking them down.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    activitySlide(6, "Break It Down and Debug It", ["Turn one large task into smaller steps, then inspect their order."], [
      "Choose a familiar task, such as packing a school bag.",
      "Split it into three smaller jobs: choose items, pack them, and check the bag.",
      "Write one job as precise steps and ask a partner to follow them literally.",
      "Find one unclear or out-of-order step and improve it.",
    ], notes({
      questions: ["Which smaller job made the big task easier to plan?"],
      expectedAnswers: ["Any relevant subtask and a reason it made planning easier."],
      tips: ["Do not grade the chosen task; assess whether the learner can explain the breakdown and repair."],
      transition: "Choose the best description of decomposition.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(7, "Exit Check: Decomposition", "What does decomposition mean in problem-solving?", ["Breaking a big problem into smaller parts", "Repeating every step forever", "Changing a sprite's costume", "Saving a file to storage"], 0, "Decomposition means splitting a larger problem into smaller, more manageable parts.", notes({
      questions: ["Give one example of a big task you could break into smaller jobs."],
      expectedAnswers: ["Any sensible task with at least two smaller jobs."],
      tips: ["Ask each child to explain one concept to a partner before moving on."],
      transition: "Next, explore the Scratch editor and make a sprite move.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
  ],
};

export const session29: SessionData = {
  id: 29,
  title: "Review: First Steps in Scratch",
  subtitle: "Scratch Foundations · Review",
  emoji: "🐱",
  description: "A cumulative review of Sessions 5–7: the Scratch screen, sprites and assets, stage coordinates, motion blocks, costumes, and animation.",
  color: "#F59E0B",
  slides: [
    reviewSlide(1, "The Scratch Scene: Screen to Sprite", [
      "The Stage shows the project; sprites are characters or objects on it.",
      "The Code, Costumes, and Sounds tabs show different ways to work with a sprite.",
      "The block palette holds blocks; the Code Area is where you connect them.",
      "The Sprite Pane lists sprites; a backdrop is the Stage's background. The Green Flag starts a project; Stop stops it.",
      "x changes left/right; y changes up/down; the centre is (0, 0).",
      "Move, turn, point in direction, go to, glide, and if on edge, bounce control movement.",
      "Costumes, say/think, size, colour effects, and show/hide change a sprite's appearance.",
    ], notes({
      questions: ["Which part shows your project? Which parts help you choose and connect code blocks?"],
      expectedAnswers: ["The Stage; the block palette and Code Area."],
      tips: ["Point to a screenshot or the real editor; invite the learner to retrieve each label."],
      transition: "Take a guided tour without touching the wrong part.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    activitySlide(2, "Scratch Screen Scavenger Hunt", ["Point to each part and explain what job it does."], [
      "Find the Stage, a sprite, the Sprite Pane, and the backdrop.",
      "Find the Code, Costumes, and Sounds tabs.",
      "Point to the block palette and the Code Area.",
      "Find the Green Flag and Stop controls; say what each one does.",
    ], notes({
      questions: ["Where would you choose a block? Where would you see the project?"],
      expectedAnswers: ["The block palette; the Stage."],
      tips: ["If the screen is unavailable, use a printed or projected screenshot."],
      transition: "Now use the Stage grid to predict sprite position.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(3, "Review Check: Coordinates", "Which coordinate usually moves a Scratch sprite left or right?", ["x", "y", "costume", "sound"], 0, "The x-coordinate controls left and right. The y-coordinate controls up and down.", notes({
      questions: ["Which coordinate controls up and down?"],
      expectedAnswers: ["y."],
      tips: ["Use a simple stage grid and draw arrows for positive and negative directions."],
      transition: "Choose a motion block for each kind of movement.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(4, "Review Check: Motion", "Which block moves a sprite smoothly over time to a position?", ["glide to x: y:", "switch costume to", "say Hello!", "change color effect by"], 0, "Glide moves smoothly over time. Go to moves instantly to a position.", notes({
      questions: ["What is the difference between glide and go to?"],
      expectedAnswers: ["Glide is smooth over time; go to is instant."],
      tips: ["Demonstrate both motions if a Scratch device is available."],
      transition: "Costumes change how a sprite looks, not where it is.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(5, "Review Check: Costumes", "What changes when a sprite switches to its next costume?", ["Its appearance", "Its x-coordinate only", "The saved files on the computer", "The Stage's sound volume"], 0, "A costume is one appearance for a sprite. Switching costumes can help make an animation.", notes({
      questions: ["How can two drawings make a sprite look like it is walking?"],
      expectedAnswers: ["Switch between slightly different costumes in sequence."],
      tips: ["Use paper drawings to demonstrate before returning to the editor."],
      transition: "Use screen, movement, and looks together in a small plan.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    activitySlide(6, "Plan a Two-Pose Animation", ["Plan the sprite's position and appearance separately."], [
      "Choose a sprite and point to its current position on the Stage.",
      "Plan one x or y change to move it to a new position.",
      "Choose two costumes that would look different when shown one after another.",
      "Choose one additional looks change: say/think, size, colour effect, or show/hide.",
      "Explain which instruction changes position and which changes appearance."
    ], notes({
      questions: ["Can a costume change move a sprite to a new x position? Why or why not?"],
      expectedAnswers: ["No. Position blocks change x/y; costumes change appearance."],
      tips: ["This is a plan, not a requirement to introduce events or loops early."],
      transition: "Finish by explaining how the editor is organised.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(7, "Exit Check: Where Does Code Go?", "Where do you connect Scratch blocks to build a script?", ["Code Area", "Stage", "Costumes tab only", "Sprite thumbnail"], 0, "The Code Area is where blocks are connected into scripts. The Stage shows the project running.", notes({
      questions: ["Where do you find blocks to choose?"],
      expectedAnswers: ["In the block palette."],
      tips: ["Ask each child to point to one editor part and describe its job."],
      transition: "Next, make projects respond with events, loops, and game rules.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(8, "Exit Check: Stop a Project", "Which Scratch control stops running scripts?", ["Stop button", "Costumes tab", "Sprite Pane", "Backdrop picker"], 0, "The Stop button stops the running project. The Green Flag starts it.", notes({
      questions: ["Which control starts a project?"],
      expectedAnswers: ["The Green Flag."],
      tips: ["Let the learner point to the controls on Scratch or a screenshot."],
      transition: "Next, make projects respond with events, loops, and game rules.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
  ],
};

export const session30: SessionData = {
  id: 30,
  title: "Review: Events, Loops & Games",
  subtitle: "Interactive Games & Data · Review",
  emoji: "🎮",
  description: "A full review of Sessions 8–14: events, loop types, sound timing, sensing and conditions, variables, input/output, operators, logic, randomness, and game projects.",
  color: "#10B981",
  slides: [
    reviewSlide(1, "What Makes a Scratch Game Work?", [
      "An event starts a script when something happens, such as a key press or click.",
      "Repeat counts a set number; forever keeps going; repeat until stops when its condition becomes true.",
      "Sound blocks can wait for a sound to finish or start it while other code continues.",
      "Sensing asks a yes/no question; an IF block chooses what happens next.",
      "A variable stores a value; set replaces it and change updates it.",
      "Ask/answer provides input; say can show output to a player.",
      "Operators compare or combine values; AND, OR, and NOT follow logic rules.",
      "Randomness chooses a value from a range; a game combines rules, player actions, and feedback.",
    ], notes({
      questions: ["Which idea starts code? Which stores a score? Which checks a rule?"],
      expectedAnswers: ["An event; a variable; a condition/sensing check."],
      tips: ["Retrieve from several projects—do not present this as a new lesson."],
      transition: "Trace one player's action through a complete game response.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    activitySlide(2, "Trace the Maze Game", ["Follow the player's action through event, movement, condition, and feedback."], [
      "The player presses the right-arrow key: identify the event.",
      "The event starts a movement script; name the repeated action if it uses a loop.",
      "A sensing condition checks whether the sprite touches the wall.",
      "The IF rule chooses the response: move back after a wall, or continue toward the goal.",
      "Describe the win message as feedback to the player.",
    ], notes({
      questions: ["Which part is the event? Which part checks the wall?"],
      expectedAnswers: ["The key press event; the touching-wall condition."],
      tips: ["Use the actual Maze Game project where possible; accept equivalent descriptions of its logic."],
      transition: "Check what an event block does.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(3, "Review Check: Events", "What does an event block do?", ["Starts a script when something happens", "Stores a file forever", "Moves a sprite without instructions", "Changes the computer's operating system"], 0, "An event starts a script after something happens, such as clicking the green flag, clicking a sprite, or pressing a key.", notes({
      questions: ["Name one event used in a Scratch project."],
      expectedAnswers: ["Green flag, key press, sprite click, or backdrop change."],
      tips: ["Ask the learner to point to the event hat block if Scratch is open."],
      transition: "Compare the three loop behaviours.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(4, "Review Check: Loop Types", "Which loop keeps repeating until a condition becomes true?", ["repeat until", "repeat 10", "when sprite clicked", "say Hello!"], 0, "Repeat until keeps running while the condition is false and stops when it becomes true. Repeat 10 counts a fixed number; forever has no built-in end.", notes({
      questions: ["Which kind of loop has a fixed count?"],
      expectedAnswers: ["A counted repeat, such as repeat 10."],
      tips: ["Act out each loop with claps: four claps, clap forever until teacher signals stop, or repeat until a condition."],
      transition: "A sound block can change the timing of a script.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(5, "Review Check: Sound Timing", "Which block waits for a sound to finish before the next block runs?", ["play sound until done", "start sound", "next costume", "change volume by"], 0, "Play sound until done waits for completion. Start sound begins the sound and allows the script to continue immediately.", notes({
      questions: ["When might waiting for a sound help a dance project?"],
      expectedAnswers: ["When the next action should happen after the sound finishes or stay in order with the music."],
      tips: ["Use a short sound demonstration if the project is available."],
      transition: "Review how a variable stores and changes a value.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(6, "Review Check: Variables and I/O", "The score is 4 and a star is caught. Which action makes the score 5?", ["change score by 1", "set score to 1", "delete all clones", "switch backdrop"], 0, "Change adds to the current value, so 4 becomes 5. Set replaces the current value with the number you choose.", notes({
      questions: ["Which block should reset a score to zero at the start?"],
      expectedAnswers: ["Set score to 0."],
      tips: ["Use counters to model the old value and the updated value."],
      transition: "Now check how operators combine or compare rules.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(7, "Review Check: Logic Operators", "A player earns a point only if the sprite touches the apple AND presses the catch key. When is the rule true?", ["When both conditions are true", "When neither condition is checked", "When either condition must be false", "Only when the score is zero"], 0, "AND is true only when both conditions are true: touching the apple and pressing the catch key.", notes({
      questions: ["How would OR change the rule?"],
      expectedAnswers: ["OR would be true if at least one of its conditions is true."],
      tips: ["For an extension, NOT flips a true/false answer; avoid treating it as a third condition."],
      transition: "Use randomness and rules in a game-design challenge.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    activitySlide(8, "Game Project Detective", ["Find the idea in a project, then explain why it helps the player."], [
      "Dance Party: identify a start event, repeated dance action, and sound timing.",
      "Maze Game: identify a key event, wall condition, and feedback at the goal.",
      "Scoreboard Clicker: find the starting score and the action that changes it.",
      "Catch the Apples: find a random start, player control, catch rule, and score update.",
      "Choose one project and suggest a fair improvement; explain which rule would change.",
    ], notes({
      questions: ["Which project feature would you test first, and what result should happen?"],
      expectedAnswers: ["A testable prediction tied to a rule, input, score, or player response."],
      tips: ["A project does not need every block. Judge whether the child correctly identifies ideas used in that project."],
      transition: "Choose the best explanation of randomness.",
      age6: ["Use project pictures and let the child point to a feature before describing it."],
      age9: ["Ask the learner to name the block and predict one change if its value or rule changes."],
    })),
    quizSlide(9, "Review Check: Randomness", "What does 'pick random 1 to 10' do?", ["Chooses a number from the stated range", "Always chooses 10", "Adds one to every variable", "Repeats the script forever"], 0, "The random block chooses a value within the range. A project can use that value to make starts or outcomes vary.", notes({
      questions: ["Why might a game use a random starting position?"],
      expectedAnswers: ["To make rounds vary while keeping the position within chosen limits."],
      tips: ["Ask for a prediction, then test it several times if Scratch is available."],
      transition: "Finish by planning a fair catch rule.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    activitySlide(10, "Build the Catch Rule on Paper", ["Combine a player action, a condition, and a score change."], [
      "Write the event that begins or controls the game.",
      "Choose a fair catch condition: the apple touches the basket AND the score is still below 10.",
      "State the result: change score by 1, then move the apple to a new random position.",
      "Add a test: try a miss and a catch; say what should happen in each case.",
      "Explain where input, decision, variable, and output appear in your plan.",
    ], notes({
      questions: ["What should happen after a miss? What should happen after a successful catch?"],
      expectedAnswers: ["No point on a miss; on a catch, add one point and reset the apple for another round."],
      tips: ["Treat the condition as a design choice; the written rule must be consistent and testable."],
      transition: "The next section uses messages and clones to coordinate larger projects.",
      age6: ["Use paper cards for basket, apple, score, and point; act out one miss and one catch."],
      age9: ["Extend by adding a win condition using a comparison such as score = 10."],
    })),
  ],
};

export const session31: SessionData = {
  id: 31,
  title: "Review: Messages, Clones & Projects",
  subtitle: "Stories, Clones & Systems · Review",
  emoji: "📣",
  description: "A focused cumulative review of Sessions 15–18: broadcasts, sender/listener roles, ordered scenes, clone life cycles, cleanup, and project testing.",
  color: "#3B82F6",
  slides: [
    reviewSlide(1, "Messages and Copies: Two Useful Systems", [
      "A broadcast sends a named signal; it is not a speech bubble.",
      "The sender broadcasts; a listener starts with a matching 'when I receive' block.",
      "Broadcast and wait pauses the sender until listening scripts finish.",
      "Ordered messages can coordinate a title, scene, and ending in an interactive movie.",
      "The original sprite creates a clone; each clone starts its own clone script.",
      "A clone needs a clear job and a way to delete itself when it is finished.",
      "Testing checks that the story starts in order and clones do not pile up forever.",
    ], notes({
      questions: ["What listens for a broadcast? What should every clone have?"],
      expectedAnswers: ["A matching 'when I receive' script; a job and an end/cleanup condition."],
      tips: ["Use the Interactive Movie and Weather Factory projects as concrete examples."],
      transition: "Map a story message from its sender to its listener.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    activitySlide(2, "Story Message Map", ["Plan how characters know when each scene should begin."], [
      "Draw three cards: Title, Scene 1, and Ending.",
      "Choose which sprite sends each named broadcast and which sprites listen for it.",
      "Add 'and wait' only where the next scene should wait for the current action to finish.",
      "Trace the message path aloud from the green flag to the ending.",
      "Move one message out of order and debug the story map.",
    ], notes({
      questions: ["How does a receiving sprite know which script to start?"],
      expectedAnswers: ["It has a 'when I receive' block with the matching message name."],
      tips: ["Distinguish the message signal from dialogue displayed in a speech bubble."],
      transition: "Check the difference between a message and a character speaking.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(3, "Review Check: Broadcast or Speech?", "What does a broadcast do in a Scratch project?", ["Sends a named message that scripts can receive", "Shows a speech bubble to the player", "Creates a permanent file", "Moves every sprite to the same coordinate"], 0, "A broadcast sends a named signal. A sprite with a matching 'when I receive' block can respond to it.", notes({
      questions: ["What block can show words to the player instead?"],
      expectedAnswers: ["A say block or another visible text/speech feature."],
      tips: ["Ask the child to demonstrate the difference by acting as sender, listener, and narrator."],
      transition: "Some messages need the sender to wait.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(4, "Review Check: Broadcast and Wait", "Why might a director use 'broadcast message and wait' between scenes?", ["To let listening scripts finish before the sender continues", "To delete every sprite", "To repeat forever", "To change a variable to zero automatically"], 0, "Broadcast and wait helps keep actions in order by waiting for the receiving scripts to finish.", notes({
      questions: ["When might a plain broadcast be enough?"],
      expectedAnswers: ["When the sender does not need to wait before continuing."],
      tips: ["Use a simple title → scene → ending example and act out both timing choices."],
      transition: "Now review how a clone begins its own job.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(5, "Review Check: Clone Life Cycle", "What happens when a clone is created in Scratch?", ["The copy can start its own 'when I start as a clone' script", "The original sprite disappears forever", "The project saves itself to storage", "Every script stops"], 0, "A clone is a temporary copy. Its own clone-start script can give it a job such as falling or sparkling.", notes({
      questions: ["Name one useful job for a clone."],
      expectedAnswers: ["A raindrop falling, snowflake drifting, star appearing, or another repeated visual effect."],
      tips: ["Use one clone first; add many only after its movement and end condition work."],
      transition: "A good clone also needs a clean ending.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    quizSlide(6, "Review Check: Clone Cleanup", "A rain clone reaches the bottom of the screen. What should it usually do next?", ["Delete this clone", "Create endless extra copies", "Rename the operating system", "Change the score by 100"], 0, "Deleting a finished clone prevents unused copies from piling up and keeps the project running smoothly.", notes({
      questions: ["What might happen if finished clones never delete themselves?"],
      expectedAnswers: ["Too many copies may remain and make the project crowded or slow."],
      tips: ["Avoid promising a specific performance failure; focus on the need to manage temporary copies."],
      transition: "Put the clone life cycle into a Weather Factory test.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
    activitySlide(7, "Weather Factory: Test the Life Cycle", ["Trace one clone from creation to deletion before making many."], [
      "Name the original sprite and the event that begins creating copies.",
      "Describe the clone's starting position and movement job.",
      "Decide what condition means the clone has finished its job.",
      "Add the cleanup action and test one clone from start to finish.",
      "Only then test several clones and observe whether the project stays clear and responsive.",
    ], notes({
      questions: ["What are the create, act, and delete steps in this effect?"],
      expectedAnswers: ["The original creates a copy; it performs its movement/effect; it deletes itself when done."],
      tips: ["If the program is not available, use three cards and move one 'clone' through the sequence."],
      transition: "Finish by checking that the story messages and clone effects work together as planned.",
      age6: ["Act out one falling raindrop and remove its card at the bottom."],
      age9: ["Add a random start position and explain how you would test that each clone eventually deletes."],
    })),
    quizSlide(8, "Exit Check: Project Debugging", "A story's ending starts before the characters finish speaking. What should you inspect first?", ["Whether the message order and wait choice match the plan", "The computer's storage size", "The sprite's x-coordinate only", "Whether a clone changes the score"], 0, "If scenes happen too early, check message order and whether the sender should wait for listening scripts to finish.", notes({
      questions: ["How would you test the fix?"],
      expectedAnswers: ["Run the project from the start and check that each scene waits for the intended action."],
      tips: ["Ask the learner to predict the correct sequence before pressing the Green Flag."],
      transition: "You have reviewed how sprites communicate and how clones complete a job.",
      age6: scratchAge6,
      age9: scratchAge9,
    })),
  ],
};

export const additionalSessions: SessionData[] = [
  session23,
  session24,
  session25,
  session26,
  session27,
  session28,
  session29,
  session30,
  session31,
];
