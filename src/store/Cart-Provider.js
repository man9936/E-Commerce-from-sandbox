import React from "react";
import { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    let itemsPresent = false;
    const newItemArray = [...items];
    newItemArray.forEach((element, index) => {
      if (item.id === element.id) {
        itemsPresent = true;
        newItemArray[index].quantity =
          Number(item.quantity) + Number(newItemArray[index].quantity);
      }
    });
    if (itemsPresent === false) {
      updateItems([...items, item]);
    } else {
      updateItems(newItemArray);
    }
  };

  const removeItemFromCartHandler = (id) => {
    let hasItem = false;
    const newItemArray = [...items];
    newItemArray.forEach((element, index) => {
      if (id === element.id && element.quantity === 1) {
        hasItem = true;
        const temp = newItemArray.splice(index, 1);
        updateItems(temp);
      } else if (id === element.id) {
        hasItem = true;
        newItemArray[index].quantity = Number(newItemArray[index].quantity) - 1;
      }
    });
    hasItem === false ? updateItems([...items]) : updateItems(newItemArray);
  };
  const intialToken = localStorage.getItem("token");
  const [token, setToken] = useState(intialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);

    localStorage.setItem("token", token);
    console.log(token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    token: token,
    isLoggedin: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
