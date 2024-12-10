import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCountryByName } from "../api/countryHomeApi";

export const CountryDetails = () => {
    const { name } = useParams();
    useEffect(async() => {
        const res = await getCountryByName(name);
        const data = res[0];
        console.log(data);
        
    })
    return (<section className="h-screen">
        <div>Hello</div>
    </section>);
}