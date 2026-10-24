"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/common/Logo";
import { LogoutIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { isActive, type NavItem } from "./nav";

type PortalSidebarProps = {
  items: NavItem[];
  subtitle: string;
  footerLinks?: { label: string; href: string }[];
  onNavigate?: () => void;
};

export function PortalSidebar({ items, subtitle, footerLinks = [], onNavigate }: PortalSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col items-center gap-2 pb-4 pt-1 text-center">
        <LogoMark className="h-10 w-14" />
        <p className="text-2xl font-bold text-slate-800">EduHunt</p>
        <p className="text-xs text-slate-400">{subtitle}</p>
      </div>

      <nav aria-label={subtitle} className="flex-1 space-y-1">
        {items.filter((i) => !i.hidden).map((item) => {
          const active = isActive(pathname, item);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
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
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-sm">
        {footerLinks.map((l) => (
          <Link key={l.href} href={l.href} className="block rounded-xl px-5 py-2 text-slate-500 hover:bg-admin-soft">
            {l.label}
          </Link>
        ))}
        {/* TODO: wire to your sign-out action */}
        <button type="button" className="flex w-full items-center gap-2 rounded-xl px-5 py-2 text-coral hover:bg-coral-soft">
          <LogoutIcon className="h-4 w-4" /> Sign out
        </button>
      </div>
    </div>
  );
}
