"use client";

import { Checkbox } from "@/components/ui/Checkbox";
import { ChipGroup } from "@/components/ui/ChipGroup";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { TextField } from "@/components/ui/TextField";
import { Toggle } from "@/components/ui/Toggle";
import { CITIES, LANGUAGES, LEVELS, TEACHING_SUBJECTS } from "@/features/teacher-auth/options";
import type { TeacherProfileData } from "../services/teacher-profile.service";
import { AvatarPicker } from "./AvatarPicker";

type TabProps = { data: TeacherProfileData; update: (patch: Partial<TeacherProfileData>) => void };

const H = "mb-2 text-sm font-medium text-slate-600";

export function PersonalTab({ data, update, avatarUrl }: TabProps & { avatarUrl?: string }) {
  return (
    <div className="space-y-5">
      <AvatarPicker name={data.fullName} src={avatarUrl} />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField compact required label="Full name" value={data.fullName} onChange={(e) => update({ fullName: e.target.value })} autoComplete="name" />
        <TextField compact required type="email" label="Email address" value={data.email} onChange={(e) => update({ email: e.target.value })} autoComplete="email" />
        <TextField compact type="tel" label="WhatsApp number" value={data.whatsapp} onChange={(e) => update({ whatsapp: e.target.value })} autoComplete="tel" />
        <TextField compact label="City" value={data.city} onChange={(e) => update({ city: e.target.value })} />
      </div>
      <TextAreaField label="Short introduction" value={data.bio} onChange={(e) => update({ bio: e.target.value })} hint="Shown on your public profile." />
    </div>
  );
}

export function TeachingTab({ data, update }: TabProps) {
  return (
    <div className="space-y-6">
      <TextField compact label="Professional title" value={data.title} onChange={(e) => update({ title: e.target.value })} />
      <div>
        <p className={H}>Levels you teach</p>
        <ChipGroup label="Levels" options={LEVELS} value={data.levels} onChange={(levels) => update({ levels })} />
      </div>
      <div>
        <p className={H}>Subjects</p>
        <ChipGroup label="Subjects" options={TEACHING_SUBJECTS} value={data.subjects} onChange={(subjects) => update({ subjects })} />
      </div>
      <div>
        <p className={H}>Languages</p>
        <ChipGroup label="Languages" options={LANGUAGES} value={data.languages} onChange={(languages) => update({ languages })} />
      </div>
      <div>
        <p className={H}>Teaching cities</p>
        <ChipGroup label="Cities" options={CITIES} value={data.cities} onChange={(cities) => update({ cities })} />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Checkbox card checked={data.online} onChange={(online) => update({ online })} label="Online classes" description="Teach from anywhere" />
        <Checkbox card checked={data.physical} onChange={(physical) => update({ physical })} label="Physical classes" description="Meet students in person" />
      </div>
      <Checkbox checked={data.publicProfile} onChange={(publicProfile) => update({ publicProfile })} label="Make my teacher profile public" description="Let students discover your profile." />
    </div>
  );
}

const NOTIFS = [
  { key: "notifyClasses", label: "Class and meeting reminders" },
  { key: "notifyStudents", label: "New student enrollments and messages" },
  { key: "notifyPayments", label: "Payment and payout alerts" },
  { key: "productUpdates", label: "Product and teaching tips" },
] as const;

export function NotificationsTab({ data, update }: TabProps) {
  return (
    <div>
      <p className="text-sm text-slate-400">When email me:</p>
      <ul className="mt-5 space-y-5">
        {NOTIFS.map((n) => (
          <li key={n.key} className="flex items-center justify-between gap-4 text-slate-700">
            {n.label}
            <Toggle label={n.label} checked={data[n.key]} onChange={(v) => update({ [n.key]: v } as Partial<TeacherProfileData>)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
