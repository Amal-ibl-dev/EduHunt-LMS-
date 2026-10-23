import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ADMIN_PATHS, ADMIN_ROUTES } from "@/constants/admin-routes";
import { LessonMaterials } from "@/features/courses/components/LessonMaterials";
import { getClassById, getLessonById, getMaterialsByLesson } from "@/features/courses/services/courses.service";
import { requireRole } from "@/lib/auth/require-role";

export const metadata: Metadata = { title: "Lesson resources | EduHunt Admin" };

export default async function CourseLessonPage({ params }: { params: Promise<{ classId: string; lessonId: string }> }) {
  await requireRole(["admin", "teacher"]);
  const { classId, lessonId } = await params;
  const [cls, lesson] = await Promise.all([getClassById(classId), getLessonById(lessonId)]);
  if (!cls || !lesson || lesson.classId !== classId) notFound();
  const materials = await getMaterialsByLesson(lessonId);

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Courses", href: ADMIN_ROUTES.courses },
          { label: `${cls.grade} – ${cls.subject}`, href: ADMIN_PATHS.course(classId) },
          { label: lesson.title },
        ]}
      />
      <LessonMaterials cls={cls} lesson={lesson} materials={materials} />
    </div>
  );
}
