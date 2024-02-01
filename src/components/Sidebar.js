// src/components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <div className="sidebar">
        <h3 className="logo">Tradeverse</h3>
        <span>Main Menu</span>
        <ul>
          <li>
            <NavLink
              to="/news-quant"
              activeClassName="active"
              className={location.pathname === "/" ? "active" : ""}
            >
              News
            </NavLink>
          </li>

          <li>
            <NavLink to="/economic-indicators" activeClassName="active-link">
              Real Economic Indicators
            </NavLink>
          </li>
          <li>
            <NavLink to="/one-score" activeClassName="active-link">
              One Score
            </NavLink>
          </li>
          <li>
            <NavLink to="/alert-center" activeClassName="active-link">
              Alert Center
            </NavLink>
          </li>
          <li>
            <NavLink to="/customer-support" activeClassName="active-link">
              Customer Support
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
