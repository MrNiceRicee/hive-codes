import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "~/lib/utils";

const calFont = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hive Codes",
  description: "Support your favorite creators with their brand sponsors. Easily find and use their discount codes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(calFont.variable, inter.className)}>{children}</body>
    </html>
  );
}
