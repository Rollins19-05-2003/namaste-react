import { AiFillStar } from "react-icons/ai";
import { RES_LOGO_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) =>{
    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        // dispatch an action
        dispatch(addItem(item));
    }
    return(
        <div>
            {items.map((item) =>(
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 flex justify-between"> 
                    <div className="w-9/12">
                        <div className="text-lg">
                            <h3 className="font-semibold mt-8"> {item.card.info.name}</h3>
                            <h3 className="font-semibold"> ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</h3>
                        </div>
                        <h3 className="text-green-500 font-semibold my-4 flex items-center"> <AiFillStar/> {item.card.info.ratings.aggregatedRating.rating} <span className="text-black font-semibold">({item.card.info.ratings.aggregatedRating.ratingCountV2})</span></h3>
                        <h3 className=" text-gray-700"> {item.card.info.description}</h3>
                    </div>
                    <div className="w-3/12">
                        <div className="absolute">
                            <button className="p-2 ml-[70px] mt-[160px] rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]" 
                            onClick={()=>handleAddItem(item)}
                            >
                                Add +
                            </button>
                        </div>
                        <img src={RES_LOGO_URL +item.card.info.imageId} className="w-full rounded-lg h-60"></img>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;
