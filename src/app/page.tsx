import { redirect } from 'next/navigation';
import { getUser } from '@/lib/user';

const HomePage = async () => {
   const user = await getUser();

   if (user) {
      redirect('/app/orders/today');
   } else {
      redirect('/home');
   }
};

export default HomePage;
