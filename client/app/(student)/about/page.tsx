import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { COLORS } from "@/config/colors";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "About EduHunt | Learn with purpose",
  description: "Get to know EduHunt and our approach to practical, flexible online learning.",
};

const principles = [
  {
    number: "01",
    title: "Learn what matters",
    text: "Explore practical topics that help you build skills for the things you want to do next.",
  },
  {
    number: "02",
    title: "Make it your own",
    text: "Choose a course that matches your interests and study at a pace that fits your life.",
  },
  {
    number: "03",
    title: "Keep moving forward",
    text: "Turn each lesson into progress you can see, use, and build on over time.",
  },
] as const;

export default function AboutPage() {
  const brandStyle = { "--color-brand": COLORS.brand } as CSSProperties;

  return (
    <div className="min-h-screen bg-[#f8fbff] text-navy" style={brandStyle}>
      <Navbar />
      <main>
        <section className="relative isolate min-h-[420px] overflow-hidden bg-white sm:min-h-[480px]">
          <Image
            src="/images/about.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-[38%_center] sm:object-center"
          />
          <div className="mx-auto flex min-h-[420px] max-w-7xl items-center px-5 py-14 sm:min-h-[480px] lg:px-8">
            <div className="max-w-lg">
              <nav aria-label="Breadcrumb" className="mb-10 flex gap-2 text-xs font-medium text-slate-600">
                <Link href={ROUTES.home} className="hover:text-brand">Home</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page" className="text-navy">About</span>
              </nav>
              <p className="text-xs font-bold uppercase text-brand">About EduHunt</p>
              <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">Learning that moves you forward.</h1>
              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">We bring practical courses and flexible learning together, so you can discover a new interest, strengthen a skill, or take your next step with confidence.</p>
              <Link href={ROUTES.courses} className="mt-7 inline-flex min-h-11 items-center rounded-lg bg-brand px-5 text-sm font-bold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">Explore courses</Link>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100 bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase text-brand">Our purpose</p>
              <h2 className="mt-3 max-w-md text-3xl font-extrabold leading-tight sm:text-4xl">A place to learn, grow, and keep going.</h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-slate-600">
              <p>Everyone has a different reason to learn. Maybe you are exploring a new field, preparing for a career change, or simply curious about what comes next.</p>
              <p>EduHunt makes it easier to find a course that fits. With a range of subjects and learning levels, you can start where you are and build from there.</p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20" aria-labelledby="approach-heading">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-xs font-bold uppercase text-brand">The EduHunt approach</p>
            <h2 id="approach-heading" className="mt-3 text-3xl font-extrabold sm:text-4xl">Built around your journey</h2>
            <div className="mt-10 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-3 md:gap-10">
              {principles.map((principle) => (
                <article key={principle.number}>
                  <span className="text-sm font-extrabold text-brand">{principle.number}</span>
                  <h3 className="mt-4 text-lg font-extrabold">{principle.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-blue-50">
              <Image src="/images/learnteam.png" alt="Learning with EduHunt on different devices" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-brand">Learning on your terms</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">Make room for learning in real life.</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">Your goals deserve a learning experience that works with your schedule. Browse courses, find a subject that speaks to you, and learn wherever you feel most focused.</p>
              <Link href={ROUTES.courses} className="mt-6 inline-flex text-sm font-bold text-brand hover:text-brand-dark">Browse all courses <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 text-white sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase text-sky-300">Your next step</p>
              <h2 className="mt-3 max-w-xl text-3xl font-extrabold sm:text-4xl">Find something worth learning today.</h2>
            </div>
            <Link href={ROUTES.courses} className="inline-flex min-h-11 shrink-0 items-center justify-center self-start rounded-lg bg-white px-5 text-sm font-bold text-navy transition hover:bg-blue-50 sm:self-auto">Explore courses</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
