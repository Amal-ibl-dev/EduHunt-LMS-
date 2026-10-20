import type { Payment, PaymentSummary } from "../types";

type Row = [string, string, string, number, Payment["method"], Payment["status"], string?];

const ROWS: Row[] = [
  ["Kavindu Perera", "STU000001", "2026-10", 3000, "Bank transfer", "paid", "2026-10-02"],
  ["Nethmi Silva", "STU000002", "2026-10", 3000, "Cash", "paid", "2026-10-03"],
  ["Sahan Fernando", "STU000003", "2026-10", 3000, "Card", "paid", "2026-10-04"],
  ["Dilini Jayasinghe", "STU000004", "2026-10", 3000, "Cash", "pending"],
  ["Tharindu Bandara", "STU000005", "2026-10", 3000, "Bank transfer", "pending"],
  ["Ishara Wickramasinghe", "STU000006", "2026-10", 3000, "Cash", "paid", "2026-10-08"],
  ["Hasini Rajapaksha", "STU000007", "2026-09", 3000, "Cash", "overdue"],
  ["Chamath Gunawardena", "STU000008", "2026-09", 3000, "Bank transfer", "overdue"],
  ["Kavindu Perera", "STU000001", "2026-09", 3000, "Bank transfer", "paid", "2026-09-02"],
  ["Nethmi Silva", "STU000002", "2026-09", 3000, "Cash", "paid", "2026-09-04"],
  ["Sahan Fernando", "STU000003", "2026-09", 3000, "Card", "paid", "2026-09-05"],
  ["Dilini Jayasinghe", "STU000004", "2026-09", 3000, "Cash", "paid", "2026-09-09"],
];

const PAYMENTS: Payment[] = ROWS.map(([studentName, studentId, month, amount, method, status, paidOn], i) => ({
  id: `pay${i + 1}`,
  studentName,
  studentId,
  month,
  amount,
  method,
  status,
  paidOn,
}));

export async function getPayments(): Promise<Payment[]> {
  return PAYMENTS;
}

/** collected/pending are for the month; overdue is the outstanding total across all months. */
export async function getPaymentSummary(month?: string): Promise<PaymentSummary> {
  const target = month ?? PAYMENTS.map((p) => p.month).sort().at(-1)!;
  const sum = (list: Payment[]) => list.reduce((t, p) => t + p.amount, 0);
  return {
    month: target,
    collected: sum(PAYMENTS.filter((p) => p.month === target && p.status === "paid")),
    pending: sum(PAYMENTS.filter((p) => p.month === target && p.status === "pending")),
    overdue: sum(PAYMENTS.filter((p) => p.status === "overdue")),
  };
}
