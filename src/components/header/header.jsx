import { headerMenu } from "../../utils/constant";
import { IMAGES } from "../../assets/images";
import * as S from './styled'

const Header = () => {
  return (

    <S.MenuHeader>
      <S.Logo src={IMAGES.apple}></S.Logo>
      <S.Ul >
        {headerMenu.map(({ title , path }) => (
          <S.Li key={path}>
            <S.A href={path}>{title}</S.A>
          </S.Li>
        ))}
      </S.Ul>
      <S.Inp placeholder="   Search"></S.Inp>
      </S.MenuHeader>
  );
};

export default Header;