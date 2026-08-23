import { notFound } from "next/navigation";
import { session1 } from "@/data/session1";
import { session2 } from "@/data/session2";
import { session3 } from "@/data/session3";
import { session4 } from "@/data/session4";
import { session5 } from "@/data/session5";
import { session6 } from "@/data/session6";
import { session7 } from "@/data/session7";
import { session8 } from "@/data/session8";
import { session8Practical } from "@/data/session8-practical";
import { session9 } from "@/data/session9";
import { session10 } from "@/data/session10";
import { session11 } from "@/data/session11";
import { session12 } from "@/data/session12";
import { Navigation } from "@/components/Navigation";
import { SlideLayout } from "@/components/SlideLayout";
import { TeacherNotes } from "@/components/TeacherNotes";
import { Mascot } from "@/components/Mascot";

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "8-practical" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
  ];
}

export default async function SessionPage(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const sessionId = params.id;
  const sessions = {
    "1": session1,
    "2": session2,
    "3": session3,
    "4": session4,
    "5": session5,
    "6": session6,
    "7": session7,
    "8": session8,
    "8-practical": session8Practical,
    "9": session9,
    "10": session10,
    "11": session11,
    "12": session12,
  } as const;

  const session = sessions[sessionId as keyof typeof sessions] ?? null;

  if (!session) {
    notFound();
  }

  const slideParam = searchParams.slide;
  const currentSlideId = typeof slideParam === "string" ? parseInt(slideParam, 10) : 1;
  const currentSlide = session.slides.find((s) => s.id === currentSlideId);

  if (!currentSlide) {
    notFound();
  }

  const lastReviewSlide = [...session.slides].reverse().find((s) => s.type === "review");
  const showBadge = currentSlide.type === "review" && lastReviewSlide?.id === currentSlide.id;

  const totalSlides = session.slides.length;
  const prevSlideId = currentSlideId > 1 ? currentSlideId - 1 : null;
  const nextSlideId = currentSlideId < totalSlides ? currentSlideId + 1 : null;

  return (
    <>
      <Navigation
        sessionId={sessionId}
        currentSlide={currentSlideId}
        totalSlides={totalSlides}
        prevSlideId={prevSlideId}
        nextSlideId={nextSlideId}
      />

      <main className="overflow-hidden relative min-h-screen">
        <SlideLayout slide={currentSlide} sessionId={session.id} showBadge={showBadge} />
      </main>

      {currentSlide.teacherNotes && <TeacherNotes notes={currentSlide.teacherNotes} />}
      {currentSlide.mascotMessage && <Mascot message={currentSlide.mascotMessage} />}
    </>
  );
}
