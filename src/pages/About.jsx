import { CountryHome } from "../components/CountryHome";

export const About = () => {
  return (
    <section className="mt-[5.5rem] my-8 flex flex-col items-center gap-8">
      <div>
        <h2 className="text-white text text-2xl font-semibold text-center">
          Here are the Interesting Facts <br /> We're Proud of
        </h2>
      </div>
      <CountryHome />
    </section>
  );
};
