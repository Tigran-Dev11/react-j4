import { IMAGES } from "../../assets/images";
import "./style.css";
import { useState } from "react";

const inputVariants = {
    primary: "primary",
    secondary: "secondary"
};


const Input = ({ type, placeholder, onChange,
    variant,
    register,
    error,
    isPasswordMode,
    ...rest }) => {

    const [inputType, setInputType] = useState(type);

    return (
        <div>
            <input
                className={inputVariants[variant] || inputVariants.primary}
                type={isPasswordMode ? inputType : type}
                placeholder={placeholder}
                onChange={onChange}
                {...register}
                {...rest}
            />
            {isPasswordMode && (
                <>
                    {inputType === "password" ? (
                        <img src={IMAGES.show} alt="icon"  onClick={() => {
                            setInputType("text");
                        }}/>
                    ) : (
                        <img src={IMAGES.hide} alt="icon" onClick={() => {
                            setInputType("password");
                        }}/>
                    )}
                </>
            )}
            <p>{error?.message ?? null}</p>
        </div>
    )
};

export default Input;