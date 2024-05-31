import * as S from "./styled";
import { productSelector } from "../../../src/redux/product-slice/selector";

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../../src/redux/product-slice/product-slice";


const ProductItem = () =>{
    const { t } = useTranslation();
   
    const [count, setCount] = useState(1);
  
const dispatch = useDispatch()
    useEffect(() => {
      dispatch(productActions.getProduct());
    }, []);
  
  
    const plusBtn = () => {
      setCount(count + 1);
    };
    const minusBtn = () => {
      if (count > 1) setCount(count - 1);
    };
  
    const addBasket = (product, id) => {
      const item = {
        id,
        title: product.title,
        img: product.title,
        count,
        price: product.price,
      };
      dispatch(productActions.addBasket(item));
    };
  

     return(
        <S.ProductContainer>
        <S.ProductImg src={product.images[2]}></S.ProductImg>
        <S.ProductTitle>{product.title}</S.ProductTitle>
        <S.ProductPrice>
        {t("home.price")}: {product.price * count}$
        </S.ProductPrice>

        <S.CountContainer>
          <S.MinusBtn onClick={minusBtn}>-</S.MinusBtn>
          <S.CountPlace>{count}</S.CountPlace>
          <S.PlusBtn onClick={plusBtn}>+</S.PlusBtn>
        </S.CountContainer>
        <S.ButtonAddBasket onClick={() => addBasket(product.id)}>
          {t("home.btnAddBasket")}
        </S.ButtonAddBasket>
      </S.ProductContainer>
     )
}


export default ProductItem;