import css from "./style.module.scss";
import Apath from "../common/a";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constant";

const HomePage = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate(ROUTES.login);
  };
  const goToRegisterPage = () => {
    navigate(ROUTES.register);
  };
  return (
    <div className={css.container}>
      <div className={css.centerBlock}>
        <h1>React App</h1>
        <Apath title="Register" path="/register" onClick={goToLoginPage} />
        <Apath title="Login" path="/login" onClick={goToRegisterPage} />
      </div>
    </div>
  );
};

export default HomePage;
