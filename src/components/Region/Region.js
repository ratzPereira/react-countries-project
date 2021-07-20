import React, { useEffect, useState } from "react";
import SingleCountry from "../Country/SingleCountry";
import classes from "./Region.module.css";
import useFetch from "../../hooks/use-fetch";

const Region = (props) => {
  const url = `https://restcountries.eu/rest/v2/region/${props.region}`;

  const { data, error, isLoading } = useFetch(url);

  // const [isLoading, setIsLoading] = useState(true);
  // const [countries, setCountries] = useState([]);

  // const fetchCountries = async (url) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setCountries(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchCountries(url);
  // }, [url]);

  if (error) {
    alert(error.message);
  }

  return (
    <div className={classes.region}>
      <h1>Existing Countries in {props.children}</h1>
      {isLoading && <div className="loading"> </div>}
      {data.map((country) => (
        <SingleCountry
          name={country.name}
          flag={country.flag}
          capital={country.capital}
          region={props.region}
        />
      ))}
    </div>
  );
};

export default Region;
