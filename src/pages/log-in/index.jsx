import * as S from "./styled.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "../../validation";

import Input from "../../commons/input";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMA.loginSchema),
  });

  const onSubmit = (data) => {
    localStorage.getItem("data", JSON.stringify(data));
  };

  return (
    <S.FormContainer className="container">
      <S.PageTitle>Login page</S.PageTitle>
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          placeholder="Email *"
          register={register("email")}
          variant={"primary"}
          error={errors?.email}
        />

        <Input
          type="password"
          placeholder="Password *"
          register={register("password")}
          error={errors?.password}
          variant={"primary"}
          isPasswordMode={true}
          className="loginPassword"
        />
        <S.LoginButton>Login</S.LoginButton>
      </S.LoginForm>
    </S.FormContainer>
  );
};

export default Login;
