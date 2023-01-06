import classes from "./OrdersSummary.module.scss";
import { useNavigate } from "react-router-dom";

const OrdersSummary = () => {

  let navigate = useNavigate(); 

  const routeChange = () =>{ 
    let path = '/hotels'; 
    navigate(path);
  }
  return (
    <section className={classes.summary}>
      <h2>List Of Orders</h2>
      <button className={classes.button} onClick={routeChange}>Back to Restaurants</button>
    </section>
  );
};

export default OrdersSummary;
