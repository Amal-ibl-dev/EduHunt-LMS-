import { BarChart } from "@/components/ui/BarChart";
import { Card } from "@/components/ui/Card";
import { DonutChart } from "@/components/ui/DonutChart";
import { SUBJECT_STYLES } from "@/constants/subjects";
import { ContentCard } from "@/features/content/components/ContentCard";
import type { TeacherDashboardData } from "../services/teacher-dashboard.service";

const H2 = "text-lg font-semibold text-navy";

export function DownloadsPanel({ data }: { data: TeacherDashboardData["downloads"] }) {
  const total = data.reduce((t, d) => t + d.value, 0);
  return (
    <Card className="min-w-0 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className={H2}>Student downloads</h2>
          <p className="text-sm text-muted">Last 6 months</p>
        </div>
        <p className="text-3xl font-bold text-navy">{total.toLocaleString("en-US")}</p>
      </div>
      <BarChart data={data} ariaLabel={`Monthly downloads: ${data.map((d) => `${d.label} ${d.value}`).join(", ")}`} />
    </Card>
  );
}

export function ContentMixPanel({ data }: { data: TeacherDashboardData["contentMix"] }) {
  return (
    <Card className="min-w-0 space-y-6">
      <h2 className={H2}>Content overview</h2>
      <DonutChart segments={data} centerLabel="items" />
    </Card>
  );
}

export function TopContentPanel({ items }: { items: TeacherDashboardData["topContent"] }) {
  const max = Math.max(...items.map((i) => i.downloads));
  return (
    <Card className="min-w-0 space-y-5">
      <h2 className={H2}>Top content</h2>
      <ol className="space-y-4">
        {items.map((i, idx) => (
          <li key={i.id} className="flex items-center gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft/60 text-sm font-semibold text-brand-dark">
              {idx + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <span className="truncate font-medium text-slate-700">{i.title}</span>
                <span className="shrink-0 text-sm text-slate-500">{i.downloads}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-brand" style={{ width: `${(i.downloads / max) * 100}%` }} />
              </div>
              <span className={`text-xs ${SUBJECT_STYLES[i.subject].text}`}>{i.subject}</span>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  );
}

export function UpcomingPanel({ items }: { items: TeacherDashboardData["upcoming"] }) {
  return (
    <Card className="min-w-0 space-y-5">
      <h2 className={H2}>Upcoming classes</h2>
      <ul className="space-y-3">
        {items.map((c) => (
          <li key={c.id} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-3">
            <span className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-white text-navy shadow-sm">
              <span className="text-lg font-bold leading-none">{c.day}</span>
              <span className="text-xs text-muted">{c.month}</span>
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-slate-700">{c.title}</p>
              <p className="text-sm text-muted">
                {c.time} · {c.platform}
              </p>
            </div>
            {/* TODO: link to the real meeting URL */}
            <a href="#" className="shrink-0 rounded-full border border-brand px-4 py-1.5 text-sm text-brand hover:bg-brand-soft/40">
              Join
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function RecentUploadsPanel({ items }: { items: TeacherDashboardData["recentUploads"] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold uppercase text-navy">Recent uploads</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
