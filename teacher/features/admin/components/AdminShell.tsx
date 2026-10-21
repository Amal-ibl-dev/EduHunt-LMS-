"use client";

import type { ReactNode } from "react";
import { PortalShell } from "@/components/layout/portal/PortalShell";
import { ROUTES } from "@/constants/routes";
import { ADMIN_NAV } from "../admin-nav";
import type { AdminSession } from "../types";

export function AdminShell({ session, children }: { session: AdminSession; children: ReactNode }) {
  const items = ADMIN_NAV.filter((i) => i.roles.includes(session.role));

  return (
    <PortalShell
      items={items}
      user={{ name: session.name, subtitle: session.role }}
      subtitle="Admin Panel"
      footerLinks={[{ label: "Open student app", href: ROUTES.dashboard }]}
    >
      {children}
    </PortalShell>
  );
}
