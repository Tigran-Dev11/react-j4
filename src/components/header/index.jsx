import "./style.scss"
import { NavLink } from "react-router-dom"
import { menu } from "../../utils/constant"

const Header = () => {

    return (
        <header>
             <ul>
                {menu.map(({ path, title}) => (
                    <li key={path}>
                        <NavLink className="headerLists" to={path}>{title}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header