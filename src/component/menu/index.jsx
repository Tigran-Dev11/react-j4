import { menuMenuList } from "../../util/constant";
import "./style.css";


const Menu = () => {


    return (
        <menu>
            {menuMenuList.map(({ name, title, info, img }, index) => {
                return (
                    <div key={index}>
                        <p>{name}</p>
                        <h1>{title}</h1>
                        <button>{info}</button>
                        <img src={img} alt="photo" />
                    </div>
                )
            })}
        </menu>
    )
}

export default Menu