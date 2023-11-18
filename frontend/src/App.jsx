import React, { useState } from "react";
import TopNavigationBar from "./components/TopNavigationBar";
import PhotoList from "./components/PhotoList";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import "./App.scss";

// define a state to store your favorite photos e.g. array of photo IDs
const App = () => {
  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (photoID) => {
    setFavorites((prevFavorites) => [...prevFavorites, photoID]);
  };

  const removeFromFavorites = (photoID) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((id) => id !== photoID)
    );
  };

  const isLiked = (photoID) => {
    return favorites.includes(photoID);
  };

  const toggleFavorite = (photoID) => {
    if (favorites.includes(photoID)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((id) => id !== photoID)
      );
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, photoID]);
    }
  };
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (photoID) => {
    /*Fetch data for the selected photo based on photo ID */
    const selectedPhotoData = fetchDataForSelectedPhoto(photoID);
    setSelectedPhoto(selectedPhotoData);
    setIsModalOpen(true);
  };
  // const closeModal = () => {
  //   setIsModalOpen(false);

  return (
    <div className="App">
      <TopNavigationBar favorites={favorites.length > 0} />
      <PhotoList
        favorites={favorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        isLiked={isLiked}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          selectedPhoto={{ selectedPhoto }}
        />
      )}{" "}
      {/* Render the modal when isModalOpen is true */}
    </div>
  );
};

export default App;
