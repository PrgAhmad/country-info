import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryByName } from "../api/countryHomeApi";

export const CountryDetails = () => {
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
    <section className="h-screen grid place-items-center">
      <div><img src={country?.flags.png} alt="" /></div>
    </section>
  );
};
