import React from "react";
import ProductItem from "./ProductItems/ProductItem";
import classes from "./Product.module.css";

const productsArr = [
  {
    id: "1",
    quantity: "1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "2",
    quantity: "1",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "3",
    quantity: "1",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "4",
    quantity: "1",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Product = () => {
  const productItem = productsArr.map((ele) => (
    <ProductItem
      key={ele.id}
      title={ele.title}
      price={ele.price}
      url={ele.imageUrl}
      quantity={ele.quantity}
    />
  ));
  return (
    <section className={classes.product}>
      {/* <h1> Music </h1> */}

      <ul>{productItem}</ul>
    </section>
  );
};

export default Product;
