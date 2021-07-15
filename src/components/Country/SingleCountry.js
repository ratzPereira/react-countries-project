import classes from "./SingleCountry.module.css";

import React from "react";

const SingleCountry = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.capital}</h3>
      <img src={props.flag} alt="" />
    </div>
  );
};

export default SingleCountry;
