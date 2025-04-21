import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import Aurora from "@/components/Aurora/Aurora";
import Hero from "@/components/Hero";
import { CartProvider } from "@/context/CartContext";

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
            <Hero />
            <div className="flex flex-col px-1">
              <CartProvider>
                {children}
              </CartProvider>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
