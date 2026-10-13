"use client";

import { useId, useState, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { EyeIcon, EyeOffIcon } from "./icons";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon: ReactNode;
  labelAction?: ReactNode;
  error?: string;
};

export function TextField({ label, icon, labelAction, error, type = "text", className, ...props }: TextFieldProps) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={className}>
      <div className="mb-2 flex items-center justify-between">
        <label htmlFor={id} className="text-lg text-muted">
          {label}
        </label>
        {labelAction}
      </div>
      <div
        className={cn(
          "flex h-14 items-center gap-3 rounded-full bg-field px-5 text-navy focus-within:ring-2 focus-within:ring-brand",
          error && "ring-2 ring-red-400",
        )}
      >
        <span className="h-5 w-5 shrink-0 text-muted">{icon}</span>
        <input
          id={id}
          type={isPassword && visible ? "text" : type}
          aria-invalid={!!error}
          className="h-full w-full bg-transparent text-base outline-none placeholder:text-muted/70"
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
      {error && <p className="mt-1 pl-5 text-sm text-red-500">{error}</p>}
    </div>
  );
}
