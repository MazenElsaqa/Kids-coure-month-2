import type { SessionData, SlideData } from "./types";

type NotesInput = {
  questions: string[];
  expectedAnswers: string[];
  tips: string[];
  transition: string;
  age6?: string[];
  age9?: string[];
};

function notes(input: NotesInput): SlideData["teacherNotes"] {
  return input;
}

function contentSlide(
  id: number,
  title: string,
  emoji: string,
  content: string[],
  teacherNotes: SlideData["teacherNotes"],
  bgVariant: SlideData["bgVariant"] = "blue",
): SlideData {
  return {
    id,
    title,
    emoji,
    type: "content",
    content,
    mascotMessage: "Let's notice the pattern and explain it in our own words.",
    teacherNotes,
    bgVariant,
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
    mascotMessage: "Watch for one useful clue, then explain what you noticed.",
    teacherNotes,
    bgVariant: "purple",
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
    mascotMessage: "Try it together, test your idea, and tell us what changed.",
    teacherNotes,
    bgVariant: "orange",
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
    mascotMessage: "Choose an answer, then tell us why it fits.",
    teacherNotes,
    bgVariant: "green",
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
    mascotMessage: "You can explain more than you think!",
    teacherNotes,
    bgVariant: "purple",
  };
}

const foundationAge6 = [
  "Use picture cards, counters, or actions; keep calculations optional.",
];
const foundationAge9 = [
  "Ask for the exact unit symbol and one reason; extend with a short calculation.",
];

/**
 * Optional, video-inspired extension. The lesson teaches the data-management
 * idea independently; the linked video is only a teacher-previewed warm-up.
 */
export const session35: SessionData = {
  id: 35,
  title: "A Data Journey: Save, Find & Change",
  subtitle: "Computer & Digital Foundations · Optional Enrichment",
  emoji: "🗂️",
  description:
    "Explore how people and programs save, copy, search for, retrieve, modify, and delete stored information using fictional examples.",
  color: "#0F766E",
  slides: [
    contentSlide(
      1,
      "Information Can Take a Journey",
      "📥",
      [
        "Data is information a computer can store or use, such as a pretend game score, a chosen colour, or a picture.",
        "People may collect answers, then save or copy the information on a computer.",
        "Later, someone can search for and retrieve saved information, modify it, or delete it from a selected list or file.",
        "Collecting and displaying a group of answers are related steps, but they are different from changing stored data.",
        "Deleting one item or copy does not prove that every copy or backup everywhere is gone.",
        "This lesson is about using information—not about how bits encode it.",
      ],
      notes({
        questions: ["Name one piece of pretend information. After it is saved, what could someone do with it?"],
        expectedAnswers: ["Examples include copying it, searching for and retrieving it, modifying it, or deleting it from the selected file/list."],
        tips: ["CSTA alignment: 1A-DA-05 covers saving, copying, searching/retrieving, modifying, and deleting data; collecting/displaying data are treated separately in 1A-DA-06. Deleting one copy does not guarantee every backup is erased."],
        transition: "A short video can help us notice familiar examples of digital information.",
        age6: ["Use a picture of a score, colour, and sound; let the learner point to one."],
        age9: ["Ask the learner to distinguish the information itself from an action performed on it; later, extend with a small tally chart and a claim supported by its count."],
      }),
      "blue",
    ),
    videoSlide(
      2,
      "Optional Watch: What Is Digital Data?",
      "J77rxw84cC8",
      "Teacher-previewed warm-up: notice kinds of information a computer may store or use. The transcript was not independently verified, so use this clip as a prompt—not as the lesson's source for binary or storage facts.",
      notes({
        questions: ["What kind of information did you notice: a word, number, picture, or sound?"],
        expectedAnswers: ["Accept an example the learner actually noticed; do not require a specific unverified claim from the clip."],
        tips: ["Preview before class. Skip the video if its content does not fit; the rest of this lesson is complete without it."],
        transition: "Let's describe the actions we can take with a simple pretend list.",
        age6: ["Pause once or twice and name one visible example together."],
        age9: ["Ask for an observation, not a technical detail that the clip's transcript did not confirm."],
      }),
    ),
    contentSlide(
      3,
      "Actions for Stored Data",
      "🔎",
      [
        "Save or copy: keep information on a computer or make another version for a task.",
        "Search and retrieve: look for saved information and bring it back to use.",
        "Modify: change or correct information that is already stored.",
        "Delete: remove an item from the selected practice list or file.",
        "Collecting answers and displaying a group of results are related, separate steps.",
      ],
      notes({
        questions: ["Which action makes another version? Which action corrects an existing item?"],
        expectedAnswers: ["Copy makes another version; modify changes the stored item."],
        tips: ["CSTA separates collecting/displaying data from the stored-data operations. Removing an item from one list does not promise that all copies or backups are permanently erased."],
        transition: "Now act out those actions with fictional classroom data.",
        age6: ["Use three action cards first: save, find, and change; introduce copy and delete with an adult-guided example."],
        age9: ["Ask when removing an item from one practice list would make sense, and why that does not prove that every backup has vanished."],
      }),
      "green",
    ),
    activitySlide(
      4,
      "A Fictional Data Practice",
      ["Use invented fruit choices. On a device, use a simple practice list or table; cards can model the same actions."],
      [
        "Collect three fictional choices, such as apple, pear, and plum; do not add real names or private details.",
        "Save the practice list and make a second copy, or create a duplicate row of cards as the model.",
        "Search for one saved choice and retrieve it so a partner can see it.",
        "Modify one choice in the practice copy, then delete one item from that copy.",
        "Explain that deleting this entry does not prove that another copy or backup is gone.",
        "Ask a partner to check that the selected list now shows the expected result.",
      ],
      notes({
        questions: ["How can your partner tell that the information changed?"],
        expectedAnswers: ["The selected practice list shows the modified item or no longer shows the item deleted from that list."],
        tips: ["Keep examples fictional. Never ask children to enter passwords, addresses, or real account details. Do not say deleting one entry erases every copy everywhere."],
        transition: "Choose the action that corrects an item already in a list.",
        age6: ["Use large picture cards and let the learner move them instead of writing."],
        age9: ["Count four pretend choices, make a simple tally chart, then state one claim supported by the counts."],
      }),
    ),
    quizSlide(
      5,
      "Quick Check: Fix the Information",
      "A pretend list already contains 'blue'. You discover it should say 'green'. What should the program do?",
      ["Update or replace the item", "Add the same wrong item again", "Turn off the screen", "Change a different list's name"],
      0,
      "Updating or replacing changes the stored item so the list has the corrected information.",
      notes({
        questions: ["Why might adding a second item be confusing?"],
        expectedAnswers: ["The list could contain both the incorrect and corrected entries, so it would not be a clean correction."],
        tips: ["Accept everyday language such as 'fix it' before introducing 'update'."],
        transition: "Plan a tiny tool that helps someone manage a pretend list.",
        age6: foundationAge6,
        age9: foundationAge9,
      }),
    ),
    activitySlide(
      6,
      "Design a Tiny List Helper",
      ["A useful program has a clear job and a way to check that it worked."],
      [
        "Choose fictional data, such as pretend snacks or quest items.",
        "Decide how to save or copy the information and how someone can search for and retrieve it.",
        "Decide how to modify or delete one item from the selected practice list.",
        "Test the plan with a partner: does the selected list show the expected result?",
        "For age 9, make a tally of four fictional choices and support one statement with the count.",
        "Explain one kind of information your program should not collect for this classroom activity.",
      ],
      notes({
        questions: ["Which action will your list helper perform first? How will you test the result?"],
        expectedAnswers: ["A clear save/copy/search/retrieve/modify/delete action, followed by checking the selected practice list."],
        tips: ["This is a design activity, not a requirement to build a new Scratch project."],
        transition: "Review the data actions before moving to storage scale.",
        age6: ["Choose one action and demonstrate it with cards."],
        age9: ["Write a short test case: starting list, action, expected new list; then create a tally chart and support one conclusion with its count."],
      }),
    ),
    reviewSlide(
      7,
      "Data Journey: Remember",
      [
        "Data is information a computer can store or use.",
        "Stored data can be saved, copied, searched for and retrieved, modified, or deleted from a selected file/list.",
        "Collecting answers and displaying a group of results are related but separate actions.",
        "A list is one way to organize related items; it is not the only way.",
        "Deleting one item or copy does not prove every backup has been erased.",
        "Use fictional examples when practising classroom data actions.",
      ],
      notes({
        questions: ["Which action changes an existing item? Which action locates one?"],
        expectedAnswers: ["Modify/update changes it; search/retrieve locates and brings it back."],
        tips: ["Ask the learner to demonstrate an action instead of memorizing the list; distinguish one selected file from every other copy."],
        transition: "Next, compare how small and large storage units are named.",
        age6: foundationAge6,
        age9: foundationAge9,
      }),
    ),
  ],
};

/** Optional extension beyond the exact kB/KiB comparisons in Session 25. */
export const session36: SessionData = {
  id: 36,
  title: "Storage Scale: From Bytes to Terabytes",
  subtitle: "Computer & Digital Foundations · Optional Enrichment",
  emoji: "📚",
  description:
    "Extend storage-size learning to MB, GB, and TB while keeping decimal and binary prefixes separate and accurate.",
  color: "#2563EB",
  slides: [
    contentSlide(
      1,
      "Storage Has a Scale",
      "📏",
      [
        "A byte is a small unit. Kilobytes, megabytes, gigabytes, and terabytes describe larger amounts of data.",
        "A storage capacity tells us how much data a device can hold; a file size tells us how large one file is.",
        "The unit label matters: decimal kB is not the same as binary KiB.",
        "We will extend Session 25's unit rules instead of guessing from a video.",
      ],
      notes({
        questions: ["Which sounds like a larger amount: a megabyte or a gigabyte? What should you check before converting?"],
        expectedAnswers: ["A gigabyte; check whether the label is decimal GB or binary GiB."],
        tips: ["This is an extension. Learners who need more practice can revisit Session 25 first."],
        transition: "A visual scale may help us imagine how quickly the named units grow.",
        age6: ["Use size cards in a row; focus on the order from smaller to larger, not multiplication."],
        age9: ["Ask the learner to state the prefix system before choosing a multiplier."],
      }),
      "blue",
    ),
    videoSlide(
      2,
      "Optional Watch: The Scale of Data Storage",
      "i1SiWE7E48Q",
      "Teacher-previewed visual prompt: notice that storage amounts can grow very large. The transcript was not independently verified; do not use this clip to teach unit symbols or multipliers.",
      notes({
        questions: ["What did the visual scale help you imagine? Which unit labels will we verify ourselves?"],
        expectedAnswers: ["Accept a visual observation; verify the labels using the exact rules on the next slide."],
        tips: ["Preview first and skip if the clip is unavailable or unclear. All assessed facts are taught in this lesson, not taken from the unverified transcript."],
        transition: "Here are the two separate ladders with their exact multipliers.",
        age6: ["Show only a few steps such as byte, kB, MB, and GB."],
        age9: ["Ask the learner to distinguish a visual comparison from a precise conversion rule."],
      }),
    ),
    contentSlide(
      3,
      "Two Ladders: Keep Their Labels",
      "🪜",
      [
        "Decimal ladder: 1 kB = 1,000 bytes; 1 MB = 1,000 kB; 1 GB = 1,000 MB; 1 TB = 1,000 GB.",
        "Binary ladder: 1 KiB = 1,024 bytes; 1 MiB = 1,024 KiB; 1 GiB = 1,024 MiB; 1 TiB = 1,024 GiB.",
        "The letter i in KiB, MiB, GiB, and TiB marks the binary prefixes.",
        "Do not silently swap a decimal label for a binary one.",
      ],
      notes({
        questions: ["How many MB are in 1 GB? How many MiB are in 1 GiB?"],
        expectedAnswers: ["1,000 MB; 1,024 MiB."],
        tips: ["Keep the symbols visible during practice. kB/MB/GB/TB use powers of 1,000; KiB/MiB/GiB/TiB use powers of 1,024."],
        transition: "A unit tells us an amount, but it does not tell us how many files there are.",
        age6: ["Match decimal labels to 1,000 and binary labels to 1,024 without requiring multiplication."],
        age9: ["Solve one decimal and one binary conversion, writing the unit beside each answer."],
      }),
      "green",
    ),
    contentSlide(
      4,
      "A Capacity Is Not a File Count",
      "🧠",
      [
        "A drive's capacity is the total storage space available; a photo, song, or video has its own file size.",
        "Two photos can have different sizes because their details and file formats can differ.",
        "So a terabyte does not always hold one fixed number of photos or videos.",
        "Compare labelled amounts, not a guessed number of files.",
      ],
      notes({
        questions: ["Can every photo be promised to use the same amount of storage? Why not?"],
        expectedAnswers: ["No. File sizes vary with the image and how it is stored."],
        tips: ["Avoid quoting exact photo/song counts unless a specific file size and assumptions are provided."],
        transition: "Sort the unit cards, then solve only the conversions that match their labels.",
        age6: ["Use one small-file card and one large-capacity card; explain which amount is bigger."],
        age9: ["Explain why capacity divided by file size would need the actual size of each file to estimate a count."],
      }),
      "purple",
    ),
    activitySlide(
      5,
      "Build Two Storage Ladders",
      ["Keep the decimal and binary cards in separate rows."],
      [
        "Sort each row from smaller to larger: byte → kB → MB → GB → TB; then byte → KiB → MiB → GiB → TiB.",
        "Place 1,000 beside each decimal step and 1,024 beside each binary step.",
        "For age 9: solve 3 GB in MB and 3 GiB in MiB.",
        "Explain why a label such as 'GB' must not be answered with the binary rule for 'GiB'.",
        "Choose which labelled amount is larger: 1 GB or 1 GiB, and explain the rule used.",
      ],
      notes({
        questions: ["What does the i tell you in GiB? What is 3 GB in MB?"],
        expectedAnswers: ["It marks the binary prefix; 3 GB = 3,000 MB using the decimal rule."],
        tips: ["1 GiB is 1,024 MiB and 1 GB is 1,000 MB; only compare them after translating both with a consistent base if a precise byte comparison is requested."],
        transition: "Check the decimal step from gigabytes to megabytes.",
        age6: ["Build the two rows with cards; skip written arithmetic."],
        age9: ["Show each answer as amount × multiplier and preserve the unit."],
      }),
    ),
    quizSlide(
      6,
      "Quick Check: Decimal Storage",
      "Using decimal units, how many megabytes are in 1 GB?",
      ["1,000 MB", "1,024 MB", "8 MB", "1,000 bytes"],
      0,
      "GB is the decimal gigabyte prefix here, so 1 GB equals 1,000 MB. The binary unit is GiB, not GB.",
      notes({
        questions: ["What would change if the question said 1 GiB in MiB?"],
        expectedAnswers: ["Use the binary rule: 1 GiB = 1,024 MiB."],
        tips: ["Ask the learner to point to GB or GiB before answering."],
        transition: "Finish by explaining which rule belongs to each ladder.",
        age6: foundationAge6,
        age9: foundationAge9,
      }),
    ),
    quizSlide(
      7,
      "Quick Check: Binary Storage",
      "How many MiB are in 1 GiB?",
      ["1,000 MiB", "1,024 MiB", "8 MiB", "1,024 bytes"],
      1,
      "GiB is a binary prefix, so 1 GiB equals 1,024 MiB. Do not replace GiB with the decimal label GB.",
      notes({
        questions: ["What does the i in GiB tell you?"],
        expectedAnswers: ["The unit uses the binary prefix."],
        tips: ["For six-year-olds, make this a recognition question; for nine-year-olds, ask them to explain the multiplier."],
        transition: "Review what storage capacity and file size each describe.",
        age6: foundationAge6,
        age9: foundationAge9,
      }),
    ),
    reviewSlide(
      8,
      "Storage Scale: Remember",
      [
        "Read the unit symbol before choosing a multiplier.",
        "Decimal kB, MB, GB, and TB use steps of 1,000.",
        "Binary KiB, MiB, GiB, and TiB use steps of 1,024.",
        "Capacity is available room; file sizes vary, so avoid guessing a fixed file count.",
      ],
      notes({
        questions: ["State one decimal rule and one binary rule."],
        expectedAnswers: ["Examples: 1 GB = 1,000 MB; 1 GiB = 1,024 MiB."],
        tips: ["If the learner mixes the labels, return to the two-row card sort."],
        transition: "The Foundations Review Lab will connect these ideas with the rest of the section.",
        age6: foundationAge6,
        age9: foundationAge9,
      }),
    ),
  ],
};
