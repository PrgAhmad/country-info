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

  if (menu) {
    window.onscroll = () => {
      window.scrollTo(0, 0);
    };
  } else {
    window.onscroll = null;
  }

  return (
    <>
      <span
        className={`absolute z-40 left-0 top-[4rem] ${
          menu ? "block" : "hidden"
        } h-[90vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 transition-all duration-[500ms] ease-in-out
`}
      ></span>
      <span
        className={`absolute z-50 top-[4rem] ${
          menu ? "right-[-5rem]" : "right-[-40rem]"
        } flex sm:hidden  gap-4 none  h-[90vh]  transition-all duration-[500ms] ease-in-out`}
      >
        <span className="bg-[#232323] flex flex-col gap-4 py-4 justify-start w-[20rem] pl-8">
          {menus.map((opt) => {
            return (
              <NavLink
                key={opt.name}
                to={`/${
                  opt.name.toLowerCase() === "home"
                    ? ""
                    : opt.name.toLowerCase()
                }`}
                onClick={scrollToTop}
                className="hover:text-blue-600 hover:scale-105 font-semibold"
              >
                <div
                  className={` ${
                    menu && "animate"
                  } flex gap-2 items-center justify-start w-[5rem]`}
                >
                  {" "}
                  <span>{opt.icon}</span>
                  {opt.name}
                </div>
              </NavLink>
            );
          })}
        </span>
      </span>
    </>
  );
};
