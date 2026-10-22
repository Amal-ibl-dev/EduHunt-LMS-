"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import type { Meeting } from "../types";
import { CopyLinkButton } from "./CopyLinkButton";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function MeetingCard({ m }: { m: Meeting }) {
  const [, month, day] = m.date.split("-");
  return (
    <Card className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-admin-soft text-admin-dark">
        <span className="text-xl font-bold leading-none">{day}</span>
        <span className="text-xs">{MONTHS[Number(month) - 1]}</span>
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="break-words text-lg font-semibold text-slate-800">{m.title}</h3>
        <p className="text-sm text-slate-500">{m.description}</p>
        <p className="mt-1 text-sm text-slate-400">
          {m.time} · {m.durationMinutes} min · {m.platform} · {m.registered} registered
        </p>
      </div>
      <div className="flex shrink-0 flex-wrap gap-2">
        <CopyLinkButton url={m.url} />
        {m.status === "upcoming" && (
          <a href={m.url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-admin px-4 py-1.5 text-sm font-medium text-white hover:bg-admin-dark">
            Start / Join
          </a>
        )}
      </div>
    </Card>
  );
}

export function MeetingsBoard({ meetings }: { meetings: Meeting[] }) {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const list = meetings.filter((m) => m.status === tab);

  return (
    <div className="space-y-5">
      <div role="tablist" aria-label="Meetings" className="inline-flex rounded-full bg-white p-1 shadow-sm">
        {(["upcoming", "past"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={cn("rounded-full px-5 py-2 text-sm font-medium capitalize transition", tab === t ? "bg-admin text-white" : "text-slate-500 hover:text-admin-dark")}
          >
            {t} ({meetings.filter((m) => m.status === t).length})
          </button>
        ))}
      </div>
      <div role="tabpanel" className="space-y-4">
        {list.length > 0 ? list.map((m) => <MeetingCard key={m.id} m={m} />) : <Card className="py-10 text-center text-slate-500">No {tab} meetings.</Card>}
      </div>
    </div>
  );
}
