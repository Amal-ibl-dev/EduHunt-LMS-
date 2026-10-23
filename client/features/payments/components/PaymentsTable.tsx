"use client";

import { Button } from "@/components/ui/Button";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { NameCell } from "@/components/ui/NameCell";
import { RowActions } from "@/components/ui/RowActions";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { downloadCsv } from "@/lib/csv";
import { formatCurrency, formatDate, formatMonth } from "@/lib/format";
import type { Payment } from "../types";

const columns: Column<Payment>[] = [
  { key: "student", header: "Student", cell: (p) => <NameCell name={p.studentName} sub={p.studentId} /> },
  { key: "month", header: "Fee for", cell: (p) => formatMonth(p.month) },
  { key: "amount", header: "Amount", cell: (p) => <span className="font-medium text-slate-800">{formatCurrency(p.amount)}</span> },
  { key: "method", header: "Method", cell: (p) => p.method, className: "hidden lg:table-cell" },
  { key: "paidOn", header: "Paid on", cell: (p) => (p.paidOn ? formatDate(p.paidOn) : "—"), className: "hidden xl:table-cell" },
  { key: "status", header: "Status", cell: (p) => <StatusBadge status={p.status} /> },
  {
    key: "actions",
    header: "",
    // TODO: server action to mark as paid (cash payments) / open receipt
    cell: (p) => <RowActions actions={p.status === "paid" ? [{ label: "Receipt" }] : [{ label: "Mark as paid" }]} />,
  },
];

export function PaymentsTable({ payments }: { payments: Payment[] }) {
  function exportCsv() {
    downloadCsv("payments.csv", [
      ["Student", "Student ID", "Fee month", "Amount", "Method", "Status", "Paid on"],
      ...payments.map((p) => [p.studentName, p.studentId, p.month, p.amount, p.method, p.status, p.paidOn ?? ""]),
    ]);
  }

  return (
    <DataTable
      rows={payments}
      columns={columns}
      rowKey={(p) => p.id}
      searchText={(p) => `${p.studentName} ${p.studentId} ${p.month}`}
      searchPlaceholder="Search payments"
      filter={{ label: "Status", options: ["All", "paid", "pending", "overdue"], value: (p) => p.status }}
      toolbar={
        <Button variant="adminOutline" size="toolbar" onClick={exportCsv}>
          Export CSV
        </Button>
      }
    />
  );
}
