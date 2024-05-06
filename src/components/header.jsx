import { useState } from "react";
import * as S from "./styled";
import { COLORS } from "../assets/colors";

const Header = () => {
  const [color, setColor] = useState(COLORS.green);

  const changeColor = () => {
    color === COLORS.green ? setColor(COLORS.blue) : setColor(COLORS.green);
  };

  return (
    <S.HeaderContainer color={color}>
      <S.Button onClick={changeColor}>Change color</S.Button>
    </S.HeaderContainer>
  );
};

export default Header;
