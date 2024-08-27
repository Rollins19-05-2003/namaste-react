import {RES_LOGO_URL} from "../utils/constants"
import { FiClock } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla
    } = resData?.info;
    const {loggedInUser} = useContext(UserContext);
    return(
        <div data-testid="resCard" className="bg-green-100 m-4 w-80 h-[520px] rounded-tl-2xl rounded-tr-2xl hover:bg-green-300">
            <img 
                className="w-80 h-80 rounded-tl-2xl rounded-tr-2xl"
                src={RES_LOGO_URL + cloudinaryImageId}
                alt="Biryani"
            ></img>
            <div className="p-4">
              <h3 className="font-semibold py-2">{name}</h3>
              <h4 className="text-gray-600">{cuisines.join(', ')}</h4>
              <h4 className="font-semibold flex items-center"> <span className="pr-2"><AiFillStar /></span> {avgRating} stars</h4>
              <h4 className="font-semibold">{costForTwo}</h4>
              <h4 className="font-semibold flex items-center"> <span className="pr-2"><FiClock /> </span>{sla.deliveryTime} minutes</h4>
              {/* <h4 className="font-semibold flex items-center"> LoggedIn user : {loggedInUser}</h4> */}
            </div>
        </div>
    )
}

export default RestaurantCard;