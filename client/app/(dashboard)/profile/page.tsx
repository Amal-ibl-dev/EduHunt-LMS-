import type { Metadata } from "next";
import { PersonalInfoCard } from "@/features/profile/components/PersonalInfoCard";
import { ProfileHeader } from "@/features/profile/components/ProfileHeader";
import { SpeedTestSummary } from "@/features/profile/components/SpeedTestSummary";
import { getCurrentUser } from "@/features/profile/services/profile.service";
import { getRecentResults } from "@/features/speed-test/services/speed-test.service";

export const metadata: Metadata = { title: "Profile | EduHunt" };

export default async function ProfilePage() {
  const [user, results] = await Promise.all([getCurrentUser(), getRecentResults()]);

  return (
    <>
      <ProfileHeader user={user} />
      <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-8 md:px-12 md:pt-28">
        <PersonalInfoCard user={user} />
        <SpeedTestSummary results={results} />
      </div>
    </>
  );
}
