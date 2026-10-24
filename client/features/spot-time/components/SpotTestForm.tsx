"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormStatus } from "@/components/ui/FormStatus";
import { SelectField } from "@/components/ui/SelectField";
import { TextField } from "@/components/ui/TextField";
import { GRADES } from "@/constants/grades";
import { SUBJECTS } from "@/constants/subjects";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import type { SpotTest } from "../types";
import { MIN_OPTIONS, QuestionEditor, blankQuestion, nextKey, type DraftQuestion } from "./QuestionEditor";

const DURATIONS = [5, 10, 15, 20, 30, 45, 60].map((m) => ({ value: String(m), label: `${m} minutes` }));

function validate(questions: DraftQuestion[]) {
  const errors: Record<string, string> = {};
  questions.forEach((q) => {
    const filled = q.options.filter((o) => o.text.trim());
    const correct = filled.filter((o) => o.correct).length;
    if (!q.text.trim()) errors[q.key] = "Write the question.";
    else if (filled.length < MIN_OPTIONS) errors[q.key] = `Add at least ${MIN_OPTIONS} answers.`;
    else if (correct === 0) errors[q.key] = q.mode === "single" ? "Mark the correct answer." : "Mark at least one correct answer.";
    else if (q.mode === "single" && correct !== 1) errors[q.key] = "A single-answer question needs exactly one correct answer.";
  });
  return errors;
}

export function SpotTestForm({ test }: { test?: SpotTest }) {
  const [questions, setQuestions] = useState<DraftQuestion[]>(() =>
    test && test.questions.length > 0
      ? test.questions.map((q) => ({ key: q.id, text: q.text, mode: q.mode, options: q.options.map((o) => ({ key: o.id, text: o.text, correct: o.correct })) }))
      : [blankQuestion("q0")],
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<string | null>(null);

  const update = (key: string, next: DraftQuestion) => setQuestions((qs) => qs.map((q) => (q.key === key ? next : q)));

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(questions);
    setErrors(found);
    const firstBad = questions.find((q) => found[q.key]);
    if (firstBad) {
      document.getElementById(`question-${firstBad.key}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const details = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: POST { details, questions } to your API
    console.log({ details, questions });
    setStatus(test ? "Spot test updated (demo)." : "Spot test saved (demo). Connect your API in SpotTestForm.tsx.");
  }

  const errorCount = Object.keys(errors).length;

  return (
    <form onSubmit={onSubmit} onChange={() => setStatus(null)} className="space-y-6">
      <Card className="space-y-5 p-6 md:p-8">
        <h2 className="text-xl font-semibold text-navy">1. Spot test details</h2>
        <TextField compact required name="title" label="Title" placeholder="Algebra spot test" defaultValue={test?.title ?? ""} />
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField compact required name="subject" label="Subject" placeholder="Select subject" options={SUBJECTS.map((s) => ({ value: s, label: s }))} defaultValue={test?.subject ?? ""} />
          <SelectField compact required name="grade" label="Grade" placeholder="Select grade" options={GRADES} defaultValue={test ? test.grade.replace("Grade ", "") : ""} />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <TextField compact required type="date" name="date" label="Date" hint="Pick a date from the calendar." defaultValue={test?.date ?? ""} />
          <TextField compact required type="time" name="time" label="Start time" defaultValue={test?.time ?? ""} />
          <SelectField compact required name="duration" label="Duration" placeholder="Select" options={DURATIONS} defaultValue={test ? String(test.durationMinutes) : ""} />
        </div>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-navy">2. Questions ({questions.length})</h2>
        {questions.map((q, i) => (
          <QuestionEditor
            key={q.key}
            q={q}
            index={i}
            error={errors[q.key]}
            canRemove={questions.length > 1}
            onChange={(next) => update(q.key, next)}
            onRemove={() => setQuestions((qs) => qs.filter((x) => x.key !== q.key))}
          />
        ))}
        <button
          type="button"
          onClick={() => setQuestions((qs) => [...qs, blankQuestion(nextKey())])}
          className="flex h-14 w-full items-center justify-center rounded-3xl border-2 border-dashed border-admin/50 text-admin-dark transition hover:bg-admin-soft"
        >
          + Add question
        </button>
      </div>

      {errorCount > 0 && (
        <p role="alert" className="rounded-2xl bg-red-50 p-4 text-sm text-red-600">
          Please fix {errorCount} question{errorCount > 1 ? "s" : ""} before saving.
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <Button type="submit" variant="admin" size="sm">{test ? "Save changes" : "Save spot test"}</Button>
        <Button href={TEACHER_ROUTES.spotTime} variant="adminOutline" size="sm">Cancel</Button>
      </div>
      <FormStatus message={status} />
    </form>
  );
}
