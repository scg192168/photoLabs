import React, { useState } from "react";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [diplayModal, setDisplayModal] = useState(false);
  const [singlePhotoDetails, setSinglePhotoDetails] = useState();

  const toggleFavorite = (photoID) => {
    if (favorites.includes(photoID)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((id) => id !== photoID)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, photoID]);
    }
  };

  const displaySinglePhotoDetails = (photo) => {
    setDisplayModal(true);
    setSinglePhotoDetails(photo);
  };

  return (
    <div className="App">
      <HomeRoute
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        photos={photos}
        topics={topics}
        displaySinglePhotoDetails={displaySinglePhotoDetails}
      />
      {diplayModal && (
        <PhotoDetailsModal
          closeDisplayModal={setDisplayModal}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          singlePhotoDetails={singlePhotoDetails}
          setDisplayModal={setDisplayModal}
        />
      )}
    </div>
  );
};

export default App;
