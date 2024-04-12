import './style.css';
import { sectionMenu } from "../../utils/constant"

const Footer = () => {

    return(
        <footer>
            <div className='cont-2'>
                <h1>O.A.DEVOLD.</h1>
            </div>
            <div className='cont-3'>
                <h1>Man</h1>
                <h1>Woman</h1>
                <p>Our Heritage</p>
                <p>Care</p>
                <p>Collections</p>
                <p>Responsibility</p>

            </div>
            <ul>
                    {sectionMenu.map(({ title }, index) => {
                        return (
                            <li key={index}>
                                <a>{title}</a>
                            </li>
                        );
                    })}
                </ul>
                <div className='cont-1'>
                    <p><span>Newsteller Collections events</span><span>and new arrivals get 10% off on</span> <span>your next online order</span></p>
                </div>
        </footer>
    )
}

export default Footer