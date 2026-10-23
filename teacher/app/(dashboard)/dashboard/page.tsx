import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
import { QuickAccess } from "@/features/dashboard/components/QuickAccess";
import { RecentContent } from "@/features/dashboard/components/RecentContent";
import { getRecentContent } from "@/features/content/services/content.service";
import { getCurrentUser } from "@/features/profile/services/profile.service";

export const metadata: Metadata = { title: "Dashboard | EduHunt" };

export default async function DashboardPage() {
  const [user, recent] = await Promise.all([getCurrentUser(), getRecentContent()]);

  return (
    <PageContainer>
      <DashboardHeader user={user} />
      <QuickAccess />
      <RecentContent items={recent} />
    </PageContainer>
  );
}
