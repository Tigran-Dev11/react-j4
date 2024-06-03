import Slider from "react-slick";
import * as S from "./styled"

export const CommentCarousel = ({ data }) => {
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


  return (
    <S.SliderContainer>
      <Slider {...settings}>
        <S.UlComponent>
        {data.map(
          ({ title, description, fiveStars, approvedUser }) => (
            <S.li>
              <S.fiveStars src={fiveStars} />
              <S.nameAndSuccessCont>
                <S.userName>{title}</S.userName>
                <S.approvedUserIcon src={approvedUser} />
              </S.nameAndSuccessCont>
              <S.descriptionUser>{description}</S.descriptionUser>
            </S.li>
          )
        )}
        </S.UlComponent>
      </Slider>
    </S.SliderContainer>
  );
};
export default CommentCarousel

