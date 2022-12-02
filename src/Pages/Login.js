import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../store/Cart-Context";
import classes from "./ContactUs.module.css";

function Login() {
  const authCtx = useContext(CartContext);
  const history = useHistory();
  let emailInputRef = useRef("");
  let passwordInputRef = useRef("");

  // const loginCtx=useContext(CartProvider)

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // console.log(enteredEmail,enteredPassword)

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6fDnhYOxjGbDuLGTyrDReR3nx4F7TUD0",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Entered wrong details";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);

        history.replace("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.title}>Login</div>
        <label>Email</label>
        <input
          type="text"
          style={{ width: "80%", backgroundColor: "yellow" }}
          ref={emailInputRef}
          placeholder="test@gmail.com"
        />
        <br />
        <br />
        <label>Password</label>
        <input
          type="text"
          style={{ width: "80%", backgroundColor: "yellow" }}
          ref={passwordInputRef}
        />
        <br />
        <br />
        <button type="submit" style={{ width: "100%" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
