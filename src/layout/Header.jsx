import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";

import { useState } from "react";
import { MobileMenu } from "../components/MobileMenu";
import { DesktopMenu } from "../components/DesktopMenu";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const scrollToTop = () => {
    setMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed z-50 bg-[#232323] w-full px-6 lg:px-[14rem] md:h-[4rem] text-white flex justify-between items-center sm:flex-nowrap flex-wrap min-h-[4rem] gap-4 py-4">
      <span className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-wide">WorldAtlas</h1>
        <span onClick={() => setMenu(!menu)}>
          {menu ? (
            <FaPlus className="sm:hidden text-3xl rotate-45" />
          ) : (
            <IoMenu className="sm:hidden text-3xl" />
          )}
        </span>
      </span>
      <MobileMenu menu={menu} scrollToTop={scrollToTop} />
      <DesktopMenu scrollToTop={scrollToTop} />
    </nav>
  );
};
