import * as S from "./styled.js";
import Input from "../../commons/input";

const Login = () => {
  return (
    <S.FormContainer>
      <S.PageTitle>Login page</S.PageTitle>
      <S.LoginForm>
        <Input type="email" placeholder="Email *" />

        <Input type="password" placeholder="Password *" />
        <S.LoginButton>Login</S.LoginButton>
      </S.LoginForm>
    </S.FormContainer>
  );
};

export default Login;
