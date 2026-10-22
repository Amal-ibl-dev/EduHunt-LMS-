"use client";

import { cn } from "@/lib/cn";

type ChipGroupProps = {
  options: readonly string[];
  value: string[];
  onChange: (value: string[]) => void;
  label: string;
  className?: string;
};

/** Multi-select toggle chips. */
export function ChipGroup({ options, value, onChange, label, className }: ChipGroupProps) {
  const toggle = (o: string) => onChange(value.includes(o) ? value.filter((v) => v !== o) : [...value, o]);

  return (
    <div role="group" aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {options.map((o) => {
        const on = value.includes(o);
        return (
          <button
            key={o}
            type="button"
            aria-pressed={on}
            onClick={() => toggle(o)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              on ? "border-brand bg-brand text-white" : "border-slate-200 bg-white text-slate-600 hover:border-brand hover:text-brand",
            )}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
