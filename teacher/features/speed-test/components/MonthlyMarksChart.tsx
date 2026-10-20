const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const TICKS = [0, 2, 4, 6, 8, 10];

type MonthlyMarksChartProps = {
  title: string;
  data: number[];
  barClass: string;
  borderClass: string;
};

/** Dependency-free bar chart (max mark = 10). Swap for recharts if you need tooltips/animation. */
export function MonthlyMarksChart({ title, data, barClass, borderClass }: MonthlyMarksChartProps) {
  return (
    <section className={`rounded-3xl border bg-white p-6 md:p-10 ${borderClass}`}>
      <h2 className="text-2xl font-semibold text-slate-500 md:pl-16 md:text-3xl">{title}</h2>

      <div className="mt-10 flex gap-3">
        <span className="hidden rotate-180 text-xl text-slate-400 [writing-mode:vertical-rl] sm:block">Marks</span>
        <div className="flex-1 pl-7">
          <div role="img" aria-label={`${title}: ${data.join(", ")}`} className="relative h-64 border-b border-l border-slate-300">
            {TICKS.map((t) => (
              <span
                key={t}
                className="absolute -left-7 w-5 translate-y-1/2 text-right text-xs text-slate-500"
                style={{ bottom: `${t * 10}%` }}
              >
                {t}
              </span>
            ))}
            <div className="absolute inset-0 flex items-end gap-1.5 px-1.5 md:gap-3 md:px-3">
              {data.map((value, i) => (
                <div
                  key={MONTHS[i]}
                  title={`${MONTHS[i]}: ${value}/10`}
                  className={`flex-1 rounded-t-lg ${barClass}`}
                  style={{ height: `${value * 10}%` }}
                />
              ))}
            </div>
          </div>
          <div className="mt-2 flex gap-1.5 px-1.5 md:gap-3 md:px-3">
            {MONTHS.map((m) => (
              <span key={m} className="flex-1 text-center text-xs text-slate-500">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-xl text-slate-400">Months</p>
    </section>
  );
}
