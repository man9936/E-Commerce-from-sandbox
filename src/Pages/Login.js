import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import CartContext from "../store/Cart-Context";
import classes from "./Login.module.css";

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
            let errorMessage = "Invalid details";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        authCtx.setIsLoggedIn = true;
        history.replace("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <section className={classes.auth}>
        <div className={classes.wrapper}>
          <form onSubmit={submitHandler} className={classes.form}>
            <div>
              <h2>Login</h2>
            </div>
            <div className={classes.control}>
              <label>Email</label>
              <input
                type="text"
                ref={emailInputRef}
                placeholder="xyz@gmail.com"
              />
            </div>
            <br />
            <div className={classes.control}>
              <label>Password</label>
              <input
                type="text"
                ref={passwordInputRef}
                placeholder="min-six-digit"
              />
            </div>
            <br />
            <div className={classes.actions}>
              <button>Login</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
