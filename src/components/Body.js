import Restrocards, { withPromotedLabel } from "./Restrocards";
import { useState, useEffect, useContext } from "react";
import Shimmmer from "./Shimmmer";
import { Link, json } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofrestro, setlistofrestro] = useState([]);
  const [filterrestro, setfilterrestro] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  const RestrocardPromoted = withPromotedLabel(Restrocards);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistofrestro(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterrestro(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!!!!Please Check your Internet Connection.
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listofrestro.length === 0 ? (
    <Shimmmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-3 p-3">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black "
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="px-3 py-1 bg-blue-100 m-2 rounded-lg"
            onClick={() => {
              const filteredrestro = listofrestro.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilterrestro(filteredrestro);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-3 p-3 flex items-center">
          <button
            className="px-3 py-2 m-2 bg-gray-300 rounded-xl"
            onClick={() => {
              const filteredlist = listofrestro.filter(
                (resdata) => resdata.info.avgRating > 4
              );
              setlistofrestro(filteredlist);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-3 p-3 flex items-center">
          <label>UserName: </label>
          <input
            className="border border-black p-2 mx-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterrestro.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            className="links"
          >
            {restaurant.info.veg ? (
              <RestrocardPromoted resdata={restaurant} />
            ) : (
              <Restrocards resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
