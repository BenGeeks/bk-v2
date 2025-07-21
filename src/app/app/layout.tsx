import { SessionProvider } from '@/context/session-context';
import { Kaushan_Script } from 'next/font/google';
import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import '../globals.css';

import AppHeaderBar from './components/app-header-bar';
import AppContainer from './components/app-container';
import { ReactQueryProvider } from '@/provider/query-client-provider';

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

   if (!session) {
      redirect('/login');
   }

   return (
      <html lang="en">
         <body
            suppressHydrationWarning
            className={`flex flex-col min-h-screen ${kaushanScript.variable} antialiased bg-amber-50`}
         >
            <SessionProvider session={session}>
               <ReactQueryProvider>
                  <AppHeaderBar />
                  <AppContainer>{children}</AppContainer>
               </ReactQueryProvider>
            </SessionProvider>
         </body>
      </html>
   );
};

export default RootLayout;
