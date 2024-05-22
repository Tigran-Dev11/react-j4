import * as S from "./styled.js";

const ProductItem = ({products}) => {


    return(
        <S.ProductsContainer>
              {products.name}
        </S.ProductsContainer>
    )
};


export default ProductItem;


