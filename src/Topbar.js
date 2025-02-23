// src/Topbar.js
import React from "react";

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="menu-icon">🔲</div>
      <input type="text" placeholder="search..." className="search-bar" />
      <div className="user-info">
        <div className="notification">
          <i className="icon">🔔</i>
          <span className="notification-dot"></span>
        </div>
        <div className="profile">
          <img src="./images/1.png" alt="User Avatar" />
          <span>Zack Daahir</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
