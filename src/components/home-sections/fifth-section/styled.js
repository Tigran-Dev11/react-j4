import styled from "styled-components"
import { IMAGES } from "../../../assets/images/index"
import { COLORS } from "../../../assets/colors"

export const Container  = styled.div`
width: 100%;
min-height: 590px;
background-color: ${COLORS.grey} ;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
margin-top: 100px;

`

export const InfoContainer  = styled.div`
width: 400px;
height: 250px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

`
export const InfoIcon  = styled.img`
width: 40px;
`

export const InfoTitle  = styled.h1`
font-size: 20px;

`
export const InfoText = styled.p`
width: 350px;
`
