import React, { useReducer } from "react";
import classes from "./CartItem.module.css";

export default function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div className={classes["image-box"]}>
        <img src={props.url} alt="img" height="50px"></img>
      </div>
      <h3 className={classes.title}>Title: {props.title}</h3>
      <div className={classes.summary}>
        <span className={classes.price}>Price: {price}</span>
      </div>
      <button onClick={props.onRemove}>-</button>
      {/* <span>{state}</span> */}
      <button onClick={props.onAdd}>+</button>
      <div className={classes.actions}>
        <button>x</button>
      </div>
    </li>
  );
}
