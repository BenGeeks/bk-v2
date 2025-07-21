'use client';

import { RiAddCircleLine } from 'react-icons/ri';
import { PiCalendar, PiCalendarBlank } from 'react-icons/pi';
import { MdDisplaySettings } from 'react-icons/md';
import React from 'react';

import AppButtonBar from '../components/app-button-bar';
import { AppButtonItem, AppButtonType } from '@/types/app-button.types';

const Dashboard = () => {
   const handleNewOrder = () => {
      console.log('New order clicked');
   };

   const handleToday = () => {
      console.log('Today clicked');
   };

   const handleHistory = () => {
      console.log('History clicked');
   };

   const handleView = () => {
      console.log('View clicked');
   };

   const dashboardButtons: AppButtonItem[] = [
      {
         type: AppButtonType.BUTTON,
         label: 'New Order',
         onClick: handleNewOrder,
         icon: RiAddCircleLine,
      },
      { type: AppButtonType.BUTTON, label: 'Today', onClick: handleToday, icon: PiCalendar },
      {
         type: AppButtonType.BUTTON,
         label: 'History',
         onClick: handleHistory,
         icon: PiCalendarBlank,
      },
      { type: AppButtonType.BUTTON, label: 'View', onClick: handleView, icon: MdDisplaySettings },
   ];

   return (
      <>
         <div className="flex flex-1 py-2 px-4">Dashboard goes here</div>
         <AppButtonBar buttons={dashboardButtons} />
      </>
   );
};

export default Dashboard;
