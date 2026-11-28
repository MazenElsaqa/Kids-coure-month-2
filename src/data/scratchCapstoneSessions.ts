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
  options: Pick<SlideData, "bgVariant" | "newWord" | "codeSnippet"> = {},
): SlideData {
  return {
    id,
    title,
    emoji,
    type: "content",
    content,
    mascotMessage: "Notice the idea, predict what will happen, and explain why.",
    teacherNotes,
    ...options,
  };
}

function activitySlide(
  id: number,
  title: string,
  content: string[],
  activitySteps: string[],
  teacherNotes: SlideData["teacherNotes"],
  codeSnippet?: string[],
): SlideData {
  return {
    id,
    title,
    emoji: "🧩",
    type: "activity",
    content,
    activitySteps,
    codeSnippet,
    mascotMessage: "Build one small part, test it, then decide what to change.",
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
    mascotMessage: "Choose an answer, then tell us what clue helped you.",
    teacherNotes,
    bgVariant: "green",
  };
}

function debugSlide(
  id: number,
  title: string,
  scenario: string,
  steps: string[],
  buggyIndex: number,
  whyItsWrong: string,
  fixHint: string,
  teacherNotes: SlideData["teacherNotes"],
): SlideData {
  return {
    id,
    title,
    emoji: "🐞",
    type: "debug",
    content: [],
    debug: { scenario, steps, buggyIndex, whyItsWrong, fixHint },
    mascotMessage: "A bug is a clue: inspect the plan, then test a small fix.",
    teacherNotes,
    bgVariant: "purple",
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
    content: ["Explain each idea in your own words."],
    reviewPoints,
    mascotMessage: "You can teach these ideas to another programmer.",
    teacherNotes,
    bgVariant: "blue",
  };
}

const age6 = [
  "Use picture cards, a partner acting as the computer, and short turn-taking; accept pointing or a short spoken answer.",
];
const age9 = [
  "Ask for the Scratch block name and a reason; extend with a changed input, a short trace, or an independent test.",
];
const scratchNotes = (input: Omit<NotesInput, "age6" | "age9">): SlideData["teacherNotes"] =>
  notes({ ...input, age6, age9 });

export const session19: SessionData = {
  id: 19,
  title: "Lists: One Place for Many Values",
  subtitle: "Session 19 · Scratch Data Lab",
  emoji: "📋",
  description:
    "Compare one-value variables with lists, practise item positions and list length, then build a small question picker.",
  color: "#0F766E",
  slides: [
    contentSlide(
      1,
      "One Box or a Whole Row?",
      "🧺",
      [
        "A variable is like one labelled box that holds one current value.",
        "A list is like a labelled row that can hold many values together.",
        "Use a score variable for one score; use a list for several quiz questions or quest items.",
      ],
      scratchNotes({
        questions: ["If a game has six questions, should we make six separate variables or one list?"],
        expectedAnswers: ["One list can keep the related questions together; a variable can still store one current score."],
        tips: ["Start with real paper cards: one card for a variable and a row of cards for a list."],
        transition: "Let's see how Scratch names and finds each place in a list.",
      }),
      {
        bgVariant: "blue",
        newWord: {
          word: "list",
          pronunciation: "list",
          meaning: "A named collection that can hold several values",
          example: "A Questions list can hold many question prompts.",
        },
      },
    ),
    contentSlide(
      2,
      "List Positions Start at 1",
      "🔢",
      [
        "Scratch gives each list item a position number, starting at 1—not 0.",
        "The item block reads the value at a chosen position.",
        "The length block tells how many items are in the list right now.",
        "If an item is added or deleted, later positions may move.",
      ],
      scratchNotes({
        questions: ["What is the position of the first item? How could we check how many items are in the list?"],
        expectedAnswers: ["Position 1; use the length of the list."],
        tips: ["Move three numbered cards when demonstrating positions; avoid starting the count at zero."],
        transition: "Build a tiny inventory and read its first item.",
      }),
      {
        bgVariant: "green",
        codeSnippet: [
          "add [key] to [QuestBag]",
          "add [map] to [QuestBag]",
          "item (1) of [QuestBag]  →  key",
          "length of [QuestBag]  →  2",
        ],
      },
    ),
    activitySlide(
      3,
      "Build a Four-Item Quest Bag",
      ["The list is useful because the related items stay together."],
      [
        "Create a list named QuestBag and add four pretend items, one at a time.",
        "Use item (1) of QuestBag to show or say the first item.",
        "Use length of QuestBag to report how many items are stored.",
        "Add one more item, run the project again, and predict what changes.",
        "For age 9: delete item (2), then explain why the old item (3) now has a different position.",
      ],
      scratchNotes({
        questions: ["What did length report before and after you added an item?"],
        expectedAnswers: ["The count increased by one; the list's values remain grouped together."],
        tips: ["Use fictional items only. Let learners test the project instead of copying the whole script at once."],
        transition: "Sometimes a program needs to check whether a particular item is present.",
      }),
      [
        "when green flag clicked",
        "delete all of [QuestBag]",
        "add [key] to [QuestBag]",
        "add [map] to [QuestBag]",
        "say (item (1) of [QuestBag])",
      ],
    ),
    contentSlide(
      4,
      "Ask the List a Yes-or-No Question",
      "🔎",
      [
        "The list contains [thing]? block checks whether that value appears in a chosen list.",
        "It gives a yes-or-no answer that can fit into an if block.",
        "Delete all of [list] clears that list; it does not delete other lists or the whole project.",
      ],
      scratchNotes({
        questions: ["If QuestBag contains a key, what could the game do next?"],
        expectedAnswers: ["It could open a pretend door, show a message, or choose another planned response."],
        tips: ["Keep the example fictional and explain the exact list selector shown on the block."],
        transition: "Use a list as a deck of question cards.",
      }),
      {
        bgVariant: "purple",
        codeSnippet: [
          "if <[QuestBag] contains [key]?> then",
          "    say [The pretend door opens!]",
          "else",
          "    say [Find the key first.]",
          "delete all of [QuestBag]  →  clears this list",
        ],
      },
    ),
    activitySlide(
      5,
      "Project: Random Question Picker",
      ["Make a small deck of questions, then let Scratch pick a position."],
      [
        "Create a Questions list and add at least four classroom-safe prompts.",
        "Choose a random position from 1 to the list's current length.",
        "Ask the item at that position and wait; run the project a few times.",
        "For age 9: store the chosen position in a variable, delete that item after it is asked, and stop when the list is empty.",
        "Test the empty-list case before asking Scratch to choose a random position.",
      ],
      scratchNotes({
        questions: ["Why should the random position use the list's length?"],
        expectedAnswers: ["It keeps the chosen position within the items currently in the list."],
        tips: ["Add all starter questions before using the picker. If learners remove items, check for an empty list before choosing a random number."],
        transition: "Check the first position in a Scratch list.",
      }),
      [
        "when green flag clicked",
        "set [questionNumber] to (pick random (1) to (length of [Questions]))",
        "ask (item (questionNumber) of [Questions]) and wait",
      ],
    ),
    quizSlide(
      6,
      "Quick Check: Where Does Counting Start?",
      "In Scratch, what position number belongs to the first item in a list?",
      ["0", "1", "The list's length", "It has no position"],
      1,
      "Scratch list positions begin at 1. The length block reports how many items are in the list.",
      scratchNotes({
        questions: ["If there are five items, what does length report?"],
        expectedAnswers: ["5."],
        tips: ["Invite the learner to point to the first numbered card before answering."],
        transition: "Tell a partner one reason to choose a list instead of many separate variables.",
      }),
    ),
    reviewSlide(
      7,
      "Lists: Exit Ticket",
      [
        "A variable stores one current value; a list groups many related values.",
        "The first Scratch list position is 1.",
        "Item reads a position; length counts items; contains? checks for a value.",
        "Adding or deleting an item can change later positions.",
        "A random list position must stay within the current list length.",
      ],
      scratchNotes({
        questions: ["Show or describe a list with three items. Which block reads the second item?"],
        expectedAnswers: ["The learner identifies item (2) of the named list."],
        tips: ["Accept a paper model or a Scratch demonstration; ask for one small test."],
        transition: "Next, turn a repeated instruction into a reusable custom block.",
      }),
    ),
    {
      id: 8,
      title: "Homework: Make a Tiny Collection",
      emoji: "🏠",
      type: "homework",
      content: ["Draw or build a pretend list for a game, recipe, or treasure hunt."],
      activitySteps: [
        "Add at least three fictional items.",
        "Label which item is at position 1.",
        "Write how length would help the program.",
        "Optional: add or remove one item and update the positions.",
      ],
      mascotMessage: "A tidy list makes many values easier to use.",
      teacherNotes: scratchNotes({
        questions: ["What does your list store, and how would the program find one item?"],
        expectedAnswers: ["Any safe fictional collection with a correct position or length explanation."],
        tips: ["Do not require a device; paper cards are an equivalent model."],
        transition: "Session 19 complete.",
      }),
      bgVariant: "purple",
    },
  ],
};

export const session20: SessionData = {
  id: 20,
  title: "My Blocks: Make Your Own Instructions",
  subtitle: "Session 20 · Reusable Code Workshop",
  emoji: "🧱",
  description:
    "Discover how Scratch My Blocks name a useful group of steps, then build and reuse a custom block with inputs.",
  color: "#7C3AED",
  slides: [
    contentSlide(
      1,
      "When Steps Keep Coming Back",
      "🔁",
      [
        "If the same group of steps appears again and again, repeated copies are hard to update.",
        "A custom block gives that group a clear name and a reusable place.",
        "Changing the definition can improve every call that uses that block.",
      ],
      scratchNotes({
        questions: ["What could go wrong if we copy the same long script into three places?"],
        expectedAnswers: ["We may forget to update one copy or put a step in a different order."],
        tips: ["Show repeated paper instructions before opening My Blocks; learners should notice the problem first."],
        transition: "A custom block has a definition and places where we call it.",
      }),
      {
        bgVariant: "blue",
        newWord: {
          word: "custom block",
          pronunciation: "KUS-tum block",
          meaning: "A Scratch block we create to name a group of instructions",
          example: "A move-and-turn block can be reused in several places.",
        },
      },
    ),
    contentSlide(
      2,
      "Definition or Call?",
      "📣",
      [
        "The define block is the recipe: it holds the steps that make the new command work.",
        "The custom block in a script is a call: it asks Scratch to run that recipe here.",
        "Making a definition does not automatically run it; a script must call the block.",
      ],
      scratchNotes({
        questions: ["Which part contains the recipe? Which part starts the recipe?"],
        expectedAnswers: ["The definition contains the steps; a call runs them."],
        tips: ["Use a chef-and-recipe analogy, then point to the definition and call separately in Scratch."],
        transition: "Add number inputs so one command can use different values.",
      }),
      {
        bgVariant: "green",
        codeSnippet: [
          "define move and turn (steps) (degrees)",
          "    move (steps) steps",
          "    turn clockwise (degrees) degrees",
          "",
          "when green flag clicked",
          "    move and turn (40) (30)  ← call",
        ],
      },
    ),
    contentSlide(
      3,
      "Inputs Let One Block Do More",
      "🎛️",
      [
        "An input is a value sent to a custom block when it is called.",
        "Here, steps controls movement and degrees controls the turn.",
        "The same custom block can make a short move or a longer move without copying its definition.",
      ],
      scratchNotes({
        questions: ["If the steps input changes from 20 to 80, what should change?"],
        expectedAnswers: ["The sprite moves farther; the shared definition stays the same."],
        tips: ["For age 6, begin with a fixed custom block, then let the learner change one visible input. For age 9, name both inputs and predict their effects."],
        transition: "Build the block and test two different calls.",
      }),
      {
        bgVariant: "purple",
        codeSnippet: [
          "move and turn (20) (15)  → short move, small turn",
          "move and turn (80) (90)  → longer move, larger turn",
        ],
      },
    ),
    activitySlide(
      4,
      "Build: Move and Turn",
      ["Create a named command, define its two actions, then call it."],
      [
        "In My Blocks, choose Make a Block and name it move and turn.",
        "Add a number input named steps and a number input named degrees.",
        "Under define, attach move (steps) steps and turn clockwise (degrees) degrees.",
        "In a Green Flag script, call the block with small values, then try larger values.",
        "Use a backdrop grid or paper path to predict the route before pressing the flag.",
      ],
      scratchNotes({
        questions: ["What happens if the call is missing? What does each input control?"],
        expectedAnswers: ["The definition will not run by itself; steps controls distance and degrees controls the turn."],
        tips: ["Build and test after each small change. Scratch custom blocks do not produce a returned answer value in this lesson."],
        transition: "Now replace repeated instructions with one named call.",
      }),
      [
        "define move and turn (steps) (degrees)",
        "    move (steps) steps",
        "    turn clockwise (degrees) degrees",
        "",
        "when green flag clicked",
        "    move and turn (40) (30)",
        "    move and turn (20) (90)",
      ],
    ),
    activitySlide(
      5,
      "Refactor a Repeated Dance",
      ["Keep one definition; use it wherever the project needs the same move."],
      [
        "Find two similar movement sections in a dance or story project.",
        "Make one custom block that names the repeated move.",
        "Replace each repeated section with a call to the custom block.",
        "Change one input and test whether both calls use the updated definition.",
        "For age 9: explain how this is an example of decomposition—one larger program uses named smaller jobs.",
      ],
      scratchNotes({
        questions: ["What is easier to change now: one definition or several copied scripts?"],
        expectedAnswers: ["One definition can update all calls that use it."],
        tips: ["Keep the original project or a copy before refactoring so learners can compare the two versions."],
        transition: "Hunt for the line that stops the custom move from being used.",
      }),
      [
        "define move and turn (steps) (degrees)",
        "    move (steps) steps",
        "    turn clockwise (degrees) degrees",
        "when green flag clicked",
        "    move and turn (40) (30)",
        "    move and turn (20) (90)",
      ],
    ),
    debugSlide(
      6,
      "Bug Hunt: Why Did the Turn Disappear?",
      "The new block is defined, but the sprite moves straight and never turns.",
      [
        "define move and turn (steps) (degrees)",
        "    move (steps) steps",
        "    turn clockwise (degrees) degrees",
        "when green flag clicked → move 40 steps",
      ],
      3,
      "The Green Flag script bypasses the custom block. Calling move and turn with both inputs runs the shared definition, including the turn.",
      "Look for a call that names the custom block, not a separate move block.",
      scratchNotes({
        questions: ["Which line should replace the plain move call?"],
        expectedAnswers: ["Call move and turn with a steps value and a degrees value."],
        tips: ["Ask learners to predict the change before fixing and testing the script."],
        transition: "Check what must happen for a definition to run.",
      }),
    ),
    quizSlide(
      7,
      "Quick Check: Make It Run",
      "You have defined a custom block. What must your project do to run its steps?",
      ["Call the custom block from a running script", "Rename the Stage", "Add more costumes", "Delete the Green Flag"],
      0,
      "A custom-block definition stores the instructions; a script must call the block to run them.",
      scratchNotes({
        questions: ["What does an input change when the block is called?"],
        expectedAnswers: ["A value used by the definition, such as movement distance or turn amount."],
        tips: ["Accept a spoken explanation or a small Scratch demonstration."],
        transition: "Finish by teaching the definition-call-input pattern.",
      }),
    ),
    reviewSlide(
      8,
      "My Blocks: Exit Ticket",
      [
        "A custom block is a named group of instructions.",
        "The definition holds the recipe; a call runs it.",
        "Inputs provide values that can change what one reusable block does.",
        "Replacing repeated code makes projects easier to update and explain.",
      ],
      scratchNotes({
        questions: ["Name one repeated job that could become a custom block."],
        expectedAnswers: ["Accept a clear repeated action such as move-and-turn, greet-player, or draw-a-step."],
        tips: ["For age 6, demonstrate a fixed custom block; age 9 can describe or test an input."],
        transition: "Next, use variables and conditions to make a sprite jump in a platform game.",
      }),
    ),
  ],
};

export const session21: SessionData = {
  id: 21,
  title: "Platformer: Gravity & Jumping",
  subtitle: "Session 21 · Game Physics Build",
  emoji: "🕹️",
  description:
    "Build a simple platform-game movement engine using a vertical-speed variable, gravity, ground sensing, and a jump condition.",
  color: "#2563EB",
  slides: [
    contentSlide(
      1,
      "Can You Make a Sprite Jump?",
      "🏃",
      [
        "A platform game often lets a character move sideways, fall, and jump from the ground.",
        "We will build the smallest useful version first: a player, a floor, left/right movement, and a jump.",
        "The goal is predictable movement—not a perfect real-world physics simulation.",
      ],
      scratchNotes({
        questions: ["What should happen if the player presses Space while standing on the floor?"],
        expectedAnswers: ["The player should move upward, then gravity should pull it back down."],
        tips: ["Show a quick paper sketch of the player, floor, and goal before coding."],
        transition: "The Stage coordinates give us a simple way to describe up and down.",
      }),
      { bgVariant: "blue" },
    ),
    contentSlide(
      2,
      "Gravity as a Changing Number",
      "⬆️⬇️",
      [
        "On the Scratch Stage, positive y is up and negative y is down.",
        "A variable named verticalSpeed stores how much the player moves vertically on each loop.",
        "Gravity is our model: each loop makes verticalSpeed a little smaller, pulling the player downward.",
        "A jump sets verticalSpeed to a positive value for a moment.",
      ],
      scratchNotes({
        questions: ["If verticalSpeed is positive, which way does the player move? What does gravity do to it?"],
        expectedAnswers: ["Positive y moves upward; gravity gradually lowers the verticalSpeed value."],
        tips: ["Treat the variable as a movement amount for this game model; avoid implying it is a measured real-world force."],
        transition: "Create the player and floor, then test walking before adding gravity.",
      }),
      {
        bgVariant: "purple",
        codeSnippet: [
          "positive y  →  up",
          "negative y  →  down",
          "verticalSpeed  →  how much y changes each loop",
          "change [verticalSpeed] by (-1)  →  simple gravity model",
        ],
      },
    ),
    activitySlide(
      3,
      "Step 1: Make the Player Walk",
      ["Choose one player sprite and paint a simple floor in a single color."],
      [
        "Place the player just above the floor and choose its size.",
        "Use the Green Flag to start a forever loop.",
        "If the right arrow is pressed, change x by 4; if the left arrow is pressed, change x by -4.",
        "Test each direction before adding jumping.",
      ],
      scratchNotes({
        questions: ["Which coordinate changes for left and right movement?"],
        expectedAnswers: ["x changes; y is the up-and-down coordinate."],
        tips: ["Use one clearly colored floor region so the touching-color test is easier to understand."],
        transition: "Now store vertical movement in one variable.",
      }),
      [
        "when green flag clicked",
        "set [verticalSpeed] to (0)",
        "forever",
        "    if <key [right arrow] pressed?> then change x by (4)",
        "    if <key [left arrow] pressed?> then change x by (-4)",
      ],
    ),
    activitySlide(
      4,
      "Step 2: Add Ground, Gravity, and Jump",
      ["Use the ground check before applying a jump; then update y and gravity in a clear order."],
      [
        "Create the verticalSpeed variable and set it to 0 at the Green Flag.",
        "If the player touches the floor and Space is pressed, set verticalSpeed to 12.",
        "If the player touches the floor but Space is not pressed, set verticalSpeed to 0.",
        "Change y by verticalSpeed, then change verticalSpeed by -1 inside the forever loop.",
        "Playtest from a fresh start; adjust the floor color and player position if the sensor misses.",
      ],
      scratchNotes({
        questions: ["Why does the program check for the floor before setting the jump speed?"],
        expectedAnswers: ["It makes the jump begin only when the player is on the ground, not while already falling."],
        tips: ["This is a beginner model; test the sensor carefully. Do not add moving platforms until the basic jump works."],
        transition: "Read the full loop, then test one change at a time.",
      }),
      [
        "when green flag clicked",
        "set [verticalSpeed] to (0)",
        "forever",
        "    if <touching color [floor]?> then",
        "        if <key [space] pressed?> then set [verticalSpeed] to (12)",
        "        else set [verticalSpeed] to (0)",
        "    change y by (verticalSpeed)",
        "    change [verticalSpeed] by (-1)",
      ],
    ),
    activitySlide(
      5,
      "Tune the Jump Like a Game Designer",
      ["A tiny change can make the game feel very different. Predict first, then test."],
      [
        "Record the starting jump value: verticalSpeed = 12.",
        "Try a smaller jump value, such as 8, and compare the height.",
        "Restore 12, then make gravity gentler by changing -1 to -0.5 if your Scratch number input allows it.",
        "Keep the version that is easiest to control; do not change jump and gravity at the same time.",
        "Optional age 9: add a goal sprite and a touching condition that displays a win message.",
      ],
      scratchNotes({
        questions: ["Which change affected jump height? Which change affected how quickly the player fell?"],
        expectedAnswers: ["The starting verticalSpeed affects the jump; the gravity step affects the fall. Accept observations supported by tests."],
        tips: ["The numeric values are starting points, not universal settings; sprite size and floor placement affect the feel."],
        transition: "Hunt for a sign error that makes the player go the wrong way.",
      }),
    ),
    debugSlide(
      6,
      "Bug Hunt: The Jump Goes Down",
      "The player presses Space on the floor, but the first jump movement goes downward.",
      [
        "if <touching color [floor]?> and <key [space] pressed?>",
        "set [verticalSpeed] to (-12)",
        "change y by (verticalSpeed)",
        "change [verticalSpeed] by (-1)",
      ],
      1,
      "The jump value is negative, so the player initially moves down. Use a positive verticalSpeed for an upward jump; gravity can lower it afterward.",
      "Check the sign of the value that is set when Space is pressed.",
      scratchNotes({
        questions: ["Which value should replace -12, and what direction will it start the player moving?"],
        expectedAnswers: ["A positive value such as 12; positive y moves up."],
        tips: ["Have learners point to the y-direction model before editing the number."],
        transition: "Check why the ground condition matters.",
      }),
    ),
    quizSlide(
      7,
      "Quick Check: Jump Only from the Floor",
      "Why does the jump rule check whether the player is touching the floor?",
      [
        "So the player can start a jump while grounded",
        "So every key press changes the backdrop",
        "So the variable becomes a list",
        "So gravity stops forever",
      ],
      0,
      "The ground condition helps the game start a jump from the floor instead of allowing a new jump at any time in the air.",
      scratchNotes({
        questions: ["What might happen if we removed the ground check?"],
        expectedAnswers: ["The game might allow repeated mid-air jumps, depending on the rest of the script."],
        tips: ["Accept an explanation using the child's own words; this is a simplified game rule."],
        transition: "Explain the movement engine from start to landing.",
      }),
    ),
    reviewSlide(
      8,
      "Platformer: Build Check",
      [
        "Left and right movement change x.",
        "verticalSpeed stores the current vertical movement amount.",
        "A positive jump value moves the player upward; gravity reduces it over time.",
        "A floor-sensing condition controls when a jump can start.",
        "Test from the Green Flag and adjust one number at a time.",
      ],
      scratchNotes({
        questions: ["What three pieces make this simple jump work?"],
        expectedAnswers: ["A vertical-speed variable, a gravity update, and a ground/jump condition; accept equivalent descriptions."],
        tips: ["A paper flowchart is a valid explanation if a learner is not ready to read the full code."],
        transition: "Next, plan and build an original game using the tools from the Scratch course.",
      }),
    ),
    {
      id: 9,
      title: "Homework: Improve One Test",
      emoji: "🏠",
      type: "homework",
      content: ["Draw the jump loop or test one safe change in your platformer."],
      activitySteps: [
        "Label the floor, the player, and verticalSpeed.",
        "Show where the jump condition checks the floor.",
        "Change only one starting number and write what you expected and what you saw.",
      ],
      mascotMessage: "A good test changes one thing so you can explain the result.",
      teacherNotes: scratchNotes({
        questions: ["What did you change, and what did you observe?"],
        expectedAnswers: ["Any single tested change with a matching observation."],
        tips: ["No need to add coins, enemies, or extra levels for this homework."],
        transition: "Session 21 complete.",
      }),
      bgVariant: "purple",
    },
  ],
};

export const session22: SessionData = {
  id: 22,
  title: "Capstone & Showcase: Build Your Own Game",
  subtitle: "Session 22 · Final Scratch Project",
  emoji: "🏆",
  description:
    "Plan, build, debug, and present an original Scratch game that combines reusable instructions with core programming ideas.",
  color: "#EC4899",
  slides: [
    contentSlide(
      1,
      "Your Idea Becomes a Game",
      "💡",
      [
        "A capstone is a project that brings several skills together to solve one playful challenge.",
        "Choose a clear player goal: collect, avoid, rescue, deliver, or answer.",
        "A small finished game is better than a huge unfinished one.",
      ],
      scratchNotes({
        questions: ["What should the player try to do, and how will they know they succeeded?"],
        expectedAnswers: ["A clear goal and a visible win condition, such as reaching a target or reaching a score."],
        tips: ["Offer a short menu of safe, achievable ideas; avoid spending the whole session browsing assets."],
        transition: "Turn the idea into a plan before opening the code blocks.",
      }),
      { bgVariant: "blue" },
    ),
    activitySlide(
      2,
      "Plan the Player's Challenge",
      ["Draw a simple game map and describe the rule in one sentence."],
      [
        "Name the player sprite and the goal or object it interacts with.",
        "Draw the start, one challenge, and the finish.",
        "Write one rule: when the player does X, the game responds with Y.",
        "Choose one variable, such as score, lives, or a level number.",
        "Mark where a loop repeats and where a condition makes a choice.",
        "For age 9: label a custom block that handles one repeated job.",
      ],
      scratchNotes({
        questions: ["What is the player's action? What condition tells the program to respond?"],
        expectedAnswers: ["Accept a specific action and a checkable rule, such as touching a collectible increases score."],
        tips: ["Use a three-box storyboard or a simple flowchart; do not require formal symbols from younger learners."],
        transition: "Agree on a minimum version that can be played from start to finish.",
      }),
    ),
    contentSlide(
      3,
      "Capstone Build Checklist",
      "✅",
      [
        "Start the game with a clear event and reset important values.",
        "Use at least two sprites, a variable, a loop, a condition, and a custom block.",
        "Give the player a goal and a way to see what happens after success.",
        "Add a list only if it makes sense for your game—for example, a question deck or inventory.",
        "Build the minimum playable version before decorations or extra levels.",
      ],
      scratchNotes({
        questions: ["Which checklist item will you test first?"],
        expectedAnswers: ["Any testable core feature, preferably the start and main player action."],
        tips: ["The custom block can be simple, such as a named move or celebration; it does not need advanced inputs to count."],
        transition: "Build the game in short, testable layers.",
      }),
      {
        bgVariant: "green",
        codeSnippet: [
          "Green Flag → reset → play",
          "player action → rule/condition → response",
          "repeat the needed job with a loop",
          "use one named custom block for a reusable job",
          "success condition → visible ending",
        ],
      },
    ),
    activitySlide(
      4,
      "Build Layer 1: Make It Playable",
      ["First make the main action work with simple shapes and a clear start."],
      [
        "Create the player and one goal, obstacle, or object sprite.",
        "Add the Green Flag start and reset the score or other variable.",
        "Add the main control, such as arrow-key movement or a click action.",
        "Make one condition trigger a visible response.",
        "Test the core action before adding extra sprites or costumes.",
      ],
      scratchNotes({
        questions: ["Can a partner tell what to do without hearing the creator explain it?"],
        expectedAnswers: ["A playable project gives the player an understandable start and action; add a prompt if needed."],
        tips: ["For age 6, build one control and one response together. For age 9, ask for a repeatable test case."],
        transition: "Now turn a repeated job into a custom block and make the goal visible.",
      }),
    ),
    activitySlide(
      5,
      "Build Layer 2: Reuse, Score, and Finish",
      ["Add only the pieces needed to make the goal work."],
      [
        "Make a custom block for one repeated job, such as reset scene or celebrate win.",
        "Use a loop only where an action should continue or repeat.",
        "Use a condition for the main rule, such as touching the goal or reaching a target score.",
        "Update the variable when the player earns a point or changes state.",
        "Add a clear win message or ending scene when the success condition is true.",
      ],
      scratchNotes({
        questions: ["Which part is reused? Which part checks for success?"],
        expectedAnswers: ["The custom block performs the repeated named job; the condition checks the goal rule."],
        tips: ["Keep features connected to the goal. Extra features are optional after the game works."],
        transition: "Swap projects and test the game from a player's point of view.",
      }),
    ),
    activitySlide(
      6,
      "Playtest: I Expected… I Saw…",
      ["A classmate plays without seeing the code first."],
      [
        "Start from the Green Flag and follow the on-screen instructions.",
        "Try the main control, the challenge, and the win condition.",
        "Tell the creator: 'I expected ___; I saw ___.’",
        "Pick one fix that helps the player; do not change several things at once.",
        "Retest from the Green Flag and record whether the fix worked.",
      ],
      scratchNotes({
        questions: ["What did the player expect? What actually happened?"],
        expectedAnswers: ["A specific observation that helps locate a bug or improve the instructions."],
        tips: ["Feedback should describe what happened, not judge the artist or the child."],
        transition: "Prepare a short showcase that teaches the audience how your game works.",
      }),
    ),
    debugSlide(
      7,
      "Bug Hunt: The Game Never Says You Win",
      "The player collects a token, but the score never reaches the win target.",
      [
        "when green flag clicked",
        "set [score] to (0)",
        "forever",
        "    if <touching [Token]?> then change [score] by (1)",
        "    if <(score) = (5)> then say [You win!]",
        "    set [score] to (0)  ← bug",
      ],
      5,
      "The score is reset inside the forever loop, so it returns to zero during play. Reset it once at the start, before the loop.",
      "Check whether reset belongs once under the Green Flag or repeatedly inside forever.",
      scratchNotes({
        questions: ["Which line should move above the forever loop?"],
        expectedAnswers: ["set score to 0 belongs under the Green Flag and before forever."],
        tips: ["In a learner's project, use their own reset variable and test from a fresh start."],
        transition: "Show the project, the rule behind it, and one improvement you tested.",
      }),
    ),
    activitySlide(
      8,
      "Showcase: Teach Us Your Game",
      ["A creator explains the goal and one programming idea, then lets the audience play."],
      [
        "Say the game's title and player goal.",
        "Point to one variable, loop, condition, or custom block in the project.",
        "Show one bug or change you tested and explain what happened.",
        "Let a classmate play and give one kind, useful suggestion.",
        "Celebrate a working project, not only a fancy-looking project.",
      ],
      scratchNotes({
        questions: ["What is one piece of code you can explain to your audience?"],
        expectedAnswers: ["Any accurate explanation of a variable, loop, condition, list, or custom block used in the game."],
        tips: ["Give each learner a short turn; accept pointing to the code while a partner reads the explanation."],
        transition: "Finish with a self-check before the cumulative review.",
      }),
    ),
    reviewSlide(
      9,
      "Capstone: Ready to Review",
      [
        "I can state the game's goal and explain how it starts.",
        "I can point to a variable, a loop, and a condition in my project.",
        "I can show a custom block and say why I reused it.",
        "A partner playtested the game and I checked one change.",
        "I can explain one thing I am proud of and one thing I would improve next.",
      ],
      scratchNotes({
        questions: ["Which skill feels strongest? Which one should we practise in the final review?"],
        expectedAnswers: ["Accept a specific self-assessment supported by a project example."],
        tips: ["Collect the learner's answer to select a review station; keep the final review supportive, not a high-pressure exam."],
        transition: "The final review will connect lists, custom blocks, game rules, and debugging.",
      }),
    ),
  ],
};

export const session32: SessionData = {
  id: 32,
  title: "Final Review: Scratch Skills Challenge",
  subtitle: "Session 32 · Cumulative Review & Reflection",
  emoji: "🏁",
  description:
    "Retrieve and apply the ideas from Sessions 19–22: lists, custom blocks, platform-game movement, capstone planning, debugging, and explanation.",
  color: "#8B5CF6",
  slides: [
    reviewSlide(
      1,
      "Final Review: Four Skills, One Programmer",
      [
        "Lists group related values; Scratch positions begin at 1.",
        "Custom blocks name reusable instructions; a call runs a definition.",
        "A vertical-speed variable, gravity update, and ground check can create a simple jump.",
        "A capstone combines a goal, code, testing, and an explanation for another player.",
      ],
      scratchNotes({
        questions: ["Which topic would you like to warm up with: lists, My Blocks, jumping, or games?"],
        expectedAnswers: ["Accept the learner's choice and invite one remembered example."],
        tips: ["This is a retrieval lab: let learners try before showing reminders."],
        transition: "First, sort examples into one-value variables and many-value lists.",
      }),
    ),
    activitySlide(
      2,
      "Recall Station: Variable or List?",
      ["Choose the simplest structure that fits each job."],
      [
        "One current score: choose a variable.",
        "Six question prompts: choose a list.",
        "The number of items right now: use length of the list.",
        "The first item: use item (1) of the list.",
        "Explain how deleting one item can change the positions of later items.",
      ],
      scratchNotes({
        questions: ["Which Scratch position belongs to the first item?"],
        expectedAnswers: ["Position 1; later items can shift when an earlier one is deleted."],
        tips: ["Use cards numbered 1, 2, and 3 to model the list before opening Scratch."],
        transition: "Check which structure keeps several related questions together.",
      }),
    ),
    quizSlide(
      3,
      "Review Check: Random List Position",
      "A Questions list has four items. Which range can choose a valid item position?",
      ["0 to 4", "1 to 4", "1 to 5", "0 to 5"],
      1,
      "Scratch positions start at 1, so the four valid positions are 1, 2, 3, and 4. A program can use the list length as the upper limit.",
      scratchNotes({
        questions: ["What should the program check before choosing if the list might be empty?"],
        expectedAnswers: ["Check that the list length is greater than zero."],
        tips: ["For age 6, lay out four numbered cards. For age 9, describe the empty-list case."],
        transition: "Now tell the difference between a custom-block definition and a call.",
      }),
    ),
    activitySlide(
      4,
      "Recall Station: Definition, Call, Input",
      ["Trace where the recipe is stored and where it runs."],
      [
        "Point to the definition that holds the custom block's steps.",
        "Point to a call that runs those steps in a script.",
        "Name one input and tell what value it changes.",
        "Explain why a defined block that is never called does not do its job.",
      ],
      scratchNotes({
        questions: ["What does an input such as steps control in a move-and-turn block?"],
        expectedAnswers: ["It supplies a value, such as how far the sprite moves."],
        tips: ["Use the move-and-turn example from Session 20 if learners need a reminder."],
        transition: "Find the missing custom-block call in the code hunt.",
      }),
      [
        "define move and turn (steps) (degrees)",
        "    move (steps) steps",
        "    turn clockwise (degrees) degrees",
        "when green flag clicked",
        "    move 40 steps  ← this does not call the custom block",
      ],
    ),
    debugSlide(
      5,
      "Final Bug Hunt: The Custom Move Is Skipped",
      "The creator expects a turn, but the Green Flag script only moves straight.",
      [
        "define move and turn (steps) (degrees)",
        "    move (steps) steps",
        "    turn clockwise (degrees) degrees",
        "when green flag clicked → move 40 steps",
      ],
      3,
      "The start script uses a plain move block instead of calling move and turn with its two inputs. The custom definition is never used.",
      "Find the start-script line that should call the named custom block.",
      scratchNotes({
        questions: ["What should the Green Flag script call, and what two values does it need?"],
        expectedAnswers: ["Call move and turn with a steps amount and a degrees amount."],
        tips: ["Let learners click the code line, then try the fix in a copy of their project."],
        transition: "Trace a jump from the floor to the landing.",
      }),
    ),
    activitySlide(
      6,
      "Recall Station: How the Jump Works",
      ["Put the main ideas in an order that makes sense for the game."],
      [
        "The Green Flag sets verticalSpeed to a starting value.",
        "A ground check decides whether a new jump can start.",
        "A positive verticalSpeed moves the player upward on the y-axis.",
        "The loop changes y by verticalSpeed, then gravity lowers the value over time.",
        "Test that the player can land and cannot jump from any position in the air.",
      ],
      scratchNotes({
        questions: ["Which sign moves the player up in Scratch? Why does the loop need gravity?"],
        expectedAnswers: ["Positive y moves up; gravity gradually lowers the upward movement value so the player comes back down."],
        tips: ["If the learner struggles, act out the variable as a number card that changes each loop."],
        transition: "Check the role of the ground condition.",
      }),
    ),
    quizSlide(
      7,
      "Review Check: Ground Condition",
      "In the simple platformer, what does the ground check help control?",
      ["Whether a jump can start while the player is grounded", "How many items are in a list", "Which custom block is defined", "How the project is saved to storage"],
      0,
      "The ground condition helps the game allow a jump from the floor rather than starting a new jump anywhere in the air.",
      scratchNotes({
        questions: ["What test would tell you whether the ground sensing works?"],
        expectedAnswers: ["Try jumping while grounded, then try again while in the air and compare."],
        tips: ["Keep the answer tied to the game rule, not to advanced physics terminology."],
        transition: "Use the skills together in a small design challenge.",
      }),
    ),
    activitySlide(
      8,
      "Mini Challenge: Design a Rescue Game",
      ["Plan a tiny game that uses at least three Scratch ideas from the course."],
      [
        "Choose a player, a rescue goal, and one obstacle.",
        "Use a variable to count rescued characters or collected tokens.",
        "Use a loop for a repeating action and a condition for one game rule.",
        "Use a custom block for a repeated job; add a list if the game needs several items or questions.",
        "Draw the ending and describe one playtest you would run.",
      ],
      scratchNotes({
        questions: ["Which ideas did you include, and how could a partner test the goal?"],
        expectedAnswers: ["Any coherent plan with identifiable code ideas and a testable goal."],
        tips: ["This is a paper design challenge; learners do not need to build a new game during the review."],
        transition: "Finish by explaining one skill with evidence from a project.",
      }),
    ),
    reviewSlide(
      9,
      "Final Review: Teach One Idea",
      [
        "I can choose a list for many related values and read a correct position.",
        "I can tell a custom-block definition from a call and explain an input.",
        "I can describe how ground sensing and changing verticalSpeed make a simple jump.",
        "I can plan a game goal, test a rule, and explain one bug fix.",
      ],
      scratchNotes({
        questions: ["Which idea can you teach with a drawing or Scratch project? What is one next step you want to practise?"],
        expectedAnswers: ["A specific idea supported by a project, drawing, or accurate explanation; accept a realistic next step."],
        tips: ["Use the response to plan future practice. Celebrate clear reasoning and tested fixes, not only a finished game."],
        transition: "The Scratch learning path and final review are complete.",
      }),
    ),
    {
      id: 10,
      title: "Home Reflection: My Programmer Toolkit",
      emoji: "🏠",
      type: "homework",
      content: ["Choose one project and explain how one part works."],
      activitySteps: [
        "Draw a list, a custom block, or a jump rule from memory.",
        "Label one test you would use to check it.",
        "Write one thing you would improve if you had another lesson.",
      ],
      mascotMessage: "A programmer learns by explaining, testing, and improving.",
      teacherNotes: scratchNotes({
        questions: ["Which part of your drawing is the code idea, and which part is the test?"],
        expectedAnswers: ["Accept a clear distinction between the program idea and a way to check its behavior."],
        tips: ["Keep this reflection short and low-pressure; it is not another graded test."],
        transition: "Final review complete.",
      }),
      bgVariant: "purple",
    },
  ],
};
