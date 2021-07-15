import React from "react";
import classes from "./StartingPage.module.css";
import world from "../../assets/world.jpeg";

const StartingPage = () => {
  return (
    <section className={classes.starting}>
      <h1>Get Started!</h1>
      <div className={classes["main-image"]}>
        <img src={world} alt="background" />
      </div>
    </section>
  );
};

export default StartingPage;
