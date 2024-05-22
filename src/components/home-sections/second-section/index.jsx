import * as S from "./styled"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productSelector } from "../../../redux/product-slice/selector";

import { productActions } from "../../../redux/product-slice/product-slice";



const SecondSection = () =>{
    const dispatch = useDispatch();
    const { products } = useSelector(productSelector);


    useEffect(() => {
        dispatch(productActions.getProduct());
        
      }, []);

    return(
<S.Container>
  
    {products.map((item) => {
        <h1>{item.title}</h1>
    })}

</S.Container>
    )
}

export default SecondSection;