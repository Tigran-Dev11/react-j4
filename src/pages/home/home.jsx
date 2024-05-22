import * as S from './styled'
import Button from '../../commons/button';
import { IMAGES } from '../../assets/images';

const Home = () =>{

    return (
       <S.Section1>
         <S.Section1A>
            <S.Text1>Your Ultimate Online <S.Span1>Grocery</S.Span1></S.Text1>
            <S.Text2>Experience grocery shopping and swift home delivery with our wide range of fresh produce and essentials</S.Text2>
            <Button children={"Learn More"}/>
         </S.Section1A>
         <S.Section1B>
            <S.Image src={IMAGES.pear}></S.Image>
         </S.Section1B>
       </S.Section1>
    )
};

export default Home;