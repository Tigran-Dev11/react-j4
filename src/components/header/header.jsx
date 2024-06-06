import { IMAGES } from '../../assets/images/index.js'
import * as S from "./styled.js";
import { headerMenu } from '../../utils/constant.js';
import Button from '../../commons/button/index.jsx';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/constant.js';

const Header = () => {


    return (
        <S.HeaderCotainer>
            <S.Logo src={IMAGES.group} />

            <S.MenuContainer>
                {headerMenu.map(({ title, path }) => (
                    <S.MenuItem key={path}>
                        <S.LinkToHome to={path}>{title}</S.LinkToHome>
                    </S.MenuItem>
                ))}
            </S.MenuContainer>
          
            <NavLink to={ROUTES.Button}>
            <S.Button>Download</S.Button>
          </NavLink>
        
        </S.HeaderCotainer>
    )
}

export default Header;