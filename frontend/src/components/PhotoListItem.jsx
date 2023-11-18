import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        toggleFavorite={props.toggleFavorite}
        favorites={props.favorites}
        photoId={props.photoId}
      />
      <img
        className="photo-list__image"
        src={props.photo.urls.full}
        onClick={() => props.displaySinglePhotoDetails(props.photo)}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={props.photo.user.profile}
        />
        <div className="photo-list__user-info">
          {props.photo.user.name}
          <div className="photo-list__user-location">
            {props.photo.location.city}
            {props.photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
