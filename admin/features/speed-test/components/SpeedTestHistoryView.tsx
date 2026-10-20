"use client";

import { useMemo, useState } from "react";
import { FilterChips } from "@/components/ui/FilterChips";
import { SearchInput } from "@/components/ui/SearchInput";
import { BUCKETS, SUBJECTS, SUBJECT_STYLES, type Subject } from "@/constants/subjects";
import type { MonthlyMarks } from "../types";
import { MonthlyMarksChart } from "./MonthlyMarksChart";

const FILTERS = ["All", ...SUBJECTS, ...BUCKETS];
const isSubject = (v: string): v is Subject => (SUBJECTS as readonly string[]).includes(v);

export function SpeedTestHistoryView({ marks }: { marks: MonthlyMarks }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("Mathematics");

  const visibleFilters = useMemo(
    () => FILTERS.filter((f) => f === "All" || f.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  );

  const chart = useMemo(() => {
    if (isSubject(filter)) {
      return { title: `Monthly ${filter} Marks`, data: marks[filter], ...SUBJECT_STYLES[filter] };
    }
    if (filter === "All") {
      const all = Object.values(marks);
      const data = all[0].map((_, m) => Math.round((all.reduce((sum, s) => sum + s[m], 0) / all.length) * 10) / 10);
      return { title: "Monthly Average Marks", data, bar: "bg-subject-all/40", border: "border-subject-all/40" };
    }
    return null;
  }, [filter, marks]);

  return (
    <div className="mt-6 space-y-6">
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search subjects"
        aria-label="Search subjects"
      />
      <FilterChips options={visibleFilters} value={filter} onChange={setFilter} />

      {chart ? (
        <MonthlyMarksChart title={chart.title} data={chart.data} barClass={chart.bar} borderClass={chart.border} />
      ) : (
        <p className="rounded-3xl bg-white p-8 text-center text-muted">
          No speed tests recorded for {filter} yet.
        </p>
      )}
    </div>
  );
}
