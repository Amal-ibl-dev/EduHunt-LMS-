import { cn } from "@/lib/cn";

type FilterChipsProps = {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
};

export function FilterChips({ options, value, onChange }: FilterChipsProps) {
  return (
    <div role="group" aria-label="Filters" className="flex flex-wrap gap-3">
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option)}
            className={cn(
              "rounded-full border px-5 py-1.5 text-sm transition",
              active
                ? "border-subject-all bg-subject-all text-white"
                : "border-slate-300 text-slate-500 hover:border-subject-all hover:text-subject-all",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
