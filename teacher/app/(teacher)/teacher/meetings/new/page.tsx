import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { MeetingForm } from "@/features/teacher-meetings/components/MeetingForm";
import { requireTeacher } from "../../../../../lib/auth/require-teacher";

export const metadata: Metadata = { title: "Schedule Meeting | EduHunt Teacher" };

export default async function NewMeetingPage() {
  await requireTeacher();
  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: "Public Meetings", href: TEACHER_ROUTES.meetings }, { label: "Schedule meeting" }]} />
      <MeetingForm />
    </div>
  );
}
