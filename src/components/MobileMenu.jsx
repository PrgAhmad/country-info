import { FaGlobe, FaUser } from "react-icons/fa6";
import { IoCall, IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const MobileMenu = ({ menu, scrollToTop }) => {
  const menus = [
    { name: "Home", icon: <IoHome className="text-[1rem]" /> },
    { name: "About", icon: <FaUser /> },
    { name: "Contact", icon: <IoCall className="text-[1rem]" /> },
    { name: "Country", icon: <FaGlobe /> },
  ];

  return (
    <>
      <span
        className={`absolute z-40 left-0 top-[4rem] ${menu ? "block" : "hidden"} h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 
`}
      ></span>
      <span
        className={`absolute z-50 top-[4rem] ${
          menu ? "right-0" : "right-[-15rem]"
        } flex sm:hidden  gap-4 none w-screen h-[90vh]  transition-right duration-500 linear`}
      >
        <span className="w-full h-full bg-transparent"></span>
        <span className="bg-[#232323] flex flex-col gap-4 py-4 justify-start w-[15rem] pl-4">
          {menus.map((menu) => {
            return (
              <NavLink
                to={`/${
                  menu.name.toLowerCase() === "home"
                    ? ""
                    : menu.name.toLowerCase()
                }`}
                onClick={scrollToTop}
                className="hover:text-blue-600 hover:scale-110 font-semibold"
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
      </span>
    </>
  );
};
