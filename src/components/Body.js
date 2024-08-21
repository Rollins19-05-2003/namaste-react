import { Link } from "react-router-dom";
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
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.60470&lng=77.19890&carousel=true&third_party_vendor=1");
        const json = await data.json();
        console.log(json);
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurants);
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
                    <Link to={"restaurants/" + restaurant.info.id} key={restaurant.info.id}>
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
