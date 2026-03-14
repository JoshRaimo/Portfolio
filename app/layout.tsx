import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import GradientBackground from "@/components/GradientBackground";
import Particles from "@/components/Particles";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Professional developer portfolio built with Next.js",
};

/**
 * Root layout - dark theme only (no light/dark toggle).
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-[#0a0a0a] text-slate-100">
        <div id="top" className="absolute top-0 left-0 h-0 w-0" aria-hidden="true" />
        <GradientBackground />
        <Particles />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
