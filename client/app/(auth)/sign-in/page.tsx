import type { Metadata } from "next";
import { Logo } from "@/components/common/Logo";
import { AuthIllustration } from "@/features/auth/components/AuthIllustration";
import { SignInForm } from "@/features/auth/components/SignInForm";

export const metadata: Metadata = { title: "Sign In | EduHunt" };

export default function SignInPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <AuthIllustration src="/images/sign-in-hero.png" alt="Student studying with headphones" className="h-full rounded-none rounded-br-3xl" priority />
        <Logo className="absolute left-6 top-6" />
      </div>
      <div className="flex items-center justify-center px-6 py-12">
        <SignInForm />
      </div>
    </div>
  );
}
