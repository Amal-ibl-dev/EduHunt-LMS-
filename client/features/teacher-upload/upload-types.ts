import { LinkIcon, NotesIcon, PapersIcon, SpeedIcon } from "@/components/ui/icons";

export const UPLOAD_ORDER = ["papers", "notes", "speed-test", "class-links"] as const;
export type UploadTypeKey = (typeof UPLOAD_ORDER)[number];

type UploadType = {
  label: string;
  title: string;
  /** "Choose {noun} or drag & drop it here" */
  noun: string;
  icon: typeof PapersIcon;
  box: string;
  active: string;
  tint: string;
  button: string;
};

export const UPLOAD_TYPES: Record<UploadTypeKey, UploadType> = {
  papers: {
    label: "Papers", title: "Upload Papers", noun: "papers", icon: PapersIcon,
    box: "bg-blue-200 text-blue-600", active: "bg-blue-50", tint: "bg-blue-50", button: "bg-blue-200 hover:bg-blue-300",
  },
  notes: {
    label: "Notes & Tutes", title: "Upload Notes & Tutes", noun: "Notes & Tutes", icon: NotesIcon,
    box: "bg-purple-200 text-purple-600", active: "bg-purple-50", tint: "bg-purple-50", button: "bg-purple-200 hover:bg-purple-300",
  },
  "speed-test": {
    label: "Speed Test", title: "Upload Speed Test", noun: "Speed Test", icon: SpeedIcon,
    box: "bg-amber-200 text-amber-500", active: "bg-amber-50", tint: "bg-amber-50", button: "bg-amber-200 hover:bg-amber-300",
  },
  "class-links": {
    label: "Class Links", title: "Add Class Links", noun: "class links", icon: LinkIcon,
    box: "bg-emerald-200 text-emerald-500", active: "bg-emerald-50", tint: "bg-emerald-50", button: "bg-emerald-300 hover:bg-emerald-400",
  },
};

export const isUploadType = (v: string): v is UploadTypeKey => (UPLOAD_ORDER as readonly string[]).includes(v);
