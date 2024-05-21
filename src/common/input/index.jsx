import { IMAGES } from "../../assets";
import * as S from "./styled";
import { useState } from "react";

const inputVariants = {
  primary: "primary",
  secondary: "secondary",
};

const Input = ({
  type,
  placeholder,
  onChange,
  variant,
  register,
  error,
  isPasswordMode,
  ...rest
}) => {
  const [inputType, setInputType] = useState(type);

  return (
    <S.inputContainer>
      <S.userInfosInput
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
            <S.showIcon
              src={IMAGES.showPass}
              alt="icon"
              onClick={() => {
                setInputType("text");
              }}
            />
          ) : (
            <S.hideIcon
             
              src={IMAGES.hidePass}
              alt="icon"
              onClick={() => {
                setInputType("password");
              }}
            />
          )}
        </>
      )}
      <S.errorShow>{error?.message ?? null}</S.errorShow>
    </S.inputContainer>
  );
};

export default Input;
