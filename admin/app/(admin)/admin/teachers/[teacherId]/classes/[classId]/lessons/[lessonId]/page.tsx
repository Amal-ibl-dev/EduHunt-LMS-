import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ADMIN_PATHS, ADMIN_ROUTES } from "@/constants/admin-routes";
import { LessonMaterials } from "@/features/courses/components/LessonMaterials";
import { getClassById, getLessonById, getMaterialsByLesson } from "@/features/courses/services/courses.service";
import { getTeacher } from "@/features/teachers/services/teachers.service";
import { requireRole } from "@/lib/auth/require-role";

export const metadata: Metadata = { title: "Lesson resources | EduHunt Admin" };

type Props = { params: Promise<{ teacherId: string; classId: string; lessonId: string }> };

export default async function TeacherLessonPage({ params }: Props) {
  await requireRole(["admin"]);
  const { teacherId, classId, lessonId } = await params;
  const [teacher, cls, lesson] = await Promise.all([getTeacher(teacherId), getClassById(classId), getLessonById(lessonId)]);
  if (!teacher || !cls || !lesson || cls.teacherId !== teacherId || lesson.classId !== classId) notFound();
  const materials = await getMaterialsByLesson(lessonId);

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Teachers", href: ADMIN_ROUTES.teachers },
          { label: teacher.name, href: ADMIN_PATHS.teacher(teacherId) },
          { label: `${cls.grade} – ${cls.subject}`, href: ADMIN_PATHS.teacherClass(teacherId, classId) },
          { label: lesson.title },
        ]}
      />
      <LessonMaterials cls={cls} lesson={lesson} materials={materials} />
    </div>
  );
}
