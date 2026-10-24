"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import type { AppNotification } from "../types";
import { NotificationItem } from "./NotificationItem";
import { useNotifications } from "./NotificationsProvider";

const GROUPS: AppNotification["group"][] = ["Today", "Yesterday", "Earlier"];

export function NotificationsPage() {
  const { items, unread, markRead, markAllRead } = useNotifications();
  const [tab, setTab] = useState<"all" | "unread">("all");
  const list = tab === "unread" ? items.filter((n) => !n.read) : items;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="tablist" aria-label="Filter notifications" className="inline-flex rounded-full bg-white p-1 shadow-sm">
          {(["all", "unread"] as const).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={cn("rounded-full px-5 py-2 text-sm font-medium capitalize transition", tab === t ? "bg-admin text-white" : "text-slate-500 hover:text-admin-dark")}
            >
              {t}
              {t === "unread" ? ` (${unread})` : ""}
            </button>
          ))}
        </div>
        <button type="button" onClick={markAllRead} disabled={unread === 0} className="text-sm font-medium text-slate-500 hover:text-admin-dark disabled:text-slate-300">
          Mark all as read
        </button>
      </div>

      {list.length === 0 && <Card className="py-12 text-center text-slate-400">{tab === "unread" ? "You're all caught up." : "No notifications yet."}</Card>}

      {GROUPS.map((g) => {
        const group = list.filter((n) => n.group === g);
        if (group.length === 0) return null;
        return (
          <section key={g} aria-label={g} className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400">{g}</h2>
            <Card className="p-2">
              <ul>
                {group.map((n) => (
                  <li key={n.id}>
                    <NotificationItem n={n} onOpen={(item) => markRead(item.id)} />
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        );
      })}
    </div>
  );
}
