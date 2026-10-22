"use client";

import { useState, type ReactNode } from "react";
import type { NavItem } from "./nav";
import { PortalSidebar } from "./PortalSidebar";
import { PortalTopbar, type PortalUser } from "./PortalTopbar";

type PortalShellProps = {
  items: NavItem[];
  user: PortalUser;
  /** Small label under the logo, e.g. "Admin Panel". */
  subtitle: string;
  footerLinks?: { label: string; href: string }[];
  children: ReactNode;
};

/** Sidebar + topbar layout shared by the admin and teacher panels. */
export function PortalShell({ items, user, subtitle, footerLinks, children }: PortalShellProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="admin-bg theme-purple min-h-screen p-3 sm:p-4 lg:p-6 xl:p-8">
      <div className="mx-auto flex max-w-[1600px] gap-6 xl:gap-8">
        <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-64 shrink-0 overflow-y-auto rounded-3xl bg-white/90 p-4 shadow-sm backdrop-blur lg:block xl:w-72 xl:p-6">
          <PortalSidebar items={items} subtitle={subtitle} footerLinks={footerLinks} />
        </aside>

        {open && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <button type="button" aria-label="Close menu" className="absolute inset-0 bg-slate-900/40" onClick={() => setOpen(false)} />
            <aside className="relative h-full w-72 overflow-y-auto bg-white p-6">
              <PortalSidebar items={items} subtitle={subtitle} footerLinks={footerLinks} onNavigate={() => setOpen(false)} />
            </aside>
          </div>
        )}

        <div className="min-w-0 flex-1 space-y-6 xl:space-y-8">
          <PortalTopbar items={items} user={user} onMenuClick={() => setOpen(true)} />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
