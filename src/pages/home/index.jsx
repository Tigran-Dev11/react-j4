import { ROUTES } from "../../utils/constants";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState(0);

  const goToLoginPage = () => {
    navigate(ROUTES.login);
  };

  const goToRegisterPage = () => {
    //logic
    navigate(ROUTES.register);
  };







  return (
    <main>
      <button onClick={goToLoginPage}>Login</button>
      <button onClick={goToRegisterPage}>Register</button>
      <Link to="https://google.com" target="_blank">
        google
      </Link>

      <br />
      <h2>{number}</h2>
      <br />
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        increment
      </button>
    </main>
  );
};

export default Home;
