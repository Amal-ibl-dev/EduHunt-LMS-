import { Card } from "@/components/ui/Card";
import { NotesIcon, PapersIcon, SpeedIcon, UsersIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import type { Kpi } from "../services/teacher-dashboard.service";

const STYLE = {
  students: { icon: UsersIcon, tone: "bg-admin-soft text-admin-dark" },
  papers: { icon: PapersIcon, tone: "bg-blue-100 text-blue-600" },
  notes: { icon: NotesIcon, tone: "bg-purple-100 text-purple-600" },
  tests: { icon: SpeedIcon, tone: "bg-amber-100 text-amber-500" },
};

export function KpiCards({ kpis }: { kpis: Kpi[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
      {kpis.map((k) => {
        const { icon: Icon, tone } = STYLE[k.key];
        return (
          <Card key={k.key} className="min-w-0 space-y-4 p-5">
            <div className="flex items-center gap-4">
              <span className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl", tone)}>
                <Icon className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm text-muted">{k.label}</p>
                <p className="text-3xl font-bold leading-tight text-navy">{k.value}</p>
              </div>
            </div>
            <dl className="flex justify-between border-t border-slate-100 pt-3 text-sm">
              {[k.a, k.b].map((f) => (
                <div key={f.label} className="flex gap-1.5">
                  <dt className="text-muted">{f.label}:</dt>
                  <dd className="font-semibold text-slate-700">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        );
      })}
    </div>
  );
}
