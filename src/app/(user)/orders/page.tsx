import PageContainer from '@/app/(public)/components/page-container';
import { getUser } from '@/lib/user';
import { redirect } from 'next/navigation';
import React from 'react';

const UserOrdersPage = async () => {
   const user = await getUser();
   if (!user) redirect('/home');

   return <PageContainer title="Orders">UserOrdersPage goes here</PageContainer>;
};

export default UserOrdersPage;
