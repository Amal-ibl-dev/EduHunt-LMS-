import { cn } from "@/lib/cn";

/* Status colours stay semantic (green = good) even though the brand is purple. */
const TONES: Record<string, string> = {
  active: "bg-emerald-50 text-emerald-600",
  paid: "bg-emerald-50 text-emerald-600",
  pending: "bg-amber-50 text-amber-600",
  overdue: "bg-coral-soft text-coral",
  suspended: "bg-coral-soft text-coral",
  inactive: "bg-slate-100 text-slate-500",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className={cn("whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium capitalize", TONES[status] ?? "bg-accent-soft text-accent")}>
      {status}
    </span>
  );
}
