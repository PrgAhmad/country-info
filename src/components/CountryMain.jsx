import { FaMapLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

export const CountryMain = ({ item }) => {
  const { capital, flags, name, population, region, area, maps } = item;
  const flagsImage = flags.png;
  const countryName = name.common;
  const capitalName = capital[0];
  const mapsLink = maps.googleMaps;
  
  return (
    <div
      className={`text-white text-sm w-[21rem] px-4 py-8 bg-[#585f72] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-linear cursor-pointer pb-16 relative`}
    >
      <div className="flex justify-between">
        <h3 className="text-2xl mb-4">{countryName}</h3>
        <img src={flagsImage} alt="" srcset="" className="h-[3rem] w-[5rem]" />
      </div>
      <p>
        <span className="text-gray-400">Capital: </span>
        {capitalName}
      </p>
      <p>
        <p>
          <span className="text-gray-400">Region: </span>
          {region}
        </p>
        <span className="text-gray-400">Population: </span>
        {population}
      </p>
      <p>
        <span className="text-gray-400">Area: </span>
        {area}
      </p>
      <a
        href={mapsLink}
        className="text-3xl absolute bottom-5 right-5 hover:text-blue-600"
      >
        <FaMapLocationDot />
      </a>
      <button className="bg-[#48484864] px-2 rounded-md border-[#6e6e6ec8] border-[0.2px] text-[0.7rem] h-[1.8rem] w-[6rem] flex items-center justify-center gap-2 hover:border-[#8d8a8a] hover:scale-105 mt-4 absolute bottom-5">
        View More <FaArrowRight />
      </button>
    </div>
  );
};
