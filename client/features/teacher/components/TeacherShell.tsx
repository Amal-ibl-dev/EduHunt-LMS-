"use client";

import type { ReactNode } from "react";
import { PortalShell } from "@/components/layout/portal/PortalShell";
import type { SearchEntry } from "@/components/layout/portal/PortalSearch";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import type { AppNotification } from "@/features/notifications/types";
import { TEACHER_NAV } from "../teacher-nav";
import type { TeacherSession } from "../types";

type Props = {
  session: TeacherSession;
  searchEntries: SearchEntry[];
  notifications: AppNotification[];
  children: ReactNode;
};

export function TeacherShell({ session, searchEntries, notifications, children }: Props) {
  return (
    <PortalShell
      items={TEACHER_NAV}
      user={{ name: session.fullName, subtitle: session.title, avatarUrl: session.avatarUrl }}
      subtitle="Teacher Panel"
      userMenuLinks={[{ label: "View & edit profile", href: TEACHER_ROUTES.profile }]}
      searchEntries={searchEntries}
      notifications={notifications}
      notificationsHref={TEACHER_ROUTES.notifications}
    >
      {children}
    </PortalShell>
  );
}
