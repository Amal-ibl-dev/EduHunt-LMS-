import { redirect } from "next/navigation";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";

export default function TeacherIndexPage() {
  redirect(TEACHER_ROUTES.dashboard);
}
