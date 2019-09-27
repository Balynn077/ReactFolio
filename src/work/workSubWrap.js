import React from "react";

export default function WorkSubWrap(props) {
  const item = {
    width: "100%",
    height: "100%",
    position: "absolute",
    transition: "width 5s ease-in-out"
  };

  return (
    <>
      <div
        className="flex flex-wrap justify-center items-center flex-wrap lg:w-1/3 w-4/5 mt-4 mb-4 lg:m-4 border border-black bg-white"
        onClick={() => props.toggleOpen(props.item)}
        style={props.item === props.isSelected ? item : null}
      >
        {props.isSelected === false ? <div>{props.name}</div> : null}
        {props.item === props.isSelected ? (
          <div>
            {props.name}
            <br />
            {props.builtWith}
          </div>
        ) : null}
      </div>
    </>
  );
}
