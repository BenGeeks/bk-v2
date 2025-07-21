'use client';

import { AppButtonItem, AppButtonType } from '@/types/app-button.types';
import { ordersButtons } from '@/constants/orders';
import { PiCalendar } from 'react-icons/pi';
import React from 'react';

import AppButtonBar from '@/app/app/components/app-button-bar';

const History = () => {
   const handleOpenCalendar = () => {
      console.log('New order clicked');
   };

   const buttons: AppButtonItem[] = [
      {
         type: AppButtonType.BUTTON,
         label: 'New Order',
         onClick: handleOpenCalendar,
         icon: PiCalendar,
      },
      ...ordersButtons,
   ];

   return (
      <>
         <div className="flex flex-1 py-2 px-4">Previous orders goes here</div>
         <AppButtonBar buttons={buttons} />
      </>
   );
};

export default History;
