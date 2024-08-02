import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import GridPattern from "@/components/magicui/grid-pattern";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata: Metadata = {
  title: "AI Bio",
  description: "Generate Twitter Bios using Artificial Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, "font-sans")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <GridPattern width={60} height={60} className="-z-10 opacity-70" />

          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
