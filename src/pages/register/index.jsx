import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../common/input";
import Button from "../../common/button";
import { SCHEMA } from "../../validation";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      fullName: "Default Name"
    },
    resolver: yupResolver(SCHEMA.registerSchema)
  });

  const onSubmit = (data) => {
    console.log(data, "data");
    {
      localStorage.setItem("userInfo", JSON.stringify(data));
    }
  };

  const navigate = useNavigate();

  // const goToLoginPage = () => {
  //   navigate(ROUTES.login);
  // };

  return (
    <div className="Register">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>

        <Input
          type="text"
          placeholder="Full Name"
          className={errors?.fullName?.message ? "error" : " "}
          register={register("fullName")}
        />
        <p>{errors?.fullName?.message}</p>

        <Input
          type="text"
          placeholder="Last Name"
          className={errors?.lastName?.message ? "error" : " "}
          register={register("lastName")}
        />
        <p>{errors?.lastName?.message}</p>

        <Input
          type="email"
          placeholder="Email"
          className={errors?.email?.message ? "error" : " "}
          register ={register("email")}
        />
        <p>{errors?.email?.message}</p>

        <Input
          type="phone"
          placeholder="Phone Number"
          className={errors?.phone?.message ? "error" : " "}
          register ={register("phone")}
        />
        <p>{errors?.phone?.message}</p>

        <Input type="pass" placeholder="Password" register = {register("password")} />
        <p>{errors?.password?.message}</p>

        <Input
          type="pass"
          placeholder="Confirm Password"
          register ={register("cPassword")}
        />
        <p>{errors?.cPassword?.message}</p>

        
        {navigate(ROUTES.login)}
        <Button title="Submit" className="btn" />
      </form>
    </div>
  );
};

export default Register;
