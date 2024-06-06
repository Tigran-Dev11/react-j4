import styled from "styled-components"
import { IMAGES } from "../../../assets/images"
import { COLORS } from "../../../assets/colors"

export const Container  = styled.div`
width: 100%;
min-height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;
`

export const TextContainer  = styled.div`
`

export const Title = styled.h1`
color: ${COLORS.black};
`
export const ProductsContainer = styled.div`

width: 100%;
min-height: 590px;
display: flex;
flex-wrap: wrap;
gap:20px;
justify-content: center;
align-items: center;
margin-top: 30px;
`

export const ProductContainer  = styled.div`
width: 400px;
min-height: 400px;
border-radius: 20px;
display: flex;
background-color: ${COLORS.grey};
flex-direction: column;
justify-content: center;
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
export const ButtonSeeMore = styled.button`
   width: 200px;
height: 46px;
background-color: ${COLORS.brown};
border-radius: 8px;
color: white;
padding: 10px 10px ;
font-size:16px;
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
export const CountContainer = styled.div`
width: 120px;
height: 20px;
display: flex;
justify-content: space-around;
align-items: center;
`