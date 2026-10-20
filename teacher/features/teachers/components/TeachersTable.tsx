"use client";

import { ADMIN_PATHS } from "@/constants/admin-routes";
import { Button } from "@/components/ui/Button";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { NameCell } from "@/components/ui/NameCell";
import { RowActions } from "@/components/ui/RowActions";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Teacher } from "../types";

const columns: Column<Teacher>[] = [
  { key: "teacher", header: "Teacher", cell: (t) => <NameCell name={t.name} sub={t.email} href={ADMIN_PATHS.teacher(t.id)} /> },
  { key: "subjects", header: "Subjects", cell: (t) => t.subjects.join(", "), className: "hidden sm:table-cell" },
  { key: "grades", header: "Grades", cell: (t) => t.grades.join(", "), className: "hidden xl:table-cell" },
  { key: "students", header: "Students", cell: (t) => t.students, className: "hidden lg:table-cell" },
  { key: "status", header: "Status", cell: (t) => <StatusBadge status={t.status} /> },
  { key: "actions", header: "", cell: (t) => <RowActions actions={[{ label: "View profile", href: ADMIN_PATHS.teacher(t.id) }, { label: "Deactivate", danger: true }]} /> },
];

export function TeachersTable({ teachers }: { teachers: Teacher[] }) {
  return (
    <DataTable
      rows={teachers}
      columns={columns}
      rowKey={(t) => t.id}
      searchText={(t) => `${t.name} ${t.email} ${t.subjects.join(" ")}`}
      searchPlaceholder="Search teachers"
      filter={{ label: "Status", options: ["All", "active", "inactive"], value: (t) => t.status }}
      toolbar={<Button variant="admin" size="toolbar">+ Invite teacher</Button>}
    />
  );
}
