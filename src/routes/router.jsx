import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
    </Routes>
  );
};

export default Router;
