import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemCategory = ({ items }) => {
  const dispatch=useDispatch();

  const handleClick=(item)=>{
    // dispatching the action
    dispatch(addItem(item))
  }
  console.log(items,'ittttttttt')

  return (
    <div>
      {items.map((item,index) => (
        <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"key={index} >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                ₹-
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="bg-red-50  p-2 rounded-lg shadow-lg mx-10" onClick={()=>handleClick(item)}>
                +ADD
              </button>
            </div>
            <img alt="" src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCategory;
