import * as S from "./styled";

const Button = ({ children, onClick }) => {
  return <S.button onClick={onClick}>
    {children}
  </S.button>;
};

export default Button;
