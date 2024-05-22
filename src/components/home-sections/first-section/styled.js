import styled from "styled-components"
import { IMAGES } from "../../../assets/images/index"


export const Container  = styled.div`
width: 100%;
height: 590px;
background-image: url(${IMAGES.firstBackground});
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const TextContainer  = styled.div`
width: 510px;
height: 118px;
display: flex;
flex-direction:column;
align-items: start;
justify-content: space-between;
`

export const FirstText  = styled.p`
color: white;
font-size: 30px;

`
export const SecText  = styled.h1`
color: white;
font-size: 45px;
`

export const BtnContainer  = styled.div`
width: 510px;
height: 50px;
display: flex;
flex-direction:column;
align-items: start;
justify-content: center;
`


export const Button  = styled.button`
width: 164px;
height: 46px;
background-color: #826300;
border-radius: 8px;
color: white;
padding: 10px 10px ;
font-size:16px;
`