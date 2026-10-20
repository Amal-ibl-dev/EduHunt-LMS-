"use client";

import { useMemo, useState } from "react";
import { SearchInput } from "@/components/ui/SearchInput";
import { ADMIN_PATHS } from "@/constants/admin-routes";
import { SUBJECTS } from "@/constants/subjects";
import type { ClassGroup } from "../types";
import { ClassCard } from "./ClassCard";
import { ClassGrid } from "./ClassGrid";

export function CourseBrowser({ classes }: { classes: ClassGroup[] }) {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return classes.filter(
      (c) =>
        (subject === "All" || c.subject === subject) &&
        `${c.grade} ${c.subject} ${c.teacherName}`.toLowerCase().includes(q),
    );
  }, [classes, query, subject]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex-1">
          <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by grade, subject or teacher" aria-label="Search courses" />
        </div>
        <select
          aria-label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="h-14 w-full rounded-2xl bg-white px-5 text-sm text-slate-600 shadow-sm outline-none focus:ring-2 focus:ring-admin md:w-auto"
        >
          {["All", ...SUBJECTS].map((s) => (
            <option key={s} value={s}>
              {s === "All" ? "Subject: All" : s}
            </option>
          ))}
        </select>
      </div>

      {results.length > 0 ? (
        <ClassGrid>
          {results.map((c) => (
            <ClassCard key={c.id} cls={c} href={ADMIN_PATHS.course(c.id)} showTeacher />
          ))}
        </ClassGrid>
      ) : (
        <p className="rounded-3xl bg-white/90 p-8 text-center text-slate-400">No courses match. Try a different search or subject.</p>
      )}
    </div>
  );
}
