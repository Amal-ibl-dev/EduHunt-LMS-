import { LinkIcon, NotesIcon, PapersIcon } from "@/components/ui/icons";
import type { ContentType } from "./types";

export const CONTENT_TYPE_STYLES: Record<ContentType, { icon: typeof PapersIcon; soft: string }> = {
  paper: { icon: PapersIcon, soft: "bg-blue-50 text-blue-600" },
  note: { icon: NotesIcon, soft: "bg-purple-50 text-purple-600" },
  link: { icon: LinkIcon, soft: "bg-emerald-50 text-emerald-500" },
};
