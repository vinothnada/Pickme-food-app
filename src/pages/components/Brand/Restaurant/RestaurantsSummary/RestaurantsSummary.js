import classes from "./RestaurantsSummary.module.scss";
import { useNavigate } from "react-router-dom";

const RestaurantsSummary = () => {

  let navigate = useNavigate(); 

  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite restaurant from our broad selection of available restaurants
      </p>
      <button className={classes.button} onClick={() => navigate('/')}>Log out</button>
      <button className={classes.button} onClick={() => navigate('/orders')}>View Orders</button>
    </section>
  );
};

export default RestaurantsSummary;
