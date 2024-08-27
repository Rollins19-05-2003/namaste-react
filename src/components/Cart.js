import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // subscribing to my store to get the added data
  const cartItems = useSelector((store)=> store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () =>{
      dispatch(clearCart());
  }

  return (
    <div className="text-center m-4">
      <div className="flex w-6/12 m-auto"> 
        <h1 className="text-2xl font-bold">Your Cart 🛒</h1>
        <button className="border border-black p-2 relative left-3/4 font-semibold" onClick={handleClearCart}>Clear Cart</button>
      </div>
      <div className="w-6/12 bg-slate-100 text-left m-auto rounded-xl">
        {cartItems.length === 0 && <h1 className="font-extrabold text-2xl text-center my-4">Your cart is Empty😕 <br/>Add some Delicious MealMeal 🤤 🥘 🍔 . .</h1>}
        <ItemList items ={cartItems}/>
      </div>
    </div>
  )
}

export default Cart;
