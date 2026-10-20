"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Logo } from "@/components/common/Logo";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TEACHER_ROUTES } from "@/constants/teacher-routes";
import { INITIAL_DATA, type Errors, type TeacherSignUpData } from "../types";
import { validateAccount, validateMode } from "../validation";
import { AccountStep } from "./AccountStep";
import { Stepper } from "./Stepper";
import { TeachingAreasStep } from "./TeachingAreasStep";
import { TeachingModeStep } from "./TeachingModeStep";
import { VerifyEmailModal } from "./VerifyEmailModal";

const STEPS = ["Account", "Teaching areas", "Teaching mode"];

const PANEL = [
  { a: "Your knowledge.", b: "Their next chapter.", sub: "Build your teacher profile and bring your classroom online.", title: "Create your teacher profile", note: "Start with your account details." },
  { a: "Teach what", b: "you love.", sub: "Help students discover your expertise.", title: "Your teaching areas", note: "Tell students what you teach." },
  { a: "Your classroom.", b: "Your way.", sub: "Connect with students, online or in person.", title: "Choose how you teach", note: "Set up your teaching preferences." },
];

const PERKS = ["Upload papers", "Notes & tutes", "Class links"];

export function TeacherSignUpWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<TeacherSignUpData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const update = (patch: Partial<TeacherSignUpData>) => {
    setData((d) => ({ ...d, ...patch }));
    setErrors((e) => {
      const next = { ...e };
      (Object.keys(patch) as (keyof TeacherSignUpData)[]).forEach((k) => delete next[k]);
      return next;
    });
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = step === 1 ? validateAccount(data) : step === 3 ? validateMode(data) : {};
    setErrors(found);
    if (Object.keys(found).length) return;

    if (step < 3) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setLoading(true);
    // TODO: POST data to your API (never log passwords) and trigger the 4-digit email code
    setLoading(false);
    setModalOpen(true);
  }

  const p = PANEL[step - 1];

  return (
    <div className="min-h-screen bg-gradient-to-b from-page to-brand-soft/30 px-4 py-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" aria-label="EduHunt home">
            <Logo />
          </Link>
          <p className="text-sm text-muted">
            Already have an account?{" "}
            <Link href={TEACHER_ROUTES.signIn} className="font-semibold text-brand hover:underline">
              Sign in
            </Link>
          </p>
        </header>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_minmax(0,40rem)] lg:gap-12">
          <section>
            <p className="text-xs font-semibold tracking-widest text-slate-500">TEACH WITH EDUHUNT</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-navy md:text-5xl">
              {p.a} <span className="text-brand">{p.b}</span>
            </h1>
            <p className="mt-3 text-lg text-slate-500">{p.sub}</p>

            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-3xl shadow-sm lg:block">
              <Image src="/images/teacher-sign-in-hero.png" alt="A teacher working at her desk" fill sizes="45vw" className="object-cover object-[50%_65%]" priority />
            </div>
            <ul className="mt-6 hidden grid-cols-3 gap-3 lg:grid">
              {PERKS.map((perk) => (
                <li key={perk} className="rounded-2xl bg-white p-4 text-center text-sm font-medium text-navy shadow-sm">
                  {perk}
                </li>
              ))}
            </ul>
          </section>

          <Card className="p-5 sm:p-8">
            <form noValidate onSubmit={handleSubmit} className="space-y-6">
              <header>
                <p className="text-xs font-semibold tracking-widest text-slate-400">STEP {step} OF 3</p>
                <h2 className="mt-1 text-2xl font-bold text-navy">{p.title}</h2>
                <p className="text-sm text-muted">{p.note}</p>
              </header>
              <Stepper steps={STEPS} current={step} />

              {step === 1 && <AccountStep data={data} errors={errors} update={update} />}
              {step === 2 && <TeachingAreasStep data={data} errors={errors} update={update} />}
              {step === 3 && <TeachingModeStep data={data} errors={errors} update={update} />}

              <div className="flex gap-3 border-t border-slate-100 pt-5">
                {step > 1 && (
                  <Button type="button" variant="outline" size="toolbar" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                )}
                <Button type="submit" size="toolbar" className="flex-1" disabled={loading}>
                  {step === 1 ? "Continue to teaching areas →" : step === 2 ? "Continue to teaching mode →" : loading ? "Creating..." : "Create teacher account →"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>

      <VerifyEmailModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onContinue={() => router.push(`${TEACHER_ROUTES.verify}?email=${encodeURIComponent(data.email)}`)}
      />
    </div>
  );
}
