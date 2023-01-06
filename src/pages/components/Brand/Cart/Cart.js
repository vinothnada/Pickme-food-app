import React, { useContext } from "react";
import {CartContext} from '../../../../context/CartContext'
import classes from "./Cart.module.scss";
import Modal from "../../UI/Modal/Modal";
import CartItem from "../../Brand/Cart/CartItem"

const Cart = () => {
  const ctx = useContext(CartContext);

  return (
    <Modal show={ctx.isOpen} onClose={ctx.onCloseCart}>
      <ul className={classes["cart-items"]}>
        {ctx.items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            itemTotal={item.amount * item.price}
            onAdd={() => ctx.onAddItem({ ...item, amount: 1 })}
            onRemove={() => ctx.onRemoveItem(item.id)}
          ></CartItem>
        ))}
      </ul>
      <div className={classes.total}>
        <label>Final Total </label>
        <label>LKR {ctx.totalAmount.toFixed(2)}</label>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={ctx.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
