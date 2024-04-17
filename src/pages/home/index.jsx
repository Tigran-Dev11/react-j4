import { ROUTES } from "../../utils/constants";
import "./style.scss";
import { useNavigate } from "react-router-dom";

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
        </main>
    );
};

export default Home;