import "./style.scss"
import { footerMenu } from "../../utils/constants"

const Footer = () => {

    return (
        <footer>
            <ul>
                {footerMenu.map(({title,index})=>{
                    <li>
                        <a key={index}>{title}</a>
                    </li>
                })}
            </ul>
        </footer>
    )
}
export default Footer