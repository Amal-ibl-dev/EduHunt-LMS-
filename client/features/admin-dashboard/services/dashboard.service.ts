import { getPaymentSummary, getPayments } from "@/features/payments/services/payments.service";
import { getNewestStudents, getStudents } from "@/features/students/services/students.service";
import { getTeachers } from "@/features/teachers/services/teachers.service";

/** Aggregation layer: one call for everything the dashboard needs. */
export async function getDashboardData() {
  const [students, teachers, payments, summary, newStudents] = await Promise.all([
    getStudents(),
    getTeachers(),
    getPayments(),
    getPaymentSummary(),
    getNewestStudents(4),
  ]);

  return {
    activeStudents: students.filter((s) => s.status === "active").length,
    activeTeachers: teachers.filter((t) => t.status === "active").length,
    summary,
    overduePayments: payments.filter((p) => p.status === "overdue").length,
    recentPayments: payments.slice(0, 4),
    newStudents,
  };
}
