"use client";

import { Card } from "@/components/ui/Card";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { XIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import type { AnswerMode } from "../types";

export type DraftOption = { key: string; text: string; correct: boolean };
export type DraftQuestion = { key: string; text: string; mode: AnswerMode; options: DraftOption[] };

export const MIN_OPTIONS = 3;
export const MAX_OPTIONS = 6;

let counter = 0;
/** Only call from event handlers (never during render) so SSR and client keys match. */
export const nextKey = () => `n${++counter}`;

export function blankQuestion(key: string): DraftQuestion {
  return {
    key,
    text: "",
    mode: "single",
    options: Array.from({ length: MIN_OPTIONS }, (_, i) => ({ key: `${key}-o${i}`, text: "", correct: false })),
  };
}

type Props = {
  q: DraftQuestion;
  index: number;
  error?: string;
  canRemove: boolean;
  onChange: (next: DraftQuestion) => void;
  onRemove: () => void;
};

export function QuestionEditor({ q, index, error, canRemove, onChange, onRemove }: Props) {
  const single = q.mode === "single";

  function setMode(mode: AnswerMode) {
    if (mode === q.mode) return;
    let kept = false;
    // switching to "single" keeps only the first correct answer
    const options = q.options.map((o) => {
      if (mode === "single" && o.correct) {
        const keep = !kept;
        kept = true;
        return { ...o, correct: keep };
      }
      return o;
    });
    onChange({ ...q, mode, options });
  }

  const setCorrect = (i: number, checked: boolean) =>
    onChange({ ...q, options: q.options.map((o, j) => (single ? { ...o, correct: j === i } : j === i ? { ...o, correct: checked } : o)) });
  const setText = (i: number, text: string) => onChange({ ...q, options: q.options.map((o, j) => (j === i ? { ...o, text } : o)) });
  const addOption = () =>
    q.options.length < MAX_OPTIONS && onChange({ ...q, options: [...q.options, { key: `${q.key}-o${nextKey()}`, text: "", correct: false }] });
  const removeOption = (i: number) => q.options.length > MIN_OPTIONS && onChange({ ...q, options: q.options.filter((_, j) => j !== i) });

  return (
    <Card id={`question-${q.key}`} className={cn("space-y-5 p-5 md:p-6", error && "ring-2 ring-red-300")}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-navy">Question {index + 1}</h3>
        {canRemove && (
          <button type="button" onClick={onRemove} className="text-sm font-medium text-coral hover:underline">
            Remove question
          </button>
        )}
      </div>

      <TextAreaField label="Question" rows={2} value={q.text} onChange={(e) => onChange({ ...q, text: e.target.value })} placeholder="Type your question here" />

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-slate-600">Answer type</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {(["single", "multiple"] as const).map((m) => (
            <label key={m} className={cn("flex cursor-pointer items-center gap-3 rounded-2xl border p-3 text-sm transition", q.mode === m ? "border-admin bg-admin-soft text-admin-dark" : "border-slate-200 text-slate-600 hover:border-admin")}>
              <input type="radio" name={`mode-${q.key}`} checked={q.mode === m} onChange={() => setMode(m)} className="accent-admin" />
              {m === "single" ? "Single answer (one correct)" : "Multiple answers (one or more correct)"}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-slate-600">
          Answers <span className="font-normal text-muted">· tick the correct {single ? "answer" : "answers"} (minimum {MIN_OPTIONS})</span>
        </legend>
        <ul className="space-y-3">
          {q.options.map((o, i) => (
            <li key={o.key} className="flex items-center gap-3">
              <input
                type={single ? "radio" : "checkbox"}
                name={`correct-${q.key}`}
                checked={o.correct}
                onChange={(e) => setCorrect(i, e.target.checked)}
                aria-label={`Mark answer ${i + 1} as correct`}
                className="h-5 w-5 shrink-0 accent-admin"
              />
              <input
                value={o.text}
                onChange={(e) => setText(i, e.target.value)}
                placeholder={`Answer ${i + 1}`}
                aria-label={`Answer ${i + 1}`}
                className="h-11 min-w-0 flex-1 rounded-full bg-field px-4 text-base text-navy outline-none placeholder:text-muted/70 focus:ring-2 focus:ring-brand"
              />
              {q.options.length > MIN_OPTIONS && (
                <button type="button" onClick={() => removeOption(i)} aria-label={`Remove answer ${i + 1}`} className="shrink-0 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-coral">
                  <XIcon className="h-4 w-4" />
                </button>
              )}
            </li>
          ))}
        </ul>
        {q.options.length < MAX_OPTIONS && (
          <button type="button" onClick={addOption} className="mt-3 text-sm font-medium text-admin-dark hover:underline">
            + Add another answer
          </button>
        )}
      </fieldset>

      {error && <p role="alert" className="text-sm text-red-500">{error}</p>}
    </Card>
  );
}
