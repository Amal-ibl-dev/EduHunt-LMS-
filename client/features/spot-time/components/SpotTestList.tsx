import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { TEACHER_PATHS } from "@/constants/teacher-routes";
import { cn } from "@/lib/cn";
import type { SpotTest } from "../types";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const TONE = {
  draft: "bg-slate-100 text-slate-500",
  scheduled: "bg-accent-soft text-accent",
  completed: "bg-emerald-50 text-emerald-600",
};

export function SpotTestList({ tests }: { tests: SpotTest[] }) {
  return (
    <ul className="space-y-4">
      {tests.map((t) => {
        const [, month, day] = t.date.split("-");
        return (
          <li key={t.id}>
            <Card className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                <span className="text-xl font-bold leading-none">{day}</span>
                <span className="text-xs">{MONTHS[Number(month) - 1]}</span>
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="break-words text-lg font-semibold text-slate-800">{t.title}</h3>
                  <span className={cn("rounded-full px-3 py-1 text-xs font-medium capitalize", TONE[t.status])}>{t.status}</span>
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  {t.subject} · {t.grade} · {t.time} · {t.durationMinutes} min · {t.questions.length} question{t.questions.length === 1 ? "" : "s"}
                </p>
              </div>
              <Link href={TEACHER_PATHS.spotEdit(t.id)} className="shrink-0 rounded-full border border-admin px-5 py-1.5 text-sm font-medium text-admin-dark hover:bg-admin-soft">
                {t.status === "completed" ? "View" : "Edit / add questions"}
              </Link>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
