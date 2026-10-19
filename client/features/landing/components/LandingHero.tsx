import type { CSSProperties } from "react";
import Image from "next/image";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";
import { COLORS } from "@/config/colors";
import { LandingFooter } from "./LandingFooter";

const categories = [
  ["</>", "Development", "1250+ Courses", "bg-violet-100 text-violet-600"],
  ["⌁", "Business", "980+ Courses", "bg-emerald-100 text-emerald-600"],
  ["✦", "Design", "850+ Courses", "bg-rose-100 text-rose-600"],
  ["◉", "Marketing", "760+ Courses", "bg-orange-100 text-orange-600"],
  ["▦", "Data Science", "680+ Courses", "bg-indigo-100 text-indigo-600"],
  ["◎", "Personal Growth", "590+ Courses", "bg-amber-100 text-amber-600"],
] as const;

const courses = [
  ["Complete Web Development Bootcamp", "Jonas Schmedtmann", "4.9", "$59.99", "web"],
  ["Python for Data Science & ML", "Dr. Angela Yu", "4.8", "$49.99", "python"],
  ["UI/UX Design Masterclass", "Sarah Johnson", "4.9", "$44.99", "design"],
  ["Digital Marketing Full Course", "Alex Rivera", "4.7", "$39.99", "marketing"],
  ["Video Editing with Adobe Premiere Pro", "Mark Evans", "4.8", "$39.99", "video"],
] as const;

function CourseArt({ type }: { type: (typeof courses)[number][4] }) {
  const label = type === "python" ? "Py" : type === "web" ? "</>" : type === "design" ? "UX" : type === "marketing" ? "↗" : "▶";
  return <div className={`course-art course-art-${type}`}><span>{label}</span></div>;
}

export function LandingHero() {
  const brandStyle = { "--color-brand": COLORS.brand } as CSSProperties;

  return (
    <main className="min-h-screen bg-[#f8fbff] text-navy" style={brandStyle}>
      <header className="border-b border-slate-100 bg-white/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-6 text-[11px] font-semibold text-slate-600 md:flex">
            <a href="#courses" className="transition hover:text-brand">Courses <span className="ml-1 text-[9px]">⌄</span></a>
            <a href="#categories" className="transition hover:text-brand">Categories <span className="ml-1 text-[9px]">⌄</span></a>
            <a href="#courses" className="transition hover:text-brand">Resources <span className="ml-1 text-[9px]">⌄</span></a>
            <a href="#for-business" className="transition hover:text-brand">For Business</a>
            <a href="#pricing" className="transition hover:text-brand">Pricing</a>
          </nav>
          <div className="flex items-center gap-3">
            <label className="hidden h-9 w-36 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 text-[10px] text-slate-400 lg:flex">
              <span className="sr-only">Search courses</span>
              <input className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-slate-400" placeholder="Search courses..." aria-label="Search courses" />
              <span aria-hidden className="text-sm leading-none">⌕</span>
            </label>
            <a href={ROUTES.signIn} className="hidden text-xs font-bold text-slate-600 sm:block">Log In</a>
            <Button href={ROUTES.signUp} className="hidden h-9 w-auto rounded-md px-4 text-[11px] shadow-sm sm:flex">Get Started</Button>
            <details className="relative md:hidden">
              <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-navy transition hover:border-brand hover:text-brand [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Open navigation menu</span>
                <span className="flex flex-col gap-1.5" aria-hidden>
                  <span className="h-0.5 w-5 bg-current" />
                  <span className="h-0.5 w-5 bg-current" />
                  <span className="h-0.5 w-5 bg-current" />
                </span>
              </summary>
              <nav className="absolute right-0 top-12 z-20 w-56 rounded-xl border border-slate-100 bg-white p-3 shadow-xl">
                <div className="flex flex-col text-sm font-semibold text-slate-600">
                  <a href="#courses" className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand">Courses</a>
                  <a href="#categories" className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand">Categories</a>
                  <a href="#courses" className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand">Resources</a>
                  <a href="#for-business" className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand">For Business</a>
                  <a href="#pricing" className="rounded-lg px-3 py-2.5 hover:bg-blue-50 hover:text-brand">Pricing</a>
                </div>
                <div className="mt-2 border-t border-slate-100 pt-2 sm:hidden">
                  <a href={ROUTES.signIn} className="block rounded-lg px-3 py-2.5 text-sm font-bold text-slate-600 hover:bg-blue-50 hover:text-brand">Log In</a>
                  <Button href={ROUTES.signUp} className="mt-2 h-10 rounded-lg text-sm">Get Started</Button>
                </div>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <section className="relative mx-auto min-h-[540px] max-w-7xl overflow-hidden rounded-b-3xl px-5 py-10 lg:px-12 lg:py-16">
        <Image
          src="/images/heroImage.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/65 to-transparent lg:from-white/90 lg:via-white/30" />
        <div className="relative z-10 grid min-h-[460px] items-center gap-8 lg:grid-cols-[1fr_280px]">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-[10px] font-bold text-brand">#1 Platform for Online Learning</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">Learn New Skills.<br /><span className="text-brand">Advance Your Future.</span></h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">Access 10,000+ courses taught by industry experts. Learn at your own pace. Anytime, anywhere.</p>
            <div className="mt-8 flex items-center gap-3 text-[10px] text-slate-500"><div className="flex -space-x-2">{["A", "J", "M", "S"].map((letter) => <span key={letter} className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-300 font-bold text-white">{letter}</span>)}</div><span><b className="text-amber-500">★★★★★</b> Trusted by 50K+ learners worldwide</span></div>
          </div>
          
        </div>
      </section>


      <section id="courses" className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div className="mb-5 flex items-center justify-between"><div><span className="text-[9px] font-bold uppercase tracking-widest text-brand">Featured courses</span><h2 className="mt-1 text-lg font-extrabold">Most Popular Courses</h2><p className="mt-1 text-xs text-slate-500">Handpicked courses loved by learners around the world.</p></div><a href="#courses" className="text-[10px] font-bold text-brand">View All Courses →</a></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{courses.map(([title, author, rating, price, type]) => <article key={title} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"><CourseArt type={type} /><div className="p-3"><h3 className="line-clamp-2 min-h-8 text-xs font-extrabold leading-4">{title}</h3><p className="mt-2 text-[10px] text-slate-400">{author}</p><p className="mt-2 text-[10px]"><span className="text-amber-500">★ {rating}</span><span className="ml-2 text-slate-300">(1.2k)</span></p><b className="mt-3 block text-sm">{price}</b></div></article>)}</div></section>

      <section id="for-business" className="mx-5 mb-12 overflow-hidden rounded-2xl bg-navy px-6 py-5 text-white lg:mx-auto lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-12"><div className="grid grid-cols-2 gap-8 sm:flex"><div><b className="block text-xl">10,000+</b><span className="text-[10px] text-blue-200">Online Courses</span></div><div><b className="block text-xl">50,000+</b><span className="text-[10px] text-blue-200">Happy Learners</span></div><div><b className="block text-xl">200+</b><span className="text-[10px] text-blue-200">Expert Instructors</span></div><div><b className="block text-xl">100%</b><span className="text-[10px] text-blue-200">Satisfaction</span></div></div><a href={ROUTES.signUp} className="mt-5 inline-block text-xs font-bold text-sky-300 lg:mt-0">Build your skills with EduHunt →</a></section>

      <LandingFooter />
    </main>
  );
}
