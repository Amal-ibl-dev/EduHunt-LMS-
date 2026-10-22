"use client";

import { Button } from "@/components/ui/Button";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { NameCell } from "@/components/ui/NameCell";
import { RowActions } from "@/components/ui/RowActions";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { formatDate } from "@/lib/format";
import type { Student } from "../types";

const columns: Column<Student>[] = [
  { key: "student", header: "Student", cell: (s) => <NameCell name={s.name} sub={s.studentId} /> },
  { key: "grade", header: "Grade", cell: (s) => s.grade, className: "hidden sm:table-cell" },
  { key: "school", header: "School", cell: (s) => s.school, className: "hidden xl:table-cell" },
  { key: "joined", header: "Joined", cell: (s) => formatDate(s.joinedAt), className: "hidden lg:table-cell" },
  { key: "status", header: "Status", cell: (s) => <StatusBadge status={s.status} /> },
  {
    key: "actions",
    header: "",
    cell: (s) => (
      // TODO: open detail page / call suspend & reset-password server actions
      <RowActions actions={[{ label: "View" }, { label: s.status === "active" ? "Suspend" : "Activate", danger: s.status === "active" }]} />
    ),
  },
];

export function StudentsTable({ students }: { students: Student[] }) {
  return (
    <DataTable
      rows={students}
      columns={columns}
      rowKey={(s) => s.id}
      searchText={(s) => `${s.name} ${s.studentId} ${s.email} ${s.school}`}
      searchPlaceholder="Search students"
      filter={{ label: "Status", options: ["All", "active", "suspended"], value: (s) => s.status }}
      toolbar={<Button variant="admin" size="toolbar">+ Add student</Button>}
    />
  );
}
