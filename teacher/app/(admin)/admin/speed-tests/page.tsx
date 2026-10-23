import type { Metadata } from "next";
import { requireRole } from "@/lib/auth/require-role";
import { QuestionBank } from "@/features/admin-speed-tests/components/QuestionBank";
import { SPEED_TEST_CONFIG, getQuestions } from "@/features/speed-test/services/speed-test.service";

export const metadata: Metadata = { title: "Speed Tests | EduHunt Admin" };

export default async function AdminSpeedTestsPage() {
  await requireRole(["admin", "teacher"]);
  return <QuestionBank questions={await getQuestions()} config={SPEED_TEST_CONFIG} />;
}
