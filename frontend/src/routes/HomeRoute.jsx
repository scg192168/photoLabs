import React from "react";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  console.log(props);
  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favorites={props.favorites} />
      <PhotoList
        photos={props.photos}
        favorites={props.favorites}
        toggleFavorite={props.toggleFavorite}
        openModal={props.openModal}
        displaySinglePhotoDetails={props.displaySinglePhotoDetails}
      />
    </div>
  );
};

export default HomeRoute;
