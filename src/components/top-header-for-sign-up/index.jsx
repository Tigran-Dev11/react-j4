import { ROUTES } from "../../utils/constants";
import * as S from "./styled";
import { NavLink, useNavigate } from "react-router-dom";

const TopHeader = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate(ROUTES.login);
  };

  return (
    <S.header>
      <S.aboutSignUp>
        Sign up and get 20% off to your first order.{" "}
        <S.linkToLogin onClick={goToLogin}>Sign Up Now</S.linkToLogin>
      </S.aboutSignUp>
    </S.header>
  );
};

export default TopHeader;
