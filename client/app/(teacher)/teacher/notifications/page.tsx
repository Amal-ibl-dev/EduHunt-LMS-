import type { Metadata } from "next";
import { NotificationsPage } from "@/features/notifications/components/NotificationsPage";
import { requireTeacher } from "@/lib/auth/require-teacher";

export const metadata: Metadata = { title: "Notifications | EduHunt Teacher" };

export default async function TeacherNotificationsPage() {
  await requireTeacher();
  return <NotificationsPage />;
}
