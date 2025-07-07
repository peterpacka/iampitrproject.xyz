"use client";

import useIsMobile from "@/hooks/isMobile";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navlinks = [
  {
    label: "About me",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Links",
    href: "/links",
  },
];

const Header = ({ avatar_url }: { avatar_url: string }) => {
  const isMobile = useIsMobile();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const shouldShowMenu = (isMobile && showMobileMenu) || !isMobile;

  return (
    <motion.header
      layout
      className="w-full min-h-[4.5rem] z-50 bg-[#101214]/5 backdrop-blur-md fixed top-0 left-0 py-3 border-b border-zinc-900 select-none"
    >
      <nav className="relative max-md:flex-col max-w-[1200px] mx-auto flex justify-between items-center py-2 max-md:gap-y-4 max-sm:px-5 px-16 lg:px-10">
        <div className="flex-1 flex justify-between items-center w-full">
          <Link
            draggable={false}
            className="text-xl md:text-3xl font-bold flex items-center gap-1 md:gap-2"
            href="/"
            onClick={() => {
              if (isMobile && showMobileMenu) setShowMobileMenu(false);
            }}
          >
            <img className="h-6 md:h-8 rounded-full" src={avatar_url} />
            iampitrproject.xyz
          </Link>
          <button
            onClick={() => setShowMobileMenu((prev) => !prev)}
            className="md:hidden flex justify-center items-center cursor-pointer"
          >
            {showMobileMenu ? <X /> : <Menu />}
          </button>
        </div>
        {shouldShowMenu && (
          <motion.ul
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0 }}
            className="flex-1 flex max-md:flex-col justify-center items-center gap-y-6 gap-x-10"
          >
            {navlinks.map((link) => (
              <li
                className="text-xl font-bold hover:scale-[1.02] px-1 hover:skew-2 transition-all duration-100 relative before:absolute hover:before:w-full before:w-1/2 before:-bottom-0.5 before:h-[0.15rem] hover:before:h-full hover:text-white before:-z-10 before:bg-blue-700 before:transition-all before:duration-300"
                key={link.href}
              >
                <Link
                  onClick={() => {
                    if (isMobile) setShowMobileMenu(false);
                  }}
                  draggable={false}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
