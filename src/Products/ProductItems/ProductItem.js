import React, { useState,useContext } from "react";
import CartContext from "../../store/Cart-Context";
import classes from "./ProductItem.module.css";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  const cartCtx = useContext(CartContext);


  const addItemToCart = (event) => {
    event.preventDefault();

    const data = {
      title: props.title,
      price: props.price,
      id: props.id,
      url: props.url,
      quantity: props.quantity,
      key: props.id,
    };

    cartCtx.addItem({ ...data, quantity: 1 });

    fetch("https://crudcrud.com/api/72553e7fe0ec4e44ac0c4877161485af/cart", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log("idd", data._id);
        console.log(data.quantity);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <form key={props.id} onSubmit={addItemToCart}>
      <div className={classes.product}>
        <Link to="/productdetails/:productName">
          <h2>{props.title}</h2>

          <div className={classes.product}>
            <img src={props.url} alt="img"></img>
          </div>
        </Link>

        <div className={classes["product-price"]}>${props.price}</div>
        <button type="submit">Add to Cart</button>
      </div>
    </form>
  );
}
