import { ROUTES } from "../../utils/constants.js";
import * as S from "./styled.js";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <S.HomeContainer>
      <S.Text>Hello</S.Text>
      <NavLink to={ROUTES.profile}>go to profile</NavLink>
    </S.HomeContainer>
  );
};

export default Home;
