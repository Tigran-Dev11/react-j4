import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "../../validation";
import { Input } from "../../common/Input";

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
    defaultValues: {
      fullName: "Default Name"
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
    <div className="container">
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="full name *"
          className={errors?.fullName?.message ? "error" : ""}
          {...register("fullName")}
        />
        <p>{errors?.fullName?.message}</p>

        <input
          type="email"
          placeholder="email *"
          {...register("email")}
          className={errors?.email?.message ? "error" : ""}
        />
        <p>{errors?.email?.message}</p>
        <input type="number" placeholder="phone" {...register("phone")} />
        <p>{errors?.phone?.message}</p>
        <input
          type="password"
          placeholder="password *"
          {...register("password")}
        />
        <p>{errors?.password?.message}</p>
        <Input
         type="password"
         placeholder="confirm password *"
         register={register("cPassword")}
         isPasswordMode={true}
         variant={'primary'}
         error={errors?.password}
        />
        
        <button>submit</button>
      </form>
    </div>
  );
};

export default Register;
