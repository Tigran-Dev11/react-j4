import "./style.scss"
import { headerMenu } from "../../utils/constants"
import { NavLink } from "react-router-dom"

const Header = () => {

    return (
        <header>
            <ul>
              {headerMenu.map(({title,path})=>(
                <li>
                    <NavLink to={path}>{title}</NavLink>
                </li>
              ))}       
            </ul>
        </header>
    )
}

export default Header