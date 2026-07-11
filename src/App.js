import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";
import { useEffect, useState } from "react";

function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resp = await fetch("http://localhost:9000/api/v1/restaurants");
        const data = await resp.json();
        setRestaurantData(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Outlet
        context={{
          restaurantData,
          loading,
        }}
      ></Outlet>
    </div>
  );
}

export default App;
