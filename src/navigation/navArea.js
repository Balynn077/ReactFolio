import React from "react";
import NavLinks from "./navLinks";

export default function NavArea(props) {
  return (
    <div className="h-screen bg-white z-40 overflow-hidden">
      <div className="h-full flex flex-col flex-grow w-full">
        <div className="w-full flex items-center h-16 border-b border-black">
          <div className="flex lg:p-4 flex-row lg:w-1/4 w-1/2 h-full items-center justify-start font-bold mx-auto">
            <p className="text-black">Site.Name</p>
          </div>
          <div className="flex lg:p-4 flex-row w-1/4 h-full mx-auto flex-shrink items-center justify-between font-bold ">
            <div className="flex flex-col w-full items-end">
              <div
                className="flex flex-col w-12 h-12 p-1 justify-around relative bg-black border border-black"
                onClick={props.toggleNav}
              >
                <span className="flex h-px w-1/2 bg-white self-end" />
                <span className="flex h-px w-1/2 bg-white self-start" />
                <span className="flex h-px w-1/2 bg-white self-end" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-1 h-full flex-grow justify-center items-center flex-col">
          <div className="flex justify-between flex-col text-5xl uppercase font-bold -mt-20">
            <NavLinks toggleNav={props.toggleNav} />
          </div>
        </div>
      </div>
    </div>
  );
}
