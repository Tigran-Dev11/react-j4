import { useContext } from "react";
import { GlobalContext } from "../provider/global-provider";

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext };
