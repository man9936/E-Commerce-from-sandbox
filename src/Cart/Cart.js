import React from "react";
import CartItem from "./CartItem";
import CartContext from "../store/Cart-Context";
import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  let total = 0;
  const cartCtx = useContext(CartContext);

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

  cartCtx.items.forEach((item) => {
    total = total + Number(item.price) * Number(item.quantity);
  });
  total = `$ ${total.toFixed(2)}`;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          url={item.imageUrl}
          quantity={item.quantity}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
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
        <span className={classes.total}>Total Amount</span>
        {total}
      </div>

      <button className={classes["button--alt"]} onClick={purchaseItemHandler}>
        Purchase
      </button>
    </Modal>
  );
};

export default Cart;
