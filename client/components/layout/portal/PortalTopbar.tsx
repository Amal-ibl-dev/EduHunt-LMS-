"use client";

import { usePathname } from "next/navigation";
import { MenuIcon } from "@/components/ui/icons";
import { NotificationBell } from "@/features/notifications/components/NotificationBell";
import { isActive, type NavItem } from "./nav";
import { PortalSearch, type SearchEntry } from "./PortalSearch";
import { UserMenu, type PortalUser } from "./UserMenu";

export type { PortalUser };

type PortalTopbarProps = {
  items: NavItem[];
  user: PortalUser;
  onMenuClick: () => void;
  searchEntries: SearchEntry[];
  userMenuLinks?: { label: string; href: string }[];
};

export function PortalTopbar({ items, user, onMenuClick, searchEntries, userMenuLinks }: PortalTopbarProps) {
  const pathname = usePathname();
  const title = items.find((i) => isActive(pathname, i))?.label ?? "Dashboard";

  return (
    <header className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm lg:hidden"
        >
          <MenuIcon className="h-5 w-5 text-slate-600" />
        </button>
        <h1 className="truncate text-xl font-bold text-slate-800 sm:text-2xl">{title}</h1>
        <PortalSearch entries={searchEntries} />
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <NotificationBell />
        <UserMenu user={user} links={userMenuLinks} />
      </div>
    </header>
  );
}
