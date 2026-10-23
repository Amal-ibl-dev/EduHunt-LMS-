"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { TimerIcon } from "@/components/ui/icons";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
import { formatTime } from "@/lib/format";
import type { Question } from "../types";

type QuizRunnerProps = { questions: Question[]; durationSeconds: number };

const LETTERS = ["A", "B", "C", "D", "E"];

function resultMessage(ratio: number) {
  if (ratio >= 0.8) return "Excellent work! You're really getting the hang of this.";
  if (ratio >= 0.5) return "Good effort! A little more practice and you'll get there.";
  return "Every attempt makes you stronger. Review the notes and try again!";
}

export function QuizRunner({ questions, durationSeconds }: QuizRunnerProps) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [secondsLeft, setSecondsLeft] = useState(durationSeconds);
  const [submitted, setSubmitted] = useState(false);
  const finished = submitted || secondsLeft === 0;

  useEffect(() => {
    if (finished) return;
    const id = setInterval(() => setSecondsLeft((s) => Math.max(s - 1, 0)), 1000);
    return () => clearInterval(id);
  }, [finished]);

  const score = questions.filter((q, i) => answers[i] === q.answerIndex).length;

  function restart() {
    setCurrent(0);
    setAnswers({});
    setSecondsLeft(durationSeconds);
    setSubmitted(false);
  }

  function next() {
    // TODO: when finished, POST the result so it appears in Speed Test History
    if (current === questions.length - 1) setSubmitted(true);
    else setCurrent((c) => c + 1);
  }

  if (finished) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-page px-6 text-center">
        <p className="text-xl text-muted">Your score</p>
        <p className="text-7xl font-bold text-navy">
          {score}/{questions.length}
        </p>
        <p className="max-w-md text-2xl font-medium text-navy">{resultMessage(score / questions.length)}</p>
        <div className="mt-6 flex w-full max-w-md flex-col gap-4">
          <Button variant="speed" onClick={restart}>
            Try Again
          </Button>
          <Button href={ROUTES.dashboard} variant="outline">
            Back to Dashboard
          </Button>
        </div>
      </main>
    );
  }

  const question = questions[current];
  const selected = answers[current];

  return (
    <div className="min-h-screen bg-page">
      <header className="bg-white px-6 pb-4 pt-8 md:px-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-navy">
            Question {current + 1}/{questions.length}
          </h1>
          <div role="timer" className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 font-medium text-blue-600">
            <TimerIcon className="h-5 w-5" />
            <span className="tabular-nums">{formatTime(secondsLeft)}</span>
          </div>
        </div>
        <div className="mt-4 flex gap-2" aria-hidden>
          {questions.map((q, i) => (
            <span key={q.id} className={cn("h-2.5 flex-1 rounded-full", i <= current ? "bg-amber-200" : "bg-slate-300")} />
          ))}
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-5 px-6 py-8 md:px-12">
        <p className="rounded-3xl border border-slate-300 bg-white px-8 py-10 text-base text-slate-900">{question.text}</p>

        <div role="radiogroup" aria-label="Answers" className="space-y-4">
          {question.options.map((option, i) => (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={selected === i}
              onClick={() => setAnswers((a) => ({ ...a, [current]: i }))}
              className={cn(
                "flex w-full items-center gap-4 rounded-full border bg-white px-8 py-8 text-left text-sm transition",
                selected === i ? "border-brand ring-2 ring-brand/30" : "border-slate-300 hover:border-brand",
              )}
            >
              <span
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border text-lg",
                  selected === i ? "border-brand bg-brand text-white" : "border-slate-300 text-slate-500",
                )}
              >
                {LETTERS[i]}
              </span>
              {option}
            </button>
          ))}
        </div>

        <Button onClick={next} disabled={selected === undefined} className="mt-6">
          {current === questions.length - 1 ? "Submit" : "Next"}
        </Button>
      </main>
    </div>
  );
}
