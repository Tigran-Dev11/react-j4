import Input from "../../commons/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "../../validation";
import { ROUTES } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import "./style.scss";


const Order = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SCHEMA.registerSchema)
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        localStorage.setItem('data', JSON.stringify(data));


        navigate(ROUTES.home);
    };


    return (
        <div className="orderContainer">
            <h1>Order Page</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    placeholder="Fullname *"
                    variant={'primary'}
                    register={register("fullName")}
                    error={errors?.fullName}
                /><Input
                    type="email"
                    placeholder="Email *"
                    variant={'primary'}
                    register={register("email")}
                    error={errors?.email}
                />
                <Input
                    type="number"
                    placeholder="Number *"
                    variant={'primary'}
                    register={register("phone")}
                    error={errors?.phone}
                />
                <Input
                    type="text"
                    placeholder="Address *"
                    variant={'primary'}
                    register={register("fullName")}
                    error={errors?.fullName}
                />

                <button className="orderButton">Order</button>
            </form>


        </div>
    )
}

export default Order;