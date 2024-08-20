import {LOGO_URL} from "../utils/constants"
import { useState } from "react";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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