import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { ROUTES } from "../../../utils/constants";
import Input from "../../../common/input/index";
import Button from "../../../common/button/index";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SCHEMA } from "../../../validation";

const Login = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate(ROUTES.register);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SCHEMA.loginSchema),
  });

  const onSubmit = (data) => {
    localStorage.setItem("data", JSON.stringify(data));

    navigate(ROUTES.userpage);
  };

  return (
    <S.loginContainer>
      <S.loginCardCont>
        <S.titleLogin>Login</S.titleLogin>
        <S.formInputs onSubmit={handleSubmit(onSubmit)}>
          <S.label htmlFor="Email">Email</S.label>
          <Input
            type="email"
            placeholder="Email *"
            register={register("email")}
            variant={"primary"}
            error={errors?.email}
          />
          <S.label htmlFor="password">Password</S.label>
          <Input
            type="password"
            placeholder="Password *"
            register={register("password")}
            error={errors?.password}
            variant={"primary"}
            isPasswordMode={true}
            className="loginPassword"
          />
          <S.linkToRegister onClick={goToRegister}>
            do not have an account ?
          </S.linkToRegister>
          <Button>enter</Button>
        </S.formInputs>
      </S.loginCardCont>
    </S.loginContainer>
  );
};

export default Login;
