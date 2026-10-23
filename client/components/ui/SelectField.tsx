import { useId, type ReactNode, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { ChevronDownIcon } from "./icons";

type Option = { value: string; label: string };

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  icon?: ReactNode;
  placeholder: string;
  options: Option[];
  compact?: boolean;
};

export function SelectField({ label, icon, placeholder, options, compact, className, ...props }: SelectFieldProps) {
  const id = useId();

  return (
    <div className={className}>
      <label htmlFor={id} className={cn("mb-2 block", compact ? "text-sm font-medium text-slate-600" : "text-lg text-muted")}>
        {label}
      </label>
      <div
        className={cn(
          "relative flex items-center gap-3 rounded-full bg-field text-navy focus-within:ring-2 focus-within:ring-brand",
          compact ? "h-12 px-4" : "h-14 px-5",
        )}
      >
        {icon && <span className="h-5 w-5 shrink-0 text-muted">{icon}</span>}
        <select
          id={id}
          defaultValue=""
          className="h-full w-full min-w-0 appearance-none bg-transparent pr-6 text-base outline-none invalid:text-muted/70"
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-4 h-5 w-5 text-muted" />
      </div>
    </div>
  );
}
