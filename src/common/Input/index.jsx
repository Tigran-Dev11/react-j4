import { useState } from "react";

const inputVariants = {
  primary: "primary",
  secondary: "secondary"
};

export const Input = ({
  type,
  placeholder,
  onChange,
  variant,
  register,
  error,
  inputRef,
  isPasswordMode,
  ...rest
}) => {
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
        ref={inputRef}
      />
      {isPasswordMode && (
        <>
          {inputType === "password" ? (
            <span
              onClick={() => {
                setInputType("text");
              }}
            >
              show
            </span>
          ) : (
            <span
              onClick={() => {
                setInputType("password");
              }}
            >
              hide
            </span>
          )}
        </>
      )}
      <p>{error?.message ?? null}</p>
    </div>
  );
};
