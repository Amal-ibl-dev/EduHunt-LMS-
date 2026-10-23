import type { Metadata } from "next";
import { requireRole } from "@/lib/auth/require-role";
import { DashboardOverview } from "@/features/admin-dashboard/components/DashboardOverview";
import { getDashboardData } from "@/features/admin-dashboard/services/dashboard.service";

export const metadata: Metadata = { title: "Admin Dashboard | EduHunt" };

export default async function AdminDashboardPage() {
  const session = await requireRole(["admin", "teacher"]);
  const data = await getDashboardData();
  return <DashboardOverview data={data} firstName={session.name.split(" ")[0]} />;
}
