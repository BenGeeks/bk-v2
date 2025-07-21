import { ReactQueryProvider } from '@/provider/query-client-provider';
import { SessionProvider } from '@/context/session-context';
import { Kaushan_Script } from 'next/font/google';
import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import type { Metadata } from 'next';
import './globals.css';

const kaushanScript = Kaushan_Script({
   weight: '400',
   subsets: ['latin'],
   variable: '--font-kaushan-script',
});

export const metadata: Metadata = {
   title: "Bebeng's Kitchen",
   description: 'Where every bite is a delight',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
   const session = await getServerSession(authOptions);

   return (
      <html lang="en">
         <body
            suppressHydrationWarning
            className={`flex flex-col min-h-screen antialiased bg-amber-50 ${kaushanScript.variable}`}
         >
            <SessionProvider session={session}>
               <ReactQueryProvider>{children}</ReactQueryProvider>
            </SessionProvider>
         </body>
      </html>
   );
};

export default RootLayout;
