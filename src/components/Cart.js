import React from "react";
import ItemCategory from "./ItemCategory";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispath = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const handleClear = () => {
    dispath(clearCart());
  };

  return (
    <div className="text-center">
      <div className=" font-bold">Cart</div>
      <div>
        <button onClick={handleClear}>Clear Cart</button>
      </div>
      <div className="w-6/12 text-center m-auto">
        {cartItems.length === 0 ? (
          <h1>No Items in cart</h1>
        ) : (
          <ItemCategory items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
