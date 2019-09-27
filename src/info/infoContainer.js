import React from "react";

const InfoContainer = props => (
  <div className="flex self-center items-center content-center bg-transparent lg:absolute lg:w-2/5 w-full justify-center z-20 overflow-hidden lg:ml-32 ">
    <div className="flex self-center items-center lg:justify-center self-start h-full bg-transparent w-full p-6">
      <div className="flex flex-col items-start whitespace-no-wrap">
        <p className="lg:text-5xl md:text-3xl sm:text-xl text-3xl text-black pb-4 font-bold ">
          Hello!
        </p>
        <div className="flex justify-between flex-col items-start flex-1 h-32 lg:h-48">
          <p className="lg:text-5xl md:text-3xl sm:text-3xl text-3xl text-black font-bold">
            I’m a freelance
          </p>
          <p className="lg:text-5xl md:text-3xl sm:text-3xl text-3xl text-black font-bold">
            UI/UX Designer
          </p>
          <p className="lg:text-5xl md:text-3xl sm:text-3xl text-3xl text-black font-bold ml-0">
            Based in area.
          </p>
        </div>
        <button className="px-4 py-4 bg-black text-white font-bold lg:text-xl md:text-lg sm:text-md text-sm">
          See My Work
        </button>
      </div>
    </div>
  </div>
);
export default InfoContainer;
