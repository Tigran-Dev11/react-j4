import styled from "styled-components";


export const shoesContainer = styled.div`
width: 100%;
min-height: 500px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-block: 60px;
align-items: center;

`
export const titleShoes = styled.h1``

export const productTop = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
margin-top:40px;
width: 100%;
min-height: 260px;
align-items: center;
`

export const viewAllClothes = styled.button`
border: none;
width: 120px;
height: 40px;
cursor: pointer;
font-size: 16px;
transition: 0.5s;
background-color: transparent;
border-radius:14px;
margin-top:230px;

&:hover{
    transform: scaleX(1.1);
    transition: 1s;
    border-radius: 0px;
    border: 1px solid #FFE8C8;
    
    
    }
`

export const  viewAllContainer = styled.div``
export const TopPiece = styled.div``