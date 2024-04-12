import "./header.css";
import { menuList } from "../../utils/constant";

const Header = () => {
  return (
    <header className="head">
        <h1>Italic</h1>
          <ul>
        {menuList.map(({ title, path }, index) => {
          return (
            <li key={index}>
              <a href={path}>{title}</a>
            </li>
          );
        })}
      </ul>
      <h3>sign in</h3>
    </header>
    
  );
};

export default Header;