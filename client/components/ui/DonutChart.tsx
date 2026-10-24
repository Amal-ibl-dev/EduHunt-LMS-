import Link from "next/link";

type Segment = { label: string; value: number; color: string; href?: string };

export function DonutChart({ segments, centerLabel }: { segments: Segment[]; centerLabel: string }) {
  const total = segments.reduce((t, s) => t + s.value, 0) || 1;
  let acc = 0;
  const stops = segments
    .map((s) => {
      const from = (acc / total) * 100;
      acc += s.value;
      return `${s.color} ${from}% ${(acc / total) * 100}%`;
    })
    .join(", ");

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        role="img"
        aria-label={segments.map((s) => `${s.label}: ${s.value}`).join(", ")}
        className="relative h-44 w-44 rounded-full"
        style={{ background: `conic-gradient(${stops})` }}
      >
        <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-white">
          <span className="text-3xl font-bold text-navy">{total}</span>
          <span className="text-xs text-muted">{centerLabel}</span>
        </div>
      </div>
      <ul className="grid w-full grid-cols-2 gap-2 text-sm text-slate-600">
        {segments.map((s) => {
          const inner = (
            <>
              <span aria-hidden className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: s.color }} />
              <span className="truncate">{s.label}</span>
              <span className="ml-auto font-medium text-slate-800">{s.value}</span>
            </>
          );
          return (
            <li key={s.label}>
              {s.href ? (
                <Link href={s.href} className="flex min-w-0 items-center gap-2 rounded-xl px-2 py-1.5 hover:bg-slate-50">
                  {inner}
                </Link>
              ) : (
                <span className="flex min-w-0 items-center gap-2 px-2 py-1.5">{inner}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
