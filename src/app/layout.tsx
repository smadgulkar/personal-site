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
                <div className="flex items-center gap-8">
                  <div className="flex gap-4 text-zinc-400">
                    <Link
                      href="https://medium.com/@shubhankar2205"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                      </svg>
                    </Link>
                    <Link
                      href="https://dev.to/shubhankar_madgulkar_a4f1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-500 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
                      </svg>
                    </Link>
                  </div>
                  <div className="flex items-center gap-6">
                    <Link
                      href="https://linkedin.com/in/shubhankar-madgulkar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-emerald-500 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </Link>
                  </div>
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