"use client";

import type { ReactNode } from "react";
import { PortalShell } from "@/components/layout/portal/PortalShell";
import { TEACHER_NAV } from "../teacher-nav";
import type { TeacherSession } from "../types";

export function TeacherShell({ session, children }: { session: TeacherSession; children: ReactNode }) {
  return (
    <PortalShell
      items={TEACHER_NAV}
      user={{ name: session.fullName, subtitle: session.title, avatarUrl: session.avatarUrl }}
      subtitle="Teacher Panel"
    >
      {children}
    </PortalShell>
  );
}
