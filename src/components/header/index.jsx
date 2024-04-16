import "./style.css";
import { menu } from "../../utils/constant";
import { NavLink } from "react-router-dom";


const Header = () => {

    return (
        <header>
            <ul>
                {menu.map(({ path, title }) => {
                    <li key={path}>
                        <NavLink to={path}>{title}</NavLink>
                    </li>
                })}
            </ul>
        </header>


    )
};


export default Header;