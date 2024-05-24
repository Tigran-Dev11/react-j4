// import * as S from "./styled"
// import { useState } from "react";

// const ProductCard = ({ products }) => {
//     const [count, setCount] = useState(1);

// // console.log(products);
//     // const addBasket = () => {
//     //     const item = {
//     //         id: products.id,
//     //         title: products.title,
//     //         count,
//     //     }
//     // }

//     const minusItem = () => {
//       return count -= 1
//     }
//     const plusItem = () => {
//       return count += 1
//     }
//     console.log(products.id);

//     return (
//         <S.productContainer>
//             <S.productItem>
//                 {products.category}
//                 <img src={products.image} alt="image" className="pruductImg" />
//                 {products.price}
//             </S.productItem>
//             <S.addBasket>
//                 <S.productCount>
//                     <S.minusItem onClick={minusItem}>-</S.minusItem>
//                     {/* {count} */}
//                     <S.plusItem onClick={plusItem}>+</S.plusItem>
//                 </S.productCount>
//                 {/* <S.addButton onClick={addBasket} className="addButton">add basket</S.addButton> */}
//             </S.addBasket>
//         </S.productContainer>
//     );
// };

// export default ProductCard


const ProductCard = ({ products }) => {
  return <div><h1>{products.name}</h1></div>;
};

export default ProductCard;
