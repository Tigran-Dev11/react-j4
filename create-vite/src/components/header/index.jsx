import * as S from "./styled.js";
import Button from "../../commons/button"


const Header = () => {


    return (
        <S.HeaderContainer>
            <S.HeaderTop>
                <S.HeaderTopDivOne>
                  <S.HeaderTopText>Store Location: Lincoln-344, Illinois, Chicago, USA</S.HeaderTopText>  
                </S.HeaderTopDivOne>
                <S.HeaderTopDivTwo>
                    <Button title='Sign In'/>
                    <Button title='Sign Up'/>
                </S.HeaderTopDivTwo>
            </S.HeaderTop>
            <S.HeaderSearch>

            </S.HeaderSearch>
            <S.HeaderMenu>

            </S.HeaderMenu>
        </S.HeaderContainer>
    )
};


export default Header;