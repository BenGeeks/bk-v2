import { NavLink } from '@/types/nav.types';
import {
   FaHome,
   FaUtensils,
   FaInfoCircle,
   FaEnvelope,
   FaUser,
   FaBoxOpen,
   FaHeart,
} from 'react-icons/fa';

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
