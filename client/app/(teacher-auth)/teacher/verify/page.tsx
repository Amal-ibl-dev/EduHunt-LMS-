import type { Metadata } from "next";
import { OtpForm } from "@/features/teacher-auth/components/OtpForm";

export const metadata: Metadata = { title: "Verify Email | EduHunt" };

export default async function TeacherVerifyPage({ searchParams }: { searchParams: Promise<{ email?: string }> }) {
  const { email } = await searchParams;
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-12">
      <OtpForm email={email} />
    </main>
  );
}
