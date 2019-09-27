import React from "react";
import ContactForm from "./contactForm";
export default function ContactWrap() {
  return (
    <div className="flex flex-1 flex-grow flex-wrap overflow-y-scroll">
      <div className="flex flex-col h-full w-full lg:w-1/2 justify-center lg:items-end items-center">
        <div className="p-4 text-3xl sm:text-3xl md:text-3xl lg:text-5xl text-black text-left flex justify-center flex-col h-full lg:w-3/4 w-5/6">
          <div className="flex flex-col">
            <p className="font-bold text-red mb-1">Contact Me</p>
            <p className="font-bold text-2xl">Second line</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="lg:text-base text-xs text-grey-dark mt-1 leading-loose lg:w-3/4 w-full">
              Feel free to get in touch with me. I am always open to discussing
              new projects or opportunities.
            </p>
          </div>

          <div className="flex flex-col justify-start">
            <div className="flex flex-col justify-between">
              <p className="text-xs text-grey-dark mt-1 leading-loose">
                Need Help?
              </p>
              <p className="lg:text-base text-base text-black mt-1 leading-loose font-semibold">
                name@email.com
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-xs text-grey-dark mt-1 leading-loose">
                Need Help?
              </p>
              <p className="lg:text-base text-base text-black mt-1 leading-loose font-semibold">
                123-456-7891
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/3 justify-center ">
        <ContactForm />
      </div>
    </div>
  );
}
