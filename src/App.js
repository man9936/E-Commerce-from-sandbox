import React, { useState, useContext, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./store/ProtectedRoute";
import Header from "./Header/Header";
import Header2 from "./Header/Header2";
// import Product from "./Products/Product";
import "./styles.css";
import Cart from "./Cart/Cart";
import CartProvider from "./store/Cart-Provider";
import Home from "./Pages/Home";
import HomeHeader from "./Pages/HomeHeader";
// import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";
import CartContext from "./store/Cart-Context";
import Footer from "./UI/Footer";
import LoadingSpinner from "./Pages/LoadingSpinner";

const Product = React.lazy(() => {
  import("./store");
});

const ContactUs = React.lazy(() => {
  import("./contact");
});

export default function App() {
  const cartCtx = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prevShow) => !prevShow);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {showCart && <Cart onClose={hideCartHandler} />}
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <HomeHeader />
            <Home />
            <Footer />
          </Route>

          <Route path="/store">
            <ProtectedRoute>
              <div>
                <Header2 />
                <Product />
                <Footer />
              </div>
            </ProtectedRoute>
          </Route>

          <Route path="/about">
            <Header2 />
            <About />
            <Footer />
          </Route>
          <Route path="/home">
            <HomeHeader />
            <Home />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header2 />
            <ContactUs />
            <Footer />
          </Route>
          <Route path="/login">
            <Header2 />
            <Login />
            <Footer />
          </Route>
          <Route path="/productdetails/:productName">
            <ProductDetails />
            <Footer />
          </Route>
        </Switch>
      </Suspense>
    </CartProvider>
  );
}
