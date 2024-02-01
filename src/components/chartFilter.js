// src/components/ChartFilter.js
import React, { useState } from "react";

const ChartFilter = ({ onFilterChange }) => {
  const timeIntervals = [
    "Filter",
    "Last 7 Days",
    "Last 30 Days",
    "Last 90 Days",
  ];
  const [selectedInterval, setSelectedInterval] = useState("All");
  // const filter = {
  //   backgroundColor: "blue",
  //   borderRadius: "5px",
  //   color: "white",
  //   padding: "0.2rem",
  // };
  const handleFilterChange = (interval) => {
    setSelectedInterval(interval);
    onFilterChange(interval);
  };

  return (
    <div>
      <h2>Filter</h2>
      <select
        className="filter"
        value={selectedInterval}
        onChange={(e) => handleFilterChange(e.target.value)}
      >
        {timeIntervals.map((interval) => (
          <option key={interval} value={interval} style={filter}>
            {interval}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChartFilter;
