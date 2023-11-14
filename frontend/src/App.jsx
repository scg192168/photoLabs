import React, { useState } from "react";
import TopNavigationBar from "./components/TopNavigationBar";
import PhotoList from "./components/PhotoList";
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
  )
  } else {
    setFavorites((prevFavorites) => [...prevFavorites, photoID]);
  }
}
  return (
    <div className="App">
      <TopNavigationBar favorited={favorites.length > 0} />
      <PhotoList
        favorites={favorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        isLiked={isLiked}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;
