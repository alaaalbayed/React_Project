import React from "react";

const Navigation = ({ logo, gravatarUrl, notificationIcon, name, arrowDownIcon }) => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>
          Students<span>inc.</span>
        </h1>
      </div>
      <div className="wrap">
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            name=""
            placeholder="Search..."
          />
          <button className="searchButton" href="#">
            <i className="material-icons">search</i>
          </button>
        </div>
      </div>

      <ul>
        <a href="/#">
          <li>Career Library</li>
        </a>
        <a href="/#">
          <li>Major Library</li>
        </a>
        <a href="/#">
          <li>School Library</li>
        </a>
      </ul>

      <img
        className="notification"
        src={notificationIcon}
        alt="no notification"
      ></img>

      <div className="user-info">
        <div className="avatar">
          <img src={gravatarUrl} alt="User Avatar" />
        </div>
        <div className="user-details">
          <div className="welcome">Welcome</div>
          <div className="name">
            {name}
            <img className="arrow" src={arrowDownIcon} alt="no ArrowDown" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
