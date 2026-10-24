import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { ROUTES } from "@/constants/routes";
import { AdminShell } from "@/features/admin/components/AdminShell";
import { getAdminSession } from "@/features/admin/services/admin-session.service";
import { getAdminSearchIndex } from "@/features/admin/services/admin-search.service";
import { getAdminNotifications } from "@/features/notifications/services/notifications.service";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getAdminSession();
  if (!session) redirect(ROUTES.signIn);
  const [searchEntries, notifications] = await Promise.all([getAdminSearchIndex(session.role), getAdminNotifications()]);

  return (
    <AdminShell session={session} searchEntries={searchEntries} notifications={notifications}>
      {children}
    </AdminShell>
  );
}
