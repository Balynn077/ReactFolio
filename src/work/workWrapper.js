import React, { useState } from "react";
import WorkSubWrap from "./workSubWrap";
import Projects from "./data";

export default function WorkWrap() {
  const [isOpen, toggleIsOpen] = useState(false);
  const [isSelected, toggleIsSelected] = useState(false);

  function open(i) {
    isOpen ? toggleIsOpen(false) : toggleIsOpen(true);
    isOpen ? toggleIsSelected(false) : toggleIsSelected(i);
  }

  return (
    <div className="flex flex-grow flex-wrap h-full container justify-center relative overflow-scroll ">
      {Projects.map((project, i) => (
        <WorkSubWrap
          key={i}
          toggleOpen={open}
          item={i}
          isSelected={isSelected}
          builtWith={project.builtWith}
          name={project.projectName}
        />
      ))}
      {console.log(isSelected)}
    </div>
  );
}
