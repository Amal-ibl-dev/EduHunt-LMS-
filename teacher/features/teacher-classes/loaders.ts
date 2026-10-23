import { notFound } from "next/navigation";
import { getClassById, getLessonById } from "@/features/courses/services/courses.service";
import { requireTeacher } from "../../lib/auth/require-teacher";

/** Loads a class and makes sure it belongs to the signed-in teacher. */
export async function loadOwnedClass(classId: string) {
  const session = await requireTeacher();
  const cls = await getClassById(classId);
  if (!cls || cls.teacherId !== session.id) notFound();
  return { session, cls };
}

export async function loadOwnedLesson(classId: string, lessonId: string) {
  const { session, cls } = await loadOwnedClass(classId);
  const lesson = await getLessonById(lessonId);
  if (!lesson || lesson.classId !== classId) notFound();
  return { session, cls, lesson };
}
