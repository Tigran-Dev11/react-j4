import * as S from "./styled.js";



const BasketItem = () => {


    return (
        <S.BasketItemContainer>
            <p>{product.name}</p>
            <img src={product.img} alt="image" />
            <button>-</button>
            <button>{count}</button>
            <button>+</button>
        </S.BasketItemContainer>
    )
};


export default BasketItem;