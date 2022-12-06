import React, { useReducer } from "react";
import classes from "./CartItem.module.css";

export default function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  const removeItemCrud = () => {
    // props.removeItem(props.id);
    console.log("id", props._id);
    fetch(
      `https://crudcrud.com/api/72553e7fe0ec4e44ac0c4877161485af/cart/${props._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        console.log(res);
        alert("deleted");
        props.removeAllItem();
        props.getProductData();
      })
      .catch((err) => {
        alert(err);
      });
  };

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
      <span>{props.quantity}</span>
      <button onClick={props.onAdd}>+</button>
      <div className={classes.actions}>
        <button onClick={removeItemCrud}>x</button>
      </div>
    </li>
  );
}
