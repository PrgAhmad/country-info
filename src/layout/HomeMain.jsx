import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HomeMain = () => {



  return (
    <section className="w-full mb-16 px-[1rem] py-[3rem] lg:px-[14rem] h-[30rem] lg:h-[25rem] flex justify-between items-center flex-col lg:flex-row">
      <div className="flex flex-col gap-6 justify-center h-full md:w-[50%] ">
        <h1 className="text-white text-3xl font-semibold">
          Explore the World, One <br /> Country at a Time.
        </h1>
        <p className="text-gray-500 text">
          Discover the history, culture, and beauty of every nation. Sort,
          search, and filter through countries to find the details you need.
        </p>
        <NavLink to={"/country"} >
          <button className="text-[#ffffffc8] px-2 rounded-md bg-[#48484864] border-[#6e6e6ec8] border-[0.2px] text-[0.8rem] h-[2.3rem] w-[8rem] flex items-center justify-center gap-2 hover:border-[#8d8a8a] hover:scale-105">
          <p>Start Exploring</p>
          <FaArrowRight />
          </button>
        </NavLink>
      </div>
      <div>
        <img src="world.png" className="h-[15rem]" />
      </div>
    </section>
  );
};
