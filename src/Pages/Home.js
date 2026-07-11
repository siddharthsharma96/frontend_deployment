import { useOutletContext } from "react-router-dom";
import "./../Style/home.css";
import Carousel from "../Components/Carousel";
import Card from "../Components/Card";
const Home = () => {
  const { restaurantData, loading } = useOutletContext();
  console.log(restaurantData, loading);

  return (
    <div className="home">
      <Carousel></Carousel>
      <div className="home__card-container">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          restaurantData.map((res) => {
            return <Card key={res._id} res={res} show={true}></Card>;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
