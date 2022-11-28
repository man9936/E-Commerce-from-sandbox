import React, { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
  items: []
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      alert("Item is already added");
      return { items: state.items };
    } else {
      updatedItems = state.items.concat(action.item);
      return { items: updatedItems };
    }
    // return{ items:updatedItems}
    // return defaultCartState
  }

  let updatedItems;
  if (action.type === "REMOVE") {
    updatedItems = state.items.filter((item) => item.id !== action.id);

    return { items: updatedItems };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
