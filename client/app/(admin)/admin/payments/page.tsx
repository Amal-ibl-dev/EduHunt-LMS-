import type { Metadata } from "next";
import { StatCard } from "@/components/ui/StatCard";
import { WalletIcon } from "@/components/ui/icons";
import { requireRole } from "@/lib/auth/require-role";
import { formatCurrency, formatMonth } from "@/lib/format";
import { PaymentsTable } from "@/features/payments/components/PaymentsTable";
import { getPaymentSummary, getPayments } from "@/features/payments/services/payments.service";

export const metadata: Metadata = { title: "Payments | EduHunt Admin" };

export default async function AdminPaymentsPage() {
  await requireRole(["admin"]);
  const [payments, summary] = await Promise.all([getPayments(), getPaymentSummary()]);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <StatCard label={`Collected, ${formatMonth(summary.month)}`} value={formatCurrency(summary.collected)} icon={<WalletIcon />} tone="admin" />
        <StatCard label={`Pending, ${formatMonth(summary.month)}`} value={formatCurrency(summary.pending)} icon={<WalletIcon />} tone="amber" />
        <StatCard label="Overdue (all months)" value={formatCurrency(summary.overdue)} icon={<WalletIcon />} tone="coral" />
      </div>
      <PaymentsTable payments={payments} />
    </div>
  );
}
