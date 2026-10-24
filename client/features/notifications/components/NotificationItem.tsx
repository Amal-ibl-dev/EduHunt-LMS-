"use client";

import Link from "next/link";
import { BellIcon, LayersIcon, TimerIcon, UploadCloudIcon, UsersIcon, VideoIcon, WalletIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import type { AppNotification, NotificationKind } from "../types";

const KIND: Record<NotificationKind, { icon: typeof BellIcon; tone: string }> = {
  class: { icon: LayersIcon, tone: "bg-purple-100 text-purple-600" },
  student: { icon: UsersIcon, tone: "bg-blue-100 text-blue-600" },
  payment: { icon: WalletIcon, tone: "bg-emerald-100 text-emerald-600" },
  upload: { icon: UploadCloudIcon, tone: "bg-amber-100 text-amber-600" },
  meeting: { icon: VideoIcon, tone: "bg-pink-100 text-pink-600" },
  test: { icon: TimerIcon, tone: "bg-orange-100 text-orange-600" },
  system: { icon: BellIcon, tone: "bg-slate-100 text-slate-600" },
};

type Props = { n: AppNotification; onOpen: (n: AppNotification) => void };

export function NotificationItem({ n, onOpen }: Props) {
  const { icon: Icon, tone } = KIND[n.kind];
  const cls = "flex w-full items-start gap-3 rounded-2xl p-3 text-left transition hover:bg-slate-50";

  const body = (
    <>
      <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full", tone)}>
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className={cn("block text-slate-800", n.read ? "font-normal" : "font-semibold")}>{n.title}</span>
        <span className="block text-sm text-slate-500">{n.description}</span>
        <span className="mt-1 block text-xs text-slate-400">{n.time}</span>
      </span>
      {!n.read && <span role="img" aria-label="Unread" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />}
    </>
  );

  return n.href ? (
    <Link href={n.href} onClick={() => onOpen(n)} className={cls}>
      {body}
    </Link>
  ) : (
    <button type="button" onClick={() => onOpen(n)} className={cls}>
      {body}
    </button>
  );
}
