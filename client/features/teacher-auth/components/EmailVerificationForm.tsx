"use client";

import { useSearchParams } from "next/navigation";
import { OtpForm } from "./OtpForm";

export function EmailVerificationForm() {
  const searchParams = useSearchParams();
  return <OtpForm email={searchParams.get("email") ?? undefined} />;
}
