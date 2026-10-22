"use client";

import { usePathname } from "next/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { BellIcon, ChevronDownIcon, MenuIcon, SearchIcon } from "@/components/ui/icons";
import { isActive, type NavItem } from "./nav";

export type PortalUser = { name: string; subtitle: string; avatarUrl?: string };

type PortalTopbarProps = { items: NavItem[]; user: PortalUser; onMenuClick: () => void };

export function PortalTopbar({ items, user, onMenuClick }: PortalTopbarProps) {
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
        <button
          type="button"
          aria-label="Search"
          className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-admin shadow-sm md:flex"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
        <button type="button" aria-label="Notifications" className="relative text-slate-500 hover:text-admin">
          <BellIcon className="h-6 w-6" />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-coral" />
        </button>
        <div className="flex items-center gap-3">
          <Avatar name={user.name} src={user.avatarUrl} className="h-11 w-11 text-sm" />
          <span className="hidden max-w-[10rem] leading-tight xl:block">
            <span className="block truncate font-medium text-slate-800">{user.name}</span>
            <span className="block text-xs capitalize text-slate-400">{user.subtitle}</span>
          </span>
          <ChevronDownIcon className="hidden h-5 w-5 text-slate-700 xl:block" />
        </div>
      </div>
    </header>
  );
}
