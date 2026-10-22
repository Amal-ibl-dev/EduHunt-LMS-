import { LogoMark } from "@/components/common/Logo";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";

export function LandingHero() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface px-6">
      <div aria-hidden className="absolute -right-24 -top-10 h-[500px] w-48 rounded-b-full bg-brand-soft" />
      <div aria-hidden className="absolute -bottom-10 -left-24 h-[500px] w-48 rounded-t-full bg-brand-soft" />

      <section className="relative flex w-full max-w-md flex-col items-center text-center">
        <LogoMark className="h-32 w-40" />
        <h1 className="mt-10 text-6xl font-bold text-brand">EduHunt</h1>
        <p className="mt-2 text-2xl font-medium text-navy">Learn.Grow.Succeed</p>

        <div className="mt-12 flex w-full flex-col gap-4">
          <Button href={ROUTES.signIn}>Sign In</Button>
          <Button href={ROUTES.signUp} variant="outline">
            Create Account
          </Button>
        </div>
      </section>
    </main>
  );
}
