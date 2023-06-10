import React from "react";

const SearchBox = () => {
  return (
    <div className="searchBox">
      <input className="searchInput" type="text" name="" placeholder="Search..." />
      <button className="searchButton" href="#">
        <i className="material-icons">search</i>
      </button>
    </div>
  );
};

export default SearchBox;
