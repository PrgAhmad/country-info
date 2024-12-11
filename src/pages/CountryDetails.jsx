import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCountryByName } from "../api/countryHomeApi";
import { FaArrowLeft } from "react-icons/fa";

export const CountryDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await getCountryByName(name);
      const data = res[0];
      setCountry(data);
    };
    getData();
  }, []);
  if (country !== null) {
    console.log(country.flags.png);
  }

  return (
    <section className="h-auto mb-[8rem] pb-4 mt-[6rem] sm:mt-[6rem] flex flex-col gap-4 justify-center items-center w-screen">
      <div className="relative h-auto flex sm:items-center my-4 gap-6 flex-col sm:flex-row p-8 text-white text-sm w-auto px-4 py-8 bg-[#585f72] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600 hover:border-gray-400 cursor-pointer">
        <img
          src={country?.flags.png}
          alt={country?.name.common}
          className="w-[75vw] h-[17rem] sm:w-[25rem] sm:h-[16rem] rounded-md"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-[2.2rem] leading-8 font-semibold mb-4">
            {country?.name.common}
          </h1>
          <p className="text-[1.5rem]">{country?.capital}</p>
          <p>{country?.region}</p>
          <p>{country?.continents}</p>
          <p>{country?.population}</p>
          <p>{country?.area}</p>
          <p>{country?.maps.googleMaps}</p>
          <p>{country?.name.official}</p>
          <p>{country?.startOfWeek}</p>
          <p>{country?.subregion}</p>
          <p>{country?.timezones}</p>
          <p>
            {country?.demonyms?.eng?.f} - {country?.demonyms?.eng?.m}
          </p>
          <div className="flex gap-2">
            <span>Borders:</span>
            {country?.borders.map((border) => {
              return (
                <p className="bg-[#48484864] border-[#6e6e6ec8] border-[0.2px] px-2 rounded-md">
                  {border}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <button className="text-blue-600 px-1 font-semibold rounded-md flex justify-center items-center gap-2 border-blue-500 border-[0.1px] text-[0.9rem] h-[2.5rem] w-[10rem] hover:border-[#8d8a8a] hover:text-[#8d8a8a] hover:scale-105" onClick={() => navigate(-1)}>Back to Previous <FaArrowLeft /></button>
    </section>
  );
};
