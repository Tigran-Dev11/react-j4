import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "../../validation";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SCHEMA.loginSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Login" 
        {...register("email")}
        className={errors?.email?.message ? "error" : ""}
      />
      <p>{errors?.email?.message}</p>

      <input 
        type="password" 
        placeholder="Password" 
        {...register("password")}
        className={errors?.password?.message ? "error" : ""}
      />
      <p>{errors?.password?.message}</p>

      <button>Show Password</button>
      <button type="submit" onClick={handleSubmit(onSubmit)}>Join</button>
    </div>
  );
};

export default Login;
