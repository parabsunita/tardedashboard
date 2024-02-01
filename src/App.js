// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import NewsQuant from "./components/NewsQuant";
import SearchBar from "./components/SearchBar";
// import other components as needed
import "./App.css";
import Profile from "./components/profile";

function App() {
  return (
    <Router>
      <div className="app container-fluid ">
        <Sidebar />
        <div className="main-content">
          <div className="col-12 row">
            <div className="col-8 " style={{ paddingRight: "0" }}>
              {" "}
              <SearchBar></SearchBar>
              <div style={{ margin: "0.5rem", marginBottom: "0" }}>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#1486b5",
                    fontWeight: "500",
                  }}
                >
                  Current Licence:
                </span>
                <span style={{ fontSize: "10px", marginLeft: "0.5rem" }}>
                  USD/CAD
                </span>
                <span style={{ fontSize: "10px", marginLeft: "0.5rem" }}>
                  AUD/USD
                </span>
              </div>
            </div>
            <div className="col-4 px-3">
              <Profile></Profile>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<NewsQuant />} />
            <Route path="/news-quant" element={<NewsQuant />} />
            {/* Add other routes here */}
          </Routes>{" "}
        </div>
      </div>
    </Router>
  );
}

export default App;
