import React from "react";

export default function AboutSecondRow() {
  return (
    <>
      <div className="mt-32 flex">
        <div className="flex flex-col w-full lg:w-1/2 justify-center lg:items-end items-center ">
          <div className="p-4 lg:text-5xl md:text-3xl sm:text-3xl text-3xl text-black text-left flex justify-center flex-col h-full lg:w-3/4 w-5/6">
            <div className="h-24">
              <p className="font-bold text-red mb-1">Catchy Phrase</p>
              <p className="font-bold text-2xl">Second line</p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="font-bold mb-4">First Last</p>
              <p className="lg:text-sm text-xs text-grey-dark mt-1 leading-loose">
                Quod ridens maiestatis eum cu, illud facilis consectetuer usu
                an, amet sensibus oportere sit et. Eam no assum veritus
                argumentum, te vix iriure torquatos comprehensam. Cu quot
                volutpat quo, idque dolorem nec ea, everti accumsan petentium id
                usu. Deserunt imperdiet theophrastus sea ea, amet feugait
                platonem an ius. In postulant percipitur has, aeterno admodum
                invenire mei ad.
              </p>
              <p className="lg:text-sm text-xs text-grey-dark mt-4 mb-4 leading-loose">
                Lorem ipsum is a pseudo-Latin text used in{" "}
                <span className="text-black font-bold ">
                  web design, typography, layout, and printing
                </span>{" "}
                in place of English to emphasise design elements over content.{" "}
              </p>
            </div>
            <button className="text-sm text-white self-start bg-red py-2 px-2">
              Download Resume
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 justify-end lg:items-end items-center">
          <div className="lg:p-4 w-full lg:w-3/4 flex flex-col h-full self-center lg:self-start justify-end">
            <img src="https://imgplaceholder.com/300x400" alt="w.e" />
          </div>
        </div>
      </div>
    </>
  );
}
