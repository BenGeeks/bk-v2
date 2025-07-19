import PageContainer from '../components/page-container';
import { getUser } from '@/lib/user';
import React from 'react';

const HomePage = async () => {
   const user = await getUser();
   return (
      <PageContainer
         title={`Welcome${user?.name ? `, ${user?.name}` : ''}`}
         imgUrl="https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?semt=ais_hybrid&w=740"
      >
         HomePage goes here
      </PageContainer>
   );
};

export default HomePage;
