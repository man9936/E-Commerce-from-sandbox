import React from "react";
import { useRef } from "react";
import classes from "./ContactUs.module.css";

function ContactUs() {
  let nameRef = useRef("");
  let emailRef = useRef("");
  let phoneRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const userDetails = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value
    };
    console.log(userDetails);
    const response = await fetch(
      "https://api-react-cc646-default-rtdb.firebaseio.com//users.json",
      {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.title}>Contact us </div>
        <label style={{ margin: "20px" }}>Name: </label>
        <input
          type="text"
          name="name"
          ref={nameRef}
          className={classes.formEntry}
        />
        <br />
        <br />
        <label style={{ margin: "20px" }}>Email Id: </label>
        <input
          type="email"
          name="email"
          ref={emailRef}
          className={classes.formEntry}
        />
        <br />
        <br />
        <label style={{ margin: "20px" }}>Phone No: </label>
        <input
          type="number"
          name="number"
          ref={phoneRef}
          className={classes.formEntry}
        />
        <br />
        <br />
        <button className={classes.submit}>Submit Now</button>
      </form>
    </div>
  );
}

export default ContactUs;
