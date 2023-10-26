import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__options">
        <span className="top-nav-bar__option">Nature</span>
        <span className="top-nav-bar__option">Travel</span>
        <span className="top-nav-bar__option">People</span>
      </div>
      <FavBadge /> {/* Include the FabBadge component here */}
    </div>
  );
};

export default TopNavigation;
