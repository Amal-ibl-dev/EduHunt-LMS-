import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TEACHER_PATHS } from "@/constants/teacher-routes";
import { ClassCard } from "@/features/courses/components/ClassCard";
import { ClassGrid } from "@/features/courses/components/ClassGrid";
import { getClassesByTeacher } from "@/features/courses/services/courses.service";
import { requireTeacher } from "@/lib/auth/require-teacher";

export const metadata: Metadata = { title: "My Classes | EduHunt Teacher" };

export default async function TeacherClassesPage() {
  const session = await requireTeacher();
  const classes = await getClassesByTeacher(session.id);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-slate-500">{classes.length} {classes.length === 1 ? "class" : "classes"}</p>
        <Button href={TEACHER_PATHS.classNew} variant="admin" size="toolbar">+ Create class</Button>
      </div>
      {classes.length > 0 ? (
        <ClassGrid>
          {classes.map((c) => (
            <ClassCard key={c.id} cls={c} href={TEACHER_PATHS.class(c.id)} />
          ))}
        </ClassGrid>
      ) : (
        <Card className="py-12 text-center text-slate-500">No classes yet. Create your first one, for example Grade 10 – Mathematics.</Card>
      )}
    </div>
  );
}
