// src/components/LineChart.js
import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js/auto";

Chart.register(...registerables);

// Function to generate an array of random data
const generateRandomData = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 100));
};

const LineChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [filteredData, setFilteredData] = useState(generateRandomData(50));

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy previous chart instance, if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    const backgroundColors = data.map(function (ele) {
      return ele.color;
    });
    chartInstance.current = new Chart(ctx, {
      type: "bubble",
      data: {
        datasets: [
          {
            data: [
              {
                x: 14,
                y: 70,
                r: 15,
              },
              {
                x: 27,
                y: 60,
                r: 15,
              },
              {
                x: 35,
                y: 65,
                r: 15,
              },
              {
                x: 48,
                y: 47,
                r: 10,
              },
              {
                x: 58,
                y: 53,
                r: 10,
              },
              {
                x: 64,
                y: 43,
                r: 10,
              },
              {
                x: 72,
                y: 23,
                r: 10,
              },
            ],
            backgroundColor: backgroundColors,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "linear",
            position: "left",
            min: 0,
            max: 100,
          },
          y: {
            type: "linear",
            position: "left",
            min: 0,
            max: 100,
          },
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        animation: {
          duration: 1000, // Animation duration in milliseconds
        },
        plugins: {
          legend: {
            display: false, // Set display to false to hide the legend
          },
        },
      },
    });

    // Clean up the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [filteredData]);

  const handleFilterChange = (interval) => {
    // Implement logic to filter data based on the selected interval
    // For simplicity, the example assumes a time-based filter with static data
    // You should replace this with actual logic based on your requirements
    switch (interval) {
      case "Last 7 Days":
        setFilteredData(generateRandomData(7));
        break;
      case "Last 30 Days":
        setFilteredData(generateRandomData(30));
        break;
      case "Last 90 Days":
        setFilteredData(generateRandomData(90));
        break;
      default:
        setFilteredData(generateRandomData(50));
    }
  };

  return (
    <div className="bodyContainer col-8">
      <div className="d-flex justify-content-between">
        {" "}
        <div>
          {" "}
          <h5 className="font-weight-600 pl-4">News & Data Flow </h5>
        </div>
        <div className="d-flex">
          <select onChange={(e) => handleFilterChange(e.target.value)}>
            <option value="All">All</option>
            <option value="Last 7 Days">Last 7 Days</option>
            <option value="Last 30 Days">Last 30 Days</option>
            <option value="Last 90 Days">Last 90 Days</option>
          </select>
        </div>
      </div>
      <canvas ref={chartRef} width={100} height={30}></canvas>
    </div>
  );
};

export default LineChart;
