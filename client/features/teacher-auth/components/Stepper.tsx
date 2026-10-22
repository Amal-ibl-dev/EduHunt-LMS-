import { CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <ol className="grid grid-cols-3 gap-2" aria-label="Progress">
      {steps.map((label, i) => {
        const n = i + 1;
        const done = n < current;
        const active = n === current;
        return (
          <li key={label} aria-current={active ? "step" : undefined} className="flex flex-col items-center gap-2 text-center">
            <span
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold",
                done && "bg-emerald-500 text-white",
                active && "bg-brand text-white ring-4 ring-brand-soft",
                !done && !active && "bg-slate-100 text-slate-400",
              )}
            >
              {done ? <CheckIcon className="h-5 w-5" /> : n}
            </span>
            <span className={cn("text-xs", active ? "font-medium text-navy" : "text-muted")}>{label}</span>
          </li>
        );
      })}
    </ol>
  );
}
