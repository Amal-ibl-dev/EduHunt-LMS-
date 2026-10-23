import type { ReactNode } from "react";
import { TeacherShell } from "@/features/teacher/components/TeacherShell";
import { requireTeacher } from "@/lib/auth/require-teacher";

export default async function TeacherLayout({ children }: { children: ReactNode }) {
  const session = await requireTeacher();
  return <TeacherShell session={session}>{children}</TeacherShell>;
}
