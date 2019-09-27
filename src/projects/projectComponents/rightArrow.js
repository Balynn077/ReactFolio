import React from "react";

const RightArrow = props => (
  <div className="flex flex-col absolute pin-r justify-center h-full z-30">
    <i
      onClick={props.goToNextSlide}
      className="fa fa-arrow-right fa-3x"
      aria-hidden="true"
    />
  </div>
);
export default RightArrow;
