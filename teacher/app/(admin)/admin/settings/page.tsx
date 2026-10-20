import type { Metadata } from "next";
import { requireRole } from "@/lib/auth/require-role";
import { SettingsPanel } from "@/features/admin-settings/components/SettingsPanel";

export const metadata: Metadata = { title: "Settings | EduHunt Admin" };

export default async function AdminSettingsPage() {
  await requireRole(["admin"]);
  return <SettingsPanel />;
}
