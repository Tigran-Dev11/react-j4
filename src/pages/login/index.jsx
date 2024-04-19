import "./style.css";
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
        
    };

    return (
        <div className="container">
            <h1>Login page</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <input
                    type="email"
                    placeholder="email *"
                    {...register("email")}
                    className={errors?.email?.message ? "error" : ""}
                />
                <p>{errors?.email?.message}</p>
                <input
                    type="password"
                    placeholder="password *"
                    {...register("password")}
                    className={errors?.email?.message ? "error" : ""}
                />
                <p>{errors?.password?.message}</p>

                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;