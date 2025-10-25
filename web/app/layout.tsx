import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { FabThemeToggle } from "@/components/fab-theme-toggle";
import { LanguageProvider } from "@/components/lang-provider";
import { FabLanguage } from "@/components/fab-language";

export const metadata: Metadata = {
  title: "Narayani Thoughts",
  description: "Next 15 + Tailwind v4 + shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-muted/10 text-foreground font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Header />
            <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
            <FabLanguage />
            <FabThemeToggle />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
