import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LuMailPlus } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const contact = [
    {
      icon: <FaLocationDot />,
      title: "Find us",
      text: "Mumbai Maharashtra",
    },
    {
      icon: <BsFillTelephoneFill />,
      title: "Call us",
      text: "+91 1234567890",
    },
    {
      icon: <LuMailPlus />,
      title: "Email us",
      text: "ahmad123@gmail.com",
    },
  ];

  return (
    <footer className="">
      <section className="bg-[#1a1919] w-full h-auto py-2 flex flex-row justify-center flex-wrap sm:flex-row lg:justify-between items-center gap-4 px-[1rem] lg:px-[14rem]">
        {contact.map(({ icon, title, text }) => {
          return (
            <div className="flex gap-3 w-[10rem] items-center cursor-pointer scale-90 sm:scale-100">
              <span className="text-2xl text-blue-800">{icon}</span>
              <span>
                <p className="text-[0.7rem] font-thin text-slate-400">{text}</p>
                <p className="text-sm font-bold text-white">{title}</p>
              </span>
            </div>
          );
        })}
      </section>
      <nav className="bg-[#232323] text-sm w-full px-[1rem] lg:px-[14rem] py-3 h-auto text-slate-400 flex flex-col justify-center gap-2 lg:flex-row lg:justify-between items-center">
        <p className="text-center">
          Copyright &copy; 2024 All Rights Reserved
          <span className="text-blue-700 ml-2">WorldAtlas</span>
        </p>
        <span className="flex gap-4">
          <NavLink to={"/"} onClick={scrollToTop}>Home</NavLink>
          <NavLink to={"/about"} onClick={scrollToTop}>About</NavLink>
          <NavLink to={"/contact"} onClick={scrollToTop}>Contact</NavLink>
          <NavLink to={"/country"} onClick={scrollToTop}>Country</NavLink>
        </span>
      </nav>
    </footer>
  );
};
