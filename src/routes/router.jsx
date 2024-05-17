import { Route , Routes, useNavigate} from "react-router-dom"
import routes from "./routes"


const Router = () => {

    return (
        <Routes>
            {routes.map(({path,component:Component})=>(
                <Route key={path} path={path} element={<Component />}/>
            ))}
        </Routes>
    );
};


export default Router