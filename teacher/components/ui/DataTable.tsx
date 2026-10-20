"use client";

import { useMemo, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Card } from "./Card";
import { SearchInput } from "./SearchInput";

export type Column<T> = {
  key: string;
  header: string;
  cell: (row: T) => ReactNode;
  className?: string;
};

type DataTableProps<T> = {
  rows: T[];
  columns: Column<T>[];
  rowKey: (row: T) => string;
  searchText: (row: T) => string;
  searchPlaceholder?: string;
  filter?: { label: string; options: readonly string[]; value: (row: T) => string };
  toolbar?: ReactNode;
  pageSize?: number;
  emptyMessage?: string;
};

/** Generic searchable / filterable / paginated table used by every admin list. */
export function DataTable<T>({
  rows,
  columns,
  rowKey,
  searchText,
  searchPlaceholder = "Search",
  filter,
  toolbar,
  pageSize = 8,
  emptyMessage = "Nothing found. Try a different search or filter.",
}: DataTableProps<T>) {
  const [query, setQuery] = useState("");
  const [filterValue, setFilterValue] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter(
      (r) => (!filter || filterValue === "All" || filter.value(r) === filterValue) && searchText(r).toLowerCase().includes(q),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, query, filterValue]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, pageCount);
  const start = (current - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex-1">
          <SearchInput
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
          />
        </div>
        {filter && (
          <select
            aria-label={filter.label}
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
              setPage(1);
            }}
            className="h-14 w-full rounded-2xl md:w-auto bg-white px-5 text-sm capitalize text-slate-600 shadow-sm outline-none focus:ring-2 focus:ring-admin"
          >
            {filter.options.map((o) => (
              <option key={o} value={o}>
                {o === "All" ? `${filter.label}: All` : o}
              </option>
            ))}
          </select>
        )}
        {toolbar}
      </div>

      <Card className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm text-slate-400">
                {columns.map((c) => (
                  <th key={c.key} scope="col" className={cn("px-4 py-3 font-medium md:px-6 md:py-4", c.className)}>
                    {c.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visible.map((row) => (
                <tr key={rowKey(row)} className="border-t border-slate-100 text-slate-600">
                  {columns.map((c) => (
                    <td key={c.key} className={cn("px-4 py-3 md:px-6 md:py-4", c.className)}>
                      {c.cell(row)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {visible.length === 0 && <p className="px-6 py-10 text-center text-slate-400">{emptyMessage}</p>}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-4 py-4 md:px-6 text-sm text-slate-500">
          <span>
            {filtered.length === 0 ? "0 results" : `Showing ${start + 1}–${start + visible.length} of ${filtered.length}`}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={current === 1}
              onClick={() => setPage(current - 1)}
              className="rounded-full border border-slate-200 px-4 py-1.5 hover:bg-admin-soft disabled:opacity-40"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={current === pageCount}
              onClick={() => setPage(current + 1)}
              className="rounded-full border border-slate-200 px-4 py-1.5 hover:bg-admin-soft disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
