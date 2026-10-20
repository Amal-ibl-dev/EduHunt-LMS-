"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/common/Logo";
import { LogoutIcon } from "@/components/ui/icons";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";
import { ADMIN_NAV } from "../admin-nav";
import type { AdminRole } from "../types";

type AdminSidebarProps = { role: AdminRole; onNavigate?: () => void };

export function AdminSidebar({ role, onNavigate }: AdminSidebarProps) {
  const pathname = usePathname();
  const items = ADMIN_NAV.filter((i) => i.roles.includes(role));

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col items-center gap-2 pb-4 pt-1 text-center">
        <LogoMark className="h-10 w-14" />
        <p className="text-2xl font-bold text-slate-800">EduHunt</p>
        <p className="text-xs text-slate-400">Admin Panel</p>
      </div>

      <nav aria-label="Admin" className="flex-1 space-y-1">
        {items.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-4 border-l-4 px-4 py-2.5 text-base transition xl:px-5 xl:py-3 xl:text-lg",
                active
                  ? "border-admin bg-gradient-to-r from-admin-soft to-transparent text-admin-dark"
                  : "border-transparent text-slate-400 hover:text-slate-600",
              )}
            >
              <Icon className="h-6 w-6 shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm">
        <Link href={ROUTES.dashboard} className="block rounded-xl px-5 py-2 text-slate-500 hover:bg-admin-soft">
          Open student app
        </Link>
        {/* TODO: wire to your sign-out action */}
        <button type="button" className="flex w-full items-center gap-2 rounded-xl px-5 py-2 text-coral hover:bg-coral-soft">
          <LogoutIcon className="h-4 w-4" /> Sign out
        </button>
      </div>
    </div>
  );
}
