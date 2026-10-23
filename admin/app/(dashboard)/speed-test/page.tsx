import type { Metadata } from "next";
import { SpeedTestIntro } from "@/features/speed-test/components/SpeedTestIntro";

export const metadata: Metadata = { title: "Speed Test | EduHunt" };

export default function SpeedTestPage() {
  return <SpeedTestIntro />;
}
