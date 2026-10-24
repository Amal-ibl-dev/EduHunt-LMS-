"use client";

import type { ReactNode } from "react";
import { PortalShell } from "@/components/layout/portal/PortalShell";
import type { SearchEntry } from "@/components/layout/portal/PortalSearch";
import { ADMIN_ROUTES } from "@/constants/admin-routes";
import { ROUTES } from "@/constants/routes";
import type { AppNotification } from "@/features/notifications/types";
import { ADMIN_NAV } from "../admin-nav";
import type { AdminSession } from "../types";

type Props = {
  session: AdminSession;
  searchEntries: SearchEntry[];
  notifications: AppNotification[];
  children: ReactNode;
};

export function AdminShell({ session, searchEntries, notifications, children }: Props) {
  const items = ADMIN_NAV.filter((i) => i.roles.includes(session.role));

  return (
    <PortalShell
      items={items}
      user={{ name: session.name, subtitle: session.role }}
      subtitle="Admin Panel"
      footerLinks={[{ label: "Open student app", href: ROUTES.dashboard }]}
      searchEntries={searchEntries}
      notifications={notifications}
      notificationsHref={ADMIN_ROUTES.notifications}
    >
      {children}
    </PortalShell>
  );
}
