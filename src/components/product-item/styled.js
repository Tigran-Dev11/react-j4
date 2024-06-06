import styled from "styled-components"
import { COLORS } from "../../assets/colors"



export const ProductContainer  = styled.div`
width: 400px;
min-height: 400px;
border-radius: 20px;
display: flex;
background-color: ${COLORS.grey};
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 6px 6px 0px ;
`

export const ProductTitle  = styled.h1`
font-size: 16px;

`
export const ProductImg  = styled.img`
width: 300px;
height: 400px;
border-radius: 10px;
`

export const ProductDesc  = styled.p`
`

export const ProductPrice = styled.p`
`
export const ButtonAddBasket = styled.button`
   width: 200px;
height: 46px;
background-color: ${COLORS.brown};
border-radius: 8px;
color: white;
padding: 10px 10px ;
font-size:16px;
`



export const CountContainer = styled.div`
width: 120px;
height: 20px;
display: flex;
justify-content: space-around;
align-items: center;
`

export const MinusBtn = styled.button`
width: 30px;
height: 20px;
border:none;
border-radius: 4px;

`

export const PlusBtn = styled.button`
width: 30px;
height: 20px;
border:none;
border-radius: 4px;
`

export const CountPlace = styled.p`
`