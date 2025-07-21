import { AppButtonItem, AppButtonType } from '@/types/app-button.types';
import { PiCalendar, PiCalendarBlank } from 'react-icons/pi';
import { MdDisplaySettings } from 'react-icons/md';

export const ordersButtons: AppButtonItem[] = [
   {
      type: AppButtonType.LINK,
      label: 'Today',
      href: '/app/orders/today',
      icon: PiCalendar,
   },
   {
      type: AppButtonType.LINK,
      label: 'History',
      href: '/app/orders/history',
      icon: PiCalendarBlank,
   },
   {
      type: AppButtonType.LINK,
      label: 'Summary',
      href: '/app/orders/summary',
      icon: MdDisplaySettings,
   },
];
