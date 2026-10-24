"use client";

import { useMemo, useState } from "react";
import { BarChart } from "@/components/ui/BarChart";
import { Card } from "@/components/ui/Card";
import type { DownloadSeries } from "../services/teacher-dashboard.service";

type Range = "6" | "12";
type Kind = "all" | "papers" | "notes";

const selectCls = "h-10 rounded-full bg-field px-4 text-sm text-slate-600 outline-none focus:ring-2 focus:ring-brand";
const sum = (a: number[]) => a.reduce((t, n) => t + n, 0);

/** Student downloads: choose the period and content type; the bars, total and trend update. */
export function DownloadsPanel({ series }: { series: DownloadSeries }) {
  const [range, setRange] = useState<Range>("6");
  const [kind, setKind] = useState<Kind>("all");

  const { data, total, change } = useMemo(() => {
    const n = Number(range);
    const values = series.labels.map((_, i) => (kind === "papers" ? series.papers[i] : kind === "notes" ? series.notes[i] : series.papers[i] + series.notes[i]));
    const current = values.slice(-n);
    const previous = values.slice(-n * 2, -n);
    const totalNow = sum(current);
    return {
      data: series.labels.slice(-n).map((label, i) => ({ label, value: current[i] })),
      total: totalNow,
      change: previous.length === n && sum(previous) > 0 ? Math.round(((totalNow - sum(previous)) / sum(previous)) * 100) : null,
    };
  }, [series, range, kind]);

  return (
    <Card className="min-w-0 space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-navy">Student downloads</h2>
          <p className="mt-1 flex flex-wrap items-baseline gap-x-3 text-sm text-muted">
            <span className="text-3xl font-bold text-navy">{total.toLocaleString("en-US")}</span>
            {change !== null && (
              <span className={change >= 0 ? "font-medium text-emerald-600" : "font-medium text-coral"}>
                {change >= 0 ? "▲" : "▼"} {Math.abs(change)}% vs previous {range} months
              </span>
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <select aria-label="Content type" value={kind} onChange={(e) => setKind(e.target.value as Kind)} className={selectCls}>
            <option value="all">All content</option>
            <option value="papers">Papers</option>
            <option value="notes">Notes & Tutes</option>
          </select>
          <select aria-label="Period" value={range} onChange={(e) => setRange(e.target.value as Range)} className={selectCls}>
            <option value="6">Last 6 months</option>
            <option value="12">Last 12 months</option>
          </select>
        </div>
      </div>
      <BarChart data={data} ariaLabel={`Monthly downloads: ${data.map((d) => `${d.label} ${d.value}`).join(", ")}`} />
    </Card>
  );
}
