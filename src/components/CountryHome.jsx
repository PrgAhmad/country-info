import countryData from "../api/countryData.json";
import { MdPeopleAlt } from "react-icons/md";

export const CountryHome = () => {
  const { countriesFacts } = countryData;

  return (
    <div className="flex flex-wrap justify-center gap-8 md:px-[14rem] mb-10">
      {countriesFacts.map(
        ({ name, capital, population, area, fact, image }) => {
          return (
            <div className="relative text-white text-sm w-[21rem] px-4 py-8 bg-[#585f72] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-linear cursor-pointer">
              <div className="flex justify-between">
                <h3 className="text-[1.65rem] font-medium mb-4">{name}</h3>
                <img
                  src={image}
                  alt=""
                  srcset=""
                  className="h-[3rem] w-[5rem]"
                />
              </div>
              <p className="flex flex-col text-[1.2rem]">
                <span className="text-gray-400 text-[0.78rem]">Capital</span>
                {capital}
              </p>
              <p className="flex gap-2 absolute top-[40%] text-[#3665ff] right-4 bg-[#1A1919] border border-[#1f3788] px-2 py-[0.35rem] rounded-md">
                <span className="text-xl">
                  <MdPeopleAlt />
                </span>
                {population}
              </p>
              <p className="flex flex-col text-[1.2rem] mt-3">
                <span className="text-gray-400 text-[0.78rem]">Area</span>
                <p>
                  {area} <span className="text-[0.7rem]">Km<sup>2</sup></span>
                </p>
              </p>
              <p className="mt-8 italic text-white p-2 rounded-md bg-[#48484864] border-[#6e6e6ec8] border-[0.2px] text-[0.9rem] h-auto w-full tracking-wide">
                <q>{fact}</q>
              </p>
            </div>
          );
        }
      )}
    </div>
  );
};
