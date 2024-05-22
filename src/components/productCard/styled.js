import styled from "styled-components";

export const productContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
`;

export const productItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const addBasket = styled.div``;

export const productCount = styled.div`
  display: flex;
  gap: 10px;
`;

export const minusItem = styled.button``;
export const plusItem = styled.button``;
export const addButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: green;
  cursor: pointer;
  border: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const productImg = styled.img`
  width: 150px;
  height: 150px;
`;
