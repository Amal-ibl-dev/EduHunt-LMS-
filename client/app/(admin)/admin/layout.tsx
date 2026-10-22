import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { ROUTES } from "@/constants/routes";
import { AdminShell } from "@/features/admin/components/AdminShell";
import { getAdminSession } from "@/features/admin/services/admin-session.service";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getAdminSession();
  if (!session) redirect(ROUTES.signIn);

  return <AdminShell session={session}>{children}</AdminShell>;
}
