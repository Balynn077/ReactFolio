import React from "react";
import ReactResizeDetector from "react-resize-detector";
import ProjectDetailsTest from "./projectComponents/projectTest";
import LeftArrow from "./projectComponents/leftArrow";
import RightArrow from "./projectComponents/rightArrow";

class ProjectContainer extends React.Component {
  projectDimensions = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      projects: ["", "", "", "", ""],
      currentIndex: 0,
      translateValue: 0,
      slideContainerHeight: 0,
      slideContainerWidth: 0
    };

    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
  }
  componentDidMount() {
    this.setState({
      slideContainerHeight: this.projectDimensions.current.clientHeight,
      slideContainerWidth: this.projectDimensions.current.clientWidth
    });
  }
  componentWillUnmount() {
    this.setState({
      projects: [],
      currentIndex: 0,
      translateValue: 0,
      slideContainerHeight: 0,
      slideContainerWidth: 0
    });
  }
  goToPrevSlide = () => {
    if (
      this.state.currentIndex ===
      this.state.projects.length - this.state.projects.length
    ) {
      return this.setState({
        currentIndex: this.state.projects.length - 1,
        translateValue:
          -this.state.slideContainerWidth * (this.state.projects.length - 1)
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.state.slideContainerWidth
    }));
  };
  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.projects.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue:
        this.state.slideContainerWidth * -this.state.currentIndex -
        this.state.slideContainerWidth
    }));
  };
  onResize = () => {
    return this.setState({
      slideContainerHeight: this.projectDimensions.current.clientHeight,
      slideContainerWidth: this.projectDimensions.current.clientWidth,
      translateValue: 0,
      currentIndex: 0
    });
  };
  render() {
    const slideSlide = {
      transform: `translateX(${this.state.translateValue}px)`,
      transition: "transform ease-out 0.45s"
    };

    return (
      <>
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize}>
          <div className="relative text-black -mr-1 ml-1 flex-col z-10 sm:w-full lg:inline-block md:inline-block  flex-wrap w-full h-80 mb-10 mt-10">
            <div
              className="flex self-center items-center justify-center h-full "
              ref={this.projectDimensions}
            >
              <LeftArrow goToPrevSlide={this.goToPrevSlide} />
              <RightArrow goToNextSlide={this.goToNextSlide} />

              <div
                className="relative inline-block whitespace-no-wrap w-full h-full mx-auto"
                style={slideSlide}
              >
                {this.state.projects.map((project, i) => (
                  <ProjectDetailsTest
                    sliderHeight={this.props.slideHeight}
                    key={i}
                    sliderWidth={this.props.slideWidth}
                    project={project}
                  />
                ))}
              </div>
            </div>
          </div>
        </ReactResizeDetector>
      </>
    );
  }
}
export default ProjectContainer;
