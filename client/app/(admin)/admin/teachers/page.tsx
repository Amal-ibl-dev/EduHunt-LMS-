import type { Metadata } from "next";
import { requireRole } from "@/lib/auth/require-role";
import { TeachersTable } from "@/features/teachers/components/TeachersTable";
import { getTeachers } from "@/features/teachers/services/teachers.service";

export const metadata: Metadata = { title: "Teachers | EduHunt Admin" };

export default async function AdminTeachersPage() {
  await requireRole(["admin"]);
  return <TeachersTable teachers={await getTeachers()} />;
}
