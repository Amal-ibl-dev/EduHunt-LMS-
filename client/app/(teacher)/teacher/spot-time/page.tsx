import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TEACHER_PATHS } from "@/constants/teacher-routes";
import { SpotTestList } from "@/features/spot-time/components/SpotTestList";
import { getSpotTests } from "@/features/spot-time/services/spot-time.service";
import { requireTeacher } from "@/lib/auth/require-teacher";

export const metadata: Metadata = { title: "Spot Time | EduHunt Teacher" };

export default async function SpotTimePage() {
  await requireTeacher();
  const tests = await getSpotTests();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-slate-500">Timed quick tests: set the date, time and duration, then add your questions.</p>
        <Button href={TEACHER_PATHS.spotNew} variant="admin" size="toolbar">+ Create spot test</Button>
      </div>
      {tests.length > 0 ? <SpotTestList tests={tests} /> : <Card className="py-12 text-center text-slate-500">No spot tests yet. Create your first one.</Card>}
    </div>
  );
}
