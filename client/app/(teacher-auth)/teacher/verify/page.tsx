import type { Metadata } from "next";
import { Suspense } from "react";
import { EmailVerificationForm } from "@/features/teacher-auth/components/EmailVerificationForm";
import { OtpForm } from "@/features/teacher-auth/components/OtpForm";

export const metadata: Metadata = { title: "Verify Email | EduHunt" };

export default function TeacherVerifyPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-12">
      <Suspense fallback={<OtpForm />}>
        <EmailVerificationForm />
      </Suspense>
    </main>
  );
}
