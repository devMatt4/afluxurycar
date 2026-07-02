import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppShell from "components/layout/AppShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AFLUXURYCAR | Auto nuove, usate e noleggio",
  description:
    "AFLUXURYCAR è il marketplace dedicato ad auto nuove, usate e soluzioni di noleggio selezionate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
