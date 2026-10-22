import { redirect } from "next/navigation";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { getTeacherSession } from "@/features/teacher/services/teacher-session.service";

/** Call at the top of every protected teacher page. */
export async function requireTeacher() {
  const session = await getTeacherSession();
  if (!session) redirect(TEACHER_ROUTES.signIn);
  return session;
}
