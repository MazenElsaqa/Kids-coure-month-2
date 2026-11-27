import Link from "next/link";
import { session1 } from "@/data/session1";
import { session2 } from "@/data/session2";
import { session3 } from "@/data/session3";
import { session4 } from "@/data/session4";
import { session5 } from "@/data/session5";
import { session6 } from "@/data/session6";
import { session7 } from "@/data/session7";
import { session8 } from "@/data/session8";
import { session9 } from "@/data/session9";
import { session10 } from "@/data/session10";
import { session11 } from "@/data/session11";
import { session12 } from "@/data/session12";
import { session13 } from "@/data/session13";
import { session14 } from "@/data/session14";
import { session15 } from "@/data/session15";
import { session16 } from "@/data/session16";
import { session17 } from "@/data/session17";
import { session18 } from "@/data/session18";
import { ProgressSummary } from "@/components/ProgressSummary";

export default function Home() {
  const sessions = [
    session1,
    session2,
    session3,
    session4,
    session5,
    session6,
    session7,
    session8,
    session9,
    session10,
    session11,
    session12,
    session13,
    session14,
    session15,
    session16,
    session17,
    session18,
  ];

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center p-5 sm:p-8">
      <div className="max-w-4xl w-full py-8">
        <div className="text-center mb-12">
          <h1 className="font-outfit font-extrabold text-5xl md:text-7xl text-slate-800 mb-6 tracking-tight">
            Algorithm Adventure! <span className="inline-block animate-bounce-soft">🚀</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Learn how computers work, then use Scratch to make games and tell stories. Built for learners aged 6 and 9.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link
              href="/session/23?slide=1"
              className="min-h-12 inline-flex items-center justify-center rounded-full px-6 py-3 font-outfit font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Start with Computer Foundations →
            </Link>
            <Link
              href="/curriculum"
              className="min-h-12 inline-flex items-center justify-center rounded-full px-6 py-3 font-outfit font-bold text-white bg-slate-900 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              See the 32-session learning path
            </Link>
          </div>
        </div>

        <ProgressSummary />

        <h2 className="font-outfit font-extrabold text-2xl text-slate-800 mt-12 mb-5">
          Published sessions · jump back in
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {sessions.map((session) => (
            <Link
              href={`/session/${session.slug ?? session.id}?slide=1`}
              key={session.slug ?? session.id}
              className="group block relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div
                className="absolute top-0 left-0 w-full h-3"
                style={{ backgroundColor: session.color }}
              />
              <div className="p-7 pt-9">
                <div className="flex justify-between items-start mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl shadow-md"
                    style={{ backgroundColor: `${session.color}20` }}
                  >
                    {session.emoji}
                  </div>
                  <span className="font-fira text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                    {session.slides.length} slides
                  </span>
                </div>

                <div className="mb-2">
                  <span
                    className="font-outfit font-bold text-sm tracking-widest uppercase"
                    style={{ color: session.color }}
                  >
                    Session {session.id}
                  </span>
                </div>

                <h3 className="font-outfit font-bold text-2xl md:text-3xl text-slate-800 mb-3">
                  {session.title}
                </h3>

                <p className="font-inter text-slate-600 mb-5 leading-relaxed">
                  {session.description}
                </p>

                <div className="flex items-center text-slate-800 font-bold font-outfit group-hover:text-primary transition-colors">
                  Start learning <span aria-hidden="true" className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
