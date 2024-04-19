 import './register.scss'
 
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
      phone: '+374',
    },
    resolver: yupResolver(SCHEMA.registerSchema)
  });

  console.log(errors, "error");

  console.log({ ...register("fullName") });

  const onSubmit = (data) => {
    console.log(data, "data");
  };


  console.log(watch().fullName);
  
    return (
    <div>
        <div className="container">
      <h1>Register</h1>
      <form className='form' action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="full name *" className={errors?.fullName?.message ? "error" : ""} {...register("fullName")}/>
        <p>{errors?.fullName?.message}</p>

        <input type="email" placeholder="email *" {...register("email")} className={errors?.email?.message ? "error" : ""}/>
        <p>{errors?.email?.message}</p>

        <input type="number" placeholder="phone" {...register("phone")} className={errors?.phone?.message ? "error" : ""}/>
        <p>{errors?.phone?.message}</p>

        <input type="password" placeholder="password *" {...register("password")} className={errors?.password?.message ? "error" : ""}/>
        <p>{errors?.password?.message}</p>
        
        <input type="password" placeholder="confirm password *" {...register("cPassword")} className={errors?.cPassword?.message ? "error" : ""}/>
        <p>{errors?.cPassword?.message}</p>
        <button>submit</button>
      </form>
    </div>
  
    </div>
    );
  };
  
  export default Register;