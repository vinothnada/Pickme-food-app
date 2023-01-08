import Card from "../../../UI/Card/Card.js";
import RestaurantItem from "../RestaurantItem/RestaurantItem";
import classes from "./RestaurantList.module.scss";
import RestaurantsSummary from "../RestaurantsSummary/RestaurantsSummary";
import { useEffect } from "react";
import API from "../../../../../util/API.js";
import { useState } from "react";

export default function RestaurantList(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async () => {
    try {
      setIsLoading(true);
      const response = await API.get("/restaurant/getrestaurants");
      setRestaurants(response.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
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
