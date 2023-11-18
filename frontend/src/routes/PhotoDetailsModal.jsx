import React, { useEffect, useState } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "../components/PhotoFavButton";
import "../styles/PhotoDetailsModal.scss";
import PhotoList from "../components/PhotoList";

const PhotoDetailsModal = (props) => {
  return (
    <div className="photo-details-modal">
      <button
        onClick={() => props.closeDisplayModal(false)}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          toggleFavorite={props.toggleFavorite}
          photoId={props.singlePhotoDetails.id}
          favorites={props.favorites}
        />
        <img
          onClick={() => props.setDisplayModal(props.singlePhotoDetails)}
          className="photo-details-modal__image"
          src={props.singlePhotoDetails.urls.full}
        />
        <div className="photo-details-modal__photographer-details ">
          <img
            className="photo-details-modal__photographer-profile"
            src={props.singlePhotoDetails.user.profile}
          />
          <div className="photo-details-modal__photographer-info">
            {props.singlePhotoDetails.user.name}
            <div className="photo-details-modal__photographer-location">
              {props.singlePhotoDetails.location.city},
              {props.singlePhotoDetails.location.country}
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">Similar Photos</div>
        <div className="photo-details-modal__images">
          {
            <PhotoList
              photos={Object.values(props.singlePhotoDetails.similar_photos)}
              favorites={props.favorites}
              toggleFavorite={props.toggleFavorite}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
