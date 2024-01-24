import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) => {
  const { resobj } = props;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
      <img
      className="rounded-lg"
        alt="yess"
        width="100%"
        src={CDN_URL + resobj.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{resobj.info.name}</h3>
      <h4> {resobj.info.cuisines.join(", ")}</h4>
      <h4>{resobj.info.avgRating}</h4>
      <h4>{resobj.info.costForTwo}</h4>
      <h4>{resobj.info.sla.deliveryTime} mins</h4>
    </div>
  );
};
export default ResturantCard;
