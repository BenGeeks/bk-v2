'use client';

import { RiAddCircleLine } from 'react-icons/ri';
import React from 'react';

import { AppButtonItem, AppButtonType } from '@/types/app-button.types';
import AppButtonBar from '@/app/app/components/app-button-bar';
import { ordersButtons } from '@/constants/orders';
import { useQuery } from '@tanstack/react-query';
import apiRequest from '@/utils/axios';
import { Order } from '@/types/orders.types';

const TodaysOrder = () => {
   const { data: orders, isPending: fetchingOrders } = useQuery({
      queryKey: ['orders'],
      queryFn: () => apiRequest<Order[]>({ url: 'orders/today', method: 'GET' }).then((res) => res),
      staleTime: 0,
      refetchInterval: 20000,
   });

   console.log('ORDERS: ', orders);

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
         <div className="flex flex-1 py-2 px-4">Todays orders goes here</div>
         <AppButtonBar buttons={buttons} />
      </>
   );
};

export default TodaysOrder;
