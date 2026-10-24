import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { SpotTestForm } from "@/features/spot-time/components/SpotTestForm";
import { getSpotTest } from "@/features/spot-time/services/spot-time.service";
import { requireTeacher } from "@/lib/auth/require-teacher";

export const metadata: Metadata = { title: "Edit Spot Test | EduHunt Teacher" };

export default async function EditSpotTestPage({ params }: { params: Promise<{ testId: string }> }) {
  await requireTeacher();
  const { testId } = await params;
  const test = await getSpotTest(testId);
  if (!test) notFound();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Spot Time", href: TEACHER_ROUTES.spotTime }, { label: test.title }]} />
      <SpotTestForm test={test} />
    </div>
  );
}
