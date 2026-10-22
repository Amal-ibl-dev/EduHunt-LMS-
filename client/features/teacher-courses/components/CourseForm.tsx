"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { FormStatus } from "@/components/ui/FormStatus";
import { SelectField } from "@/components/ui/SelectField";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { SUBJECTS } from "@/constants/subjects";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { cn } from "@/lib/cn";
import { LEVELS } from "@/features/teacher-auth/options";
import { MEDIUMS, type TeacherCourse } from "../types";
import { ThumbnailPicker } from "./ThumbnailPicker";

const opts = (list: readonly string[]) => list.map((v) => ({ value: v, label: v }));

export function CourseForm({ course }: { course?: TeacherCourse }) {
  const [medium, setMedium] = useState<string>(course?.medium ?? "");
  const [free, setFree] = useState(course ? course.price === 0 : false);
  const [certificate, setCertificate] = useState(course?.certificate ?? true);
  const [visibility, setVisibility] = useState<"draft" | "published">(course?.status ?? "draft");
  const [desc, setDesc] = useState(course?.description ?? "");
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = { ...Object.fromEntries(new FormData(e.currentTarget)), free, certificate, visibility };
    // TODO: upload the thumbnail, then POST (create) or PATCH (edit) via your API
    console.log(data);
    setStatus(course ? "Course updated (demo)." : "Course saved (demo). Connect your API in CourseForm.tsx.");
  }

  return (
    <form onSubmit={onSubmit} onChange={() => setStatus(null)} className="grid gap-6 xl:grid-cols-[1fr_22rem]">
      <Card className="space-y-5 p-6 md:p-8">
        <TextField compact required name="title" label="Course title" placeholder="Grade 10 Mathematics – Complete Revision" defaultValue={course?.title ?? ""} />
        <div className="grid gap-4 sm:grid-cols-3">
          <SelectField compact required name="subject" label="Subject" placeholder="Select subject" options={opts(SUBJECTS)} defaultValue={course?.subject ?? ""} />
          <SelectField compact required name="medium" label="Medium" placeholder="Select medium" options={opts(MEDIUMS)} defaultValue={course?.medium ?? ""} onChange={(e) => setMedium(e.target.value)} />
          <SelectField compact required name="level" label="Level" placeholder="Select level" options={opts(LEVELS)} defaultValue={course?.level ?? ""} />
        </div>
        {medium === "Other" && <TextField compact required name="mediumOther" label="Other medium" placeholder="e.g. Hindi" defaultValue={course?.mediumOther ?? ""} />}

        <TextAreaField
          name="description"
          label="Description"
          placeholder="Tell students what this course covers and who it is for."
          rows={5}
          maxLength={800}
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          hint={`${desc.length}/800 characters`}
        />
        <TextAreaField name="outcomes" label="What students will learn" placeholder={"One point per line\nSolve algebra problems\nFinish past papers in time"} hint="One outcome per line. Shown as a checklist on the course page." defaultValue={course?.outcomes.join("\n") ?? ""} />

        <div className="grid gap-4 sm:grid-cols-3">
          <TextField compact type="number" min={0} name="price" label="Price (LKR)" placeholder="5000" disabled={free} defaultValue={course && course.price > 0 ? course.price : ""} />
          <TextField compact type="number" min={0} name="discountPrice" label="Discount price (optional)" disabled={free} defaultValue={course?.discountPrice ?? ""} />
          <TextField compact required type="number" min={1} name="durationWeeks" label="Duration (weeks)" defaultValue={course?.durationWeeks ?? ""} />
        </div>
        <Checkbox checked={free} onChange={setFree} label="This is a free course" description="Free courses are great for attracting new students." />

        <div className="grid gap-4 sm:grid-cols-2">
          <TextField compact type="number" min={1} name="enrollmentLimit" label="Enrollment limit (optional)" placeholder="Unlimited" defaultValue={course?.enrollmentLimit ?? ""} />
          <TextField compact type="url" name="videoUrl" label="Intro video link (optional)" placeholder="https://youtube.com/..." defaultValue={course?.videoUrl ?? ""} />
        </div>
      </Card>

      <div className="space-y-6">
        <Card className="space-y-5 p-6">
          <ThumbnailPicker initialUrl={course?.thumbnailUrl} />
          <fieldset>
            <legend className="mb-2 text-sm font-medium text-slate-600">Visibility</legend>
            <div className="grid grid-cols-2 gap-3">
              {(["draft", "published"] as const).map((v) => (
                <label key={v} className={cn("flex cursor-pointer items-center gap-2 rounded-2xl border p-3 text-sm capitalize transition", visibility === v ? "border-admin bg-admin-soft text-admin-dark" : "border-slate-200 text-slate-600 hover:border-admin")}>
                  <input type="radio" name="visibility" value={v} checked={visibility === v} onChange={() => setVisibility(v)} className="accent-admin" />
                  {v}
                </label>
              ))}
            </div>
          </fieldset>
          <Checkbox checked={certificate} onChange={setCertificate} label="Certificate of completion" description="Students receive a certificate when they finish." />
        </Card>

        <div className="flex flex-wrap gap-3">
          <Button type="submit" variant="admin" size="sm">{course ? "Save changes" : "Save course"}</Button>
          <Button href={TEACHER_ROUTES.courses} variant="adminOutline" size="sm">Cancel</Button>
        </div>
        <FormStatus message={status} />
      </div>
    </form>
  );
}
