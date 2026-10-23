import type { Metadata } from "next";
import { requireRole } from "@/lib/auth/require-role";
import { StudentsTable } from "@/features/students/components/StudentsTable";
import { getStudents } from "@/features/students/services/students.service";

export const metadata: Metadata = { title: "Students | EduHunt Admin" };

export default async function AdminStudentsPage() {
  await requireRole(["admin"]);
  return <StudentsTable students={await getStudents()} />;
}
