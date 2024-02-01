  // Profile.js

import React, { useState } from "react";

const Profile = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const notificationCount = 3; // Replace with your dynamic notification count

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="profile-container">
      <div className="profile-info ">
        <div className="d-flex">
          <div className="bell-icon">
            {/* Bell icon goes here */}
            🔔
            {notificationCount > 0 && (
              <div className="notification-badge text-center">
                {notificationCount}
              </div>
            )}
          </div>

          <img
            src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?s=1024x1024&w=is&k=20&c=VQ_i-ojGNiLSNYrco2c2xM0iUjsZKLF7zRJ4PSMpmEI="
            alt="Profile Photo"
            className="profile-photo"
          />
          <div className="username-dropdown" onClick={toggleDropdown}>
            <span className="font-weight-800" id="username">
              Username
            </span>
            {isDropdownOpen && (
              <div className="dropdown-content">
                {/* Dropdown options go here */}
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            )}
          </div>
        </div>
        <div className="" style={{ lineHeight: "12px", paddingLeft: "3rem" }}>
          <span
            className="welcome-text font-weight-600"
            style={{ fontSize: "14px" }}
          >
            Welcome, Username
          </span>
          <div style={{ fontSize: "12px" }}> Good to see you again ! </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
