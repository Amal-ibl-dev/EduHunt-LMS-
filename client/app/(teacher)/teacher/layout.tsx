import type { ReactNode } from "react";
import { getTeacherNotifications } from "@/features/notifications/services/notifications.service";
import { TeacherShell } from "@/features/teacher/components/TeacherShell";
import { getTeacherSearchIndex } from "@/features/teacher/services/teacher-search.service";
import { requireTeacher } from "@/lib/auth/require-teacher";

export default async function TeacherLayout({ children }: { children: ReactNode }) {
  const session = await requireTeacher();
  const [searchEntries, notifications] = await Promise.all([getTeacherSearchIndex(session.id), getTeacherNotifications()]);

  return (
    <TeacherShell session={session} searchEntries={searchEntries} notifications={notifications}>
      {children}
    </TeacherShell>
  );
}
