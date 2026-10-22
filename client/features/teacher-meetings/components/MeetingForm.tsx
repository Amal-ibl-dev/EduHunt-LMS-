"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { FormStatus } from "@/components/ui/FormStatus";
import { SelectField } from "@/components/ui/SelectField";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";

const PLATFORMS = ["Google Meet", "Zoom", "YouTube Live"].map((v) => ({ value: v, label: v }));
const DURATIONS = [30, 45, 60, 90, 120].map((v) => ({ value: String(v), label: `${v} minutes` }));

export function MeetingForm() {
  const [requireRegistration, setRequireRegistration] = useState(true);
  const [showOnProfile, setShowOnProfile] = useState(true);
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = { ...Object.fromEntries(new FormData(e.currentTarget)), requireRegistration, showOnProfile };
    // TODO: POST to your meetings API (and notify followers)
    console.log(data);
    setStatus("Meeting scheduled (demo). Connect your API in MeetingForm.tsx.");
  }

  return (
    <Card className="p-6 md:p-8">
      <form onSubmit={onSubmit} onChange={() => setStatus(null)} className="mx-auto max-w-3xl space-y-5">
        <TextField compact required name="title" label="Meeting title" placeholder="O/L Maths – open Q&A" />
        <TextAreaField name="description" label="Description" placeholder="What will you cover? Who is it for?" />
        <div className="grid gap-4 sm:grid-cols-3">
          <TextField compact required type="date" name="date" label="Date" />
          <TextField compact required type="time" name="time" label="Start time" />
          <SelectField compact required name="duration" label="Duration" placeholder="Select" options={DURATIONS} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectField compact required name="platform" label="Platform" placeholder="Select platform" options={PLATFORMS} />
          <TextField compact type="number" min={1} name="maxAttendees" label="Max attendees (optional)" placeholder="Unlimited" />
        </div>
        <TextField compact required type="url" name="url" label="Meeting link" placeholder="https://" />
        <div className="grid gap-3 sm:grid-cols-2">
          <Checkbox card checked={requireRegistration} onChange={setRequireRegistration} label="Require registration" description="Students sign up first, so you can send reminders." />
          <Checkbox card checked={showOnProfile} onChange={setShowOnProfile} label="Show on my public profile" description="Anyone visiting your profile can find it." />
        </div>
        <div className="flex flex-wrap gap-3">
          <Button type="submit" variant="admin" size="sm">Schedule meeting</Button>
          <Button href={TEACHER_ROUTES.meetings} variant="adminOutline" size="sm">Cancel</Button>
        </div>
        <FormStatus message={status} />
      </form>
    </Card>
  );
}
