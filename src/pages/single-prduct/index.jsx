import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productSelector } from "../../redux/product-slice/selector";
import * as S from "./styled"
import ImageSlider from "../../components/slider";

const SingleProduct = () => {
  const { products } = useSelector(productSelector);
  const { "prod-id": ProductId } = useParams();

  const product = products.find((item) => item.id == ProductId);

  console.log(products);

  return (
    <S.SinglePageContainer>
      <S.ImgContainer>
        {/* <S.ProductImg src={product.images}></S.ProductImg> */}
        <ImageSlider/>
      </S.ImgContainer>
      <S.InfoContainer>
        <S.ProductTitle>{product.title}</S.ProductTitle>
        <S.ProductPrice>Price:{product.price} $</S.ProductPrice>
        <S.ProductDesc>{product.description}</S.ProductDesc>
      </S.InfoContainer>
      </S.SinglePageContainer>
  );
};

export default SingleProduct;
