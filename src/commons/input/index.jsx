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
<<<<<<< HEAD
        <div className="inputContainer">
=======
        <div className="input-wrapper">
>>>>>>> 84df22e8f230b8ae87e5cabf9a20e9871e1de4d5
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
                        <img className="showIcon" src={IMAGES.showPasswordIcon} alt="icon"  onClick={() => {
                            setInputType("text");
                        }}/>
                    ) : (
                        <img className="hideIcon" src={IMAGES.hidePasswordIcon} alt="icon" onClick={() => {
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