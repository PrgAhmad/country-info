import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/countryHomeApi";
import { CountryMain } from "../components/CountryMain";
import { SearchCountry } from "../components/SearchCountry";
import { FaArrowUp } from "react-icons/fa";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [totalCountries, setTotalCountries] = useState(0);
  const [sorting, setSorting] = useState("asc");

  useEffect(() => {
    startTransition(async () => {
      const data = await getCountryData();
      setTotalCountries(data.length);
      setCountry([...data].sort((a, b) => (a.name.common > b.name.common ? 1 : -1)));
    });
  }, []);

  useEffect(() => {
    console.log(sorting);
    if (sorting === "asc") {
      setCountry(
        [...country].sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
      );
    } else if (sorting === "desc") {
      setCountry(
        [...country].sort((a, b) => (a.name.common < b.name.common ? 1 : -1))
      );
    }
  },[sorting]);

  if (isPending) {
    return (
      <div className="h-screen grid place-items-center">
        <div className="loader"></div>
      </div>
    );
  } else if (country.length !== 0) {
    console.log(country);
    return (
      <section className="min-h-screen py-12 mt-14 mb-16 relative">
        <button
          className="z-50 fixed border border-[#7b7272c8] bg-[#232323] h-[3rem] w-[2.5rem] grid place-items-center bottom-6 right-6 p-2 rounded-full text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp />
        </button>
        <SearchCountry
          search={search}
          setSearch={setSearch}
          region={region}
          setRegion={setRegion}
          totalCountries={totalCountries}
          sorting={sorting}
          setSorting={setSorting}
        />
        <div className="flex flex-wrap justify-center gap-8 md:px-[14rem] mb-10">
          {country.map((item,idx) => {
            if(idx === 0) console.log(item);
            if (
              item.name.common.toLowerCase().includes(search.toLowerCase()) &&
              (region === "" || item.region === region)
            ) {
              return <CountryMain key={item.name.common} item={item} />;
            }
          })}
        </div>
      </section>
    );
  }
};
