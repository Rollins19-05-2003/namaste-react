import {RES_LOGO_URL} from "../utils/constants"

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime
    } = resData?.info;
    return(
        <div className="res-card">
            <img 
                className="res-logo"
                src={RES_LOGO_URL + cloudinaryImageId}
                alt="Biryani"
            ></img>
            <div className="res-data">
              <h3>{name}</h3>
              <h4>{cuisines.join(', ')}</h4>
              <h4>{avgRating} stars</h4>
              <h4>{costForTwo}</h4>
              {/* <h4>{deliveryTime} minutes</h4> */}
            </div>
        </div>
    )
}

export default RestaurantCard;