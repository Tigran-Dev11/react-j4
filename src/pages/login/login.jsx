import * as S from "./styled.js";
import Input from "../../commons/input";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t, i18n } = useTranslation();

  return (
    <S.FormContainer>
      <S.PageTitle>{t("header.login")}</S.PageTitle>
      <S.LoginForm>
        <Input type="email" placeholder="Email *" />

        <Input type="password" placeholder="Password *" />
        <S.LoginButton>{t("header.login")}</S.LoginButton>
      </S.LoginForm>
    </S.FormContainer>
  );
};

export default Login;
