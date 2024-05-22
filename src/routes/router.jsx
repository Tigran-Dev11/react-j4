import { Route, Routes } from "react-router-dom";
import routes from "./routes";

const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component, id }) => (
        <Route key={id} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default Router;
