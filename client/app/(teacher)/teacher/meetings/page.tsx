import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { TEACHER_PATHS } from "@/constants/teacher-routes";
import { MeetingsBoard } from "@/features/teacher-meetings/components/MeetingsBoard";
import { getMeetings } from "@/features/teacher-meetings/services/meetings.service";
import { requireTeacher } from "@/lib/auth/require-teacher";

export const metadata: Metadata = { title: "Public Meetings | EduHunt Teacher" };

export default async function TeacherMeetingsPage() {
  await requireTeacher();
  const meetings = await getMeetings();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-slate-500">Open sessions anyone can join, great for finding new students.</p>
        <Button href={TEACHER_PATHS.meetingNew} variant="admin" size="toolbar">+ Schedule meeting</Button>
      </div>
      <MeetingsBoard meetings={meetings} />
    </div>
  );
}
