import { IMAGES } from '../../assets/images';
import Button from '../../commons/button';
import * as S from './styled.js'

const About = () => {
  return (
  <S.Section5>
  <S.Section5General>
    <S.Section5a>
      <S.Fruits src={IMAGES.fruits}></S.Fruits>
    </S.Section5a>
    <S.Section5b>
      <S.Text8>ECO-Friendly</S.Text8>
      <S.Text9>
        Discover a vibrant array of locally sourced and eco-friendly
        products on our grocery web store, connecting you with sustainable
        choices that support both the community and the planet.
      </S.Text9>
      <Button children={"Learn More"} />
    </S.Section5b>
  </S.Section5General>
</S.Section5>);
};

export default About;
