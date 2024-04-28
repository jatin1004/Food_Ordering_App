import { useEffect, useState } from "react";
import Shimmmer from "./Shimmmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestuarntMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const Restromenu = () => {
  const { resId } = useParams();

  const resinfo = useRestuarntMenu(resId);

  const[showIndex, setShowIndex] = useState(0);

  if (resinfo === null) return <Shimmmer />;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwoMessage } =
    resinfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const catogeries =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold my-5">{name}</h1>
      <h3 className="font-bold text-xl">
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <h3 className="font-bold text-xl">Rating - {avgRating}</h3>

      {catogeries.map((category, index) => (
        //controlled component  
        <ResCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true:false}
          setShowIndex = {() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Restromenu;
