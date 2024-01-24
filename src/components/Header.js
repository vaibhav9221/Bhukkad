import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const isoffline = useOnlineStatus();
  const data = useContext(userContext);

  // Subscribing the the store using the selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-200 shadow-lg mb-2">
      <div className="top-container">
        <img className="w-52" src={LOGO_URL} alt="food" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online:{isoffline ? "yes" : "no"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold px-4">
            <Link to="cart">Cart-{cartItems.length}</Link>
          </li>
          <li>{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
