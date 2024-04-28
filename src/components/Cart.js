import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);//it subscribed small portion of the store
  //we can write above line of code also - const store = useSelector((store)=>store)
  //                                        const cartItem = store.cart.items;
  //both are same but the code in comment line is less efficient because the store variable is subscribed to redux store , whenerver amything changes int he whole store it updated or modifies here.

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-5">
      <h1 className="font-bold text-4xl">Cart</h1>
      <div className="w-6/12 m-auto bg-gray-100">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItem.length == 0 && (
          <h1 className="text-2xl">Cart is Empty. Add Items in the Cart</h1>
        )}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};
export default Cart;
