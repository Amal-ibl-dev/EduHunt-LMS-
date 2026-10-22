"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FormStatus } from "@/components/ui/FormStatus";
import { cn } from "@/lib/cn";
import type { TeacherProfile, TeacherProfileData } from "../services/teacher-profile.service";
import { NotificationsTab, PersonalTab, TeachingTab } from "./ProfileTabs";

const TABS = [
  { key: "personal", label: "Personal details" },
  { key: "teaching", label: "Teaching" },
  { key: "notifications", label: "Notifications" },
] as const;

export function ProfileSettings({ profile }: { profile: TeacherProfile }) {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("personal");
  const [saved, setSaved] = useState<TeacherProfileData>(profile.data);
  const [data, setData] = useState<TeacherProfileData>(profile.data);
  const [status, setStatus] = useState<string | null>(null);

  const update = (patch: Partial<TeacherProfileData>) => {
    setData((d) => ({ ...d, ...patch }));
    setStatus(null);
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: PATCH the profile (and upload the new avatar) via your API
    setSaved(data);
    setStatus("Profile saved (demo). Connect your API in ProfileSettings.tsx.");
  }

  return (
    <Card className="min-w-0 p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-slate-800">Profile setting</h2>

      <div role="tablist" aria-label="Profile sections" className="mt-5 flex gap-6 overflow-x-auto border-b border-slate-100">
        {TABS.map((t) => (
          <button
            key={t.key}
            id={`tab-${t.key}`}
            role="tab"
            aria-selected={tab === t.key}
            aria-controls="profile-panel"
            onClick={() => setTab(t.key)}
            className={cn("-mb-px whitespace-nowrap border-b-2 pb-3 text-sm transition", tab === t.key ? "border-admin font-medium text-slate-800" : "border-transparent text-slate-400 hover:text-slate-600")}
          >
            {t.label}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="mt-6 space-y-6">
        <div id="profile-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
          {tab === "personal" && <PersonalTab data={data} update={update} avatarUrl={profile.avatarUrl} />}
          {tab === "teaching" && <TeachingTab data={data} update={update} />}
          {tab === "notifications" && <NotificationsTab data={data} update={update} />}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button type="submit" variant="admin" size="sm">Save profile</Button>
          <Button type="button" variant="adminOutline" size="sm" onClick={() => { setData(saved); setStatus(null); }}>
            Cancel
          </Button>
        </div>
        <FormStatus message={status} />
      </form>
    </Card>
  );
}
