import React from "react";
// import {BsYoutube, BsSpotify, BsFacebook} from "react-icons/bs"
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h1>The Generics</h1>
      <ul style={{ width: "40%" }}>
        <li>
          <NavLink to="https://www.youtube.com">
            {/* <BsYoutube color='red' size="35px"/> */}
            <span>YouTube</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="https://spotify.com">
            {/* <BsSpotify color='green' size="30px"/> */}
            <span>spotify</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="https://facebook.com">
            {/* <BsFacebook  size="30px"/> */}
            <span>facebook</span>
          </NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
