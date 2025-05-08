
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Home, Calendar, FileText, BarChart2, Activity, Code } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen text-white dark`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <header className="border-b border-[#00ff9d]/30 p-4 flex justify-between items-center">
              <Link href="/" className="text-[#00ff9d] text-2xl font-bold">
                @lewisif
              </Link>
              <nav className="flex gap-6">
                <Link href="/" className="text-[#00ff9d] hover:text-[#00ff9d]/80">
                  HOME
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  ABOUT
                </Link>
                <Link href="/login" className="text-gray-300 hover:text-white">
                  LOG IN
                </Link>
              </nav>
            </header>

            <main className="flex-1">
              {children}
            </main>

            <footer className="border-t border-[#00ff9d]/30 p-2">
              <div className="flex justify-around">
                <Link
                  href="/"
                  className="flex flex-col items-center p-2 text-[#00ff9d]"
                >
                  <Home size={20} />
                  <span className="text-xs mt-1">HOME</span>
                </Link>
                <Link
                  href="/faltas"
                  className="flex flex-col items-center p-2 text-gray-500 hover:text-[#00ff9d]"
                >
                  <Calendar size={20} />
                  <span className="text-xs mt-1">FALTAS</span>
                </Link>
                <Link
                  href="/notas"
                  className="flex flex-col items-center p-2 text-gray-500 hover:text-[#00ff9d]"
                >
                  <FileText size={20} />
                  <span className="text-xs mt-1">NOTAS</span>
                </Link>
                <Link
                  href="/progresso"
                  className="flex flex-col items-center p-2 text-gray-500 hover:text-[#00ff9d]"
                >
                  <BarChart2 size={20} />
                  <span className="text-xs mt-1">PROGRESSO</span>
                </Link>
                <Link
                  href="/analytics"
                  className="flex flex-col items-center p-2 text-gray-500 hover:text-[#00ff9d]"
                >
                  <Activity size={20} />
                  <span className="text-xs mt-1">ANALYTICS</span>
                </Link>
                <Link
                  href="/developer"
                  className="flex flex-col items-center p-2 text-gray-500 hover:text-[#00ff9d]"
                >
                  <Code size={20} />
                  <span className="text-xs mt-1">DEVELOPER</span>
                </Link>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
