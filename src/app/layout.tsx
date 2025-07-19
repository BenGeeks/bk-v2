import { SessionProvider } from '@/context/session-context';
import { Kaushan_Script } from 'next/font/google';
import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import type { Metadata } from 'next';
import './globals.css';

import PublicHeader from './(public)/components/header';
import PublicFooter from './(public)/components/footer';

const kaushanScript = Kaushan_Script({
   weight: '400',
   subsets: ['latin'],
   variable: '--font-kaushan-script',
});

export const metadata: Metadata = {
   title: "Bebeng's Kitchen",
   description: 'Where every bite is a delight',
};

const RootLayout = async ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   const session = await getServerSession(authOptions);

   return (
      <html lang="en">
         <body
            className={`flex flex-col min-h-screen ${kaushanScript.variable} antialiased bg-amber-50`}
         >
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
