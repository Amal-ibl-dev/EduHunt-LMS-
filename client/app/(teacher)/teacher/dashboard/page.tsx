import type { Metadata } from "next";
import Link from "next/link";
import { WelcomeBanner } from "@/components/ui/WelcomeBanner";
import { TEACHER_PATHS } from "@/constants/teacher-routes";
import { TeacherQuickAccess } from "@/features/teacher/components/TeacherQuickAccess";
import { DownloadsPanel } from "@/features/teacher-dashboard/components/DownloadsPanel";
import { KpiCards } from "@/features/teacher-dashboard/components/KpiCards";
import { ContentMixPanel, RecentUploadsPanel, TopContentPanel, UpcomingPanel } from "@/features/teacher-dashboard/components/DashboardPanels";
import { getTeacherDashboard } from "@/features/teacher-dashboard/services/teacher-dashboard.service";
import { requireTeacher } from "@/lib/auth/require-teacher";

export const metadata: Metadata = { title: "Teacher Dashboard | EduHunt" };

const BANNER_BTN = "inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-admin-dark transition hover:bg-admin-soft";

export default async function TeacherDashboardPage() {
  const teacher = await requireTeacher();
  const data = await getTeacherDashboard();

  return (
    <div className="space-y-6 xl:space-y-8">
      <WelcomeBanner
        title={`Hi ${teacher.name}!`}
        text={`You have ${data.upcoming.length} classes coming up and ${data.kpis[0].b.value} new students. Keep teaching!`}
        actions={
          <>
            <Link href={TEACHER_PATHS.classNew} className={BANNER_BTN}>+ Create class</Link>
            <Link href={TEACHER_PATHS.meetingNew} className={BANNER_BTN}>Schedule meeting</Link>
          </>
        }
      />

      <section aria-labelledby="qa" className="space-y-4">
        <h2 id="qa" className="text-xl font-semibold text-navy">Quick access</h2>
        <TeacherQuickAccess />
      </section>

      <KpiCards kpis={data.kpis} />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2">
          <DownloadsPanel series={data.downloads} />
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
