import React from "react";
import * as S from "./styled";
import { headerMenu } from "../../utils/constants";

const Header = () => {
  return (
    <S.HeaderCont>
      <S.component>
        <ul>
          {headerMenu.map((title, index) => {
              return (
                <h1 key={index}>{title}</h1>
              )
          })}
        </ul>
      </S.component>
    </S.HeaderCont>
  );
};

export default Header;
