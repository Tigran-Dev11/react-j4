import styled from "styled-components";
import { COLORS } from "../../assets/colors";


export const Container = styled.div`
margin-top: 160px;
margin-bottom: 120px;
width:calc(100% - 200px);
height: 180px;
padding-inline: 100px;
background:linear-gradient(to top, #F0F0F0 50%, white 50%);
`

export const Card = styled.div`
width: 100%;
height: 180px;
display: flex;
justify-content: space-around;
align-items: center;
background-color:${COLORS.black};
border-radius: 20px;
padding-block: 24px;
`

export const nameCont = styled.div`
width: 620px;
height: 94px;
margin-bottom: 40px;
`
export const Name = styled.h1`
font-size: 40px;
font-weight: 700;
line-height: 45px;
text-align: left;
color: #FFFFFF;
`
export const InputCont = styled.div`
height: 160px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
export const EmailInput = styled.input`
width: 250px;
height: 44px;
gap: 12px;
border: none;
border-radius: 62px;
padding-inline: 20px;
`
export const EmailButton = styled.button`
width: 290px;
height: 44px;
padding-inline: 20px;
gap: 12px;
border: none;
border-radius: 62px;
`