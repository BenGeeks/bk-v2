import { redirect } from 'next/navigation';

import Login from './login';
import { getUser } from '@/lib/user';

const LoginPage = async () => {
   const user = await getUser();

   if (user) {
      redirect('/dashboard');
   }
   return <Login />;
};

export default LoginPage;
