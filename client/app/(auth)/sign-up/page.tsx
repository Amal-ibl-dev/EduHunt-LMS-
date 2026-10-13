import type { Metadata } from "next";
import { AuthIllustration } from "@/features/auth/components/AuthIllustration";
import { SignUpForm } from "@/features/auth/components/SignUpForm";

export const metadata: Metadata = { title: "Create Account | EduHunt" };

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-12">
        <SignUpForm />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-navy">
          Welcome to <br /> EduHunt
        </h1>
        <p className="text-2xl font-medium text-navy">your private tution companion</p>
        <AuthIllustration src="/images/sign-in-hero.png" alt="Student studying at a desk" className="mt-4 aspect-[4/3] w-full max-w-xl" priority />
      </div>
    </div>
  );
}
