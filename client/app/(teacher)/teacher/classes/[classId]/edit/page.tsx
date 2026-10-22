import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TEACHER_PATHS, TEACHER_ROUTES } from "@/constants/teacher-routes";
import { ClassForm } from "@/features/teacher-classes/components/ClassForm";
import { loadOwnedClass } from "@/features/teacher-classes/loaders";

export const metadata: Metadata = { title: "Edit Class | EduHunt Teacher" };

export default async function EditClassPage({ params }: { params: Promise<{ classId: string }> }) {
  const { classId } = await params;
  const { cls } = await loadOwnedClass(classId);
  return (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Classes", href: TEACHER_ROUTES.classes },
          { label: `${cls.grade} – ${cls.subject}`, href: TEACHER_PATHS.class(classId) },
          { label: "Edit" },
        ]}
      />
      <ClassForm cls={cls} />
    </div>
  );
}
