import type { ReactNode } from "react";

type WelcomeBannerProps = { title: string; text: string; actions?: ReactNode };

export function WelcomeBanner({ title, text, actions }: WelcomeBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-admin p-6 text-white md:p-8">
      <div aria-hidden className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/10" />
      <div aria-hidden className="absolute -bottom-20 right-32 h-48 w-48 rounded-full bg-white/10" />
      <h2 className="relative text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="relative mt-3 max-w-xl text-lg text-white/90 md:text-xl">{text}</p>
      {actions && <div className="relative mt-6 flex flex-wrap gap-3">{actions}</div>}
    </section>
  );
}
