import { headerMenu } from "../../utils/constant";
import { IMAGES } from "../../assets/images";
import * as S from './styled'

const Header = () => {
  return (

    <S.MenuHeader>
      <S.Logo src={IMAGES.apple}></S.Logo>
      <S.MenuContainer >
        {headerMenu.map(({ title , path }) => (
          <S.MenuItem key={path}>
            <S.A href={path}>{title}</S.A>
          </S.MenuItem>
        ))}
      </S.MenuContainer>
      <S.Input placeholder="Search"></S.Input>
      </S.MenuHeader>
  );
};

export default Header;