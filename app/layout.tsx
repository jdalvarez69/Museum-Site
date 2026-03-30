import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Museum of Cold War Propaganda",
  description:
    "A digital exhibition documenting how the United States and Soviet Union weaponized mass media between 1947 and 1991.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[--paper] text-[--ink]">
        {/* Site Header */}
        <header className="border-b border-[--rule] bg-[--ink] text-[--paper]">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-xs font-semibold tracking-[0.2em] uppercase hover:text-[--red] transition-colors"
            >
              Museum of Cold War Propaganda
            </Link>
            <nav className="flex items-center gap-8">
              <Link
                href="/exhibit/posters"
                className="text-xs tracking-widest uppercase hover:text-[--red] transition-colors"
              >
                Exhibit I
              </Link>
              <Link
                href="/exhibit/broadcast"
                className="text-xs tracking-widest uppercase hover:text-[--red] transition-colors"
              >
                Exhibit II
              </Link>
              <Link
                href="/process"
                className="text-xs tracking-widest uppercase hover:text-[--red] transition-colors"
              >
                Process
              </Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Site Footer */}
        <footer className="border-t border-[--rule] bg-[--ink] text-[--paper]">
          <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
            <span className="text-xs tracking-widest uppercase text-[--muted]">
              Museum of Cold War Propaganda
            </span>
            <span className="text-xs tracking-widest uppercase text-[--muted]">
              History of Media · Spring 2026
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
