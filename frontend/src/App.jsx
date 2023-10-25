import React from "react";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForPhotoListItem = [
    {
      id: "1",
      location: {
        city: "Montreal",
        country: "Canada",
      },
      liked: false,
      imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
      username: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
    {
      id: "2",
      location: {
        city: "Montreal",
        country: "Canada",
      },
      liked: true,
      imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
      username: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
    {
      id: "3",
      location: {
        city: "Montreal",
        country: "Canada",
      },
      liked: false,
      imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
      username: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  ];
  return (
    <div>
      <h1>PhotoLabs</h1>
      <div className="app">
        {sampleDataForPhotoListItem.map((photo, index) => (
          <PhotoListItem key={index} samplePhoto={photo} />
        ))}
      </div>
    </div>
  );
};
export default App;
