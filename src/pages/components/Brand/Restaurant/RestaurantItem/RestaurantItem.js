import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RestaurantItem.module.scss";

export default function RestaurantItem({
  id,
  name: restaurant_name,
  description,
  address,
}) {
  let navigate = useNavigate();

  const routeChange = (e, id) => {
    let path = "/food/" + id;
    navigate(path);
  };

  return (
    <li
      key={id}
      className={classes.restaurant}
      onClick={(e) => routeChange(e, id)}
    >
      <div>
        <h3>{restaurant_name}</h3>
        <div className={classes.price}>{description}</div>
        <div className={classes.description}>{address}</div>
      </div>
    </li>
  );
}
