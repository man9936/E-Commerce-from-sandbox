import React, { useState, useEffect, useCallback } from "react";
import CartItem from "./CartItem";
import CartContext from "../store/Cart-Context";
import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(0);

  const purchaseItemHandler = (item) => {
    if (Number(item.quantity) < 1) {
      console.log(item.quantity);
      alert("You have Nothing in Cart , Add some products to purchase !");
    } else {
      console.log(item.quantity);
      alert("Thanks for purchase");
    }
  };

  let hasItem = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const getProductData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://crudcrud.com/api/72553e7fe0ec4e44ac0c4877161485af/cart"
      );
      if (!response.ok) {
        throw new Error("Something went wrong....");
      }

      const data = await response.json();

      setProducts(data);

      const cartProduct = data;
      let tempPrice = 0;
      cartProduct.forEach((product) => {
        tempPrice += product.price * product.quantity;
      });

      setPrice(tempPrice);
      console.log(tempPrice);

      cartCtx.items = data;
      const quantity = data.reduce((currNum, item) => {
        return currNum + item.quantity;
      }, 0);
      ////trying filtering
    } catch (err) {
      console.log(err.message);
    }
    setIsLoading(false);
  }, []);

  const removeAllItem = () => {
    setProducts([]);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {products.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          _id={item._id}
          title={item.title}
          price={item.price}
          url={item.imageUrl}
          quantity={item.quantity}
          onRemove={cartItemRemoveHandler.bind(null, item._id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          getProductData={getProductData}
          removeAllItem={removeAllItem}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div>
        <button onClick={props.onClose}>Close</button>
      </div>
      {cartItems}
      <div>
        <span className={classes.total}>Total Amount</span>${price}
      </div>

      <button className={classes["button--alt"]} onClick={purchaseItemHandler}>
        Purchase
      </button>
    </Modal>
  );
};

export default Cart;
