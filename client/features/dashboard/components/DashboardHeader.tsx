import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { ROUTES } from "@/constants/routes";
import type { UserProfile } from "@/features/profile/services/profile.service";

export function DashboardHeader({ user }: { user: UserProfile }) {
  return (
    <header className="flex items-center justify-between gap-4">
      <h1 className="text-3xl font-bold uppercase text-navy md:text-4xl">Quick Access</h1>
      <Link href={ROUTES.profile} className="flex items-center gap-3" aria-label="Open your profile">
        <span className="text-right leading-tight">
          <span className="block text-lg font-medium text-blue-900">{user.firstName}</span>
          <span className="block text-xs text-navy">{user.grade}</span>
        </span>
        <Avatar name={user.name} src={user.avatarUrl} className="h-14 w-14" />
      </Link>
    </header>
  );
}
