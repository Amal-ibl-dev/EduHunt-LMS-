import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { ClassForm } from "@/features/teacher-classes/components/ClassForm";
import { requireTeacher } from "@/lib/auth/require-teacher";

export const metadata: Metadata = { title: "Create Class | EduHunt Teacher" };

export default async function NewClassPage() {
  await requireTeacher();
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Classes", href: TEACHER_ROUTES.classes }, { label: "Create class" }]} />
      <ClassForm />
    </div>
  );
}
