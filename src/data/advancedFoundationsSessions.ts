import type { InteractiveDemoKind, SessionData, SlideData } from "./types";

type NotesInput = {
  transition: string;
  questions?: string[];
  expectedAnswers?: string[];
  tips?: string[];
  age6?: string[];
  age9?: string[];
};

function notes(input: NotesInput): SlideData["teacherNotes"] {
  return {
    questions: input.questions ?? ["What do you notice? Can you explain why?"],
    expectedAnswers: input.expectedAnswers ?? ["Accept a clear explanation in the learner's own words."],
    tips: input.tips ?? ["Let the learner predict first, try the interaction, then explain what changed."],
    transition: input.transition,
    age6: input.age6,
    age9: input.age9,
  };
}

function content(id: number, title: string, emoji: string, contentLines: string[], teacherNotes: SlideData["teacherNotes"], bgVariant: SlideData["bgVariant"] = "blue"): SlideData {
  return { id, title, emoji, type: "content", content: contentLines, mascotMessage: "Think, try, and tell us what you discovered!", teacherNotes, bgVariant };
}

function activity(id: number, title: string, intro: string, activitySteps: string[], teacherNotes: SlideData["teacherNotes"]): SlideData {
  return { id, title, emoji: "🧩", type: "activity", content: [intro], activitySteps, mascotMessage: "Take turns, test your idea, and explain what happened.", teacherNotes, bgVariant: "orange" };
}

function interactive(id: number, title: string, emoji: string, demo: InteractiveDemoKind, intro: string, teacherNotes: SlideData["teacherNotes"], bgVariant: SlideData["bgVariant"] = "purple"): SlideData {
  return { id, title, emoji, type: "interactive", content: [intro], interactiveDemo: demo, mascotMessage: "You are in control of this experiment!", teacherNotes, bgVariant };
}

function quiz(id: number, title: string, question: string, options: string[], correctIndex: number, explanation: string, teacherNotes: SlideData["teacherNotes"]): SlideData {
  return { id, title, emoji: "❓", type: "quiz", content: [], quiz: { question, options, correctIndex, explanation }, mascotMessage: "Choose an answer, then explain your thinking.", teacherNotes, bgVariant: "green" };
}

const age6 = ["Use a picture, gesture, or acted example first; accept pointing plus a short explanation."];
const age9 = ["Ask for the technical term, a reason, and one prediction about what changes if a step is different."];

export const session33: SessionData = {
  id: 33,
  title: "Programming Languages: From Ideas to Instructions",
  subtitle: "Computer & Digital Foundations · Session 4",
  emoji: "🗣️",
  description: "Discover how people express algorithms in programming languages and how language tools help a computer run them—without assuming every language follows the same translation path.",
  color: "#7C3AED",
  slides: [
    content(1, "Can a Computer Guess What You Mean?", "🤔", [
      "Imagine telling a sprite: “Go over there and look happy.” A person may guess what you mean; a computer needs clear instructions.",
      "A programmer turns an idea into steps, then writes those steps in a language with rules.",
      "Today we will open the layers between an idea and a running program.",
    ], notes({ questions: ["What might “over there” mean to two different people?"], expectedAnswers: ["It is unclear; they may choose different places."], tips: ["Let learners give two possible meanings before introducing the need for precise instructions."], transition: "First separate the plan from the language used to write it.", age6, age9 }), "purple"),
    content(2, "Plan First, Then Choose a Language", "📝", [
      "An algorithm is the plan: for example, start when the Green Flag is clicked, then move the sprite 10 steps.",
      "Scratch shows many instructions as connected blocks. Python expresses instructions as text.",
      "Different languages can describe similar ideas, but each has its own rules and tools.",
    ], notes({ questions: ["Which part is the plan, and which part is the way we write it?"], expectedAnswers: ["The algorithm is the plan; Scratch or Python is a way to express instructions."], tips: ["Do not teach that one language is always better; choice depends on the task and learner."], transition: "Tap each layer to reveal what it does.", age6, age9 }), "blue"),
    interactive(3, "Open the Instruction Layers", "🪜", "language-stack", "Tap a card to explore it. Notice why this is a map of ideas, not one compulsory staircase.", notes({ questions: ["Which layer is easiest for a person to read? Which instructions are made for a specific processor?"], expectedAnswers: ["A high-level language is generally easier for people to read; machine instructions are designed for a processor's instruction set."], tips: ["Allow exploration in any order; ask learners to explain one connection rather than memorize a ladder."], transition: "Web pages use more than one kind of technology.", age6, age9 })),
    content(4, "A Website Has Different Jobs", "🌐", [
      "HTML describes the structure and content of a web page, such as headings and paragraphs.",
      "CSS describes how those parts look: colours, spacing, and layout.",
      "JavaScript can add behaviour, such as responding when someone clicks a button.",
      "HTML and CSS are important web technologies, but they are not general-purpose programming languages like Python.",
    ], notes({ questions: ["Which technology could add an action when a button is clicked?"], expectedAnswers: ["JavaScript can add behaviour; HTML provides structure and CSS styling."], tips: ["Keep the distinction gentle: the web uses a team of technologies with different jobs."], transition: "Now match a task to the kind of instruction that can describe it.", age6, age9 }), "green"),
    activity(5, "Match the Plan to Its Representation", "Work as a team: one learner gives the idea, one writes the steps, and one chooses a representation.", [
      "Idea: make a character move when the Green Flag is clicked.",
      "Write the plan: when the flag is clicked → move 10 steps.",
      "Show how Scratch blocks could represent those steps; say that Python would use different written syntax.",
      "Explain why the processor needs instructions encoded in a form its tools and hardware can run.",
    ], notes({ questions: ["Would the words “move 10 steps” work if the sprite and start event were never specified?"], expectedAnswers: ["The instructions need enough detail: which sprite, what event, and how far to move."], tips: ["This is a paper explanation task; do not require children to install or write Python."], transition: "Check what a programming language is for.", age6, age9 })),
    quiz(6, "Quick Check: Why Use a Programming Language?", "What is a programming language mainly used for?", ["To express instructions for a computer using agreed rules", "To make a computer guess every missing step", "To replace electricity", "To store every picture as one word"], 0, "A programming language gives people rules for expressing instructions that language tools can run or translate.", notes({ questions: ["Why do the instructions need clear rules?"], expectedAnswers: ["So people and tools can interpret them consistently."], tips: ["Ask for one example from Scratch, not only a memorized definition."], transition: "Finish by correcting a common myth about translation.", age6, age9 })),
    quiz(7, "Quick Check: Is There One Fixed Path?", "Which statement about programming languages is most accurate?", ["Every program must pass through C before the computer can run it", "Different languages use different tools and paths to run instructions", "HTML always turns directly into Python", "Assembly is required for every Scratch project"], 1, "Language tools differ. Some translate code, some execute it through a runtime, and many use several steps; there is no one path that every program follows.", notes({ questions: ["What is one tool that can help prepare or run a program?"], expectedAnswers: ["A compiler, interpreter, or runtime; accept a suitable explanation."], tips: ["Do not assess implementation details; the key takeaway is that toolchains vary."], transition: "Next, follow information as it travels between computers.", age6, age9 })),
    activity(8, "Teach Back: Idea → Instructions", "Teach a partner how one small digital action moves from a human idea to a program.", [
      "Choose an action: show a welcome message, move a sprite, or play a sound.",
      "Say the goal in everyday words, then make the steps precise.",
      "Choose Scratch blocks or a text-language example as one way to express the plan.",
      "Name one thing the computer or language tool must know before it can run the instructions.",
    ], notes({ questions: ["Which step made your original idea clearer?"], expectedAnswers: ["Any precise choice such as naming the event, sprite, message, or action."], tips: ["Invite one learner to explain; let the partner ask a clarifying question."], transition: "You can now explain why computers use languages and tools.", age6, age9 })),
  ],
};

export const session34: SessionData = {
  id: 34,
  title: "How Computers Talk: Packets & the Internet",
  subtitle: "Computer & Digital Foundations · Session 5",
  emoji: "📦",
  description: "Trace a simple request across connected networks and learn what packets, addresses, routers, and Wi-Fi do—using a careful classroom model.",
  color: "#0F766E",
  slides: [
    content(1, "Where Does a Video Come From?", "🎬", [
      "You tap Play on your device. The video does not magically appear: your device requests information from a service on another computer.",
      "Networks carry the request and the response between devices.",
      "Let's send a pretend message and follow each step.",
    ], notes({ questions: ["What is the first thing the device does when you ask for a page or video?"], expectedAnswers: ["It sends a request for information."], tips: ["Use a familiar example but avoid implying a video is always delivered from one nearby machine."], transition: "First, separate your local connection from the wider Internet.", age6, age9 }), "blue"),
    content(2, "Wi-Fi Is Not the Whole Internet", "📶", [
      "Wi-Fi is one way your device connects wirelessly to a nearby network, such as the one in a home or classroom.",
      "A router helps connect networks and forwards data toward its destination.",
      "The Internet is a much larger network of connected networks; a cable or cellular link can also connect to it.",
    ], notes({ questions: ["Can a device use the Internet without Wi-Fi?"], expectedAnswers: ["Yes. It might use Ethernet or a cellular connection."], tips: ["Explain that losing Wi-Fi may break that local connection, but Wi-Fi and the Internet are not the same thing."], transition: "Send one message through the simplified route.", age6, age9 }), "purple"),
    interactive(3, "Send a Message Packet by Packet", "🚦", "packet-route", "Press the button and move through the journey. This route is a model; real routes can vary.", notes({ questions: ["What information helps a router forward data?"], expectedAnswers: ["Destination/address information carried according to network rules."], tips: ["Pause after each step and ask the learner to predict what should happen next."], transition: "Let's describe what the routers and addresses contribute.", age6, age9 })),
    content(4, "Addresses Help Data Find a Destination", "🧭", [
      "Network data carries addressing information so the network can work out where to forward it.",
      "Routers read network information and send data along a suitable next step; different packets may not follow one identical route.",
      "Protocols provide shared rules for formatting, sending, receiving, and checking information.",
      "This is a simplified explanation: the Internet uses several layers of technology working together.",
    ], notes({ questions: ["Is a router the same thing as the whole Internet?"], expectedAnswers: ["No. A router is a device that forwards data between networks; the Internet is the connected network system."], tips: ["Avoid saying routers always choose the fastest route; focus on forwarding toward a destination."], transition: "Act out the same journey with a classroom message.", age6, age9 }), "green"),
    activity(5, "The Classroom Packet Relay", "Turn the room into a tiny network. Each person has one job.", [
      "One learner is the sender and writes a short message on three numbered cards.",
      "Two learners are routers: pass each card toward the destination using the address on it.",
      "The receiver puts the numbered cards back in order and reads the message.",
      "Repeat with one card delayed; explain why numbering or checking can help detect a missing or out-of-order piece.",
    ], notes({ questions: ["What helped the receiver rebuild the message?"], expectedAnswers: ["The packet numbers or another agreed rule; answers may vary."], tips: ["This is a classroom analogy, not a complete Internet protocol. Do not imply that all real traffic uses the same recovery behaviour."], transition: "Check the job of a router.", age6, age9 })),
    quiz(6, "Quick Check: Router Job", "What does a router mainly help do?", ["Forward data toward its destination between networks", "Write the message for the user", "Turn every web page into a picture", "Store every file forever"], 0, "Routers help forward network data toward its destination using network information and agreed rules.", notes({ questions: ["What kind of information helps guide the data?"], expectedAnswers: ["Address or destination information."], tips: ["Accept a child-friendly phrase such as “where it needs to go.”"], transition: "Now check Wi-Fi versus the Internet.", age6, age9 })),
    quiz(7, "Quick Check: Wi-Fi or Internet?", "Which statement is correct?", ["Wi-Fi is one way to connect a device to a nearby network", "Wi-Fi and the Internet mean exactly the same thing", "The Internet only works through one home router", "A router is a programming language"], 0, "Wi-Fi is a local wireless connection method. The Internet connects many networks, and devices can reach it in other ways too.", notes({ questions: ["Name another way a device may connect."], expectedAnswers: ["Ethernet or cellular data; accept another suitable link."], tips: ["Use a home-router analogy but note that the Internet is much larger than the home network."], transition: "Finish by explaining one full request-and-response journey.", age6, age9 })),
    activity(8, "Explain the Journey", "Draw a four-part map from a tap to a result on the screen.", [
      "Start with the user action and the request leaving the device.",
      "Show the local connection and at least one router forwarding the data.",
      "Show the destination receiving the request and sending a response.",
      "Explain how the device uses received information to display a page, image, or video.",
      "Mark one part of your drawing that is simplified compared with a real network.",
    ], notes({ questions: ["Which part of your model should not be taken as the exact route every time?"], expectedAnswers: ["The number or order of routers/routes; real paths can differ."], tips: ["Assess the order and explanation, not artistic detail."], transition: "You have traced a digital message from a user action to a network response.", age6, age9 })),
  ],
};

export const advancedFoundationSessions: SessionData[] = [session33, session34];
