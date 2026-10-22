import { useId, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: ReactNode;
  description?: ReactNode;
  error?: string;
  /** Render as a bordered card instead of a plain row. */
  card?: boolean;
  className?: string;
};

export function Checkbox({ checked, onChange, label, description, error, card, className }: CheckboxProps) {
  const id = useId();
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={cn(
          "flex cursor-pointer items-start gap-3 text-sm text-slate-700",
          card && "rounded-2xl border p-4 transition",
          card && (checked ? "border-brand bg-brand-soft/30" : "border-slate-200 hover:border-brand"),
        )}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={!!error}
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
        />
        <span>
          <span className="block font-medium">{label}</span>
          {description && <span className="block text-xs text-muted">{description}</span>}
        </span>
      </label>
      {error && <p className="mt-1 pl-7 text-sm text-red-500">{error}</p>}
    </div>
  );
}
