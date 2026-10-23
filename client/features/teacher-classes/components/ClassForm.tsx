"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormStatus } from "@/components/ui/FormStatus";
import { SelectField } from "@/components/ui/SelectField";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { GRADES } from "@/constants/grades";
import { SUBJECTS } from "@/constants/subjects";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import type { ClassGroup } from "@/features/courses/types";

const opts = (list: readonly string[]) => list.map((v) => ({ value: v, label: v }));
const DAYS = opts(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);
const MEDIUMS = opts(["Sinhala", "English", "Tamil", "Other"]);

export function ClassForm({ cls }: { cls?: ClassGroup }) {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: POST (create) or PATCH (edit) via your API, then refresh the list
    console.log(data);
    setStatus(cls ? "Class updated (demo)." : "Class created (demo). Connect your API in ClassForm.tsx.");
  }

  return (
    <Card className="p-6 md:p-8">
      <form onSubmit={onSubmit} onChange={() => setStatus(null)} className="mx-auto max-w-3xl space-y-5">
        <TextField compact required name="title" label="Class name" placeholder="Grade 10 – Mathematics" defaultValue={cls ? `${cls.grade} – ${cls.subject}` : ""} />
        <div className="grid gap-4 sm:grid-cols-3">
          <SelectField compact required name="subject" label="Subject" placeholder="Select subject" options={opts(SUBJECTS)} defaultValue={cls?.subject ?? ""} />
          <SelectField compact required name="grade" label="Grade" placeholder="Select grade" options={GRADES} defaultValue={cls ? cls.grade.replace("Grade ", "") : ""} />
          <SelectField compact required name="medium" label="Medium" placeholder="Select medium" options={MEDIUMS} />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <SelectField compact name="day" label="Class day" placeholder="Select day" options={DAYS} />
          <TextField compact type="time" name="time" label="Start time" />
          <TextField compact type="number" min={0} name="fee" label="Monthly fee (LKR)" placeholder="3000" />
        </div>
        <TextAreaField name="description" label="Description" placeholder="What will students learn in this class?" />

        <div className="flex flex-wrap gap-3">
          <Button type="submit" variant="admin" size="sm">{cls ? "Save changes" : "Create class"}</Button>
          <Button href={cls ? `${TEACHER_ROUTES.classes}/${cls.id}` : TEACHER_ROUTES.classes} variant="adminOutline" size="sm">Cancel</Button>
        </div>
        <FormStatus message={status} />
      </form>
    </Card>
  );
}
