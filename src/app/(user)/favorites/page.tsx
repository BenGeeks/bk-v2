import PageContainer from '@/app/(public)/components/page-container';
import { getUser } from '@/lib/user';
import { redirect } from 'next/navigation';
import React from 'react';

const UserFavoritesPage = async () => {
   const user = await getUser();
   if (!user) redirect('/home');
   return <PageContainer title="Favorites">UserFavoritesPage goes here</PageContainer>;
};

export default UserFavoritesPage;
