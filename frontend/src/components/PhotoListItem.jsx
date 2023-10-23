import React from "react";
import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const samplePhoto = props.samplePhoto;
  /* Insert React */
  return(
    <div>
     <img src={samplePhoto.imageSource}/>
     <img src={samplePhoto.profile}/>
     <h2> {props.samplePhoto.username} </h2>
     <h2> {props.samplePhoto.location.city}, {props.samplePhoto.location.country} </h2>
      </div>
  )
};

export default PhotoListItem;
