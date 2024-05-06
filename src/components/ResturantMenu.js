import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  //
  const { resId } = useParams();
  const [showindex, setshowIndex] = useState(0);
  const menu = useResturantMenu(resId);

  if (menu === null) return <Shimmer />;

  const { name, cuisines } = menu?.cards[2]?.card?.card?.info;

  const categories =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h4 className="font-bold my-6 text-2xl">{name}</h4>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>
      {/* Categories */}
      {categories.map((category, index) => (
        // controlled Component
        <ResturantCategory
          key={index}
          data={category}
          showItems={index === showindex ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
