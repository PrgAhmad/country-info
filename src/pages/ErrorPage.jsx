import { useRouteError, NavLink, useNavigate } from "react-router-dom";
export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();
  return (
    <section className=" dark:bg-gray-900 flex items-center h-[100vh]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blue-600 dark:text-blue-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-400 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </p>
          <div className="flex sm:gap-2 gap-4 justify-center items-center flex-col sm:flex-row">
            <button className="text-blue-600 px-3 rounded-md  border-blue-500 border-[0.1px] text-[0.9rem] h-[2.8rem] w-[11rem] hover:border-[#8d8a8a] hover:text-[#8d8a8a] hover:scale-105">
              <NavLink to={"/"}>Back to Home Page</NavLink>
            </button>
            <button className="text-blue-600 px-3 rounded-md  border-blue-500 border-[0.1px] text-[0.9rem] h-[2.8rem] w-[11rem] hover:border-[#8d8a8a] hover:text-[#8d8a8a] hover:scale-105">
              <NavLink onClick={() => navigate(-1)}>Back to Previous Page</NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
