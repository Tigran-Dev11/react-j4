import "./home.scss" 
import { ROUTES } from "../../utils/constants"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()
   
    navigate(ROUTES.home)
    return (
        <div className="home">
            
        </div>
    )
}



export default Home