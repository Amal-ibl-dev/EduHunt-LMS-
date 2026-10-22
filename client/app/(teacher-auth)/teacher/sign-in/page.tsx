import type { Metadata } from "next";
import Image from "next/image";
import { Logo } from "@/components/common/Logo";
import { TeacherSignInForm } from "@/features/teacher-auth/components/TeacherSignInForm";

export const metadata: Metadata = { title: "Teacher Sign In | EduHunt" };

export default function TeacherSignInPage() {
  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-2 lg:p-8">
      <div className="relative m-8 mr-0 hidden overflow-hidden rounded-3xl lg:block">
        <Image src="/images/teacher-sign-in-hero.png" alt="A teacher working at her desk" fill priority sizes="50vw" className="object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 px-6 py-12">
        <Logo className="lg:hidden" />
        <TeacherSignInForm />
      </div>
    </main>
  );
}
