import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ROUTES } from "@/constants/routes";
import type { SpeedTestResult } from "@/features/speed-test/types";

export function SpeedTestSummary({ results }: { results: SpeedTestResult[] }) {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl text-slate-600">Speed Test History</h2>
        <Link href={ROUTES.speedTestHistory} aria-label="View full speed test history" className="text-slate-500 hover:text-brand">
          <ArrowRightIcon className="h-6 w-6" />
        </Link>
      </div>

      <ul className="mt-4 space-y-5">
        {results.map((r) => (
          <li key={r.subject} className="grid grid-cols-[1fr_auto] items-start gap-x-6 px-2 md:px-8">
            <div>
              <div className="flex justify-between text-xl text-slate-500">
                <span>{r.subject}</span>
                <span>
                  {r.score}/{r.total}
                </span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={r.score}
                aria-valuemin={0}
                aria-valuemax={r.total}
                className="mt-3 h-2 rounded-full bg-slate-300"
              >
                <div className="h-full rounded-full bg-blue-600" style={{ width: `${(r.score / r.total) * 100}%` }} />
              </div>
            </div>
            <span className="text-lg text-slate-500">{r.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
