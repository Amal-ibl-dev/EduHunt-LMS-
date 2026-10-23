import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TEACHER_PATHS, TEACHER_ROUTES } from "@/constants/teacher-routes";
import { LessonForm } from "@/features/teacher-classes/components/LessonForm";
import { loadOwnedLesson } from "@/features/teacher-classes/loaders";
import { getOwnedLessonParams } from "@/lib/static-params";

export const metadata: Metadata = { title: "Edit Lesson | EduHunt Teacher" };

export const dynamicParams = false;

export async function generateStaticParams() {
  return getOwnedLessonParams();
}

export default async function EditLessonPage({ params }: { params: Promise<{ classId: string; lessonId: string }> }) {
  const { classId, lessonId } = await params;
  const { cls, lesson } = await loadOwnedLesson(classId, lessonId);
  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Classes", href: TEACHER_ROUTES.classes },
          { label: `${cls.grade} – ${cls.subject}`, href: TEACHER_PATHS.class(classId) },
          { label: lesson.title, href: TEACHER_PATHS.lesson(classId, lessonId) },
          { label: "Edit" },
        ]}
      />
      <LessonForm classId={classId} lesson={lesson} />
    </div>
  );
}
