"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { FormStatus } from "@/components/ui/FormStatus";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { TEACHER_PATHS } from "@/constants/teacher-routes";
import type { Lesson } from "@/features/courses/types";

export function LessonForm({ classId, lesson }: { classId: string; lesson?: Lesson }) {
  const [published, setPublished] = useState(true);
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = { ...Object.fromEntries(new FormData(e.currentTarget)), published };
    // TODO: POST (create) or PATCH (edit) via your API
    console.log(data);
    setStatus(lesson ? "Lesson updated (demo)." : "Lesson added (demo). Connect your API in LessonForm.tsx.");
  }

  const back = lesson ? TEACHER_PATHS.lesson(classId, lesson.id) : TEACHER_PATHS.class(classId);

  return (
    <Card className="p-6 md:p-8">
      <form onSubmit={onSubmit} onChange={() => setStatus(null)} className="mx-auto max-w-3xl space-y-5">
        <div className="grid gap-4 sm:grid-cols-[8rem_1fr]">
          <TextField compact required type="number" min={1} name="number" label="Lesson no." defaultValue={lesson?.number ?? ""} />
          <TextField compact required name="title" label="Lesson title" placeholder="Lesson 01 – Algebra" defaultValue={lesson?.title ?? ""} />
        </div>
        <TextAreaField name="description" label="Description" placeholder="Short summary shown to students." />
        <Checkbox checked={published} onChange={setPublished} label="Visible to students" description="Untick to keep this lesson as a draft." />

        <div className="flex flex-wrap gap-3">
          <Button type="submit" variant="admin" size="sm">{lesson ? "Save lesson" : "Add lesson"}</Button>
          <Button href={back} variant="adminOutline" size="sm">Cancel</Button>
        </div>
        <FormStatus message={status} />
      </form>
    </Card>
  );
}
