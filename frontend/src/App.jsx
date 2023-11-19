import React from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import "./App.scss";

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    getPhotosByTopicId,
  } = useApplicationData();

  return (
    <>
      <HomeRoute
        openModal={onPhotoSelect}
        favoritesPhotos={state.favoritesPhotos}
        toggleFavorite={updateToFavPhotoIds}
        topics={state.topics}
        photos={state.photos}
        getPhotosByTopicId={getPhotosByTopicId}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          closeModal={onClosePhotoDetailsModal}
          selectedPhoto={state.selectedPhoto}
          favoritesPhotos={state.favoritesPhotos}
          toggleFavorite={updateToFavPhotoIds}
          photos={state.photos}
        />
      )}
    </>
  );
};

export default App;

//   return (
//     <div className="App">
//       <HomeRoute
//         favorites={favorites}
//         toggleFavorite={toggleFavorite}
//         photos={photos}
//         topics={topics}
//         displaySinglePhotoDetails={displaySinglePhotoDetails}
//       />
//       {diplayModal && (
//         <PhotoDetailsModal
//           closeDisplayModal={setDisplayModal}
//           toggleFavorite={toggleFavorite}
//           favorites={favorites}
//           singlePhotoDetails={singlePhotoDetails}
//           setDisplayModal={setDisplayModal}
//         />
//       )}
//     </div>
//   );
// };

// export default App;
