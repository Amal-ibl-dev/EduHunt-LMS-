import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { TeacherIcon, UsersIcon, WalletIcon } from "@/components/ui/icons";
import { NameCell } from "@/components/ui/NameCell";
import { StatCard } from "@/components/ui/StatCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ADMIN_ROUTES } from "@/constants/admin-routes";
import { formatCurrency, formatDate, formatMonth } from "@/lib/format";
import type { getDashboardData } from "../services/dashboard.service";

type Data = Awaited<ReturnType<typeof getDashboardData>>;

export function DashboardOverview({ data, firstName }: { data: Data; firstName: string }) {
  const { summary } = data;

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-3xl bg-admin p-6 text-white md:p-8">
        <div aria-hidden className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10" />
        <div aria-hidden className="absolute -bottom-20 right-32 h-48 w-48 rounded-full bg-white/10" />
        <h2 className="relative text-3xl font-bold md:text-4xl">Hi {firstName}!</h2>
        <p className="relative mt-3 max-w-xl text-lg text-white/90 md:text-xl">
          {data.overduePayments} payments are overdue and {data.newStudents.length} students joined recently. Keep things moving today.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        <StatCard label="Active students" value={data.activeStudents} icon={<UsersIcon />} tone="admin" />
        <StatCard label="Active teachers" value={data.activeTeachers} icon={<TeacherIcon />} tone="accent" />
        <StatCard label={`Collected, ${formatMonth(summary.month)}`} value={formatCurrency(summary.collected)} icon={<WalletIcon />} tone="amber" />
        <StatCard label="Overdue" value={formatCurrency(summary.overdue)} icon={<WalletIcon />} tone="coral" />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-800">Recent payments</h2>
            <Link href={ADMIN_ROUTES.payments} className="text-sm text-accent hover:underline">See all</Link>
          </div>
          <ul className="mt-5 space-y-4">
            {data.recentPayments.map((p) => (
              <li key={p.id} className="flex items-center justify-between gap-3">
                <NameCell name={p.studentName} sub={formatMonth(p.month)} />
                <div className="flex shrink-0 items-center gap-3">
                  <StatusBadge status={p.status} />
                  <span className="min-w-20 text-right text-sm font-medium text-slate-800 sm:text-base">{formatCurrency(p.amount)}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-800">New students</h2>
            <Link href={ADMIN_ROUTES.students} className="text-sm text-accent hover:underline">See all</Link>
          </div>
          <ul className="mt-5 space-y-4">
            {data.newStudents.map((s) => (
              <li key={s.id} className="flex items-center justify-between gap-3">
                <NameCell name={s.name} sub={`${s.grade} · ${s.school}`} />
                <span className="text-sm text-slate-400">{formatDate(s.joinedAt)}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
