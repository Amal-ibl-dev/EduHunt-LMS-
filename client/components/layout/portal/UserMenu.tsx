"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { ChevronDownIcon, LogoutIcon } from "@/components/ui/icons";
import { useDismiss } from "@/components/ui/useDismiss";

export type PortalUser = { name: string; subtitle: string; avatarUrl?: string };

type UserMenuProps = { user: PortalUser; links?: { label: string; href: string }[] };

export function UserMenu({ user, links = [] }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useDismiss(ref, open, () => setOpen(false));

  const identity = (
    <>
      <Avatar name={user.name} src={user.avatarUrl} className="h-11 w-11 text-sm" />
      <span className="hidden max-w-[10rem] text-left leading-tight xl:block">
        <span className="block truncate font-medium text-slate-800">{user.name}</span>
        <span className="block truncate text-xs capitalize text-slate-400">{user.subtitle}</span>
      </span>
    </>
  );

  if (links.length === 0) {
    return <div className="flex items-center gap-3">{identity}</div>;
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Open profile menu"
        className="flex items-center gap-3 rounded-full p-1 hover:bg-white/70"
      >
        {identity}
        <ChevronDownIcon className="hidden h-5 w-5 text-slate-700 xl:block" />
      </button>

      {open && (
        <div role="menu" className="absolute right-0 top-full z-50 mt-3 w-56 rounded-2xl bg-white p-2 shadow-xl">
          {links.map((l) => (
            <Link key={l.href} role="menuitem" href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-2.5 text-sm text-slate-700 hover:bg-admin-soft">
              {l.label}
            </Link>
          ))}
          {/* TODO: wire to your sign-out action */}
          <button type="button" role="menuitem" className="flex w-full items-center gap-2 rounded-xl px-4 py-2.5 text-sm text-coral hover:bg-coral-soft">
            <LogoutIcon className="h-4 w-4" /> Sign out
          </button>
        </div>
      )}
    </div>
  );
}
