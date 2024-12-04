import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlinePublic } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";

export const CountryMain = ({ item }) => {
  const { capital, flags, name, population, region, area, maps } = item;
  const flagsImage = flags.png;
  const countryName = name.common;
  const capitalName = capital[0];
  const mapsLink = maps.googleMaps;

  return (
    <div className="text-white text-sm w-[21rem] px-4 py-8 bg-[#585f72] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-linear cursor-pointer pb-16 relative">
      <div className="flex justify-between gap-2">
        <h3 className="text-[1.65rem] leading-8 font-medium mb-4">
          {countryName}
        </h3>
        <img
          src={flagsImage}
          alt=""
          srcset=""
          className="h-[3.2rem] w-[5.5rem]"
        />
      </div>
      <p className="flex flex-col text-[1.2rem]">
        <span className="text-gray-400 text-[0.78rem]">Capital</span>
        {capitalName}
      </p>

      <p className="flex gap-2 absolute top-[48%] text-[#3665ff] right-4 bg-[#1A1919] border border-[#1f3788] px-2 py-[0.35rem] rounded-md">
        <span className="text-xl">
          <MdPeopleAlt />
        </span>
        {population}
      </p>
      <p className="flex flex-col text-[1.2rem] my-3">
        <span className="text-gray-400 text-[0.78rem]">Area</span>
        <p>
          {area}{" "}
          <span className="text-[0.7rem]">
            Km<sup>2</sup>
          </span>
        </p>
      </p>
      <div className="w-[90%] flex items-center justify-between absolute bottom-4">
        <button className="text-blue-500 px-2 rounded-md border-blue-500 border-[0.2px] text-[0.75rem] h-[2.05rem] w-[7rem] flex items-center justify-center gap-2 hover:border-[#8d8a8a] hover:text-[#8d8a8a] hover:scale-105">
          View More <FaArrowRight />
        </button>
        <p className="flex items-center gap-2 italic text-white py-[0.35rem] px-3 rounded-md bg-[#48484864] border-[#6e6e6ec8] border-[0.2px] text-[0.9rem] h-auto tracking-wide">
          <span className="text-[1rem]">
            <MdOutlinePublic />
          </span>
          {region}
        </p>
        <a
          href={mapsLink}
          className="text-[1.1rem] text-gray-400 hover:text-blue-800 border border-gray-400 p-2 rounded-full hover:border-blue-500"
        >
          <FaMapMarkerAlt />
        </a>
      </div>
    </div>
  );
};
