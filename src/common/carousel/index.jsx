import Slider from "react-slick";
import * as S from "./styled"

export const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  console.log(data);
  return (
    <S.SliderContainer>
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <S.CarouselItem key={index}>
              <S.brandImg src={item.brand} alt={`carousel-item-${index}`} />
            </S.CarouselItem>
          );
        })}
       
      </Slider>
    </S.SliderContainer>
  );
};