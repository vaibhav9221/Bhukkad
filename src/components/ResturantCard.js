import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) => {
  const { resobj } = props;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
      <img
      className="rounded-lg"
        alt="yess"
        width="100%"
        src={CDN_URL + resobj.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{resobj.name}</h3>
      <h4> {resobj.cuisines.join(", ")}</h4>
      <h4>{resobj.avgRating}</h4>
      <h4>{resobj.costForTwo}</h4>
      <h4>{resobj.sla.deliveryTime} mins</h4>
    </div>
  );
};
//  Heigher order component 
//  input Resturant Card ==ResturantCardLessRating
export const  ResturantCardLessRating=(ResturantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Less Rating</label>
        <ResturantCard {...props}/>
      </div>
    )
  }
}
export default ResturantCard;
