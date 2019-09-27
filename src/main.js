import React from "react";
import ReactResizeDetector from "react-resize-detector";
import ProjectContainer from "./projects/projectContainer";
import InfoContainer from "./info/infoContainer";

class MainWrap extends React.Component {
  slideDimensions = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      sliderWidth: 0,
      sliderHeight: 0
    };
  }
  onResize = () => {
    this.setState({
      sliderHeight: this.slideDimensions.current.clientHeight,
      sliderWidth: this.slideDimensions.current.clientWidth
    });
  };
  render() {
    return (
      <div className="flex-1 flex-grow flex flex-col h-full overflow-y-scroll">
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize}>
          <div className="flex flex-grow flex-wrap " ref={this.slideDimensions}>
            <InfoContainer />
            <ProjectContainer
              slideWidth={this.state.sliderWidth}
              slideHeight={this.state.sliderHeight}
            />
          </div>
        </ReactResizeDetector>
      </div>
    );
  }
}
export default MainWrap;
