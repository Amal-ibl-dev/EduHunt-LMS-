import type { Metadata } from "next";
import { ProfileSettings } from "@/features/teacher-profile/components/ProfileSettings";
import { ProfileSummaryCard } from "@/features/teacher-profile/components/ProfileSummaryCard";
import { getTeacherProfile } from "@/features/teacher-profile/services/teacher-profile.service";
import { requireTeacher } from "../../../../lib/auth/require-teacher";

export const metadata: Metadata = { title: "My Profile | EduHunt Teacher" };

export default async function TeacherProfilePage() {
  await requireTeacher();
  const profile = await getTeacherProfile();

  return (
    <div className="grid gap-6 xl:grid-cols-[22rem_1fr]">
      <ProfileSummaryCard profile={profile} />
      <ProfileSettings profile={profile} />
    </div>
  );
}
