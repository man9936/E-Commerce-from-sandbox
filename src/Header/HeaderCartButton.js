import React, { useContext } from "react";
// import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../store/Cart-Context";

export default function HeaderCartButton(props) {
  const cartctx = useContext(CartContext);
  let quantity = cartctx.items.reduce((curr, item) => {
    return curr + item.quantity;
  }, 0);

  return (
    <div>
      <button className={classes.button} onClick={props.onClick}>
        <span>Cart:- </span>

        <span className={classes.badge}> {quantity}</span>
      </button>
    </div>
  );
}
