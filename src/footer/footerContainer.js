import React from "react";

class FooterContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="w-full h-16 z-30 bg-white flex self-end justify-between text-black">
        <div className="w-4/5 h-16 flex items-center mx-auto justify-between">
          <div className="flex w-1/2 h-full justify-around flex-wrap content-around">
            <div className="flex flex-row lg:flex-col md:flex-col lg:h-full lg:w-1/2 font-bold flex-wrap w-full flex-wrap items-start lg:items-start lg:justify-center">
              <p className="text-xs text-grey-light mb-2 hidden lg:inline-block">
                Need Help?
              </p>
              <p>help@email.com</p>
            </div>
            <div className="flex flex-row lg:flex-col md:flex-col lg:h-full lg:w-1/2 font-bold flex-wrap w-full flex-wrap items-start lg:items-start lg:justify-center">
              <p className="text-xs text-grey-light mb-2 hidden lg:inline-block">
                Need Help?
              </p>
              <p>+123-123-1234</p>
            </div>
          </div>

          <div className="flex flex-row w-1/2 lg:w-1/4 h-full flex-shrink items-center justify-between self-end font-bold">
            <div className="flex flex-row w-full justify-between">
              <i className="fab fa-github" />
              <i className="fab fa-twitter" />
              <i className="fas fa-code" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FooterContainer;
