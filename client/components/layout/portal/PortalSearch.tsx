"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { SearchIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export type SearchEntry = { label: string; hint?: string; href: string; group: string };

/** Top-bar search: click the icon (or press Ctrl/Cmd + K) and jump to any page or item. */
export function PortalSearch({ entries }: { entries: SearchEntry[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? entries.filter((e) => `${e.label} ${e.hint ?? ""} ${e.group}`.toLowerCase().includes(q))
      : entries.filter((e) => e.group === "Pages");
    return list.slice(0, 10);
  }, [entries, query]);

  function close() {
    setOpen(false);
    setQuery("");
    setActive(0);
  }

  function go(entry: SearchEntry) {
    close();
    router.push(entry.href);
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      go(results[active]);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        aria-haspopup="dialog"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-admin shadow-sm hover:bg-admin-soft sm:h-12 sm:w-12"
      >
        <SearchIcon className="h-5 w-5" />
      </button>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Search" className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/40 p-4 pt-[10vh]" onMouseDown={close}>
          <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl" onMouseDown={(e) => e.stopPropagation()} onKeyDown={onKeyDown}>
            <div className="flex items-center gap-3 border-b border-slate-100 px-5">
              <SearchIcon className="h-5 w-5 shrink-0 text-slate-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                placeholder="Search pages, classes, courses..."
                aria-label="Search"
                role="combobox"
                aria-expanded="true"
                aria-controls="portal-search-results"
                className="h-14 w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-400"
              />
              <kbd className="hidden rounded-md border border-slate-200 px-1.5 py-0.5 text-xs text-slate-400 sm:block">Esc</kbd>
            </div>

            <ul id="portal-search-results" role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
              {results.length === 0 && <li className="px-4 py-8 text-center text-sm text-slate-400">No results for “{query}”.</li>}
              {results.map((r, i) => (
                <li key={`${r.group}-${r.href}-${r.label}`} role="option" aria-selected={i === active}>
                  <button
                    type="button"
                    onClick={() => go(r)}
                    onMouseEnter={() => setActive(i)}
                    className={cn("flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left", i === active ? "bg-admin-soft" : "hover:bg-slate-50")}
                  >
                    <span className="min-w-0">
                      <span className="block truncate font-medium text-slate-800">{r.label}</span>
                      {r.hint && <span className="block truncate text-sm text-slate-400">{r.hint}</span>}
                    </span>
                    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-500">{r.group}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
