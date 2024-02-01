// FocusTopic.js
import React from "react";
import { FaCircle } from "react-icons/fa";

const FocusTopic = () => {
  const FocusTopic = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filter = {
    backgroundColor: "blue",
    borderRadius: "5px",
    color: "white",
    padding: "0.2rem",
  };
  return (
    <div className=" bodyContainer col-4 ">
      <div>
        {" "}
        <h5 className="pl-4 font-weight-600">Focus Topic</h5>
      </div>
      <div className="text-center">
        {" "}
        {FocusTopic.map((item, index) => (
          <div className="focus" style={{ marginBottom: "0.1rem" }}>
            <span>{index + 1}</span>
            <span>Focus Topic {index + 1}</span>
            <span style={filter}>Score 1</span>
          </div>
        ))}
        <p className="text-primary font-weight-600">
          {" "}
          See All <span>&#62;</span>
          <span>&#62;</span>
        </p>
      </div>
    </div>
  );
};

export default FocusTopic;
