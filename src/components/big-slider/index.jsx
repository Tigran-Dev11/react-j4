import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import { useState , useEffect } from "react";
import { productSelector } from "../../redux/product-slice/selector";
import * as S from "./styled";

const PageSlider = (product) => {
    const dispatch = useDispatch();
    const { products } = useSelector(productSelector);
    const [min, setMin] = useState(10);

    useEffect(() => {
      dispatch(productActions.getProduct());
    }, []);

  
   

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
        {products.map((product, index) => (
            <S.SliderPage>

         <S.ProductContainer>
         {/* <NavLink to={`${ROUTES.products}/${product.id}`}> */}
           <S.ProductImg src={product.images[2]} alt={product.category.name}></S.ProductImg>
         {/* </NavLink> */}
         <S.ProductTitle>{product.title}</S.ProductTitle>
         <S.ProductPrice>
           {t("home.price")}: {product.price * count}$
         </S.ProductPrice>
         <S.CountContainer>
           <S.MinusBtn onClick={minusBtn}>-</S.MinusBtn>
           <S.CountPlace>{count}</S.CountPlace>
           <S.PlusBtn onClick={plusBtn}>+</S.PlusBtn>
         </S.CountContainer>
         <S.ButtonAddBasket onClick={() => addBasket(product)}>
           {t("home.btnAddBasket")}
         </S.ButtonAddBasket>
       </S.ProductContainer>
       </S.SliderPage>)
        )}
      </Slider>
      </S.SliderContainer>
  );
};

export default PageSlider;
