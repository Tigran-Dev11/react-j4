import * as S from "./styled";
import { headerMenu } from "../../utils/constant";
import { IMAGES } from "../../assets/images";

const Header = () => {
    return (

        <S.MenuHeader>
            <S.Logo src={IMAGES.group}></S.Logo>
            <S.Ul >
                {headerMenu.map(({ title, path }) => (
                    <S.Li key={path}>
                        <S.A href={path}>{title}</S.A>
                    </S.Li>
                ))}
            </S.Ul>
        </S.MenuHeader>
    );
};

export default Header;