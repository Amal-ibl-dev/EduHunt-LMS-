import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "speed" | "admin" | "adminOutline";
  size?: "md" | "sm" | "toolbar";
  href?: string;
};

const styles = {
  base: "flex items-center justify-center rounded-full font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
  md: "h-14 w-full text-lg",
  sm: "h-11 w-auto whitespace-nowrap px-6 text-base",
  toolbar: "h-14 w-auto whitespace-nowrap px-6 text-base",
  primary: "bg-brand text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-brand-muted",
  outline: "border border-brand bg-surface text-brand hover:bg-brand-soft",
  speed: "bg-speed text-white hover:brightness-95",
  admin: "bg-admin text-white shadow-sm hover:bg-admin-dark disabled:cursor-not-allowed disabled:opacity-60",
  adminOutline: "border border-admin bg-white text-admin hover:bg-admin-soft",
};

export function Button({ variant = "primary", size = "md", href, className, ...props }: ButtonProps) {
  const classes = cn(styles.base, styles[size], styles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }
  return <button className={classes} {...props} />;
}
