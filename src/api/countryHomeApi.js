import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export const getCountryData = async() => {
  const response = await api.get("all?fields=name,flags,population,capital,region,area,maps");
  return response.data;
};

// export const getCountryByName = async(name) => {
//   const response = await api.get(`name/${name}?fields=name,flags,population,capital,region,area,maps`);
//   return response.data;
// };