"use client";
import "./Projects.css";
import Lottie from "react-lottie";
import FlippableCard from "./utils/FlippableCard";
import animationData from "./utils/edu.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Projects = (): JSX.Element => {
  return (
    <>
      <div className="Projects p-10" id="projects">
        <p className="text-3xl font-bold first-line:uppercase first-line:tracking-widest">
          Projects
        </p>
        <div style={{ position: "relative" }}>
          <div
            className="flex justify-around"
            style={{ position: "relative", zIndex: 10 }}
          >
            <FlippableCard front="Remaining Useful Life Calculation">
              <ul className="p-5">
                <li>
                  Using a dataset from NASA datasets, applied Machine Learning
                  Algorithm to calculate Remaining Useful Life of a component.
                </li>
                <li>
                  Got a precision of 95% for the prediction of failure using the
                  given parameters.
                </li>
              </ul>
            </FlippableCard>
            <FlippableCard front="Handwritten Character Recognition">
              <div className="p-5">
                A basic model of Convolutional Neural Network was made, through
                which the images were classified into different characters
              </div>
            </FlippableCard>
          </div>
          <div
            style={{
              position: "absolute",
              top: 200,
              display: "flex",
              justifyContent: "center",
              width: "100%",
              zIndex: 0,
            }}
          >
            <Lottie
              options={defaultOptions}
              height={"35vw"}
              width={"35vw"}
              style={{ maxWidth: 430, maxHeight: 430 }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Projects;
