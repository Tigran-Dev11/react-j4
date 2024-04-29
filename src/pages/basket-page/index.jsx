import { useNavigate } from "react-router-dom"
import IMAGES from "../../aseets"
import "./style.scss"
import { ROUTES } from "../../utils/constant"
import { useContext } from "react";
import "./style.scss";
import { GlobalContext } from "../../provider";




const Basket = () => {


    const navigate = useNavigate()

    const goToHomepage = () => {
        navigate(ROUTES.home)
    }

    return (
        <div className="basketSection">
            <div className="top-components-cont">
                <h1>Your Basket</h1>
                <img src={IMAGES.home} alt="image" onClick={goToHomepage}/>
            </div>
        </div>
    )
}

export default Basket