import { useOutletContext, useParams } from "react-router-dom";
import "./../Style/restaurant.css";
const Restaurant = () => {
  const { restaurantData } = useOutletContext();
  const { id } = useParams();
  const restaurant = restaurantData.find((el) => el._id == id);
  console.log(restaurant);

  return (
    <div className="restaurant">
      {/* <h1>Restaurant Page {restaurant.info.name}</h1> */}
      <div className="restaurant__breadcrumb">
        <span>Home / Noida / {restaurant.name}</span>
      </div>
      <div className="restaurant__container">
        <div className="restaurant__info">
          <p>{restaurant.name}</p>
          <div className="restaurant__services">
            <p>Order Online</p>
            <p>DineOut</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
