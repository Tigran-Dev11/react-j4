import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./register-schema.js";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Login" 
        {...register("login")}
      />
      {errors.login && <p>{errors.login.message}</p>}

      <input 
        type="text" 
        placeholder="Email" 
        {...register("email")}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input 
        type="text" 
        placeholder="Phone" 
        {...register("phone")}
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <input 
        type="password" 
        placeholder="Password" 
        {...register("password")}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input 
        type="password" 
        placeholder="Confirm Password" 
        {...register("cPassword")}
      />
      {errors.cPassword && <p>{errors.cPassword.message}</p>}

      <button>Show Password</button>
      <button type="submit" onClick={handleSubmit(onSubmit)}>Complete Registration</button>
    </div>
  );
};

export default Register;
