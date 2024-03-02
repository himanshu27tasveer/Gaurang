"use client";
import { useState } from "react";
import "./Circle.scss";

export interface CircleProps {
  size: string | number;
  thickness?: string;
  fillColor: string;
  color: string;
  content: string;
}

export const Circle = (props: CircleProps) => {
  const [animation, setAnimation] = useState("sonarWave 2s linear infinite");

  return (
    <div
      className="circle-container"
      style={{
        width: props.size,
        height: props.size,
      }}
    >
      <div
        onMouseEnter={() => {
          setAnimation("none");
        }}
        onMouseLeave={() => {
          setAnimation("sonarWave 2s linear infinite");
        }}
        className="circle-object flex justify-center items-center font-mono text-sm"
        style={{
          width: `calc(${props.size} - ${props.thickness})`,
          height: `calc(${props.size} - ${props.thickness})`,
        }}
      >
        {props.content}
      </div>
      <div
        className="wave"
        style={{
          width: props.size,
          height: props.size,
          animation,
        }}
      ></div>
    </div>
  );
};
