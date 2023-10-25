import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const samplePhoto = props.samplePhoto;
  /* Insert React */
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={samplePhoto.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={samplePhoto.profile} />
        <div className="photo-list__user-info">
          {props.samplePhoto.username}
          <div className="photo-list__user-location">
            {props.samplePhoto.location.city}
            {props.samplePhoto.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
