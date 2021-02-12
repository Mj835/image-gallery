import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  // Here, i used slides and which is equals to SliderData and you can find it in App.js file
  const length = slides.length;

  // In this function we are checking current state of the slide,
  // and we give current = 0
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //   console.log(current);

  // isArray reprsent to an Object
  // Here, if slides is not and Array or slides.length is less than or equal to 0
  // Then return Null
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
      {/* Here I use map method to represent the following data - */}
      {SliderData.map((slide, index) => {
        return (
          // Here the in the className i use ternary operation for CSS
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {/* Here, i check index equalts to current for image change */}
            {index === current && (
              <img src={slide.image} alt="Art & CUlture" className="image" />
            )}
          </div>
        );
      })}
      <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
    </section>
  );
};

export default ImageSlider;
