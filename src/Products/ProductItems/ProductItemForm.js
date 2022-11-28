import React from "react";
import classes from "./ProductItem.module.css";
export default function ProductItemForm(props) {
  return (
    <div className={classes["add-to-cart"]}>
      <button>Add to Cart</button>
    </div>
  );
}
