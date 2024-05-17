import * as S from "./styled";
import { menu } from "../../utils/constants"

const Header = () => {
  return (
    <S.HeaderContainer>
        <S.MenuContainer>

      <S.Ul >
        {menu.map(({ title , path }) => (
          <S.Li key={path}>
            <S.Apath href={path}>{title}</S.Apath>
          </S.Li>
        ))}
      </S.Ul>
      </S.MenuContainer>
    </S.HeaderContainer>
  );
};

export default Header;