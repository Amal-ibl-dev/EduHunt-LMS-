import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "speed";
  href?: string;
};

const styles = {
  base: "flex h-14 w-full items-center justify-center rounded-full text-lg font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
  primary: "bg-brand text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-brand-muted",
  outline: "border border-brand bg-surface text-brand hover:bg-brand-soft",
  speed: "bg-speed text-white hover:brightness-95",
};

export function Button({ variant = "primary", href, className, ...props }: ButtonProps) {
  const classes = cn(styles.base, styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }
  return <button className={classes} {...props} />;
}
