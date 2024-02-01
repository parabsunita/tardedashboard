// SearchBar.js
import React, { useState } from "react";
import { FaUser, FaMicrophone } from "react-icons/fa"; // Import icons from react-icons

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Call the onSearch callback with the searchQuery
    onSearch(searchQuery);
  };

  const handleKeyPress = (event) => {
    // Trigger search if the 'Enter' key is pressed
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar-container">
      <FaUser className="icon" />
      <input
        type="text"
        placeholder="Search questions..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <FaMicrophone
        className="icon"
        style={{ float: "right" }}
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
