import * as S from "./styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Input from "../../../common/input";
import Button from "../../../common/button";
import { ROUTES } from "../../../utils/constants";
import { SCHEMA } from "../../../validation";

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

        navigate(ROUTES.login)
    };

    return (
        <S.registerContainer>
           
            <S.formInputs onSubmit={handleSubmit(onSubmit)}>
                 <S.titleRegister>Register page</S.titleRegister>
                <Input
                    type="text"
                    placeholder="Fullname *"
                    register={register("fullName")}
                    variant={'primary'}
                    error={errors?.fullName}
                />


                <Input
                    type="email"
                    placeholder="Email *"
                    register={register("email")}
                    variant={'primary'}
                    error={errors?.email}
                />

                <Input type="number" placeholder="Phone" register={register("phone")}
                    error={errors?.phone}
                />

                <Input
                    type="password"
                    placeholder="Password *"
                    register={register("password")}
                    error={errors?.password}
                    variant={'primary'}
                    isPasswordMode={true}
                    className="registerPassword"

                />

                <Input
                    type="password"
                    placeholder="Confirm Password *"
                    register={register("cPassword")}
                    error={errors?.password}
                    variant={'primary'}

                />

                <Button>Submit</Button>
            </S.formInputs>
        </S.registerContainer>
    );
};

export default Register;