import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import CartContext from "../store/Cart-Context";

export default function Header(props) {
  const authCtx = useContext(CartContext);
  return (
    <nav>
      <ul className={classes.testHeader}>
        <NavLink activeClassName={classes.active} to="/home">
          {" "}
          Home{" "}
        </NavLink>

        <NavLink activeClassName={classes.active} to="/store">
          Store
        </NavLink>

        <NavLink activeClassName={classes.active} to="/about">
          About
        </NavLink>
        {!authCtx.isLoggedin && (
          <NavLink activeClassName={classes.active} to="/login">
            Login
          </NavLink>
        )}
        {authCtx.isLoggedin && <button onClick={authCtx.logout}>Logout</button>}
        <NavLink activeClassName={classes.active} to="/contact">
          Contact Us
        </NavLink>

        <div className={classes.shoppingCart}>
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </ul>
      <div>
        <br />
        <br />
        <br />
      </div>
    </nav>
  );
}
