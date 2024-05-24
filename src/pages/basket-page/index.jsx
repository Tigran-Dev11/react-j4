import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

const Basket = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(ROUTES.home);
  };
  return (
    <div>
      <h1>sadfghj,m</h1>
      <button onClick={goToHomePage}>goToHome</button>
    </div>
  );
};
export default Basket;
