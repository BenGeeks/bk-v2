'use client';

import { RiAddCircleLine } from 'react-icons/ri';
import React from 'react';

import { AppButtonItem, AppButtonType } from '@/types/app-button.types';
import AppButtonBar from '@/app/app/components/app-button-bar';
import { ordersButtons } from '@/constants/orders';

const UpcomingOrders = () => {
   const handleNewOrder = () => {
      console.log('New order clicked');
   };

   const buttons: AppButtonItem[] = [
      {
         type: AppButtonType.BUTTON,
         label: 'New Order',
         onClick: handleNewOrder,
         icon: RiAddCircleLine,
      },
      ...ordersButtons,
   ];

   return (
      <>
         <div className="flex flex-1 py-2 px-4">UpcomingOrders orders goes here</div>
         <AppButtonBar buttons={buttons} />
      </>
   );
};

export default UpcomingOrders;
