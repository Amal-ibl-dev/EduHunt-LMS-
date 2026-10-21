import { useId, type TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; hint?: string };

export function TextAreaField({ label, hint, className, ...props }: Props) {
  const id = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-600">
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        className="w-full resize-y rounded-2xl bg-field p-4 text-base text-navy outline-none placeholder:text-muted/70 focus:ring-2 focus:ring-brand"
        {...props}
      />
      {hint && <p className="mt-1 pl-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}
