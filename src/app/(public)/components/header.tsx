"use client";

import { useSessionContext } from "@/context/session-context";
import { navLinks } from "@/constants/nav-links";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const PublicHeader: React.FC = () => {
  const session = useSessionContext();

  const dynamicNavLinks = [...navLinks, session ? { label: "Dashboard", href: "/dashboard" } : { label: "Login", href: "/login" }];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-gray-300 rounded-full" />
          <span className="text-lg font-semibold">{`Bebeng's Kitchen`}</span>
        </div>

        <nav className="flex items-center space-x-6">
          {dynamicNavLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors">
              {link.label}
            </Link>
          ))}

          {session && (
            <button onClick={() => signOut({ callbackUrl: "/" })} className="text-red-600 hover:text-red-800 transition-colors cursor-pointer">
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default PublicHeader;
