import {LOGO_URL} from "../utils/constants"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
    let btnName = "Login"
    const [btnNameReact, setBtnNameReact] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    // Subscribing to the store using a selector
    const cartItems = useSelector((store)=> store.cart.items);
    return(
        <div className="flex justify-between bg-pink-100  sm:bg-yellow-200 lg:bg-green-200">
            <div className="w-40 ml-4">
                    <img src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex mr-4">
                    <li className="px-4 font-semibold"> <Link to="/home">Home</Link> </li>
                    <li className="px-4 font-semibold"> <Link to="/about">About Us</Link> </li>
                    <li className="px-4 font-semibold"> <Link to="/contact">Contact</Link> </li>
                    <li className="px-4 font-semibold"> <Link to="/cart">Cart - ({cartItems.length} items) </Link> </li>
                    <li className="px-4 font-semibold"> <Link to="/grocery">Grocery</Link> </li>
                    <li className="px-4">
                        {onlineStatus===true ? "🟢" : "🔴"}
                    </li>
                    <button className="font-semibold bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded cursor-pointer" onClick={()=>{
                        btnNameReact === 'Login'
                        ? setBtnNameReact('Logout')
                        : setBtnNameReact('Login');
                    }}>
                        {btnNameReact}
                    </button>
                    <li className="px-4 font-semibold flex items-center"> {loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;