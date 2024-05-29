import styled from "styled-components";
import { COLORS } from "../../assets/colors";

export const ProductsContainer = styled.div`
  width: 250px;
  height: auto;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  box-shadow: 0px 4px 4px 0px ${COLORS.black};
`;

export const ProductTitle = styled.p`
font-size: 24px;
font-family: "montserrat";
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 150px;
`;

export const OrderButtons = styled.div`
  display: flex;
  gap: 20px;
`;

export const MinusButton = styled.button`
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const PlusButton = styled.button`
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ProductQuantity = styled.p`
font-family:"montserrat";
font-weight: 500;
`;

export const AddBasketButton = styled.button`
  border: none;
  background-color: ${COLORS.green3};
  color: ${COLORS.white};
  cursor: pointer;
  height: 30px;
  width: 250px;
  border-radius: 0 0 8px 8px;
`;

export const ProductPrice = styled.p`
font-family: "montserrat";
font-weight: 500;
`;
