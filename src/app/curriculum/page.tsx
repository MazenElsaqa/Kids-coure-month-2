import Link from "next/link";
import { curriculum, sections, courseStats } from "@/data/curriculum";
import { SessionCard } from "@/components/curriculum/SessionCard";

export const metadata = {
  title: "Learning Path — Computer & Scratch for Kids",
  description:
    "A complete 36-session learning path for ages 6 and 9, paced one lesson per week, with optional foundations enrichment, Scratch projects, and section reviews.",
};

export default function CurriculumPage() {
  const sessionsById = new Map(curriculum.map((session) => [session.id, session]));

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 text-slate-50">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-12 md:py-14">
          <Link
            href="/"
            className="min-h-11 inline-flex items-center font-outfit font-semibold text-sm text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md"
          >
            ← Back home
          </Link>

          <p className="font-fira text-xs uppercase tracking-[0.2em] text-sky-300 mt-6">
            Computer skills · Scratch · Ages {courseStats.ages}
          </p>
          <h1 className="font-outfit font-extrabold text-4xl md:text-6xl tracking-tight mt-3 text-balance">
            The Learning Path
          </h1>
          <p className="font-inter text-lg md:text-xl text-slate-300 mt-4 max-w-3xl leading-relaxed text-pretty">
            Start with how computers work, then learn to plan, code, build games, and explain your ideas. Lesson and quiz content is in English; teacher notes include ways to support a 6-year-old and extend a 9-year-old.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <Link
              href="/session/23?slide=1"
              className="min-h-12 inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 font-outfit font-bold text-slate-900 hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Start with Computer Foundations →
            </Link>
            <Link
              href="/"
              className="min-h-12 inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 font-outfit font-semibold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Browse published sessions
            </Link>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
            {[
              [courseStats.totalSessions, "sessions in the path"],
              [courseStats.readySessions, "ready to learn"],
              [courseStats.plannedSessions, "still planned"],
              [courseStats.projects, "projects"],
              [courseStats.ages, "learner ages"],
            ].map(([value, label]) => (
              <div key={String(label)}>
                <dt className="font-outfit font-extrabold text-3xl text-amber-400">
                  {value}
                </dt>
                <dd className="font-inter text-xs sm:text-sm text-slate-400 uppercase tracking-wider mt-1">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-5 sm:px-6 py-10 md:py-14">
        <div className="mb-7">
          <h2 className="font-outfit font-extrabold text-2xl md:text-3xl text-slate-800">
            Sections → Topics → Sessions
          </h2>
          <p className="font-inter text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Open a section, choose a topic, then open a built session. Plan one taught lesson each week. The two video-inspired foundations sessions are optional enrichment; Scratch Sessions 19–22 and Final Review 32 are now ready to teach.
          </p>
        </div>

        <div className="flex flex-col gap-5 pb-20">
          {sections.map((section, sectionIndex) => {
            const sessionCount = section.topics.reduce(
              (total, topic) => total + topic.sessionIds.length,
              0,
            );

            return (
              <details
                key={section.id}
                open={sectionIndex === 0}
                className="group rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5 overflow-hidden"
              >
                <summary className="cursor-pointer list-none min-h-20 px-5 sm:px-7 py-5 flex items-center justify-between gap-4 border-l-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  style={{ borderLeftColor: section.color }}
                >
                  <div className="min-w-0">
                    <p className="font-fira text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      Section {String(sectionIndex + 1).padStart(2, "0")} · {section.topics.length} topics · {sessionCount} sessions
                    </p>
                    <h3 className="font-outfit font-bold text-xl md:text-2xl text-slate-800 mt-1">
                      {section.title}
                    </h3>
                    <p className="font-inter text-sm md:text-base text-slate-600 mt-1">
                      {section.summary}
                    </p>
                  </div>
                  <span aria-hidden="true" className="shrink-0 text-slate-400 text-2xl transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>

                <div className="px-4 sm:px-7 pb-6 flex flex-col gap-3">
                  {section.topics.map((topic, topicIndex) => {
                    const topicSessions = topic.sessionIds
                      .map((sessionId) => sessionsById.get(sessionId))
                      .filter((session) => session !== undefined);

                    return (
                      <details
                        key={topic.id}
                        open={sectionIndex === 0 && topicIndex === 0}
                        className="group/topic rounded-xl bg-slate-50 ring-1 ring-slate-900/5 overflow-hidden"
                      >
                        <summary className="cursor-pointer list-none min-h-16 px-4 sm:px-5 py-4 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                        >
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h4 className="font-outfit font-bold text-lg text-slate-800">
                                {topic.title}
                              </h4>
                              <span className="font-fira text-[11px] text-slate-500 bg-white rounded-full px-2.5 py-1 ring-1 ring-slate-900/5">
                                {topicSessions.length} {topicSessions.length === 1 ? "session" : "sessions"}
                              </span>
                            </div>
                            <p className="font-inter text-sm text-slate-600 mt-1 leading-relaxed">
                              {topic.description}
                            </p>
                          </div>
                          <span aria-hidden="true" className="shrink-0 text-slate-400 text-xl transition-transform group-open/topic:rotate-180">
                            ⌄
                          </span>
                        </summary>

                        <div className="px-3 sm:px-4 pb-4 flex flex-col gap-4">
                          {topicSessions.map((session) => (
                            <SessionCard key={session.id} session={session} />
                          ))}
                        </div>
                      </details>
                    );
                  })}
                </div>
              </details>
            );
          })}
        </div>
      </section>
    </main>
  );
}
