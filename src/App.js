import React, { useState, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./Header/Header";
import Header2 from "./Header/Header2";
import Product from "./Products/Product";
import "./styles.css";
import Cart from "./Cart/Cart";
import CartProvider from "./store/Cart-Provider";
import Home from "./Pages/Home";
import HomeHeader from "./Pages/HomeHeader";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";
import CartContext from "./store/Cart-Context";

export default function App() {
  const cartCtx = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prevShow) => !prevShow);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  const ProtectedRoute = ({ children }) => {
    if (!cartCtx.isLoggedin) {
      return <Redirect to="/login" />;
    }

    return children;
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {showCart && <Cart onClose={hideCartHandler} />}
      <Switch>
        <Route path="/" exact>
          <Header2 />
        </Route>

        <Route path="/store">
          <ProtectedRoute>
            <div>
              <Header2 />
              <Product />
            </div>
          </ProtectedRoute>
        </Route>

        <Route path="/about">
          <Header2 />
          <About />
        </Route>
        <Route path="/home">
          <HomeHeader />
          <Home />
        </Route>
        <Route path="/contact">
          <Header2 />
          <ContactUs />
        </Route>
        <Route path="/login">
          <Header2 />
          <Login />
        </Route>
        <Route path="/productdetails/:productName">
          <ProductDetails />
        </Route>
      </Switch>
    </CartProvider>
  );
}
