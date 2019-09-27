import React from "react";

const LeftArrow = props => (
  <div className="flex flex-col absolute  pin-l h-full justify-center z-30 ">
    <i
      onClick={props.goToPrevSlide}
      className="fa fa-arrow-left fa-3x"
      aria-hidden="true"
    />
  </div>
);
export default LeftArrow;
