import { useId, type ReactNode, type SelectHTMLAttributes } from "react";
import { ChevronDownIcon } from "./icons";

type Option = { value: string; label: string };

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  icon: ReactNode;
  placeholder: string;
  options: Option[];
};

export function SelectField({ label, icon, placeholder, options, className, ...props }: SelectFieldProps) {
  const id = useId();

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-lg text-muted">
        {label}
      </label>
      <div className="relative flex h-14 items-center gap-3 rounded-full bg-field px-5 text-navy focus-within:ring-2 focus-within:ring-brand">
        <span className="h-5 w-5 shrink-0 text-muted">{icon}</span>
        <select
          id={id}
          defaultValue=""
          className="h-full w-full appearance-none bg-transparent text-base outline-none invalid:text-muted/70"
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
        <ChevronDownIcon className="pointer-events-none absolute right-5 h-5 w-5 text-muted" />
      </div>
    </div>
  );
}
