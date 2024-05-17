import React from "react";
import * as S from "./styled";
import { headerMenu } from "../../utils/constants";

const Header = () => {
  return (
    <S.HeaderCont>
      <S.component>
        <ul>
          {headerMenu.map(title => {
         <h1>{title}</h1>
          })}
          <title>adsd</title>
        </ul>
      </S.component>
    </S.HeaderCont>
  );
};

export default Header;
