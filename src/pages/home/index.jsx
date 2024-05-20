import { IMAGES } from "../../assets/index.js";
import * as S from "./styled.js";


const Home = () =>{

    return (
        <S.HomeContainer>
            <S.MainBannerOne src={IMAGES.homeBannerOne}/>
            
        </S.HomeContainer>
    )
};

export default Home;