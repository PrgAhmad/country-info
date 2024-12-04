import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";

import { useState } from "react";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const menus = [
    { name: "Home", icon: <IoHome className="text-[1rem]" /> },
    { name: "About", icon: <FaUser /> },
    { name: "Contact", icon: <IoCall className="text-[1rem]" /> },
    { name: "Country", icon: <FaGlobe /> },
  ];

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
      <span className="hidden sm:flex gap-6">
        {menus.map((menu) => {
          return (
            <NavLink
              to={`/${
                menu.name.toLowerCase() === "home"
                  ? ""
                  : menu.name.toLowerCase()
              }`}
              className="flex gap-2 items-center hover:text-blue-600 text-md font-semibold"
            >
              <span>{menu.icon}</span>
              {menu.name}
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
              to={`/${
                menu.name.toLowerCase() === "home"
                  ? ""
                  : menu.name.toLowerCase()
              }`}
              className="hover:text-blue-600 text-md font-semibold"
            >
              <div className="flex gap-2 items-center justify-start w-[5rem]">
                {" "}
                <span>{menu.icon}</span>
                {menu.name}
              </div>
            </NavLink>
          );
        })}
      </span>
    </nav>
  );
};
