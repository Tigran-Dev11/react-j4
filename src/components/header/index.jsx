import { IMAGES } from "../../assets/images";
import { menuList } from "../../utils/constant";
import "./style.css";

const Header = () => {
  return (
    <header>
      <img src={IMAGES.logo} alt="logo" className="logo" />
      <ul>
        {menuList.map(({ title, path }, index) => {
          return (
            <li key={index}>
              <a href={path}>{title}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
