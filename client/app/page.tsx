"use client";

import { useCallback, useState } from "react";
import { LandingHero } from "@/features/landing/components/LandingHero";
import { StudentLoadingScreen } from "@/features/student/components/StudentLoadingScreen";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = useCallback(() => setIsLoading(false), []);

  return isLoading ? <StudentLoadingScreen onComplete={finishLoading} /> : <LandingHero />;
}
