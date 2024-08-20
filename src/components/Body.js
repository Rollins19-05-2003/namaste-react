import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurants ? restaurants : []); // Ensure it's always an array
        setFilterRestaurant(restaurants ? restaurants : []); // Ensure it's always an array
    };

    if(listOfRestaurant.length === 0){
        return <Shimmer/>
    } 
    
    return (
        <div className="body">
            <div className="body-navbar">
                <div className="search">
                    <input 
                        type="text" 
                        placeholder="Search restaurant" 
                        className="search-input" 
                        value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value)
                            // const filter_restaurant = listOfRestaurant.filter(
                            //     (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            // )
                            // setListOfRestaurant(filter_restaurant);
                        }}
                    />
                    <button 
                        className="search-button" 
                        onClick={
                            ()=>{
                                const filter_restaurant = listOfRestaurant.filter(
                                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                                setFilterRestaurant(filter_restaurant);
                            }
                        }    
                    >       
                        Search
                    </button>
                </div>


                <div className="filter">
                    <button 
                        className="filter-btn" 
                        onClick={() => {
                            const filtered_data = listOfRestaurant.filter(
                                (res) => res.info.avgRating >= 4
                            );
                            setListOfRestaurant(filtered_data);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>

            <div className="res-container">
                {filterRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
