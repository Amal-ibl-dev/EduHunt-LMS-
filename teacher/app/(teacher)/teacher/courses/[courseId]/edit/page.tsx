import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { CourseForm } from "@/features/teacher-courses/components/CourseForm";
import { getTeacherCourse } from "@/features/teacher-courses/services/teacher-courses.service";
import { requireTeacher } from "../../../../../../lib/auth/require-teacher";

export const metadata: Metadata = { title: "Edit Course | EduHunt Teacher" };

export default async function EditCoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  await requireTeacher();
  const { courseId } = await params;
  const course = await getTeacherCourse(courseId);
  if (!course) notFound();

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Courses", href: TEACHER_ROUTES.courses }, { label: course.title }]} />
      <CourseForm course={course} />
    </div>
  );
}
