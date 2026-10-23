type Segment = { label: string; value: number; color: string };

export function DonutChart({ segments, centerLabel }: { segments: Segment[]; centerLabel: string }) {
  const total = segments.reduce((t, s) => t + s.value, 0) || 1;
  const { stops } = segments.reduce<{ end: number; stops: string[] }>(
    ({ end, stops }, segment) => {
      const next = end + segment.value;
      return {
        end: next,
        stops: [...stops, `${segment.color} ${(end / total) * 100}% ${(next / total) * 100}%`],
      };
    },
    { end: 0, stops: [] },
  );

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        role="img"
        aria-label={segments.map((s) => `${s.label}: ${s.value}`).join(", ")}
        className="relative h-44 w-44 rounded-full"
        style={{ background: `conic-gradient(${stops.join(", ")})` }}
      >
        <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-white">
          <span className="text-3xl font-bold text-navy">{total}</span>
          <span className="text-xs text-muted">{centerLabel}</span>
        </div>
      </div>
      <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-600">
        {segments.map((s) => (
          <li key={s.label} className="flex min-w-0 items-center gap-2">
            <span aria-hidden className="h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: s.color }} />
            <span className="truncate">{s.label}</span>
            <span className="ml-auto font-medium text-slate-800">{s.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
