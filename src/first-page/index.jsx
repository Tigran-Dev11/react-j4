import css from "./style.module.scss";
import Apath from "../common/a";
import Login from "../pages/login/index"
import Register from "../pages/register";
import { Link } from "react-router-dom"

// import IMAGES from "../aseets/index"

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.centerBlock}>
        <h1>React App</h1>
        <Apath title="Register" path="/pages/register" />
        <Apath title="Login" path="/pages/login"/>
      </div>
    </div>
  );
};

export default HomePage;


