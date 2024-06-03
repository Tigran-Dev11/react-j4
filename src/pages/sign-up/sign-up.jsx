import { useTranslation } from "react-i18next";
import { Button } from "../../commons/button/styled.js";
import { Input } from "../../commons/input/styled.js";
import * as S from "./styled.js";

const SignUp = () => {
  const { t, i18n } = useTranslation();
  return (
    <S.RegisterContainer>
      <S.FormInputs>
        <S.Title>{t("header.sign-up")}</S.Title>
        <Input type="text" placeholder="Fullname *" />

        <Input type="email" placeholder="Email *" />

        <Input type="number" placeholder="Phone" />

        <Input type="password" placeholder="Password *" />

        <Input type="password" placeholder="Confirm Password *" />

        <Button>{t("header.sign-up")}</Button>
      </S.FormInputs>
    </S.RegisterContainer>
  );
};

export default SignUp;
