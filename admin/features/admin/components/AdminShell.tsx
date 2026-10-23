"use client";

import { useState, type ReactNode } from "react";
import type { AdminSession } from "../types";
import { AdminSidebar } from "./AdminSidebar";
import { AdminTopbar } from "./AdminTopbar";

export function AdminShell({ session, children }: { session: AdminSession; children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="admin-bg min-h-screen p-3 sm:p-4 lg:p-6 xl:p-8">
      <div className="mx-auto flex max-w-[1600px] gap-6 xl:gap-8">
        <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-64 shrink-0 overflow-y-auto rounded-3xl bg-white/90 p-4 xl:w-72 xl:p-6 shadow-sm backdrop-blur lg:block">
          <AdminSidebar role={session.role} />
        </aside>

        {open && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <button type="button" aria-label="Close menu" className="absolute inset-0 bg-slate-900/40" onClick={() => setOpen(false)} />
            <aside className="relative h-full w-72 overflow-y-auto bg-white p-6">
              <AdminSidebar role={session.role} onNavigate={() => setOpen(false)} />
            </aside>
          </div>
        )}

        <div className="min-w-0 flex-1 space-y-6 xl:space-y-8">
          <AdminTopbar session={session} onMenuClick={() => setOpen(true)} />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
