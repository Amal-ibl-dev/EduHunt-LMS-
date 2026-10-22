import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { Card } from "@/components/ui/Card";
import type { TeacherProfile } from "../services/teacher-profile.service";

const LINKS = [
  { label: "View my public profile", href: "#", tone: "text-slate-700" },
  { label: "Help & support", href: "#", tone: "text-slate-700" },
  { label: "Invite a colleague", href: "#", tone: "text-slate-700" },
  { label: "Delete account", href: "#", tone: "text-coral" },
];

export function ProfileSummaryCard({ profile }: { profile: TeacherProfile }) {
  const { data, stats, avatarUrl } = profile;
  const items = [
    { label: "Classes", value: stats.classes },
    { label: "Courses", value: stats.courses },
    { label: "Students", value: stats.students },
  ];

  return (
    <Card className="space-y-8 p-6 md:p-8">
      <div className="flex flex-col items-center text-center">
        <Avatar name={data.fullName} src={avatarUrl} className="h-24 w-24 text-2xl" />
        <h2 className="mt-4 text-xl font-semibold text-slate-800">{data.fullName}</h2>
        <p className="text-sm text-slate-500">{data.title}</p>
        <span className="mt-2 rounded-full bg-coral px-3 py-0.5 text-xs font-medium text-white">Verified</span>
      </div>

      <dl className="grid grid-cols-3 gap-2 text-center">
        {items.map((i) => (
          <div key={i.label} className="flex flex-col-reverse items-center gap-1">
            <dt className="text-xs text-slate-500">{i.label}</dt>
            <dd className="flex h-12 w-12 items-center justify-center rounded-full bg-admin-soft text-lg font-semibold text-admin-dark">{i.value}</dd>
          </div>
        ))}
      </dl>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-slate-800">Support</h3>
        <ul className="space-y-1">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className={`block rounded-xl px-3 py-2 text-sm hover:bg-admin-soft ${l.tone}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
