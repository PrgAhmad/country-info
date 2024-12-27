import { useEffect, useState } from "react";
import { useNavigate, useParams, useRouteError } from "react-router-dom";
import { getCountryByName } from "../api/countryHomeApi";
import { FaArrowLeft, FaMapMarkerAlt, FaMars, FaVenus } from "react-icons/fa";
import { ErrorPage } from "./ErrorPage";
import { MdPeopleAlt } from "react-icons/md";

export const CountryDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(false);
  window.scrollTo(0, 0);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getCountryByName(name);
        const data = res[0];
        setCountry(data);
      } catch (e) {
        console.log(e);
        setError(true);
      }
    };
    getData();
  }, []);
  if (country !== null) {
    console.log(country.flags.png);
  }

  if (country === null) {
    if (error) {
      return <ErrorPage />;
    } else {
      return (
        <div className="h-screen grid place-items-center">
          <div className="loader"></div>
        </div>
      );
    }
  } else {
    const startOfWeek = country?.startOfWeek;
    const weeksStartDay =
      startOfWeek.charAt(0).toUpperCase() + startOfWeek.slice(1);

    return (
      <section className="h-auto mb-[4rem] sm:mb-[4rem] pb-4 mt-[6rem] sm:mt-[6rem] flex flex-col gap-4 justify-center items-center w-screen px-4">
        <div className="relative h-auto flex sm:items-center my-4 gap-12 flex-col lg:flex-row p-8 text-white text-sm w-[90vw] lg:w-[70rem] px-4 sm:px-12 py-8 bg-[#585f72] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600 hover:border-gray-400 cursor-pointer">
          <div className="flex flex-col items-center gap-1">
            <img
              src={country?.flags.png}
              alt={country?.name.common}
              className="max-w-[80vw] max-h-[20rem] sm:w-[25rem] sm:h-[16rem] rounded-md"
            />
            <h1 className="text-[2.2rem] leading-8 font-semibold mb-4 flex gap-4 flex-wrap mt-4">
              {country?.name.common}
              <a
                href={country?.maps.googleMaps}
                className="text-[0.9rem] text-gray-400 hover:text-blue-800 border border-gray-400 p-[0.4rem] rounded-full hover:border-blue-500 grid place-content-center"
              >
                <FaMapMarkerAlt />
              </a>
            </h1>
            <p className="text-[1.25rem]">{country?.name.official}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[2rem] font-semibold mb-3 text-center">
              {country?.capital}
            </p>
            <div className="flex items-center gap-6 justify-center text-white py-[0.35rem] px-3 rounded-md text-[0.9rem] h-auto tracking-wide">
              <span className="flex flex-col items-center gap-2 justify-center text-white py-[0.35rem] px-3 rounded-md bg-[#48484864] border-[#6e6e6ec8] border-[0.2px] text-[0.9rem] h-auto tracking-wide">
                <p className="text-[1rem]">Region</p>
                <p className="text-[1.25rem]">{country?.region}</p>
              </span>
              <span className="flex flex-col items-center gap-2 justify-center text-white py-[0.35rem] px-3 rounded-md bg-[#48484864] border-[#6e6e6ec8] border-[0.2px] text-[0.9rem] h-auto tracking-wide">
                <p className="text-[1rem]">Continent</p>
                <p className="text-[1.25rem]">{country?.continents}</p>
              </span>
              <span className="flex flex-col items-center gap-2 justify-center text-white py-[0.35rem] px-3 rounded-md bg-[#48484864] border-[#6e6e6ec8] border-[0.2px] text-[0.9rem] h-auto tracking-wide">
                <p className="text-[1rem]">Sub-region</p>
                <p className="text-[1.25rem]">{country?.subregion}</p>
              </span>
            </div>
            <p className="m-auto w-auto flex gap-2 text-[#3665ff] bg-[#1A1919] border border-[#1f3788] text-lg px-2 py-[0.35rem] rounded-md">
              <span className="text-2xl">
                <MdPeopleAlt />
              </span>
              {country?.population}
            </p>
            <p className="text-[1.25rem]">
              {country?.area} km<sup>2</sup>
            </p>

            <p className="text-[1.25rem]">{weeksStartDay}</p>
            <p className="text-[1.25rem]">{country?.timezones}</p>
            <p className="flex items-center gap-2 text-[1.2rem] m-auto">
              <span className="bg-[#48484864] border-[#6e6e6ec8] border-[0.2px] px-2 py-2 rounded-md flex gap-2">
              <FaVenus/>
                {country?.demonyms?.eng?.f}
              </span>
              <span>-</span>
              <span className="bg-[#48484864] border-[#6e6e6ec8] border-[0.2px] px-2 py-2 rounded-md flex gap-2">
                <FaMars/>
                {country?.demonyms?.eng?.m}
              </span>
            </p>
            <div className="flex gap-2 flex-wrap justify-center">
              <span className="text-[1.3rem] w-full text-center mb-2 font-semibold">Borders</span>
              {country?.borders.map((border) => {
                return (
                  <p className="bg-[#48484864] border-[#6e6e6ec8] border-[0.2px] px-3 py-1 rounded-md text-[1.1rem]">
                    {border}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <button
          className="z-50 text-blue-500 px-2 rounded-md border-blue-500 border-[0.2px] text-[0.8rem] h-[2.05rem] w-[7rem] flex items-center justify-center gap-3 hover:border-[#8d8a8a] hover:text-[#8d8a8a] hover:scale-105 font-medium"
          onClick={() => navigate(-1)}
        >
          Go Back <FaArrowLeft />
        </button>
      </section>
    );
  }
};
