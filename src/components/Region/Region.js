import React, { useEffect, useState } from "react";
import SingleCountry from "../Country/SingleCountry";

const Region = (props) => {
  const url = `https://restcountries.eu/rest/v2/region/${props.region}`;

  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  const fetchCountries = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchCountries(url);
  }, [url]);

  return (
    <div>
      <h1>Existing Countries in {props.children}</h1>
      {isLoading && <p>Loading Countries...</p>}
      {countries.map((country) => (
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
