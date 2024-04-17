import { ROUTES } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate(ROUTES.login);
  };

  const goToRegisterPage = () => {
    navigate(ROUTES.register);
  };

  return (
    <main>
      <button onClick={goToLoginPage}>Login</button>
      <button onClick={goToRegisterPage}>Register</button>
      <Link to="https://google.com" target="_blank">google</Link>
    </main>
  );
};

export default Home;