import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "../../validation";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import Input from "../../commons/input";

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
        <div className="container">
            <h1>Login page</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <Input
                    type="email"
                    placeholder="email *"
                    register={register("email")}
                    variant={'primary'}
                    error={errors?.password}

                />

                <Input
                    type="password"
                    placeholder="password *"
                    register={register("password")}
                    error={errors?.password}
                    variant={'primary'}
                    isPasswordMode={true}
                />


                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;