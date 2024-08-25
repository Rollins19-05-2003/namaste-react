import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
        Looks like you're offline! Please check your internet connection
      </h1>
    );

    if(listOfRestaurant.length === 0){
        return <Shimmer/>
    } 
    

    return (
        <div className="body">
            <div className="flex justify-between bg-gray-100">
                <div className="search m-4 p-4">
                    <input type="text" 
                        className=" border border-solid border-black rounded-lg px-4 py-1 " 
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
                        className="bg-green-300 ml-4 px-4 py-2 font-semibold rounded cursor-pointer" 
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


                <div className="flex items-center mr-6">
                    <button 
                        className="bg-green-300 px-2 py-2 font-semibold rounded-lg cursor-pointer" 
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

            <div className="flex flex-wrap bg-gray-200">
                {filterRestaurant.map((restaurant) => (
                    <Link to={"restaurants/" + restaurant.info.id} key={restaurant.info.id}>
                        {/* restaurant.info. */}
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
