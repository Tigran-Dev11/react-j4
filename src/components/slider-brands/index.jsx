import React from "react";
import Slider from "react-slick";
import { IMAGES } from "../../assets";
import { brandsNames } from "../../utils/constants";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {brandsNames.map((item, index) => {
          return <p>{index}</p>;
        })}
      </Slider>
    </div>
  );
}

export default AutoPlay;
