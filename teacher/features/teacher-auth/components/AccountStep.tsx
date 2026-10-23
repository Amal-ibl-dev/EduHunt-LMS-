"use client";

import { useId } from "react";
import { IdCardIcon, LockIcon, MailIcon, PhoneIcon, UserIcon } from "@/components/ui/icons";
import { TextField } from "@/components/ui/TextField";
import { cn } from "@/lib/cn";
import type { StepProps } from "../types";

export function AccountStep({ data, errors, update }: StepProps) {
  const slugId = useId();

  return (
    <div className="space-y-4">
      {/* TODO: wire to your Google OAuth provider */}
      <button
        type="button"
        className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        <span aria-hidden className="text-lg font-bold text-blue-600">G</span> Continue with Google
      </button>
      <p className="flex items-center gap-3 text-xs text-muted before:h-px before:flex-1 before:bg-slate-200 after:h-px after:flex-1 after:bg-slate-200">
        or use your email
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField compact required label="First name" icon={<UserIcon />} value={data.firstName} onChange={(e) => update({ firstName: e.target.value })} error={errors.firstName} autoComplete="given-name" />
        <TextField compact required label="Last name" icon={<UserIcon />} value={data.lastName} onChange={(e) => update({ lastName: e.target.value })} error={errors.lastName} autoComplete="family-name" />
      </div>
      <TextField compact required type="email" label="E-mail" icon={<MailIcon />} value={data.email} onChange={(e) => update({ email: e.target.value })} error={errors.email} autoComplete="email" />

      <div>
        <label htmlFor={slugId} className="mb-2 block text-sm font-medium text-slate-600">
          Teacher profile URL (optional)
        </label>
        <div className="flex h-12 items-center rounded-full bg-field text-navy focus-within:ring-2 focus-within:ring-brand">
          <span className="whitespace-nowrap pl-4 text-sm text-muted">eduhunt.lk/teacher/</span>
          <input
            id={slugId}
            value={data.profileSlug}
            onChange={(e) => update({ profileSlug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") })}
            placeholder="your-name"
            className="h-full min-w-0 flex-1 bg-transparent px-2 text-base outline-none placeholder:text-muted/70"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField compact required type="password" label="Password" icon={<LockIcon />} value={data.password} onChange={(e) => update({ password: e.target.value })} error={errors.password} autoComplete="new-password" />
        <TextField compact required type="password" label="Confirm password" icon={<LockIcon />} value={data.confirmPassword} onChange={(e) => update({ confirmPassword: e.target.value })} error={errors.confirmPassword} autoComplete="new-password" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField compact type="tel" label="WhatsApp number (optional)" icon={<PhoneIcon />} placeholder="+94 77 123 4567" value={data.whatsapp} onChange={(e) => update({ whatsapp: e.target.value })} error={errors.whatsapp} autoComplete="tel" />
        <TextField compact label="ID number (optional)" icon={<IdCardIcon />} value={data.idNumber} onChange={(e) => update({ idNumber: e.target.value })} />
      </div>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-slate-600">Gender</legend>
        <div className="grid grid-cols-2 gap-3">
          {(["female", "male"] as const).map((g) => (
            <label
              key={g}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-2xl border p-3 text-sm capitalize transition",
                data.gender === g ? "border-brand bg-brand-soft/30 text-navy" : "border-slate-200 text-slate-600 hover:border-brand",
              )}
            >
              <input type="radio" name="gender" value={g} checked={data.gender === g} onChange={() => update({ gender: g })} className="accent-brand" />
              {g}
            </label>
          ))}
        </div>
        {errors.gender && <p className="mt-1 pl-4 text-sm text-red-500">{errors.gender}</p>}
      </fieldset>

      <p className="rounded-2xl bg-brand-soft/30 p-4 text-sm text-slate-600">
        <span className="font-medium text-navy">Verify your email before signing in.</span> After you create your teacher account, we will email you a four-digit code.
      </p>
    </div>
  );
}
