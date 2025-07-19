import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PublicHeader from "@/components/public/header";
import PublicFooter from "@/components/public/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bebeng's Kitchen",
  description: "Where every bite is a delight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-amber-50`}>
        <PublicHeader />
        <main className="mx-auto max-w-7xl px-4 py-6 bg-white">{children}</main>
        <PublicFooter />
      </body>
    </html>
  );
}
