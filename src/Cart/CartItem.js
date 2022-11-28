import React, { useReducer } from "react";
import classes from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../store/Cart-Context";

const reducer = (state, action) => {
  if (action.type === "INC") {
    return Number(state) + 1;
  }
  if (action.type === "DEC") {
    return Number(state) - 1;
  }
};

export default function CartItem(props) {
  const initialState = props.quantity;

  const cntxt = useContext(CartContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  const onRemove = (id) => {
    cntxt.removeItem(id);
  };

  const decrementHandler = () => {
    dispatch({ type: "DEC" });
  };

  return (
    <li className={classes["cart-item"]}>
      <div className={classes["image-box"]}>
        <img src={props.url} alt="img" height="50px"></img>
      </div>
      <h3 className={classes.title}>Title: {props.title}</h3>
      <div className={classes.summary}>
        <span className={classes.price}>Price: {props.price}</span>
      </div>
      <button onClick={decrementHandler}>-</button>
      <span>{state}</span>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <div className={classes.actions}>
        <button onClick={() => onRemove(props.id)}>x</button>
      </div>
    </li>
  );
}
