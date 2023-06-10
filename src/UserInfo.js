// UserInfo.js
import React from "react";

const UserInfo = ({ name, gravatarUrl,arrowDownIcon }) => {
  return (
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
  );
};

export default UserInfo;
