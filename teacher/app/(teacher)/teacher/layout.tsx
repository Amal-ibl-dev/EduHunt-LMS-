import type { ReactNode } from "react";
import { requireTeacher } from "@/lib/auth/require-teacher";

export default async function TeacherLayout({ children }: { children: ReactNode }) {
  await requireTeacher();
  return <div className="min-h-screen bg-page">{children}</div>;
}
