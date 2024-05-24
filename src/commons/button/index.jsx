import * as S from "./styled.js";

const Button = ({ onClick, children, ...props }) => {
  return (
    <S.Button onClick={onClick} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
