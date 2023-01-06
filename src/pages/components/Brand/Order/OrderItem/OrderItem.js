import React, { useContext } from "react";
import classes from "./OrderItem.module.scss";

export default function OrderItem({ id, name, status }) {
  return (
    <li key={id} className={classes.order}>
      <div>
        <h3>{name}</h3>
        <div className={classes.status}></div>
      </div>
      <button type="button">
      {status}
      </button>
    </li>
  );
}
