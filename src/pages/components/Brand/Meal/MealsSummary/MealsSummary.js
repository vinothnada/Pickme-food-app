import classes from "./MealsSummary.module.scss";
import { useNavigate } from "react-router-dom";

const MealsSummary = () => {

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '/hotels'; 
    navigate(path);
  }
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals and enjoy a
        delicious lunch or dinner at home.
      </p>
      <button className={classes.button} onClick={routeChange}>Back to Restaurants</button>
      <button className={classes.button} onClick={() => navigate('/orders')}>View Orders</button>
    </section>
  );
};

export default MealsSummary;
