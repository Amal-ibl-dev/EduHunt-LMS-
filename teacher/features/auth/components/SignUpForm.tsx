"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { GradCapIcon, LockIcon, UserIcon } from "@/components/ui/icons";
import { SelectField } from "@/components/ui/SelectField";
import { TextField } from "@/components/ui/TextField";
import { GRADES } from "@/constants/grades";

export function SignUpForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setLoading(true);
    // TODO: call your auth service here, e.g. await authService.signUp(data)
    console.log(data);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-5">
      <TextField name="fullName" label="Full Name" icon={<UserIcon />} placeholder="Abhaya Perera" autoComplete="name" required />
      <TextField name="identifier" label="Student ID or E mail" icon={<UserIcon />} placeholder="STU000001" autoComplete="username" required />
      <TextField name="password" type="password" label="Password" icon={<LockIcon />} placeholder="********" autoComplete="new-password" minLength={8} required />
      <SelectField name="grade" label="Grade" icon={<GradCapIcon />} placeholder="Select Your Grade" options={GRADES} required />
      <TextField name="school" label="School" icon={<GradCapIcon />} placeholder="Ananda College Colombo" required />

      <Button type="submit" disabled={loading} className="mt-4">
        {loading ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
}
