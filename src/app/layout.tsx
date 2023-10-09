import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "~/components/NavBar/Navbar";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/providers/theme";

const calFont = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  preload: true,
});

const inter = Inter({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: "Hive Codes",
  description:
    "Support your favorite creators with their brand sponsors. Easily find and use their discount codes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(calFont.variable, inter.className)}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
