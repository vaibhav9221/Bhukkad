import React from "react";
import ItemCategory from "./ItemCategory";

const ResturantCategory = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div
      className="w-6/12 mx-auto  shadow-lg bg-gray-300 cursor-pointer my-5 p-4"
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <span className="font-bold text-lg cursor-pointer">
          {data.card.card.title}
        </span>

        <span>🔽</span>
      </div>
      {showItems && <ItemCategory items={data.card.card.itemCards} />}
    </div>
  );
};

export default ResturantCategory;
