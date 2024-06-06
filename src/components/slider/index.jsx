import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productSelector } from "../../redux/product-slice/selector";
import * as S from "./styled";

const ImageSlider = () => {

    const { products } = useSelector(productSelector);
    const { "prod-id": ProductId } = useParams();
  
    const product = products.find((item) => item.id == ProductId);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
        <S.SliderContainer>
      <Slider {...settings}>
        {product.images.map((image, index) => (
          <S.SliderContainer key={index}>
            <S.SliderImg src={image} alt={`Slide ${index}`}></S.SliderImg>
          </S.SliderContainer>
        ))}
      </Slider>
      </S.SliderContainer>
  );
};

export default ImageSlider;
