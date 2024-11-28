import countryData from "../api/countryData.json";

export const CountryHome = () => {
  const { countriesFacts } = countryData;

  return (
    <div className="flex flex-wrap justify-center gap-8 md:px-[14rem] mb-10">
      {countriesFacts.map(
        ({ name, capital, population, area, fact, image }) => {
          
          return (
            <div
              className={`text-white text-sm w-[22rem] px-4 py-8 bg-[#585f72] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-600 hover:border-gray-400 hover:scale-105 transition-all duration-300 ease-linear cursor-pointer`}
            >
              <div className="flex justify-between">
              <h3 className="text-2xl mb-4">{name}</h3>
              <img src={image} alt="" srcset="" className="h-[3rem] w-[5rem]"/>
              </div>
              <p>
                <span className="text-gray-400">Capital: </span>
                {capital}
              </p>
              <p>
                <span className="text-gray-400">Population: </span>
                {population}
              </p>
              <p>
                <span className="text-gray-400">Area: </span>
                {area}
              </p>
              <p>
                <span className="text-gray-400">Fact: </span>
                {fact}
              </p>
            </div>
          );
        }
      )}
    </div>
  );
};
