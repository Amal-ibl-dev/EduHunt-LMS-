import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TEACHER_PATHS, TEACHER_ROUTES } from "@/constants/teacher-routes";
import { ClassHeader } from "@/features/courses/components/ClassHeader";
import { LessonList } from "@/features/courses/components/LessonList";
import { getLessonsByClass } from "@/features/courses/services/courses.service";
import { loadOwnedClass } from "@/features/teacher-classes/loaders";
import { getOwnedClassParams } from "@/lib/static-params";

export const metadata: Metadata = { title: "Class lessons | EduHunt Teacher" };

export const dynamicParams = false;

export async function generateStaticParams() {
  return getOwnedClassParams();
}

export default async function TeacherClassPage({ params }: { params: Promise<{ classId: string }> }) {
  const { classId } = await params;
  const { cls } = await loadOwnedClass(classId);
  const lessons = await getLessonsByClass(classId);

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Classes", href: TEACHER_ROUTES.classes }, { label: `${cls.grade} – ${cls.subject}` }]} />
      <ClassHeader cls={cls} addLessonHref={TEACHER_PATHS.lessonNew(classId)} editHref={TEACHER_PATHS.classEdit(classId)} />
      <LessonList lessons={lessons} basePath={TEACHER_PATHS.class(classId)} />
    </div>
  );
}
