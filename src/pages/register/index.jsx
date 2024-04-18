import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "../../validation";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues:{
      login: '',
      email: '',
      phone: '',
      password: '',
      cPassword: ''
    },
    resolver: yupResolver(SCHEMA.registerSchema)
  });

  console.log(errors, "error");

  const onSubmit = (data) => {
    console.log(data, "data");
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Login" 
        {...register("login")}
        className={errors?.login?.message ? "error" : ""}
      />
      <p>{errors?.login?.message}</p>

      <input 
        type="text" 
        placeholder="Email" 
        {...register("email")}
        className={errors?.email?.message ? "error" : ""}
      />
      <p>{errors?.email?.message}</p>

      <input 
        type="text" 
        placeholder="Phone" 
        {...register("phone")}
        className={errors?.phone?.message ? "error" : ""}
      />
      <p>{errors?.phone?.message}</p>

      <input 
        type="password" 
        placeholder="Password" 
        {...register("password")}
        className={errors?.password?.message ? "error" : ""}
      />
      <p>{errors?.password?.message}</p>

      <input 
        type="password" 
        placeholder="Confirm Password" 
        {...register("cPassword")}
        className={errors?.cPassword?.message ? "error" : ""}
      />
      <p>{errors?.cPassword?.message}</p>

      <button>Show Password</button>
      <button type="submit">Complete Registration</button>
    </div>
  );
};

export default Register;
