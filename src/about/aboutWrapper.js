import React from "react";
import AboutFistRow from "./aboutFirstRow";

export default function AboutWrap() {
  return (
    <div className="flex flex-1 flex-grow flex-wrap overflow-y-scroll">
      <AboutFistRow />
    </div>
  );
}
