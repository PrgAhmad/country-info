import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

import { useState } from "react";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const menus = ["Home", "About", "Contact", "Country"];

  return (
    <nav className="bg-[#232323] w-full px-6 lg:px-[14rem] md:h-[4rem] text-white flex justify-between items-center sm:flex-nowrap flex-wrap h-full gap-4 py-4">
      <span className="w-full flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">WorldAtlas</h1>
        <span onClick={() => setMenu(!menu)}>
          {menu ? (
            <FaPlus className="sm:hidden text-3xl rotate-45" />
          ) : (
            <IoMenu className="sm:hidden text-3xl" />
          )}
        </span>
      </span>
      <span className="hidden sm:flex gap-4">
        {menus.map((menu) => {
          return (
            <NavLink
              to={`/${menu.toLowerCase() === "home" ? "" : menu.toLowerCase()}`}
              className="hover:text-blue-600 text-md"
            >
              {menu}
            </NavLink>
          );
        })}
      </span>
      <span
        className={`${
          menu ? "flex" : "hidden"
        } sm:hidden flex-col gap-4 none w-full items-center`}
      >
        {menus.map((menu) => {
          return (
            <NavLink
            to={`/${menu.toLowerCase() === "home" ? "" : menu.toLowerCase()}`}
            className="hover:text-blue-600"
            >
              {menu}
            </NavLink>
          );
        })}
      </span>
    </nav>
  );
};
