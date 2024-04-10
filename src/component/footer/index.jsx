import './style.css';
import { IMAGES } from "../../assets";

const Footer = () => {

    return (
        <footer>
            <div className='footer-header'>
                <ul>
                    <li>Placing an order</li>
                    <li>Shipping options</li>
                    <li>Tracking a package</li>
                    <li>Country availability</li>
                    <li>Repairs</li>
                    <li>Installation</li>
                    <li>Ideas & Info</li>
                </ul>
                <ul>
                    <li>Help Center</li>
                    <li>Contact Us</li>
                    <li>Financing</li>
                    <li>Device recycling</li>
                    <li>Sustainability</li>
                    <li>Gift returns</li>
                    <li>Refurbished</li>
                    <li>Trade-in</li>
                    <li>Pixel for Business</li>
                    <li>Locations</li>
                </ul>
            </div>
            <div className='footer-footer'>
                <ul>
                    <img src={IMAGES.footerIcon} alt="flag-icon" />
                    <li>United States</li>
                    <li>Privacy</li>
                    <li>Google Nest Commitment to Privacy</li>
                    <li>Sales Terms</li>
                    <li>Terms of Service</li>
                    <li>Careers</li>
                </ul>
            </div>

        </footer>

    )
}

export default Footer