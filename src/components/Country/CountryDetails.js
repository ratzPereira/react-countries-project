import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedCountry from "./DetailedCountry";
import useFetch from "../../hooks/use-fetch";

const CountryDetails = () => {
  const params = useParams();
  const url = `https://restcountries.eu/rest/v2/name/${params.name}?fullText=true`;

  const { data, error, isLoading } = useFetch(url);
  // const [county, setCountry] = useState([]);
  //
  // const fetchCountry = async (url) => {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setCountry(data);
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  //
  // useEffect(() => {
  //   fetchCountry(url);
  // }, [url]);

  if (error) {
    alert(error.message);
  }

  return (
    <div>
      {isLoading && <div className="loading"> </div>}
      {data.map((country) => (
        <DetailedCountry
          name={country.name}
          flag={country.flag}
          capital={country.capital}
          region={country.region}
          population={country.population}
          language={country.languages[0].name}
        />
      ))}
    </div>
  );
};

export default CountryDetails;
