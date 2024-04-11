import { navMenuList } from "../../util/constant";
import "./style.css";




const Nav = () => {

    return (
        <nav>
            <h1>Shop by category.</h1>
            <div>
                {navMenuList.map(({ name, title, info, img }, index) => {
                    return (
                        <div key={index} className="box">
                            <img src={img} alt="photo" />
                            <p>{name}</p>
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}

export default Nav