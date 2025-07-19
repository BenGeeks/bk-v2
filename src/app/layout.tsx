import { SessionProvider } from "@/context/session-context";
import { Geist, Geist_Mono } from "next/font/google";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import type { Metadata } from "next";
import "./globals.css";

import PublicHeader from "./(public)/components/header";
import PublicFooter from "./(public)/components/footer";

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

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased bg-amber-50`}>
        <SessionProvider session={session}>
          <PublicHeader />
          {children}
          <PublicFooter />
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
