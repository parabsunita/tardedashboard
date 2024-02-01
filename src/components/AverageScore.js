// AverageScore.js
import React from "react";
import { FaCircle } from "react-icons/fa";

const AverageScore = ({ percentage }) => {
  // Determine colors based on the percentage
  const getBorderColor = () => {
    if (percentage >= 75) {
      return "blue";
    } else {
      return "green";
    }
  };

  return (
    <div className="average-score-container bodyContainer col-4 text-center">
      <h5 className="font-weight-600">Average Score</h5>
      <div className="d-flex">
        <div class="outer_circle ">
          <div class="inner_circle"></div>
          <h2 className="mt-5">{percentage}</h2>
        </div>
        <div className="" style={{ padding: "4rem 0rem" }}>
          {" "}
          <div className="percentage font-weight-800">
            <h5 className="font-weight-800">{percentage}%</h5>
          </div>
          <div className="percentage">About Graph</div>
          <div className="font-weight-800 percentage text-primary ">
            See Details <span>&#62;</span>
            <span>&#62;</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageScore;
