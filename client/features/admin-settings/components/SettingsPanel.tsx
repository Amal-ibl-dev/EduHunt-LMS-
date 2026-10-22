"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Toggle } from "@/components/ui/Toggle";

const NOTIFICATIONS = [
  { key: "signups", label: "Email me when a new student signs up", on: true },
  { key: "overdue", label: "Daily digest of overdue payments", on: true },
  { key: "weekly", label: "Weekly revenue summary", on: true },
  { key: "updates", label: "Product updates and tips", on: false },
];

export function SettingsPanel() {
  const [toggles, setToggles] = useState(Object.fromEntries(NOTIFICATIONS.map((n) => [n.key, n.on])));

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <Card>
        <h2 className="text-xl font-semibold text-slate-800">Email notifications</h2>
        <p className="mt-1 text-sm text-slate-400">When email me:</p>
        <ul className="mt-6 space-y-5">
          {NOTIFICATIONS.map((n) => (
            <li key={n.key} className="flex items-center justify-between gap-4 text-slate-700">
              {n.label}
              <Toggle label={n.label} checked={toggles[n.key]} onChange={(v) => setToggles((t) => ({ ...t, [n.key]: v }))} />
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold text-slate-800">Academy</h2>
        <div className="mt-6 space-y-5">
          <label className="block text-sm text-slate-500">
            Academy name
            <input defaultValue="EduHunt" className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-base text-slate-800 outline-none focus:ring-2 focus:ring-admin" />
          </label>
          <label className="block text-sm text-slate-500">
            Default monthly fee (LKR)
            <input type="number" min={0} defaultValue={3000} className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 text-base text-slate-800 outline-none focus:ring-2 focus:ring-admin" />
          </label>
          {/* TODO: persist via a server action */}
          <Button variant="admin" size="sm">Save changes</Button>
        </div>
      </Card>
    </div>
  );
}
