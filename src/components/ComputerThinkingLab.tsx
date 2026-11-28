"use client";

import { useState } from "react";
import type { InteractiveDemoKind } from "@/data/types";

const panelClass = "w-full max-w-4xl rounded-3xl bg-white p-5 md:p-8 shadow-xl ring-1 ring-slate-900/10";
const buttonClass = "min-h-12 rounded-xl px-4 py-3 font-outfit font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2";

export function ComputerThinkingLab({ demo }: { demo: InteractiveDemoKind }) {
  if (demo === "binary-byte") return <BinaryByteLab />;
  if (demo === "storage-units") return <StorageUnitsLab />;
  if (demo === "language-stack") return <LanguageStackLab />;
  return <PacketRouteLab />;
}

function BinaryByteLab() {
  const weights = [128, 64, 32, 16, 8, 4, 2, 1];
  const [bits, setBits] = useState<number[]>(Array(8).fill(0));
  const [signalOn, setSignalOn] = useState(false);
  const value = bits.reduce((sum, bit, index) => sum + bit * weights[index], 0);
  const character = value >= 32 && value <= 126 ? String.fromCharCode(value) : null;
  const setDemo = (number: number) => setBits(weights.map((weight) => (number & weight ? 1 : 0)));

  return (
    <section className={panelClass} aria-labelledby="binary-lab-title">
      <h3 id="binary-lab-title" className="font-outfit text-2xl font-extrabold text-slate-800">Flip a signal, build a byte</h3>
      <p className="mt-2 font-inter text-base leading-relaxed text-slate-600">This is a learning model: a circuit can use two distinguishable states to represent 0 and 1. Real computer circuits are more detailed than one simple light switch.</p>
      <button type="button" aria-pressed={signalOn} onClick={() => setSignalOn((on) => !on)} className={`${buttonClass} mt-5 ${signalOn ? "bg-emerald-600 text-white" : "bg-slate-800 text-white"}`}>
        Signal model: {signalOn ? "ON → 1" : "OFF → 0"} · Click to switch
      </button>
      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <p className="font-outfit font-bold text-slate-800">Choose which bit switches are ON.</p>
        <div className="flex gap-2">
          <button type="button" onClick={() => setDemo(65)} className={`${buttonClass} bg-blue-100 text-blue-900 hover:bg-blue-200`}>Try 65 → A</button>
          <button type="button" onClick={() => setBits(Array(8).fill(0))} className={`${buttonClass} bg-slate-100 text-slate-800 hover:bg-slate-200`}>Clear</button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-8">
        {weights.map((weight, index) => (
          <button key={weight} type="button" aria-pressed={bits[index] === 1} aria-label={`Bit with value ${weight}: ${bits[index] ? "one" : "zero"}`} onClick={() => setBits((previous) => previous.map((bit, i) => i === index ? 1 - bit : bit))} className={`${buttonClass} flex min-h-20 flex-col items-center justify-center border-2 ${bits[index] ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-400"}`}>
            <span className="font-fira text-xs">{weight}</span><span className="font-fira text-2xl">{bits[index]}</span>
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-3 rounded-2xl bg-slate-900 p-5 text-white sm:grid-cols-3">
        <p><span className="block text-xs uppercase tracking-wider text-slate-300">Pattern</span><strong className="font-fira text-2xl">{bits.join("")}</strong></p>
        <p><span className="block text-xs uppercase tracking-wider text-slate-300">Add the ON values</span><strong className="font-fira text-2xl">{value}</strong></p>
        <p><span className="block text-xs uppercase tracking-wider text-slate-300">One possible reading</span><strong className="font-outfit text-2xl">{character ? `ASCII “${character}”` : "Number / code"}</strong></p>
      </div>
      <p className="mt-4 font-inter text-sm leading-relaxed text-slate-600">The bits make a number. A format such as ASCII can assign a familiar letter to some numbers; other formats interpret patterns differently. One byte is 8 bits.</p>
    </section>
  );
}

function StorageUnitsLab() {
  const [count, setCount] = useState(1);
  const [unit, setUnit] = useState<"kB" | "KiB">("kB");
  const multiplier = unit === "kB" ? 1000 : 1024;
  const totalBytes = count * multiplier;
  return (
    <section className={panelClass} aria-labelledby="storage-lab-title">
      <h3 id="storage-lab-title" className="font-outfit text-2xl font-extrabold text-slate-800">Choose the unit, then calculate</h3>
      <p className="mt-2 font-inter text-base text-slate-600">The unit label tells you which multiplier to use. Try the same number with both prefixes.</p>
      <div className="mt-5 flex flex-wrap gap-3" role="group" aria-label="Choose a storage unit">
        {(["kB", "KiB"] as const).map((choice) => <button key={choice} type="button" aria-pressed={unit === choice} onClick={() => setUnit(choice)} className={`${buttonClass} ${unit === choice ? "bg-teal-700 text-white" : "bg-slate-100 text-slate-800"}`}>{choice} {choice === "kB" ? "· decimal" : "· binary"}</button>)}
      </div>
      <div className="mt-5 flex items-center gap-4">
        <label htmlFor="unit-count" className="font-inter font-semibold text-slate-700">How many {unit}?</label>
        <input id="unit-count" type="number" min="1" max="20" value={count} onChange={(event) => setCount(Math.max(1, Math.min(20, Number(event.target.value) || 1)))} className="min-h-12 w-24 rounded-xl border-2 border-slate-300 px-3 font-fira text-lg text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600" />
      </div>
      <div className="mt-6 rounded-2xl bg-teal-50 p-5 text-center">
        <p className="font-inter text-slate-700">{count} {unit} × {multiplier} bytes per {unit}</p>
        <p aria-live="polite" className="mt-1 font-fira text-3xl font-extrabold text-teal-900">= {totalBytes.toLocaleString("en-US")} bytes</p>
      </div>
      <p className="mt-4 font-inter text-sm text-slate-600">Decimal: 1 kB = 1,000 bytes. Binary: 1 KiB = 1,024 bytes. The “i” marks the binary prefix.</p>
    </section>
  );
}

const languageCards = [
  { title: "1 · The idea", sample: "Make the character move 10 steps.", detail: "First decide what the program should do. This is an algorithm or instruction in everyday words—not yet a particular programming language." },
  { title: "2 · A language people use", sample: "Scratch blocks · Python code", detail: "Scratch blocks and languages such as Python let people express instructions in forms that are easier to read than machine code." },
  { title: "3 · Tools run the program", sample: "Compiler · interpreter · runtime", detail: "Language tools translate, prepare, or execute instructions. The exact route depends on the language and its tools; not every program passes through C." },
  { title: "4 · CPU instructions", sample: "Machine-code patterns", detail: "The processor executes instructions encoded for its design. Assembly uses short names for low-level operations, but it is not a required step in every program." },
];

function LanguageStackLab() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={panelClass} aria-labelledby="language-lab-title">
      <h3 id="language-lab-title" className="font-outfit text-2xl font-extrabold text-slate-800">Open the layers between an idea and a running program</h3>
      <p className="mt-2 font-inter text-base leading-relaxed text-slate-600">Tap each card. This is a useful map, not one fixed translation staircase for every language.</p>
      <div className="mt-5 space-y-3">
        {languageCards.map((card, index) => <div key={card.title} className="overflow-hidden rounded-2xl border border-slate-200">
          <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)} className="flex min-h-16 w-full items-center justify-between gap-4 bg-slate-50 px-5 py-4 text-left hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600">
            <span><span className="block font-outfit font-bold text-slate-800">{card.title}</span><span className="mt-1 block font-fira text-sm text-violet-800">{card.sample}</span></span><span aria-hidden="true" className="text-2xl text-slate-500">{open === index ? "−" : "+"}</span>
          </button>
          {open === index && <p className="px-5 py-4 font-inter leading-relaxed text-slate-700">{card.detail}</p>}
        </div>)}
      </div>
      <div className="mt-5 rounded-2xl bg-amber-50 p-4 font-inter text-sm leading-relaxed text-amber-950"><strong>Web note:</strong> HTML describes page structure and CSS describes appearance. They are important web technologies, but they are not general-purpose programming languages like Python.</div>
    </section>
  );
}

const packetSteps = [
  { title: "1 · Make a request", text: "Your device asks a service for information, such as a page or video." },
  { title: "2 · Prepare data", text: "Network protocols organise the information so it can be sent. Large data can travel in packets." },
  { title: "3 · Forward the packets", text: "Addresses help routers decide where to send packets next. The route can vary." },
  { title: "4 · Receive and respond", text: "The destination receives the data and sends a response. Your device uses it to show the result." },
];

function PacketRouteLab() {
  const [step, setStep] = useState(-1);
  const current = Math.max(step, 0);
  return (
    <section className={panelClass} aria-labelledby="packet-lab-title">
      <h3 id="packet-lab-title" className="font-outfit text-2xl font-extrabold text-slate-800">Send a message across a network</h3>
      <p className="mt-2 font-inter text-base leading-relaxed text-slate-600">Advance one step at a time. The route below is a simplified model; real network paths can be different.</p>
      <ol className="mt-6 grid gap-3 sm:grid-cols-4" aria-label="Message journey">
        {["Your device", "Router", "Router", "Service"].map((node, index) => <li key={`${node}-${index}`} className={`rounded-2xl border-2 p-4 text-center transition ${current >= index ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-slate-50"}`}>
          <span className="block text-3xl" aria-hidden="true">{index === 0 ? "💻" : index === 3 ? "🖥️" : "📡"}</span><span className="mt-2 block font-outfit font-bold text-slate-800">{node}</span>
          {step >= 0 && current === index && <span className="mt-2 block rounded-full bg-amber-300 px-2 py-1 font-fira text-xs text-slate-900">📦 packet here</span>}
        </li>)}
      </ol>
      {step >= 0 && <div className="mt-5 rounded-2xl bg-blue-50 p-5" aria-live="polite"><p className="font-outfit text-xl font-bold text-blue-950">{packetSteps[current].title}</p><p className="mt-2 font-inter leading-relaxed text-slate-700">{packetSteps[current].text}</p></div>}
      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" onClick={() => setStep(step < 0 ? 0 : Math.min(step + 1, packetSteps.length - 1))} className={`${buttonClass} bg-blue-700 text-white hover:bg-blue-800`}>{step < 0 ? "Start the journey" : step < packetSteps.length - 1 ? "Next step →" : "At the destination"}</button>
        <button type="button" onClick={() => setStep(-1)} className={`${buttonClass} bg-slate-100 text-slate-800 hover:bg-slate-200`}>Reset</button>
      </div>
      <p className="mt-4 font-inter text-sm leading-relaxed text-slate-600">Wi-Fi is one way your device connects to a nearby network. The Internet is the much larger network of connected networks.</p>
    </section>
  );
}
