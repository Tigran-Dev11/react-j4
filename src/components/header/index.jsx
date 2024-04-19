import { menu } from "../../utils/constants";
import "./style.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <ul>
        {menu.map(({ path, title }) => (
          <li key={path}>
            <NavLink to={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};


