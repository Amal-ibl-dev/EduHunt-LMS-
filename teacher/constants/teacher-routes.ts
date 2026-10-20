export const TEACHER_ROUTES = {
  signIn: "/teacher/sign-in",
  signUp: "/teacher/sign-up",
  verify: "/teacher/verify",
  dashboard: "/teacher/dashboard",
  upload: (type: string) => `/teacher/upload/${type}`,
} as const;
