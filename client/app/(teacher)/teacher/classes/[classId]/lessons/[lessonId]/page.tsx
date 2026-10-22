import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { TEACHER_PATHS, TEACHER_ROUTES } from "@/constants/teacher-routes";
import { LessonMaterials } from "@/features/courses/components/LessonMaterials";
import { getMaterialsByLesson } from "@/features/courses/services/courses.service";
import { AddResourceDialog } from "@/features/teacher-classes/components/AddResourceDialog";
import { loadOwnedLesson } from "@/features/teacher-classes/loaders";

export const metadata: Metadata = { title: "Lesson | EduHunt Teacher" };

export default async function TeacherLessonPage({ params }: { params: Promise<{ classId: string; lessonId: string }> }) {
  const { classId, lessonId } = await params;
  const { cls, lesson } = await loadOwnedLesson(classId, lessonId);
  const materials = await getMaterialsByLesson(lessonId);

  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Classes", href: TEACHER_ROUTES.classes },
          { label: `${cls.grade} – ${cls.subject}`, href: TEACHER_PATHS.class(classId) },
          { label: lesson.title },
        ]}
      />
      <LessonMaterials
        cls={cls}
        lesson={lesson}
        materials={materials}
        actions={
          <div className="flex flex-wrap gap-3">
            <Button href={TEACHER_PATHS.lessonEdit(classId, lessonId)} variant="adminOutline" size="sm">Edit lesson</Button>
            <AddResourceDialog lessonId={lessonId} />
          </div>
        }
      />
    </div>
  );
}
