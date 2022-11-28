import React from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";

function ProductDetails() {
  const params = useParams();

  return (
    <div className={classes.details}>
      <h1>{params.ProductName}Product Details</h1>
      <div className={classes.pic}>
        <img
          src="https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874_960_720.jpg"
          alt="img1"
        />

        <img
          src="https://cdn.pixabay.com/photo/2018/03/24/08/56/colorful-3256055_960_720.jpg"
          alt="img2"
        />
      </div>
      <section>150$</section>
      <div className={classes.review}>
        <h2>Review</h2>
        <p>
          “NEO Bankside was privileged to host Jessica Zoob’s powerful and
          indulging “Passion” series in a dedicated exhibition over the summer
          of 2012. The exhibit showcased works brimming with depth and emotion,
          highlighting Jessica’s undoubted talent. ‘Passion’, a 6 panelled
          masterpiece of intensity, colour and mystery was the pinnacle of an
          extraordinary collection, intensified only by the iconic view across
          the Thames to St. Paul’s Cathedral. Jessica’s works are thought
          provoking and serene, powerful and rich. NEO Bankside was very
          honoured to have been able to showcase such a formidable talent.”
          Walter Dalkeith – NEO Bankside
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
