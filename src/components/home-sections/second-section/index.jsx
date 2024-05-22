import * as S from "./styled"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productSelector } from "../../../redux/product-slice/selector";



const SecondSection = () =>{
    const dispatch = useDispatch();
    const { ptoducts } = useSelector(productSelector);


    useEffect(() => {
        dispatch(productActions.getProduct());
        
      }, []);
console.log(products);
    return(
<S.Container>
    {ptoducts.map((item) => {
        <h1>{item.title}</h1>
    })}

</S.Container>
    )
}

export default SecondSection;