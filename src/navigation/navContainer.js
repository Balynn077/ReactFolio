import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import NavArea from "./navArea";

export default function NavbarContainer() {
  const [isOpen, toggleNavState] = useState(false);
  const transitions = useTransition(isOpen, null, {
    from: { position: "absolute", opacity: 0, zIndex: "50", width: "100%" },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  function toggleNav() {
    isOpen ? toggleNavState(false) : toggleNavState(true);
  }
  return (
    <>
      <div className="w-full h-16 z-40 bg-white text-white flex self-start text-black">
        <div className="w-full h-16 flex items-center">
          <div className="flex lg:p-4 flex-row lg:w-1/4 w-1/2 h-full items-center justify-start font-bold mx-auto">
            <p className="text-black">Site.Name</p>
          </div>
          <div className="flex lg:p-4 flex-row w-1/4 h-full mx-auto flex-shrink items-center justify-between font-bold ">
            <div className="flex flex-col w-full items-end">
              <div
                className="flex flex-col w-12 h-12 p-1 justify-around relative border overflow-hidden border-black"
                onClick={toggleNav}
              >
                <span className="flex h-px w-1/2 bg-black self-end" />
                <span className="flex h-px w-1/2 bg-black self-start" />
                <span className="flex h-px w-1/2 bg-black self-end" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <NavArea toggleNav={toggleNav} />
            </animated.div>
          )
      )}
    </>
  );
}
