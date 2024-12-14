import { FaGlobe, FaUser } from "react-icons/fa6";
import { IoCall, IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const DesktopMenu = ({ scrollToTop }) => {
  const menus = [
    { name: "Home", icon: <IoHome className="text-[1rem]" /> },
    { name: "About", icon: <FaUser /> },
    { name: "Contact", icon: <IoCall className="text-[1rem]" /> },
    { name: "Country", icon: <FaGlobe /> },
  ];

  return (
    <span className="hidden sm:flex gap-6">
      {menus.map((menu) => {
        return (
          <NavLink
            key={menu.name}
            to={`/${
              menu.name.toLowerCase() === "home" ? "" : menu.name.toLowerCase()
            }`}
            onClick={scrollToTop}
            className="flex gap-2 items-center hover:text-blue-600 text-md font-semibold"
          >
            <span>{menu.icon}</span>
            {menu.name}
          </NavLink>
        );
      })}
    </span>
  );
};
