"use client";

import { useId, useState, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { EyeIcon, EyeOffIcon } from "./icons";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: ReactNode;
  labelAction?: ReactNode;
  error?: string;
  hint?: string;
  /** Smaller label and input, for dense forms. */
  compact?: boolean;
};

export function TextField({ label, icon, labelAction, error, hint, compact, type = "text", className, ...props }: TextFieldProps) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={className}>
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor={id} className={compact ? "text-sm font-medium text-slate-600" : "text-lg text-muted"}>
          {label}
        </label>
        {labelAction}
      </div>
      <div
        className={cn(
          "flex items-center gap-3 rounded-full bg-field text-navy focus-within:ring-2 focus-within:ring-brand",
          compact ? "h-12 px-4" : "h-14 px-5",
          error && "ring-2 ring-red-400",
        )}
      >
        {icon && <span className="h-5 w-5 shrink-0 text-muted">{icon}</span>}
        <input
          id={id}
          type={isPassword && visible ? "text" : type}
          aria-invalid={!!error}
          aria-describedby={error || hint ? `${id}-msg` : undefined}
          className="h-full w-full min-w-0 bg-transparent text-base outline-none placeholder:text-muted/70"
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide password" : "Show password"}
            className="h-5 w-5 shrink-0 text-muted hover:text-navy"
          >
            {visible ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
      {(error || hint) && (
        <p id={`${id}-msg`} className={cn("mt-1 pl-4 text-sm", error ? "text-red-500" : "text-muted")}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
