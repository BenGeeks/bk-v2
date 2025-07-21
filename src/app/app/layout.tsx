import { redirect } from 'next/navigation';
import { getUser } from '@/lib/user';

import AppHeaderBar from './components/app-header-bar';
import AppContainer from './components/app-container';

const AppLayout = async ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   const user = await getUser();

   if (!user) {
      redirect('/login');
   }

   return (
      <>
         <AppHeaderBar />
         <AppContainer>{children}</AppContainer>
      </>
   );
};

export default AppLayout;
