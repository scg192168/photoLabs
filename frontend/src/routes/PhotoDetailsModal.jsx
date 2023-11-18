import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ closeModal }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={closeModal}/>
        {/* The X representation is for close button */}
      </button>
      {/* Add your modal content here */}
      This is a blank modal.
    </div>
  );
};

export default PhotoDetailsModal;
