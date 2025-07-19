'use client';

import { FaTachometerAlt, FaSignInAlt, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { useSessionContext } from '@/context/session-context';
import { navLinks, userLinks } from '@/constants/nav-links';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// onClick={() => signIn("facebook")}

const PublicHeader = () => {
   const pathname = usePathname();
   const session = useSessionContext();
   const [showNavBar, setShowNavBar] = useState<boolean>(false);
   const [showUserNav, setShowUserNav] = useState<boolean>(false);

   const dynamicNavLinks = [
      ...navLinks,
      session
         ? { label: 'Dashboard', href: '/dashboard', icon: FaTachometerAlt }
         : { label: 'Login', href: '/login', icon: FaSignInAlt },
   ];

   return (
      <header
         className="sticky top-0 z-50 bg-white shadow-md"
         onMouseLeave={() => setShowNavBar(false)}
      >
         <div className="flex items-center justify-between h-[60px] mx-auto  max-w-7xl  px-4">
            <div className="flex items-center space-x-3">
               <span className="font-[Kaushan_Script] text-gray-800 text-[36px]">{`Bebeng's Kitchen`}</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
               {navLinks.map(({ label, href, icon: Icon }) => (
                  <Link
                     key={href}
                     href={href}
                     className={`flex gap-2 items-center text-gray-700 hover:text-gray-900 transition-colors pb-1 ${
                        pathname === href
                           ? 'border-b-2 border-gray-800'
                           : 'border-b-2 border-transparent'
                     }`}
                  >
                     <Icon className="text-lg" />
                     {label}
                  </Link>
               ))}

               {session ? (
                  <>
                     <Link
                        key="dashboard"
                        href="dashboard"
                        className={`flex gap-2 items-center text-gray-700 hover:text-gray-900 transition-colors pb-1 ${
                           pathname === 'dashboard'
                              ? 'border-b-2 border-gray-800'
                              : 'border-b-2 border-transparent'
                        }`}
                     >
                        <FaTachometerAlt className="text-lg" />
                        Dashboard
                     </Link>
                     {session.user.image ? (
                        <div
                           className="relative h-10 w-10 cursor-pointer rounded-full overflow-hidden transition-all duration-300"
                           onClick={() => setShowUserNav((prev) => !prev)}
                        >
                           <Image
                              src={session.user.image}
                              alt={session.user.name || 'User'}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-110"
                           />
                        </div>
                     ) : (
                        <button
                           onClick={() => signOut({ callbackUrl: '/home' })}
                           className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                        >
                           <FaSignOutAlt className="text-lg" />
                           <span>Logout</span>
                        </button>
                     )}
                  </>
               ) : (
                  <button
                     onClick={() => signIn('facebook')}
                     className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                  >
                     <FaSignOutAlt className="text-lg" />
                     <span>Log In</span>
                  </button>
               )}
            </nav>
            <nav className="md:hidden items-center space-x-3">
               {session && session.user ? (
                  <div className="flex items-center space-x-2">
                     <span className="text-gray-700 font-medium">{session.user.name}</span>
                     {session.user.image && (
                        <div
                           className="relative h-10 w-10 cursor-pointer rounded-full overflow-hidden transition-all duration-300"
                           onClick={() => setShowNavBar((prev) => !prev)}
                        >
                           <Image
                              src={session.user.image}
                              alt={session.user.name || 'User'}
                              fill
                              className="object-cover transition-transform duration-300 hover:scale-110"
                           />
                        </div>
                     )}
                  </div>
               ) : (
                  <button
                     className="text-gray-900 text-2xl p-1 rounded hover:bg-amber-50 border border-white hover:border-amber-100 cursor-pointer transition-all duration-300 ease-in-out"
                     onClick={() => setShowNavBar((prev) => !prev)}
                  >
                     <FaBars />
                  </button>
               )}
            </nav>

            <nav
               className={`absolute top-[60px] right-0 w-48 rounded-bl-lg bg-white shadow-lg z-[100] overflow-hidden transition-all duration-300 ease-in-out ${
                  showNavBar ? 'max-h-[600px] py-2 border-slate-50 border' : 'max-h-0 py-0'
               }`}
               onMouseLeave={() => setShowNavBar(false)}
            >
               <div className="flex flex-col gap-1 p-2">
                  {dynamicNavLinks.map(({ label, href, icon: Icon }) => (
                     <Link
                        key={href}
                        href={href}
                        className="flex justify-start gap-2 items-center border-b border-b-gray-700 hover:border-amber-100 hover:bg-amber-50 w-full p-2 text-gray-700 hover:text-gray-900 transition-colors"
                     >
                        <Icon className="text-xl text-gray-700" />
                        {label}
                     </Link>
                  ))}

                  {session && (
                     <>
                        {userLinks.map(({ label, href, icon: Icon }) => (
                           <Link
                              key={href}
                              href={href}
                              className="flex justify-start gap-2 items-center border-b border-b-gray-700 hover:bg-amber-50 w-full p-2 text-gray-700 hover:text-gray-900 transition-colors"
                           >
                              <Icon className="text-xl text-gray-700" />
                              {label}
                           </Link>
                        ))}
                        <button
                           onClick={() => signOut({ callbackUrl: '/' })}
                           className="flex justify-start gap-2 items-center border-b border-b-gray-700 hover:bg-amber-50 w-full p-2 text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                        >
                           <FaSignOutAlt className="text-xl text-gray-700" />
                           <span>Logout</span>
                        </button>
                     </>
                  )}
               </div>
            </nav>
            <nav
               className={`absolute top-[60px] right-0 w-48 rounded-bl-lg bg-white shadow-lg z-[100] overflow-hidden transition-all duration-300 ease-in-out ${
                  showUserNav ? 'max-h-[600px] py-2 border-slate-50 border' : 'max-h-0 py-0'
               }`}
               onMouseLeave={() => setShowUserNav(false)}
            >
               <div className="flex flex-col gap-1 p-2">
                  {userLinks.map(({ label, href, icon: Icon }) => (
                     <Link
                        key={href}
                        href={href}
                        className="flex justify-start gap-2 items-center border-b border-b-gray-700 hover:bg-amber-50 w-full p-2 text-gray-700 hover:text-gray-900 transition-colors"
                     >
                        <Icon className="text-xl text-gray-700" />
                        {label}
                     </Link>
                  ))}

                  <button
                     onClick={() => signOut({ callbackUrl: '/' })}
                     className="flex justify-start gap-2 items-center border-b border-b-gray-700 hover:bg-amber-50 w-full p-2 text-red-700 hover:text-red-900 transition-colors cursor-pointer"
                  >
                     <FaSignOutAlt className="text-xl text-red-700" />
                     <span>Logout 3</span>
                  </button>
               </div>
            </nav>
         </div>
      </header>
   );
};

export default PublicHeader;
