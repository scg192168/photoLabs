// import React from "react";
// import "../styles/PhotoDetailsModal.scss";
// import closeSymbol from "../assets/closeSymbol.svg";

// const PhotoDetailsModal = ({ closeModal }) => {
//   return (
//     <div className="photo-details-modal">
//       <button className="photo-details-modal__close-button">
//         <img src={closeSymbol} alt="close symbol" onClick={closeModal}/>
//         {/* The X representation is for close button */}
//       </button>
//       {/* Add your modal content here */}
//       This is a blank modal.
//     </div>
//   );
// };

// export default PhotoDetailsModal;
// PhotoDetailsModal.jsx

import React, { useEffect, useState } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({ closeModal, selectedPhoto }) => {
  const [similarPhotos, setSimilarPhotos] = useState([]);
  // console.log(props.selectedPhoto);
  console.log(selectedPhoto);

  // useEffect(() => {
  //   // Fetch similar photos based on the selectedPhoto.id from your backend API
  //   // Update the API endpoint and data structure accordingly
  //   const fetchSimilarPhotos = async () => {
  //     try {
  //       const response = await fetch(`/api/similar-photos/${selectedPhoto.id}`);
  //       const data = await response.json();
  //       setSimilarPhotos(data.similarPhotos);
  //     } catch (error) {
  //       console.error("Error fetching similar photos:");
  //     }
  //   };

  //   if (selectedPhoto) {
  //     fetchSimilarPhotos();
  //   }
  // }, [selectedPhoto]);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={closeModal}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__content">
        {/* Display details of the selected photo */}
        <img src={selectedPhoto.url} alt={selectedPhoto.title} />
        <h2>{selectedPhoto.title}</h2>
        <p>{selectedPhoto.description}</p>
        <p>Author: {selectedPhoto.author}</p>

        {/* Display similar photos */}
        <h3>Similar Photos</h3>
        <div className="photo-details-modal__similar-photos">
          {similarPhotos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.url} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
      <PhotoFavButton
        isLiked={selectedPhoto.isLiked}
        toggleFavorite={() => {}}
      />
    </div>
  );
};

export default PhotoDetailsModal;
