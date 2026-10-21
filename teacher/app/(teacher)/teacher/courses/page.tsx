import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TEACHER_PATHS } from "@/constants/teacher-routes";
import { ClassGrid } from "@/features/courses/components/ClassGrid";
import { CourseCard } from "@/features/teacher-courses/components/CourseCard";
import { getTeacherCourses } from "@/features/teacher-courses/services/teacher-courses.service";
import { requireTeacher } from "@/lib/auth/require-teacher";

export const metadata: Metadata = { title: "My Courses | EduHunt Teacher" };

export default async function TeacherCoursesPage() {
  await requireTeacher();
  const courses = await getTeacherCourses();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-slate-500">{courses.length} courses</p>
        <Button href={TEACHER_PATHS.courseNew} variant="admin" size="toolbar">+ Create course</Button>
      </div>
      {courses.length > 0 ? (
        <ClassGrid>
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </ClassGrid>
      ) : (
        <Card className="py-12 text-center text-slate-500">No courses yet. Create one to start selling.</Card>
      )}
    </div>
  );
}
