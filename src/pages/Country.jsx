import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/countryHomeApi";
import { CountryMain } from "../components/CountryMain";
import { FaSearch } from "react-icons/fa";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [totalCountries, setTotalCountries] = useState(0);
  useEffect(() => {
    startTransition(async () => {
      const data = await getCountryData();
      setTotalCountries(data.length);
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
      <section className="min-h-screen py-12 mt-14">
        <div className="flex justify-between mb-12 md:px-[14rem] sm:flex-row flex-col gap-4 px-3 items-center">
          <div className="flex items-center justify-between px-3 outline-none text-[1.2rem] bg-[#585f72] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-gray-600 hover:border-gray-400 border border-[#6e6e6ec8] text-white text-sm placeholder:text-[#6e6e6ec8] placeholder:text-[1rem] rounded-md h-[2.8rem]">
            <input
              type="text"
              id="name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="India, Pakistan, Bangladesh"
              className="outline-none bg-transparent text-white text-md placeholder:text-[#6e6e6ec8] placeholder:text-[1.1rem] h-[3rem] w-[17rem]"
            />
            <FaSearch />
          </div>
          <div className="my-2 text-blue-600 text-[0.8rem] flex gap-4">
            <button className="text-gray-400 border-gray-500 hover:text-blue-600 hover:border-blue-700 border px-3 py-1 rounded-md">
              A to Z
            </button>
            <button className="text-gray-400 border-gray-500 hover:text-blue-600 hover:border-blue-700 border px-3 py-1 rounded-md">
              Z to A
            </button>
          </div>
          <div className="w-[11rem] flex justify-center  outline-none text-[1.1rem] bg-[#585f72] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-gray-600 hover:border-gray-400 border border-[#6e6e6ec8] rounded-md ">
            <span className="absolute top-[30%] right-[16%] text-slate-300 text-[0.75rem] ">
              {totalCountries}
            </span>
            <select
              name=""
              id=""
              onChange={(e) => setRegion(e.target.value)}
              className="outline-none bg-transparent text-white text-md h-[2.8rem] w-[10rem]"
            >
              <option className="bg-[#000000e8]" value="">
                All
              </option>
              <option className="bg-[#000000e8]" value="Asia">
                Asia
              </option>
              <option className="bg-[#000000e8]" value="Europe">
                Europe
              </option>
              <option className="bg-[#000000e8]" value="Americas">
                Americas
              </option>
              <option className="bg-[#000000e8]" value="Africa">
                Africa
              </option>
              <option className="bg-[#000000e8]" value="Oceania">
                Oceania
              </option>
              <option className="bg-[#000000e8]" value="Antarctic">
                Antarctic
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:px-[14rem] mb-10">
          {country.map((item) => {
            if (
              item.name.common.toLowerCase().includes(search.toLowerCase()) &&
              (region === "" || item.region === region)
            ) {
              return <CountryMain item={item} />;
            }
          })}
        </div>
      </section>
    );
  }
};
