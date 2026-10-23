import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { ArrowLeftIcon } from "@/components/ui/icons";
import { ROUTES } from "@/constants/routes";
import type { UserProfile } from "../services/profile.service";

export function ProfileHeader({ user }: { user: UserProfile }) {
  const stats = [
    { value: user.stats.streak, label: "Day Streak" },
    { value: user.stats.downloads, label: "Downloads" },
    { value: user.stats.tests, label: "Tests Taken" },
  ];

  return (
    <header className="relative rounded-b-[2rem] bg-profile px-6 pb-8 pt-16 md:min-h-[165px] md:px-12 md:py-10 md:pl-[17rem]">
      <Link href={ROUTES.dashboard} aria-label="Go back" className="absolute left-6 top-6 z-10 text-navy md:left-9 md:top-8">
        <ArrowLeftIcon className="h-6 w-6" />
      </Link>
      <Avatar
        name={user.name}
        src={user.avatarUrl}
        className="mx-auto mb-4 h-32 w-32 border-4 border-white text-4xl md:absolute md:left-12 md:top-11 md:mb-0 md:h-52 md:w-52"
      />

      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold text-slate-900">{user.name}</h1>
          <p className="mt-1 text-lg text-slate-500">
            {user.grade} . {user.school}
          </p>
        </div>
        <dl className="grid grid-cols-3 divide-x divide-slate-300/70 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse px-5">
              <dt className="text-lg text-slate-500">{s.label}</dt>
              <dd className="text-4xl font-semibold text-slate-900">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
