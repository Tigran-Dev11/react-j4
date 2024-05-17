import * as S from "./styled.js";
import Button from "../../commons/button";
import SearchForm from "../../commons/form-search";
import { IMAGES } from "../../assets/index.js";
import { NavLink } from "react-router-dom";
import { headerMenu } from "../../utils/constant.js"


const Header = () => {


    return (
        <S.HeaderContainer>
            <S.HeaderTop>
                <S.HeaderTopDivOne>
                    <S.HeaderTopText>Store Location: Lincoln-344, Illinois, Chicago, USA</S.HeaderTopText>
                </S.HeaderTopDivOne>
                <S.HeaderTopDivTwo>
                    <Button title='Sign In' />
                    <Button title='Sign Up' />
                </S.HeaderTopDivTwo>
            </S.HeaderTop>
            <S.HeaderSearch>
                <S.HeaderSearchDivOne>
                    Logo
                </S.HeaderSearchDivOne>
                <S.HeaderSearchDivTwo>
                    <SearchForm type="text" placeholder="Search" />
                </S.HeaderSearchDivTwo>
                <S.HeaderSearchDivThree>
                    <S.HeaderIcon src={IMAGES.heartIcon} alt="icon" />
                    <S.HeaderIcon src={IMAGES.basketIcon} alt="basket" />
                </S.HeaderSearchDivThree>
            </S.HeaderSearch>
            <S.HeaderMenu>
                <S.HeaderMenuDivOne>
                    <S.HeaderMenuList>
                        {headerMenu.map(({ path, title }) => (
                            <S.HeaderMenuListItem key={path}>
                                <S.Link to={path}>{title}</S.Link>
                            </S.HeaderMenuListItem>
                        ))}
                    </S.HeaderMenuList>
                </S.HeaderMenuDivOne>
                <S.HeaderMenuDivTwo>
                    <S.HeaderMenuAddress>Tel:(219) 555-0114</S.HeaderMenuAddress>
                </S.HeaderMenuDivTwo>
            </S.HeaderMenu>
        </S.HeaderContainer>
    )
};


export default Header;