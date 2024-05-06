import ResturantCard, { ResturantCardLessRating } from "./ResturantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  //  Whenever State variable update, react triggers a reconciliation cycle(rerender the component)
  const [listofResturant, setlistofResturant] = useState([]);

  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setsearchText] = useState("");
  const { loggedInUser, setuserName } = useContext(UserContext);
  const ResturantCardHeigherOrderComponent =
    ResturantCardLessRating(ResturantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  
    const json = await data.json();
    console.log(json,'datata')
    setlistofResturant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRes(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const isoffline = useOnlineStatus();
  if (!isoffline) {
    return <h1>Please check you internet connection</h1>;
  }
  return listofResturant.length === 0 ? (
    //  conditional Rendering
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="search p-4 m-4">
          <input
            type="text"
            placeholder="search"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-blue-500 m-4 rounded-md"
            onClick={() => {
              const filteredResturant = listofResturant.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRes(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4">
          <button
            className="border border-solid border-black bg-gray-100 rounded-md"
            onClick={() => {
              const filteredData = listofResturant.filter((filterdata) => {
                return filterdata.info.avgRating > 4;
              });
              setFilteredRes(filteredData);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="search p-4 m-4">
          <label>UserName: </label>
          <input
            placeholder="enter your name"
            className="border border-solid border-black"
            onChange={(e) => setuserName(e.target.value)}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((Resturant, index) => {console.log(Resturant.info,"res") ;return (
          <Link to={"/resturants/" + Resturant.info.id} key={index}>
            {/* if resturant card is rating less than 4 then we create heigher order component for it  */}
            {Resturant.info?.avgRating < 4 ? (
              <ResturantCardHeigherOrderComponent resobj={Resturant.info} />
            ) : (
              <ResturantCard resobj={Resturant.info} />
            )}
          </Link>
        )})}
      </div>
    </div>
  );
};
export default Body;
