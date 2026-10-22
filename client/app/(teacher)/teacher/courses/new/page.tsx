import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { CourseForm } from "@/features/teacher-courses/components/CourseForm";
import { requireTeacher } from "@/lib/auth/require-teacher";

export const metadata: Metadata = { title: "Create Course | EduHunt Teacher" };

export default async function NewCoursePage() {
  await requireTeacher();
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Courses", href: TEACHER_ROUTES.courses }, { label: "Create course" }]} />
      <CourseForm />
    </div>
  );
}
