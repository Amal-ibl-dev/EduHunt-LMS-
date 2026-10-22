import type { ComponentType, SVGProps } from "react";

export type NavItem = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Path prefix that marks this item active (defaults to href). */
  match?: string;
};

export const isActive = (pathname: string, item: NavItem) => {
  const base = item.match ?? item.href;
  return pathname === base || pathname.startsWith(`${base}/`);
};
