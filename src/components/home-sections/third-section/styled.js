import styled from "styled-components"
import { IMAGES } from "../../../assets/images"
import { COLORS } from "../../../assets/colors"

export const Container  = styled.div`
width: 100%;
min-height: 236px;
background-image: url(${IMAGES.thirdBackground});
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const InfoContainer = styled.div`
width:100px;
height: 100px;
border:solid 1px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`

export const Text = styled.p`
color: ${COLORS.white};
font-size: 36px;

`

export const ButtonLearn = styled.button`
   width: 164px;
height: 46px;
background-color: ${COLORS.brown};
border-radius: 8px;
color: white;
padding: 10px 10px ;
font-size:16px;
`

