"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { BellIcon } from "@/components/ui/icons";
import { useDismiss } from "@/components/ui/useDismiss";
import { cn } from "@/lib/cn";
import { NotificationItem } from "./NotificationItem";
import { useNotifications } from "./NotificationsProvider";

export function NotificationBell() {
  const { items, unread, markRead, markAllRead, seeAllHref } = useNotifications();
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"all" | "unread">("all");
  const ref = useRef<HTMLDivElement>(null);
  useDismiss(ref, open, () => setOpen(false));

  const list = tab === "unread" ? items.filter((n) => !n.read) : items;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={unread ? `Notifications, ${unread} unread` : "Notifications"}
        className="relative flex h-11 w-11 items-center justify-center rounded-full text-slate-500 hover:bg-white hover:text-admin"
      >
        <BellIcon className="h-6 w-6" />
        {unread > 0 && (
          <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-coral px-1 text-[10px] font-semibold text-white">
            {unread}
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Notifications"
          className="fixed inset-x-3 top-20 z-50 overflow-hidden rounded-3xl bg-white shadow-2xl sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-3 sm:w-[24rem]"
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <h2 className="text-lg font-bold text-slate-800">Notifications</h2>
            {seeAllHref && (
              <Link href={seeAllHref} onClick={() => setOpen(false)} className="text-sm font-medium text-admin-dark hover:underline">
                See All
              </Link>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 px-5 pt-3">
            <div role="tablist" aria-label="Filter notifications" className="inline-flex rounded-full bg-slate-100 p-1 text-sm">
              {(["all", "unread"] as const).map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={cn("rounded-full px-4 py-1 capitalize transition", tab === t ? "bg-white font-medium text-slate-800 shadow-sm" : "text-slate-500")}
                >
                  {t}
                  {t === "unread" && unread > 0 ? ` (${unread})` : ""}
                </button>
              ))}
            </div>
            <button type="button" onClick={markAllRead} disabled={unread === 0} className="text-xs font-medium text-admin-dark hover:underline disabled:text-slate-300 disabled:no-underline">
              Mark all as read
            </button>
          </div>

          <ul className="max-h-[min(60vh,26rem)] overflow-y-auto p-3">
            {list.length === 0 && <li className="px-4 py-10 text-center text-sm text-slate-400">{tab === "unread" ? "You're all caught up." : "No notifications yet."}</li>}
            {list.map((n) => (
              <li key={n.id}>
                <NotificationItem
                  n={n}
                  onOpen={(item) => {
                    markRead(item.id);
                    setOpen(false);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
