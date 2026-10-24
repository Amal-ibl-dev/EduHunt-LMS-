export const ADMIN_ROUTES = {
  root: "/admin",
  dashboard: "/admin/dashboard",
  students: "/admin/students",
  teachers: "/admin/teachers",
  courses: "/admin/courses",
  payments: "/admin/payments",
  content: "/admin/content",
  classLinks: "/admin/class-links",
  speedTests: "/admin/speed-tests",
  settings: "/admin/settings",
  notifications: "/admin/notifications",
} as const;

/** Builders for dynamic admin URLs, so no page hand-writes a path. */
export const ADMIN_PATHS = {
  teacher: (teacherId: string) => `/admin/teachers/${teacherId}`,
  teacherClass: (teacherId: string, classId: string) => `/admin/teachers/${teacherId}/classes/${classId}`,
  teacherLesson: (teacherId: string, classId: string, lessonId: string) =>
    `/admin/teachers/${teacherId}/classes/${classId}/lessons/${lessonId}`,
  course: (classId: string) => `/admin/courses/${classId}`,
  courseLesson: (classId: string, lessonId: string) => `/admin/courses/${classId}/lessons/${lessonId}`,
};
