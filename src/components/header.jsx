import { useState } from "react";
import * as S from "./styled";
import { COLORS } from "../assets/colors";

const Header = () => {
  const [color, setColor] = useState(COLORS.green);
  const [title, setTitle] = useState("Welcome!");

  const changeColor = () => {
    color === COLORS.green ? setColor(COLORS.blue) : setColor(COLORS.green);
  };

  const changeTitle = () => {
    title === "Welcome!" ? setTitle("Hello!") : setTitle("Welcome!");
  };

  return (
    <S.HeaderContainer color={color}>
      <h1>{title}</h1>
      <S.Button onClick={changeColor}>Change color</S.Button>
      <S.Button onClick={changeTitle}>Change title</S.Button>
    </S.HeaderContainer>
  );
};

export default Header;
