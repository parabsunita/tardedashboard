// src/components/LegendTable.js
import React from "react";

const LegendTable = ({ legends }) => {
  const headerStyle = {
    textAlign: "center",
    margin: "0  2rem",
  };
  return (
    <div className="bodyContainer col-8">
      <h5 className="pl-4 font-weight-600">Refined News & Data Flow </h5>
      <table>
        <thead>
          <tr>
            <th style={headerStyle}>Type</th>
            <th style={headerStyle}>News</th>
            <th style={headerStyle}>Score</th>
            <th style={headerStyle}>Impact </th>
            <th style={headerStyle}>Probability</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "0.9rem" }}>
          {legends.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: "center" }}>
                <div
                  className="colorContainer"
                  style={{
                    backgroundColor: item.color,
                  }}
                ></div>
                <span> {item.type}</span>
              </td>
              <td style={{ width: "50%" }}>{item.news}</td>
              <td style={{ textAlign: "center" }}>{item.score}</td>
              <td style={{ textAlign: "center" }}>{item.impact}</td>
              <td style={{ textAlign: "center" }}>{item.probability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LegendTable;
