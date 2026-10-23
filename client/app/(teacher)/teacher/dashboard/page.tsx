import type { Metadata } from "next";
import { TeacherQuickAccess } from "@/features/teacher/components/TeacherQuickAccess";
import { KpiCards } from "@/features/teacher-dashboard/components/KpiCards";
import {
  ContentMixPanel,
  DownloadsPanel,
  RecentUploadsPanel,
  TopContentPanel,
  UpcomingPanel,
} from "@/features/teacher-dashboard/components/DashboardPanels";
import { getTeacherDashboard } from "@/features/teacher-dashboard/services/teacher-dashboard.service";
import { requireTeacher } from "@/lib/auth/require-teacher";

export const metadata: Metadata = { title: "Teacher Dashboard | EduHunt" };

export default async function TeacherDashboardPage() {
  await requireTeacher();
  const data = await getTeacherDashboard();

  return (
    <div className="space-y-6 xl:space-y-8">
      <section aria-labelledby="qa" className="space-y-4">
        <h2 id="qa" className="text-xl font-semibold text-navy">Quick access</h2>
        <TeacherQuickAccess />
      </section>

      <KpiCards kpis={data.kpis} />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <DownloadsPanel data={data.downloads} />
        </div>
        <ContentMixPanel data={data.contentMix} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <TopContentPanel items={data.topContent} />
        <UpcomingPanel items={data.upcoming} />
      </div>

      <RecentUploadsPanel items={data.recentUploads} />
    </div>
  );
}
