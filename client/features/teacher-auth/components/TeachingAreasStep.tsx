"use client";

import { ChipGroup } from "@/components/ui/ChipGroup";
import { TextField } from "@/components/ui/TextField";
import { LANGUAGES, LEVELS, TEACHING_SUBJECTS } from "../options";
import type { StepProps } from "../types";

const H = "mb-2 text-sm font-medium text-slate-600";

export function TeachingAreasStep({ data, update }: StepProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-brand-soft/30 p-4">
        <p className="font-medium text-navy">Build your teaching profile</p>
        <p className="text-sm text-slate-600">These optional details can be updated later in profile settings.</p>
      </div>

      <TextField compact label="Professional title" placeholder="For example: Advanced Level Chemistry Teacher" value={data.title} onChange={(e) => update({ title: e.target.value })} />

      <div>
        <p className={H}>Who do you teach? <span className="font-normal text-muted">Select all that apply.</span></p>
        <ChipGroup label="Levels" options={LEVELS} value={data.levels} onChange={(levels) => update({ levels })} />
      </div>

      <div>
        <p className={H}>Teaching subjects</p>
        <ChipGroup label="Subjects" options={TEACHING_SUBJECTS} value={data.subjects} onChange={(subjects) => update({ subjects })} />
      </div>

      <TextField compact label="Other subjects" placeholder="Separate subjects with commas" value={data.otherSubjects} onChange={(e) => update({ otherSubjects: e.target.value })} />

      <div>
        <p className={H}>Teaching languages</p>
        <ChipGroup label="Languages" options={LANGUAGES} value={data.languages} onChange={(languages) => update({ languages })} />
      </div>
    </div>
  );
}
