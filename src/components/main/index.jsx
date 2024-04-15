import "./style.scss";
import Button from "../../utils/button/button";
import Register from "./registr";

import { IMAGES } from "../../assets/images"


function Main(){
    return(
        <div className="container">
            <div className="first">
                <img src={IMAGES.logo} alt="logo" className="logo"/>
             <h1 className="title">Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.</h1>
            </div>
            <div className="second">
                <Register/>
                   <div>
                   <Button title = "Sighn In" className = "create"/> 

                   </div>
            </div>
        </div>
    )
    
}

export default Main;