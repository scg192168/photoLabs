import React from "react";
import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from "./components/PhotoList";
import "./App.scss";

const App = () => (
  <div className="App">
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <TopNavigationBar />
    <PhotoList />
  </div>
);

export default App;
