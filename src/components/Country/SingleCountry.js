import classes from "./SingleCountry.module.css";

import React from "react";
import { Link } from "react-router-dom";

const SingleCountry = (props) => {
  return (
    <div className={classes.singleCountry}>
      <h1>{props.name}</h1>
      <h3>{props.capital}</h3>
      <Link to={`/${props.name}`}>
        <img src={props.flag} alt="" />
      </Link>
    </div>
  );
};

export default SingleCountry;
