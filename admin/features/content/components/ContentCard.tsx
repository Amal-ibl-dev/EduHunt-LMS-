import { DownloadIcon } from "@/components/ui/icons";
import { SUBJECT_STYLES } from "@/constants/subjects";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/format";
import { CONTENT_TYPE_STYLES } from "../content-types";
import type { ContentItem } from "../types";

type ContentCardProps = { item: ContentItem; downloadable?: boolean };

export function ContentCard({ item, downloadable }: ContentCardProps) {
  const { icon: Icon, soft } = CONTENT_TYPE_STYLES[item.type];

  return (
    <li className="flex items-center rounded-3xl bg-white shadow-sm transition hover:shadow-md">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-w-0 flex-1 items-center gap-5 p-5 md:p-6"
      >
        <span className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl", soft)}>
          <Icon className="h-6 w-6" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-xl font-medium text-slate-700">{item.title}</span>
          <span className="mt-1 block text-base text-slate-500">
            <span className={SUBJECT_STYLES[item.subject].text}>{item.subject}</span>
            {" . "}
            {formatDate(item.date)}
          </span>
        </span>
      </a>
      {downloadable && (
        <a
          href={item.url}
          download
          aria-label={`Download ${item.title}`}
          className="p-5 text-slate-500 hover:text-brand md:p-6"
        >
          <DownloadIcon className="h-6 w-6" />
        </a>
      )}
    </li>
  );
}
