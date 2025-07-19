import { navLinks } from "@/constants/nav-links";
import Link from "next/link";
import React from "react";

const PublicFooter: React.FC = () => {
  return (
    <footer className="sticky bottom-0 bg-gray-100 text-gray-500 text-xs">
      <div className="mx-auto max-w-7xl flex items-center justify-center p-2">
        <p>© {new Date().getFullYear()} Bebeng&apos;s Kitchen</p>
        <span className="mx-2">|</span>

        <nav className="flex items-center space-x-4">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              <Link href={link.href} className="hover:text-gray-700 transition-colors">
                {link.label}
              </Link>
              {index < navLinks.length - 1 && <span>|</span>}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default PublicFooter;
