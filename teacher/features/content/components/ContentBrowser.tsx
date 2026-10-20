"use client";

import { useMemo, useState } from "react";
import { FilterChips } from "@/components/ui/FilterChips";
import { SearchInput } from "@/components/ui/SearchInput";
import { BUCKETS, SUBJECTS } from "@/constants/subjects";
import { pluralItems } from "@/lib/format";
import type { ContentItem } from "../types";
import { ContentCard } from "./ContentCard";

const FILTERS = ["All", ...SUBJECTS, ...BUCKETS];

type ContentBrowserProps = {
  items: ContentItem[];
  searchPlaceholder: string;
  downloadable?: boolean;
};

/** Shared search + filter + list used by Papers, Notes & Tutes and Class Links. */
export function ContentBrowser({ items, searchPlaceholder, downloadable }: ContentBrowserProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(
      (i) =>
        (filter === "All" || i.subject === filter || i.bucket === filter) &&
        i.title.toLowerCase().includes(q),
    );
  }, [items, query, filter]);

  return (
    <div className="mt-6 space-y-6">
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={searchPlaceholder}
        aria-label={searchPlaceholder}
      />
      <FilterChips options={FILTERS} value={filter} onChange={setFilter} />

      <h2 className="pt-4 text-2xl font-semibold text-navy">{pluralItems(results.length)}</h2>

      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((item) => (
            <ContentCard key={item.id} item={item} downloadable={downloadable} />
          ))}
        </ul>
      ) : (
        <p className="rounded-3xl bg-white p-8 text-center text-muted">
          Nothing matches yet. Try a different keyword or choose another filter.
        </p>
      )}
    </div>
  );
}
