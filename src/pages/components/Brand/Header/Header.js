import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.scss";
import HeaderCartButton from '../../Brand/Header/HeaderCartButton'

export default function Header(props) {

  let navigate = useNavigate(); 

  const routeChange = () =>{     
    navigate('/hotels');
  }


  return (
    <React.Fragment>
      <div className={classes.header}>
        <h1 onClick={routeChange}>PickMe Food App</h1>
        <HeaderCartButton></HeaderCartButton>
      </div>
      <div className={classes["main-image"]}>
        <img src="/images/meals.jpg" alt="meals"></img>
      </div>
    </React.Fragment>
  );
}
