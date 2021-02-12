import React from "react";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/NavBar";
import { SliderData } from "./components/SliderData";

const App = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider slides={SliderData} />
    </div>
  );
};

export default App;
