import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const photo = props.photo;
  /* Insert React */
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={props.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} />
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
