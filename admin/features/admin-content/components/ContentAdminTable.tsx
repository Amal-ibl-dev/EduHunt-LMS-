"use client";

import { Button } from "@/components/ui/Button";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { RowActions } from "@/components/ui/RowActions";
import { SUBJECTS, SUBJECT_STYLES } from "@/constants/subjects";
import { CONTENT_TYPE_STYLES } from "@/features/content/content-types";
import type { ContentItem } from "@/features/content/types";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/format";

const columns: Column<ContentItem>[] = [
  {
    key: "title",
    header: "Title",
    cell: (c) => {
      const { icon: Icon, soft } = CONTENT_TYPE_STYLES[c.type];
      return (
        <div className="flex items-center gap-3">
          <span className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", soft)}>
            <Icon className="h-5 w-5" />
          </span>
          <span className="font-medium text-slate-800">{c.title}</span>
        </div>
      );
    },
  },
  { key: "type", header: "Type", cell: (c) => <span className="capitalize">{c.type}</span>, className: "hidden md:table-cell" },
  { key: "subject", header: "Subject", cell: (c) => <span className={SUBJECT_STYLES[c.subject].text}>{c.subject}</span> },
  { key: "date", header: "Date", cell: (c) => formatDate(c.date), className: "hidden lg:table-cell" },
  // TODO: edit form + delete server action (use soft delete)
  { key: "actions", header: "", cell: () => <RowActions actions={[{ label: "Edit" }, { label: "Delete", danger: true }]} /> },
];

export function ContentAdminTable({ items, addLabel }: { items: ContentItem[]; addLabel: string }) {
  return (
    <DataTable
      rows={items}
      columns={columns}
      rowKey={(c) => c.id}
      searchText={(c) => `${c.title} ${c.subject}`}
      searchPlaceholder="Search content"
      filter={{ label: "Subject", options: ["All", ...SUBJECTS], value: (c) => c.subject }}
      toolbar={<Button variant="admin" size="toolbar">{addLabel}</Button>}
    />
  );
}
