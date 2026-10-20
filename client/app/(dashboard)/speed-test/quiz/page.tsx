import type { Metadata } from "next";
import { QuizRunner } from "@/features/speed-test/components/QuizRunner";
import { SPEED_TEST_CONFIG, getQuestions } from "@/features/speed-test/services/speed-test.service";

export const metadata: Metadata = { title: "Speed Test | EduHunt" };

export default async function QuizPage() {
  const questions = await getQuestions();
  return <QuizRunner questions={questions} durationSeconds={SPEED_TEST_CONFIG.durationMinutes * 60} />;
}
