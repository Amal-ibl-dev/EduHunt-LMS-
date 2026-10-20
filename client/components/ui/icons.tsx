import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true };

export const UserIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z" />
  </svg>
);

export const LockIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M17 9V7a5 5 0 0 0-10 0v2H5v12h14V9h-2Zm-8 0V7a3 3 0 0 1 6 0v2H9Zm3 4a2 2 0 0 1 1 3.7V18h-2v-1.3A2 2 0 0 1 12 13Z" />
  </svg>
);

export const EyeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
  </svg>
);

export const EyeOffIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m3.3 2 18.7 18.7-1.3 1.3-3.2-3.2A10 10 0 0 1 12 20C7 20 3 15.5 2 13c.6-1.5 2-3.4 3.900-4.900L2 3.300 3.300 2Zm8.700 3c5 0 9 4.500 10 7-.5 1.200-1.500 2.600-2.900 3.800l-2.900-2.900A4 4 0 0 0 11.100 8l-2-2A9.600 9.600 0 0 1 12 5Z" />
  </svg>
);

export const GradCapIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 1 9l11 6 9-4.900V17h2V9L12 3ZM5 13.200V17c0 1.700 3.100 3 7 3s7-1.300 7-3v-3.800l-7 3.800-7-3.800Z" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m7 10 5 5 5-5H7Z" />
  </svg>
);

/* ---- stroke icons used by the dashboard ---- */
const stroke: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ArrowLeftIcon = (p: IconProps) => (
  <svg {...stroke} {...p}><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
);
export const ArrowRightIcon = (p: IconProps) => (
  <svg {...stroke} {...p}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);
export const SearchIcon = (p: IconProps) => (
  <svg {...stroke} {...p}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
);
export const DownloadIcon = (p: IconProps) => (
  <svg {...stroke} {...p}><path d="M12 4v11M7 11l5 5 5-5M5 20h14" /></svg>
);
export const PapersIcon = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M8 7V5a2 2 0 0 1 2-2h5l5 5v8a2 2 0 0 1-2 2h-2" />
    <path d="M4 9a2 2 0 0 1 2-2h5l4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" />
  </svg>
);
export const NotesIcon = (p: IconProps) => (
  <svg {...stroke} {...p}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></svg>
);
export const SpeedIcon = (p: IconProps) => (
  <svg {...stroke} {...p}><path d="M4 18a8 8 0 1 1 16 0Z" /><path d="m12 14 3-4" /></svg>
);
export const LinkIcon = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
    <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
  </svg>
);
export const TimerIcon = (p: IconProps) => (
  <svg {...stroke} {...p}><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2 2M10 2h4" /></svg>
);
