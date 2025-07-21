'use client';

import { appBarLinks } from '@/constants/nav-links';
import { GiHamburgerMenu } from 'react-icons/gi';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import React, { useState } from 'react';
import Link from 'next/link';

const AppHeaderBar = () => {
   const pathname = usePathname();
   const [showNavBar, setShowNavBar] = useState(false);

   return (
      <header className="flex items-center justify-between bg-blue-50 shadow-md px-4 h-[60px] lg:h-[80px] border-b-2 border-gray-900 ">
         <div className="flex items-center space-x-2 border px-6 py-1 rounded-full bg-amber-50">
            <h1 className="font-[Kaushan_Script] text-gray-800 text-[22px] md:text-[24px] lg:text-[26px]">{`Bebeng's Kitchen`}</h1>
         </div>

         {/* Desktop Navigation */}
         <nav className="hidden lg:flex items-center space-x-2">
            {appBarLinks.map(({ label, href, icon: Icon }) => (
               <Link
                  key={href}
                  href={href}
                  className={`flex flex-col items-center justify-center w-[90px] h-[60px] border border-gray-700 bg-beige bg-amber-50 transition-colors 
              ${
                 pathname === href ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white'
              }`}
               >
                  <Icon className="text-xl mb-1" />
                  <p className="text-sm">{label}</p>
               </Link>
            ))}

            <button
               onClick={() => signOut({ callbackUrl: '/home' })}
               className="flex flex-col items-center justify-center w-[80px] h-[60px] border border-gray-700 bg-beige hover:bg-gray-700 hover:text-white bg-amber-50 cursor-pointer transition-colors"
            >
               <GiHamburgerMenu className="text-xl mb-1" />
               <p className="text-sm">Logout</p>
            </button>
         </nav>

         {/* Mobile Hamburger */}
         <button
            className="lg:hidden p-2 border border-gray-700 bg-beige rounded hover:bg-gray-700 hover:text-white"
            onClick={() => setShowNavBar((prev) => !prev)}
         >
            <GiHamburgerMenu className="text-2xl" />
         </button>

         {/* Mobile Nav */}
         <nav
            className={`absolute top-[60px] right-0 w-[120px] bg-amber-50 px-2 flex flex-col gap-1 shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-50
        ${showNavBar ? 'max-h-[600px] py-2' : 'max-h-0 py-0'}`}
         >
            {appBarLinks.map(({ label, href, icon: Icon }) => (
               <Link
                  key={href}
                  href={href}
                  onClick={() => setShowNavBar(false)}
                  className={`flex flex-col items-center justify-center p-2 border border-gray-700 hover:bg-amber-100 transition-colors ${
                     pathname === href
                        ? 'bg-gray-700 text-white'
                        : 'hover:bg-gray-700 hover:text-white'
                  }`}
               >
                  <Icon className="text-xl mb-1" />
                  <p className="text-sm">{label}</p>
               </Link>
            ))}
            <button
               onClick={() => signOut({ callbackUrl: '/home' })}
               className="w-full flex flex-col items-center justify-center p-2 border border-gray-700 hover:bg-amber-100 transition-colors"
            >
               <GiHamburgerMenu className="text-xl mb-1" />
               <p className="text-sm">Logout 2</p>
            </button>
         </nav>
      </header>
   );
};

export default AppHeaderBar;
