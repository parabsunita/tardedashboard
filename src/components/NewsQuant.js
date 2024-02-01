// src/components/NewsQuant.js
import React from "react";

import LegendTable from "./LegendTable";
import BubbleChart from "./BubbleChart";
import AverageScore from "./AverageScore";
import FocusTopic from "./FocusTopic";

const NewsQuant = () => {
  // Dummy data for the data flow chart
  const chartData = Array.from({ length: 11 }, (_, index) => index * 10);

  // Legends for different types of data
  const legends = [
    {
      type: "ERU",
      news: "The Euro has steadied aginst the US Dollar on Thursday as the \n market ponders the path of Fed rate hikes",
      score: "+1",
      impact: "Neutral",
      probability: "High",
      color: "yellow",
    },
    {
      type: "INR",
      news: "The Euro has steadied aginst the US Dollar on Thursday as the market ponders the path of Fed rate hikes",
      score: "+1",
      impact: "High",
      probability: "High",
      color: "skyblue",
    },
    {
      type: "CAD",
      news: "The Euro has steadied aginst the US Dollar on Thursday as the market ponders the path of Fed rate hikes",
      score: "+1",
      impact: "Medium",
      probability: "High",
      color: "maroon",
    },
    {
      type: "CAD",
      news: "The Euro has steadied aginst the US Dollar on Thursday as the market ponders the path of Fed rate hikes",
      score: "+1",
      impact: "Low",
      probability: "High",
      color: "maroon",
    },
    {
      type: "OIL",
      news: "The Euro has steadied aginst the US Dollar on Thursday as the market ponders the path of Fed rate hikes",
      score: "+1",
      impact: "Neutral",
      probability: "High",
      color: "green",
    },
  ];

  return (
    <div>
      {/* Your news component goes here */}

      <div className=" col-12 d-flex">
        <BubbleChart data={legends} />
        <AverageScore percentage={75}></AverageScore>
      </div>
      <div className=" col-12 d-flex">
        <LegendTable legends={legends} />
        <FocusTopic></FocusTopic>
      </div>
    </div>
  );
};

export default NewsQuant;
