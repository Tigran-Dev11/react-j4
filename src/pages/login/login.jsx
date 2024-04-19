import "./login.scss"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "../../validation";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import Button from "../../commons/button";

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SCHEMA.loginSchema)
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        localStorage.setItem('data', JSON.stringify(data))

        navigate(ROUTES.home)

    };

    return (
        <div className="cont">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

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

            <Button title={"Enter"}></Button>
        </form>
    </div>
    )
}

export default Login