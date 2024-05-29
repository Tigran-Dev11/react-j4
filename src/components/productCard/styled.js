import styled from "styled-components";

export const productContainer = styled.div`
  width: 270px;
  height: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0px, 12px, 12px, 12px;
  align-items: start;
  border-radius: 20px;
  transition: 0.5s;
  border-radius: 14px;

  &&:hover {
    transform: scale(1.04);
    transition: 0.5s;
  }
`;

export const PriceProduct = styled.p`
  margin-right: 200px;
`;

export const productItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
`;

export const addBasket = styled.div`
width:100%;
display: flex;
align-items: center;

`;

export const productCount = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`;

export const minusItem = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
`;
export const plusItem = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
`;
export const addButton = styled.button`
  width: 140px;
  height: 40px;
  background-color: #3c6255;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  transition: 0.5s;


  &:hover{
    transform: scaleX(1.1);
    transition: 0.5s;
  }
`;

export const productImg = styled.img`
  width: 100%;
  border-radius: 20px;
  height: 340px;
`;

export const productTitle = styled.p`
height: 60px;
`;

export const fiveStar = styled.img``;
export const addToCardContainer = styled.div``