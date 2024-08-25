import { useParams } from 'react-router-dom';
import { RES_LOGO_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { AiFillClockCircle, AiFillStar } from 'react-icons/ai';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {
  const {id} = useParams();
  const resInfo = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  return (
    <div className="menu">
      <header className="bg-black text-white p-6">
        <div className="relative left-2/4">
          <div className="">
            <img src={RES_LOGO_URL + cloudinaryImageId} alt="Restaurent Info" className='mt-4 rounded-lg'/>
          </div>
          <div className="">
              <h1 className="font-bold text-2xl">{name}</h1>
              <h3 className='font-semibold'>{cuisines.join(', ')}</h3>
              <h4 className="font-semibold ">
                <span className="flex items-center"><AiFillStar /> {avgRating}</span>
              </h4>
              <h4 className="font-semibold ">
                <span className="flex items-center"><AiFillClockCircle />  {deliveryTime} MINS </span>
              </h4>
              <h3 className='font-semibold'>{costForTwoMessage}</h3>
            </div>
        </div>

      </header>

      <div className="menu-main">
        {/* categories accordions */}
        {categories.map((category, index) => (
          // Controlled Component
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showIndex={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            // dummy={dummy}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
