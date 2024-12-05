import { IoIosSend } from "react-icons/io";

export const Contact = () => {
  return (
    <section className="mt-[6rem] my-8 flex flex-col items-center h-[73vh] sm:h-[78vh] xl:h-[90vh]">
      <div className="w-[25rem] flex flex-col gap-8 px-6 md:scale-125 md:mt-[4rem] lg:scale-100 xl:scale-92">
        <h1 className="text-white text text-4xl font-semibold text-center">
          Contact Us
        </h1>
        <form action="" method="post" className="flex flex-col gap-4 px-3">
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="off"
            autoCorrect="off"
            placeholder="joshep"
            className="outline-none text-[1.22rem] bg-[#585f72] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-gray-600 hover:border-gray-400 border border-[#6e6e6ec8] text-white text-sm placeholder:text-[#6e6e6ec8] placeholder:text-[1rem] px-3 rounded-md h-[3rem]"
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="off"
            autoCorrect="off"
            placeholder="name@mail.com"
            className="outline-none text-[1.22rem] bg-[#585f72] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-gray-600 hover:border-gray-400 border border-[#6e6e6ec8] text-white text-sm placeholder:text-[#6e6e6ec8] placeholder:text-[1rem] px-3 rounded-md h-[3rem]"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="7"
            placeholder="Hello, I Want To Talk With You"
            className="outline-none text-[1.22rem] bg-[#585f72] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-gray-600 hover:border-gray-400 border border-[#6e6e6ec8] text-white text-sm placeholder:text-[#6e6e6ec8] placeholder:text-[1rem] px-3 py-2 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full hover:text-blue-800 text-md bg-[#4848482b] hover:border-blue-800 border text-[1rem] h-[3rem] flex items-center justify-center gap-2 border-[#8d8a8a] hover:scale-[1.015] rounded-md text-[#8d8a8a]"
          >
            Send Your Message
            <IoIosSend className="text-[1.2rem]" />
          </button>
        </form>
      </div>
    </section>
  );
};
