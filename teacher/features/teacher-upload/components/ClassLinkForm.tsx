"use client";

import { useState, type FormEvent } from "react";
import { Card } from "@/components/ui/Card";
import { SelectField } from "@/components/ui/SelectField";
import { TextField } from "@/components/ui/TextField";
import { GRADES } from "@/constants/grades";
import { SUBJECTS } from "@/constants/subjects";

const PLATFORMS = ["Google Meet", "Zoom", "YouTube", "Other"].map((p) => ({ value: p, label: p }));

export function ClassLinkForm() {
  const [saved, setSaved] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: POST to your class-links API
    console.log(data);
    e.currentTarget.reset();
    setSaved(true);
  }

  return (
    <Card className="p-6 md:p-8">
      <form onSubmit={onSubmit} className="mx-auto max-w-3xl space-y-5" onChange={() => setSaved(false)}>
        <TextField compact required name="title" label="Class title" placeholder="Online Maths Class - Thursday" />
        <div className="grid gap-4 sm:grid-cols-3">
          <SelectField compact required name="subject" label="Subject" placeholder="Select subject" options={SUBJECTS.map((s) => ({ value: s, label: s }))} />
          <SelectField compact required name="grade" label="Grade" placeholder="Select grade" options={GRADES} />
          <SelectField compact required name="platform" label="Platform" placeholder="Select platform" options={PLATFORMS} />
        </div>
        <TextField compact required type="url" name="url" label="Class link" placeholder="https://meet.google.com/..." />
        <div className="grid gap-4 sm:grid-cols-2">
          <TextField compact required type="date" name="date" label="Date" />
          <TextField compact required type="time" name="time" label="Start time" />
        </div>
        <button type="submit" className="h-12 rounded-full bg-emerald-400 px-8 font-medium text-white transition hover:bg-emerald-500">
          Add class link
        </button>
        {saved && (
          <p role="status" className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
            Class link saved (demo). Connect your API in <code>ClassLinkForm.tsx</code>.
          </p>
        )}
      </form>
    </Card>
  );
}
