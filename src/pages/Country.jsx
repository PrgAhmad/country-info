import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/countryHomeApi";
import { CountryMain } from "../components/CountryMain";
import { SearchCountry } from "../components/SearchCountry";

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
      console.log(data);
      setTotalCountries(data.length);
      if(sorting === "asc") {
        setCountry(data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1)));
      }else if(sorting === "desc") {
        setCountry(data.sort((a, b) => (a.name.common < b.name.common ? 1 : -1)));
      }
    });
  }, [sorting]);


  if (isPending) {
    return (
      <div className="h-screen grid place-items-center">
        <div className="loader"></div>
      </div>
    );
  } else {
    return (
      <section className="min-h-screen py-12 mt-14">
        <SearchCountry
          search={search}
          setSearch={setSearch}
          region={region}
          setRegion={setRegion}
          totalCountries={totalCountries}
          setSorting={setSorting} 
        />
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
