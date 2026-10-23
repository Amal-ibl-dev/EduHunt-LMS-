"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { LockIcon, MailIcon } from "@/components/ui/icons";
import { TextField } from "@/components/ui/TextField";
import { ROUTES } from "@/constants/routes";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";

export function TeacherSignInForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setLoading(true);
    // TODO: call your teacher auth service, e.g. await authService.teacherSignIn(data)
    console.log(data);
    setLoading(false);
    router.push(TEACHER_ROUTES.dashboard);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-8">
      <header className="space-y-5 text-center">
        <h1 className="text-4xl font-bold text-navy">Welcome Back</h1>
        <p className="text-2xl font-medium text-navy">Sign in to continue</p>
      </header>

      <div className="space-y-6">
        <TextField name="email" type="email" label="E mail" icon={<MailIcon />} placeholder="teacher@example.com" autoComplete="email" required />
        <TextField
          name="password"
          type="password"
          label="Password"
          icon={<LockIcon />}
          placeholder="********"
          autoComplete="current-password"
          required
          labelAction={
            <Link href={ROUTES.forgotPassword} className="text-base text-muted hover:text-brand">
              Forgot?
            </Link>
          }
        />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Signing in..." : "Sign In"}
      </Button>

      <p className="text-center text-muted">
        New to EduHunt?{" "}
        <Link href={TEACHER_ROUTES.signUp} className="font-semibold hover:text-brand">
          Create a Account
        </Link>
      </p>
    </form>
  );
}
