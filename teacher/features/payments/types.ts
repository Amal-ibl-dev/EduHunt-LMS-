export type Payment = {
  id: string;
  studentName: string;
  studentId: string;
  /** YYYY-MM the fee is for */
  month: string;
  amount: number;
  method: "Cash" | "Bank transfer" | "Card";
  status: "paid" | "pending" | "overdue";
  paidOn?: string;
};

export type PaymentSummary = { month: string; collected: number; pending: number; overdue: number };
