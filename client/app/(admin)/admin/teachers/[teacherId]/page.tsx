import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ADMIN_PATHS, ADMIN_ROUTES } from "@/constants/admin-routes";
import { ClassCard } from "@/features/courses/components/ClassCard";
import { ClassGrid } from "@/features/courses/components/ClassGrid";
import { getClassesByTeacher } from "@/features/courses/services/courses.service";
import { TeacherProfileCard } from "@/features/teachers/components/TeacherProfileCard";
import { getTeacher } from "@/features/teachers/services/teachers.service";
import { requireRole } from "@/lib/auth/require-role";

export const metadata: Metadata = { title: "Teacher profile | EduHunt Admin" };

export default async function TeacherProfilePage({ params }: { params: Promise<{ teacherId: string }> }) {
  await requireRole(["admin"]);
  const { teacherId } = await params;
  const teacher = await getTeacher(teacherId);
  if (!teacher) notFound();
  const classes = await getClassesByTeacher(teacherId);

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Teachers", href: ADMIN_ROUTES.teachers }, { label: teacher.name }]} />
      <TeacherProfileCard teacher={teacher} classCount={classes.length} />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-800">Classes</h2>
        {classes.length > 0 ? (
          <ClassGrid>
            {classes.map((c) => (
              <ClassCard key={c.id} cls={c} href={ADMIN_PATHS.teacherClass(teacherId, c.id)} />
            ))}
          </ClassGrid>
        ) : (
          <p className="rounded-3xl bg-white/90 p-8 text-center text-slate-400">No classes assigned to this teacher yet.</p>
        )}
      </section>
    </div>
  );
}
