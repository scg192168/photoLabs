import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge"; // Make sure to import the FavBadge component
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__options">
        <span className="top-nav-bar__option">Nature</span>
        <span className="top-nav-bar__option">Travel</span>
        <span className="top-nav-bar__option">People</span>
      </div>
      <FavBadge isFavPhotoExist={props.favorited} />{" "}
      {/* Include the FavBadge component here */}
    </div>
  );
};

export default TopNavigationBar;
