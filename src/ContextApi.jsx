import { createContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [countryName, setCountryName] = useState("");
  return (
    <Context.Provider value={{ countryName, setCountryName }}>
      {children}
    </Context.Provider>
  );
};
