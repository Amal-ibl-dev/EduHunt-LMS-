export const TEACHER_ROUTES = {
  signIn: "/teacher/sign-in",
  signUp: "/teacher/sign-up",
  verify: "/teacher/verify",
  dashboard: "/teacher/dashboard",
  classes: "/teacher/classes",
  courses: "/teacher/courses",
  meetings: "/teacher/meetings",
  profile: "/teacher/profile",
  upload: (type: string) => `/teacher/upload/${type}`,
} as const;

/** Builders for dynamic teacher URLs. */
export const TEACHER_PATHS = {
  classNew: "/teacher/classes/new",
  class: (classId: string) => `/teacher/classes/${classId}`,
  classEdit: (classId: string) => `/teacher/classes/${classId}/edit`,
  lessonNew: (classId: string) => `/teacher/classes/${classId}/lessons/new`,
  lesson: (classId: string, lessonId: string) => `/teacher/classes/${classId}/lessons/${lessonId}`,
  lessonEdit: (classId: string, lessonId: string) => `/teacher/classes/${classId}/lessons/${lessonId}/edit`,
  courseNew: "/teacher/courses/new",
  courseEdit: (courseId: string) => `/teacher/courses/${courseId}/edit`,
  meetingNew: "/teacher/meetings/new",
};
