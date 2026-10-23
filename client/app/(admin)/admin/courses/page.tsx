import type { Metadata } from "next";
import { requireRole } from "@/lib/auth/require-role";
import { CourseBrowser } from "@/features/courses/components/CourseBrowser";
import { getAllClasses } from "@/features/courses/services/courses.service";

export const metadata: Metadata = { title: "Courses | EduHunt Admin" };

export default async function AdminCoursesPage() {
  // TODO: when role === "teacher", only return that teacher's classes
  await requireRole(["admin", "teacher"]);
  return <CourseBrowser classes={await getAllClasses()} />;
}
