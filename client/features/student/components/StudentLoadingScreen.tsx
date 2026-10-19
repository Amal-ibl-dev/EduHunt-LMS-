"use client";

import { useEffect } from "react";
import { LogoMark } from "@/components/common/Logo";

type StudentLoadingScreenProps = {
  onComplete: () => void;
  duration?: number;
};

export function StudentLoadingScreen({
  onComplete,
  duration = 1800,
}: StudentLoadingScreenProps) {
  useEffect(() => {
    const timeout = window.setTimeout(onComplete, duration);
    return () => window.clearTimeout(timeout);
  }, [duration, onComplete]);

  return (
    <main className="splash-screen" aria-label="Loading EduHunt" role="status">
      <div className="splash-orbit splash-orbit-one" aria-hidden />
      <div className="splash-orbit splash-orbit-two" aria-hidden />
      <div className="splash-content">
        <div className="splash-logo">
          <LogoMark className="h-20 w-24" />
        </div>
        <p className="splash-wordmark">EduHunt</p>
        <p className="splash-tagline">Learn. Grow. Succeed.</p>
        <div className="splash-progress" aria-hidden><span /></div>
        <span className="sr-only">Preparing your learning space</span>
      </div>
    </main>
  );
}
