import styled from "styled-components";
import { COLORS } from "../../../assets/colors";

export const Container = styled.div`
  width: calc(100% - 120px);
  padding-inline: 60px;
  min-height: calc(100vh - 200px);
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TopTitle = styled.h1``;
export const TopPiece = styled.div``;
export const ClothesPiece = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
`;
export const viewAllPiece = styled.div``;

export const viewAllClothes = styled.button`
border: none;
width: 120px;
height: 40px;
cursor: pointer;
font-size: 16px;
transition: 0.5s;
background-color: transparent;
border-radius:14px;
margin-top:200px;

&:hover{
    transform: scaleX(1.1);
    transition: 1s;
    border-radius: 0px;
    border: 1px solid #FFE8C8;
    
    
    }
`
