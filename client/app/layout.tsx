import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});


export const metadata: Metadata = {
  title: "EduHunt | Learn. Grow. Succeed",
  description: "Your private tuition companion",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
