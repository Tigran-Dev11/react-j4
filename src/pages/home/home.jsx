import * as S from "./styled";
import { IMAGES } from "../../assets/images";




const Home = () => {
    return(
        <S.HomeContainer>
          <S.Section1>
           <S.h1><S.Span>Order ahead</S.Span> and earn <br></br> rewards for every purchase</S.h1>
         
         <S.images src={IMAGES.rectangle}></S.images>
         </S.Section1>
        </S.HomeContainer>
    )
};

export default Home;
