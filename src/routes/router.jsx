import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import NotFound from "../pages/not-found";

const Router = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
