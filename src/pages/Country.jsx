import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/countryHomeApi";
import { CountryMain } from "../components/CountryMain";
import { FaSearch } from "react-icons/fa";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  
  useEffect(() => {
    startTransition(async () => {
      const data = await getCountryData();
      setCountry(data);
    });
  }, []);

  if (isPending) {
    return (
      <div className="h-screen grid place-items-center">
        <div className="loader"></div>
      </div>
    );
  } else {
    return (
      <section className="min-h-screen py-12 ">
        <div className="flex justify-between mb-12 md:px-[14rem] sm:flex-row flex-col gap-4 px-3 items-center">
          <div 
            className="flex items-center justify-between px-3 outline-none text-[1.1rem] bg-[#585f72] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-gray-600 hover:border-gray-400 border border-[#6e6e6ec8] text-white text-sm placeholder:text-[#6e6e6ec8] placeholder:text-[1rem] rounded-md h-[3rem]"
            >
          <input
            type="text"
            id="name"
            placeholder="India, Pakistan, Bangladesh"
            className="outline-none bg-transparent text-white text-md placeholder:text-[#6e6e6ec8] placeholder:text-[1.1rem] h-[3rem] w-[17rem]"
          />
          <FaSearch />
          </div>
          <div className="w-[11rem] flex justify-center  outline-none text-[1.1rem] bg-[#585f72] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-gray-600 hover:border-gray-400 border border-[#6e6e6ec8] rounded-md ">
            <select
              name=""
              id=""
              className="outline-none bg-transparent text-white text-md h-[3rem] w-[10rem]"
            >
              <option className="bg-[#585f72]" value="All">
                All
              </option>
              <option className="bg-[#585f72]" value="Asia">
                Asia
              </option>
              <option className="bg-[#585f72]" value="Europe">
                Europe
              </option>
              <option claassName="bg-[#585f72]" value="North America">
                North America
              </option>
              <option className="bg-[#585f72]" value="South America">
                South America
              </option>
              <option className="bg-[#585f72]" value="Africa">
                Africa
              </option>
              <option className="bg-[#585f72]" value="Oceania">
                Oceania
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:px-[14rem] mb-10">
          {country.map((item, idx) => {
            return <CountryMain item={item} />;
          })}
        </div>
      </section>
    );
  }
};
