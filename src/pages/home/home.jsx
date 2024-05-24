import * as S from './styled'
import Button from '../../commons/button';
import { IMAGES } from '../../assets/images';

const Home = () =>{

    return (
   <S.HomeContainer>
       <S.Section1>
         <S.Section1A>
            <S.Text1>Your Ultimate Online <S.Span>Grocery</S.Span></S.Text1>
            <S.Text2>Experience grocery shopping and swift home delivery with our wide range of fresh produce and essentials</S.Text2>
            <Button children={"Learn More"}/>
         </S.Section1A>
         <S.Section1B>
            <S.Image src={IMAGES.pear}></S.Image>
         </S.Section1B>
       </S.Section1>
       <S.Section2>
        <S.Paremeters src={IMAGES.parameters}></S.Paremeters>
       </S.Section2>
       <S.Section3>
          <S.Section3A>
              <S.Section3A1>
                <S.RedApples src={IMAGES.redapple}></S.RedApples>
              </S.Section3A1>
              <S.Section3A2>
                <S.Text3>SUMMER SALE</S.Text3>
                <S.Text4>40%OFF</S.Text4>
                <S.Text5>Fresh Fruit %100</S.Text5>
                <Button children={"Shop Now >"}/>
              </S.Section3A2>
          </S.Section3A>
          <S.Section3B>
                <S.Text6>Fresh Delivered Daily</S.Text6>
                <S.Cheese src={IMAGES.cheese}></S.Cheese>
          </S.Section3B>
       </S.Section3>
   </S.HomeContainer>

    )
};



export default Home;