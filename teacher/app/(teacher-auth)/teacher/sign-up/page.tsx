import type { Metadata } from "next";
import { TeacherSignUpWizard } from "@/features/teacher-auth/components/TeacherSignUpWizard";

export const metadata: Metadata = { title: "Create Teacher Account | EduHunt" };

export default function TeacherSignUpPage() {
  return <TeacherSignUpWizard />;
}
