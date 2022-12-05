import React from "react";
import classes from "./Home.module.css";

const Data = [
  {
    key: "1",
    Date: "Jul 16",
    Place: "DETROIT MI",
    Theatre: "DTE ENERGY MUSIC THEATRE",
  },
  {
    key: "2",
    Date: "Jul 19",
    Place: "TORONTO,ON",
    Theatre: "BUDWEISER STAGE",
  },
  {
    key: "3",
    Date: "Jul 22",
    Place: "BRISTOW, VA",
    Theatre: "JIGGY LUBE LIVE",
  },
  {
    key: "4",
    Date: "Jul 29",
    Place: "PHOENIX, AZ",
    Theatre: "AK-CHIN PAVILION",
  },
  {
    key: "5",
    Date: "AUG 2",
    Place: "LAS VEGAS, NV",
    Theatre: "T-MOBILE ARENA",
  },
  {
    key: "6",
    Date: "AUG 7",
    Place: "CONCORD, CA",
    Theatre: "CONCORD PAVILION",
  },
];

function Home() {
  return (
    <section className={classes.content}>
      <h2>Tours</h2>
      <ul className={classes.list}>
        {Data.map((user) => (
          <li key={user.key} className={classes.items}>
            <span>{user.Date}</span>
            <span>{user.Place}</span>
            <span>{user.Theatre}</span>
            <button style={{ backgroundColor: "teal" }}>BUY TICKET</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
