import { getAllClasses, getClassesByTeacher, getLessonsByClass } from "@/features/courses/services/courses.service";
import { getTeacherCourses } from "@/features/teacher-courses/services/teacher-courses.service";
import { getTeachers } from "@/features/teachers/services/teachers.service";
import { requireTeacher } from "@/lib/auth/require-teacher";

// Use the same data as the pages so every exported URL points to an existing record.
export async function getTeacherParams() {
  return (await getTeachers()).map(({ id }) => ({ teacherId: id }));
}

export async function getClassParams() {
  return (await getAllClasses()).map(({ id }) => ({ classId: id }));
}

export async function getTeacherClassParams() {
  return (await getAllClasses()).map(({ id, teacherId }) => ({ teacherId, classId: id }));
}

export async function getLessonParams() {
  const classes = await getClassParams();
  const lessons = await Promise.all(classes.map(async ({ classId }) =>
    (await getLessonsByClass(classId)).map(({ id }) => ({ classId, lessonId: id })),
  ));
  return lessons.flat();
}

export async function getTeacherLessonParams() {
  const classes = await getTeacherClassParams();
  const lessons = await Promise.all(classes.map(async ({ teacherId, classId }) =>
    (await getLessonsByClass(classId)).map(({ id }) => ({ teacherId, classId, lessonId: id })),
  ));
  return lessons.flat();
}

export async function getOwnedClassParams() {
  const session = await requireTeacher();
  return (await getClassesByTeacher(session.id)).map(({ id }) => ({ classId: id }));
}

export async function getOwnedLessonParams() {
  const classes = await getOwnedClassParams();
  const lessons = await Promise.all(classes.map(async ({ classId }) =>
    (await getLessonsByClass(classId)).map(({ id }) => ({ classId, lessonId: id })),
  ));
  return lessons.flat();
}

export async function getCourseParams() {
  return (await getTeacherCourses()).map(({ id }) => ({ courseId: id }));
}
