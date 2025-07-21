'use client';

import AppButtonBar from '@/app/app/components/app-button-bar';
import { PiCalendar, PiCalendarBlank } from 'react-icons/pi';
import { MdDisplaySettings } from 'react-icons/md';
import { RiAddCircleLine } from 'react-icons/ri';
import React from 'react';

import { AppButtonItem, AppButtonType } from '@/types/app-button.types';

const OrdersSummary = () => {
   const handleNewOrder = () => {
      console.log('New order clicked');
   };

   const ordersButtons: AppButtonItem[] = [
      {
         type: AppButtonType.BUTTON,
         label: 'New Order',
         onClick: handleNewOrder,
         icon: RiAddCircleLine,
      },
      {
         type: AppButtonType.LINK,
         label: 'Today',
         href: '/orders/today',
         icon: PiCalendar,
      },
      {
         type: AppButtonType.LINK,
         label: 'History',
         href: '/orders/history',
         icon: PiCalendarBlank,
      },
      {
         type: AppButtonType.LINK,
         label: 'Summary',
         href: '/orders/summary',
         icon: MdDisplaySettings,
      },
   ];

   return (
      <>
         <div className="flex flex-1 py-2 px-4">Summary Report orders goes here</div>
         <AppButtonBar buttons={ordersButtons} />
      </>
   );
};

export default OrdersSummary;
