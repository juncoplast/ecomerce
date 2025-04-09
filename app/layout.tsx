import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import Aurora from "@/components/Aurora/Aurora";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Juncoplast",
  description: "Juncoplast fibra sintética",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col">
            {/* NAV */}
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 fixed top-0 bg-background z-50">
              <div className="w-full max-w-5xl flex justify-center items-center p-3 px-5 text-sm">
                <div className="flex gap-5 items-center font-semibold">
                  <Link href={"/"}>Orçamentos Juncoplast</Link>
                </div>
              </div>
            </nav>

            {/* Espaço para o nav fixo */}
            <div className="h-16" />

            {/* Aurora */}
            <Aurora
              colorStops={["#f6812c", "#eb9344", "#FF3232"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />

            {/* Conteúdo */}
            <div className="flex flex-col gap-20 max-w-5xl p-5 mx-auto w-full">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
