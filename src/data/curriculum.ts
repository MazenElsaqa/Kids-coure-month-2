/**
 * The course roadmap for learners aged 6 and 9.
 * Existing session IDs stay stable because progress is keyed by session ID.
 *
 * Sessions 1-4  : algorithm foundations (already built)
 * Sessions 5-22 : Scratch, 18 sessions
 *
 * Sessions 8-10 are deliberately dense: events and all three loop types land
 * together in 8, sound plus the first full project in 9, and 10 is pure
 * building — a playable maze that teaches conditions by needing them.
 *
 * The algorithm concepts that were missing from sessions 1-4 (variables,
 * events, AND/OR/NOT, repeat-until, flowcharts, x/y coordinates) are taught
 * inside the Scratch sessions at the exact moment they become useful.
 * Each one is tagged with `carriesConcept`.
 */

export type CurriculumSession = {
  id: number;
  /** Legacy pacing metadata; the new course order comes from sections/topics. */
  week?: number;
  title: string;
  goal: string;
  /** Scratch blocks introduced, written exactly as they read in the editor. */
  newBlocks: string[];
  /** The teaching part — what you explain on the board / slides. */
  explain: string[];
  /** Guided doing — you build it together, step by step. */
  activity: string;
  /** They build alone in class. This is the real test of the session. */
  task: string;
  /** Sent home. Always small enough to finish in 20 minutes. */
  homework: string;
  /** An algorithm concept from the foundations that lands in this session. */
  carriesConcept?: string;
  /** Set when the whole session is a build, not new theory. */
  isProject?: boolean;
  /** A retrieval-practice session placed between learning topics. */
  isReview?: boolean;
  /** Optional enrichment rather than a core prerequisite. */
  optional?: boolean;
  status: "done" | "planned";
};

const legacyCurriculum: CurriculumSession[] = [
  // ---------- Foundations (already built) ----------
  {
    id: 1,
    week: 1,
    title: "What Is an Algorithm?",
    goal: "Understand that an algorithm is a list of steps in the right order.",
    newBlocks: [],
    explain: [
      "An algorithm is just a recipe: steps, in order.",
      "Computers are fast but not clever — they do exactly what you say.",
      "Order matters. Swap two steps and everything breaks.",
    ],
    activity: "Write the algorithm for making a sandwich, then follow it literally.",
    task: "Write the algorithm for brushing your teeth in 6 steps.",
    homework: "Write the algorithm for getting ready for school.",
    status: "done",
  },
  {
    id: 2,
    week: 1,
    title: "Think Like a Programmer",
    goal: "Tell a good algorithm from a bad one, and fix a broken one.",
    newBlocks: [],
    explain: [
      "A good algorithm is clear, ordered, complete and precise.",
      "A bug is a mistake in your steps, not a broken computer.",
      "Decomposition: break one big problem into small ones.",
    ],
    activity: "Debug three broken algorithms the teacher wrote on purpose.",
    task: "Break 'tidy my room' into 3 smaller problems.",
    homework: "Find the bug in the given 'make tea' algorithm.",
    status: "done",
  },
  {
    id: 3,
    week: 2,
    title: "Making Decisions — IF",
    goal: "Use a condition to choose between two paths.",
    newBlocks: [],
    explain: [
      "IF something is true, THEN do this.",
      "IF / ELSE gives two different paths.",
      "A condition is always a yes/no question.",
    ],
    activity: "Traffic light game — the class reacts to IF conditions the teacher calls out.",
    task: "Write 3 IF rules for a pet robot.",
    homework: "Write an IF/ELSE for 'what do I wear today?'",
    status: "done",
  },
  {
    id: 4,
    week: 2,
    title: "Repeating — LOOP",
    goal: "Replace repeated steps with a loop.",
    newBlocks: [],
    explain: [
      "A loop repeats steps so you don't write them 20 times.",
      "Repeat X times = a counted loop. Forever = never stops.",
      "IF asks a question once. LOOP does something again and again.",
    ],
    activity: "Clap-and-count loops, then rewrite a long algorithm using a loop.",
    task: "Turn a 12-step algorithm into 3 steps using a loop.",
    homework: "Find two loops that happen in your own day.",
    status: "done",
  },

  // ---------- First Steps in Scratch ----------
  {
    id: 5,
    week: 3,
    title: "Inside Scratch",
    goal: "Name every part of the Scratch screen and say what its job is.",
    newBlocks: [],
    explain: [
      "The 3 tabs: Code, Costumes, Sounds.",
      "Palette, Code Area, Stage, Sprite Pane — the 4 big areas.",
      "Green Flag and Stop. Sprites, Costumes and Backdrops.",
    ],
    activity:
      "Live tour on the projector using real screenshots, then they open the editor and point at each part themselves.",
    task:
      "Set up a scene: pick a backdrop, add a second sprite, rename it, resize it. No code yet.",
    homework:
      "Open Scratch at home and add 3 sprites onto a backdrop of your choice. Save it.",
    status: "done",
  },
  {
    id: 6,
    week: 3,
    title: "Making It Move",
    goal: "Move a sprite with code, and understand where it is on the stage.",
    newBlocks: [
      "move 10 steps",
      "turn 15 degrees",
      "go to x: y:",
      "glide 1 secs to x: y:",
      "point in direction 90",
      "if on edge, bounce",
    ],
    explain: [
      "The stage is a grid. x goes left/right, y goes up/down. The middle is 0, 0.",
      "Negative x is left, positive x is right.",
      "'Move' goes forward in whatever direction the sprite faces.",
      "'Glide' is smooth, 'go to' is instant.",
    ],
    activity:
      "Treasure hunt: teacher calls out coordinates, they must glide the sprite there.",
    task: "Make the sprite walk a full square and end where it started.",
    homework: "Make a sprite bounce around the stage forever without stopping.",
    carriesConcept: "X / Y coordinates",
    status: "done",
  },
  {
    id: 7,
    week: 4,
    title: "Looks & Animation",
    goal: "Make a sprite look alive by changing costume, size, colour and speech.",
    newBlocks: [
      "say Hello! for 2 seconds",
      "think Hmm...",
      "next costume",
      "switch costume to",
      "change size by 10",
      "change color effect by 25",
      "show / hide",
    ],
    explain: [
      "A costume is one picture. Swapping costumes fast looks like movement.",
      "This is exactly how cartoons work.",
      "'say' makes a speech bubble — that is your program talking to the player.",
    ],
    activity:
      "Build a walking cat together: move + next costume, repeated. Then make it grow and shrink.",
    task: "Make your sprite introduce itself in 3 speech bubbles while changing colour.",
    homework: "Animate any sprite so it looks like it is really walking.",
    status: "done",
  },
  // ---------- Real Programming ----------
  {
    id: 8,
    week: 4,
    title: "Events + Loops",
    goal: "Make code start by itself, and repeat itself three different ways.",
    newBlocks: [
      "when green flag clicked",
      "when space key pressed",
      "when this sprite clicked",
      "repeat 10",
      "forever",
      "repeat until",
      "wait 1 seconds",
    ],
    explain: [
      "An EVENT is 'when X happens, do Y'. It is an IF that waits.",
      "Yellow hat blocks sit on top. Without one, nothing starts by itself.",
      "One sprite can hold several scripts, each with its own hat.",
      "repeat 10 counts. forever never ends. repeat until watches for a question to become true.",
      "A loop inside a loop is nested — the inside one finishes first, every single time.",
    ],
    activity:
      "Draw a square with repeat 4, then nest it inside repeat 8 to get a flower.",
    task:
      "MINI GAME — Traffic Light: a sprite that changes colour forever on the flag, and stops when you press a key.",
    homework: "Use a nested loop to make any repeating pattern you like.",
    carriesConcept: "Events · Repeat Until · Nested loops",
    status: "done",
  },
  {
    id: 9,
    week: 5,
    title: "Sound & Music + Project 1: Dance Party",
    goal: "Add sound to a project, then finish a complete one.",
    newBlocks: [
      "play sound Meow until done",
      "start sound Meow",
      "change volume by",
      "play note 60 for 0.5 beats",
      "set tempo to",
      "when backdrop switches to",
    ],
    explain: [
      "'until done' waits for the sound to finish. 'start sound' does not wait.",
      "That one difference decides whether your dancers move in time or freeze.",
      "The Music extension turns a sprite into an instrument.",
      "A project is finished when somebody else can press the flag and enjoy it.",
    ],
    activity: "Build a 4-key piano: 4 sprites, each plays a note when clicked.",
    task:
      "PROJECT 1 — Dance Party: 3 sprites dancing on the flag, music playing in a loop, and one sprite that reacts when clicked.",
    homework: "Add a 4th dancer with a move — and a sound — nobody else has.",
    carriesConcept: "Sound timing",
    isProject: true,
    status: "done",
  },
  {
    id: 10,
    week: 5,
    title: "Practical: Maze Game",
    goal: "Build a real game somebody can play, and meet conditions by needing them.",
    newBlocks: [
      "if <> then",
      "touching color ?",
      "key right arrow pressed ?",
      "wait until <>",
      "go to x: 0 y: 0",
    ],
    explain: [
      "The blue Sensing blocks are the sprite's eyes — 'touching color' is a yes/no question.",
      "A condition block is a pointed hexagon. It only fits in a hexagon hole.",
      "Session 3's IF is now a real block: if touching the wall, then go back.",
      "Plan on paper first — a diamond in your flowchart is always a question.",
    ],
    activity:
      "Paint the maze walls in one solid colour together, then code arrow-key movement.",
    task:
      "PROJECT 2 — Maze Game: your own maze, arrow keys, walls that send you back, and a win message at the goal.",
    homework: "Add a second, harder maze level that loads after you win the first.",
    carriesConcept: "Conditions in code · Flowcharts",
    isProject: true,
    status: "done",
  },
  {
    id: 11,
    week: 6,
    title: "Variables: Give Data a Name",
    goal: "Understand variables, set, change, input, and output through small experiments before building a project.",
    newBlocks: [
      "set score to 0",
      "change score by 1",
      "ask What's your name? and wait",
      "answer",
      "join Hello answer",
    ],
    explain: [
      "A variable is a named box that stores one value.",
      "Set chooses or resets a value; change updates the current value.",
      "Ask is input, say is output, and a variable can connect them.",
    ],
    activity: "Run box experiments with testNumber, then try a tiny Name Badge experiment.",
    task: "Complete the small experiments and explain set versus change to a partner.",
    homework: "Draw a score box changing from 0 to 1 to 2. Do not build the project yet.",
    carriesConcept: "Variables · Input / Output · Debugging",
    status: "done",
  },
  {
    id: 12,
    week: 6,
    title: "Project 3: Scoreboard Clicker",
    goal: "Use Variables and Score from Session 11 to build a small click challenge.",
    newBlocks: [
      "set score to 0",
      "change score by 1",
      "when this sprite clicked",
      "ask What's your name? and wait",
      "join",
    ],
    explain: [
      "Today is a build session, not a new variable lesson.",
      "The green flag resets the score and clicking the target updates it.",
      "A project is successful when another child can play and test it.",
    ],
    activity: "Build the reset script, target clicker, win target, and optional player-name greeting.",
    task: "PROJECT 3 — Scoreboard Clicker: score starts at 0, one click adds 1, green flag resets, and the player can reach a target.",
    homework: "Change the target costume or backdrop without breaking reset and click scoring.",
    carriesConcept: "Variables · Input / Output",
    isProject: true,
    status: "done",
  },
  {
    id: 13,
    week: 7,
    title: "Operators: Make Smart Rules",
    goal: "Understand random numbers, comparisons, and AND/OR/NOT through small experiments before building a game.",
    newBlocks: ["pick random 1 to 10", "+ - * /", "< = >", "and / or / not", "join"],
    explain: [
      "Random chooses a value inside limits.",
      "A comparison gives a true or false answer.",
      "AND needs both rules, OR needs one, and NOT flips an answer.",
    ],
    activity: "Run a digital dice, true/false comparison, AND/OR/NOT, and rule-reading experiments.",
    task: "Complete the experiments and draw the rules that will be used in Catch the Apples.",
    homework: "Make three paper rule cards: random start, AND catch, and score equals 10.",
    carriesConcept: "Randomness · Conditions · AND / OR / NOT",
    status: "done",
  },
  {
    id: 14,
    week: 7,
    title: "Project 4: Catch the Apples",
    goal: "Use Operators and Score from Sessions 11 and 13 to build a playable catching game.",
    newBlocks: ["pick random", "< = >", "and", "when green flag clicked", "change score by 1"],
    explain: [
      "Today is a build session; no new operator is introduced.",
      "The Basket moves, the Apple starts randomly, and the AND rule controls a catch.",
      "A project is successful when another child can play and test it.",
    ],
    activity: "Build Basket movement, Apple fall, random reset, AND catch, and optional win at 10.",
    task: "PROJECT 4 — Catch the Apples: random falling Apples, Basket controls, score, and one-point catches.",
    homework: "Change the weather costume or backdrop without breaking the random catch rule.",
    carriesConcept: "Operators · Variables · Debugging",
    isProject: true,
    status: "done",
  },
  {
    id: 15,
    week: 8,
    title: "Broadcast: Talk to Sprites",
    goal: "Understand how sprites send and receive messages before building a full story.",
    newBlocks: ["broadcast message1", "broadcast message1 and wait", "when I receive message1"],
    explain: [
      "A broadcast is a named signal, not a speech bubble.",
      "The sender broadcasts; the listener starts with when I receive.",
      "Broadcast and wait keeps actions in order when order matters.",
    ],
    activity: "Run human and Scratch message experiments with one sender, one receiver, and two signals.",
    task: "Complete three tiny experiments and explain which Sprite sent and received each message.",
    homework: "Draw a three-message story map. Do not build the project yet.",
    carriesConcept: "Events · Debugging · Decomposition",
    status: "done",
  },
  {
    id: 16,
    week: 8,
    title: "Project 5: Interactive Movie",
    goal: "Use Broadcast to coordinate three ordered scenes without learning a new concept.",
    newBlocks: ["broadcast title and wait", "when I receive title", "switch backdrop to"],
    explain: [
      "Today is a build session: the message map becomes a real movie.",
      "The Director controls order; characters respond to their messages.",
      "The project is successful when another child can follow it from the green flag.",
    ],
    activity: "Build Director, Hero, and Friend from Title to Scene1 to Ending.",
    task: "PROJECT 5 — Interactive Movie: 3 scenes, 3 messages, at least 2 characters, ordered dialogue, and a clear ending.",
    homework: "Add a title or ending variation using the same messages and blocks.",
    isProject: true,
    status: "done",
  },
  {
    id: 17,
    week: 9,
    title: "Clones: One Sprite, Many Copies",
    goal: "Understand the clone life cycle through small experiments before building a weather project.",
    newBlocks: ["create clone of myself", "when I start as a clone", "delete this clone"],
    explain: [
      "The Original creates a temporary copy; the copy starts its own script.",
      "Every clone needs a job, such as moving down until it reaches the bottom.",
      "Delete this clone removes a finished copy so the project stays usable.",
    ],
    activity: "Create one copy, five copies, randomize positions, and test Create → Act → Delete.",
    task: "Complete the clone experiments and explain the life cycle to a partner.",
    homework: "Choose rain, snow, stars, or confetti and draw the clone's job for the next project.",
    carriesConcept: "Loops · Randomness · Debugging",
    status: "done",
  },
  {
    id: 18,
    week: 9,
    title: "Project 6: Weather Factory",
    goal: "Use Clones to create a falling rain, snow, stars, or confetti effect.",
    newBlocks: ["create clone of myself", "when I start as a clone", "delete this clone"],
    explain: [
      "Today is a build session: one Original becomes many working copies.",
      "The Minimum Build is create, random start, movement, and delete.",
      "Customization changes the look without changing the clone engine.",
    ],
    activity: "Build the Weather Factory step by step, then playtest it with a partner.",
    task: "PROJECT 6 — Weather Factory: one Sprite creates falling clones from random positions and each clone deletes itself at the bottom.",
    homework: "Make a new weather variation using the same clone engine.",
    isProject: true,
    status: "done",
  },
  {
    id: 19,
    week: 10,
    title: "Lists",
    goal: "Store many values in one place instead of many variables.",
    newBlocks: ["add thing to list", "item 1 of list", "length of list", "delete all of list", "list contains thing ?"],
    explain: [
      "A variable holds one thing. A list holds a whole row of things.",
      "Each slot has a number, starting at 1.",
      "Lists plus pick random can make questions appear in a different order.",
    ],
    activity: "Build a high-score list, then a small random-question picker.",
    task: "Turn the three-question quiz into a list-driven quiz with six questions.",
    homework: "Make a shopping-list app: add items, show them, and clear them.",
    status: "planned",
  },
  {
    id: 20,
    week: 10,
    title: "My Blocks",
    goal: "Build a custom block to avoid repeating code.",
    newBlocks: ["define my block", "my block with inputs"],
    explain: [
      "When the same five blocks appear three times, make them one custom block.",
      "This is Session 2's decomposition, now expressed in code.",
      "Inputs let one custom block do many jobs, such as draw square (size).",
    ],
    activity: "Turn a long jump script into one jump block, then add a height input.",
    task: "Rewrite one old project using at least two custom blocks.",
    homework: "Make a draw shape block that takes the number of sides as an input.",
    status: "planned",
  },

  // ---------- Mastery ----------
  {
    id: 21,
    week: 11,
    title: "Platformer: Gravity & Jumping",
    goal: "Build the hardest common game mechanic — real jumping.",
    newBlocks: ["change y by (velocity)", "set velocity to", "if not touching ground"],
    explain: [
      "Gravity is a variable that constantly pulls y down.",
      "A jump sets that variable to a big positive number once.",
      "Landing means touching the ground, so stop falling.",
      "This uses variables, loops, conditions, and NOT.",
    ],
    activity: "Build the gravity engine together, one variable at a time.",
    task: "PROJECT 7 — Platformer: a player that runs and jumps, platforms, a coin, and a score.",
    homework: "Add a second level and a danger that resets the player.",
    isProject: true,
    status: "planned",
  },
  {
    id: 22,
    week: 11,
    title: "Capstone & Showcase",
    goal: "Design and build a game of their own, then present it.",
    newBlocks: [],
    explain: [
      "Plan first: what is the goal, what are the rules, and how do you win?",
      "Draw the flowchart before touching a single block.",
      "Then build, test, debug, and polish.",
    ],
    activity: "Planning workshop: each student pitches an idea and draws the flowchart.",
    task: "CAPSTONE — Build your own game using at least 2 sprites, a variable, a loop, a condition, and a custom block.",
    homework: "Present your game to your family and write down two suggestions.",
    isProject: true,
    status: "planned",
  },
];

const additionalCurriculum: CurriculumSession[] = [
  {
    id: 23,
    title: "Computer Parts: A Helpful Team",
    goal: "Explain how computer parts share jobs, from input and processing to memory and output.",
    newBlocks: [],
    explain: [
      "Hardware parts have different jobs: processing, memory, storage, display, and connection.",
      "RAM is fast temporary workspace; an SSD keeps files when power is off.",
      "The operating system helps apps use the computer's hardware.",
    ],
    activity: "Act out a mouse click travelling through the computer to a screen response.",
    task: "Match each part card to its job: CPU, GPU, RAM, SSD, OS, power supply, cooling, and network adapter.",
    homework: "Draw a computer team map with at least four parts and one job for each.",
    status: "done",
  },
  {
    id: 24,
    title: "Data & Binary: How Computers Store Patterns",
    goal: "Describe a bit as one of two symbols and explain that computers encode many kinds of data as patterns.",
    newBlocks: [],
    explain: [
      "Data is information that can be stored or used, such as words, numbers, pictures, or sounds.",
      "A bit is one binary digit: 0 or 1.",
      "Programs interpret patterns using agreed rules; a pattern does not explain itself.",
    ],
    activity: "Use two cards, 0 and 1, to build short patterns and let a partner decode a simple classroom key.",
    task: "Make a four-bit secret pattern and write the rule a partner needs to read it.",
    homework: "Explain with a drawing how a picture can be stored as many tiny data values.",
    status: "done",
  },
  {
    id: 25,
    title: "Bits, Bytes & Storage Sizes",
    goal: "Compare bit and byte, name common storage units, and distinguish decimal from binary prefixes.",
    newBlocks: [],
    explain: [
      "A byte contains 8 bits.",
      "Decimal units use powers of 1,000; binary units use powers of 1,024.",
      "For example, 1 kB is 1,000 bytes, while 1 KiB is 1,024 bytes.",
    ],
    activity: "Sort data-size cards from smallest to largest, then build a 1,000-versus-1,024 comparison.",
    task: "Solve the matching and conversion questions using the unit named in each question.",
    homework: "Find one storage-size label at home and identify whether it uses a decimal or binary unit.",
    status: "done",
  },
  {
    id: 35,
    title: "A Data Journey: Save, Find & Change",
    goal: "Describe how stored information can be saved, copied, searched for and retrieved, modified, or deleted; distinguish these actions from collecting or displaying data.",
    newBlocks: [],
    explain: [
      "Data is information a computer can store or use; this session focuses on stored-data actions, not binary encoding.",
      "A program may save or copy information, search for and retrieve it, then modify or delete it from a selected list or file.",
      "Collecting answers and displaying a group of results are related but separate activities; deleting one copy does not guarantee all backups are erased.",
      "Use invented classroom examples rather than personal or account information.",
    ],
    activity: "Use a fictional list to save or copy choices, search for and retrieve one item, modify or delete one item, and check the selected list.",
    task: "Plan a tiny data helper and a test; age 9 can add a tally chart and support one statement with its count.",
    homework: "Draw a fictional list before and after one saved-data action; label it save, copy, search/retrieve, modify, or delete.",
    optional: true,
    status: "done",
  },
  {
    id: 36,
    title: "Storage Scale: From Bytes to Terabytes",
    goal: "Extend storage-size learning to MB, GB, and TB while keeping decimal and binary units distinct.",
    newBlocks: [],
    explain: [
      "Decimal kB, MB, GB, and TB use steps of 1,000; binary KiB, MiB, GiB, and TiB use steps of 1,024.",
      "Storage capacity is available room; a file's size varies, so a unit does not promise a fixed number of photos or songs.",
      "Use the exact unit symbol in each question and never substitute GB for GiB.",
    ],
    activity: "Build separate decimal and binary unit ladders, then match each label to its correct multiplier.",
    task: "For age 9, convert 3 GB to MB and 3 GiB to MiB; for age 6, order the matching size cards without written multiplication.",
    homework: "Draw the two unit ladders and explain what the letter i signals in KiB, MiB, GiB, or TiB.",
    optional: true,
    status: "done",
  },
  {
    id: 33,
    title: "Programming Languages: From Ideas to Instructions",
    goal: "Explain how an algorithm can be expressed in Scratch or a text language and how language tools help run instructions.",
    newBlocks: [],
    explain: [
      "An algorithm is the plan; a programming language expresses the instructions using agreed rules.",
      "Scratch and Python offer different ways to express similar ideas.",
      "Language tools use different paths; there is no one translation chain followed by every program.",
    ],
    activity: "Open the idea-to-instruction cards and match an action to a precise plan and representation.",
    task: "Teach a partner how a small action moves from a human idea to clear program instructions.",
    homework: "Draw one action as an idea, an algorithm, and a Scratch-block or text-language representation.",
    status: "done",
  },
  {
    id: 34,
    title: "How Computers Talk: Packets & the Internet",
    goal: "Describe a simple request-and-response journey and distinguish Wi-Fi, routers, packets, and the Internet.",
    newBlocks: [],
    explain: [
      "A device can request information from a service on another computer.",
      "Addresses and protocols help networks forward, receive, and interpret data.",
      "Wi-Fi is one local connection method; the Internet connects many networks.",
    ],
    activity: "Step through a packet-route simulation, then act out a classroom packet relay.",
    task: "Draw a request-and-response journey and identify one simplification in the model.",
    homework: "Explain the difference between Wi-Fi and the Internet using a home or classroom example.",
    status: "done",
  },
  {
    id: 26,
    title: "Foundations Review Lab",
    goal: "Review computer parts, data, binary, storage, programming languages, and networks, with optional challenges for data actions and larger storage units.",
    newBlocks: [],
    explain: [
      "A computer uses connected hardware and software to carry out instructions.",
      "Data is represented by patterns that a program can interpret.",
      "Stored data can be saved, copied, searched for and retrieved, modified, or deleted; collecting and displaying results are separate activities.",
      "Programming languages use different tools; networks forward data according to agreed rules.",
      "Always check whether a size question uses decimal or binary units.",
      "Capacity is available room, while file sizes vary; decimal and binary labels must stay distinct.",
    ],
    activity: "Match component jobs, interpret a data pattern, compare storage units, map an idea into program instructions, trace a network request, and try the optional data-action and storage-scale cards.",
    task: "Answer the review checks and explain one foundation idea; attempt the optional data or storage challenge only if ready.",
    homework: "Teach one idea from the review to someone at home using a drawing or object; keep any data example fictional.",
    isReview: true,
    status: "done",
  },
  {
    id: 27,
    title: "Computer Time Machine",
    goal: "Compare how computers change over time without treating one video as the only source of historical facts.",
    newBlocks: [],
    explain: [
      "Computers have changed in size, speed, cost, and the ways people use them.",
      "A video can start a question; names and dates should be checked against reliable sources.",
      "Look for what stayed the same: people give instructions and computers process data.",
    ],
    activity: "Compare an older and a modern computer image or description using size, speed, and use.",
    task: "Write one change and one thing that stayed the same across the two examples.",
    homework: "Ask someone older what computer they first used and compare it with a device you use now.",
    optional: true,
    status: "done",
  },
  {
    id: 28,
    title: "Review: Algorithms & Decisions",
    goal: "Recall sequence, debugging, decisions, and loops from Sessions 1–4.",
    newBlocks: [],
    explain: [
      "Algorithms need clear steps in a useful order.",
      "Debugging means finding and fixing a mistake in a plan.",
      "IF chooses based on a condition; a loop repeats steps.",
    ],
    activity: "Be a classroom robot: follow a partner's route exactly, then debug one broken instruction.",
    task: "Sort example instructions into sequence, decision, or loop and justify one choice.",
    homework: "Write a three-step algorithm that includes one IF rule or repeated action.",
    isReview: true,
    status: "done",
  },
  {
    id: 29,
    title: "Review: First Steps in Scratch",
    goal: "Retrieve how the Scratch editor, sprites, movement, coordinates, costumes, and looks fit together.",
    newBlocks: [],
    explain: [
      "The Stage shows the project; sprites are characters or objects in it.",
      "Coordinates describe position: x is left/right and y is up/down.",
      "Costumes change a sprite's appearance; code controls when changes happen.",
    ],
    activity: "Call out a coordinate and a costume change; a partner predicts what the sprite will do.",
    task: "Plan a short sprite animation using one movement and one appearance change.",
    homework: "Sketch one scene and label the sprite, backdrop, and a position change.",
    isReview: true,
    status: "done",
  },
  {
    id: 30,
    title: "Review: Events, Loops & Games",
    goal: "Review Sessions 8–14: events, loop types, sound timing, sensing, conditions, variables, input/output, operators, logic, randomness, and game projects.",
    newBlocks: [],
    explain: [
      "Events and loops control when scripts start and repeat.",
      "Sound timing, sensing, and conditions shape how a game responds.",
      "Variables, input/output, operators, logic, and randomness support game rules and projects.",
    ],
    activity: "Trace a maze, inspect Dance Party and score projects, then plan and test a fair Catch the Apples rule.",
    task: "Label the event, loop, and condition in a short game plan.",
    homework: "Invent one fair game rule and write the IF condition that could check it.",
    isReview: true,
    status: "done",
  },
  {
    id: 31,
    title: "Review: Messages, Clones & Projects",
    goal: "Review Sessions 15–18: broadcasts, sender/listener roles, ordered stories, clone life cycles, cleanup, and project testing.",
    newBlocks: [],
    explain: [
      "Broadcasts send named messages to matching listeners; wait can keep scenes in order.",
      "Clones are temporary copies with a job and a cleanup condition.",
      "Projects need a start-to-finish test for message order and clone cleanup.",
    ],
    activity: "Map a three-scene story, then trace one Weather Factory clone from creation through deletion.",
    task: "Debug one message-order or clone-cleanup issue and explain how you tested the fix.",
    homework: "Draw a sender/listener map or clone life-cycle diagram from a Scratch project.",
    isReview: true,
    status: "done",
  },
  {
    id: 32,
    title: "Final Review: Lists, Custom Blocks & Capstone",
    goal: "Review Sessions 19–22 after their planned lessons are built and ready to teach.",
    newBlocks: [],
    explain: [
      "This review will revisit lists, custom blocks, gravity, and the capstone project.",
      "It remains planned until Sessions 19–22 are published as complete lessons.",
    ],
    activity: "To be added after the final Scratch lessons are built.",
    task: "To be added after the final Scratch lessons are built.",
    homework: "To be added after the final Scratch lessons are built.",
    isReview: true,
    status: "planned",
  },
];

export const curriculum: CurriculumSession[] = [
  ...legacyCurriculum,
  ...additionalCurriculum,
];

export type CurriculumTopic = {
  id: string;
  title: string;
  description: string;
  sessionIds: number[];
};

export type CurriculumSection = {
  id: string;
  title: string;
  summary: string;
  color: string;
  topics: CurriculumTopic[];
};

export const sections: CurriculumSection[] = [
  {
    id: "computer-foundations",
    title: "Computer & Digital Foundations",
    summary: "Meet computer parts, data, storage, programming languages, and networks, with optional data and storage extensions.",
    color: "#2563EB",
    topics: [
      { id: "computer-team", title: "How a Computer Works", description: "Input, processing, memory, storage, output, and the operating system.", sessionIds: [23] },
      { id: "binary-data", title: "Data & Binary", description: "How computers represent information with patterns of bits.", sessionIds: [24] },
      { id: "storage-sizes", title: "Bits, Bytes & Storage", description: "Compare decimal kB/MB/GB with binary KiB/MiB/GiB.", sessionIds: [25] },
      { id: "data-actions", title: "A Data Journey · Optional", description: "Record, organize, find, update, and remove fictional data.", sessionIds: [35] },
      { id: "storage-scale", title: "Storage Scale · Optional", description: "Extend unit comparisons to MB, GB, and TB without mixing decimal and binary prefixes.", sessionIds: [36] },
      { id: "programming-languages", title: "Programming Languages", description: "Move from a human idea to an algorithm, Scratch/Python, and the tools that run instructions.", sessionIds: [33] },
      { id: "networks-internet", title: "Networks & the Internet", description: "Explore requests, packets, addressing, routers, and how Wi-Fi differs from the Internet.", sessionIds: [34] },
      { id: "computer-history", title: "Computer Time Machine · Optional", description: "Compare older and modern computers as enrichment.", sessionIds: [27] },
      { id: "foundations-review", title: "Review Lab", description: "Retrieve and apply the section's computer, data, storage, programming-language, and network ideas.", sessionIds: [26] },
    ],
  },
  {
    id: "computational-thinking",
    title: "Computational Thinking",
    summary: "Plan clear steps, find mistakes, make choices, and repeat actions.",
    color: "#8B5CF6",
    topics: [
      { id: "algorithms", title: "Algorithms & Debugging", description: "Make instructions clear, ordered, and fixable.", sessionIds: [1, 2] },
      { id: "decisions-loops", title: "Decisions & Loops", description: "Choose a path with IF and repeat with LOOP.", sessionIds: [3, 4] },
      { id: "thinking-review", title: "Review Lab", description: "Retrieve the first programming ideas before Scratch.", sessionIds: [28] },
    ],
  },
  {
    id: "scratch-foundations",
    title: "Scratch Foundations",
    summary: "Learn the editor, position sprites, and bring them to life.",
    color: "#F59E0B",
    topics: [
      { id: "scratch-editor", title: "Meet Scratch", description: "Explore the Stage, sprites, code area, and assets.", sessionIds: [5] },
      { id: "motion", title: "Motion & Coordinates", description: "Move sprites using direction and x/y position.", sessionIds: [6] },
      { id: "looks", title: "Looks & Animation", description: "Use costumes, speech, size, and visual effects.", sessionIds: [7] },
      { id: "scratch-review", title: "Review Lab", description: "Connect the editor, movement, and appearance blocks.", sessionIds: [29] },
    ],
  },
  {
    id: "interactive-games-data",
    title: "Interactive Games & Data",
    summary: "Use events, loops, rules, variables, and operators in real projects.",
    color: "#10B981",
    topics: [
      { id: "events-loops", title: "Events & Loops", description: "Start scripts and repeat actions in different ways.", sessionIds: [8] },
      { id: "sound-maze", title: "Sound & Maze Game", description: "Add sound and use conditions to make a playable maze.", sessionIds: [9, 10] },
      { id: "variables", title: "Variables, Input & Output", description: "Give a program memory and collect player information.", sessionIds: [11, 12] },
      { id: "operators", title: "Operators & Game Rules", description: "Use comparisons, logic, randomness, and score.", sessionIds: [13, 14] },
      { id: "games-review", title: "Review Lab", description: "Cumulative retrieval and project challenges for Sessions 8–14.", sessionIds: [30] },
    ],
  },
  {
    id: "stories-clones",
    title: "Stories, Clones & Systems",
    summary: "Coordinate sprites with messages and create effects with clones.",
    color: "#3B82F6",
    topics: [
      { id: "broadcast-story", title: "Broadcast & Interactive Stories", description: "Send messages between sprites and order story scenes.", sessionIds: [15, 16] },
      { id: "clones", title: "Clones & Creative Effects", description: "Create, use, and remove temporary copies.", sessionIds: [17, 18] },
      { id: "systems-review", title: "Review Lab", description: "Cumulative practice for broadcasts, stories, clones, and project testing in Sessions 15–18.", sessionIds: [31] },
    ],
  },
  {
    id: "next-builds-capstone",
    title: "Lists, Custom Blocks & Capstone",
    summary: "The remaining Scratch roadmap; these lessons are still planned.",
    color: "#EC4899",
    topics: [
      { id: "lists", title: "Lists", description: "Store and work with groups of values. Planned lesson.", sessionIds: [19] },
      { id: "my-blocks", title: "Custom Blocks", description: "Build reusable instructions. Planned lesson.", sessionIds: [20] },
      { id: "platformer", title: "Gravity & Jumping", description: "Use variables and conditions in a platform game. Planned lesson.", sessionIds: [21] },
      { id: "capstone", title: "Capstone & Showcase", description: "Design, build, test, and present an original game. Planned lesson.", sessionIds: [22] },
      { id: "final-review", title: "Final Review", description: "To be completed after Sessions 19–22 are ready.", sessionIds: [32] },
    ],
  },
];

export const courseStats = {
  totalSessions: curriculum.length,
  readySessions: curriculum.filter((session) => session.status === "done").length,
  plannedSessions: curriculum.filter((session) => session.status === "planned").length,
  projects: 6,
  ages: "6–9",
};
