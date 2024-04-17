import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "../../validation";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SCHEMA.registerSchema)
    });


    const onSubmit = (data) => {

    };

    return (
        <div className="container">
            <h1>Register page</h1>
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
                <input
                    type="password"
                    placeholder="confirm password *"
                    {...register("cPassword")}
                />
                <p>{errors?.cPassword?.message}</p>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Register;