import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    let btnName = "Login"
    const [btnNameReact, setBtnNameReact] = useState('Login');

    return(
        <div className="header">
            <div className="logo-container">
                <div className="logo">
                    <img src={LOGO_URL} />
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li> <Link to="/home">Home</Link> </li>
                    <li> <Link to="/about">About Us</Link> </li>
                    <li> <Link to="/contact">Contact</Link> </li>
                    <li> <Link to="/cart">Cart</Link> </li>
                    <button className="login-btn" onClick={()=>{
                        btnNameReact === 'Login'
                        ? setBtnNameReact('Logout')
                        : setBtnNameReact('Login');
                        // btnName = "Logout"
                    }}>
                        {/* {btnName} */}
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;