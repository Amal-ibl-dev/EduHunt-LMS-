import type { Metadata } from "next";
import { NotificationsPage } from "@/features/notifications/components/NotificationsPage";
import { requireRole } from "@/lib/auth/require-role";

export const metadata: Metadata = { title: "Notifications | EduHunt Admin" };

export default async function AdminNotificationsPage() {
  await requireRole(["admin", "teacher"]);
  return <NotificationsPage />;
}
