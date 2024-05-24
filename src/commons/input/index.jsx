import * as S from "./styled.js";

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></S.Input>
  );
};

export default Input;
