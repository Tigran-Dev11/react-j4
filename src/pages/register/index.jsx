import "./style.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "../../validation";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import Input from "../../commons/input";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SCHEMA.registerSchema)
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        localStorage.setItem('data', JSON.stringify(data))

        navigate(ROUTES.home)
    };

    return (
        <div className="register">
            <h1>Register page</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    placeholder="full name *"
                    register={register("fullname")}
                    variant={'primary'}
                    error={errors?.fullName}
                />


                <Input
                    type="email"
                    placeholder="email *"
                    register={register("email")}
                    variant={'primary'}
                    error={errors?.email}
                />

                <Input type="number" placeholder="phone" register={register("phone")}
                    error={errors?.phone}
                />

                <Input
                    type="password"
                    placeholder="password *"
                    register={register("password")}
                    error={errors?.password}
                    variant={'primary'}
                    isPasswordMode={true}

                />

                <input
                    type="password"
                    placeholder="cPassword *"
                    register={register("cPassword")}
                    error={errors?.password}
                    variant={'primary'}
                    isPasswordMode={true}

                />

                <button>Submit</button>
            </form>
        </div>
    );
};

export default Register;