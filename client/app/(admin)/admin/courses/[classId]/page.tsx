import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ADMIN_PATHS, ADMIN_ROUTES } from "@/constants/admin-routes";
import { ClassHeader } from "@/features/courses/components/ClassHeader";
import { LessonList } from "@/features/courses/components/LessonList";
import { getClassById, getLessonsByClass } from "@/features/courses/services/courses.service";
import { requireRole } from "@/lib/auth/require-role";

export const metadata: Metadata = { title: "Course lessons | EduHunt Admin" };

export default async function CourseLessonsPage({ params }: { params: Promise<{ classId: string }> }) {
  await requireRole(["admin", "teacher"]);
  const { classId } = await params;
  const cls = await getClassById(classId);
  if (!cls) notFound();
  const lessons = await getLessonsByClass(classId);

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Courses", href: ADMIN_ROUTES.courses }, { label: `${cls.grade} – ${cls.subject}` }]} />
      <ClassHeader cls={cls} />
      <LessonList lessons={lessons} basePath={ADMIN_PATHS.course(classId)} />
    </div>
  );
}
