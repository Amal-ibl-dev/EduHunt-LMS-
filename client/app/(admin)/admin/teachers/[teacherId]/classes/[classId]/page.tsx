import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ADMIN_PATHS, ADMIN_ROUTES } from "@/constants/admin-routes";
import { ClassHeader } from "@/features/courses/components/ClassHeader";
import { LessonList } from "@/features/courses/components/LessonList";
import { getClassById, getLessonsByClass } from "@/features/courses/services/courses.service";
import { getTeacher } from "@/features/teachers/services/teachers.service";
import { requireRole } from "@/lib/auth/require-role";
import { getTeacherClassParams } from "@/lib/static-params";

export const metadata: Metadata = { title: "Class lessons | EduHunt Admin" };

export const dynamicParams = false;

export async function generateStaticParams() {
  return getTeacherClassParams();
}

export default async function TeacherClassPage({ params }: { params: Promise<{ teacherId: string; classId: string }> }) {
  await requireRole(["admin"]);
  const { teacherId, classId } = await params;
  const [teacher, cls] = await Promise.all([getTeacher(teacherId), getClassById(classId)]);
  if (!teacher || !cls || cls.teacherId !== teacherId) notFound();
  const lessons = await getLessonsByClass(classId);

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Teachers", href: ADMIN_ROUTES.teachers },
          { label: teacher.name, href: ADMIN_PATHS.teacher(teacherId) },
          { label: `${cls.grade} – ${cls.subject}` },
        ]}
      />
      <ClassHeader cls={cls} />
      <LessonList lessons={lessons} basePath={ADMIN_PATHS.teacherClass(teacherId, classId)} />
    </div>
  );
}
