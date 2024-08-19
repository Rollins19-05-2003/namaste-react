import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"

const Body = () =>{
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    return(
        <div className="body">
            <div className="search">
                <input type="search" placeholder="search restaurant"/>
            </div>

            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filtered_data = listOfRestaurant.filter(
                            (res) => res.data.avgRating >= 4
                        );
                        setListOfRestaurant(filtered_data);
                    }} >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                {listOfRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;