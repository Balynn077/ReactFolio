import React from "react";

export default function ContactForm() {
  return (
    <form className="flex lg:w-full w-5/6 flex-col self-center lg:mt-12 ">
      <div className="w-full mb-6 ">
        <input
          className="appearance-none border border-px-black block w-full bg-white text-black px-4 py-4 leading-tight focus:outline-none"
          id="grid-first-name"
          type="text"
          placeholder="Name"
        />
      </div>

      <div className="w-full mb-6 ">
        <input
          className="appearance-none border border-px-black block w-full bg-white text-black px-4 py-4 leading-tight focus:outline-none "
          id="grid-first-name"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="w-full mb-6 ">
        <input
          className="appearance-none border border-px-black block w-full bg-white text-black px-4 py-4 leading-tight focus:outline-none"
          id="grid-first-name"
          type="text"
          placeholder="Phone"
        />
      </div>

      <div className="w-full md:mb-0 ">
        <textarea
          rows="5"
          className="appearance-none border border-px-black block h-full w-full bg-white text-black py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gold"
          id="grid-first-name"
          type="text"
          placeholder="Message"
        />
      </div>
      <div className="w-full md:w-full py-3 self-start flex ">
        <button className="text-white bg-red py-3 px-6 self-start">
          Submit
        </button>
      </div>
    </form>
  );
}
