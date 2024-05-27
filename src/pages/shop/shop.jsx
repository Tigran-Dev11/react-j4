
import { shopMenu } from '../../utils/constant.js';
import * as S from './styled.js'

const Shop = () => {
  return <S.GeneralSection>
      <S.MenuContainer>
        {shopMenu.map(({ title, path }) => (
          <S.MenuItem key={path}>
          <S.LinkToHome to={path}>{title}</S.LinkToHome>
          </S.MenuItem>
        ))}
      </S.MenuContainer>
  </S.GeneralSection>;
};

export default Shop;
