import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import { Spring, animated } from "react-spring/renderprops";

function ProjectDetailsTest(props) {
  const [showProject, setViewState] = useState(false);
  /* test if inView */
  function onInViewChange(inview) {
    if (inview) {
      setViewState(true);
    } else {
      setViewState(false);
    }
  }

  /* Set project slide to 50% of slider height & width */
  const bgStyleSub = {
    width: `${props.sliderHeight / 1.5}px`,
    height: `${props.sliderHeight / 1.5}px`
  };
  return (
    <div className="relative h-full inline-block max-h-90 w-full pr-1">
      <div className="w-5/6 self-center h-full justify-center lg:mx-auto relative">
        <Spring
          to={{
            opacity: showProject ? 0.5 : 0,
            zIndex: showProject ? 20 : 10,
            transform: showProject ? "translateX(0px)" : "translateX(-30px)"
          }}
          delay={400}
        >
          {props => (
            <animated.p
              className="lg:text-5xl md:text-5xl sm:text-4xl text-8xl text-grey font-bold w-full overflow-hidden absolute flex justify-center h-full items-center"
              style={props}
            >
              Project Name
            </animated.p>
          )}
        </Spring>

        <Spring
          to={{
            opacity: showProject ? 1 : 0,
            transform: showProject ? "scale(1)" : "scale(0.4)"
          }}
        >
          {props => (
            <InView
              as="div"
              className="flex justify-end h-full "
              onChange={onInViewChange}
            >
              <animated.div
                style={{ ...bgStyleSub, ...props }}
                className="shadow-lg flex self-center content-center bg-black lg:-ml-4 z-20 absolute max-h-90 max-w-full "
              >
                <div className="pin-r pin-b bg-white absolute overflow-hidden w-1/2 -mr-6 -mb-6 shadow-lg border border-grey ">
                  <p className="border-b py-4 text-black font-semibold">
                    Django
                  </p>
                  <p className="border-b py-4 text-black font-semibold">
                    Django
                  </p>
                  <p className="border-b py-4 text-black font-semibold">
                    Django
                  </p>
                  <p className="border-b py-4 text-black font-semibold">
                    Django
                  </p>
                </div>
              </animated.div>
            </InView>
          )}
        </Spring>
      </div>
    </div>
  );
}
export default ProjectDetailsTest;
