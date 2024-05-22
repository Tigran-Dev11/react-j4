import Button from "../../../commons/button";
import * as S from "./styled"

const FirstContainer = () =>{
return(
    <S.Container>
       <S.TextContainer>
        <S.FirstText>LOOK YOUR BEST</S.FirstText>
        <S.SecText>FOR YOUR SPECIAL DAY</S.SecText>
       </S.TextContainer>

       <S.BtnContainer>
       <S.Button>New Arrivals</S.Button>
      
       </S.BtnContainer>
    </S.Container>
)
}

export default FirstContainer;