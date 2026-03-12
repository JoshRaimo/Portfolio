import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Professional developer portfolio built with Next.js",
};

/**
 * Root layout - wraps all pages with shared HTML structure and metadata.
 * Imports global styles from /styles folder.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
