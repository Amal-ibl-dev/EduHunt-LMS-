import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ROUTES } from "@/constants/routes";
import { SpeedTestHistoryView } from "@/features/speed-test/components/SpeedTestHistoryView";
import { getMonthlyMarks } from "@/features/speed-test/services/speed-test.service";

export const metadata: Metadata = { title: "Speed Test History | EduHunt" };

export default async function SpeedTestHistoryPage() {
  const marks = await getMonthlyMarks();
  return (
    <PageContainer>
      <PageHeader title="Speed Test History" backHref={ROUTES.profile} />
      <SpeedTestHistoryView marks={marks} />
    </PageContainer>
  );
}
