import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const CartItemContainer = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  height: auto;
  border-radius: 8px;
`;

export const CartItemImage = styled.img`
  widows: 200px;
  height: 200px;
`;

export const ProductTitle = styled.p``;

export const MinusBtn = styled.button`
width: 20px;
height: 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export const PlusBtn = styled.button`
width: 20px;
height: 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;


export const OrderButtons = styled.div`
  display: flex;
  gap: 30px;
`;
export const CountContainer = styled.p`
  `

export const DeleteBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
 background-color:${COLORS.brown};
 color: ${COLORS.white};
 cursor: pointer;
`;

export const ProductPrice = styled.p``;