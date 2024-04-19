import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component }) => {
        return <Route key={path} path={path} element={<Component />} />;
      })}
    </Routes>
  );
};

export default Router;
