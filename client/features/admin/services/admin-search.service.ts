import type { SearchEntry } from "@/components/layout/portal/PortalSearch";
import { ADMIN_PATHS } from "@/constants/admin-routes";
import { getAllClasses } from "@/features/courses/services/courses.service";
import { getStudents } from "@/features/students/services/students.service";
import { getTeachers } from "@/features/teachers/services/teachers.service";
import { ADMIN_NAV } from "../admin-nav";
import type { AdminRole } from "../types";

export async function getAdminSearchIndex(role: AdminRole): Promise<SearchEntry[]> {
  const pages: SearchEntry[] = ADMIN_NAV.filter((i) => i.roles.includes(role)).map((i) => ({ label: i.label, href: i.href, group: "Pages" }));
  if (role !== "admin") return pages;

  const [students, teachers, classes] = await Promise.all([getStudents(), getTeachers(), getAllClasses()]);
  return [
    ...pages,
    ...teachers.map((t) => ({ label: t.name, hint: t.subjects.join(", "), href: ADMIN_PATHS.teacher(t.id), group: "Teachers" })),
    ...classes.map((c) => ({ label: `${c.grade} – ${c.subject}`, hint: c.teacherName, href: ADMIN_PATHS.course(c.id), group: "Courses" })),
    // No student detail page yet: results open the students list.
    ...students.map((s) => ({ label: s.name, hint: `${s.studentId} · ${s.grade}`, href: "/admin/students", group: "Students" })),
  ];
}
