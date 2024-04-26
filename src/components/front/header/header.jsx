import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"

const Header = ()=>{
    return(
       <header className="header">
        <div>
            <h1>
                <Link to="/" className="logo">
                    Electronics Shop
                </Link>
            </h1>
        </div>
        <div className="header-links">
           <ul>
            <li>
                <Link to="/"></Link>
            </li>
           </ul>
           <ul>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
           </ul>
        </div>

       </header>
       
    )
}

export default Header;