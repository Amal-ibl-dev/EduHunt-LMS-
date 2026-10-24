import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { SpotTestForm } from "@/features/spot-time/components/SpotTestForm";
import { requireTeacher } from "@/lib/auth/require-teacher";

export const metadata: Metadata = { title: "Create Spot Test | EduHunt Teacher" };

export default async function NewSpotTestPage() {
  await requireTeacher();
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Spot Time", href: TEACHER_ROUTES.spotTime }, { label: "Create spot test" }]} />
      <SpotTestForm />
    </div>
  );
}
