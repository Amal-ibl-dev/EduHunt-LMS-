"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type AvatarProps = { name: string; src?: string; className?: string };

/** Falls back to initials when the image is missing or fails to load. */
export function Avatar({ name, src, className }: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div className={cn("relative shrink-0 overflow-hidden rounded-full bg-navy text-white", className)}>
      {src && !failed ? (
        <Image src={src} alt={name} fill sizes="220px" className="object-cover" onError={() => setFailed(true)} />
      ) : (
        <span className="flex h-full w-full items-center justify-center font-semibold">{initials}</span>
      )}
    </div>
  );
}
