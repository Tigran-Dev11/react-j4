import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "../../validation";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
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
        localStorage.getItem('data', JSON.stringify(data))

        navigate(ROUTES.userpage)

    };

    return (
        <div className="container">
            <h1>Login page</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                <Input
                    type="email"
                    placeholder="Email *"
                    register={register("email")}
                    variant={'primary'}
                    error={errors?.email}

                />

                <Input
                    type="password"
                    placeholder="Password *"
                    register={register("password")}
                    error={errors?.password}
                    variant={'primary'}
                    isPasswordMode={true}
                    className="loginPassword"
                />


                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;