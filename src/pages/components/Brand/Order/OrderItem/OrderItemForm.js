import React, { useRef } from "react";
import classes from "./OrderItemForm.module.scss";
import  Input  from "../../../UI/Input/Input";
// import CartContext from "@context/CartContext";

export default function OrderItemForm(props) {
  const inputRef = useRef();
  const onClickHandler = () => {
    props.onAddToCart(Number(inputRef.current.value));
  };
  return (
    <form className={classes.form}>
      <Input defaultValue="1" min="1" ref={inputRef}></Input>
      <button type="button" onClick={onClickHandler}>
        + Add
      </button>
    </form>
  );
}
