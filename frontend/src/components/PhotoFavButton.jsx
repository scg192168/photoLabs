import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = (props) => {
  // const [isLiked, setIsLiked] = useState(false);

  // const handleLikeClick = () => {
  //   setIsLiked(!isLiked);
  // };

  return (
    <div className="photo-list__fav-icon" onClick={props.toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.isLiked} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
