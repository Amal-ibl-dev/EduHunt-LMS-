import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeftIcon, SpeedIcon, TimerIcon } from "@/components/ui/icons";
import { ROUTES } from "@/constants/routes";
import { SPEED_TEST_CONFIG as c } from "../services/speed-test.service";

const RULES = [
  `${c.questionCount} MCQ questions`,
  `${c.durationMinutes}-minute countdown timer`,
  "Auto-marked instantly on submit",
  "Encouraging result screen",
];

export function SpeedTestIntro() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 py-16">
      <Link href={ROUTES.dashboard} aria-label="Go back" className="absolute left-8 top-8 text-navy hover:text-brand">
        <ArrowLeftIcon className="h-6 w-6" />
      </Link>

      <span className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-speed-soft text-white">
        <SpeedIcon className="h-16 w-16" />
      </span>
      <h1 className="mt-10 text-center text-4xl font-bold text-slate-900">{c.subject} Speed Test</h1>
      <p className="mt-6 text-xl font-medium text-slate-900">
        {c.grade} . {c.questionCount} Questions . {c.durationMinutes} Minutes
      </p>

      <ul className="mt-10 space-y-6">
        {RULES.map((rule) => (
          <li key={rule} className="flex items-center gap-5 text-xl text-slate-900">
            <TimerIcon className="h-7 w-7 shrink-0 text-emerald-500" />
            {rule}
          </li>
        ))}
      </ul>

      <Button href={ROUTES.speedTestQuiz} variant="speed" className="mt-12 max-w-md">
        Start Test
      </Button>
    </main>
  );
}
