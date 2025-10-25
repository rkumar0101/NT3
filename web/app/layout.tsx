import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { FabThemeToggle } from "@/components/fab-theme-toggle";

export const metadata: Metadata = {
  title: "Narayani Thoughts",
  description: "Next 15 + Tailwind v4 + shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <FabThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
