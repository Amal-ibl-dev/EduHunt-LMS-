"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { AppNotification } from "../types";

type Ctx = {
  items: AppNotification[];
  unread: number;
  markRead: (id: string) => void;
  markAllRead: () => void;
  seeAllHref?: string;
};

const NotificationsContext = createContext<Ctx>({ items: [], unread: 0, markRead: () => {}, markAllRead: () => {} });

type ProviderProps = { initial: AppNotification[]; seeAllHref?: string; children: ReactNode };

export function NotificationsProvider({ initial, seeAllHref, children }: ProviderProps) {
  const [items, setItems] = useState(initial);

  const value = useMemo<Ctx>(
    () => ({
      items,
      unread: items.filter((n) => !n.read).length,
      // TODO: also persist read state via your API
      markRead: (id) => setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n))),
      markAllRead: () => setItems((prev) => prev.map((n) => ({ ...n, read: true }))),
      seeAllHref,
    }),
    [items, seeAllHref],
  );

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
}

export const useNotifications = () => useContext(NotificationsContext);
