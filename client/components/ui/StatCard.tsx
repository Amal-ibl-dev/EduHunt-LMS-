import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Card } from "./Card";

const TONES = {
  admin: "bg-admin-soft text-admin-dark",
  accent: "bg-accent-soft text-accent",
  coral: "bg-coral-soft text-coral",
  amber: "bg-amber-50 text-amber-500",
};

type StatCardProps = { label: string; value: string | number; icon: ReactNode; tone?: keyof typeof TONES };

export function StatCard({ label, value, icon, tone = "admin" }: StatCardProps) {
  return (
    <Card className="flex min-w-0 items-center gap-3 p-4 xl:p-5">
      <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-full [&>svg]:h-5 [&>svg]:w-5", TONES[tone])}>
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="break-words text-lg font-bold leading-tight text-slate-800 xl:text-xl 2xl:text-2xl">{value}</p>
        <p className="break-words text-xs leading-snug text-slate-500 xl:text-sm">{label}</p>
      </div>
    </Card>
  );
}
