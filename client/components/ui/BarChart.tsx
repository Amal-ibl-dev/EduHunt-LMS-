import { cn } from "@/lib/cn";

type Datum = { label: string; value: number };

type BarChartProps = {
  data: Datum[];
  ariaLabel: string;
  /** Index of the bar to emphasise (defaults to the highest). */
  highlight?: number;
  className?: string;
};

/** Dependency-free bar chart with gridlines and a highlighted bar. */
export function BarChart({ data, ariaLabel, highlight, className }: BarChartProps) {
  const top = Math.max(...data.map((d) => d.value)) * 1.15 || 1;
  const hi = highlight ?? data.findIndex((d) => d.value === Math.max(...data.map((x) => x.value)));
  const ticks = [1, 0.75, 0.5, 0.25, 0];

  return (
    <div role="img" aria-label={ariaLabel} className={cn("flex gap-3", className)}>
      <div className="flex h-56 flex-col justify-between text-xs text-slate-400">
        {ticks.map((t) => (
          <span key={t}>{Math.round(top * t)}</span>
        ))}
      </div>
      <div className="min-w-0 flex-1">
        <div className="relative h-56">
          {ticks.map((t) => (
            <div key={t} className="absolute inset-x-0 border-t border-dashed border-slate-200" style={{ bottom: `${t * 100}%` }} />
          ))}
          <div className="absolute inset-0 flex items-end gap-2 sm:gap-4">
            {data.map((d, i) => (
              <div key={d.label} className="group relative flex h-full flex-1 items-end" title={`${d.label}: ${d.value}`}>
                <div
                  className={cn("w-full rounded-t-xl transition", i === hi ? "bg-brand" : "bg-brand-soft group-hover:bg-brand/60")}
                  style={{ height: `${(d.value / top) * 100}%` }}
                />
                <span
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg bg-navy px-2 py-1 text-xs text-white",
                    i === hi ? "" : "opacity-0 group-hover:opacity-100",
                  )}
                  style={{ bottom: `${(d.value / top) * 100}%` }}
                >
                  {d.value}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 flex gap-2 sm:gap-4">
          {data.map((d) => (
            <span key={d.label} className="flex-1 text-center text-xs text-slate-500">
              {d.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
