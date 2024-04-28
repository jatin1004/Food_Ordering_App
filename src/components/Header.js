import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  // subscribing our store using selector
  const cartItems = useSelector((store) => store.cart.items)

    return (
      <div className="flex justify-between shadow-md bg-green-100 sm:bg-red-100 ">
        <div className="logo-it">
          <Link to="/"><img className="w-32 cursor-pointer" src={LOGO_URL}/></Link>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4"> Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-4"> <Link to="/">Home</Link></li>
            <li className="px-4"> <Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItems.length})</Link></li>
            <button className="loginbtn" onClick={() => {
              loginbtn ==="Login"? setloginbtn("Logout") : setloginbtn("Login");
            }}>{loginbtn}</button>
            <li className="px-4 font-bold">{loggedInUser} </li>
          </ul>
        </div>
      </div>
    )
  };

  export default Header;