import Card from "../../../UI/Card/Card.js";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import classes from "./Restaurants.module.scss";
import RestaurantsSummary from "../../Restaurant/RestaurantsSummary/RestaurantsSummary";
import { useEffect } from "react";
import API from "../../../../../util/API.js";

export default function Restaurants(props) {
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async () => {
    try {
      const response = await API.get("/restaurant/getrestaurants");
      setRestaurants(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <RestaurantsSummary />
      <Card className={classes.restaurants}>
        <ul>
          {isLoading && <li>Loading Restaurants, Please wait... </li>}
          {!isLoading &&
            Object.entries(restaurants).map(([key, value]) => (
              <RestaurantItem key={key} id={key} {...value}></RestaurantItem>
            ))}
        </ul>
      </Card>
    </>
  );
}
