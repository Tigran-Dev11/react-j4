import './style.css';
import { menuList } from "../../utils/constant.js";

const Header = () => {

    return(
        <header>
            <div className='ul-box-2'>
                <h1>O.A.DEVOLD.</h1>

            </div>
            <div className='ul-box-3'>
                <h2>Women</h2>
                <h2>Man</h2>
            </div>
            <div className='ul-box'>
                <ul>
                    {menuList.map(({ title, path }, index) => {
                        return (
                            <li key={index}>
                                <a href={path}>{title}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </header>
    )
}

export default Header