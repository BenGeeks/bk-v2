import React from "react";
import Link from "next/link";
import { navLinks } from "@/constants/nav-links";

const PublicHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Left Side - Logo & Company Name */}
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-gray-300 rounded-full" /> {/* Placeholder for logo */}
          <span className="text-lg font-semibold">{`Bebeng's Kitchen`}</span>
        </div>

        {/* Right Side - Navigation Links */}
        <nav className="flex space-x-6">
          {navLinks?.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default PublicHeader;
