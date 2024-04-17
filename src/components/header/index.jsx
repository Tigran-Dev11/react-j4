import "./style.scss";
import { menu } from "../../util/constant";
import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <div className="header">
        <ul>
        {menu.map(({ path, title }) => (
          <li key={path}>
            {/* <NavLink to={path}>{title}</NavLink> */}
            <a href={path}>{title}</a>
          </li>
))}
      </ul>
        </div>
    )
}

export default Header;