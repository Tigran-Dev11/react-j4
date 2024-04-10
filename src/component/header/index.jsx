import './style.css';
import { IMAGES } from '../../assets';
import { menuList } from '../../util/constant';


const Header = () => {

    return (
        <header>
            <div>
                <img src={IMAGES.headerLogo} alt="LOGO" className='logo' />
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
            <div>
                <img src={IMAGES.headerSearchIcon} alt="ICON" />
                <img src={IMAGES.headerIcon} alt="icon" />
                <img src={IMAGES.headerUserIcon} alt="ICON" />
                <img src={IMAGES.headerBagIcon} alt="icon" />
            </div>

        </header>
    )
}

export default Header;