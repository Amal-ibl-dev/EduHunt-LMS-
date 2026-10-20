"use client";

import { cn } from "@/lib/cn";

type ToggleProps = { checked: boolean; onChange: (checked: boolean) => void; label: string };

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn("relative h-6 w-11 shrink-0 rounded-full transition", checked ? "bg-admin" : "bg-slate-200")}
    >
      <span className={cn("absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all", checked ? "left-[1.375rem]" : "left-0.5")} />
    </button>
  );
}
