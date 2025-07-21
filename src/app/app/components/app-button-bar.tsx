import { AppButtonItem } from '@/types/app-button.types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

interface Props {
   buttons: AppButtonItem[];
}

const AppButtonBar = ({ buttons }: Props) => {
   const pathname = usePathname();
   return (
      <footer className="flex items-center justify-center bg-amber-50 shadow-md px-4 h-[60px] lg:h-[70px] border-t">
         <nav className="flex items-center space-x-2">
            {buttons.map((item) => {
               const { label, icon: Icon } = item;
               return item.type === 'button' ? (
                  <button
                     key={label}
                     onClick={item.onClick}
                     className="flex flex-col items-center justify-center w-[90px] h-[60px] border border-amber-100 bg-amber-50 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
                  >
                     <Icon className="text-xl mb-1" />
                     <p className="text-sm">{label}</p>
                  </button>
               ) : (
                  <Link
                     key={label}
                     href={item.href}
                     className={`flex flex-col items-center justify-center w-[90px] h-[60px] border border-amber-100 bg-amber-50 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer ${
                        pathname === item.href ? '-translate-y-[20px]' : ''
                     }`}
                  >
                     <Icon className="text-xl mb-1" />
                     <p className="text-sm">{label}</p>
                  </Link>
               );
            })}
         </nav>
      </footer>
   );
};

export default AppButtonBar;
