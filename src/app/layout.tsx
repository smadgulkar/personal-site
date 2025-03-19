import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubhankar | Developer",
  description: "Software developer specializing in modern web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrains.className} bg-zinc-950 text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-500`}>
        <div className="relative min-h-screen">
          {/* Navigation */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-900">
            <nav className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-zinc-100 font-bold">SM</Link>
                <div className="flex gap-8 text-sm text-zinc-400">
                  <Link href="#work" className="hover:text-emerald-500 transition-colors">
                    <span className="text-emerald-500">#</span> work
                  </Link>
                  <Link href="#about" className="hover:text-emerald-500 transition-colors">
                    <span className="text-emerald-500">#</span> about
                  </Link>
                  <Link href="#contact" className="hover:text-emerald-500 transition-colors">
                    <span className="text-emerald-500">#</span> contact
                  </Link>
                </div>
              </div>
            </nav>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
            {children}
          </main>

          {/* Footer */}
          <footer className="absolute bottom-0 left-0 right-0 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-zinc-500">
              <p>Built with Next.js & Tailwind CSS</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
} 