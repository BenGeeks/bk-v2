import { BsClipboardCheck, BsGraphUpArrow } from 'react-icons/bs';
import { IoFastFoodOutline } from 'react-icons/io5';
import { RiContactsBookLine } from 'react-icons/ri';
import { GiChickenOven } from 'react-icons/gi';
import { PiHandCoins } from 'react-icons/pi';
import {
   FaRegMoneyBillAlt,
   FaInfoCircle,
   FaEnvelope,
   FaUtensils,
   FaBoxOpen,
   FaHeart,
   FaUser,
   FaHome,
} from 'react-icons/fa';

import { NavLink } from '@/types/nav.types';

export const navLinks: NavLink[] = [
   { label: 'Home', href: '/home', icon: FaHome },
   { label: 'Menu', href: '/menu', icon: FaUtensils },
   { label: 'About', href: '/about', icon: FaInfoCircle },
   { label: 'Contact', href: '/contact', icon: FaEnvelope },
];

export const userLinks: NavLink[] = [
   { label: 'Profile', href: '/profile', icon: FaUser },
   { label: 'Orders', href: '/orders', icon: FaBoxOpen },
   { label: 'Favorites', href: '/favorites', icon: FaHeart },
];

export const appBarLinks: NavLink[] = [
   { label: 'Orders', href: '/app/orders/today', icon: BsClipboardCheck },
   { label: 'Collectibles', href: '/app/collectibles', icon: PiHandCoins },
   { label: 'Upcoming', href: '/app/orders/upcoming', icon: GiChickenOven },
   { label: 'Expenses', href: '/app/expenses', icon: FaRegMoneyBillAlt },
   { label: 'Menu', href: '/app/menu', icon: IoFastFoodOutline },
   { label: 'Customer', href: '/app/customers', icon: RiContactsBookLine },
   { label: 'Reports', href: '/app/reports', icon: BsGraphUpArrow },
];
