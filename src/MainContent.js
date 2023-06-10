import React, { useState, useEffect } from "react";
import md5 from "md5";
import "./MainContent.css";
import Logo from "./img/logo.png";
import Notification from "./img/notification.png";
import ArrowDown from "./img/ArrowDown.svg";
import Clock from "./img/clock.png";
import Navigation from "./Navigation";
import ContentContainer from "./ContentContainer";

const MainContent = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { name, email } = userData;

  const md5Hash = md5(email.trim().toLowerCase());
  const gravatarUrl = `https://www.gravatar.com/avatar/${md5Hash}`;

  return (
    <div>
      <Navigation
        logo={Logo}
        gravatarUrl={gravatarUrl}
        notificationIcon={Notification} 
        name={name} 
        arrowDownIcon={ArrowDown}
      />
      <ContentContainer
        notificationIcon={Notification}
        arrowDownIcon={ArrowDown}
        clockIcon={Clock}
      />
    </div>
  );
};

export default MainContent;
