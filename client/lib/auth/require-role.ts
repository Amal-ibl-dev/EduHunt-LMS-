import { redirect } from "next/navigation";
import { ADMIN_ROUTES } from "@/constants/admin-routes";
import { ROUTES } from "@/constants/routes";
import { getAdminSession } from "@/features/admin/services/admin-session.service";
import type { AdminRole } from "@/features/admin/types";

/** Call at the top of every protected server page. UI hiding is not security; this is. */
export async function requireRole(allowed: AdminRole[]) {
  const session = await getAdminSession();
  if (!session) redirect(ROUTES.signIn);
  if (!allowed.includes(session.role)) redirect(ADMIN_ROUTES.dashboard);
  return session;
}
