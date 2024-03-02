"use client";
import Lottie from "react-lottie";
import "./Experience.css";
import Card from "./utils/Card";
import { Circle } from "./utils/Circle";
import "./utils/Circle.scss";
import animationData from "./utils/exp.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Experience = () => {
  return (
    <div
      id="experience"
      className="p-5 flex items-center flex-col exp"
      style={{ width: "100%", color: "#202020", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "calc(80% - 250px)",
          zIndex: 0,
        }}
      >
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
      <p className="text-3xl font-bold first-line:uppercase first-line:tracking-widest">
        Experience
      </p>
      <div style={{ width: "100%" }} className="pl-12 pt-6 flex flex-col">
        <h1 className="text-2xl font-bold">Collins Aerospace</h1>
        <div className="ml-20 p-5 pt-14 flex flex-col items-left justify-center">
          <div className="m-2 flex flex-col">
            <Circle
              fillColor="red"
              size={"90px"}
              color={"#8fc676"}
              thickness="6px"
              content="Present"
            />
            <div
              style={{
                height: "300px",
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(29,31,150,1) 0%, rgba(158,78,233,1) 100%)",
                width: 1,
                marginLeft: "40px",
              }}
            >
              <Card position="Data Analyst/Scientist">
                <ul style={{ padding: 12, listStyle: "disc" }}>
                  <li>
                    Led predictive analytics, optimizing component efficiency.
                  </li>
                  <li>
                    Enhanced precision by 30% and recall by 18% through analytic
                    integration.
                  </li>
                  <li>
                    Revamped Databricks notebooks, reducing service delivery
                    time by 50%.
                  </li>
                  <li>
                    Developed a dynamic Tableau dashboard for capturing break in
                    data pipeline.
                  </li>
                  <li>
                    Improved dashboards for larger datasets and automated
                    processes using PowerBI and Databricks workflows.
                  </li>
                </ul>
              </Card>
            </div>
          </div>
          <div className="m-2 flex flex-col">
            <Circle
              fillColor="red"
              size={"90px"}
              color={"#8fc676"}
              thickness="6px"
              content="July 2023"
            />
            <div
              style={{
                height: "300px",
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(29,31,150,1) 0%, rgba(158,78,233,1) 100%)",
                width: 1,
                marginLeft: "40px",
              }}
            >
              <Card position="Intern">
                <ul style={{ padding: 12, listStyle: "disc" }}>
                  <li>
                    Automated tasks, reducing manual work by 60%, especially in
                    file record-keeping.
                  </li>
                  <li>
                    Implemented Natural Language Processing for a 95% accurate
                    ATA Chapter identification with a Random Forest Classifier.
                  </li>
                </ul>
              </Card>
            </div>
          </div>
          <div className="m-2">
            <Circle
              fillColor="red"
              size={"90px"}
              color={"#8fc676"}
              thickness="6px"
              content="Feb 2022"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
