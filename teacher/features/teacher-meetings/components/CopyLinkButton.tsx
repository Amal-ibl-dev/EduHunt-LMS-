"use client";

import { useState } from "react";

export function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable (e.g. insecure context) */
    }
  }

  return (
    <button type="button" onClick={copy} className="rounded-full border border-slate-200 px-4 py-1.5 text-sm text-slate-600 hover:bg-admin-soft">
      <span aria-live="polite">{copied ? "Copied!" : "Copy link"}</span>
    </button>
  );
}
