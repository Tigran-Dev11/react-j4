import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants";

export const IsAuth = (Component) => {
  let accessToken = localStorage.getItem("access_token");
  const navigate = useNavigate();



  return Component;
};
