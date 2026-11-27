"use client";

import { useState } from "react";
import { SlideData } from "@/data/types";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { addPoints } from "@/lib/progress";

export function QuizSlide({ quiz }: { quiz: NonNullable<SlideData["quiz"]> }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasAwarded, setHasAwarded] = useState(false);

  const handleSelect = (index: number) => {
    setSelected(index);
    const correct = index === quiz.correctIndex;
    setIsCorrect(correct);

    if (correct && !hasAwarded) {
      addPoints(10);
      setHasAwarded(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10B981", "#3B82F6", "#F97316"],
      });
    }
  };

  const tryAgain = () => {
    setSelected(null);
    setIsCorrect(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100">
        <h3 className="font-outfit font-bold text-2xl md:text-3xl text-slate-800 mb-8 text-center">
          {quiz.question}
        </h3>

        <div className="flex flex-col gap-4">
          {quiz.options.map((option, index) => {
            const isSelected = selected === index;
            let buttonClass =
              "w-full min-h-14 text-left px-5 py-4 rounded-2xl font-inter text-lg md:text-xl transition-all border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ";

            if (selected === null) {
              buttonClass +=
                "bg-slate-50 border-slate-200 hover:border-primary hover:bg-blue-50 text-slate-700";
            } else if (isSelected && isCorrect) {
              buttonClass +=
                "bg-green-50 border-success text-green-800 shadow-[0_0_20px_rgba(16,185,129,0.3)]";
            } else if (isSelected) {
              buttonClass += "bg-red-50 border-error text-red-800";
            } else {
              buttonClass += "bg-slate-50 border-slate-200 text-slate-500 opacity-70";
            }

            return (
              <motion.button
                key={index}
                type="button"
                onClick={() => selected === null && handleSelect(index)}
                disabled={selected !== null}
                className={buttonClass}
                whileHover={selected === null ? { scale: 1.02 } : {}}
                whileTap={selected === null ? { scale: 0.98 } : {}}
                animate={
                  isSelected && isCorrect === false
                    ? { x: [-10, 10, -10, 10, -5, 5, 0] }
                    : {}
                }
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-between items-center gap-4">
                  <span>{option}</span>
                  {isSelected && isCorrect && (
                    <span aria-hidden="true" className="text-2xl">
                      ✓
                    </span>
                  )}
                  {isSelected && isCorrect === false && (
                    <span aria-hidden="true" className="text-2xl">
                      ×
                    </span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {isCorrect === false && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          aria-live="polite"
          className="text-center mt-6"
        >
          <p className="text-error font-outfit font-bold text-xl">
            Not yet. Read the choices once more and try again.
          </p>
          <button
            type="button"
            onClick={tryAgain}
            className="mt-3 min-h-11 px-5 rounded-full bg-slate-900 text-white font-outfit font-bold hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Try again
          </button>
        </motion.div>
      )}

      {isCorrect === true && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          aria-live="polite"
          className="text-center mt-6"
        >
          <p className="text-success font-outfit font-bold text-2xl">
            Excellent! You got it right!
          </p>
          {quiz.explanation && (
            <p className="max-w-2xl mx-auto mt-3 px-5 py-4 rounded-2xl bg-green-50 text-slate-700 font-inter text-base md:text-lg leading-relaxed">
              {quiz.explanation}
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}
