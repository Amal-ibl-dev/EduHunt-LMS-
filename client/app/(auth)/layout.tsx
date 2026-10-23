import type { CSSProperties, ReactNode } from "react";
import { COLORS } from "@/config/colors";

const brandStyle = {
  "--color-brand": COLORS.brand,
  "--color-brand-dark": "color-mix(in srgb, var(--color-brand), black 15%)",
  "--color-brand-soft": "color-mix(in srgb, var(--color-brand), white 85%)",
} as CSSProperties;

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-surface" style={brandStyle}>{children}</main>;
}
